import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createApiData, fetchApiData } from "../utiils";
import { warnToast } from "../Components/Toast";
import { useNavigate } from "react-router-dom";

const AddNotification = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [notification, setNotification] = useState({
    total: "ALL",
    sendTo: "", /// enum: ["ADMIN", "USER", "PARTNER", "FRANCHISE-PARTNER", "SUPPORT", "FINANCE"],
    title: "",
    content: "",
    sendVia: "", /// enum: ['FCM', 'SMS', 'EMAIL', 'NOTIFICATION'],
    expireIn: "",
    _id: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotification((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function getUsers() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/profile?userType=USER`
    );
    setAllUsers(data?.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handlenotificationSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: notification?.title,
      total: notification?._id ? "SINGLE" : "ALL",
      sendTo: notification?.sendTo,
      content: notification?.content,
      sendVia: notification?.sendVia,
      expireIn: notification?.expireIn,
    };
    if(notification?._id) formData._id = notification?._id;

    try {
      const response = await createApiData(
        "https://muvit-project.vercel.app/api/v1/admin/notifications",
        formData
      );
      console.log(response);
      setNotification({
        total: "ALL",
        sendTo: "",
        title: "",
        content: "",
        sendVia: "",
        expireIn: "",
        _id: "",
      });
      navigate("/notification");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <div className="promotion_container">
        <div className="promotion_container_split1">
          <p>Create Notification</p>
        </div>
        <div>
          <Form
            className="promotion_container_form"
            onSubmit={handlenotificationSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>Notification Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                value={notification?.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                rows={3}
                placeholder="Enter Description"
                name="content"
                value={notification?.content}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="promotion_container_split_grid">
              <Form.Group>
                <Form.Label>Send Via</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="sendVia"
                  value={notification?.sendVia}
                  onChange={handleChange}
                >
                  <option selected>
                    Select Way
                  </option>
                  <option value="NOTIFICATION">NOTIFICATION</option>
                  <option value="EMAIL">EMAIL</option>
                  <option value="SMS">SMS</option>
                  <option value="FCM">FCM</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Particular User</Form.Label>
                <Form.Select
                  defaultValue="Choose.."
                  name="_id"
                  value={notification?._id}
                  onChange={handleChange}
                >
                  <option selected>Select User</option>
                  {allUsers?.map((data, i) => (
                    <option value={data?._id} key={i}>
                      {data?.user?.firstName + " " + data?.user?.lastName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Specific</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="sendTo"
                  value={notification?.sendTo}
                  onChange={handleChange}
                >
                  <option selected>Select User Type</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="USER">USER</option>
                  <option value="PARTNER">PARTNER</option>
                  <option value="FRANCHISE-PARTNER">FRANCHISE-PARTNER</option>
                  <option value="SUPPORT">SUPPORT</option>
                  <option value="FINANCE">FINANCE</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="date"
                  name="expireIn"
                  value={notification?.expireIn}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="bannerBtn">
              <Button type="submit">Add notification</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddNotification;


import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteApiData, fetchApiData, getDateFromISOString } from "../utiils";


const NotificationPage = () => {
  const [allNotification, setAllNotification] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignRole((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function getAllNotification() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/notifications/user`
    );
    setAllNotification(data?.data);
  }
  console.log(allNotification);

  async function handleDeletePrice(id) {
    const data = await deleteApiData(
      `https://muvit-project.vercel.app/api/v1/admin/notifications/delete/${id}`
    );
    getAllNotification()
  }
  async function handleAllDelete() {
    const data = await deleteApiData(
      `https://muvit-project.vercel.app/api/v1/admin/notifications/delete/all`
    );
    getAllNotification()
  }

  useEffect(() => {
    getAllNotification();
  }, []);

  return (
    <div>
      <div className="dashboard_container_split2">
        <div style={{ display: "flex", justifyContent: "end" , gap:"10px" }}>
          <Button
            style={{ backgroundColor: "#FEBF05", border: "none" }}
            onClick={() => navigate("/notification/add-notification")}
          >
            + Create Notification
          </Button>
          <button
                      onClick={handleAllDelete}
                      style={{
                        backgroundColor: "red",
                        border: "none",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      All Delete 
                    </button>
        </div>
        <div></div>
        <div className="mt-3" style={{ height: "70vh", overflowY: "scroll" }}>
          <Table style={{ textAlign: "center" }}>
            <thead>
              <tr style={{ border: "none" }}>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    borderRadius: "12px 0 0 12px",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  User Name
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Title
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Send Via
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Expiry Date
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Content
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allNotification?.map((item, i) => (
                <tr
                  key={i}
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <td style={{ border: "none", width: "100px" }}>
                    {item?.recipient?.fullName}
                  </td>
                  <td style={{ border: "none" }}>{item?.title}</td>
                  <td style={{ border: "none", width: "60px" }}>
                    {item?.sendVia}
                  </td>

                  <td style={{ border: "none", width: "60px" }}>
                    {getDateFromISOString(item?.expireIn)}
                  </td>
                  <td style={{ border: "none", width: "200px" }}>
                    {item?.content}
                  </td>
                  <td style={{ border: "none", width: "60px" }}>
                    {item?.status}
                  </td>
                  <td style={{ border: "none" }}>
                    <button
                      onClick={() => handleDeletePrice(item?._id)}
                      style={{
                        backgroundColor: "red",
                        border: "none",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;

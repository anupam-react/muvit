import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createApiData, fetchApiData } from "../utiils";
import { warnToast } from "../Components/Toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSubAdmin = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    userType: "SUB-ADMIN", ///   enum: ["ADMIN", "USER", "PARTNER", "SUB-ADMIN"],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !user?.email ||
      !user?.password ||
      !user?.fullName ||
      !user?.mobileNumber
    ) {
      return warnToast("Fill all the fields");
    }

    const formData = {
      fullName: user?.fullName,
      mobileNumber: user?.mobileNumber,
      email: user?.email,
      password:user?.password,
      userType: "SUB-ADMIN",
    };

    try {
      const response = await axios.post(
        "https://muvit-project.vercel.app/api/v1/admin/partner/registration",
        formData
      );
      navigate(`/subadmin`);
      successToast("Add Successfully");
      console.log(response?.data);
      // sessionStorage.setItem("userId", response?.data?.data?._id);
    
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <div>
      {" "}
      <div className="promotion_container">
        <div className="promotion_container_split1">
          <p>Create Sub Admin</p>
        </div>
        <div>
          <Form onSubmit={handleSubmit} className="promotion_container_form">
            <Form.Group className="mb-2">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={user?.fullName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2 ">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={user?.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2 ">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="mobileNumber"
                value={user?.mobileNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2 ">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={user?.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="login_page_btn" type="submit">
              ADD
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddSubAdmin;

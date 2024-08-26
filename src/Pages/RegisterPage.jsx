import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { successToast, warnToast } from "../Components/Toast";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !firstName || !phone) {
      return warnToast("Fill all the fields");
    }
    if (password !== confirmPass) {
      return warnToast("Password and confirm password not match");
    }

    console.log(email, password);
    const formData = {
      fullName: firstName,
      mobileNumber: phone,
      email,
      password
    };

    try {
      const response = await axios.post(
        "https://muvit-project.vercel.app/api/v1/admin/registration",
        formData
      );
      successToast("Regsiter Successfully");
      console.log(response?.data);
      // sessionStorage.setItem("userId", response?.data?.data?._id);
      navigate("/");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <div>
      <div className="login_container">
        <div className="login_form_container">
          <div className="left_side_form_container2">
            <img
              src="/Images/LoginPage/logo-image.png"
              alt="logo"
              style={{ width: "150px" }}
            />
          </div>

          <div>
            <hr />
            <Form onSubmit={handleSubmit} className="register_form_loginPage">
              <Form.Group className="mb-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
           
              <Form.Group className="mb-2 ">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2 ">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2 ">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text
                    onClick={toggleShowPassword}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                  <InputGroup.Text
                    onClick={toggleShowConfirmPassword}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                    />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Button className="login_page_btn" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

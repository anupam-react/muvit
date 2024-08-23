import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate, useParams } from "react-router-dom";
import { createApiData } from "../utiils";
const ForgotPassword = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
 const {id} = useParams()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePass = async (e) => {
    e.preventDefault();

    const formData = {
      otp:verificationCode,
      newPassword: password,
      confirmPassword: confirmPassword
    };


    try {
      const response = await createApiData(
        `https://muvit-project.vercel.app/api/v1/admin/changePassword/${id}`,
        formData
      );
      navigate("/")
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="login_container">
        <div className="login_form_container">
          <div className="left_side_form_container">
            <img src="/Images/LoginPage/logo-image.png" alt="logo" />
          </div>
          <hr />
          <div className="right_side_form_container">
            <p>Set New Password</p>
            <p>
              Use combination of uppercase letter(XYZ), lowercase letter(xyz),
              numbers(1234) and symbols(!@&).{" "}
            </p>
          </div>
          <div>
            <hr />
            <Form className="login_form_loginPage" onSubmit={handleChangePass}>
              <Form.Group className="mb-3 ">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    placeholder="Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                <Form.Label>Otp</Form.Label>
                  <Form.Control
                    type="text"
                    value={verificationCode}
                    placeholder="Password"
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
              </Form.Group>

              <Button
               
                className="login_page_btn"
                 type="submit"
              >
                <div className="login_page_btn_text">
                  <span>SET PASSWORD</span>
                  <span>
                    <Icon
                      icon="ph:arrow-right-thin"
                      className="login_page_btn_icon"
                    />
                  </span>
                </div>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

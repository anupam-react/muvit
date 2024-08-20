import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            <Form className="login_form_loginPage">
              <Form.Group className="mb-3 ">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    placeholder="Password"
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

              <Button
                onClick={() => navigate("/forgotpassword/email")}
                className="login_page_btn"
                // type="submit"
              >
                <p className="login_page_btn_text">
                  <span>SET PASSWORD</span>
                  <span>
                    <Icon
                      icon="ph:arrow-right-thin"
                      className="login_page_btn_icon"
                    />
                  </span>
                </p>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

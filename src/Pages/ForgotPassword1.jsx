import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
const ForgotPassword1 = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <div className="login_container">
        <div className="login_form_container">
          <div className="left_side_form_container">
            <img src="/Images/LoginPage/logo-image.png" alt="logo" />
          </div>
          <hr />
          <div className="right_side_form_container">
            <p>Enter Mobile or Email</p>
            <p>You'll receive a verification code shortly.</p>
          </div>
          <div>
            <hr />
            <Form className="login_form_loginPage">
              <Form.Group className="mb-3 ">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center justify-content-center">
                <hr className="custom-hr" />
                <span className="custom-span">Or</span>
                <hr className="custom-hr" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Button className="login_page_btn" onClick={() => navigate("/forgotpassword/verification")} >
                <p className="login_page_btn_text">
                  <span>NEXT</span>
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

export default ForgotPassword1;

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
const ForgotPassword2 = () => {
  const [verificationCode, setVerificationCode] = useState("");
  return (
    <div>
      <div className="login_container">
        <div className="login_form_container">
          <div className="left_side_form_container">
            <img src="/Images/LoginPage/logo-image.png" alt="logo" />
          </div>
          <hr />
          <div className="right_side_form_container">
            <p>Enter Verification Code</p>
            <p>Verification code sent to your mobile or email.</p>
          </div>
          <div>
            <hr />
            <Form className="login_form_loginPage">
              <Form.Group className="mb-3">
                <Form.Label>Verification Code </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </Form.Group>

              <Button className="mt-5 login_page_btn" type="submit">
                <p className="login_page_btn_text">
                  <span>SEND CODE</span>
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

export default ForgotPassword2;

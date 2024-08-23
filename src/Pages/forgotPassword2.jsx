import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { createApiData } from "../utiils";
const ForgotPassword2 = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  const handleVerifyPass = async (e) => {
    e.preventDefault();

    const formData = {
      otp: verificationCode
    };
    if(mobile) formData.mobileNumber = mobile;
    if(email) formData.email = email;

    try {
      const response = await createApiData(
        "https://muvit-project.vercel.app/api/v1/admin/forgot/Verifyotp",
        formData
      );
      console.log(response);
      navigate(`/forgotpassword/${response?.data?.userId}`)

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
            <p>Enter Verification Code</p>
            <p>Verification code sent to your mobile or email.</p>
          </div>
          <div>
            <hr />
            <Form className="login_form_loginPage" onSubmit={handleVerifyPass}>
            <Form.Group className="mb-3 ">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  value={mobile}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Verification Code </Form.Label>
                <Form.Control
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </Form.Group>

              <Button className="mt-5 login_page_btn" type="submit">
                <div className="login_page_btn_text">
                  <span>SEND CODE</span>
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

export default ForgotPassword2;

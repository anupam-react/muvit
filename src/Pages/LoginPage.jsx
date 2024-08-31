import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import InitialPage from "./InitialPage";
import { errorToast, successToast } from "../Components/Toast";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubAdmin , setIsSubAdmin] = useState(false)
  const navigate = useNavigate();
  const [initialPage, setInitialPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialPage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return errorToast("Fill all the fields");
    }

    const formData = {
      email,
      password,
    };
  if(!isSubAdmin){

    try {
      const response = await axios.post(
        "https://muvit-project.vercel.app/api/v1/admin/login",
        formData,
      );
      successToast("LogIn Successfully");
      sessionStorage.setItem("token", response?.data?.accessToken);
      navigate("/dashboard");
     
    } catch (error) {
      console.log(error);
      errorToast("Wrong email or password");
      return error;
    }
  }else{
    try {
      const response = await axios.post(
        "https://muvit-project.vercel.app/api/v1/admin/signinSubAdmin",
        formData,
      );
      successToast("LogIn Successfully");
      sessionStorage.setItem("token", response?.data?.accessToken);
      navigate("/dashboard");
     
    } catch (error) {
      console.log(error);
      errorToast("Wrong email or password");
      return error;
    } 
  }
  };
  return (
    <div>
      {initialPage ? (
        <InitialPage />
      ) : (
        <div className="login_container">
          <div className="login_form_container">
            <div className="left_side_form_container">
              <img src="/Images/LoginPage/logo-image.png" alt="logo" />
            </div>
            <hr />
            <div className="right_side_form_container">
              <p>Welcome to Muvit!</p>
              <p>Please log-in your account</p>
            </div>
            <div style={{display:"flex" , justifyContent:"center" , gap:"20px"}}>
            <button onClick={()=>{setIsSubAdmin(false)}} className={isSubAdmin ? "nonActive-button" : "active-button"} >Admin</button>
            <button onClick={()=>{setIsSubAdmin(true)}} className={isSubAdmin ? "active-button" : "nonActive-button"}>SubAdmin</button>
            </div>
            <div>
              <hr />
              <Form onSubmit={handleSubmit} className="login_form_loginPage">
                <Form.Group className="mb-3 ">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
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
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <span>
                    <Form.Check type="checkbox" label="Remember me" />
                  </span>
                  <span
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/forgotpassword/email")}
                  >
                    <p>Forgot Password?</p>
                  </span>
                </div>
                <Button className="login_page_btn" type="submit">
                  Login
                </Button>
          {!isSubAdmin && <div onClick={()=> navigate('/register')} style={{display:"flex" , justifyContent:"center" , cursor:"pointer"}}>Don't Have An Account?<span style={{color:"#febf05"}}>Sign Up Here</span>  </div>}
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

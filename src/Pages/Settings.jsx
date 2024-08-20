import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import HOC from "../Components/MainComponents/HOC";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isEdit, setIsEdit] = useState(false);
  const initialContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  const [content, setContent] = useState(initialContent);

  return (
    <div>
      <div className="admin-profile">
        <div className="admin-profile-header">
          <p
            onClick={() => navigate("/setting/privacy-policy")}
            style={{
              color:
                pathname === "/setting/privacy-policy" ? "white" : "#202224",
              padding:
                pathname === "/setting/privacy-policy" ? "1rem 2rem" : "0",
              backgroundColor:
                pathname === "/setting/privacy-policy" ? "#FEBF05" : "white",
              borderRadius:
                pathname === "/setting/privacy-policy" ? "10px" : "0",
            }}
          >
            Privacy Policy
          </p>
          <p
            onClick={() => navigate("/setting/contact-us")}
            style={{
              color: pathname === "/setting/contact-us" ? "white" : "#202224",
              padding: pathname === "/setting/contact-us" ? "1rem 2rem" : "0",
              backgroundColor:
                pathname === "/setting/contact-us" ? "#FEBF05" : "white",
              borderRadius: pathname === "/setting/contact-us" ? "10px" : "0",
            }}
          >
            Contact Us
          </p>
          <p
            onClick={() => navigate("/setting/admin")}
            style={{
              color: pathname === "/setting/admin" ? "white" : "#202224",
              padding: pathname === "/setting/admin" ? "1rem 2rem" : "0",
              backgroundColor:
                pathname === "/setting/admin" ? "#FEBF05" : "white",
              borderRadius: pathname === "/setting/admin" ? "10px" : "0",
            }}
          >
            Admin Settings
          </p>
          <p
            onClick={() => navigate("/setting/payment")}
            style={{
              color: !pathname === "/setting/payment" ? "white" : "#202224",
              padding: !pathname === "/setting/payment" ? "1rem 2rem" : "0",
              backgroundColor:
                !pathname === "/setting/payment" ? "#FEBF05" : "white",
              borderRadius: !pathname === "/setting/payment" ? "10px" : "0",
            }}
          >
            Payment Details
          </p>
        </div>
        <div>
          {pathname === "/setting/privacy-policy" ? (
            <div>
              <div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#202224",
                  }}
                >
                  Lorem Ipsum{" "}
                  <span>
                    <Icon
                      icon="material-symbols-light:edit-outline"
                      width="1.2rem"
                      height="1.2rem"
                      style={{ color: "gray", cursor: "pointer" }}
                      onClick={() => setIsEdit(!isEdit)}
                    />
                  </span>
                </p>
              </div>
              <div className="SettingParagraph">
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={16}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      readOnly={!isEdit}
                    />
                  </Form.Group>
                </Form>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet
                  Consectetur adipiscing elitsed Do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua Ut enim ad minim veniam Oquis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Update
                </p> */}
              </div>
              {isEdit && (
                <div className="setting_edit_btn">
                  <Button>Update</Button>
                </div>
              )}
            </div>
          ) : pathname === "/setting/contact-us" ? (
            <div>
              <div className="dashboard_container_split2">
                <div>
                  <p
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#202224",
                    }}
                  >
                    Contact Details{" "}
                    <span>
                      <Icon
                         onClick={() => setIsEdit(!isEdit)}
                        icon="material-symbols-light:edit-outline"
                        width="1.2rem"
                        height="1.2rem"
                        style={{ color: "gray", cursor: "pointer" }}
                      />
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  <Form style={{ color: "#909091" }} className="setting_form">
                    {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        readOnly={!isEdit}
                        type="text"
                        placeholder="Enter Address"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        readOnly={!isEdit}
                        placeholder="company123@gmail.com"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        readOnly={!isEdit}
                        type="text"
                        placeholder="www.website.com"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        readOnly={!isEdit}
                        type="text"
                        placeholder="www.website.com"
                      />
                    </Form.Group>
                    {isEdit && (
                      <div className="setting_edit_btn">
                        <Button>Update</Button>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Settings;

import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { createApiData, fetchApiData, updateApiData } from "../utiils";

const Settings = () => {
  const [contact, setContact] = useState({
    mobileNumber: "",
    email: "",
    address: "",
    website: "",
    website1: "",
    desc: "",
  });

  const [policyHeader, setPolicyHeader] = useState("");
  const [legalContent, setLegalContent] = useState("");
  const [taxAmount, setTaxAmount] = useState("");
  const [policy, setPolicy] = useState({});
  const [legal, setLegal] = useState({});
  const [tax, setTax] = useState({});

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function getContact() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/call-us"
    );
    setContact(data?.data[0]);
  }

  async function getPolicy() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/privacy"
    );
    setPolicy(data?.data[0]);
  }

  async function getLegal() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/Legal"
    );
    setLegal(data?.data[0]);
  }

  async function getTax() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/tax-amount"
    );
    setTax(data?.data[0]);
  }

  useEffect(() => {
    getContact();
    getPolicy();
    getLegal();
    getTax();
  }, []);

  const handleContact = async (e) => {
    e.preventDefault();

    const formData = {
      mobileNumber: contact?.mobileNumber,
      email: contact?.email,
      address: contact?.address,
      website: contact?.website,
      website1: contact?.website1,
      desc: contact?.desc,
    };
    try {
      if (!contact?._id) {
        const response = await createApiData(
          "https://muvit-project.vercel.app/api/v1/admin/call/us",
          formData
        );
        console.log(response);
      } else {
        await updateApiData(
          `https://muvit-project.vercel.app/api/v1/admin/call-us/${contact?._id}`,
          formData
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePolicy = async (e) => {
    e.preventDefault();

    const formData = {
      header: policyHeader || policy?.header,
    };
    try {
      if (!policy?._id) {
        const response = await createApiData(
          "https://muvit-project.vercel.app/api/v1/admin/privacy",
          formData
        );
        console.log(response);
      } else {
        await updateApiData(
          `https://muvit-project.vercel.app/api/v1/admin/privacy/${policy?._id}`,
          formData
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLegal = async (e) => {
    e.preventDefault();

    const formData = {
      content: legalContent || legal?.header,
    };
    try {
      if (!legal?._id) {
        const response = await createApiData(
          "https://muvit-project.vercel.app/api/v1/admin/Legal",
          formData
        );
        console.log(response);
      } else {
        await updateApiData(
          `https://muvit-project.vercel.app/api/v1/admin/Legal/${legal?._id}`,
          formData
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleTax = async (e) => {
    e.preventDefault();

    const formData = {
      percentage: taxAmount || tax?.percentage,
    };
    try {
      if (!tax?._id) {
        const response = await createApiData(
          "https://muvit-project.vercel.app/api/v1/admin/tax-amount",
          formData
        );
        console.log(response);
      } else {
        await updateApiData(
          `https://muvit-project.vercel.app/api/v1/admin/tax-amount/${tax?._id}`,
          formData
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            onClick={() => navigate("/setting/legal")}
            style={{
              color: pathname === "/setting/legal" ? "white" : "#202224",
              padding: pathname === "/setting/legal" ? "1rem 2rem" : "0",
              backgroundColor:
                pathname === "/setting/legal" ? "#FEBF05" : "white",
              borderRadius: pathname === "/setting/legal" ? "10px" : "0",
            }}
          >
            Legal
          </p>
          <p
            onClick={() => navigate("/setting/tax")}
            style={{
              color: pathname === "/setting/tax" ? "white" : "#202224",
              padding: pathname === "/setting/legal" ? "1rem 2rem" : "0",
              backgroundColor:
                pathname === "/setting/tax" ? "#FEBF05" : "white",
              borderRadius: pathname === "/setting/tax" ? "10px" : "0",
            }}
          >
            Tax Amount
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
                  Privacy Policy
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
                <Form onSubmit={handlePolicy}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      type="text"
                      rows={16}
                      value={policyHeader || policy?.header}
                      onChange={(e) => setPolicyHeader(e.target.value)}
                      readOnly={!isEdit}
                    />
                  </Form.Group>
                  {isEdit && (
                    <div className="setting_edit_btn">
                      <Button type="submit">Update</Button>
                    </div>
                  )}
                </Form>
              </div>
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
                  <Form
                    onSubmit={handleContact}
                    style={{ color: "#909091" }}
                    className="setting_form"
                  >
                    {" "}
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        readOnly={!isEdit}
                        type="text"
                        placeholder="Enter Address"
                        name="address"
                        value={contact?.address}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        readOnly={!isEdit}
                        placeholder="company123@gmail.com"
                        name="email"
                        value={contact?.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        readOnly={!isEdit}
                        type="text"
                        placeholder="www.website.com"
                        name="website"
                        value={contact?.website}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Website1</Form.Label>
                      <Form.Control
                        readOnly={!isEdit}
                        type="text"
                        placeholder="www.website.com"
                        name="website1"
                        value={contact?.website1}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {isEdit && (
                      <div className="setting_edit_btn">
                        <Button type="submit">Update</Button>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          ) : pathname === "/setting/legal" ? (
            <div>
              <div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#202224",
                  }}
                >
                  Legal
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
                <Form onSubmit={handleLegal}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      type="text"
                      rows={16}
                      value={legalContent || legal?.content}
                      onChange={(e) => setLegalContent(e.target.value)}
                      readOnly={!isEdit}
                    />
                  </Form.Group>
                  {isEdit && (
                    <div className="setting_edit_btn">
                      <Button type="submit">Update</Button>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          ) : pathname === "/setting/tax" ? (
            <div>
              <div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#202224",
                  }}
                >
                  Tax Amount
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
                <Form onSubmit={handleTax}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      type="text"
                      value={taxAmount || tax?.percentage}
                      onChange={(e) => setTaxAmount(e.target.value)}
                      readOnly={!isEdit}
                    />
                  </Form.Group>
                  {isEdit && (
                    <div className="setting_edit_btn">
                      <Button type="submit">Update</Button>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Settings;

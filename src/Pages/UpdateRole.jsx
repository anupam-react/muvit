import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { fetchApiData, updateApiData } from "../utiils";
import { successToast } from "../Components/Toast";

const UpdateRole = () => {
  const [role, setRole] = useState({
    isDashboard: false,
    isPromotion: false,
    isBooking: false,
    isNotification: false,
    isfaq: false,
    isTransction: false,
  });
  const [allTypes, setAllTypes] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  async function getType() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/searchVechile`
    );
    setAllTypes(data?.data?.docs);
  }

  useEffect(() => {
    getType();
  }, []);

  async function getSinglePr0file() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/profile/${id}`
    );
    const checkrole = {}
    checkrole.isDashboard = data?.data?.user?.isDashboard
    checkrole.isBooking = data?.data?.user?.isBooking
    checkrole.isNotification = data?.data?.user?.isNotification
    checkrole.isTransction = data?.data?.user?.isTransction
    checkrole.isPromotion = data?.data?.user?.isPromotion
    checkrole.isfaq = data?.data?.user?.isfaq

    console.log( checkrole)
    setRole(checkrole);
  }
  console.log();

  useEffect(() => {
    getSinglePr0file();
  }, [id]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setRole((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      isDashboard: role?.isDashboard,
    isPromotion: role?.isPromotion,
    isBooking: role?.isBooking,
    isNotification: role?.isNotification,
    isfaq: role?.isfaq,
    isTransction: role?.isTransction,
 
    };

    try {
      const response = await updateApiData(
        `https://muvit-project.vercel.app/api/v1/admin/users/${id}/roles`,
        data
      );
      console.log(response);
    navigate('/subadmin')
    successToast("Update Role Successfully");
  
    } catch (error) {
      console.log(error);
    }
    // Handle form submission logic here
  };

  return (
    <div>
      <div>
        <div className="mb-5 mt-2 dashboard_container_split_totals2 ">
          <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
            <span
             
              style={{ cursor: "pointer" }}
            >
              
            </span>
            <span style={{ color: "#A6A7A7" }}>Update Role</span>
          </span>
        </div>
        <div></div>{" "}
        <div className="promotion_container">
          <div>
            <Form className="promotion_container_form" onSubmit={handleSubmit}>
            <div className="promotion_container_split_grid">
              <Form.Group className="mb-3">
               
                <Form.Check
                   type="checkbox"
                   label="Dashboard"
                  name="isDashboard"
                 checked={role?.isDashboard}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Check
                   type="checkbox"
                   label="Booking"
                  name="isBooking"
                 checked={role?.isBooking}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Check
                   type="checkbox"
                   label="Promotion"
                  name="isPromotion"
                 checked={role?.isPromotion}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Check
                   type="checkbox"
                   label="Faq"
                  name="isfaq"
                 checked={role?.isfaq}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Check
                   type="checkbox"
                   label="Notification"
                  name="isNotification"
                 checked={role?.isNotification}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Check
                   type="checkbox"
                   label="Transaction"
                  name="isTransction"
                 checked={role?.isTransction}
                  onChange={handleChange}
                />
              </Form.Group>
            
              </div>

              <div className="bannerBtn">
                <Button type="submit">Update Role</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRole;

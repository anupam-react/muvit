import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { createApiData, fetchApiData, updateApiData } from "../../utiils";

const UpdateVehiclePrice = () => {
  const [vechicle, setVehicle] = useState({
    vechileType: "",
    base: "",
    minute: "",
    mile: "",
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

  async function getSinglePrice() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/vechile-price/${id}`
    );
    setVehicle(data?.data);
  }
  console.log();

  useEffect(() => {
    getSinglePrice();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      vechileType: vechicle?.vechileType?._id || vechicle?.vechileType,
      base: vechicle?.base,
      minute: vechicle?.minute,
      mile: vechicle?.mile,
    };

    try {
      const response = await updateApiData(
        `https://muvit-project.vercel.app/api/v1/admin/vechile-price/${id}`,
        data
      );
      console.log(response);
      setVehicle({
        vechileType: "",
        base: "",
        minute: "",
        mile: "",
      });
      navigate("/dashboard/vehicle-price");
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
              onClick={() => navigate("/dashboard/vehicle-price")}
              style={{ cursor: "pointer" }}
            >
              <Icon
                icon="solar:alt-arrow-left-linear"
                width="1.2rem"
                height="2.2rem"
                style={{ color: "#202224", fontWeight: "bold" }}
              />
            </span>
            <span style={{ color: "#A6A7A7" }}>Add Vehicle Price</span>
          </span>
        </div>
        <div></div>{" "}
        <div className="promotion_container">
          <div>
            <Form className="promotion_container_form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Vehicle Type</Form.Label>
                <select
                  id="booking"
                  className="input-field"
                  name="vechileType"
                  value={vechicle?.vechileType}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Choose Type
                  </option>
                  {allTypes?.map((data, i) => (
                    <option value={data?._id} >{data?.name}</option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Base Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Base Price"
                  name="base"
                  value={vechicle?.base}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Minute</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Minute"
                  name="minute"
                  value={vechicle?.minute}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mile</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Mile"
                  name="mile"
                  value={vechicle?.mile}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="bannerBtn">
                <Button type="submit">Update Price</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateVehiclePrice;

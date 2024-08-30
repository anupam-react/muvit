import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { fetchApiData, updateApiData } from "../../utiils";

const UpdateVehicleType = () => {
  const [vechicle, setVehicle] = useState({
    name: "",
    image: "",
    vechileId: "",
    driverName: "",
    driverEmail: "",
    driverMobile: "",
    driverAssignedId: "",
    vechileImage: "",
  });
  const [isNextPage, setIsNextPage] = useState(false);
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerImage1, setBannerImage1] = useState(null);
  const fileInputRef = useRef(null);
  const fileInputRef1 = useRef(null);
  const navigate = useNavigate();

  const {id} = useParams()

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setVehicle((prevData) => ({
        ...prevData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    } else {
      setVehicle((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  async function getSingleType() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/VechileType/${id}`
    );
    setVehicle(data?.data);
  }
 console.log()

  useEffect(()=>{
    getSingleType()
  },[id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", vechicle?.name);
    data.append("image", vechicle?.image);
    data.append("vechileImage", vechicle?.vechileImage);
    data.append("vechileId", vechicle?.vechileId);
    data.append("driverName", vechicle?.driverName);
    data.append("driverEmail", vechicle?.driverEmail);
    data.append("driverMobile", vechicle?.driverMobile);
    data.append("driverAssignedId", vechicle?.driverAssignedId);
    data.append("status", true);

    try {
      const response = await updateApiData(
        `https://muvit-project.vercel.app/api/v1/admin/VechileType/${vechicle?._id}`,
        data
      );
      console.log(response);
      setVehicle({
        name: "",
        image: "",
        vechileId: "",
        driverName: "",
        driverEmail: "",
        driverMobile: "",
        driverAssignedId: "",
        vechileImage: "",
      });
      navigate('/dashboard/vehicle-type')
    } catch (error) {
      console.log(error);
    }
    // Handle form submission logic here
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setVehicle((prevData) => ({
      ...prevData,
      image: file,
    }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setVehicle((prevData) => ({
      ...prevData,
      vechileImage: file,
    }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      {isNextPage ? (
        <div>
          <div className="mb-5 mt-2 dashboard_container_split_totals2 ">
            <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
              <span
                onClick={() => setIsNextPage(false)}
                style={{ cursor: "pointer" }}
              >
                <Icon
                  icon="solar:alt-arrow-left-linear"
                  width="1.2rem"
                  height="2.2rem"
                  style={{ color: "#202224", fontWeight: "bold" }}
                />
              </span>
              <span style={{ color: "#A6A7A7" }}>Assign Driver</span>
            </span>
            <span>
              <p
                style={{
                  color: "rgb(166, 167, 167)",
                  paddingRight: "13rem",
                  fontSize: ".8rem",
                }}
              >
                <span>{vechicle?.name}</span> <br />
                <span>{vechicle?.vechileId}</span>
              </p>
            </span>
          </div>
          <div></div>{" "}
          <div className="promotion_container">
            <div>
              <Form
                className="promotion_container_form"
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Driver Name"
                    name="driverName"
                    value={vechicle?.driverName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Driver Email ID"
                    name="driverEmail"
                    value={vechicle?.driverEmail}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile No."
                    name="driverMobile"
                    value={vechicle?.driverMobile}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Assigned ID"
                    name="driverAssignedId"
                    value={vechicle?.driverAssignedId}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="bannerBtn">
                  <Button type="submit">Update vehicle</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-5 mt-2 dashboard_container_split_totals2">
            <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
              <span
                onClick={() => navigate("/dashboard/vehicle-type")}
                style={{ cursor: "pointer" }}
              >
                <Icon
                  icon="solar:alt-arrow-left-linear"
                  width="1.2rem"
                  height="2.2rem"
                  style={{ color: "#202224", fontWeight: "bold" }}
                />
              </span>
              <span style={{ color: "#A6A7A7" }}>Update Vehicle Type</span>
            </span>
          </div>
          <div></div>{" "}
          <div className="promotion_container">
            <div>
              <Form className="promotion_container_form">
                <div className="promotion_container_split_grid mb-3">
                  <Form.Group>
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Vehicle Type"
                      name="name"
                      value={vechicle?.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Vehicle ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Vehicle ID"
                      name="vechileId"
                      value={vechicle?.vechileId}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Verification</Form.Label>
                  <div
                    className="promotion_container_bannerImage"
                    onClick={() => fileInputRef.current.click()}
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
                    {bannerImage || vechicle?.vechileImage ? (
                      <img
                        src={bannerImage || vechicle?.image}
                        alt="Banner Preview"
                        className="banner-preview"
                      />
                    ) : (
                      <>
                        <Icon
                          icon="solar:upload-line-duotone"
                          width="2.2rem"
                          height="2.2rem"
                          style={{ color: "#202224" }}
                        />
                        <p>upload registration certificate</p>
                      </>
                    )}
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Vehicle Image</Form.Label>
                  <div
                    className="promotion_container_bannerImage"
                    onClick={() => fileInputRef1.current.click()}
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      ref={fileInputRef1}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload1}
                    />
                    {bannerImage1 || vechicle?.vechileImage ? (
                      <img
                        src={bannerImage1 || vechicle?.vechileImage}
                        alt="Banner Preview"
                        className="banner-preview"
                      />
                    ) : (
                      <>
                        <Icon
                          icon="solar:upload-line-duotone"
                          width="2.2rem"
                          height="2.2rem"
                          style={{ color: "#202224" }}
                        />
                        <p>upload vehicle image</p>
                      </>
                    )}
                  </div>
                </Form.Group>

                <div className="bannerBtn">
                  <Button type="submit" onClick={() => setIsNextPage(true)}>
                    Next
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateVehicleType;

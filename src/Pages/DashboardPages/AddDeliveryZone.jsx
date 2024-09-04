import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import HOC from "../../Components/MainComponents/HOC";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../../utiils";
import { warnToast } from "../../Components/Toast";

const AddDeliveryZone = () => {
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [assignProfile, setAssignProfile] = useState("PARTNER");
  const [vehicleType, setVehicleType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [id, setId] = useState("");
  const [allTypes, setAllTypes] = useState([]);

  const fileInputRef = useRef(null);
  const [isNextPage, setIsNextPage] = useState(false);
  const navigate = useNavigate();

  const countries = [
    "USA",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "China",
    "Japan",
    "Brazil",
    "South Africa",
    "Mexico",
    "Russia",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Norway",
    "Switzerland",
    "New Zealand",
    // Add more countries as needed
  ];

  async function getType() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/VechileType"
    );
    setAllTypes(data?.data);
  }
  console.log(allTypes);

  useEffect(() => {
    getType();
  }, []);

  const handleDeliveryZoneSubmit = async (e) => {
    e.preventDefault();

    if (
      !street ||
      !city ||
      !state ||
      !country ||
      !pinCode ||
      !assignProfile ||
      !vehicleType ||
      !name ||
      !email ||
      !mobile ||
      !id
    ) {
      return warnToast("Please Fill All The Fields");
    }

    const formData = {
      street: street,
      city: city,
      state: state,
      country: country,
      pincode: pinCode,
      assignProfile: assignProfile, //   enum: ["PARTNER", "SUB-ADMIN", "HELPER", "COURIER"],
      vechileType: vehicleType,
      name: name,
      email: email,
      mobileNumber: mobile,
      Id: id,
      status: false,
    };
    try {
      const response = await createApiData(
        "https://muvit-project.vercel.app/api/v1/admin/delivery-zones",
        formData
      );
      console.log(response);
      navigate('/dashboard/delivery-zone')
      setStreet("");
      setState("");
      setCity("");
      setCountry("");
      setPinCode("");
      setAssignProfile("");
      setVehicleType("");
      setName("");
      setEmail("");
      setMobile("");
      setId("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isNextPage ? (
        <div>
          <div className="delivery_container_split_totals">
            <div></div>
            <div>
              <Button style={{ visibility: "hidden" }}>+ Add Zone</Button>
            </div>
          </div>
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
              <span style={{ color: "#A6A7A7" }}>Add Zone Manager</span>
            </span>
            <span>
              <p
                style={{
                  color: "rgb(166, 167, 167)",
                  paddingRight: "13rem",
                  fontSize: ".8rem",
                }}
              >
                {/* <span>Sr no. 000_1</span> <br />
                <span>365 South Inverness Street, Dextres, USA. 621 398</span> */}
              </p>
            </span>
          </div>
          <div></div>{" "}
          <div className="promotion_container">
            <div>
              <Form
                onSubmit={handleDeliveryZoneSubmit}
                className="promotion_container_form"
              >
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile No."
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Assigned ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </Form.Group>

                <div className="bannerBtn">
                  <Button type="submit">Create Delivery Zone</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="delivery_container_split_totals">
            <div></div>
            <div>
              <Button style={{ visibility: "hidden" }}>+ Add Zone</Button>
            </div>
          </div>
          <div className="mb-5 mt-2 dashboard_container_split_totals2">
            <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
              <span
                onClick={() => navigate("/dashboard/delivery-zone")}
                style={{ cursor: "pointer" }}
              >
                <Icon
                  icon="solar:alt-arrow-left-linear"
                  width="1.2rem"
                  height="2.2rem"
                  style={{ color: "#202224", fontWeight: "bold" }}
                />
              </span>
              <span style={{ color: "#A6A7A7" }}>Add Delivery Zone</span>
            </span>
          </div>
          <div></div>{" "}
          <div className="promotion_container">
            <div>
              <Form className="promotion_container_form">
                <Form.Group className="mb-3">
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Write Street Address"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </Form.Group>

                <div className="promotion_container_split_grid">
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option disabled>Select Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Pin Code"
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Assign Profile</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      value={assignProfile}
                      onChange={(e) => setAssignProfile(e.target.value)}
                    >
                      <option disabled>Select Assign Profile</option>
                      <option value="PARTNER">DRIVER</option>
                      <option value="SUB-ADMIN">SUB-ADMIN</option>
                      <option value="HELPER">HELPER</option>
                      <option value="COURIER">HELPER & DELIVERY</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                    >
                      <option disabled>Select Vehicle Type</option>
                      {allTypes?.map((item, index) => (
                        <option key={index} value={item?._id}>
                          {item?.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="bannerBtn">
                  <Button type="button" onClick={() => setIsNextPage(true)}>
                    Next
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDeliveryZone;

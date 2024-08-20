import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import HOC from "../../Components/MainComponents/HOC";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const AddDeliveryZone = () => {
  const [isBannerSection, setIsBannerSection] = useState(true);
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [assignProfile, setAssignProfile] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [title, setTitle] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [offer, setOffer] = useState("");
  const [targetUser, setTargetUser] = useState("");
  const [targetCrateria, setTargetCrateria] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [id, setId] = useState("");

  const fileInputRef = useRef(null);
  const [isNextPage, setIsNextPage] = useState(false);
  const navigate = useNavigate();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
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
                <span>Sr no. 000_1</span> <br />
                <span>365 South Inverness Street, Dextres, USA. 621 398</span>
              </p>
            </span>
          </div>
          <div></div>{" "}
          <div className="promotion_container">
            <div>
              <Form className="promotion_container_form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" placeholder="Enter Mobile No." />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter Assigned ID" />
                </Form.Group>

                <div className="bannerBtn">
                  <Button type="button">Create Delivery Zone</Button>
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
                  <Form.Control type="text" placeholder="Enter Street" />
                </Form.Group>

                <div className="promotion_container_split_grid">
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter Coupon Code" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter Coupon Code" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>select country</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control type="text" placeholder="Enter Pin Code" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Assign Profile</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Select</option>
                      <option value="1">Driver</option>
                      <option value="2">Helper</option>
                      <option value="3">Helper&Delivery</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Select</option>
                      <option value="1">Truckbox</option>
                      <option value="2">Pickup</option>
                      <option value="3">Helper&Muvit Express</option>
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

import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import HOC from "../Components/MainComponents/HOC";

const BookingDetaills = () => {
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
            <span style={{ color: "black" }}>Bookings</span>
          </span>
        </div>
        <div></div>{" "}
        <div className="promotion_container">
          <div>
            <div className="promotion_container_1">
              <div>
                <p>Date</p>
                <p>2/11/12</p>
              </div>
              <div>
                <p>Vehicle Type</p>
                <p>Truck Box</p>
              </div>
              <div>
                <p>Order Status</p>
                <p
                  style={{
                    padding: "8px, 16px, 8px, 16px",
                    border: "1px solid gray",
                    borderRadius: " 8px",
                    textAlign: "center",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  Pending
                </p>
              </div>
              <div>
                <p>Sr. no.</p>
                <p>#101_100001</p>
              </div>
              <div>
                <p>Vehicle Type</p>
                <p>Truck Box</p>
              </div>
            </div>
            <div className="promotion_container_2">
              <div>
                <div className="d-flex gap-3">
                  <p>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="/Images/LoginPage/Group 181.png"
                      alt="imageIcon"
                    />
                  </p>
                  <p>Pickup</p>
                </div>
                <div className="d-flex gap-3">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "21px",
                    }}
                  >
                    {" "}
                    <p
                      style={{
                        height: "30px",
                        width: "1px",
                        border: "1px dashed gray",
                      }}
                    ></p>
                  </div>
                  <div>365 South Inverness St.</div>
                </div>
                <div className="d-flex gap-3">
                  <p>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="/Images/LoginPage/Group 181.png"
                      alt="imageIcon"
                    />
                  </p>
                  <p style={{ display: "flex", flexDirection: "column" }}>
                    <span>Drop</span>
                    <span>365 South Inverness St.</span>
                  </p>
                </div>
              </div>
              <div className="promotion_container_3">
                <p>
                  <span>Add-on Packaging</span>
                  <span>Add-on</span>
                </p>
                <p>
                  <span>Add-on Service</span>
                  <span>Add-on</span>
                </p>
              </div>
            </div>
            <div className="promotion_container_3">
              <p>
                <span>Total Amount</span>
                <span>$ 2,000</span>
              </p>
              <p>
                <span>Discount Offered</span>
                <span>$ 2,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetaills;

import { useRef, useState } from "react";
import HOC from "../Components/MainComponents/HOC";
import { Button, Form } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";

const PromotionPage = () => {
  const [isBannerSection, setIsBannerSection] = useState(true);
  const [title, setTitle] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [offer, setOffer] = useState("");
  const [targetUser, setTargetUser] = useState("");
  const [targetCrateria, setTargetCrateria] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const fileInputRef = useRef(null);

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
    <div>
      {" "}
      <div className="promotion_container">
        <div className="promotion_container_split1">
          <p
            onClick={() => setIsBannerSection(true)}
            style={{
              color: isBannerSection ? "#FEBF05" : "black",
              textAlign: "center",
              borderBottom: isBannerSection ? "3px solid #FEBF05" : "none",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              cursor: "pointer",
            }}
          >
            Banners Management
          </p>
          <p
            style={{
              color: !isBannerSection ? "#FEBF05" : "black",
              textAlign: "center",
              borderBottom: !isBannerSection ? "3px solid #FEBF05" : "none",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              cursor: "pointer",
            }}
            onClick={() => setIsBannerSection(false)}
          >
            Coupon Management
          </p>
        </div>
        <div>
          {isBannerSection ? (
            <Form className="promotion_container_form">
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Banner</Form.Label>
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
                  {bannerImage ? (
                    <img
                      src={bannerImage}
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
                      <p>Upload Banner</p>
                    </>
                  )}
                </div>
              </Form.Group>
              <div className="promotion_container_split_grid">
                <Form.Group>
                  <Form.Label>Publish date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group>
                  {" "}
                  <Form.Label>Expiry date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>{" "}
              </div>
              <div className="bannerBtn">
                <Button type="submit">Add Banner</Button>
              </div>
            </Form>
          ) : (
            <Form className="promotion_container_form">
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" />
              </Form.Group>

              <div className="promotion_container_split_grid">
                <Form.Group>
                  <Form.Label>Add Coupon Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Coupon Code" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Add Offer</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Select Offer</option>
                    <option value="1">20%</option>
                    <option value="2">50%</option>
                    <option value="2">80%</option>
                    <option value="2">Next Service Free</option>
                    <option value="2">No Delivery Charges</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Target User</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Select User</option>
                    <option value="1">New User</option>
                    <option value="2">Old User</option>
                    <option value="3">All User</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Target Target Criteria</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Select Criteria</option>
                    <option value="1">End of Season</option>
                    <option value="2">Orders Above $1000</option>
                    <option value="2">Orders Above $2000</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Publish date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group>
                  {" "}
                  <Form.Label>Publish End</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>{" "}
              </div>
              <div className="bannerBtn">
                <Button type="submit">Add Coupon</Button>
              </div>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionPage;

import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createApiData } from "../utiils";
import { warnToast } from "../Components/Toast";

const PromotionPage = () => {
  const [isBannerSection, setIsBannerSection] = useState(true);
  const [coupon , setCoupon] = useState({
    title:"",
    desc:"", 
    publishDate:"",
    expiryDate:"",
    couponCode:"",
    percentage:"",
    targetUser:"",
    targetCrateria:"",
  })

  const [banner , setBanner] = useState({
    title:"",
    description:"", 
    validFrom:"",
    validTo:"",
    image:"",
  })

  const [bannerImage, setBannerImage] = useState(null);

  const fileInputRef = useRef(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoupon((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleChangeBanner = (e) => {
    const { name, value } = e.target;
    setBanner((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  console.log(banner)

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setBanner((prevData) => ({
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



  const handleCouponSubmit = async(e)=>{
    e.preventDefault()

    if(!coupon?.title || !coupon?.desc || !coupon?.couponCode || !coupon?.percentage || !coupon?.expiryDate){
        return  warnToast("Please Fill All The Fields")
    }

    const formData ={
      title: coupon?.title,
      desc: coupon?.desc,
      code: coupon?.couponCode,
      discount: coupon?.percentage,
      isPercent: true,
      expirationDate: coupon?.expiryDate,
      isActive: true,
      recipient: "ALL"
    }
    try {
      const response = await createApiData("https://muvit-project.vercel.app/api/v1/admin/coupons", formData)
      console.log(response)
      setCoupon({
        title:"",
        desc:"", 
        publishDate:"",
        expiryDate:"",
        couponCode:"",
        percentage:"",
        targetUser:"",
        targetCrateria:"",})
    } catch (error) {
      console.log(error)
    }
  }

  const handleBannerSubmit = async(e)=>{
    e.preventDefault()

    if(!banner?.title || !banner?.description || !banner?.validFrom || !banner?.validTo || !banner?.image){
        return  warnToast("Please Fill All The Fields")
    }
    const data = new FormData();
    data.append('title', banner?.title);
    data.append('description', banner?.description);
    data.append('validFrom', banner?.validFrom);
    data.append('validTo', banner?.validTo);
    data.append('image', banner?.image);

    try {
      const response = await createApiData("https://muvit-project.vercel.app/api/v1/admin/banner", data)
      console.log(response)
      setBanner({
        title:"",
        description:"", 
        validFrom:"",
        validTo:"",
        image:"",
        })
    } catch (error) {
      console.log(error)
    }
  }

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
            <Form onSubmit={handleBannerSubmit} className="promotion_container_form">
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" name="title" value={banner?.title} onChange={handleChangeBanner} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" name="description" value={banner?.description} onChange={handleChangeBanner} />
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
                  <Form.Control type="date" name="validFrom" value={banner?.validFrom} onChange={handleChangeBanner}/>
                </Form.Group>
                <Form.Group>
                  {" "}
                  <Form.Label>Expiry date</Form.Label>
                  <Form.Control type="date" name="validTo" value={banner?.validTo} onChange={handleChangeBanner}/>
                </Form.Group>{" "}
              </div>
              <div className="bannerBtn">
                <Button type="submit">Add Banner</Button>
              </div>
            </Form>
          ) : (
            <Form className="promotion_container_form" onSubmit={handleCouponSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" name="title" value={coupon?.title} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name="desc" value={coupon?.desc} onChange={handleChange}/>
              </Form.Group>

              <div className="promotion_container_split_grid">
                <Form.Group>
                  <Form.Label>Add Coupon Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Coupon Code" name="couponCode" value={coupon?.couponCode} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Add Offer</Form.Label>
                  <Form.Select defaultValue="Choose..." name="percentage" value={coupon?.percentage} onChange={handleChange}>
                    <option>Select Offer</option>
                    <option value="20">20%</option>
                    <option value="50">50%</option>
                    <option value="80">80%</option>
                    <option value="Next Service Free">Next Service Free</option>
                    <option value="No Delivery Charges">No Delivery Charges</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Target User</Form.Label>
                  <Form.Select defaultValue="Choose..." name="targetUser" value={coupon?.targetUser} onChange={handleChange}>
                    <option>Select User</option>
                    <option value="NEW">New User</option>
                    <option value="OLD">Old User</option>
                    <option value="ALL">All User</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Target Target Criteria</Form.Label>
                  <Form.Select defaultValue="Choose..." name="targetCrateria" value={coupon?.targetCrateria} onChange={handleChange}>
                    <option>Select Criteria</option>
                    <option value="End of Season">End of Season</option>
                    <option value="Orders Above $1000">Orders Above $1000</option>
                    <option value="Orders Above $2000">Orders Above $2000</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Publish date</Form.Label>
                  <Form.Control type="date" name="publishDate" value={coupon?.publishDate} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                  {" "}
                  <Form.Label>Publish End</Form.Label>
                  <Form.Control type="date" name="expiryDate" value={coupon?.expiryDate} onChange={handleChange}/>
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

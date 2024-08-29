import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createApiData } from "../utiils";
import { warnToast } from "../Components/Toast";

const AddCoupon = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoupon((prevData) => ({
        ...prevData,
        [name]: value,
      }));
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
  
  return (
    <div>
      {" "}
      <div className="promotion_container">
        <div className="promotion_container_split1">
          <p>
            Create Coupon 
          </p>
        </div>
        <div>
      
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
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;

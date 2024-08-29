import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createApiData, fetchApiData, updateApiData } from "../utiils";
import { warnToast } from "../Components/Toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCoupon = () => {
  const [coupon , setCoupon] = useState({
    title:"",
    desc:"", 
    publishDate:"",
    expirationDate:"",
    code:"",
    discount:"",
    targetUser:"",
    targetCrateria:"",
  })


  const {id} = useParams()
  const navigate = useNavigate();
  
  async function getSingleCoupon() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/coupons/${id}`
    );
    setCoupon(data?.data);
  }

  useEffect(()=>{
    getSingleCoupon()
  },[id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoupon((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleCouponSubmit = async(e)=>{
    e.preventDefault()

    if(!coupon?.title || !coupon?.desc || !coupon?.code || !coupon?.discount || !coupon?.expirationDate){
        return  warnToast("Please Fill All The Fields")
    }

    const formData ={
      title: coupon?.title,
      desc: coupon?.desc,
      code: coupon?.code,
      discount: coupon?.discount,
      isPercent: true,
      expirationDate: coupon?.expirationDate,
      isActive: true,
    }
    try {
      const response = await updateApiData(`https://muvit-project.vercel.app/api/v1/admin/coupons/${coupon?._id}`, formData)
      console.log(response)
      setCoupon({
        title:"",
        desc:"", 
        publishDate:"",
        expirationDate:"",
        code:"",
        discount:"",
        targetUser:"",
        targetCrateria:"",})
        navigate('/promotions')
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
            Update Coupon 
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
                  <Form.Control type="text" placeholder="Enter Coupon Code" name="code" value={coupon?.code} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Add Offer</Form.Label>
                  <Form.Select defaultValue="Choose..." name="discount" value={coupon?.discount} onChange={handleChange}>
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
                  <Form.Control type="date" name="expirationDate" value={coupon?.expirationDate} onChange={handleChange}/>
                </Form.Group>{" "}
              </div>
              <div className="bannerBtn">
                <Button type="submit">Update Coupon</Button>
              </div>
            </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoupon;

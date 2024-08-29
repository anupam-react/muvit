import { useEffect, useRef, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { deleteApiData, fetchApiData, getDateFromISOString } from "../utiils";

const PromotionPage = () => {
  const [isBannerSection, setIsBannerSection] = useState(true);
  const [allBaneers, setAllBanners] = useState([])
  const [allCoupons, setAllCoupons] = useState([])
  const navigate = useNavigate();

  async function getBaneers() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/banner`
    );
    setAllBanners(data?.data);
  }
  async function getCoupons() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/coupons`
    );
    setAllCoupons(data?.data);
  }
  async function handleDeleteBanner(id) {
    const data = await deleteApiData(
      `https://muvit-project.vercel.app/api/v1/admin/banner/${id}`
    );
    getBaneers()
  }
  async function handleDeleteCoupon(id) {
    const data = await deleteApiData(
      `https://muvit-project.vercel.app/api/v1/admin/coupons/${id}`
    );
    getCoupons()
  }

  useEffect(()=>{
    getBaneers()
    getCoupons()
  },[])

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
            <div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  style={{ backgroundColor: "#FEBF05", border: "none" }}
                  onClick={() => navigate("/promotions/add-banner")}
                >
                  + Add Banner
                </Button>
              </div>
              <div className="mt-3">
          <Table style={{ textAlign: "center" }}>
            <thead>
              <tr style={{ border: "none" }}>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    borderRadius: "12px 0 0 12px",
                    color: "#202224",
                    border: "none",
                  }}
                >
                 Image
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                Title
                </th>
                
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                 Valid From
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                 Valid To
                </th>

                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    borderRadius: "0 12px 12px 0",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allBaneers?.map((item , i)=>(
              <tr style={{ border: "none", padding: "1rem 0" }}>
                <td style={{ border: "none" }}>
                  <div>
                    <img src={item?.image} alt="" style={{width:"50px", height:"50px", borderRadius:"50px"}}/>
                  </div>
                </td>
                <td style={{ border: "none" }}>{item?.title}</td>
                <td style={{ border: "none" }}>{getDateFromISOString(item?.validFrom)}</td>
                <td style={{ border: "none" }}>{getDateFromISOString(item?.validTo)}</td>
          
               
                <td style={{ border: "none" }}>
                 <button onClick={()=> navigate(`/promotions/update-banner/${item?._id}`)} style={{backgroundColor:"#FEBF05" , marginRight:"20px", border:"none", color:"white", padding:"5px 10px",  borderRadius:"5px"}}>Update</button>
                 <button onClick={()=> handleDeleteBanner(item?._id)} style={{backgroundColor:"red" , border:"none", color:"white", padding:"5px 10px",  borderRadius:"5px"}}>Delete</button>
                </td>
              </tr>

              ))}
            </tbody>
          </Table>
        </div>
              
            </div>
          ) : (
            <div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  style={{ backgroundColor: "#FEBF05", border: "none" }}
                  onClick={() => navigate("/promotions/add-coupon")}
                >
                  + Add Coupon
                </Button>

              </div>
                    <div className="mt-3">
          <Table style={{ textAlign: "center" }}>
            <thead>
              <tr style={{ border: "none" }}>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    borderRadius: "12px 0 0 12px",
                    color: "#202224",
                    border: "none",
                  }}
                >
                 Coupon Code
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                Title
                </th>
                
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                 Discount
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                 Expiration Date
                </th>

                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    borderRadius: "0 12px 12px 0",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allCoupons?.map((item , i)=>(
              <tr style={{ border: "none", padding: "1rem 0" }}>
                 <td style={{ border: "none" }}>{item?.code}</td>
                <td style={{ border: "none" }}>{item?.title}</td>
                <td style={{ border: "none" }}>{item?.discount}</td>
                <td style={{ border: "none" }}>{getDateFromISOString(item?.expirationDate)}</td>
          
               
                <td style={{ border: "none" }}>
                 <button onClick={()=> navigate(`/promotions/update-coupon/${item?._id}`)} style={{backgroundColor:"#FEBF05" , marginRight:"20px", border:"none", color:"white", padding:"5px 10px",  borderRadius:"5px"}}>Update</button>
                 <button onClick={()=> handleDeleteCoupon(item?._id)} style={{backgroundColor:"red" , border:"none", color:"white", padding:"5px 10px",  borderRadius:"5px"}}>Delete</button>
                </td>
              </tr>

              ))}
            </tbody>
          </Table>
        </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionPage;

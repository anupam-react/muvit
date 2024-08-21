import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate, useParams } from "react-router-dom";

import { fetchApiData, getDateFromISOString } from "../utiils";

const BookingDetaills = () => {
  const [bookingDetails, setBookingDetails] = useState([]);
  const navigate = useNavigate();

  const {id} = useParams()

  
  async function getBooking() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/bookings/byId/${id}`
    );
    setBookingDetails(data?.data);
  }
  console.log(bookingDetails)

  useEffect(()=>{
    getBooking()
  },[id])


  return (
    <>
      <div>
       
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
              <div style={{width:"10rem"}}>
                <p>Date</p>
                <p>{getDateFromISOString(bookingDetails?.createdAt)}</p>
              </div>
              <div style={{width:"10rem"}}>
                <p>Vehicle Type</p>
                <p>{bookingDetails?.vechileType?.name}</p>
              </div>
              <div style={{width:"10rem"}}>
                <p>Order Status</p>
                <p
                  className={bookingDetails?.status === "COMPLETED" ? "complete-booking" : "pending-booking"}
                  style={{textAlign:"center"}}
                >
                  {bookingDetails?.status}
                </p>
              </div>
              <div style={{width:"10rem"}}>
                <p>Sr. no.</p>
                <p>#101_100001</p>
              </div>
              <div style={{width:"10rem"}}>
                <p>Order ID</p>
                <p>{bookingDetails?.bookingId}</p>
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
                  <div>{bookingDetails?.pickupName}</div>
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
                    <span>{bookingDetails?.dropName}</span>
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
                <span>${bookingDetails?.totalPrice}</span>
              </p>
              <p>
                <span>Discount Offered</span>
                <span>$000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetaills;

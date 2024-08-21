import { Icon } from "@iconify/react/dist/iconify.js";
import HOC from "../Components/MainComponents/HOC";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApiData, getDateFromISOString } from "../utiils";

const BookingPage = () => {
  const [isAssigned, setIsAssigned] = useState(false);
  const [filter, setFilter] = useState("");
  const [allBooking, setAllBooking] = useState([]);
  const navigate = useNavigate();

  async function getBooking() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/bookings"
    );
    setAllBooking(data?.data);
  }
 

  useEffect(()=>{
    getBooking()
  },[])

  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
        <div className="dashboard_container_split_totals2">
          <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
            <span>
              <Icon
                icon="solar:alt-arrow-left-linear"
                width="1.2rem"
                height="2.2rem"
                style={{ color: "#202224", fontWeight: "bold" }}
              />
            </span>
            <span>Driver Bookings</span>
          </span>
          <span style={{ display: "flex", gap: "1rem" }}>
            <span>
              <Button
                style={{
                  backgroundColor: isAssigned ? "#00B69B" : "#F1F4F9",
                  color: isAssigned ? "white" : "#202224",
                  border: "none",
                }}
                onClick={() => setIsAssigned(!isAssigned)}
              >
                {isAssigned
                  ? "Un assigned Bookings (2)"
                  : "Un assigned Bookings (2)"}
              </Button>
            </span>

            <span>
              <Form.Control
                type="text"
                placeholder="Search by Date, ID or Order"
              />
            </span>
            <span>
              <Form.Select onChange={(e) => setFilter(e?.target?.value)}>
                <option value={"driver"}>Driver</option>
                <option value={"helper"}>Helper</option>
                <option value={"both"}>Helper and Delivery</option>
              </Form.Select>
            </span>
          </span>
        </div>
        <div></div>
        <div className="mt-3" style={{height:"70vh" , overflowY:"scroll"}}>
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
                  Sr no.
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Order ID
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  {filter === "helper" ? "Service Type" : "Vehicle Type"}
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Pickup
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Drop
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Add-on Packaging
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Add-on Service
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Order Status
                </th>
                {isAssigned && (
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Assign Role
                  </th>
                )}
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Total Amount
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Discount Offered
                </th>

                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    borderRadius: "0 12px 12px 0",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Country
                </th>
              </tr>
            </thead>
            <tbody>
              {allBooking?.map((item , i)=>(
              <tr key={i} onClick={() => navigate(`/booking/${item?._id}`)} style={{ border: "none" , cursor:"pointer" }}>
                <td
                  
                  style={{ border: "none" , width:"60px" }}
                >
                  #000_{i+1}
                </td>
                <td style={{ border: "none" }}>{item?.bookingId}</td>
                <td style={{ border: "none" , width:"60px" }}>{item?.vechileType?.name}</td>
                <td style={{ border: "none", width:"60px" }}>{getDateFromISOString(item?.createdAt)}</td>
                <td style={{ border: "none", width:"60px" }}>{item?.pickupName}</td>
                <td style={{ border: "none", width:"60px" }}>{item?.dropName}</td>
                <td style={{ border: "none", width:"60px" }}>Add-on</td>
                <td style={{ border: "none", width:"60px" }}>Add-on</td>
                <td style={{ border: "none" }}>
                  <div className={item?.status === "COMPLETED" ? "complete-booking" : "pending-booking"}>
                  {item?.status}
                  </div>
                  </td>
                {isAssigned && <td style={{ border: "none" }}>#101</td>}
                <td style={{ border: "none", width:"60px" }}>{item?.totalPrice}</td>
                <td style={{ border: "none", width:"60px" }}>000</td>
                <td style={{ border: "none" , width:"60px" , textTransform:"uppercase" }}>india</td>
              </tr>

              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

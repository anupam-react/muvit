import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApiData, getDateFromISOString, updateApiData } from "../../utiils";

const AddDeliveryPartner = () => {
  const [isAssigned, setIsAssigned] = useState(true);
  const [isPaid, setIsPaid] = useState(false);
  const [filter, setFilter] = useState("");
  const [allRefund, setAllRefund] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
    
  async function getUsers(search="" , role="") {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/searchRefunds?search=${search}&role=${role}&refundType=BOOKING`
    );
    setAllRefund(data?.data?.docs);
  }
 console.log(allRefund)

 const handleUpdateRefundSubmit = async (id) => {
  const formData = {
    refundStatus:'COMPLETED'
  };
  try {
    const response = await updateApiData(
      `https://muvit-project.vercel.app/api/v1/admin/bookings/updatePaymentStatus/${id}`,
      formData
    );

    console.log(response);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div>
      <div className="dashboard_container_split2">
           <div className="dashboard_container_split_totals2">
          <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
            <span
              onClick={() => navigate("/dashboard/delivery-partner")}
              style={{ cursor: "pointer" }}
            >
              <Icon
                icon="solar:alt-arrow-left-linear"
                width="1.2rem"
                height="2.2rem"
                style={{ color: "#202224", fontWeight: "bold" }}
              />
            </span>
            <span>
              {filter === "PARTNER"
                ? "Driver"
                : filter === "HELPER"
                ? "Helper"
                : "Helper & Delivery"}{" "}
              Payout
            </span>
          </span>
          <span style={{ display: "flex", gap: "1rem" }}>
            
            <span>
              <Form.Control
                type="text"
                placeholder="Search by Date, ID or Order"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  getUsers(e.target.value);
                }}
              />
            </span>
            <span>
            <Form.Select onChange={(e) =>{
              setFilter(e.target.value)
              getUsers("", e.target.value);
                 }}>
                <option disabled selected>Choose Category</option>
                <option value="USER">USER</option>
                <option value="PARTNER">Driver</option>
                <option value="HELPER">Helper</option>
                <option value="COURIER">Helper and Delivery</option>
              </Form.Select>
            </span>
          </span>
        </div>
        <div></div>
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
                  ID
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Miles
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  TotalPay
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Last Payment
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  {filter === "driver"
                    ? "Driver"
                    : filter === "helper"
                    ? "Helper"
                    : "Helper & Delivery"}{" "}
                  Pay
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Percentage(%)
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Payment Status
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
              {allRefund?.map((item, i)=>(
              <tr style={{ border: "none" }}>
                <td style={{ border: "none" }}>{item?.booking?.bookingId}</td>
                <td style={{ border: "none" }}>{item?.user?.fullName}</td>
                <td style={{ border: "none" }}>{item?.booking?.distance}</td>
                <td style={{ border: "none" }}>${item?.booking?.totalPrice}</td>
                <td style={{ border: "none" }}>{getDateFromISOString(item?.booking?.createdAt)}</td>
                <td style={{ border: "none" }}>${item?.booking?.driverAmount}</td>
                <td style={{ border: "none" }}>40%</td>
                <td
                  style={{
                    borderStyle: "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    {item?.refundStatus !== "COMPLETED" ? (
                      <>
                        <Button
                          style={{
                            backgroundColor: "#FEBF05",
                            color: "white",
                            border: "none",
                            borderRadius: "9px",
                          }}
                        >
                          Requested
                        </Button>
                        <Button
                          onClick={() =>handleUpdateRefundSubmit(item?._id)}
                          style={{
                            backgroundColor: "#B3E9E1",
                            color: "white",
                            border: "none",
                            borderRadius: "9px",
                          }}
                        >
                          Pay
                        </Button>
                      </>
                    ) : (
                      <Button
                        style={{
                          backgroundColor: "#00B69B",
                          color: "white",
                          border: "none",
                          borderRadius: "9px",
                        }}
                      >
                        Paid
                      </Button>
                    )}
                  </div>
                </td>
                <td style={{ border: "none" }}>
                <Icon
                    icon="carbon:overflow-menu-vertical"
                    width="1.2rem"
                    height="1.2rem"
                    style={{ color: "gray", cursor: "pointer" }}
                  />
                </td>
              </tr>

              ))}
            </tbody>
          </Table>
        </div>
      </div>


    </div>
  );
};

export default AddDeliveryPartner;

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useState } from "react";
import HOC from "../../Components/MainComponents/HOC";
import { useNavigate } from "react-router-dom";

const AddDeliveryPartner = () => {
  const [isAssigned, setIsAssigned] = useState(true);
  const [isPaid, setIsPaid] = useState(false);
  const [filter, setFilter] = useState("driver");
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
        <div className="delivery_container_split_totals">
          <div></div>
          <div>{/* <Button>+ Add Zone</Button> */}</div>
        </div>
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
              {filter === "driver"
                ? "Driver"
                : filter === "helper"
                ? "Helper"
                : "Helper & Delivery"}{" "}
              Payout
            </span>
          </span>
          <span style={{ display: "flex", gap: "1rem" }}>
            {/* <span>
              <Button
                style={{
                  backgroundColor: isAssigned ? "#00B69B" : "#F1F4F9",
                  color: isAssigned ? "white" : "#202224",
                  border: "none",
                }}
                onClick={() => setIsAssigned(!isAssigned)}
              >
                {isAssigned
                  ? "Assigned Bookings (2)"
                  : "Un assigned Bookings (2)"}
              </Button>
            </span> */}
            <span>
              <Form.Control
                type="text"
                placeholder="Search by Date, ID or Order"
              />
            </span>
            <span>
              <Form.Select onChange={(e) => setFilter(e.target.value)}>
                <option value={"driver"}>Driver</option>
                <option value={"helper"}>Helper</option>
                <option value={"both"}>Helper and Delivery</option>
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
              <tr style={{ border: "none" }}>
                <td style={{ border: "none" }}>#101</td>
                <td style={{ border: "none" }}>Suraj Singh</td>
                <td style={{ border: "none" }}>300</td>
                <td style={{ border: "none" }}>$1000</td>
                <td style={{ border: "none" }}>2/11/2012</td>
                <td style={{ border: "none" }}>$400</td>
                <td style={{ border: "none" }}>30%</td>
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
                    {!isPaid ? (
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
                          onClick={() => setIsPaid(true)}
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
                          backgroundColor: "green",
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
                <td style={{ border: "none" }}>#101</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AddDeliveryPartner;

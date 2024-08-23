import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import HOC from "../../Components/MainComponents/HOC";
import { useNavigate } from "react-router-dom";
import { fetchApiData, getDateFromISOString } from "../../utiils";

const DeliveryZone = () => {
  const [isAssigned, setIsAssigned] = useState(true);
  const [zone, setZone] = useState([])
  const navigate = useNavigate();
  async function getZones() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/delivery-zones"
    );
    setZone(data?.data);
  }

  useEffect(()=>{
    getZones()
  },[])
  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
        <div className="delivery_container_split_totals">
          <div></div>
          <div>
            <Button onClick={() => navigate("/dashboard/add-delivery-zone")}>
              + Add Zone
            </Button>
          </div>
        </div>
        <div className="dashboard_container_split_totals2">
          <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
            <span
              onClick={() => navigate("/dashboard")}
              style={{ cursor: "pointer" }}
            >
              <Icon
                icon="solar:alt-arrow-left-linear"
                width="1.2rem"
                height="2.2rem"
                style={{ color: "#202224", fontWeight: "bold" }}
              />
            </span>
            <span>Delivery Zones</span>
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
              <Form.Select>
                <option value="">Filter</option>
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
                  Profile
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Vehicle Type
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Address
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Pincode
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  State
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Country
                </th>

                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    borderRadius: "0 12px 12px 0",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Establishment
                </th>
              </tr>
            </thead>
            <tbody>
              {zone?.map((item , i)=>(
              <tr style={{ border: "none" }} key={i}>
                <td style={{ border: "none" }}>{item?.Id}</td>
                <td style={{ border: "none" }}>{item?.assignProfile}</td>
                <td style={{ border: "none" }}>{item?.vechileType?.name}</td>
                <td style={{ border: "none" }}>{item?.street + " , " + item?.city}</td>
                <td style={{ border: "none" }}>{item?.pincode}</td>
                <td style={{ border: "none" }}>{item?.state}</td>
                <td style={{ border: "none" }}>{item?.country}</td>
                <td style={{ border: "none" }}>{getDateFromISOString(item?.createdAt)}</td>
              </tr>

              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryZone;

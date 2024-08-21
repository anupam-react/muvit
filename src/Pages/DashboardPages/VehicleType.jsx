import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import HOC from "../../Components/MainComponents/HOC";
import { useNavigate } from "react-router-dom";
import { fetchApiData } from "../../utiils";

const VehicleType = () => {
  const [isAssigned, setIsAssigned] = useState(true);
  const [allTypes, setAllTypes] = useState([]);
  const navigate = useNavigate();

  async function getType() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/VechileType"
    );
    setAllTypes(data?.data);
  }
 console.log(allTypes)

  useEffect(()=>{
    getType()
  },[])

  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
        <div className="delivery_container_split_totals">
          <div></div>
          <div>
            <Button onClick={() => navigate("/dashboard/add-vehicle-type")}>
              {" "}
              + Add Vehicle
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
            <span>Vehicle Type</span>
          </span>
          <span style={{ display: "flex", gap: "1rem" }}>
     
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
                  Sr.no
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Type
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Vehicle ID
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Milage
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Verification
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
              {allTypes?.map((item , i)=>(
              <tr style={{ border: "none", padding: "1rem 0" }}>
                <td style={{ border: "none" }}>#{i+1}</td>
                <td style={{ border: "none" }}>{item?.name}</td>
                <td style={{ border: "none" }}>{item?.id}</td>
                <td style={{ border: "none" }}>#101</td>
                <td
                 style={{

                  border: "none",
         
                }}
                >
                  <div  style={{
                    backgroundColor: "#00B69B",
                    color: "white",
                    padding:"10px 5px",
                    borderRadius: "9px",
                  }}>
                  Done

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

export default VehicleType;

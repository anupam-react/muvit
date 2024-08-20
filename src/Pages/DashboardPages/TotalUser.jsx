import { Icon } from "@iconify/react/dist/iconify.js";
import { Form, Table } from "react-bootstrap";
import { useState } from "react";
import HOC from "../../Components/MainComponents/HOC";
import { useNavigate } from "react-router-dom";

const TotalUser = () => {
  const [isAssigned, setIsAssigned] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
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
            <span>Total Users</span>
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
                  Email
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Mobile
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Connected on
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Status
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
                <td style={{ border: "none" }}>#101</td>
                <td style={{ border: "none" }}>#101</td>
                <td style={{ border: "none" }}>#101</td>
                <td style={{ border: "none" }}>#101</td>
                <td
                  style={{
                    backgroundColor: "#00B69B",
                    color: "white",
                    border: "none",
                    borderRadius: "9px",
                    width: "10px",
                  }}
                >
                  Active
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
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TotalUser;

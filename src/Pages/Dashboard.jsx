import { Icon } from "@iconify/react/dist/iconify.js";
import HOC from "../Components/MainComponents/HOC";
import { Form, ProgressBar, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="dashboard_container nSans">
        <div className="dashboard_container_split">
          <div>
            <p className="dashboard_container_split_title">Totals</p>
            <div className="dashboard_container_split_totals1"  onClick={() => navigate("/dashboard/delivery-zone")}>
              <div
                style={{
                  borderRight: "1px solid gray",
                  paddingRight: "1rem",
                }}
              >
                <div
                 
                  className="dashboard_container_split_totals"
                >
                  <span>
                    <p>Delivery Zone</p>
                    <p>40,689</p>
                  </span>
                  <span>
                    <img
                      className="dashboard_container_split_totals_image"
                      src="/Images/Dashboard/delivery_zone.png"
                      alt="Delivery"
                    />
                  </span>
                </div>
                <div>
                  <p>
                    <span>
                      <Icon
                        icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                        width="1.2rem"
                        height="1.2rem"
                        style={{ color: "#00B69B" }}
                      />
                    </span>{" "}
                    <span>
                      <span style={{ color: "#00B69B" }}>26,00+ </span>New Zones
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  width="1.2rem"
                  height="1.2rem"
                  style={{ color: "black" }}
                />
              </div>
            </div>

            <div
              onClick={() => navigate("/dashboard/delivery-partner")}
              className="dashboard_container_split_totals1"
            >
              <div
                style={{
                  borderRight: "1px solid gray",
                  paddingRight: "1rem",
                }}
              >
                <div className="dashboard_container_split_totals">
                  <span>
                    <p>Delivery Partners</p>
                    <p>55,689</p>
                  </span>
                  <span>
                    <img
                      className="dashboard_container_split_totals_image"
                      src="/Images/Dashboard/partner.png"
                      alt="Delivery"
                    />
                  </span>
                </div>
                <div>
                  <p>
                    <span>
                      <Icon
                        icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                        width="1.2rem"
                        height="1.2rem"
                        style={{ color: "#00B69B" }}
                      />
                    </span>{" "}
                    <span>
                      <span style={{ color: "#00B69B" }}>26,00+ </span>New Zones
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  width="1.2rem"
                  height="1.2rem"
                  style={{ color: "black" }}
                />
              </div>
            </div>

            <div
              onClick={() => navigate("/dashboard/vehicle-type")}
              className="dashboard_container_split_totals1"
            >
              <div
                style={{
                  borderRight: "1px solid gray",
                  paddingRight: "1rem",
                }}
              >
                <div className="dashboard_container_split_totals">
                  <span>
                    <p>Vehicle Type</p>
                    <p>4</p>
                  </span>
                  <span>
                    <img
                      className="dashboard_container_split_totals_image"
                      src="/Images/Dashboard/vehicle.png"
                      alt="Delivery"
                    />
                  </span>
                </div>
                <div>
                  <p>
                    <span>
                      <Icon
                        icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                        width="1.2rem"
                        height="1.2rem"
                        style={{ color: "#00B69B" }}
                      />
                    </span>{" "}
                    <span>
                      <span style={{ color: "#00B69B" }}>26,00+ </span>New Zones
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  width="1.2rem"
                  height="1.2rem"
                  style={{ color: "black" }}
                />
              </div>
            </div>

            <div
              onClick={() => navigate("/dashboard/total-user")}
              className="dashboard_container_split_totals1"
            >
              <div
                style={{
                  borderRight: "1px solid gray",
                  paddingRight: "1rem",
                }}
              >
                <div className="dashboard_container_split_totals">
                  <span>
                    <p>Total Users</p>
                    <p>40,689</p>
                  </span>
                  <span>
                    <img
                      className="dashboard_container_split_totals_image"
                      src="/Images/Dashboard/users.png"
                      alt="Delivery"
                    />
                  </span>
                </div>
                <div>
                  <p>
                    <span>
                      <Icon
                        icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                        width="1.2rem"
                        height="1.2rem"
                        style={{ color: "#00B69B" }}
                      />
                    </span>{" "}
                    <span>
                      <span style={{ color: "#00B69B" }}>26,00+ </span>New Zones
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  width="1.2rem"
                  height="1.2rem"
                  style={{ color: "black" }}
                />
              </div>
            </div>

          </div>

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
                <span>Orders</span>
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
                    <option>Filter</option>
                    <option value="1">Yesterday</option>
                    <option value="2">Last 7 days</option>
                    <option value="3">Last 30 days</option>
                  </Form.Select>
                </span>
              </span>
            </div>
            <div className="mt-4 mb-2 dashboard_container_split_totals21">
              <div className="dashboard_container_split_totals3121">
                <div className="dashboard_container_split_totals31">
                  <div>
                    <img
                      className="dashboard_container_split_totals_image_1"
                      src="/Images/Dashboard/cross.png"
                      alt="cross"
                    />
                  </div>
                  <div className="dashboard_container_split_totals44">
                    <ProgressBar
                      className="progress-bar-custom1"
                      variant="success"
                      now={40}
                    />

                    <p>Pending (630 out of 3000)</p>
                  </div>
                </div>
                <div>
                  <p className="dashboard_container_split_totals5_text">21%</p>
                </div>
              </div>
              <div className="dashboard_container_split_totals3121">
                <div className="dashboard_container_split_totals31">
                  <div>
                    <img
                      className="dashboard_container_split_totals_image_1"
                      src="/Images/Dashboard/tick.png"
                      alt="cross"
                    />
                  </div>
                  <div className="dashboard_container_split_totals44">
                    <ProgressBar
                      className="progress-bar-custom"
                      variant="success"
                      now={76}
                    />

                    <p>Pending (630 out of 3000)</p>
                  </div>
                </div>
                <div>
                  <p className="dashboard_container_split_totals5_text">76%</p>
                </div>
              </div>
            </div>
            <div>
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
                      Order ID
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
                    <td style={{ border: "none" }}>
                      <span
                        style={{
                          color: "#4D4E50",
                          backgroundColor: "#F1F4F9",
                          borderRadius: "9px",
                          padding: "5px 10px",
                          border: "none",
                        }}
                      >
                        Delivered
                      </span>
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
      </div>
    </div>
  );
};

export default Dashboard;

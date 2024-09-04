import { Icon } from "@iconify/react/dist/iconify.js";
import HOC from "../Components/MainComponents/HOC";
import { Form, ProgressBar, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const Dashboard = () => {
  const [user, setUser] = useState([])
  const [partner, setPartner] = useState([])
  const [type, setType] = useState([])
  const [zone, setZone] = useState([])
  const [price, setPrice] = useState([])
  const [allBooking, setAllBooking] = useState([]);
  const [processedBooking, setProcessedBooking] = useState([]);
  const [pendingBooking, setPendingBooking] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  async function getBooking(search="", role="") {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/searchBooking?search=${search}&role=${role}`
    );
    setAllBooking(data?.data?.docs);
    setProcessedBooking(data?.data?.docs?.filter((d)=> d?.status === "COMPLETED"));
    setPendingBooking(data?.data?.docs?.filter((d)=> d?.status === "PENDING"));
    
  }
  async function getUsers() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/searchUser?page=1&limit=1000"
    );
    setUser(data?.data?.docs);
  }

    
  async function getPartner() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/profile?userType=PARTNER"
    );
    setPartner(data?.data);
  }

  async function getType() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/VechileType"
    );
    setType(data?.data);
  }
  async function getZones() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/delivery-zones"
    );
    setZone(data?.data);
  }
  async function getAllVechilePrices() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/vechile-price"
    );
    setPrice(data?.data);
  }

  useEffect(()=>{
    getBooking()
    getUsers()
    getPartner()
    getType()
    getZones()
    getAllVechilePrices()
  },[])

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
                    <p>{zone?.length}</p>
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
                    <p>{partner?.length}</p>
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
                      <span style={{ color: "#00B69B" }}>26,00+ </span>New Partners
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
                    <p>{type?.length}</p>
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
                      <span style={{ color: "#00B69B" }}>26,00+ </span> New Vehicles
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
              onClick={() => navigate("/dashboard/vehicle-price")}
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
                    <p>Vehicle Price</p>
                    <p>{price?.length}</p>
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
                    <p>{user?.length}</p>
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
                      <span style={{ color: "#00B69B" }}>26,00+ </span>New Users
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
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      getBooking(e.target.value);
                    }}
                  />
                </span>
                <span>
                  <Form.Select onChange={(e) =>{
                getBooking("", e.target.value);
            
                 }}>
                  <option disabled selected>Choose Category</option>
                <option value="driver">Driver</option>
                <option value="helper">Helper</option>
                <option value="helper">Helper and Delivery</option>
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
                      now={Math.round((pendingBooking?.length/ allBooking?.length)*100)}
                    />

                    <p>Pending ({pendingBooking?.length} out of {allBooking?.length})</p>
                  </div>
                </div>
                <div>
                  <p className="dashboard_container_split_totals5_text">{Math.round((pendingBooking?.length/ allBooking?.length)*100)}%</p>
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
                      now={Math.round((processedBooking?.length/ allBooking?.length)*100)}
                    />

                    <p>Processed ({processedBooking?.length} out of {allBooking?.length})</p>
                  </div>
                </div>
                <div>
                  <p className="dashboard_container_split_totals5_text">{Math.round((processedBooking?.length/ allBooking?.length)*100)}%</p>
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
                  {allBooking?.map((data , i)=>(
                  <tr style={{ border: "none" }}>
                    <td style={{ border: "none" }}>{data?.bookingId}</td>
                    <td style={{ border: "none" }}>
                      <span
                        className={
                          data?.status === "COMPLETED"
                            ? "complete-booking"
                            : "pending-booking"
                        }
                      >
                        {data?.status}
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

                  ))}
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

import { useLocation, useNavigate } from "react-router-dom";
import HOC from "../../Components/MainComponents/HOC";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { fetchApiData, getDateFromISOString } from "../../utiils";
import { useEffect, useState } from "react";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [profile , setProfile] =  useState()
  const [allBooking, setAllBooking] = useState([]);
  const { pathname } = useLocation();
  async function getProfile() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/getprofile"
    );
    setProfile(data?.data);
  }

  async function getBooking() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/bookings"
    );
    setAllBooking(data?.data);
  }
  useEffect(()=>{
    getProfile()
    getBooking()
  },[])
  return (
    <div>
      <div className="admin-profile">
        <div className="admin-profile-header">
          <p
            onClick={() => navigate("/setting/admin")}
            style={{
              color: pathname === "/setting/admin" ? "white" : "#202224",
              padding: pathname === "/setting/admin" ? "1rem 2rem" : "0",
              backgroundColor:
                pathname === "/setting/admin" ? "#FEBF05" : "white",
              borderRadius: pathname === "/setting/admin" ? "10px" : "0",
            }}
          >
            Admin Settings
          </p>
          <p
            onClick={() => navigate("/setting/payment")}
            style={{
              color: pathname === "/setting/payment" ? "white" : "#202224",
              padding: pathname === "/setting/payment" ? "1rem 2rem" : "0",
              backgroundColor:
                pathname === "/setting/payment" ? "#FEBF05" : "white",
              borderRadius: pathname === "/setting/payment" ? "10px" : "0",
            }}
          >
            Payment Details
          </p>
        </div>
        <div>
          {pathname === "/setting/admin" ? (
            <div>
              <div >
                <Table  style={{height:"70vh" , overflowY:"scroll" , textAlign: "center"}}>
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
                        Name
                      </th>
                      <th
                        style={{
                          backgroundColor: "#F1F4F9",
                          color: "#202224",
                          border: "none",
                        }}
                      >
                        Role
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
                        Phone
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
                      <td style={{ border: "none" }}>{profile?.user?.fullName}</td>
                      <td style={{ border: "none" }}>{profile?.user?.userType}</td>
                      <td style={{ border: "none" }}>{profile?.user?.email}</td>
                      <td style={{ border: "none" }}>{profile?.user?.mobileNumber}</td>
                      <td style={{ border: "none" }}>
                        <span
                        className={profile?.user?.status ? "active-status" : "inactive-status"}
                        >
                          {profile?.user?.status ? "Acive": "Inactive"}
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
                <div className="setting_edit_btn">
                        <Button type="submit">Update</Button>
                      </div>
              </div>
            </div>
          ) : pathname === "/setting/payment" ? (
            <div>
              <div className="dashboard_container_split2">
                <div className="dashboard_container_split_totals2">
                  <span
                    style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}
                  >
                    <span>
                      <Icon
                        icon="solar:alt-arrow-left-linear"
                        width="1.2rem"
                        height="2.2rem"
                        style={{ color: "#202224", fontWeight: "bold" }}
                      />
                    </span>
                    <span>Payment</span>
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
                          Sr.no
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
                          Order ID
                        </th>
                        <th
                          style={{
                            backgroundColor: "#F1F4F9",
                            color: "#202224",
                            border: "none",
                          }}
                        >
                          Transaction ID
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
                            color: "#202224",
                            border: "none",
                          }}
                        >
                          Total Amount
                        </th>
                        <th
                          style={{
                            backgroundColor: "#F1F4F9",
                            borderRadius: "0 12px 12px 0",
                            color: "#202224",
                            border: "none",
                          }}
                        >
                          Discount Offered
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allBooking?.map((data , i)=>(
                      <tr style={{ border: "none" }} key={i}>
                        <td style={{ border: "none" }}>#10{i+1}</td>
                        <td style={{ border: "none" }}>{getDateFromISOString(data?.createdAt)}</td>
                        <td style={{ border: "none" }}>{data?.bookingId}</td>
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
                            {data?.paymentStatus}
                          </span>
                        </td>
                        <td style={{ border: "none" }}>{data?.totalPrice}</td>
                        <td style={{ border: "none" }}>000</td>
                      </tr>

                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

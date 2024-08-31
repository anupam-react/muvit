import { Icon } from "@iconify/react/dist/iconify.js";
import { Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import HOC from "../../Components/MainComponents/HOC";
import { useNavigate } from "react-router-dom";
import { deleteApiData, fetchApiData } from "../../utiils";

const TotalUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  async function getUsers(search = "", userType = "") {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/searchUser?search=${search}&userType=${userType}`
    );
    setAllUsers(data?.data?.docs);
  }

  async function handleDeleteType(id) {
    const data = await deleteApiData(
      `https://muvit-project.vercel.app/api/v1/admin/users/profile/delete/${id}`
    );
    getUsers();
  }
  console.log(allUsers);

  useEffect(() => {
    getUsers();
  }, []);
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
            <button  onClick={()=> navigate('/dashboard/verify-user')} style={{
                  backgroundColor:  "#00B69B",
                  color: "#FFFF",
                  border: "none",
                  padding:"5px 10px",
                  borderRadius:"6px"
                }}>Verify User</button>
            <span>
              <Form.Control
                type="text"
                placeholder="Search by Date, ID or Order"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  getUsers(e.target.value);
                }}
              />
            </span>
            <span>
              <Form.Select
                onChange={(e) => {
                  getUsers("", e.target.value);
                }}
              >
                <option value="" selected>
                  ALL
                </option>
                <option value="ADMIN">ADMIN</option>
                <option value="SUB-ADMIN">SUB-ADMIN</option>
                <option value="USER">USER</option>
                <option value="PARTNER">PARTNER</option>
                <option value="HELPER">HELPER</option>
                <option value="COURIER">COURIER</option>
              </Form.Select>
            </span>
          </span>
        </div>
        <div></div>
        <div className="mt-3" style={{ height: "70vh", overflowY: "scroll" }}>
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
                  User Type
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
              {allUsers?.map((item, i) => (
                <tr style={{ border: "none" }} key={i}>
                  <td style={{ border: "none" }}>{item?.userId}</td>
                  <td style={{ border: "none" }}>{item?.fullName}</td>
                  <td style={{ border: "none" }}>{item?.email}</td>
                  <td style={{ border: "none" }}>{item?.mobileNumber}</td>
                  <td style={{ border: "none" }}>{item?.userType}</td>
                  <td style={{ border: "none" }}>
                    <div
                      className={
                        item?.isVerified ? "complete-booking" : "pending-booking"
                      }
                      style={{ textAlign: "center" }}
                    >
                      {item?.isVerified ? "Approve" : "Pending"}
                    </div>
                  </td>
                  <td style={{ border: "none" }}>
                    <button
                      onClick={() => handleDeleteType(item?._id)}
                      style={{
                        backgroundColor: "red",
                        border: "none",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      Delete
                    </button>
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

export default TotalUser;

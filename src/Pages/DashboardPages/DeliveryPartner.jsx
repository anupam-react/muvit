import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApiData, getDateFromISOString } from "../../utiils";
import { useEffect } from "react";

const DeliveryPartner = () => {
  const [isAssigned, setIsAssigned] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  
  async function getUsers(search="" , userType="PARTNER") {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/searchUser?search=${search}&userType=${userType}`
    );
    setAllUsers(data?.data?.docs);
  }
 console.log(allUsers)

  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
        <div className="delivery_container_split_totals">
          <div></div>
          <div>
            <Button onClick={() => navigate("/dashboard/add-partner")}>
              Check Payouts
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
            <span>Delivery Partners</span>
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
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  getUsers(e.target.value);
                }}
              />
            </span>
            <span>
              <Form.Select onChange={(e) =>{
                getUsers("", e.target.value);
                
                 }}>
                <option value="" disabled>Filter</option>
                <option value="PARTNER">Driver</option>
                <option value="HELPER">Helper</option>
                <option value="COURIER">Helper & Delivery</option>
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
                  ID
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Partner Type
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
                  Contacted on
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
            {allUsers?.map((item , i)=>(
              <tr style={{ border: "none" }} key={i}>
                <td style={{ border: "none" }}>{i+1}</td>
                <td style={{ border: "none" }}>{item?.currentRole === "PARTNER" ? "DRIVER" : item?.user?.userType === "COURIER" ? "HELPER & DELIVERY" :  item?.currentRole}</td>
                <td style={{ border: "none" }}>{item?.fullName}</td>
                <td style={{ border: "none" }}>{item?.email}</td>
                <td style={{ border: "none" }}>{item?.mobileNumber}</td>
                <td style={{ border: "none" }}>{getDateFromISOString(item?.createdAt)}</td>
                <td
                   style={{ border: "none" }}   
                >
                  <div className={item?.status ? "complete-booking" : "pending-booking"}
                      style={{textAlign:"center" }}>
                {item?.user?.status ? "Active" : "Inactive"} 

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

export default DeliveryPartner;

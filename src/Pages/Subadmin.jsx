import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteApiData, fetchApiData, getDateFromISOString } from "../utiils";

const Subadmin = () => {
  const [allSubAdmin, setAllSubAdmin] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignRole((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function getSubAdmin() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/searchUser?userType=SUB-ADMIN`
    );
    setAllSubAdmin(data?.data?.docs);
  }
  console.log(allSubAdmin);

  async function handleDeleteUser(id) {
    const data = await deleteApiData(
      `https://muvit-project.vercel.app/api/v1/admin/users/profile/delete/${id}`
    );
    getSubAdmin();
  }

  useEffect(() => {
    getSubAdmin();
  }, []);

  return (
    <div>
      <div className="dashboard_container_split2">
        <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
          <Button
            style={{ backgroundColor: "#FEBF05", border: "none" }}
            onClick={() => navigate("/subadmin/add-subadmin")}
          >
            + Create Sub-Admin
          </Button>
          
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
                  User Name
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
                  Status
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allSubAdmin?.map((item, i) => (
                <tr key={i} style={{ border: "none", cursor: "pointer" }}>
                  <td style={{ border: "none", width: "150px" }}>
                    {item?.fullName}
                  </td>
                  <td style={{ border: "none" }}>{item?.email}</td>
                 

                 
                  <td style={{ border: "none", width: "200px" }}>
                    {item?.mobileNumber}
                  </td>
                  <td style={{ border: "none", width: "60px" }}>
                    {item?.status ? "Active" : "Inactive"}
                  </td>
                  <td style={{ border: "none" }}>
                  <button onClick={()=> navigate(`/subadmin/update-role/${item?._id}`)} style={{backgroundColor:"#FEBF05" , marginRight:"20px", border:"none", color:"white", padding:"5px 10px",  borderRadius:"5px"}}>Update Role</button>
                    <button
                      onClick={() => handleDeleteUser(item?._id)}
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

export default Subadmin;

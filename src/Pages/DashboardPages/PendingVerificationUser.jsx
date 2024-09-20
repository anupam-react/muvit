import { Icon } from "@iconify/react/dist/iconify.js";
import { Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApiData, updateApiData } from "../../utiils";
import { successToast } from "../../Components/Toast";

const PendingVerificationUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  async function getUsers() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/users/pending-verification`
    );
    setAllUsers(data?.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = async (id) => {
  
    try {
      const response = await updateApiData(
        `https://muvit-project.vercel.app/api/v1/admin/users/${id}/update-verification-status`,
        {isVerified: true}
      );
      console.log(response);
      getUsers()
     successToast("Verification SuccessFully")

    } catch (error) {
      console.log(error);
    }
    // Handle form submission logic here
  };

  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
        <div className="dashboard_container_split_totals2">
          <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
            <span
              onClick={() => navigate("/dashboard/total-user")}
              style={{ cursor: "pointer" }}
            >
              <Icon
                icon="solar:alt-arrow-left-linear"
                width="1.2rem"
                height="2.2rem"
                style={{ color: "#202224", fontWeight: "bold" }}
              />
            </span>
            <span>Pending Verification Users</span>
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
                  <td style={{ border: "none" }}>{item?.firstName + " " + item?.lastName}</td>
                  <td style={{ border: "none" }}>{item?.email}</td>
                  <td style={{ border: "none" }}>{item?.mobileNumber}</td>
                  <td style={{ border: "none" }}>{item?.userType}</td>
                
                  <td style={{ border: "none" }}>
                    <button
                      onClick={() => handleSubmit(item?._id)}
                      style={{
                        backgroundColor: "red",
                        border: "none",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      Verification
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

export default PendingVerificationUser;

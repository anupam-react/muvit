import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteApiData, fetchApiData } from "../utiils";

const Faq = () => {
  const [allFaq, setAllFaq] = useState([]);
  const navigate = useNavigate();

  async function getFaq() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/faqs`
    );
    setAllFaq(data?.data);
  }
  async function handleDeleteFaq(id) {
    const data = await deleteApiData(
      `https://muvit-project.vercel.app/api/v1/admin/faqs/${id}`
    );
    getFaq();
  }
  console.log(allFaq);

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
        <div className="delivery_container_split_totals">
          <div></div>
          <div>
            <Button onClick={() => navigate("/faq/add-faq")}>
              {" "}
              + Add Faq
            </Button>
          </div>
        </div>
        <div className="dashboard_container_split_totals2">
          <span style={{ display: "flex", gap: ".5rem", fontSize: "2rem" }}>
            <span
             
              style={{ cursor: "pointer" }}
            >
              
            </span>
            <span>FAQ</span>
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
                  Question
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Answer
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
              {allFaq?.map((item, i) => (
                <tr style={{ border: "none", padding: "1rem 0" }}>
                  <td style={{ border: "none", width: "300px" }}>
                    {item?.question}
                  </td>
                  <td style={{ border: "none", width: "300px" }}>
                    {item?.answer}
                  </td>
                  <td style={{ border: "none" }}>{item?.userType}</td>
                  <td style={{ border: "none" }}>
                    <button
                      onClick={() =>
                        navigate(`/faq/update-faq/${item?._id}`)
                      }
                      style={{
                        backgroundColor: "#FEBF05",
                        marginRight: "20px",
                        border: "none",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteFaq(item?._id)}
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

export default Faq;

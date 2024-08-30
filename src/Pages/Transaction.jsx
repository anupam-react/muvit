
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApiData, getDateFromISOString } from "../utiils";
import { all } from "axios";


const Transaction = () => {
  const [allTrans, setAllTrans] = useState([]);


  async function getAllTrans() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/transactions/all`
    );
    setAllTrans(data?.data);
  }
  console.log(allTrans);


  useEffect(() => {
    getAllTrans();
  }, []);

  return (
    <div>
      <div className="dashboard_container_split2">
      <div style={{ display: "flex", justifyContent: "end" , gap:"10px" }}>
          <Button
            style={{ backgroundColor: "#FEBF05", border: "none" }}
           
          >
           Total Credit - {allTrans?.totalCredit}
          </Button>
          <Button
            style={{ backgroundColor: "#FEBF05", border: "none" }}
           
          >
           Total Debit - {allTrans?.totalDebit}
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
                  Amount
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Details
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                Spent type
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Transaction Type
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
            
              </tr>
            </thead>
            <tbody>
              {allTrans?.transactions?.map((item, i) => (
                <tr
                  key={i}
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <td style={{ border: "none", width: "200px" }}>
                    {item?.user?.fullName}
                  </td>
                  <td style={{ border: "none", width: "100px" }}>
                    {item?.amount}
                  </td>
                  <td style={{ border: "none" }}>{item?.details}</td>

                  <td style={{ border: "none", width: "60px" }}>
                    {item?.type}
                  </td>
                  <td style={{ border: "none", width: "200px" }}>
                    {item?.cr ? "Credit" : "Debit"}
                  </td>
                  <td style={{ border: "none", width: "60px" }}>
                    {getDateFromISOString(item?.createdAt)}
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

export default Transaction;

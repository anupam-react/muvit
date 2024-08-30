import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import HOC from "../../Components/MainComponents/HOC";
import { useNavigate } from "react-router-dom";
import { deleteApiData, fetchApiData } from "../../utiils";

const VehiclePrice = () => {
  const [allPrice, setAllPrice] = useState([]);
  const navigate = useNavigate();

  async function getPrice() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/vechile-price`
    );
    setAllPrice(data?.data);
  }
  async function handleDeletePrice(id) {
    const data = await deleteApiData(
      `https://muvit-project.vercel.app/api/v1/admin/vechile-price/${id}`
    );
    getPrice()
  }
 console.log(allPrice)

  useEffect(()=>{
    getPrice()
  },[])

  return (
    <div>
      {" "}
      <div className="dashboard_container_split2">
        <div className="delivery_container_split_totals">
          <div></div>
          <div>
            <Button onClick={() => navigate("/dashboard/add-vehicle-price")}>
              {" "}
              + Add Vehicle Price
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
            <span>Vehicle Price</span>
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
                Vehicle Name
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Base
                </th>
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Mile
                </th>
               
                <th
                  style={{
                    backgroundColor: "#F1F4F9",
                    color: "#202224",
                    border: "none",
                  }}
                >
                  Minute
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
              {allPrice?.map((item , i)=>(
              <tr style={{ border: "none", padding: "1rem 0" }}>
                <td style={{ border: "none" }}>{item?.vechileType?.name}</td>
                <td style={{ border: "none" }}>{item?.base}</td>
                <td style={{ border: "none" }}>{item?.mile}</td>
                <td style={{ border: "none" }}>{item?.minute}</td>
          
                
                <td style={{ border: "none" }}>
                 <button onClick={()=> navigate(`/dashboard/update-vehicle-price/${item?._id}`)} style={{backgroundColor:"#FEBF05" , marginRight:"20px", border:"none", color:"white", padding:"5px 10px",  borderRadius:"5px"}}>Update</button>
                 <button onClick={()=> handleDeletePrice(item?._id)} style={{backgroundColor:"red" , border:"none", color:"white", padding:"5px 10px",  borderRadius:"5px"}}>Delete</button>
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

export default VehiclePrice;

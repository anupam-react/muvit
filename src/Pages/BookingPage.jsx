import { Icon } from "@iconify/react/dist/iconify.js";
import HOC from "../Components/MainComponents/HOC";
import { Button, Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData, getDateFromISOString } from "../utiils";
import axios from "axios";
import { LocationPicker } from "./LocationPicker";

const BookingPage = () => {
  const [isAssigned, setIsAssigned] = useState(false);
  const [filter, setFilter] = useState("");
  const [allBooking, setAllBooking] = useState([]);
  const [allUnAssignBooking, setAllUnAssignBooking] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupSuccess, setPopupSuccess] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [pickupAddress, setpickupAddress] = useState("");
  const [dropAddress, setdropAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [coordinates1, setCoordinates1] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [assignRole , setAssignRole] = useState({
    role:"PARTNER",
    partnerId:"",
    pickupDate:"",
    pickupTime:""
  })
  const [selectedAddress1, setSelectedAddress1] = useState('');
  const [selectedAddress2, setSelectedAddress2] = useState('');
  const [debouncedAddress, setDebouncedAddress] = useState( selectedAddress1 || pickupAddress );
  const [debouncedAddress1, setDebouncedAddress1] = useState( selectedAddress2 || dropAddress );
  const [showMapModal1, setShowMapModal1] = useState(false);
  const [showMapModal2, setShowMapModal2] = useState(false);
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    lat: '',
    lng: '',
  });

  const openMapModal = () => setShowMapModal1(true);
  const closeMapModal = () => setShowMapModal1(false);
  const openMapModal2 = () => setShowMapModal2(true);
  const closeMapModal2 = () => setShowMapModal2(false);

  const handleLocationSelect = ({ location, address }) => {
    setSelectedCoordinates(location);
    setSelectedAddress1(address);
    closeMapModal(); // Close the modal after location is selected
  };
  const handleLocationSelect2 = ({ location, address }) => {
    setSelectedAddress2(address);
    closeMapModal2(); // Close the modal after location is selected
  };

  console.log(selectedAddress1, selectedCoordinates)


  const navigate = useNavigate();



  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignRole((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
        setDebouncedAddress( selectedAddress1 || pickupAddress);
        setDebouncedAddress1( selectedAddress2 || dropAddress );
    }, 1000); // 500ms delay

    return () => {
        clearTimeout(timerId);
    };
}, [pickupAddress, dropAddress]);

useEffect(() => {
    if (debouncedAddress || debouncedAddress1) {
        getCoordinates(debouncedAddress , setCoordinates);
      getCoordinates(debouncedAddress1 , setCoordinates1);
    }
}, [debouncedAddress , debouncedAddress1]);



  async function getUsers() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/profile?currentRole=${assignRole?.role}`
    );
    setAllUsers(data?.data);
  }
  console.log(allUsers);

  async function getBookingFilter(search="", role="") {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/searchBooking?search=${search}&role=${role}`
    );
    setAllBooking(data?.data?.docs?.filter((d)=> d?.status !== "PENDING"));
    setAllUnAssignBooking(data?.data?.docs?.filter((d)=> d?.status === "PENDING"));
  }

useEffect(()=>{
  getUsers();
},[assignRole.role])

  useEffect(() => {
    getBookingFilter();
  
  }, []);

  const getCoordinates = async (address ,setCoordinate) => {
    const apiKey = "AIzaSyAxvv_NnQpCjr0n4J1zSomdYInOmvoKOjc"; // Replace with your Google Maps API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data.status === "OK") {
        const location = response.data.results[0].geometry.location;
        setCoordinate({ latitude: location.lat, longitude: location.lng });
        setError(null);
      } else {
        setError("Unable to find the location. Please try again.");
        setCoordinate(null);
      }
    } catch (err) {
      setError("Error occurred while fetching the data.");
      setCoordinate(null);
    }
  };

  console.log(coordinates , coordinates1)

  const handleAssignRoleSubmit = async (e) => {
    e.preventDefault();


    const formData = {
      role: assignRole?.role,
      partnerId: assignRole?.partnerId,
      pickupDate: assignRole?.pickupDate,
      pickupTime: assignRole?.pickupTime,
      pickupCoordinates: {
        type: "Pickup",
        coordinates: [
            coordinates?.latitude,
            coordinates?.longitude
        ]
    },
    dropCoordinates: {
        type: "Drop",
        coordinates: [
          coordinates1?.latitude,
          coordinates1?.longitude
        ]
    },
    };
   

    try {
      const response = await createApiData(
        `https://muvit-project.vercel.app/api/v1/admin/bookings/assignbyId/${isPopupOpen}`,
        formData
      );
      setPopupSuccess(true)
      setTimeout(()=>{
        setPopupSuccess(false)
        setPopupOpen(false)
      },1500)
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
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
            <span>{filter === "driver" ? "Driver Bookings" : filter ==="helper" ? "Helper Bookings" : filter ==="helper" ? "Helper & Delivery Bookings" :"Bookings" }</span>
          </span>
          <span style={{ display: "flex", gap: "1rem" }}>
            <span>
              <Button
                style={{
                  backgroundColor: isAssigned ? "#00B69B" : "#F1F4F9",
                  color: isAssigned ? "white" : "#202224",
                  border: "none",
                }}
                onClick={() => {setIsAssigned(!isAssigned)}}
              >
                {isAssigned
                  ? `Un assigned Bookings (${allUnAssignBooking?.length})`
                  : `Un assigned Bookings (${allUnAssignBooking?.length})`}
              </Button>
            </span>

            <span>
              <Form.Control
                type="text"
                placeholder="Search by Date, ID or Order"
                value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              getBookingFilter(e.target.value);
            }}
              />
            </span>
            <span>
              <Form.Select onChange={(e) =>{
                getBookingFilter("", e.target.value);
                 setFilter(e?.target?.value)
                 }}>
                <option disabled selected>Choose Category</option>
                <option value="driver">Driver</option>
                <option value="helper">Helper</option>
                <option value="helper">Helper and Delivery</option>
              </Form.Select>
            </span>
          </span>
        </div>
        <div></div>
        {!isAssigned ? (
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
                    Sr no.
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
                    {filter === "HELPER" ? "Service Type" : "Vehicle Type"}
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
                    Pickup
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Drop
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Add-on Packaging
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Add-on Service
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Order Status
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
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Discount Offered
                  </th>

                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      borderRadius: "0 12px 12px 0",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                {allBooking?.map((item, i) => (
                  <tr
                    key={i}
                    onClick={() => navigate(`/booking/${item?._id}`)}
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    <td style={{ border: "none", width: "60px" }}>
                      #000_{i + 1}
                    </td>
                    <td style={{ border: "none" }}>{item?.bookingId}</td>
                    <td style={{ border: "none", width: "60px" }}>
                      {item?.vechileType?.name}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>
                      {getDateFromISOString(item?.createdAt)}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>
                      {item?.pickupName}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>
                      {item?.dropName}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>Add-on</td>
                    <td style={{ border: "none", width: "60px" }}>Add-on</td>
                    <td style={{ border: "none" }}>
                      <div
                        className={
                          item?.status === "COMPLETED"
                            ? "complete-booking"
                            : "pending-booking"
                        }
                      >
                        {item?.status}
                      </div>
                    </td>

                    <td style={{ border: "none", width: "60px" }}>
                      {item?.totalPrice}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>000</td>
                    <td
                      style={{
                        border: "none",
                        width: "60px",
                        textTransform: "uppercase",
                      }}
                    >
                      india
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
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
                    Sr no.
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
                    {filter === "helper" ? "Service Type" : "Vehicle Type"}
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
                    Pickup
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Drop
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Add-on Packaging
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Add-on Service
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Order Status
                  </th>
                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Assign Role
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
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Discount Offered
                  </th>

                  <th
                    style={{
                      backgroundColor: "#F1F4F9",
                      borderRadius: "0 12px 12px 0",
                      color: "#202224",
                      border: "none",
                    }}
                  >
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUnAssignBooking?.map((item, i) => (
                  <tr key={i} style={{ border: "none", cursor: "pointer" }}  >
                    <td style={{ border: "none", width: "60px" }} onClick={() => navigate(`/booking/${item?._id}`)}>
                      #000_{i + 1}
                    </td>
                    <td style={{ border: "none" }}>{item?.bookingId}</td>
                    <td style={{ border: "none", width: "60px" }}>
                      {item?.vechileType?.name}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>
                      {getDateFromISOString(item?.createdAt)}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>
                      {item?.pickupName}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>
                      {item?.dropName}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>Add-on</td>
                    <td style={{ border: "none", width: "60px" }}>Add-on</td>
                    <td style={{ border: "none" }}>
                      <div
                        className={
                          item?.status === "COMPLETED"
                            ? "complete-booking"
                            : "pending-booking"
                        }
                      >
                        {item?.status}
                      </div>
                    </td>
                    <td style={{ border: "none" }}>
                      <div
                        onClick={() => setPopupOpen(item?._id)}
                        className={
                          item?.user?.currentRole
                            ? "complete-booking"
                            : "pending-booking"
                        }
                      >
                        Assign
                      </div>
                    </td>
                    <td style={{ border: "none", width: "60px" }}>
                      {item?.totalPrice}
                    </td>
                    <td style={{ border: "none", width: "60px" }}>000</td>
                    <td
                      style={{
                        border: "none",
                        width: "60px",
                        textTransform: "uppercase",
                      }}
                    >
                      India
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
      {isPopupOpen && (
        <div className="popup-overlay" onClick={() => setPopupOpen(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <p
                style={{ fontSize: "24px", color: "#202224", fontWeight: 700 }}
              >
                Assign Role To Order
              </p>
              <div className="close-button" onClick={() => setPopupOpen(false)}>
                <img src="../Vector (45).png" alt="" />
              </div>
            </div>

            <label htmlFor="role" className="input-label">
              Choose Role
            </label>
            <select id="role" className="input-field" name="role" value={assignRole?.role} onChange={handleChange}>
              <option value="helper" disabled>
                Select Role
              </option>
              <option value="PARTNER">DRIVER</option>
              <option value="HELPER">HELPER</option>
              <option value="COURIER">COURIER</option>
            </select>

            <label htmlFor="booking" className="input-label">
              Assign Booking To
            </label>
            <select id="booking" className="input-field" name="partnerId" value={assignRole?.partnerId} onChange={handleChange}>
              <option value="" disabled>Choose ID And Name</option>
              {allUsers?.map((data, i)=>(
                   <option value={data?.user?._id}>{data?.user?.userId} , {data?.user?.firstName + " " + data?.user?.lastName}</option>
              ))}
            </select>

            <label htmlFor="pickup" className="input-label">
              Add Pickup Location
            </label>
            <div style={{position:"relative"}}>

            <input
              type="text"
              id="pickup"
              className="input-field"
              style={{paddingRight:"50px"}}
              placeholder="Address"
              value={ selectedAddress1 || pickupAddress}
              onChange={(e)=>{
                 setpickupAddress(e.target.value)
                //  getCoordinates(e.target.value)
                }}
            />
            <img src="../location.jpg"  onClick={openMapModal} alt="" style={{width:"20px", position:"absolute" , right:"20px", top:"10px" , cursor:"pointer"}} />
            </div>
            <div style={{position:"relative"}}>
            <label htmlFor="dropoff" className="input-label">
              Add Dropoff Location
            </label>
            <input
              type="text"
              id="dropoff"
              className="input-field"
              style={{paddingRight:"50px"}}
              placeholder="Address"
              value={ selectedAddress2 || dropAddress}
              onChange={(e)=> setdropAddress(e.target.value)}
            />
              <img src="../location.jpg"  onClick={openMapModal2} alt="" style={{width:"20px", position:"absolute" , right:"20px", top:"40px" , cursor:"pointer"}} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "10px",
              }}
            >
              <div>
                <label htmlFor="date" className="input-label">
                  Select Date
                </label>
                <input type="date" id="date" className="input-field" name="pickupDate" value={assignRole?.pickupDate} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="time" className="input-label">
                  Select Timing
                </label>
                <input type="time" id="time" className="input-field" name="pickupTime" value={assignRole?.pickupTime} onChange={handleChange}/>
              </div>
            </div>
            <button className="assign-button" onClick={handleAssignRoleSubmit}>Assign</button>
          </div>
        </div>
      )}


      {isPopupSuccess && (
        <div className="popup-overlay" onClick={() => setPopupOpen(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <div style={{display:"flex" , flexDirection:"column", justifyItems:"center", alignItems:"center" , width:"100%"}}>
           <img src="../Mask group (4).png" alt="" />
           <p style={{color:"#121212" , fontWeight:700}}>Successfully Assigned Task
         </p>
         <p style={{color:"#121212"}}>  {assignRole?.role}</p>
              </div>
          </div>
        </div>
      )}

{showMapModal1 && (
        <div
          className="popup-overlay"
          onClick={closeMapModal}
        >
          <div
           style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <LocationPicker onLocationSelect={handleLocationSelect} />
            <button
              onClick={closeMapModal}
              style={{
                marginTop: '20px',
                backgroundColor: '#dc3545',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}

            >
              Cancel
            </button>
          </div>
        </div>
      )}
{showMapModal2 && (
        <div
          className="popup-overlay"
          onClick={closeMapModal2}
        >
          <div
           style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <LocationPicker onLocationSelect={handleLocationSelect2} />
            <button
              onClick={closeMapModal2}
              style={{
                marginTop: '20px',
                backgroundColor: '#dc3545',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}

            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;

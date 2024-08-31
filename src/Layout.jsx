// Layout.js
import React, { useEffect, useState } from "react";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/MainComponents/NavBar";
import { fetchApiData } from "./utiils";


const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const [profile , setProfile] =  useState()
  const toggleSidebar = () => {
    console.log("clicked");
    setShow(!show);
  };
  async function getProfile() {
    const data = await fetchApiData(
      "https://muvit-project.vercel.app/api/v1/admin/getprofile"
    );
    setProfile(data?.data);
  }

  useEffect(()=>{
    getProfile()
  },[])
  return (
     <div className={`${show ? "HOC_Admin_Panel" : ""}`}>
        {show && (
          <div className={`${show ? "admin_sidebar" : ""}`}>
            <SideBar toggleSidebar={toggleSidebar} data={profile}/>
          </div>
        )}
        <div className="content">
          <NavBar show={show} toggleSidebar={toggleSidebar} data={profile}/>
          <div className="child-component">
           {children}
          </div>
        </div>
      </div>
  );
};

export default Layout;

import { useState } from "react";
import SideBar from "../SideBar";
import NavBar from "./NavBar";

const HOC = (WrappedComponent) => {
  const WrappedWithHOC = () => {
    const [show, setShow] = useState(true);
    const toggleSidebar = () => {
      console.log("clicked");
      setShow(!show);
    };

    return (
      <div className={`${show ? "HOC_Admin_Panel" : ""}`}>
        {show && (
          <div className={`${show ? "admin_sidebar" : ""}`}>
            <SideBar toggleSidebar={toggleSidebar} />
          </div>
        )}
        <div className="content">
          <NavBar show={show} toggleSidebar={toggleSidebar} />
          <div className="child-component">
            <WrappedComponent />
          </div>
        </div>
      </div>
    );
  };

  return WrappedWithHOC;
};

export default HOC;

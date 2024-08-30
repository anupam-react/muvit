import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
const pathName = "/dashboard/";
return (
  <div className="sidebar">
    <div className="sidebar_container">
      <div className="sidebar_logo">
        <img src="/Images/LoginPage/logo-image.png" alt="logo" />
      </div>
      <div className="sidebar_items">
        <div
          style={{
            color: path.startsWith("/dashboard") ? "#197bbd" : "#C7C7C7",
            backgroundColor: path.startsWith("/dashboard") ? "#f0f7ff" : "#FFFF",
          }}
          className="sidebar_item"
          onClick={() => navigate("/dashboard")}
        >
          <span>
            <span>
              <Icon className="icon_dashboard" icon="bi:graph-up" />
            </span>
            <span>Dashboard</span>
          </span>
        </div>
        <div
          style={{
            color: path === "/promotions" ? "#197bbd" : "#C7C7C7",
            backgroundColor: path === "/promotions" ? "#f0f7ff" : "#FFFF",
          }}
          className="sidebar_item"
          onClick={() => navigate("/promotions")}
        >
          <span>
            <span>
              <Icon
                className="icon_dashboard"
                icon="solar:medal-ribbon-outline"
              />
            </span>
            <span>Promotions</span>
          </span>
        </div>
        <div
          style={{
            color: path === "/booking" ? "#197bbd" : "#C7C7C7",
            backgroundColor: path === "/booking" ? "#f0f7ff" : "#FFFF",
          }}
          className="sidebar_item"
          onClick={() => navigate("/booking")}
        >
          <span>
            <span>
              <Icon className="icon_dashboard" icon="f7:menu" />
            </span>
            <span>Booking</span>
          </span>
        </div>
        <div
          style={{
            color: path === "/notification" ? "#197bbd" : "#C7C7C7",
            backgroundColor: path === "/notification" ? "#f0f7ff" : "#FFFF",
          }}
          className="sidebar_item"
          onClick={() => navigate("/notification")}
        >
          <span>
            <span>
              <Icon className="icon_dashboard" icon="f7:menu" />
            </span>
            <span>Push Notification</span>
          </span>
        </div>
        <div
          style={{
            color: path === "/faq" ? "#197bbd" : "#C7C7C7",
            backgroundColor: path === "/faq" ? "#f0f7ff" : "#FFFF",
          }}
          className="sidebar_item"
          onClick={() => navigate("/faq")}
        >
          <span>
            <span>
              <Icon className="icon_dashboard" icon="f7:menu" />
            </span>
            <span>FAQ</span>
          </span>
        </div>
        <div
          style={{
            color: path === "/transaction" ? "#197bbd" : "#C7C7C7",
            backgroundColor: path === "/transaction" ? "#f0f7ff" : "#FFFF",
          }}
          className="sidebar_item"
          onClick={() => navigate("/transaction")}
        >
          <span>
            <span>
              <Icon className="icon_dashboard" icon="f7:menu" />
            </span>
            <span>Transaction</span>
          </span>
        </div>
        <div
          style={{
            color: path === "/subadmin" ? "#197bbd" : "#C7C7C7",
            backgroundColor: path === "/subadmin" ? "#f0f7ff" : "#FFFF",
          }}
          className="sidebar_item"
          onClick={() => navigate("/subadmin")}
        >
          <span>
            <span>
              <Icon className="icon_dashboard" icon="f7:menu" />
            </span>
            <span>Sub-Admin</span>
          </span>
        </div>

        <div
          style={{
            color:
              path === "/setting/privacy-policy" ||
              path === "/setting/contact-us" ||
              path === "/setting/admin" ||
              path === "/setting/payment"
                ? "#197bbd"
                : "#C7C7C7",
            backgroundColor:
              path === "/setting/privacy-policy" ||
              path === "/setting/contact-us" ||
              path === "/setting/admin" ||
              path === "/setting/payment"
                ? "#f0f7ff"
                : "#FFFF",
          }}
          className="sidebar_item sidebar_item_bottom"
          onClick={() => navigate("/setting/privacy-policy")}
        >
          <span>
            <span>
              <Icon className="icon_dashboard" icon="uil:setting" />
            </span>
            <span>Setting</span>
          </span>
        </div>
        <div
          style={{
            color: path === "/logout" ? "#F57FA6" : "#F57FA6",
            backgroundColor: path === "/logout" ? "#f0f7ff" : "none",
          }}
          className="sidebar_item"
          onClick={() =>{ 
            sessionStorage.removeItem('token')
            navigate("/")}}
        >
          <span>
            <span>
              <Icon
                className="icon_dashboard"
                icon="solar:logout-line-duotone"
              />
            </span>
            <span>Logout</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);
};

export default SideBar;

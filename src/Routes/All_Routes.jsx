import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import ForgotPassword from "../Pages/ForgotPassword";
import Dashboard from "../Pages/Dashboard";
import ForgotPassword1 from "../Pages/ForgotPassword1";
import ForgotPassword2 from "../Pages/forgotPassword2";
import BookingPage from "../Pages/BookingPage";
import PromotionPage from "../Pages/PromotionPage";
import DeliveryZone from "../Pages/DashboardPages/DeliveryZone";
import DeliveryPartner from "../Pages/DashboardPages/DeliveryPartner";
import VehicleType from "../Pages/DashboardPages/VehicleType";
import TotalUser from "../Pages/DashboardPages/TotalUser";
import AdminProfile from "../Pages/AdminProfile/AdminProfile";
import AddDeliveryPartner from "../Pages/DashboardPages/AddDeliveryPartner";
import AddVehicleType from "../Pages/DashboardPages/AddVehicleType";
import AddDeliveryZone from "../Pages/DashboardPages/AddDeliveryZone";
import Settings from "../Pages/Settings";
import BookingDetaills from "../Pages/BookingDetaills";
import PrivateRoutes from "../utiils/PrivateRoutes";
import RegisterPage from "../Pages/RegisterPage";

const All_Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotpassword/:id" element={<ForgotPassword />} />
      <Route path="/forgotpassword/email" element={<ForgotPassword1 />} />
      <Route
        path="/forgotpassword/verification"
        element={<ForgotPassword2 />}
      />
       <Route element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking/:id" element={<BookingDetaills />} />
      <Route path="/promotions" element={<PromotionPage />} />
      <Route path="/setting/privacy-policy" element={<Settings />} />
      <Route path="/setting/contact-us" element={<Settings />} />
      <Route path="/setting/admin" element={<AdminProfile />} />
      <Route path="/setting/payment" element={<AdminProfile />} />
      <Route path="/dashboard/delivery-zone" element={<DeliveryZone />} />
      <Route
        path="/dashboard/add-delivery-zone"
        element={<AddDeliveryZone />}
      />
      <Route path="/dashboard/delivery-partner" element={<DeliveryPartner />} />
      <Route path="/dashboard/add-partner" element={<AddDeliveryPartner />} />
      <Route path="/dashboard/vehicle-type" element={<VehicleType />} />
      <Route path="/dashboard/add-vehicle-type" element={<AddVehicleType />} />
      <Route path="/dashboard/total-user" element={<TotalUser />} />
      <Route path="/admin-profile" element={<AdminProfile />} />
       </Route>

      <Route path="*" element={<h1>No Page Found</h1>} />
    </Routes>
  );
};

export default All_Routes;

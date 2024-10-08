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
import UpdateVehicleType from "../Pages/DashboardPages/UpdateVehicleType";
import AddBanner from "../Pages/AddBanner";
import AddCoupon from "../Pages/AddCoupon";
import UpdateCoupon from "../Pages/UpdateCoupon";
import UpdateBanner from "../Pages/UpdateBanner";
import PendingVerificationUser from "../Pages/DashboardPages/PendingVerificationUser";
import VehiclePrice from "../Pages/DashboardPages/VehiclePrice";
import AddVehiclePrice from "../Pages/DashboardPages/AddVehiclePrice";
import UpdateVehiclePrice from "../Pages/DashboardPages/UpdateVehiclePrice";
import NotificationPage from "../Pages/NotificationPage";
import AddNotification from "../Pages/AddNotification";
import Transaction from "../Pages/Transaction";
import Faq from "../Pages/Faq";
import AddFaq from "../Pages/AddFaq";
import UpdateFaq from "../Pages/UpdateFaq";
import Subadmin from "../Pages/Subadmin";
import AddSubAdmin from "../Pages/AddSubAdmin";
import UpdateRole from "../Pages/UpdateRole";

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
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/subadmin" element={<Subadmin />} />
      <Route path="/subadmin/add-subadmin" element={<AddSubAdmin />} />
      <Route path="/subadmin/update-role/:id" element={<UpdateRole />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/faq/add-faq" element={<AddFaq />} />
      <Route path="/faq/update-faq/:id" element={<UpdateFaq />} />
      <Route path="/notification/add-notification" element={<AddNotification />} />
      <Route path="/promotions" element={<PromotionPage />} />
      <Route path="/promotions/add-banner" element={<AddBanner />} />
      <Route path="/promotions/update-banner/:id" element={<UpdateBanner />} />
      <Route path="/promotions/add-coupon" element={<AddCoupon />} />
      <Route path="/promotions/update-coupon/:id" element={<UpdateCoupon />} />
      <Route path="/setting/privacy-policy" element={<Settings />} />
      <Route path="/setting/contact-us" element={<Settings />} />
      <Route path="/setting/legal" element={<Settings />} />
      <Route path="/setting/tax" element={<Settings />} />
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
      <Route path="/dashboard/vehicle-price" element={<VehiclePrice />} />
      <Route path="/dashboard/add-vehicle-type" element={<AddVehicleType />} />
      <Route path="/dashboard/add-vehicle-price" element={<AddVehiclePrice />} />
      <Route path="/dashboard/update-vehicle-type/:id" element={<UpdateVehicleType />} />
      <Route path="/dashboard/update-vehicle-price/:id" element={<UpdateVehiclePrice />} />
      <Route path="/dashboard/total-user" element={<TotalUser />} />
      <Route path="/dashboard/verify-user" element={<PendingVerificationUser />} />
      <Route path="/admin-profile" element={<AdminProfile />} />
       </Route>

      <Route path="*" element={<h1>No Page Found</h1>} />
    </Routes>
  );
};

export default All_Routes;

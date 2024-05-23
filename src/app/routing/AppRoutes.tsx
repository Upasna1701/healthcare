import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../../App";
import Homepage from "../../components/Pages/Homepage";
import FacilityPage from "../../components/Pages/FacilityPage";
import VisitorFaciilitySelection from "../../components/Pages/VisitorFaciilitySelection";
import { Login } from "../../components/Pages/Login";
import { useAuth } from "../../components/auth/Auth";
import VisitorCitySelection from "../../components/Pages/VisitorCitySelection";
import Pricing from "../../components/Pages/Pricing";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ForgotPassword from "../../components/Pages/ForgotPassword";
import ResetPassword from "../../components/Pages/ResetPassword";
import CustomMap from "../../components/Maps/CustomMap";
import Chatbot from "../../components/Pages/Chatbot";
import ChatbotSummary from "../../components/Pages/ChatbotSummary";
import MyTrip from "../../components/Pages/MyTrip";
import ChatForm from "../../components/chatbot/ChatForm";

const { PUBLIC_URL }: any = process.env + "/React";

const AppRoutes = () => {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {currentUser ? (
            <>
              <Route path="/facility" element={<FacilityPage />} />
              <Route path="/city" element={<VisitorFaciilitySelection />} />
              <Route path="/cityselection" element={<VisitorCitySelection />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/chatsummary" element={<ChatbotSummary />} />
              <Route path="/chatform" element={<ChatForm />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/mytrip" element={<MyTrip />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/" element={<Navigate to="/" />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="forgot-password" element={<ForgotPassword/>} />
              <Route path="reset-password" element={<ResetPassword/>} />
              <Route path="map" element={<CustomMap />} />
            </>
          ) : (
            <>
              <Route path="/auth" element={<Login />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

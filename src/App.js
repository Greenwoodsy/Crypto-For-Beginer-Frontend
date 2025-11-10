import React, { useEffect, useState } from "react";
import "./index.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword";
import LoginWithCode from "./Pages/Auth/LoginWithCode/LoginWithCode";
import Verify from "./Pages/Auth/Verify/Verify";
import Profile from "./Pages/Profile/Profile";
import Loader from "./components/Loader/Loader";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginStatus,
  getUser,
  selectIsLoggedIn,
  selectUser,
} from "./redux/features/auth/authSlice";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Plans from "./Pages/Plans/Plans";
import Ranking from "./Pages/Ranking/Ranking";
import WorkFlow from "./Pages/WorkFlow/WorkFlow";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Dashboard from "./Payment/Dashboard/Dashboard";
import PaymentManagement from "./Payment/PaymentManagement/PaymentManagement";
import Deposit from "./Payment/Deposit/Deposit";
import { AdminAuthorLink } from "./components/protect/hiddenLink";
import StartInvestment from "./Payment/StartInvestment/StartInvestment";
import InvestmentStatus from "./Payment/InvestmentStatus/InvestmentStatus";
import InvestmentDetail from "./Payment/InvestmentDetail/InvestmentDetail";
import Referrals from "./Payment/Referrals/Referrals";
import AllTransactionHistory from "./Payment/AllTransactionHistory/AllTransactionHistory";
import NotFound from "./Pages/NotFound/NotFound";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Withdraw from "./Payment/Withdraw/Withdraw";
import PendingWithdrawals from "./Payment/PendingWithdrawals/PendingWithdrawals";
import ApproveWithdrawal from "./Payment/ApproveWithdrawal/ApproveWithdrawal";
import AdminWithdrawalDetail from "./Payment/ApproveWithdrawal/ApproveWithdrawal";
import EditBalance from "./Pages/EditBalance/EditBalance";
import GetAllPendingDeposit from "./Payment/GetAllPendingDeposit/GetAllPendingDeposit";
import Navbar from "./components/Navbar/Navbar";
import UserBalEditted from "./Pages/UserBalEditted/UserBalEditted";
import GetAllPendingInvestment from "./Payment/GetAllPendingInvestment/GetAllPendingInvestment";
import UploadKyc from "./Pages/UploadKyc/UploadKyc";
import AdminPendingKyc from "./Pages/AdminPendingKyc/AdminPendingKyc";
import License from "./Pages/License/License";
import Chart from "./Pages/Chart/Chart";
import CompseEmail from "./Pages/CompseEmail/CompseEmail";
import InvestmentFees from "./Pages/InvestmentFees/InvestmentFees";

axios.defaults.withCredentials = true;

const App = () => {
  // State to handle loading
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <div></div>
  );
};

export default App;
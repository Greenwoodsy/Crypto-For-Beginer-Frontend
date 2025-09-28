// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaWallet, FaChartPie, FaHandHoldingUsd, FaUserFriends,
//   FaRegListAlt, FaClock
// } from "react-icons/fa";
// import { TbTarget, TbFileInvoice } from "react-icons/tb";
// import { GiReceiveMoney } from "react-icons/gi";
// import { MdPendingActions, MdVerifiedUser } from "react-icons/md";
// import { AdminAuthorLink } from "../../components/protect/hiddenLink";
// import "./PaymentLinks.css";

// const PaymentLinks = () => {
//   return (
//     <div className="paymentLinksContainer">
//       <NavLink to="/deposit-payment" className="paymentLinkItem">
//         <p className="iconPay"><FaWallet /></p>
//         <p className="depoPay">Fund Wallet</p>
//       </NavLink>

//       <NavLink to="/start-invest" className="paymentLinkItem">
//         <p className="iconPay"><TbTarget /></p>
//         <p className="depoPay">New Investment</p>
//       </NavLink>

//       <NavLink to="/invest-status" className="paymentLinkItem">
//         <p className="iconPay"><FaChartPie /></p>
//         <p className="depoPay">My Portfolio</p>
//       </NavLink>

//       <NavLink to="/investment-plans" className="paymentLinkItem">
//         <p className="iconPay"><FaRegListAlt /></p>
//         <p className="depoPay">Available Plans</p>
//       </NavLink>

//       <NavLink to="/withdraw-wallet" className="paymentLinkItem">
//         <p className="iconPay"><GiReceiveMoney /></p>
//         <p className="depoPay">Withdraw Profit</p>
//       </NavLink>

//       <AdminAuthorLink>
//         <NavLink to="/admin-pending-wallet" className="paymentLinkItem">
//           <p className="iconPay"><FaClock /></p>
//           <p className="depoPay">Pending Withdrawals</p>
//         </NavLink>
//       </AdminAuthorLink>

//       <AdminAuthorLink>
//         <NavLink to="/admin-pending-deposit" className="paymentLinkItem">
//           <p className="iconPay"><MdPendingActions /></p>
//           <p className="depoPay">Pending Deposits</p>
//         </NavLink>
//       </AdminAuthorLink>

//       <AdminAuthorLink>
//         <NavLink to="/admin-pending-investment" className="paymentLinkItem">
//           <p className="iconPay"><FaHandHoldingUsd /></p>
//           <p className="depoPay">Investment Queue</p>
//         </NavLink>
//       </AdminAuthorLink>

//       <AdminAuthorLink>
//         <NavLink to="/pending-kyc" className="paymentLinkItem">
//           <p className="iconPay"><MdVerifiedUser /></p>
//           <p className="depoPay">KYC Approval</p>
//         </NavLink>
//       </AdminAuthorLink>

//       <NavLink to="/referrals" className="paymentLinkItem">
//         <p className="iconPay"><FaUserFriends /></p>
//         <p className="depoPay">Referral Program</p>
//       </NavLink>

//       <NavLink to="/transaction-History" className="paymentLinkItem">
//         <p className="iconPay"><TbFileInvoice /></p>
//         <p className="depoPay">Transactions</p>
//       </NavLink>
//     </div>
//   );
// };

// export default PaymentLinks;


import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaWallet, FaArrowTrendUp, FaChartLine, FaClipboardList,
  FaMoneyBillTransfer, FaHourglassHalf, FaCircleExclamation,
  FaBriefcase, FaShieldHalved, FaPeopleGroup, FaFileInvoiceDollar
} from "react-icons/fa6";
import { AdminAuthorLink } from "../../components/protect/hiddenLink";
import "./PaymentLinks.css";

const PaymentLinks = () => {
  return (
    <div className="paymentLinksWrapper">
      <h2 className="linksHeader">Quick Actions</h2>
      <div className="paymentLinksContainer">
        
        <NavLink to="/deposit-payment" className="paymentLinkItem highlight">
          <div className="iconBadge"><FaWallet /></div>
          <p className="depoPay">Fund Wallet</p>
        </NavLink>

        <NavLink to="/start-invest" className="paymentLinkItem highlight">
          <div className="iconBadge"><FaArrowTrendUp /></div>
          <p className="depoPay">New Investment</p>
        </NavLink>

        <NavLink to="/invest-status" className="paymentLinkItem highlight">
          <div className="iconBadge"><FaChartLine /></div>
          <p className="depoPay">My Portfolio</p>
        </NavLink>

        <NavLink to="/investment-plans" className="paymentLinkItem highlight">
          <div className="iconBadge"><FaClipboardList /></div>
          <p className="depoPay">Available Plans</p>
        </NavLink>

        <NavLink to="/withdraw-wallet" className="paymentLinkItem highlight">
          <div className="iconBadge"><FaMoneyBillTransfer /></div>
          <p className="depoPay">Withdraw Profit</p>
        </NavLink>

        <AdminAuthorLink>
          <NavLink to="/admin-pending-wallet" className="paymentLinkItem highlight">
            <div className="iconBadge"><FaHourglassHalf /></div>
            <p className="depoPay">Pending Withdrawals</p>
          </NavLink>
        </AdminAuthorLink>

        <AdminAuthorLink>
          <NavLink to="/admin-pending-deposit" className="paymentLinkItem highlight">
            <div className="iconBadge"><FaCircleExclamation /></div>
            <p className="depoPay">Pending Deposits</p>
          </NavLink>
        </AdminAuthorLink>

        <AdminAuthorLink>
          <NavLink to="/admin-pending-investment" className="paymentLinkItem highlight">
            <div className="iconBadge"><FaBriefcase /></div>
            <p className="depoPay">Investment Queue</p>
          </NavLink>
        </AdminAuthorLink>

        <AdminAuthorLink>
          <NavLink to="/pending-kyc" className="paymentLinkItem highlight">
            <div className="iconBadge"><FaShieldHalved /></div>
            <p className="depoPay">KYC Approval</p>
          </NavLink>
        </AdminAuthorLink>

        <NavLink to="/referrals" className="paymentLinkItem highlight">
          <div className="iconBadge"><FaPeopleGroup /></div>
          <p className="depoPay">Referral Program</p>
        </NavLink>

        <NavLink to="/transaction-History" className="paymentLinkItem highlight">
          <div className="iconBadge"><FaFileInvoiceDollar /></div>
          <p className="depoPay">Transactions</p>
        </NavLink>

      </div>
    </div>
  );
};

export default PaymentLinks;

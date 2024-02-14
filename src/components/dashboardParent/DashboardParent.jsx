import React from "react";
import "./DashboardParent.css";
import Visitors from "../DASHBOARD/Visitors";
import RevenueChart from "../revenueChart/RevenueChart";
import Table from "../table/Table";
import Doughnut from "../doughnut/Doughnut";
import { RiSearch2Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function DashboardParent({ isMenuOpen, handleMenuClick }) {
  return (
    <div className="dashbordParent_row">
      <div className="dashbordParent_heading">
        <h2>Dashboard</h2>
        <div className="search_input">
          <RiSearch2Line className="search_icon" />
          <input type="text" placeholder="search.." />
        </div>

        <div className="menu">
          {isMenuOpen ? (
            <MdClose className="menu_icon" onClick={handleMenuClick} />
          ) : (
            <FiMenu className="menu_icon" onClick={handleMenuClick} />
          )}
        </div>
      </div>

      <div className="visitor_revenue">
        <Visitors />
        <RevenueChart />
      </div>
      <div className="table_doughnut">
        <Table />
        <Doughnut />
      </div>
    </div>
  );
}

export default DashboardParent;

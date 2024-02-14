import React from "react";
import "./visitors.css";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Visitors() {
  return (
    <div className="visitor-row">
      <div className="visitor_content">
        <div className="visitor_description Visitors">
          <div className="description_heading ">
            <span>Visitors</span>
            <HiOutlineDotsVertical />
          </div>
          <p>30,794</p>
          <span className="percent">+22%</span>
        </div>
        <div className="visitor_description contact">
          <div className="description_heading">
            <span>Contacts</span>
            <HiOutlineDotsVertical />
          </div>
          <p>1,983</p>
          <span className="percent">+21%</span>
        </div>
        <div className="visitor_description Deal">
          <div className="description_heading">
            <span>Attributtable Deal</span>
            <HiOutlineDotsVertical />
          </div>
          <p>57.0</p>
          <span className="percent">+12.6%</span>
        </div>
        <div className="visitor_description Revenue">
          <div className="description_heading">
            <span>Revenue</span>
            <HiOutlineDotsVertical />
          </div>
          <p>$10,622.21</p>
          <span className="percent">+15.2%</span>
        </div>
      </div>
    </div>
  );
}

export default Visitors;

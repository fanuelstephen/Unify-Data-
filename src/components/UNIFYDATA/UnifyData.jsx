import React from "react";
import "./unifyData.css";
import { SiElement } from "react-icons/si";
import { RiServiceFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { SiCodeclimate } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { RiShareCircleLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { HiOutlineDotsVertical } from "react-icons/hi";
import image from "../assert/photo.avif";

function UnifyData({ isMenuOpen }) {
  return (
    <div className={`unifydata_row ${isMenuOpen ? "show" : "hide"}`}>
      <div className="unifydata_info">
        <div className="unifydata_heading">
          <SiElement className="icon" />
          <h3>UNIFYDATA</h3>
        </div>
        <div className="unifydata_content">
          <div className="dashbord_side">
            <div className="dashbord">
              <MdDashboard className="icon" />
              <span>Dashboard</span>
            </div>
            <div className="revenue">
              <RiServiceFill className="icon" />
              <span>Revenue Analytics</span>
            </div>
            <div className="journeys">
              <SiCodeclimate className="icon" />
              <span>Journeys</span>
            </div>
            <div className="performance">
              <RiShareCircleLine className="icon" />
              <span>Performance</span>
            </div>
            <div className="platform">
              <FaDatabase className="icon" />
              <span>Data Platform</span>
            </div>
          </div>

          {/* seting container */}
          <div className="seting_side">
            <div className="setting">
              <CiSettings className="icon" />
              <span>Setting</span>
            </div>
            <div className="Help">
              <TiMessages className="icon" />
              <span>Help</span>
            </div>
          </div>
        </div>
        <div className="user_info">
          <div className="user_info_container">
            <img src={image} alt="person" className="img" />
            <div className="user_details">
              <h6>Arlene Lane</h6>
              <p>GLOBEX.COM</p>
            </div>
          </div>
          <span>
            <HiOutlineDotsVertical className="vertical_dots" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default UnifyData;

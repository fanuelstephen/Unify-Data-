import React from "react";
import "./Doughnut.css";
import { IoIosArrowForward } from "react-icons/io";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 160 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 180 },
];
const COLORS = ["#aac88b", "#6d51bf", "#a69eba", "#e7a1e8"];
function Doughnut() {
  return (
    <div className="doughnut_row">
      <div className="doughnut_row_heading">
        <h4>Top Revenue Channel</h4>
        <div className="doughnut_icon_container">
          <IoIosArrowForward className="doughnut_icon" />
        </div>
      </div>
      <div className="doughtnut_container">
        <div className="piechart">
          <PieChart width={300} height={250}>
            <Pie
              data={data}
              cx={140}
              cy={130}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
      <div className="doughnut_details">
        <div className="doughnut_infodetail">
          <div className="dot direct_dot"></div>
          <span>Direct</span>
        </div>
        <div className="doughnut_infodetail">
          <div className="dot Paid_dot"></div>
          <span>Paid</span>
        </div>
        <div className="doughnut_infodetail">
          <div className="dot Social_dot"></div>
          <span>Social</span>
        </div>
        <div className="doughnut_infodetail">
          <div className="dot other_dot"></div>
          <span>Other</span>
        </div>
      </div>
    </div>
  );
}

export default Doughnut;

import React from "react";
import "./RevenueChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "May",
    uv: 1900,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jun",
    uv: 1100,
    pv: 3700,
    amt: 2210,
  },
  {
    name: "Aug",
    uv: 1100,
    pv: 2400,
    amt: 2290,
  },
  {
    name: "Sep",
    uv: 2480,
    pv: 2198,
    amt: 2000,
  },
  {
    name: "Oct",
    uv: 1690,
    pv: 4200,
    amt: 2181,
  },
];

function RevenueChart() {
  return (
    <div className="revenue-chart_row">
      <div className="revenue_chart-heading">
        <h4>Deal & Revenue</h4>
        <div className="revenue_chart-detail">
          <div className="dot_container">
            <div className="dot dot_deal"></div>
            <span>Deals</span>
          </div>
          <div className="dot_container">
            <div className="dot dot_revenue"></div>
            <span>revanue</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 2,
            right: 1,
            left: 1,
            bottom: 1,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="pv"
            stroke="#a078a4"
            activeDot={{ r: 8 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#835cf7" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;

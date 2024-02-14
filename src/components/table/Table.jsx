import React from "react";
import "./Table.css";
import { TbBrandBinance } from "react-icons/tb";
import { TbBrandBeats } from "react-icons/tb";
import { TbBrandCinema4D } from "react-icons/tb";
import { TbBrandCodesandbox } from "react-icons/tb";

function Table() {
  return (
    <div className="table_row">
      <div className="table_heading">
        <h4>Compaign Perfomance</h4>
        <button className="table_btn">
          Channels: <span>All</span>
        </button>
      </div>
      <div className="table_data">
        <table>
          <thead>
            <tr>
              <th>NO.</th>
              <th>COMPAIGN</th>
              <th>VISITORS</th>
              <th>CONTACTS</th>
              <th>COMPANIES</th>
              <th>LEAD</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="td_name">
                <div className="icon-box">
                  <TbBrandBinance className="td_icon" />
                </div>
                <div className="td-name_discription">
                  <h4>ROQ</h4>
                  <span>search/brand</span>
                </div>
              </td>
              <td>1,181</td>
              <td>217</td>
              <td>150</td>
              <td className="td_lead">26.9</td>
              <td className="td_amount">$78.29</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="td_name">
                <div className="icon-box">
                  <TbBrandBeats className="td_icon" />
                </div>
                <div className="td-name_discription">
                  <h4>Website Add</h4>
                  <span>Retargeting</span>
                </div>
              </td>
              <td>998</td>
              <td>182</td>
              <td>121</td>
              <td className="td_lead">20.1</td>
              <td className="td_amount">$63.21</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="td_name">
                <div className="icon-box">
                  <TbBrandCinema4D className="td_icon" />
                </div>
                <div className="td-name_discription">
                  <h4>Demo</h4>
                  <span>Request</span>
                </div>
              </td>
              <td>891</td>
              <td>145</td>
              <td>81</td>
              <td className="td_lead">14.2</td>
              <td className="td_amount">$48.39</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="td_name">
                <div className="icon-box">
                  <TbBrandCodesandbox className="td_icon" />
                </div>
                <div className="td-name_discription">
                  <h4>Global</h4>
                  <span>Tool</span>
                </div>
              </td>
              <td>541</td>
              <td>98</td>
              <td>67</td>
              <td className="td_lead">10.7</td>
              <td className="td_amount">$35.71</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

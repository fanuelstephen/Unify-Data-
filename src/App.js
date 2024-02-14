import React, { useState } from "react";
import "./App.css";
import UnifyData from "./components/UNIFYDATA/UnifyData";
import DashboardParent from "./components/dashboardParent/DashboardParent";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="unifydata_container">
      <UnifyData isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      <DashboardParent
        handleMenuClick={handleMenuClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
}

export default App;

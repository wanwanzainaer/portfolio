import React from "react";
import "./TerminalCSS.css";
import TerminalScreen from "./TerminalScreen";

import userviewBackgroundImage from "../../images/pexels-photo-414612.jpeg";

const Dashboard = () => {
  return (
    <div
      className="fullScreen"
      style={{
        backgroundImage: `url(${userviewBackgroundImage})`
      }}
    >
      <div
        className="container"
        style={{ top: "20%", position: "relative" }}
      >
        <TerminalScreen />
      </div>
    </div>
  );
};

export default Dashboard;

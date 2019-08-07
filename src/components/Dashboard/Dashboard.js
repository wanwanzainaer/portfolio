import React from "react";
import TerminalScreen from "./TerminalScreen";
import ImageSlider from "./ImageSlider";

import "./ImageTranslate.css";
import "./TerminalCSS.css";

const Dashboard = () => {
  return (
    <>
      <ImageSlider />
      <TerminalScreen />
    </>
  );
};

export default Dashboard;

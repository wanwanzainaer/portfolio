import React from "react";
import TerminalTyping from "./TerminalTyping";

const TerminalScreen = () => {
  return (
    //must change the word
    <div
      className="container"
      style={{ top: "20%", position: "relative" }}
    >
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose" />
        <div className="fakeButtons fakeMinimize" />
        <div className="fakeButtons fakeZoom" />
        <span className="terminalTitle">Wan Wan</span>
      </div>
      <div className="fakeScreen">
        <TerminalTyping />
      </div>
    </div>
  );
};
export default TerminalScreen;

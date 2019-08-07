import React from "react";
import "./TerminalCSS.css";
import Typed from "react-typed";

const TerminalScreen = () => {
  return (
    <>
      {" "}
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose" />
        <div className="fakeButtons fakeMinimize" />
        <div className="fakeButtons fakeZoom" />
      </div>
      <div className="fakeScreen">
        <Typed
          style={{ fontSize: 40, color: "#46a3ff" }}
          strings={["for test the typing\njisdfjisdfji"]}
          typeSpeed={60}
        />
        <br />

        <Typed
          strings={[
            "for test the typing\njisdfjisdfji       <br />  qwerqwerqwer      "
          ]}
          typeSpeed={40}
        />
        <br />
        <Typed
          strings={[
            "Search for products",
            "Search for categories",
            "Search for brands"
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
        >
          <input type="text" />
        </Typed>
      </div>
    </>
  );
};
export default TerminalScreen;

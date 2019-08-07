import React from "react";
import Typed from "react-typed";

const TerminalTyping = () => {
  return (
    <>
      <Typed
        style={{ fontSize: 30, color: "#46a3ff" }}
        strings={["Hi here is <span>Wanwan</span> protfolio"]}
        typeSpeed={60}
      />
      <br />
      <Typed
        style={{ fontSize: 25, color: "#429E8B" }}
        strings={[
          "I am a full stack developer",
          "I am an iOS developer",
          "I am a software engineer",
          "I am a traveler "
        ]}
        typeSpeed={40}
        backSpeed={50}
        smartBackspace
        loop
      />
      <br />
    </>
  );
};

export default TerminalTyping;

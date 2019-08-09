import React, { useState } from "react";
import Typed from "react-typed";

const TerminalTyping = () => {
  const [state, setState] = useState({
    showTitle: false,
    showAttitude: false,
    showContact: false
  });

  return (
    <>
      <Typed
        style={{ fontSize: 25, color: "burlywood" }}
        strings={[
          "I'm extraordinarily motivated by the desire to achieve higher level of coding skills by challenging myself everyday."
        ]}
        typeSpeed={40}
        onComplete={() => {
          setState({ ...state, showAttitude: true });
        }}
      />
      <br />
      <br />
      {state.showTitle ? (
        <Typed
          style={{
            fontSize: 35,
            color: "white"
          }}
          strings={[
            "I am a full-stack developer",
            "I am an iOS developer",
            "I am a software engineer",
            "I am a traveler"
          ]}
          typeSpeed={40}
          backSpeed={30}
          smartBackspace
          loop
        />
      ) : null}
      <br />
      <br />
      {state.showAttitude ? (
        <Typed
          style={{ fontSize: 25, color: "#46a3ff" }}
          strings={[
            `I'm hungry about the advanced technologies in software area.`
          ]}
          typeSpeed={40}
          onComplete={() => {
            setState({ ...state, showContact: true });
          }}
        />
      ) : null}
      <br />
      {state.showContact ? (
        <Typed
          style={{ fontSize: 25, color: "yellow" }}
          strings={[`Feel free to contact me`]}
          typeSpeed={40}
          onComplete={() => {
            setState({ ...state, showTitle: true });
          }}
        />
      ) : null}
    </>
  );
};

export default TerminalTyping;

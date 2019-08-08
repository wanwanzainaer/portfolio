import React, { useState } from "react";
import Languages from "./LanguagesFrequencyBar";
import RadarChart from "./RadarChart";
const Skills = () => {
  const [state, setState] = useState({
    target: "ToolsLevel",
    style: "waves-effect waves-orange  btn"
  });
  const changeRadarChart = target => {
    target === "ToolsLevel"
      ? setState({
          target: "LanguagesLevel",
          style: "waves-effect waves-purple] btn"
        })
      : setState({
          target: "ToolsLevel",
          style: "waves-effect waves-orange btn"
        });
  };

  return (
    <div>
      <a
        className={state.style}
        onClick={e => changeRadarChart(state.target)}
      >
        Switch to{" "}
        {state.target === "LanguagesLevel"
          ? "Tool Level"
          : "Languages Level"}
      </a>
      <RadarChart target={state.target} />
    </div>
  );
};

export default Skills;

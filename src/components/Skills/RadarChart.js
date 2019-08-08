import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import { languageLevel, toolsLevel } from "./levelData";

const RadarChart = ({ target }) => {
  const tamplate =
    target === "ToolsLevel" ? toolsLevel : languageLevel;
  const [state, setState] = useState(tamplate);
  useEffect(() => {
    setState(tamplate);
  }, [target]);

  return (
    <div style={{}}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radar"
        height="700"
      />
    </div>
  );
};

export default RadarChart;

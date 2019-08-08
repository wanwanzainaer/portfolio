import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

import { languageLevel, toolsLevel } from "./level/LevelData";

const RadarChart = () => {
  const [state, setState] = useState(toolsLevel);
  return (
    <div>
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

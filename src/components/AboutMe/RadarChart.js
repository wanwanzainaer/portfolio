import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

import { languageLevel, frameworkLevel } from "./level/LevelData";

const RadarChart = () => {
  const [state, setState] = useState(frameworkLevel);
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

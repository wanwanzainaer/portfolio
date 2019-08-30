import React from "react";
import ReactApexChart from "react-apexcharts";

import { languageLevel, toolsLevel } from "./levelData";

const RadarChart = ({ target }) => {
  const template =
    target === "ToolsLevel" ? toolsLevel : languageLevel;

  return (
    <div>
      <ReactApexChart
        options={template.options}
        series={template.series}
        type="radar"
        height="700"
      />
    </div>
  );
};

export default RadarChart;

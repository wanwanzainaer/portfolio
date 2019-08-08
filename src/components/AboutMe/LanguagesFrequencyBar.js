import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
const Languages = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        stacked: true,
        stackType: "100%"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "100% Languages usage frequency Bar"
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019]
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + "%";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    },
    series: [
      {
        name: "Object-C",
        data: [80, 50, 0, 0, 0]
      },
      {
        name: "C",
        data: [20, 20, 0, 0, 0]
      },
      {
        name: "Swift",
        data: [0, 30, 0, 0, 0]
      },
      {
        name: "Ruby",
        data: [0, 0, 30, 0, 0]
      },
      {
        name: "python",
        data: [0, 0, 30, 60, 20]
      },
      {
        name: "Javascript",
        data: [0, 0, 15, 40, 75]
      },
      {
        name: "Html+CSS",
        data: [0, 0, 25, 0, 5]
      }
    ]
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height="700"
      />
    </div>
  );
};

export default Languages;

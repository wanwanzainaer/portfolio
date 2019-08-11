export const toolsLevel = {
  options: {
    chart: {
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      },
      toolbar: {
        show: false,
        tools: {
          download: false
        }
      }
    },
    dataLabels: {
      style: {
        fontSize: "25px"
      }
    },
    labels: ["React", "Node", "iOS", "GCP", "AWS", "Docker", "K8s"],
    title: {
      text: "Tools level 2019",
      style: {
        fontSize: "40px",
        colors: "Black"
      }
    },
    stroke: {
      width: 0
    },
    fill: {
      opacity: 0.7
    },
    markers: {
      size: 0
    }
  },
  series: [
    {
      name: "Languages",
      data: [85, 90, 70, 80, 65, 80, 60]
    }
  ]
};

export const languageLevel = {
  options: {
    chart: {
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      },
      toolbar: {
        show: false,
        tools: {
          download: false
        }
      }
    },

    labels: [
      "HTML+CSS",
      "Python",
      "Object-C",
      "Swift",
      "Javascript",
      "JSX"
    ],
    title: {
      text: "Language level 2019"
    },
    stroke: {
      width: 0
    },
    fill: {
      opacity: 0.4
    },
    markers: {
      size: 0
    }
  },
  series: [
    {
      name: "Languages",
      data: [65, 85, 50, 65, 90, 80]
    }
  ]
};

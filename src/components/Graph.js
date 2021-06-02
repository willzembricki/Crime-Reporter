import { Line } from "react-chartjs-2";
import { useState } from "react";
const LineChart = ({ charData, legend }) => {
  //   const dataStructure = charData.map((yearIns) => {
  //     const year = yearIns.year;
  //     const value = yearIns.total;
  //    return year, value;
  //   });

  const dataStructure = charData;
  console.log(dataStructure);

  const datasetsArr = dataStructure.map((dataset) => {
    return {
      data: dataset,
      label: "Dataset " + (dataStructure.length + 1),
      fill: false,
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
    };
  });
  console.log(datasetsArr);
  const chartDataConfig = {
    labels: Object.keys(dataStructure),

    datasets: datasetsArr,
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={chartDataConfig} option={options} />
    </div>
  );
};
export default LineChart;

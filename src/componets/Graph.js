import React from "react";
import "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,

  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ graphData }) => {
  console.log("Graph data", graphData[0]);
  return (
    <>
      <Line
        data={{
          labels: graphData.map((i) => i[0]),
          datasets: [
            {
              data: graphData.map((i) => i[1]),
              label: "wpm",
              borderColor: "white",
            },
          ],
        }}
      />
    </>
  );
};

export default Graph;

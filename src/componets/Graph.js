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
          labels: [1, 4, 5],
          datasets: [
            {
              data: [5, 6, 7],
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

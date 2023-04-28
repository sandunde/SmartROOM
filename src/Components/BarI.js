import { Bar } from "react-chartjs-2";
import {
  Chart as chartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

const BarI = () => {
  chartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  const data = {
    labels: ["M", "TU", "W", "TH", "F", "S", "SU"],
    datasets: [
      {
        label: "Intensity",
        data: [10, 35, 18, 7, 24, 26, 23],
        backgroundColor: "#a7f7fb",
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };

  const options = {};
  return <Bar data={data} options={options} />;
};

export default BarI;

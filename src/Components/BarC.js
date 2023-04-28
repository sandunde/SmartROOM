import { Bar } from "react-chartjs-2";
import {
  Chart as chartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

const BarC = () => {
    chartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  const data = {
    labels: ["M", "TU", "W", "TH", "F", "S", "SU"],
    datasets: [
      {
        label: "Temperature",
        data: [20, 25, 28, 37, 34, 36, 40],
        backgroundColor: "#FA859A",
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };

  const options = {};
  return(
    <Bar data={data} options={options} />
  )
  };
  
  export default BarC;
  
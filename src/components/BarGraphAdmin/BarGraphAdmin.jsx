import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registramos los elementos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraphAdmin = ({ salesData }) => {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"], // Nombres de los meses
    datasets: [
      {
        label: "Ventas ($ ARS)",
        data: salesData, // Datos de ventas pasados como prop
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Color de las barras
        borderColor: "rgba(54, 162, 235, 1)", // Color del borde
        borderWidth: 1, // Grosor del borde
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true }, // Muestra la leyenda "Ventas ($ ARS)"
      title: { display: true, text: "Ventas de los últimos 5 meses" }, // Título del gráfico
    },
    scales: {
      y: { beginAtZero: true }, // El eje Y empieza en 0
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarGraphAdmin;

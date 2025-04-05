import React from "react";
import { FiUsers, FiPackage, FiDollarSign } from "react-icons/fi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import Sidebar from "./Sidebar";
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Dashboard = () => {
  // Data for the bar chart
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 10000, 17000, 20000, 22000],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue",
      },
    },
  };

  // Data for the line chart
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Performance",
        data: [300, 450, 320, 480, 500, 550],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Performance Over Time",
      },
    },
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      {/* Content Section */}
      <div className="p-6 bg-light-gray flex-1">
        {/* Page Title */}
        <h2 className="text-3xl font-montserrat text-dark-gray mb-6">Overview</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-3xl p-4 rounded-lg flex items-center">
            <FiUsers className="text-3xl text-dark-teal mr-4" />
            <div>
              <h3 className="text-lg text-slate-gray">Customers</h3>
              <p className="text-2xl font-palanquin text-dark-teal">1,245</p>
            </div>
          </div>
          <div className="bg-white shadow-3xl p-4 rounded-lg flex items-center">
            <FiPackage className="text-3xl text-dark-teal mr-4" />
            <div>
              <h3 className="text-lg text-slate-gray">Products</h3>
              <p className="text-2xl font-palanquin text-dark-teal">524</p>
            </div>
          </div>
          <div className="bg-white shadow-3xl p-4 rounded-lg flex items-center">
            <FiDollarSign className="text-3xl text-dark-teal mr-4" />
            <div>
              <h3 className="text-lg text-slate-gray">Sales</h3>
              <p className="text-2xl font-palanquin text-dark-teal">$24,582</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-3xl p-4 rounded-lg">
            <h3 className="text-lg font-montserrat text-dark-gray mb-4">
              Revenue
            </h3>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div className="bg-white shadow-3xl p-4 rounded-lg">
            <h3 className="text-lg font-montserrat text-dark-gray mb-4">
              Performance
            </h3>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

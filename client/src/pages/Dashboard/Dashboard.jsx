import React from "react";
import "./Dashboard.scss";
import { FaUsers, FaChalkboardTeacher, FaMoneyCheckAlt } from "react-icons/fa";
import { Calendar } from "antd";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const attendanceData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Attendance",
      data: [95, 85, 90, 88, 92, 70],
      backgroundColor: "#3C82F6",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Welcome Banner */}
      <div className="dashboard-header">
        <h2>Salom, Admin 👋</h2>
        <p>Bugun TechBridge markazida bo‘layotgan voqealar</p>
      </div>

      {/* Statistics */}
      <div className="dashboard-stats">
        <div className="stat-card blue">
          <FaUsers className="icon" />
          <div>
            <h3>150</h3>
            <span>Faol talabalar</span>
          </div>
        </div>
        <div className="stat-card green">
          <FaChalkboardTeacher className="icon" />
          <div>
            <h3>20</h3>
            <span>Faol o‘qituvchilar</span>
          </div>
        </div>
        <div className="stat-card orange">
          <FaMoneyCheckAlt className="icon" />
          <div>
            <h3>$12,400</h3>
            <span>To‘langan (oylik)</span>
          </div>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="payment-summary">
        <h3>To‘lovlar statistikasi</h3>
        <ul>
          <li>
            <span>To‘langan:</span> $12,400
          </li>
          <li>
            <span>Kutilmoqda:</span> $1,500
          </li>
          <li>
            <span>Chegirmalar:</span> $800
          </li>
        </ul>
      </div>

      <div className="dashboard-main">
        {/* Attendance Chart */}
        <div className="attendance-chart">
          <h3>Davomat grafikasi (haftalik)</h3>
          <Bar data={attendanceData} height={200} />
        </div>

        {/* Calendar */}
        <div className="calendar">
          <h3>Kalendar</h3>
          <Calendar fullscreen={false} />
        </div>
      </div>

      {/* Upcoming Classes */}
      <div className="upcoming-classes">
        <h3>Kelayotgan mashg‘ulotlar</h3>
        <ul>
          <li>10:00 - 11:30 | Matematika | Guruh A1</li>
          <li>12:00 - 13:30 | Ingliz tili | Guruh B2</li>
          <li>15:00 - 16:30 | Dasturlash | Guruh C1</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

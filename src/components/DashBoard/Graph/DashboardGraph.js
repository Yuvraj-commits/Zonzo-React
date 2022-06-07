import React from "react";
import ArrowDropUpIcon from '@material-ui/core/';
import styles from "./DashboardGraph.module.css";
import { connect } from "react-redux";
import "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardGraph = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "",
        data: [0, 5, 10, 6, 16, 13, 19],
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: "#FFFFFF",
        borderColor: "#370D6F",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          color: "#E0E0E0",
          borderColor: "#E0E0E0",
          borderDash: [1, 4],
        },
      },
      y: {
        grid: {
          color: "#E0E0E0",
          borderColor: "#E0E0E0",
          borderDash: [1, 4],
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.upperGraphCards}>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.cardWidthSixty}>
              <h2>Today's Check Ins</h2>
              <h1>158</h1>
              <div>12% This Week</div>
            </div>
            <div className={styles.cardWidthForty}>
              <div className={styles.circle}></div>
              <div className={styles.circletwo}></div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
          <div className={styles.cardWidthSixty}>
              <h2>Today's Revenue</h2>
              <h1>300k</h1>
              <div>12% This Week</div>
            </div>
            <div className={styles.cardWidthForty}>
              <div
                className={`${styles.circle} ${styles.greenBackground}`}
              ></div>
              <div
                className={`${styles.circletwo} ${styles.greenLightBg}`}
              ></div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
          <div className={styles.cardWidthSixty}>
              <h2>Today's Bookings</h2>
              <h1>7k</h1>
              <div>12% This Week</div>
            </div>
            <div className={styles.cardWidthForty}>
              <div
                className={`${styles.circle} ${styles.orangeBackground}`}
              ></div>
              <div
                className={`${styles.circletwo} ${styles.orangeLightBg}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lowerGraph}>
        <Line data={data} options={options} height={130}/>
      </div>
    </div>
  );
};

export default connect(null)(DashboardGraph);

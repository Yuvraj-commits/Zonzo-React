import React from "react";
import styles from "./DashboardGraph.module.css";
import { connect } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardGraph = () => {
  const state = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Statistics This week",
        barPercentage: 0.1,
        barThickness: 40,
        maxBarThickness: 50,
        minBarLength: 5,
        lineTension: 0.5,
        backgroundColor: "#DDDDDD",
        fill: true,
        borderRadius: 12,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0,
        data: [65, 59, 80, 81, 56, 10, 20],
      },
    ],
  };

  var options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.upperGraphCards}>
        <div className={styles.column}>
          <div className={styles.card}>
            <h1>hi</h1>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <h1>hi</h1>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <h1>hi</h1>
          </div>
        </div>
      </div>
      <div className={styles.lowerGraph}>
        <Bar
          data={state}
          width={150}
          height={50}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 10,
            },
            legend: {
              display: true,
              position: "right",
            },
            
          }}
        />
      </div>
    </div>
  );
};

export default connect(null)(DashboardGraph);

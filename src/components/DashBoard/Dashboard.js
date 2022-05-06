import React from "react";
import styles from "./Dashboard.module.css";
import { connect } from "react-redux";
import DashboardGraph from "./Graph/DashboardGraph";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Switch from "@material-ui/core/Switch";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";

const Dashboard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>

      
      <div className={styles.leftContent}>
        <DashboardGraph />
      </div>
      <div className={styles.rightContent}></div>
      </div>
    </div>
  );
};

export default connect(null)(Dashboard);

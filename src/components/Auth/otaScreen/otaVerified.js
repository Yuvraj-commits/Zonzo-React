import React from "react";
import styles from "./otaScreen.module.css";
import { connect } from "react-redux";
import startingImg from "../../../assets/img/login.png";
import { useHistory } from "react-router-dom";

const OtaVerified = () => {
  const [seconds, setSeconds] = React.useState(15);
  const history = useHistory();
  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(15);
    }
    setTimeout(() => {
      history.push("/login");
    }, 15000);
  }, [seconds]);

  return (
    <div className={styles.container}>
      <div className={styles.flexComp}>
        <div className={styles.leftContent}>
          <img src={startingImg} />
        </div>
        <div className={styles.rightContent}>
          <div>
            <img src={require("../../../assets/svg/partyPoper.svg")} />
          </div>
          <div className={styles.header}>
            <h1>OTA's Verified</h1>
          </div>

          <p>you will be redirected to login page in 00:{seconds} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(OtaVerified);

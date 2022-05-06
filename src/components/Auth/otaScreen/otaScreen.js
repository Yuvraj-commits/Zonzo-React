import React from "react";
import styles from "./otaScreen.module.css";
import axios from "axios";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

import startingImg from "../../../assets/img/Login.png";
import { FormControl, FormLabel } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const OtaScreen = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [choosenOta, setChoosenOta] = React.useState([]);
  const history = useHistory();

  const verifyOta = () => {
    history.push("/ota_verified");
  };

  const arrayRemove = (arr, value) => {
    return arr.filter(function (ele) {
      return ele != value;
    });
  };

  const setOta = (ota) => {
    if (!choosenOta.includes(ota)) {
      setChoosenOta((prev) => {
        return prev.concat(ota);
      });
    } else {
      var result = arrayRemove(choosenOta, ota);
      setChoosenOta([...result]);
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.flexComp}>
        <div className={styles.leftContent}>
          <img src={startingImg} />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.header}>
            <h1>Choose Your OTA's</h1>
            <div className={styles.row}>
              <div className={styles.column}>
                <div
                  className={`${styles.card} ${
                    choosenOta.includes("BOOKING_COM") && styles.choosedCard
                  }`}
                  onClick={() => setOta("BOOKING_COM")}
                >
                  <img src={require("../../../assets/svg/booking.svg")} />
                </div>
              </div>

              <div className={styles.column}>
                <div
                  className={`${styles.card} ${
                    choosenOta.includes("GOIBIBO_COM") && styles.choosedCard
                  }`}
                  onClick={() => setOta("GOIBIBO_COM")}
                >
                  <img src={require("../../../assets/svg/goibibo.svg")} />
                </div>
              </div>

              <div className={styles.column}>
                <div
                  className={styles.card}
                  className={`${styles.card} ${
                    choosenOta.includes("AIRBNB_COM") && styles.choosedCard
                  }`}
                  onClick={() => setOta("AIRBNB_COM")}
                >
                  <img src={require("../../../assets/svg/airbnb.svg")} />
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <div
                  className={`${styles.card} ${
                    choosenOta.includes("EXPEDIA_COM") && styles.choosedCard
                  }`}
                  onClick={() => setOta("EXPEDIA_COM")}
                >
                  <img src={require("../../../assets/svg/exoedia.svg")} />
                </div>
              </div>

              <div className={styles.column}>
                <div
                  className={`${styles.card} ${
                    choosenOta.includes("AGODA_COM") && styles.choosedCard
                  }`}
                  onClick={() => setOta("AGODA_COM")}
                >
                  <img src={require("../../../assets/svg/agoda.svg")} />
                </div>
              </div>

              <div className={styles.column}>
                <div
                  className={`${styles.card} ${
                    choosenOta.includes("CLEARTRIP_COM") && styles.choosedCard
                  }`}
                  onClick={() => setOta("CLEARTRIP_COM")}
                >
                  <img src={require("../../../assets/svg/cleartrip.svg")} />
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <button className={styles.signIn}>
              Loading...
              <ArrowForwardRoundedIcon />
            </button>
          ) : (
            <div className={styles.centerBtn}>
              <button
                className={styles.verifyOta}
                onClick={() => {
                  verifyOta();
                }}
              >
                Verify OTA
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null)(OtaScreen);

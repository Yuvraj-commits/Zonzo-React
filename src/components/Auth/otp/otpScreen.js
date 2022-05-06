import React from "react";
import styles from "./otpScreen.module.css";
import axios from "axios";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import appleLogo from "../../../assets/svg/apple.svg";
import emailLogo from "../../../assets/svg/email.svg";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import AppleIcon from "@material-ui/icons/Apple";
import startingImg from "../../../assets/img/login.png";
import { FormControl, FormLabel } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GoogleAuth from "../../Auth/GoogleAuth/GoogleAuth";
import FacebookAuth from "../../Auth/FaceBookAuth/FacebookAuth";

const SignUp = (props) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = React.useState({
    email: false,
    password: false,
  });
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  React.useEffect(() => {
    if (props.auth) {
      props.history.push("/user/home");
    }
  }, [props.auth]);

  // const validate = () => {
  //     let value = true;
  //     let err = {email: false,password: false}
  //     let isEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  //     setFormError({...err});
  //     if(formData.password.length < 8) {
  //         value = false;
  //         err.password = "Password should be atleast 8 charactors"
  //     }
  //     if(!isEmail.test(formData.email)) {
  //         err.email = 'Enter valid email'
  //         value = false;
  //     }
  //     setFormError({...err});
  //     return value;
  // }

  return (
    <div className={styles.container}>
      <div className={styles.flexComp}>
        <div className={styles.leftContent}>
          <img src={startingImg} />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.header}>
            <h1>Enter OTP</h1>
          </div>
          <FormControl className={styles.formControl}>
            <FormLabel>Otp</FormLabel>
            <TextField
              variant="outlined"
              type="number"
              fullWidth
              placeholder="Enter Otp"
              className={styles.textField}
              //   value={formData.email}
              //   onChange={(e) =>
              //     setFormData({ ...formData, email: e.target.value })
              //   }
            />
          </FormControl>
          {loading ? (
            <button className={styles.signIn}>
              Loading...
              <ArrowForwardRoundedIcon />
            </button>
          ) : (
            <div className={styles.centerBtn}>
              <button
                className={styles.otp}
                onClick={() => history.push("/signup/choose_ota")}
              >
                Verify OTP
              </button>
            </div>
          )}
          <div className={styles.resendOTP}>
            <p>
              Didn't recieve OTP ?{" "}
              <span onClick={() => history.push("/login")}>Resend OTP</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(SignUp);

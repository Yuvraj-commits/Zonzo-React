import React from "react";
import styles from "./signUp.module.css";
import axios from "axios";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import appleLogo from "../../../assets/svg/apple.svg";
import emailLogo from "../../../assets/svg/email.svg";
import Button from "@material-ui/core/Button";
import startingImg from "../../../assets/img/Login.png";
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
            <h1>Welcome User</h1>
          </div>
          <FormControl className={styles.formControl}>
            <FormLabel>Phone Number</FormLabel>
            <TextField
              variant="outlined"
              type="number"
              fullWidth
              placeholder="Phone Number"
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
              <button className={styles.signIn} onClick={()=>history.push("/signup/otp")}>Continue</button>
            </div>
          )}
          <div className={styles.othersSignUp}>
            <div className={styles.otherWays}>
              <GoogleAuth />
            </div>
            <div className={styles.otherWays}>
              <FacebookAuth />
            </div>
            <div className={styles.otherWays}>
              <Button
                id="iosAuth"
                startIcon={<img src={appleLogo} className={styles.logo} />}
              ></Button>
            </div>
            <div className={styles.otherWays}>
              <Button
                id="emailAuth"
                startIcon={<img src={emailLogo} className={styles.logo} />}
              ></Button>
            </div>
          </div>

          <div className={styles.login}>
            <p>
              Already Have an account ?{" "}
              <span onClick={() => history.push("/login")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(SignUp);

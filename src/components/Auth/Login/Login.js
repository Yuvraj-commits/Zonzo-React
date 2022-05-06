import React from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { connect } from "react-redux";
import PassTextField from "../../utils/passTextField/PassTextField";
import TextField from "@material-ui/core/TextField";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import startingImg from "../../../assets/img/Login.png";
import { FormControl, FormLabel } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Login = (props) => {
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
            <h1>Login to your account</h1>
          </div>
          <FormControl className={styles.formControl}>
            <FormLabel>UserName</FormLabel>
            <TextField
              variant="outlined"
              fullWidth
              className={styles.textField}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={formError.email}
              helperText={formError.email}
            />
          </FormControl>
          <FormControl className={styles.formControl}>
            <FormLabel>Password</FormLabel>
            <PassTextField
              variant="outlined"
              fullWidth
              className={styles.textField}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              error={formError.password}
              helperText={formError.password}
            />
          </FormControl>
          <div className={styles.forgotPassword}>
            <p>Forgot Password?</p>
          </div>
          {loading ? (
            <button className={styles.signIn}>
              Loading...
              <ArrowForwardRoundedIcon />
            </button>
          ) : (
            <div className={styles.centerBtn}>
              <button className={styles.signIn}>Login</button>
            </div>
          )}

          <div className={styles.signUp}>
            <p>
              Don't have an account ?{" "}
              <span onClick={() => history.push("/signup")}>Sign UP</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(Login);

import React from "react";
import styles from "./FacebookAuth.module.css";
// import { facebookAppId } from "../../../config/config";
import facebookLogo from "../../../assets/img/facebook.png";
import Button from "@material-ui/core/Button";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import { connect } from "react-redux";
// import {
//     showAlert,
//     setAuth,
//     showCompleteProfile,
// } from "../../../containers/app/actions";


const FacebookAuth = (props) => {
   

    const [loading, setLoading] = React.useState(false);

    const responseFacebook = (response) => {
        setLoading(true);

        axios({
            method: "post",
            url: "/user/auth/facebookAuth",
            data: {
                accessToken: response.accessToken,
                referralKey: ["referral_code"],
            },
        })
            .then((res) => {
                props.setAuth({
                    ...res.data.profile,
                    ...res.data.user,
                    token: res.data.token,
                });
                res.data.completeProfile &&
                    !props.showProfile &&
                    props.showCompleteProfile(true);
                localStorage.setItem(
                    "user",
                    JSON.stringify({ userType: "END-USER", token: res.data.token })
                );
                props.showAlert(res.data.message);
                setLoading(false);
                props.callback && props.callback();
            })
            .catch((err) => {
                setLoading(false);
                if (err && err.response) props.showAlert(err.response.data.error);
                else props.showAlert(("Something went wrong Try Again"));
            });
    };
    const responseFailure = (err) => {
        if (err.details && typeof err.details == "string") {
            props.showAlert("");
        } else {
            props.showAlert(("Something went wrong Try Again"));
        } 
    };
    return (
        <FacebookLogin
            // appId={facebookAppId}
            callback={responseFacebook}
            fields="name,email,picture"
            onFailure={responseFailure}
            render={(renderProps) => (
                <React.Fragment>
                    {loading ? (
                        <Button
                            startIcon={<CircularProgress size={16} color="primary" />}
                        ></Button>
                    ) : (
                        <Button
                            id="facebookAuth"
                            onClick={renderProps.onClick}
                            startIcon={<img src={facebookLogo} className={styles.logo} />}
                        
                        ></Button>
                    )}
                </React.Fragment>
            )}
        />
    );
};
export default connect(null)(
    FacebookAuth
);

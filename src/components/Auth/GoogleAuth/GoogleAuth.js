import React from "react";
import styles from "./GoogleAuth.module.css";
import googleLogo from "../../../assets/svg/google.svg";

import GoogleLogin from "react-google-login";
// import { googleOAuthClientId } from "../../../config/config";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import axios from "axios";
import { connect } from "react-redux";
// import {
//     showAlert,
//     setAuth,
//     showCompleteProfile,
// } from "../../../containers/app/actions";


const GoogleAuth = (props) => {
    
  

    const [loading, setLoading] = React.useState(false);

    const responseGoogle = (response) => {
        setLoading(true);

        axios({
            method: "post",
            url: "/user/auth/googleAuth",
            data: {
                accessToken: response.tokenId,
                referralKey: "referral",
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
            props.showAlert(err.details);
        } else {
            props.showAlert(("Something went wrong Try Again"));
        }
    };
    return (
        <GoogleLogin
            // clientId={googleOAuthClientId}
            render={(renderProps) => (
                <React.Fragment>
                    {loading ? (
                        <Button
                            startIcon={<CircularProgress size={16} color="primary" />}
                        ></Button>
                    ) : (
                        <Button
                            id="googleAuth"
                            startIcon={<img src={googleLogo} className={styles.logo} />}
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                           
                        ></Button>
                    )}
                </React.Fragment>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseFailure}
            cookiePolicy={"single_host_origin"}
        />
    );
};
export default connect(null)(
    GoogleAuth
);

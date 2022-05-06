import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./styles/app.module.css";
import NavBar from "./components/Navbar/Navbar";

import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import OTP from "./components/Auth/otp/otpScreen";
import OTA from "./components/Auth/otaScreen/otaScreen";
import OtaVerified from "./components/Auth/otaScreen/otaVerified";
import Bookings from "./components/Bookings/Bookings";

import Home from "./components/Home";
import Product from "./components/Product";
import Seller from "./components/Seller";
import Dashboard from "./components/DashBoard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <Router>
          <div className={styles.navContainer}>
            <NavBar />
          </div>
          <div className={styles.mainContainer}>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/signup/otp">
                <OTP />
              </Route>
              <Route exact path="/signup/choose_ota">
                <OTA />
              </Route>
              <Route exact path="/ota_verified">
                <OtaVerified />
              </Route>
              <Route path="/user/dashboard">
                <Dashboard />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/user/booking">
                <Product />
              </Route>
              <Route path="/seller">
                <Seller />
              </Route>
              <Route path="/bookings">
                <Bookings />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

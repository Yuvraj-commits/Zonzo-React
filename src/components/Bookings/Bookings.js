import React from "react";
import styles from "./Bookings.module.css";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Switch from "@material-ui/core/Switch";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tabBorder: {
    color: "#370D6F",
    borderBottom: "solid 2px #6F0D6B",
  },
}));
const Bookings = (props) => {
  const classes = useStyles();
  const [vouchers, setVouchers] = React.useState(false);
  const [type, setType] = React.useState(true);
  const [voucherType, setVoucherType] = React.useState(true);
  const [bookings, setBookings] = React.useState(false);
  const [lifeCoach, setLifeCoach] = React.useState(false);
  const [lifeCoachType, setLifeCoachType] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState("All");

  React.useEffect(() => {
    setVouchers(props.vouchers);
    setBookings(props.bookings);
    setLifeCoach(props.lifeCoachBookings);
  }, [props.bookings, props.vouchers]);


  const isLoading = !bookings;
  const showData = !isLoading;
  console.log(activeTab);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{"Bookings"}</h1>

        <div className={styles.header}>
          <Tabs
            className={styles.tabs}
            value={activeTab}
            onChange={(e, val) => setActiveTab(val)}
          >
            <Tab
              className={activeTab == "All" && classes.tabBorder}
              label="All"
              value="All"
            />

            <Tab
              className={activeTab == "New" && classes.tabBorder}
              label={"New"}
              value="New"
            />
            <Tab
              className={activeTab == "Upcoming" && classes.tabBorder}
              label={"Upcoming"}
              value="Upcoming"
            />

            <Tab
              className={activeTab == "Past" && classes.tabBorder}
              label={"Past"}
              value="Past"
            />

            <Tab
              className={activeTab == "Cancelled" && classes.tabBorder}
              label={"Cancelled"}
              value="Cancelled"
            />

            <Tab
              className={activeTab == "PayAtHotel" && classes.tabBorder}
              label={"Pay at Hotel"}
              value="PayAtHotel"
            />
          </Tabs>
        </div>

        {/* {isLoading && (
                    <div className={styles.loader}>
                        <AppLoader color="dark" />
                    </div>
                )} */}

        {showData && (
          <React.Fragment>
            {activeTab == "All" && (
              <div>
                <div className={styles.tabContainer}>
                  <ButtonGroup color="primary">
                    <Button
                      size="small"
                      variant={type ? "contained" : "outlined"}
                      onClick={() => setType(true)}
                    >
                      {"Upcoming"}
                    </Button>
                    <Button
                      size="small"
                      variant={!type ? "contained" : "outlined"}
                      onClick={() => setType(false)}
                    >
                      {"Past"}
                    </Button>
                  </ButtonGroup>
                </div>

                <div className={styles.cards}>
                  {/* <DisplayBooking
                                        bookings={bookings}
                                        activeTab={type ? "UPCOMING" : "PAST"}
                                        name={props.auth.firstName ? props.auth.firstName : props.auth.username}
                                    /> */}
                </div>
              </div>
            )}
            {activeTab == "VOUCHER" && (
              <div>
                <div className={styles.tabContainer}>
                  <ButtonGroup color="primary">
                    <Button
                      size="small"
                      variant={voucherType ? "contained" : "outlined"}
                      onClick={() => setVoucherType(true)}
                    >
                      {"Upcoming"}
                    </Button>
                    <Button
                      size="small"
                      variant={!voucherType ? "contained" : "outlined"}
                      onClick={() => setVoucherType(false)}
                    >
                      {"Past"}
                    </Button>
                  </ButtonGroup>
                </div>
                <div className={styles.cards}>
                  {/* <DisplayVoucher
                                        activeTab={voucherType ? "UPCOMING" : "PAST"}
                                        vouchers={vouchers}
                                        auth={props.auth}
                                    /> */}
                </div>
              </div>
            )}
            {activeTab == "LIFE-COACH" && (
              <div>
                {" "}
                <div className={styles.tabContainer}>
                  <ButtonGroup color="primary">
                    <Button
                      size="small"
                      variant={lifeCoachType ? "contained" : "outlined"}
                      onClick={() => setLifeCoachType(true)}
                    >
                      {"Upcoming"}
                    </Button>
                    <Button
                      size="small"
                      variant={!lifeCoachType ? "contained" : "outlined"}
                      onClick={() => setLifeCoachType(false)}
                    >
                      {"Past"}
                    </Button>
                  </ButtonGroup>
                </div>
                <div className={styles.cards}>
                  {/* <DisplayLifeCoach
                                        activeTab={lifeCoachType ? "UPCOMING" : "PAST"}
                                        lifeCoach={lifeCoach}
                                        auth={props.auth}
                                    /> */}
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//     bookings: state.user.bookings,
//     auth: state.app.auth,
//     vouchers: state.user.vouchers,
//     lifeCoachBookings: state.user.lifeCoachBookings,
// });
export default connect(null)(Bookings);

import React from "react";
import styles from "./Bookings.module.css";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Switch from "@material-ui/core/Switch";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import DataTable from "react-data-table-component";

const useStyles = makeStyles((theme) => ({
  tabBorder: {
    borderBottom: "solid 2px #6F0D6B",
    "&>span": {
      color: "#370D6F !important",
    },
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

  // const isLoading = !bookings;
  // const showData = !isLoading;
  let rowData = [
    {
      guestName: "yuvraj",
      bookingId: "B0000001",
      bookingDate: "20/06/2022",
      checkIn: "22/06/2022",
      checkOut: "22/06/2022",
      channel: "Channel",
      status: "Status",
    },
  ];

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

        <React.Fragment>
          {activeTab == "All" && (
            <React.Fragment>
              <DataTable
                noHeader={true}
                fixedHeader={true}
                fixedHeaderScrollHeight={"calc(100vh - 380px)"}
                columns={[
                  {
                    name: "Guest Name",
                    selector: "guestName",
                    sortable: true,
                    wrap: true,
                    minWidth: "50px",
                  },
                  {
                    name: "Booking Id",
                    selector: "bookingId",
                    sortable: true,
                    wrap: true,
                    minWidth: "150px",
                  },
                  {
                    name: "Booking Date",
                    selector: "bookingDate",
                    sortable: true,
                    wrap: true,
                    minWidth: "250px",
                  },
                  {
                    name: "Check In Date",
                    selector: "checkIn",
                    sortable: true,
                    wrap: true,
                    minWidth: "300px",
                  },
                  {
                    name: "Check Out Date",
                    selector: "checkOut",
                    sortable: true,
                    wrap: true,
                    minWidth: "180px",
                  },
                  {
                    name: "Channel",
                    selector: "channel",
                    sortable: true,
                    wrap: true,
                    minWidth: "180px",
                  },
                  {
                    name: "Status",
                    selector: "status",
                    sortable: true,
                    wrap: true,
                    minWidth: "180px",
                  },
                  {
                    name: "Action",
                    selector: "action",
                    sortable: true,
                    wrap: true,
                    minWidth: "180px",
                  },
                ]}
                data={rowData}
              />
            </React.Fragment>
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

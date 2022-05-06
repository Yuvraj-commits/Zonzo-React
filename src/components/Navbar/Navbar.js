import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import StarIcon from "@material-ui/icons/Star";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import CloudIcon from "@material-ui/icons/Cloud";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import { connect } from "react-redux";

const NavBar = (props) => {
  const [open, setOpen] = React.useState(false);

  const navElements = (
    <React.Fragment>
      <NavLink
        className={styles.navItem}
        to="/user/dashboard"
        activeClassName={styles.activeNavItem}
      >
        <HomeRoundedIcon />
        <p>Dashboard</p>
      </NavLink>

      <NavLink
        className={styles.navItem}
        to="/Bookings"
        activeClassName={styles.activeNavItem}
      >
        <StarIcon />
        <p>Bookings</p>
      </NavLink>

      <NavLink
        className={styles.navItem}
        to="/user/add-service-provider/VIEW-ADDED-SERVICE-PROVIDERS"
        activeClassName={styles.activeNavItem}
      >
        <PeopleAltRoundedIcon />
        <p>Rates and Inventory</p>
      </NavLink>

      <NavLink
        className={styles.navItem}
        to="/user/service-provider-request/VIEW-REQUESTS"
        activeClassName={styles.activeNavItem}
      >
        <StorefrontRoundedIcon />
        <p>Property Details</p>
      </NavLink>

      <NavLink
        className={styles.navItem}
        to="/user/life-coaches-admin/view-coaches"
        activeClassName={styles.activeNavItem}
      >
        <CloudIcon />
        <p>OTA List</p>
      </NavLink>

      <NavLink
        className={styles.navItem}
        to="/user/email-system"
        activeClassName={styles.activeNavItem}
      >
        <InsertChartIcon />
        <p>Anlytics</p>
      </NavLink>

      <NavLink
        className={styles.navItem}
        to="/user/discount-codes/VIEW-DISCOUNT-CODES"
        activeClassName={styles.activeNavItem}
      >
        <FavoriteIcon />
        <p>Reviews</p>
      </NavLink>

      <NavLink
        className={styles.navItem}
        to="/admin/gift-card/VIEW-GIFT-CARD"
        activeClassName={styles.activeNavItem}
      >
        <ContactSupportOutlinedIcon />
        <p>Zonzo Support</p>
      </NavLink>

      <NavLink
        className={styles.navItem}
        to="/user/transactions/VIEW-TRANSACTIONS"
        activeClassName={styles.activeNavItem}
      >
        <ChatIcon />
        <p>Message</p>
      </NavLink>
    </React.Fragment>
  );
  return (
    <div className={styles.container}>
      <IconButton className={styles.menuButton} onClick={() => setOpen(true)}>
        <MenuRoundedIcon />
      </IconButton>

      <>
        <div className={styles.header}>
          <img src={require("../../assets/svg/ZonzoLogo.svg")} />
        </div>
        <div className={styles.navItems}>{navElements}</div>
      </>

      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <div className={styles.header}>
          <img src={require("../../assets/svg/ZonzoLogo.svg")} />
        </div>

        <div className={styles.mobileNav} onClick={() => setOpen(false)}>
          {navElements}
        </div>
      </Drawer>
    </div>
  );
};

export default connect(null)(NavBar);

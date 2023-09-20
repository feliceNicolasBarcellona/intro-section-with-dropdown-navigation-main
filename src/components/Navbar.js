import classes from "./Navbar.module.css";
import logo from "../images/logo.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink className={classes["navbar-brand"]} to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className={classes.navbar}>
          <ul className={classes["navbar-nav"]}>
            <li className={classes["nav-item"]}>
              <NavLink to="/features" className={classes["nav-link"]}>
                Features
              </NavLink>
              <img src={iconArrowDown} alt="" />
            </li>
            <li className={classes["nav-item"]}>
              <NavLink to="/company" className={classes["nav-link"]}>
                Company
              </NavLink>
              <img src={iconArrowDown} alt="" />
            </li>
            <li className={classes["nav-item"]}>
              <NavLink to="/Careers" className={classes["nav-link"]}>
                Careers
              </NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink to="/about" className={classes["nav-link"]}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={classes.nav}>
        <div className={classes.navbar}>
          <ul className={classes["navbar-nav"]}>
            <li className={classes["nav-item"]}>
              <NavLink to="/login" className={classes["nav-link"]}>
                Login
              </NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink to="/register" className={`${classes["nav-link"]} ${classes.btn}`}>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

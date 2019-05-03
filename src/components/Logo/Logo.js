import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import myStyles from "./Logo.module.css";

const Logo = props => (
  <div className={myStyles.Logo}>
    <img src={burgerLogo} alt="MyBurger logo" />
  </div>
);

export default Logo;

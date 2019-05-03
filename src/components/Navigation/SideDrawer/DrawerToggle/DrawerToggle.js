import React from "react";

import myStyles from "./DrawerToggle.module.css";

const DrawerToggle = props => (
  <div className={myStyles.DrawerToggle} onClick={props.toggled}>
    <div />
    <div />
    <div />
  </div>
);

export default DrawerToggle;

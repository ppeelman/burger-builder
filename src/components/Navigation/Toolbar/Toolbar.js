import React from "react";

import myStyles from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={myStyles.Toolbar}>
    <DrawerToggle toggled={props.menuToggled} />
    <div className={myStyles.Logo}>
      <Logo />
    </div>
    <nav className={myStyles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;

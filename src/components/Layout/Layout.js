import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import myStyles from "./Layout.module.css";

const Layout = props => {
  return (
    <Auxiliary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={myStyles.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;

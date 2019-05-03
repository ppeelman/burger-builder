import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import myStyles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = { showSideDrawer: false };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((state, props) => ({
      showSideDrawer: !state.showSideDrawer
    }));
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar menuToggled={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={myStyles.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;

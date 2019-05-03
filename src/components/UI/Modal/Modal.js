import React, { Component, Fragment } from "react";

import myStyles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  componentDidUpdate() {
    console.log("[Modal] ComponentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Fragment>
        <div
          className={myStyles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
      </Fragment>
    );
  }
}

export default Modal;

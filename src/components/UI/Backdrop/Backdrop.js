import React from "react";

import myStyles from "./Backdrop.module.css";

const Backdrop = props =>
  props.show ? (
    <div className={myStyles.Backdrop} onClick={props.clicked} />
  ) : null;

export default Backdrop;

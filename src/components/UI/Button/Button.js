import React from "react";

import myStyles from "./Button.module.css";

const Button = props => (
  <button
    disabled={props.disabled}
    className={[myStyles.Button, myStyles[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;

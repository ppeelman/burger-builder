import React from "react";

import myStyles from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={myStyles.BuildControl}>
      <div className={myStyles.Label}>{props.label}</div>
      <button
        className={myStyles.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={myStyles.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;

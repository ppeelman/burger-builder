import React from "react";

import myStyles from "./NavigationItem.module.css";

import { NavLink } from "react-router-dom";

const NavigationItem = props => (
  <li className={myStyles.NavigationItem}>
    <NavLink
      exact={props.exact}
      to={props.link}
      activeClassName={myStyles.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;

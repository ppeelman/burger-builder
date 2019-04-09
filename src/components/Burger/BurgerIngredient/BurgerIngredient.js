import React, { Component } from "react";
import PropTypes from "prop-types";

import myStyles from "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={myStyles.BreadBottom} />;
        break;

      case "bread-top":
        ingredient = (
          <div className={myStyles.BreadTop}>
            <div className={myStyles.Seeds1} />
            <div className={myStyles.Seeds2} />
          </div>
        );
        break;

      case "meat":
        ingredient = <div className={myStyles.Meat} />;
        break;

      case "cheese":
        ingredient = <div className={myStyles.Cheese} />;
        break;

      case "salad":
        ingredient = <div className={myStyles.Salad} />;
        break;

      case "bacon":
        ingredient = <div className={myStyles.Bacon} />;
        break;

      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;

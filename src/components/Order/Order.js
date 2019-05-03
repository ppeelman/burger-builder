import React from "react";
import myStyles from "./Order.module.css";

const Order = props => {
  let ingredientsList = [];
  for (let ingredientName in props.ingredients) {
    ingredientsList.push(
      `${ingredientName} (${props.ingredients[ingredientName]})`
    );
  }

  const igList = ingredientsList.map(ig => {
    return (
      <span
        style={{
          textTranform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid grey",
          padding: "5px"
        }}
        key={ig}
      >
        {ig}
      </span>
    );
  });

  return (
    <div className={myStyles.Order}>
      <p>Ingredients: {igList}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;

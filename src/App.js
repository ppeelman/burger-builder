import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Switch, Route } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

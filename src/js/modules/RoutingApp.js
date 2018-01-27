import Provider from "react-redux/lib/components/Provider";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import appHistory from "tools/appHistory";
import ConnectedRouter from "react-router-redux/ConnectedRouter";
import store from "../store";

import { PageLayout, MainApp } from "./core/components";

class RoutingApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <PageLayout>
          <ConnectedRouter history={appHistory}>
            <Switch>
              <Route exact path="/" component={MainApp} />
            </Switch>
          </ConnectedRouter>
        </PageLayout>
      </Provider>
    );
  }
};

export default RoutingApp;

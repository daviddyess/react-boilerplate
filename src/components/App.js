import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "../pages/Home";
import PopOver from "../pages/PopOver";
import NotFound from "../pages/NotFound";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Helmet titleTemplate={`%s | ${process.env.REACT_APP_HTML_TITLE}`} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/popover" component={PopOver} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;

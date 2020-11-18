import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

//layouts
import Admin from "views/layouts/Admin"

// pages for this product
import LoginPage from "views/pages/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
       <Route path="/login" component={LoginPage} />
       <Route path="/admin" component={Admin} />
       <Redirect from="/" to="/admin/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

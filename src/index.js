import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {UserContextStore} from 'contexts/UserContext'
import "assets/scss/material-kit-react.scss?v=1.9.0";

//layouts
import Admin from "views/layouts/Admin"
import Auth from "views/layouts/Auth"
// pages for this product

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" component={Auth} />
      <UserContextStore >
       <Route path="/admin" component={Admin} />     
       
     </UserContextStore>  
     <Redirect from="/" to="/admin/inicio" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

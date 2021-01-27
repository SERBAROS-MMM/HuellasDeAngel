import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {UserContextStore} from 'contexts/UserContext'
import {PersonSelectedContextStore} from 'contexts/PersonSelectedContext'
import "assets/scss/material-kit-react.scss?v=1.9.0";

//layouts
import Admin from "views/layouts/Admin"
import Auth from "views/layouts/Auth"
// pages for this product

var hist = createBrowserHistory();

ReactDOM.render(
  <UserContextStore >
  <PersonSelectedContextStore>
  <Router history={hist}>
    <Switch>
      <Route path="/auth" component={Auth} />
     
       <Route path="/admin" component={Admin} />     
   
     <Redirect from="/" to="/admin/inicio" />
    </Switch>
  </Router>
  </PersonSelectedContextStore>
  </UserContextStore>  ,
  document.getElementById("root")
);

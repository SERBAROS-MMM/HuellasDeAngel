/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views for Admin layout
import HomePage from "views/pages/HomePage.js";
import LoginPage from "views/pages/LoginPage.js";

const dashboardRoutes = [
  {
    path: "/",
    name: "INICIO",
    icon: Dashboard,
    component: HomePage,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: Dashboard,
    component: LoginPage,
    layout: "/auth"
  },
 
];

export default dashboardRoutes;

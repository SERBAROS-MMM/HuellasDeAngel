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
import UserPage from "views/pages/UserPage.js";
import AddPersonPage from "views/pages/AddPersonPage.js";
import EvaluationsPage from "views/pages/EvaluationsPage.js";
import ParametersPage from "views/pages/ParametersPage.js";
import TemperaturePage from "views/pages/TemperaturePage.js";

const dashboardRoutes = [
  {
    path: "/inicio",
    name: "INICIO",
    icon: Dashboard,
    component: HomePage,
    navbar: false,
    layout: "/admin"
  },
  {
    path: "/usuario",
    name: "Usuario",
    icon: Dashboard,
    component: LoginPage,
    navbar: false,
    layout: "/admin"
  },
  {
    path: "/Reportes",
    name: "Reportes",
    icon: Dashboard,
    component: LoginPage,
    navbar: true,
    layout: "/admin"
  },
  {
    path: "/novedades",
    name: "Novedades",
    icon: Dashboard,
    component: UserPage,
    navbar: true,
    layout: "/admin"
  },
  {
    path: "/configuracion",
    name: "Configuracion",
    icon: Dashboard,
    component: LoginPage,
    navbar: false,
    layout: "/admin"
  },
  {
    path: "/parametros",
    name: "Parametros",
    icon: Dashboard,
    component: ParametersPage,
    navbar: true,
    layout: "/admin"
  },
  {
    path: "/agregarPersona",
    name: "Agregar Persona",
    icon: Dashboard,
    component: AddPersonPage,
    navbar: false,
    layout: "/admin"
  },
  {
    path: "/evaluaciones",
    name: "Evaluaciones",
    icon: Dashboard,
    component: EvaluationsPage,
    navbar: true,
    layout: "/admin"
  },
  {
    path: "/temperatura",
    name: "Temperatura",
    icon: Dashboard,
    component: TemperaturePage,
    navbar: true,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: Dashboard,
    component: LoginPage,
    navbar: false,
    layout: "/auth"
  },
 
];

export default dashboardRoutes;

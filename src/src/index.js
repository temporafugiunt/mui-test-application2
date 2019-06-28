import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";

import { istioAppDesignation } from "variables/general.jsx";

import "assets/css/material-dashboard-react.css?v=1.7.0";

ReactDOM.render(
  <BrowserRouter basename={istioAppDesignation}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/table" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

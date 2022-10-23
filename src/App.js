import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens";
import SignUpPage from "./screens/signup";
import SignInPage from "./screens/signin";
import Form from "./screens/Form";
import UserScreen from "./screens/userView";
import Profile from "./components/clients/Profile/Profile";
import SignUpPageDealers from "./screens/signupdealers";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import ClientDash from "./screens/ClientDash";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";

import Routes from "./components/clients/Profile/Routes/Routes";
import Routes_Dealers from "./components/dealers/Routes/Routes_Dealers";
import Routes_Common from "./components/common/Routes/Routes_Common";
import Routes_Admin from "./components/admin/Dashboard/Routes/Routes_Admin";
import Routes_Clients from "./components/clients/ClientDashboard/Routes/Route_Clients";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/signupdealers" component={SignUpPageDealers} exact />
        <Route path="/form" component={Form} exact />
        <Route path="/user" component={UserScreen} exact />
        <Route path="/user/profile" component={Profile} exact />
        <Route path="/admin/profile" component={Dashboard} exact />
        <Route path="/clientdash" component={ClientDash} exact />
        {Routes.map((props) => (
          <Route exact {...props} />
        ))}
        {Routes_Dealers.map((props) => (
          <Route exact {...props} />
        ))}
        {Routes_Common.map((props) => (
          <Route exact {...props} />
        ))}
        {Routes_Admin.map((props) => (
          <Route exact {...props} />
        ))}
        {Routes_Clients.map((props) => (
          <Route exact {...props} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;

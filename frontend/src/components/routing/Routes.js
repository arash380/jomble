import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes as Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home";
import Layout from "./Layout/Layout";
import rd from "./routeData";

const { default: defaultRoute, login, wildCard, register } = rd;

const Routes = () => (
  <Router>
    <Switch>
      {/* Visible to all */}

      <Route element={<ProtectedRoute reverseCheck />}>
        <Route path={login} element={<Login />} />
        <Route path={register} element={<Register />} />
        <Route path={wildCard} element={<Navigate to={login} />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route
        //    element={<Layout />}
        >
          <Route path={defaultRoute} element={<Home />} />
          <Route path={wildCard} element={<Navigate to={defaultRoute} />} />
        </Route>
      </Route>
    </Switch>
  </Router>
);

export default Routes;

import { ProtectedRoute } from "arash-react-components";
import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes as Switch } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import Layout from "./Layout/Layout";
import rd from "./routeData";

const { default: defaultRoute, login, wildCard, register } = rd;

const Router = () => {
  const { user: ia, loading: l } = useUser();

  return (
    <Router>
      <Switch>
        {/* Visible to all */}

        <Route element={<ProtectedRoute authenticated={ia} loading={l} alterRoute={login} reverse />}>
          <Route path={login} element={<Login />} />
          <Route path={register} element={<Register />} />
          <Route path={wildCard} element={<Navigate to={login} />} />
        </Route>

        <Route element={<ProtectedRoute authenticated={ia} loading={loading} />}>
          <Route
          //    element={<Layout />}
          >
            <Route path={rp.default} element={<Home />} />
            <Route path={wildCard} element={<Navigate to={defaultRoute} />} />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
};

export default Router;

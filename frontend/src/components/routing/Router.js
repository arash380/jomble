import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes as Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import rd from "./routeData";

const Router = () => {
  return (
    <Router>
      <Switch>
        {/* Everyone can visit these routes. */}

        <Route element={<ProtectedRoute reverse />}>
          {/* Should not be authenticated to visit these routes */}
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
          //    element={<Layout />}
          >
            {/* Should be authenticated to visit these routes */}
            <Route path={rd.wildCard} element={<Navigate to={rd.default} />} />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
};

export default Router;

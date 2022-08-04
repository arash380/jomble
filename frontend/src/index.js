import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "arash-react-components";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import Router from "./components/routing/Router";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <UserProvider>
      <ToastContainer autoClose={3000} theme="colored" />
      <Router />
    </UserProvider>
  </ThemeProvider>
);

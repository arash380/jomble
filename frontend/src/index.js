import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "arash-react-components";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import Routes from "./components/routing/Routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <UserProvider>
      <ToastContainer autoClose={3000} theme="colored" />
      <Routes />
    </UserProvider>
  </ThemeProvider>
);

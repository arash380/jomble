import { Outlet } from "react-router-dom";
import classes from "./AuthLayout.module.css";

const AuthLayout = () => (
  <div className={classes.root}>
    <div className={classes.card}>
      <div className={classes.left}>
        <Outlet />
      </div>
      <div className={classes.right}>
        <p>
          Welcome to <strong>Jomble</strong>
        </p>
        <span>Something about the app here</span>
      </div>
    </div>
  </div>
);

export default AuthLayout;

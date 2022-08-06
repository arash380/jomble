import { Outlet } from "react-router-dom";
import classes from "./AuthLayout.module.css";

const AuthLayout = () => (
  <section className={classes.root}>
    <div className={classes.card}>
      <div className={classes.left}>
        <Outlet />
      </div>
      <div className={classes.right}>
        <p>
          Welcome to <b>Jomble</b>
        </p>
        <span>Something about the app here</span>
      </div>
    </div>
  </section>
);

export default AuthLayout;

import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

const Layout = () => (
  <section className={classes.root}>
    <Outlet />
  </section>
);

export default Layout;

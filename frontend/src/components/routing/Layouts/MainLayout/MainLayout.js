import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

const MainLayout = () => (
  <section className={classes.root}>
    TEST
    <Outlet />
  </section>
);

export default MainLayout;

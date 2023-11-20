import { Outlet } from "react-router-dom";
import SideMenu from "../../../UI/SideMenu/SideMenu";
import TopMenu from "../../../UI/TopMenu/TopMenu";
import classes from "./MainLayout.module.css";

const MainLayout = () => (
  <div className={classes.root}>
    {/* TODO: use google keep for (header + side), mobile? */}
    <TopMenu />
    <SideMenu />
    <div className={classes.content}>
      <Outlet />
    </div>
  </div>
);

export default MainLayout;

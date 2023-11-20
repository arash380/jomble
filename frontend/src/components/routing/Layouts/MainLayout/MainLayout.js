import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../../UI/SideMenu/SideMenu";
import TopMenu from "../../../UI/TopMenu/TopMenu";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopMenu toggleSideMenu={() => setIsMenuOpen((v) => !v)} />
      <SideMenu isOpen={isMenuOpen} />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

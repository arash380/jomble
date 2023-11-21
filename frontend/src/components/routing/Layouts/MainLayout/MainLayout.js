import { Outlet } from "react-router-dom";
import SideMenu from "../../../UI/SideMenu/SideMenu";
import TopMenu from "../../../UI/TopMenu/TopMenu";
import { useSideMenu } from "../../../../contexts/SideMenuContext";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  const { onChange: toggleSideMenu, isFullWidth } = useSideMenu();

  return (
    <div className={classes.root}>
      <TopMenu toggleSideMenu={toggleSideMenu} />
      <SideMenu isFullWidth={isFullWidth} />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

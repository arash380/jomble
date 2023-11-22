import React from "react";
import { HomeOutlined, List } from "@mui/icons-material";
import classes from "./SideMenu.module.css";

// TODO: isActive should be checked from url?
const menuItems = [
  { name: "Home", Icon: HomeOutlined, isActive: true },
  // TODO: outlined icons here
  { name: "TODO1", Icon: List, isActive: false },
  { name: "TODO2", Icon: List, isActive: false },
  { name: "TODO3", Icon: List, isActive: false },
  { name: "TODO4", Icon: List, isActive: false },
  { name: "TODO5", Icon: List, isActive: false },
];

const SideMenu = ({ isFullWidth }) => (
  <div className={`${classes.root} ${isFullWidth ? classes.open : classes.close}`}>
    {menuItems.map(({ name, Icon, isActive }, index) => (
      <div key={index} className={`${classes.menuItem} ${isActive && classes.active}`}>
        <Icon className={classes.icon} />
        {isFullWidth && <span>{name}</span>}
      </div>
    ))}
  </div>
);
export default SideMenu;

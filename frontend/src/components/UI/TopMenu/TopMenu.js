import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Dropdown } from "arash-react-components";
import UserAvatar from "../UserAvatar/UserAvatar";
import { AccountBox, DarkMode, LightMode, Logout, Menu } from "@mui/icons-material";
import { useUser } from "../../../contexts/UserContext";
import classes from "./TopMenu.module.css";

const dropdownItems = [
  {
    Icon: AccountBox,
    iconType: "mui",
    title: "Profie",
    onClick: () => console.log("profile"),
  },
  {
    Icon: Logout,
    iconType: "mui",
    title: "Logout",
    onClick: () => console.log("logout"),
  },
];

const TopMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { logout } = useUser();
  dropdownItems[1].onClick = logout;

  return (
    <div className={classes.root}>
      {/* TODO */}
      <Menu className={classes.iconButton} />

      <Logo />

      {/* TODO */}
      <LightMode className={classes.iconButton} />

      {/* TODO */}
      <DarkMode className={classes.iconButton} />

      <Dropdown
        show={showDropdown}
        setShow={setShowDropdown}
        items={dropdownItems}
        className={classes.dropdownMenu}
        ToggleComponent={<UserAvatar className={classes.dropdownButton} />}
      />
    </div>
  );
};

export default TopMenu;

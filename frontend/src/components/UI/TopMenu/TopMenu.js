import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { DEFAULT_THEME, Dropdown, Switch } from "arash-react-components";
import UserAvatar from "../UserAvatar/UserAvatar";
import { AccountBox, Logout, Menu } from "@mui/icons-material";
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
  },
];

const switchDetails = [
  { text: "🌙", color: DEFAULT_THEME.colors.primary },
  { text: "🔆", color: DEFAULT_THEME.colors.black },
];

const TopMenu = ({ toggleSideMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const { logout } = useUser();
  dropdownItems[1].onClick = logout;

  return (
    <div className={classes.root}>
      <Menu className={classes.iconButton} onClick={toggleSideMenu} />

      <Logo />

      {/* TODO: make dark mode work */}
      {/* TODO: make a context for this */}
      {/* TODO: make it work with local storage to store preference */}
      <Switch details={switchDetails} checked={darkmode} onChange={setDarkmode} />

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

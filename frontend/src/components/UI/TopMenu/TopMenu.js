import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { DEFAULT_THEME, Dropdown, Switch, useDarkMode } from "arash-react-components";
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
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { logout } = useUser();
  dropdownItems[1].onClick = logout;

  useEffect(() => console.log(darkMode), [darkMode]);
  return (
    <div className={classes.root}>
      <Menu className={classes.iconButton} onClick={toggleSideMenu} />

      <Logo />

      {/* TODO: switch bg colors should change? fixed colors? */}
      {/* TODO: switch thumb color */}
      {/* TODO: make it work with local storage to store preference */}
      {/* <Switch details={switchDetails} checked={darkmode} onChange={setDarkmode} /> */}
      <button onClick={toggleDarkMode}>TEST</button>

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

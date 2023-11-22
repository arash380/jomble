import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { DEFAULT_THEME, Dropdown, Switch, useDarkMode } from "arash-react-components";
import UserAvatar from "../UserAvatar/UserAvatar";
import { AccountBox, Logout, Menu } from "@mui/icons-material";
import { useUser } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import rd from "../../routing/routeData";
import classes from "./TopMenu.module.css";

const dropdownItems = [
  {
    Icon: AccountBox,
    iconType: "mui",
    title: "Profie",
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
  const { darkMode, setDarkMode } = useDarkMode();
  const { logout } = useUser();
  const navigate = useNavigate();
  dropdownItems[0].onClick = () => navigate(rd.profile);
  dropdownItems[1].onClick = logout;

  return (
    <div className={classes.root}>
      <Menu className={classes.iconButton} onClick={toggleSideMenu} />

      <Logo />

      <Switch details={switchDetails} checked={darkMode} onChange={setDarkMode} />

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

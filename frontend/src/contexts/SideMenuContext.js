import React, { createContext, useContext, useEffect, useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const root = document.querySelector(":root").style;
const FULL_WIDTH = "210px";
const MINIMIZED_WIDTH = "64px";
const BREAKPOINT_KEY = "--mobile-breakpoint";
const SIDE_MENU_KEY = "--side-menu-width";
const TAKEN_SPACE_KEY = "--taken-space-by-menu";

const setProperties = (sideMenu, takenSpace) => {
  root.setProperty(SIDE_MENU_KEY, sideMenu);
  root.setProperty(TAKEN_SPACE_KEY, takenSpace);
};

const SideMenuContext = createContext();

export const useSideMenu = () => {
  return useContext(SideMenuContext);
};

export const SideMenuProvider = ({ children }) => {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const currentWidth = useWindowWidth();

  useEffect(() => {
    const BREAKPOINT = parseInt(getComputedStyle(document.documentElement).getPropertyValue(BREAKPOINT_KEY));

    if (currentWidth > BREAKPOINT) {
      setProperties(isFullWidth ? FULL_WIDTH : MINIMIZED_WIDTH, isFullWidth ? FULL_WIDTH : MINIMIZED_WIDTH);
    } else {
      setProperties(isFullWidth ? FULL_WIDTH : MINIMIZED_WIDTH, MINIMIZED_WIDTH);
    }
  }, [isFullWidth, currentWidth]);

  const onChange = () => setIsFullWidth((prev) => !prev);

  return <SideMenuContext.Provider value={{ isFullWidth, onChange }}>{children}</SideMenuContext.Provider>;
};

import React, { createContext, useContext, useEffect, useState } from "react";

const rootElement = document.querySelector(":root");
const FULL_WIDTH = "210px";
const MINIMIZED_WIDTH = "64px";
const SIDE_MENU_KEY = "--side-menu-width";

const SideMenuContext = createContext();

export const useSideMenu = () => {
  return useContext(SideMenuContext);
};

export const SideMenuProvider = ({ children }) => {
  const [isFullWidth, setIsFullWidth] = useState(false);

  useEffect(() => {
    if (isFullWidth) rootElement.style.setProperty(SIDE_MENU_KEY, FULL_WIDTH);
    else rootElement.style.setProperty(SIDE_MENU_KEY, MINIMIZED_WIDTH);
  }, [isFullWidth]);

  const onChange = () => setIsFullWidth((prev) => !prev);

  return <SideMenuContext.Provider value={{ isFullWidth, onChange }}>{children}</SideMenuContext.Provider>;
};

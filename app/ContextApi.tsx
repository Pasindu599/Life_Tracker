"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { GlobalContextType } from "./types/GlobalContextType";
import { MenuItemType } from "./types/MenuItemType";
import {
  faChartSimple,
  faLayerGroup,
  faRectangleAd,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type DarkModeItems = {
  id: number;
  icon: IconProp;
  isSelected: boolean;
};

const GlobalContext = createContext<GlobalContextType>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
  openSidebarObject: {
    openSidebar: false,
    setOpenSidebar: () => {},
  },
  darkModeObject: {
    isDarkMode: false,
    setIsDarkMode: () => {},
    darkModeItems: [],
    setDarkModeItems: () => {},
  },
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([
    {
      name: "All Tasks",
      isSelected: true,
      icon: faRectangleList,
    },
    {
      name: "Statistics",
      isSelected: false,
      icon: faChartSimple,
    },
    {
      name: "Areas",
      isSelected: false,
      icon: faLayerGroup,
    },
  ]);

  const [darkModeItems, setDarkModeItems] = React.useState<DarkModeItems[]>([
    { id: 1, icon: faSun, isSelected: true },
    { id: 2, icon: faMoon, isSelected: false },
  ]);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <GlobalContext.Provider
      value={{
        menuItemsObject: {
          menuItems,
          setMenuItems,
        },
        openSidebarObject: {
          openSidebar,
          setOpenSidebar,
        },
        darkModeObject: {
          isDarkMode,
          setIsDarkMode,
          darkModeItems,
          setDarkModeItems,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;

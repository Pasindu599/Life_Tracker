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

const GlobalContext = createContext<GlobalContextType>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
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
  return (
    <GlobalContext.Provider
      value={{
        menuItemsObject: {
          menuItems,
          setMenuItems,
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

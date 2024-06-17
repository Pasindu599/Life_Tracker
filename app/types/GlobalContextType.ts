import { set } from "mongoose";
import React, { SetStateAction, Dispatch } from "react";
import { MenuItemType } from "./MenuItemType";

export type GlobalContextType = {
  menuItemsObject: {
    menuItems: MenuItemType[];
    setMenuItems: Dispatch<SetStateAction<MenuItemType[]>>;
  };
};

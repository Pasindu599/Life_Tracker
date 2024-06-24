import { set } from "mongoose";
import React, { SetStateAction, Dispatch } from "react";
import { AreaType, MenuItemType, TaskType } from "./MenuItemType";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type GlobalContextType = {
  menuItemsObject: {
    menuItems: MenuItemType[];
    setMenuItems: Dispatch<SetStateAction<MenuItemType[]>>;
  };

  openSidebarObject: {
    openSidebar: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  };

  darkModeObject: {
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
    darkModeItems: {
      id: number;
      icon: IconProp;
      isSelected: boolean;
    }[];
    setDarkModeItems: Dispatch<
      SetStateAction<
        {
          id: number;
          icon: IconProp;
          isSelected: boolean;
        }[]
      >
    >;
  };

  openTaskObject: {
    openTask: boolean;
    setOpenTask: Dispatch<SetStateAction<boolean>>;
  };

  openTimePickerObject: {
    openTimePicker: boolean;
    setOpenTimePicker: Dispatch<SetStateAction<boolean>>;
  };

  allAreasObject: {
    allAreas: AreaType[];
    setAllAreas: Dispatch<SetStateAction<AreaType[]>>;
  };

  allTasksObject: {
    allTasks: TaskType[];
    setAllTasks: Dispatch<SetStateAction<TaskType[]>>;
  };

  selectedCurrentDateObject: {
    selectedCurrentDate: string;
    setSelectedCurrentDate: Dispatch<SetStateAction<string>>;
  };

  offSetDayObject: {
    offSetDay: number;
    setOffSetDay: Dispatch<SetStateAction<number>>;
  };
};

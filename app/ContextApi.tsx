"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { GlobalContextType } from "./types/GlobalContextType";
import {
  AreaType,
  FrequencyType,
  MenuItemType,
  TaskType,
} from "./types/MenuItemType";
import {
  faChartSimple,
  faCode,
  faGraduationCap,
  faLayerGroup,
  faRectangleAd,
  faRectangleList,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { textToIcon } from "./pages/AllTasks/Components/IconsWindow/IconsData";
import { getDateString } from "@/utils/allTasksUtils/DateFunctions";

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

  openTaskObject: {
    openTask: false,
    setOpenTask: () => {},
  },

  openTimePickerObject: {
    openTimePicker: false,
    setOpenTimePicker: () => {},
  },

  allAreasObject: {
    allAreas: [],
    setAllAreas: () => {},
  },
  allTasksObject: {
    allTasks: [],
    setAllTasks: () => {},
  },

  selectedCurrentDateObject: {
    selectedCurrentDate: "",
    setSelectedCurrentDate: () => {},
  },

  offSetDayObject: {
    offSetDay: 0,
    setOffSetDay: () => {},
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

  const [allAreas, setAllAreas] = useState<AreaType[]>([
    {
      id: 1,
      icon: faUsers,
      name: "All",
    },
    {
      id: 2,
      icon: faGraduationCap,
      name: "Study",
    },
    {
      id: 3,
      icon: faCode,
      name: "Code",
    },
  ]);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [openTask, setOpenTask] = useState<boolean>(false);
  const [openTimePicker, setOpenTimePicker] = useState<boolean>(true);
  const [allTasks, setAllTasks] = useState<TaskType[]>([]);
  const [offSetDay, setOffSetDay] = useState<number>(0);
  const [selectedCurrentDate, setSelectedCurrentDate] = useState<string>(() =>
    getDateString(new Date())
  );

  // useEffect(() => {
  //   function fetchData() {
  //     const allTasksData: TaskType[] = [
  //       {
  //         _id: "",
  //         name: "",
  //         icon: textToIcon("faTools") as IconProp,
  //         frequency: [
  //           {
  //             type: "Daily",
  //             days: [],
  //             numberOfWeeks: 1,
  //           },
  //         ],
  //         notificationTime: "",
  //         isNotification: false,
  //         areas: [],
  //       },
  //     ];
  //     setTimeout(() => {
  //       setAllTasks(allTasksData);
  //     }, 1000);

  //     fetchData();
  //   }
  // }, []);

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
        openTaskObject: {
          openTask,
          setOpenTask,
        },
        openTimePickerObject: {
          openTimePicker,
          setOpenTimePicker,
        },
        allAreasObject: {
          allAreas,
          setAllAreas,
        },
        allTasksObject: {
          allTasks,
          setAllTasks,
        },
        selectedCurrentDateObject: {
          selectedCurrentDate,
          setSelectedCurrentDate,
        },
        offSetDayObject: {
          offSetDay,
          setOffSetDay,
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

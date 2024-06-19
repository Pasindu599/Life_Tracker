"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useGlobalContextProvider } from "../ContextApi";
import { MenuItemType } from "../types/MenuItemType";
import AllTasks from "../pages/AllTasks/AllTasks";
import Statistics from "../pages/Statistics/Statistics";
import Areas from "../pages/Areas/Areas";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { open } from "inspector";

function Dashboard() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems, setMenuItems } = menuItemsObject;
  const [selectedMenu, setSelectedMenu] = useState<MenuItemType | null>(null);
  let selectComponent = null;

  useEffect(() => {
    menuItems.map((singleItem) => {
      if (singleItem.isSelected) {
        setSelectedMenu(singleItem);
      }
    });
  }, [menuItems]);

  switch (selectedMenu?.name) {
    case "All Tasks":
      selectComponent = <AllTasks />;
      break;
    case "Statistics":
      selectComponent = <Statistics />;
      break;
    case "Areas":
      selectComponent = <Areas />;
      break;
    default:
      selectComponent = <div>Error</div>;
  }
  return (
    <div className="flex  bg-blue-100">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Sidebar />
        {selectComponent}
        <BlackSoftLayer />
      </LocalizationProvider>
    </div>
  );
}

export default Dashboard;

function BlackSoftLayer() {
  const { openSidebarObject } = useGlobalContextProvider();
  const { openSidebar, setOpenSidebar } = openSidebarObject;
  return (
    <div
      className={`w-full h-full bg-black  top-0 left-0 opacity-20 z-40 ${
        openSidebar ? "fixed" : "hidden"
      }`}
    ></div>
  );
}

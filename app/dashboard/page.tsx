"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useGlobalContextProvider } from "../ContextApi";
import { MenuItemType } from "../types/MenuItemType";
import AllTasks from "../pages/AllTasks/AllTasks";
import Statistics from "../pages/Statistics/Statistics";
import Areas from "../pages/Areas/Areas";

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
    <div className="flex">
      <Sidebar />
      {selectComponent}
    </div>
  );
}

export default Dashboard;

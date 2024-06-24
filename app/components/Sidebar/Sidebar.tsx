"use client";
import React from "react";
import LogoAndName from "../LogoAndName";
import MenuSelection from "./MenuSelection";
import LogOutSection from "./LogOutSection";
import { useGlobalContextProvider } from "@/app/ContextApi";
import { useEffect } from "react";
import DarkMode from "@/app/pages/AllTasks/Components/DarkMode";

function Sidebar() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  const { openSidebarObject } = useGlobalContextProvider();
  const { openSidebar, setOpenSidebar } = openSidebarObject;
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpenSidebar(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [openSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`${
        !openSidebar ? `max-xl:hidden` : `fixed shadow-lg`
      }  flex-grow z-50 p-10 flex-col ${
        isDarkMode ? `bg-darkMainColor` : `bg-white`
      } min-h-screen`}
    >
      <LogoAndName />
      <MenuSelection />
      <DarkMode />
      <LogOutSection />
    </div>
  );
}

export default Sidebar;

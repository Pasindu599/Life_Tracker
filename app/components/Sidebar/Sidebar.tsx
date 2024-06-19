import React from "react";
import LogoAndName from "../LogoAndName";
import MenuSelection from "./MenuSelection";
import LogOutSection from "./LogOutSection";

function Sidebar() {
  return (
    <div className="border-r-2 p-10 flex flex-col gap-15 bg-white min-h-screen">
      <LogoAndName />
      <MenuSelection />
      <LogOutSection />
    </div>
  );
}

export default Sidebar;

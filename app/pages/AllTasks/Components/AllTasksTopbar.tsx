"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllTasksSearchbar from "./AllTasksSearchbar";
import DarkMode from "./DarkMode";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UserButton } from "@clerk/nextjs";
import { useGlobalContextProvider } from "@/app/ContextApi";
import { useEffect } from "react";

function AllTasksTopBar() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  const { openSidebarObject } = useGlobalContextProvider();
  const { openSidebar, setOpenSidebar } = openSidebarObject;

  const userButtonApperence = {
    elements: {
      userButtonAvatarBox: "w-14 h-14",
      userButtonPopoverActionButton: "text-mainColor",
    },
  };

  function handleSidebar() {
    console.log("clicked", openSidebar);
    setOpenSidebar(!openSidebar);
    console.log("clicked", openSidebar);
  }

  useEffect(() => {
    function handleResize() {
      setOpenSidebar(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${
        isDarkMode ? `bg-darkMainColor` : `bg-white`
      } p-5 rounded-md flex justify-between`}
    >
      <div className="flex gap-4">
        <div className="max-lg:flex hidden">
          <UserButton appearance={userButtonApperence} />
        </div>
        <div className="flex flex-col max-md:hidden">
          <span className="text-xl">
            <span className="font-bold text-mainColor">Hi There</span>
            <span className="text-thirdColor">, Pasindu</span>
          </span>
          <span className="text-secondColor text-[12px] font-light">
            Welcome Back
          </span>
        </div>
      </div>
      <div className="w-[50%] max-md:w-[80%] flex gap-3 justify-between">
        <AllTasksSearchbar />
        {/* <DarkMode /> */}
        <FontAwesomeIcon
          onClick={handleSidebar}
          className="m-2 max-xl:flex hidden mt-[13px] cursor-pointer"
          icon={faBars}
        />
      </div>
    </div>
  );
}

export default AllTasksTopBar;

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContextProvider } from "@/app/ContextApi";
import React from "react";

function AllTasksSearchbar() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  return (
    <div className="flex-grow">
      <div
        className={`flex gap-3 items-center p-3 ${
          isDarkMode ? `bg-darkThirdColor` : `bg-blue-100`
        } rounded-3xl`}
      >
        <FontAwesomeIcon
          height={20}
          width={20}
          className="text-secondColor "
          icon={faSearch}
        />
        <input
          type="text"
          placeholder="Search ..."
          className={`outline-none text-[14px] w-full ${
            isDarkMode ? ` bg-darkThirdColor` : `bg-blue-100`
          } font-light text-gray-800`}
        ></input>
      </div>
    </div>
  );
}

export default AllTasksSearchbar;

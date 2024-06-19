import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function DarkMode() {
  return (
    <div className="flex relative rounded-3xl bg-blue-100 w-[90px]">
      <div className="h-full w-[45px] z-40 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faSun}
          className="text-mainColor"
          height={20}
          width={20}
        />
      </div>
      <div className="h-full w-[45px] z-40 flex justify-center items-center opacity-100">
        <FontAwesomeIcon
          icon={faMoon}
          className="text-gray-500"
          height={20}
          width={20}
        />
      </div>
      <div className="w-[38px] absolute h-[38px] top-1 left-[4px] rounded-full bg-white"></div>
    </div>
  );
}

export default DarkMode;

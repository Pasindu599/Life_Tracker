import React from "react";
import { iconsData } from "./IconsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "../../../../ContextApi";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function IconsWindow({
  openIconsWindow,
  setOpenIconsWindow,

  setIconSelected,
  iconSelected,
}: {
  openIconsWindow: boolean;
  setOpenIconsWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setIconSelected: React.Dispatch<React.SetStateAction<IconProp>>;
  iconSelected: IconProp;
}) {
  const [allIcons, setAllIcons] = React.useState(iconsData);
  const { openTaskObject, darkModeObject } = useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { isDarkMode } = darkModeObject;

  console.log(openIconsWindow);

  return (
    <div
      className={`z-50 w-[80%] left-1/2 transform -translate-x-1/2 p-4 rounded-md flex border flex-col gap-6 shadow-md ${
        openIconsWindow ? `absolute` : `hidden`
      } 
        ${isDarkMode ? `bg-[#1F2937]` : `bg-[#F3F4F6]`}`}
      style={{
        backgroundColor: isDarkMode ? "navyblue" : "lightblue",
        color: isDarkMode ? "light-blue" : "#111827",
      }}
    >
      <FontAwesomeIcon
        icon={faClose}
        onClick={() => setOpenIconsWindow(!openIconsWindow)}
        className="text-gray-500 cursor-pointer hover:text-gray-800 "
        height={20}
        width={20}
      />
      <span className="font-bold text-lg bg-transparent mt-3">
        Choose Your Icon
      </span>
      <div className="border border-gray-200 p-5 flex flex-wrap gap-4 items-center rounded-md mb-5">
        {allIcons.map((icon, index) => {
          return (
            <FontAwesomeIcon
              key={index}
              icon={icon.faIcon}
              className="border p-2 border-gray-300 rounded-md text-xl cursor-pointer hover:text-mainColor hover:border-secondColor "
              height={50}
              width={50}
              onClick={() => {
                setIconSelected(icon.faIcon);
                setOpenIconsWindow(false);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IconsWindow;

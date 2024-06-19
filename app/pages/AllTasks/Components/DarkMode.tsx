"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContextProvider } from "@/app/ContextApi";
import React, { useEffect } from "react";

function DarkMode() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode, setIsDarkMode, darkModeItems, setDarkModeItems } =
    darkModeObject;

  function handleClickedItem(singleItemIndex: number) {
    console.log(singleItemIndex);

    const updatedDarkModeItems = darkModeItems.map((darkModeItem, index) => {
      if (index === singleItemIndex) {
        return {
          ...darkModeItem,
          isSelected: true,
        };
      }
      return {
        ...darkModeItem,
        isSelected: false,
      };
    });
    setDarkModeItems(updatedDarkModeItems);
  }

  useEffect(() => {
    darkModeItems.forEach((singleItem) => {
      if (singleItem.id === 1 && singleItem.isSelected) {
        setIsDarkMode(false);
      }
      if (singleItem.id === 2 && singleItem.isSelected) {
        setIsDarkMode(true);
      }
    });
  }, [darkModeItems, setIsDarkMode]);

  console.log(isDarkMode);

  return (
    <div className="flex relative rounded-3xl bg-blue-100 w-[90px]">
      {darkModeItems.map((singleItem, singleItemIndex) => (
        <div
          key={singleItemIndex}
          onClick={() => {
            handleClickedItem(singleItemIndex);
          }}
          className="h-full w-[45px] z-40 flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={singleItem.icon}
            className={`
          ${
            singleItem.isSelected ? "text-purple-500" : "text-gray-500"
          } cursor-pointer
          `}
            height={20}
            width={20}
          />
        </div>
      ))}

      <div
        className={`w-[38px] absolute h-[38px]  top-2 lg:top-1 transform ${
          isDarkMode ? `translate-x-[48px]` : `translate-x-1`
        } bg-mainColor  rounded-full transition-all`}
      ></div>
    </div>
  );
}

export default DarkMode;

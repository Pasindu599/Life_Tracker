"use client";
import React, { useEffect } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "@/app/ContextApi";
import {
  getCurrentDayName,
  getDateString,
  getFormattedDate,
} from "@/utils/allTasksUtils/DateFunctions";

function TasksContainerTop() {
  const {
    openTaskObject,
    darkModeObject,
    selectedCurrentDateObject,
    offSetDayObject,
  } = useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { isDarkMode } = darkModeObject;
  const { selectedCurrentDate, setSelectedCurrentDate } =
    selectedCurrentDateObject;
  const { offSetDay, setOffSetDay } = offSetDayObject;

  type Option = "next" | "prev";

  function updateDate(option: Option) {
    if (option === "next") {
      setOffSetDay((prev) => (prev += 1));
    } else {
      setOffSetDay((prev) => (prev -= 1));
    }
  }

  useEffect(() => {
    console.log(offSetDay);
    setSelectedCurrentDate(getDateString(new Date(), offSetDay));
  }, [offSetDay]);

  return (
    <div className="p-3 flex justify-between items-center ">
      <div className="flex gap-4 items-center ">
        <div>
          <h2 className="font-bold text-lg">
            {getCurrentDayName(selectedCurrentDate)}
          </h2>
          <span className="font-light text-[12px]">
            {getFormattedDate(selectedCurrentDate)}
          </span>
        </div>

        <div className="flex gap-1 ml-4">
          <div
            onClick={() => updateDate("prev")}
            className="text-mainColor cursor-pointer"
          >
            <ArrowCircleLeftOutlinedIcon />
          </div>
          <div
            onClick={() => updateDate("next")}
            className="text-mainColor cursor-pointer"
          >
            <ArrowCircleRightOutlinedIcon />
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpenTask(true)}
        className="flex gap-2 items-center bg-mainColor text-white rounded-md text-sm p-3"
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        <span>Add Task</span>
      </button>
    </div>
  );
}

export default TasksContainerTop;

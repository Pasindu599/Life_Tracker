"use client";
import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircle from "@mui/icons-material/CheckCircle";

function TasksCompleted() {
  return (
    <div className="bg-white mt-7 p-8 rounded-md">
      <span className="font-bold text-lg mb-2">Tasks Completed </span>
      <div className="opacity-50 mt-4">
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default TasksCompleted;

function TaskCard() {
  return (
    <div className="flex p-3 items-center justify-between">
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircle />}
        sx={{
          color: "#5A639C",
          "&.Mui-checked": {
            color: "#5A639C",
          },
        }}
      />
      <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-blue-100 border border-red-500">
        <div className="border border-blue-500 w-full">
          {/* icon and name of Task */}
          <div className="flex gap-2 justify-between border border-thirdColor">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCode}
                className="bg-mainColor p-3 rounded-full w-4 h-4 text-white"
                height={20}
                width={20}
              />
              <span>Coding</span>
            </div>
          </div>
          {/* Area  */}
          <div className="flex gap-2 mt-2 border border-yellow-500">
            <div className="p-1 text-white text-[12px] rounded-md px-2 bg-mainColor">
              <span>Area1</span>
            </div>
            <div className="p-1 text-white text-[12px] rounded-md px-2 bg-mainColor">
              <span>Area1</span>
            </div>
          </div>
        </div>
        {/* three dot button  */}

        <div className="w-10 flex items-center justify-center">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

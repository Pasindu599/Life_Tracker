import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TasksContainerTop() {
  return (
    <div className="p-3 flex justify-between items-center ">
      <div className="flex gap-4 items-center ">
        <div>
          <h2 className="font-bold text-lg">Sunday</h2>
          <span className="font-light text-[12px]">17 May 2024</span>
        </div>

        <div className="flex gap-1 ml-4">
          <div className="text-mainColor cursor-pointer">
            <ArrowCircleLeftOutlinedIcon />
          </div>
          <div className="text-mainColor cursor-pointer">
            <ArrowCircleRightOutlinedIcon />
          </div>
        </div>
      </div>
      <button className="flex gap-2 items-center bg-mainColor text-white rounded-md text-sm p-3">
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        <span>Add Task</span>
      </button>
    </div>
  );
}

export default TasksContainerTop;

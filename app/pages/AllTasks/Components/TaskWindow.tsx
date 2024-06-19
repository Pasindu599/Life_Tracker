import React from "react";
import { useGlobalContextProvider } from "@/app/ContextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function TaskWindow() {
  const { openTaskObject, darkModeObject } = useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { isDarkMode } = darkModeObject;
  return (
    <div
      className={`top-[3%] left-1/2 transform -translate-x-1/2 w-[80%] z-50 p-10 rounded-md shadow-md ${
        openTask ? `absolute` : `hidden`
      } bg-thirdColor`}
    >
      <Header />
    </div>
  );
}

export default TaskWindow;

function Header() {
  const { openTaskObject, darkModeObject } = useGlobalContextProvider();
  const { openTask, setOpenTask } = openTaskObject;
  const { isDarkMode } = darkModeObject;
  return (
    <div className="flex justify-between items-center  ">
      <span className="font-bold text-xl">Add New Task</span>
      <FontAwesomeIcon
        icon={faClose}
        onClick={() => setOpenTask(false)}
        className="text-gray-500 cursor-pointer hover:text-gray-800"
      />
    </div>
  );
}

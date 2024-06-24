import React from "react";
import AllTasksTopbar from "./Components/AllTasksTopbar";
import AllTasksRightSidebar from "./Components/AllTasksRightSidebar";
import TaskContainer from "./Components/TasksContainer";
import TasksCompleted from "./Components/TasksCompleted";
import TaskWindow from "./Components/TaskWindow";
import { Toaster } from "react-hot-toast";
import AreaContainer from "./Components/AreaContainer";

function AllTasks() {
  return (
    <div className="max-lg:flex-col w-full flex flex-row gap-0 relative ">
      <TaskWindow />
      <div className="flex-col flex-grow  m-3">
        <AllTasksTopbar />
        <AreaContainer />
        <TaskContainer />
        <TasksCompleted />
      </div>
      <AllTasksRightSidebar />
    </div>
  );
}

export default AllTasks;

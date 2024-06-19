import React from "react";
import AllTasksTopbar from "./Components/AllTasksTopbar";
import AllTasksRightSidebar from "./Components/AllTasksRightSidebar";
import TaskContainer from "./Components/TasksContainer";
import TasksCompleted from "./Components/TasksCompleted";

function AllTasks() {
  return (
    <div className="max-lg:flex-col w-full flex ">
      <div className="flex-col flex-grow  m-3">
        <AllTasksTopbar />
        <TaskContainer />
        <TasksCompleted />
      </div>
      <AllTasksRightSidebar />
    </div>
  );
}

export default AllTasks;

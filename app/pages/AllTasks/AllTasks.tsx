import React from "react";
import AllTasksTopbar from "./Components/AllTasksTopbar";
import AllTasksRightSidebar from "./Components/AllTasksRightSidebar";
import TaskContainer from "./Components/TasksContainer";
import TasksCompleted from "./Components/TasksCompleted";

function AllTasks() {
  return (
    <div className="w-full flex ">
      <div className="w-[70%] m-5">
        <AllTasksTopbar />
        <TaskContainer />
        <TasksCompleted />
      </div>
      <AllTasksRightSidebar />
    </div>
  );
}

export default AllTasks;

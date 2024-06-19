import React from "react";
import TasksContainerTop from "./TacksContainer/TasksContainerTop";
import TasksContainerMiddle from "./TacksContainer/TasksContainerMiddle";

function TaskContainer() {
  return (
    <div className="mt-5 bg-white rounded-md p-5 flex flex-col gap-3">
      <TasksContainerTop />
      <TasksContainerMiddle />
    </div>
  );
}

export default TaskContainer;

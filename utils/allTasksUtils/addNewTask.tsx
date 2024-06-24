import { TaskType } from "@/app/types/MenuItemType";
import { set } from "mongoose";
import React from "react";
import toast from "react-hot-toast";

function addNewTask({
  allTasks,
  setAllTasks,
  newTask,
}: {
  allTasks: TaskType[];
  setAllTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  newTask: TaskType;
}) {
  try {
    setAllTasks([...allTasks, newTask]);
    toast.success("Task added successfully");
  } catch (e) {
    toast.error("Error adding task");
  }
}

export default addNewTask;

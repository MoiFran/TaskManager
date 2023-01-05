import React from "react";
import { TaskDoneItem } from "./TaskDoneItem";

export const TaskDone = ({ doneTask, deleteTaskDone }) => {
  return (
    <div className="task-container">
      <h2>Completed tasks</h2>
      {doneTask.map((doneTask) => {
        return (
          <TaskDoneItem
            key={doneTask.id}
            doneTask={doneTask}
            deleteTaskDone={deleteTaskDone}
          />
        );
      })}
    </div>
  );
};

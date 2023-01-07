import React from "react";
import { TaskDoneItem } from "./TaskDoneItem";

export const TaskDone = ({ doneTask, deleteTaskDone }) => {
  return (
    <div className="task-block-container">
      <h2> ({doneTask.length}) Completed tasks</h2>
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

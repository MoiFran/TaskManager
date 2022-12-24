import React from "react";
import { TaskDoneItem } from "./TaskDoneItem";

export const TaskDone = ({ doneTask }) => {
  return (
    <div>
      <h2>Done TaskS</h2>
      {doneTask.map((doneTask) => {
        return <TaskDoneItem key={doneTask.id} doneTask={doneTask} />;
      })}
    </div>
  );
};

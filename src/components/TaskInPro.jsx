import React from "react";
import { TaskInProItem } from "./TaskInProItem";

export const TaskInPro = ({ inProgressTask, finishTask }) => {
  return (
    <div>
      <h2>in progrees Task</h2>
      {inProgressTask.map((inProTask) => {
        return (
          <TaskInProItem
            key={inProTask.id}
            inProTask={inProTask}
            finishTask={finishTask}
          />
        );
      })}
    </div>
  );
};

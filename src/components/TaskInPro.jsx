import React from "react";
import { TaskInProItem } from "./TaskInProItem";

export const TaskInPro = ({ inProgressTask, finishTask }) => {
  return (
    <div className="task-container">
      <h2>Tasks in progress</h2>
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

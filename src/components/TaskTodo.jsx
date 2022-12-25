import React, { useState } from "react";
import { TodoTaskItem } from "./TodoTaskItem";

export const TaskTodo = ({ todoTask, toStart, deleteTask }) => {
  return (
    <div className="task-container">
      <h2>Tasks to do </h2>
      <div>
        {todoTask.map((task) => {
          return (
            <TodoTaskItem
              key={task.id}
              task={task}
              toStart={toStart}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

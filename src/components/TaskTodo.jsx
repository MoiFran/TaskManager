import React, { useState } from "react";
import { TodoTaskItem } from "./TodoTaskItem";

export const TaskTodo = ({ todoTask, toStart, deleteTask }) => {
  return (
    <div>
      <h2>Task todo </h2>
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

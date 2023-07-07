import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import moment from "moment/moment";
import { TaskTodo } from "./TaskTodo";
import { TaskInPro } from "./TaskInPro";
import { TaskDone } from "./TaskDone";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const TaskForm = () => {
  const [task, setTask] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );

  const [inProgressTask, setInProgressTask] = useState(
    localStorage.getItem("inProTask")
      ? JSON.parse(localStorage.getItem("inProTask"))
      : []
  );

  const [doneTask, setDoneTask] = useState(
    localStorage.getItem("doneTask")
      ? JSON.parse(localStorage.getItem("doneTask"))
      : []
  );

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: uuidv4(),
      postDate: moment().format("YYYY-MM-DD"),
    },
  });
  const onSubmit = (data) => {
    let newTask = [...task, data];
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
    window.location.reload();
  };

  const toStart = (id) => {
    let storeTask = JSON.parse(localStorage.getItem("task"));

    let newInproTask = storeTask.filter((item) => item.id === id);

    let inProArray = [...inProgressTask, newInproTask[0]];
    localStorage.setItem("inProTask", JSON.stringify(inProArray));
    setInProgressTask(inProArray);

    let newStore = storeTask.filter((item) => item.id !== id);
    localStorage.setItem("task", JSON.stringify(newStore));
    setTask(newStore);

    window.location.reload();
  };

  const finishTask = (id) => {
    let storeTask = JSON.parse(localStorage.getItem("inProTask"));
    let newDoneTask = storeTask.filter((item) => item.id === id);

    let doneArray = [...doneTask, newDoneTask[0]];
    localStorage.setItem("doneTask", JSON.stringify(doneArray));
    setDoneTask(doneArray);
    let newStore = storeTask.filter((item) => item.id !== id);
    localStorage.setItem("inProTask", JSON.stringify(newStore));
    setTask(newStore);
    window.location.reload();
  };

  const deleteTaskTodo = (id) => {
    let storeTask = JSON.parse(localStorage.getItem("task"));

    let newStore = storeTask.filter((item) => item.id !== id);
    localStorage.setItem("task", JSON.stringify(newStore));
    setTask(newStore);
  };

  const deleteTaskDone = (id) => {
    let doneTasks = JSON.parse(localStorage.getItem("doneTask"));
    let newDoneTask = doneTasks.filter((item) => item.id !== id);
    localStorage.setItem("doneTask", JSON.stringify(newDoneTask));
    setDoneTask(newDoneTask);
  };
  console.log("inprogre", inProgressTask);
  console.log("todo", task);
  return (
    <div className="big-container">
      <div className="form-container ">
        <Form onSubmit={handleSubmit(onSubmit)} className="form-style">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Title"
              name=""
              {...register("title")}
              className="input-group"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select {...register("lavel")} className="input-group">
              <option value="normal">normal</option>
              <option value="medio">medio</option>
              <option value="urgente">urgente</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description Task"
              name=""
              {...register("description")}
              className="input-group"
            />
          </Form.Group>
          <button
            className="btn-add"
            variant="info"
            type="submit"
            value="addTask"
          >
            ➕ ADD
          </button>
        </Form>
      </div>

      <div className="task-container">
        <TaskTodo
          todoTask={task}
          toStart={toStart}
          deleteTask={deleteTaskTodo}
   finishTask ={finishTask}
        />

        <TaskInPro inProgressTask={inProgressTask} finishTask={finishTask} />

        <TaskDone doneTask={doneTask} deleteTaskDone={deleteTaskDone} />
      </div>
    </div>
  );
};

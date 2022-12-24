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

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: uuidv4(),
      postDate: moment().format("YYYY-MM-DD"),
    },
  });

  const [doneTask, setDoneTask] = useState(
    localStorage.getItem("doneTask")
      ? JSON.parse(localStorage.getItem("doneTask"))
      : []
  );

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
  console.log("inprogre", inProgressTask);
  console.log("todo", task);
  return (
    <div className="Task-form">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title Task"
            name=""
            {...register("title")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>lavel</Form.Label>
          <Form.Select {...register("lavel")}>
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
          />
        </Form.Group>
        <Button variant="primary" type="submit" value="addTask">
          Submit
        </Button>
      </Form>

      <Container>
        <Row>
          <Col md={4}>
            <TaskTodo
              todoTask={task}
              toStart={toStart}
              deleteTask={deleteTaskTodo}
            />
          </Col>
          <Col md={4}>
            <TaskInPro
              inProgressTask={inProgressTask}
              finishTask={finishTask}
            />
          </Col>
          <Col md={4}>
            <TaskDone doneTask={doneTask} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
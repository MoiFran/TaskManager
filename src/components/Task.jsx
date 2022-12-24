import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import moment from "moment/moment";
import { TaskForm } from "./TaskForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Task = () => {
  return <TaskForm />;
};

export default Task;

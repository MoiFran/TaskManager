import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import moment from "moment/moment";
import Task from "./components/Task";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { TaskForm } from "./components/TaskForm";
import "./index.css";

function App() {
  return <TaskForm />;
}

export default App;

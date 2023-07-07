import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const TodoTaskItem = ({ task, toStart, deleteTask , finishTask}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const deleteTasks = () => {
    deleteTask(task.id);
    handleClose();
    console.log(" work ");
  };

  const gestorStart = () => {
    toStart(task.id);
  };

  const gestorTerminar =()=>{
    finishTask(task.id);
    console.log("work")
  };

  return (
    <div key={task.id}>
      {task.lavel === "urgente" ? (
        <Card className="card-item">
          <Card.Body>
            <Spinner animation="grow" variant="danger" size="sm" />
            <Card.Title>
              <h3> Title</h3> {task.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Importancia : {task.lavel}
            </Card.Subtitle>
            <Card.Text>
              <h4>Description</h4>
              {task.description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Post Date: {task.postDate}
            </Card.Subtitle>
            <Button
              variant="primary"
              onClick={gestorStart}
              className="btn-start"
            >
              Start
            </Button>
            <Button
              variant="green"
              onClick={gestorTerminar}
              className="btn-start"
            > Termnar   </Button>
            <button className="btn-delete" onClick={handleShow}>
              🗑
            </button>
          </Card.Body>
        </Card>
      ) : (
        <Card style={{ width: "18rem" }} className="card-item">
          <Card.Body>
            <Card.Title>
              <h4>Title</h4> {task.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Importancia : {task.lavel}
            </Card.Subtitle>
            <Card.Text>
              <h4>Description</h4>
              {task.description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Post Date: {task.postDate}
            </Card.Subtitle>
            <Button
              variant="primary"
              onClick={gestorStart}
              className="btn-start"
            >
              Start
            </Button>
              <Button
              variant="green"
              onClick={gestorTerminar}
              className="btn-start"
            > Termnar   </Button>
            <button className="btn-delete" onClick={handleShow}>
              🗑
            </button>
          </Card.Body>
        </Card>
      )}
      <Modal show={show} onHide={handleClose} animation={false} size="sm">
        <Modal.Header closeButton className="p-3 mb-2 bg-danger text-white">
          <Modal.Title>Delete {task.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>quieres eliminar esta tarea </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteTasks}>
            si
          </Button>
          <Button variant="primary" onClick={handleClose}>
            no
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

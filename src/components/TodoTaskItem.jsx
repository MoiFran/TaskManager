import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export const TodoTaskItem = ({ task, toStart, deleteTask }) => {
  const gestorStart = () => {
    toStart(task.id);
  };
  const gestorDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div key={task.id}>
      {task.lavel === "urgente" ? (
        <Card className="card-item">
          <Card.Body>
            <Spinner animation="grow" variant="danger" size="sm" />
            <Card.Title>
              <h4> Title</h4> {task.title}
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
            <button className="btn-delete" onClick={gestorDelete}>
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
            <button className="btn-delete" onClick={gestorDelete}>
              🗑
            </button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

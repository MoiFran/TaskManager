import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const TaskInProItem = ({ inProTask, finishTask }) => {
  const gestorDone = () => {
    finishTask(inProTask.id);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }} className="card-item">
        <Card.Body>
          <Card.Title>{inProTask.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {inProTask.lavel}
          </Card.Subtitle>
          <Card.Text>{inProTask.description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {inProTask.postDate}
          </Card.Subtitle>

          <Button variant="primary" onClick={gestorDone}>
            Done
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment/moment";

export const TaskInProItem = ({ inProTask, finishTask }) => {
  const gestorDone = () => {
    finishTask(inProTask.id);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }} className="card-item">
        <Card.Body>
          <Card.Title>
            <h4>Title</h4>
            {inProTask.title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Importancia : {inProTask.lavel}
          </Card.Subtitle>
          <Card.Text>
            <h4>Description</h4>
            {inProTask.description}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Start Date: {moment().format("YYYY-MM-DD HH:mm:ss")}
          </Card.Subtitle>

          <Button variant="primary" onClick={gestorDone}>
            Done
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

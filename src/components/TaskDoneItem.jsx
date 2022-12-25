import React from "react";
import moment from "moment/moment";
import Card from "react-bootstrap/Card";

export const TaskDoneItem = ({ doneTask }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card-item">
        <Card.Body>
          <Card.Title>{doneTask.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {moment().format("YYYY-MM-DD")}
          </Card.Subtitle>
          <Card.Text>{doneTask.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

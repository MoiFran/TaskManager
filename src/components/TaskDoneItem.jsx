import React from "react";
import moment from "moment/moment";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const TaskDoneItem = ({ doneTask, deleteTaskDone }) => {
  const deleteTask = () => {
    deleteTaskDone(doneTask.id);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }} className="card-item">
        <Card.Body>
          <Card.Title>
            <h4>Title</h4> {doneTask.title}
          </Card.Title>
          <Card.Text>
            <h5>Description: </h5>
            {doneTask.description}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Done Date: {moment().format("YYYY-MM-DD  HH:mm:ss")}
          </Card.Subtitle>
        </Card.Body>
        <button className="btn-delete-done" onClick={deleteTask}>
          ❌
        </button>
      </Card>
    </div>
  );
};

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import ApiRequest from "../../APIRequest/ApiRequest";
import AleartMessage from "../../helper/AleartMessage";
const AllTask = () => {
  useEffect(() => {
    ApiRequest.SetAllTaskRequest();
  }, []);

  const allTask = useSelector((state) => state.task.allTask);

  const deleteTask = (id) => {
    AleartMessage.deleteTask(id).then(() => {
      ApiRequest.SetAllTaskRequest();
    });
  };

  const updateTask = (id, status) => {
    AleartMessage.updateTask(id, status).then(() => {
      ApiRequest.SetAllTaskRequest();
    });
  };

  return (
    <Container fluid={true} className="content-body">
      <div className="row p-0 m-0">
        <div className="col-12 col-md-3 col-lg-3 px-3">
          <h5>Task Canceled</h5>
        </div>
        <div className="col-12 col-md-3 col-lg-5 px-3">
          <div className="row">
            <div className="col-8">
              <input type="date" className="form-control" />
            </div>
            <div className="col-4">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
        <div className="col-12 float-end col-md-4 col-lg-4 px-2">
          <div className="row">
            <div className="col-8">
              <input className="form-control w-100" />
            </div>
            <div className="col-4">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0">
        {allTask &&
          allTask.map((task) => {
            let badgeColor = "";
            if (task.status === "new") {
              badgeColor = "info";
            } else if (task.status === "pending") {
              badgeColor = "primary";
            } else if (task.status === "canceled") {
              badgeColor = "danger";
            } else if (task.status === "complate") {
              badgeColor = "success";
            }
            return (
              <div
                className="col-12 col-lg-4 col-sm-6 col-md-4  p-2"
                key={task._id}
              >
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="animated fadeInUp">{task.title}</h6>
                    <p className="animated fadeInUp">{task.body}</p>
                    <p className="m-0 animated fadeInUp p-0">
                      <AiOutlineCalendar />{" "}
                      {new Date(task.createdAt).toDateString()}
                      <a className="icon-nav text-primary mx-1">
                        <AiOutlineEdit
                          onClick={() => updateTask(task._id, task.status)}
                        />
                      </a>
                      <a className="icon-nav text-danger mx-1">
                        <AiOutlineDelete onClick={() => deleteTask(task._id)} />
                      </a>
                      <a className={`badge float-end bg-${badgeColor}`}>
                        {task.status}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default AllTask;

import React from "react";
import { Table } from "../table/Table";
// import {Link } from 'react-router-dom'
import "./sideStyle.css";
export function Side() {
  return (
    <div>
      <div className="container-fluid position">
        <div className="row">
          <div className="col-3 shadow collapse show d-md-flex bg-light pt-2  sidebar ">
            <h3>
              <i className="bi bi-justify"></i>
            </h3>
            <ul className="nav flex-column flex-nowrap overflow-hidden my-5">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <i className="bi bi-brightness-high"></i>
                  <span className="d-none d-sm-inline">My Day</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <i className="bi bi-star"></i>{" "}
                  <span className="d-none d-sm-inline">Important</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="">
                  <i className="bi bi-calendar3"></i>
                  <span className="d-none d-sm-inline">Planned</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <i className="bi bi-person"></i>
                  <span className="d-none d-sm-inline">Assigned to me</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <i className="bi bi-house-door"></i>
                  <span className="d-none d-sm-inline">Task</span>
                </a>
              </li>
            </ul>
          </div>

          <Table />
        </div>
      </div>
    </div>
  );
}

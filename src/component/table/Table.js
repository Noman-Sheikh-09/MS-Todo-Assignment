import React, { useState } from "react";
import "./tableStyle.css";

export function Table() {
  const [Data, setData] = useState([]);
  const [employee, employeeData] = useState({
    fname: "",
  });
  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    employeeData({ ...employee, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const newData = { ...employee, id: new Date().getTime().toString() };
    setData([...Data, newData]);
  };

  return (
    <div>
      <div className="container mt-4 ml-3">
        <div className="row">
          <h3>My Day</h3>
          <i className="bi bi-three-dots mt-2 ml-2"></i>

          <i className="bi bi-arrow-down-up arrow mt-2"></i>
          <p className="mt-2 text-muted">sort</p>
          <i class="bi bi-lightbulb ml-2 mt-2 text-muted"></i>
          <p className=" mt-2 text-muted">suggestions</p>
        </div>
      </div>
      <form className="col s12" onSubmit={handelSubmit}>
        <div className="row">
          <div className="input-field col s6" style={{ width: "100%s" }}>
            <input 
              id="first_name"
              type="text"
              className="validate"
              onChange={handelInput}
              value={employee.fname}
              name="fname"
              autoComplete="on"
             
            />
          </div>
        </div>

        <div className="col s12">
          <button 
            style={{
              color: "white",
              backgroundColor: "tomato",
              border: "tomato 1px solid",
              borderRadius: "2px",
              padding: "5px 10xp",
            }}
          >
            submit
          </button>
          <button
            style={{
              color: "black",
              backgroundColor: "white",
              border: "tomato 1px solid",
              borderRadius: "2px",
              padding: "5px 10xp",
            }}
          >
            Edit
          </button>
          
    </div>
      </form>
      <div className="container ">
        <div className="row">
          <table className="highlight ">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {Data.map((item) => {
                const { fname } = item;
                return (
                  <tr>
                    <td>{fname}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

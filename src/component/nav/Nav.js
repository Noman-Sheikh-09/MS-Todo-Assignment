import React, { useState } from 'react'
import {Apps} from '../apps/Apps.js'
import { Logout } from '../logout/Logout.js';
import './navStyle.css';
export  function Nav() {
   const[data,setData]=useState(false)
   const[data1,setData1]=useState(false)
  return (
    <div>
        <nav className="navbar navbar-expand-lg  bg-primary">
  <div className="container-fluid">
  <i className="bi bi-grid-3x3-gap-fill text-light " onClick={(value)=>setData(value)}></i>
    <a className="navbar-brand text-light left">To Do</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item ">
        <div className="input-group bg-light ">
  <div className="input-group-prepend">
    <span className="input-group-text"><i className="bi bi-search"></i></span>
    <input type="text" className="shadow-none outline bg-light width" />
  </div>
   </div>
        </li>
        <li className="nav-item center">
       <h4> <i className="bi bi-gear text-light"></i></h4>
        </li>
        <li className="nav-item top">
       <h4> <i className="bi bi-question text-light"></i></h4>
        </li>
        <li className="nav-item top">
       <h4> <i className="bi bi-filter text-light"></i></h4>
        </li>
        <li className="nav-item top">
       <h4> <i className="bi bi-arrow-down-circle text-light" onClick={(value)=>setData1(value)}></i></h4>
        </li>
      </ul>
    </div>
  </div>
</nav>
{
    data?
    <Apps />
    :null
}
{
  data1?
  <Logout />
  :null
}
    </div>
    
  )
}

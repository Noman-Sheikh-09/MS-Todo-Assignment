import React from 'react'
import './logoutStyle.css'
import window from '../../assets/microsoft/windows.png'
import choose from '../../assets/microsoft/profile.jpg';
export  function Logout() {
  return (
    <div className="right">
        <div className="card ">
  <div className="card-body">
    <h5 className="card-title text-muted"><img src={window} />Microsoft 
    <i className="btn btn-secondary bg-light sign">sign Out</i>
    </h5>
    <div className="round">
    <img src={choose} className="w-100 h-50 rounded-circle"  />
    </div>
    <div className="head h-50 ml-3">
<span style={{fontSize:'20px'}}>haseeb hassan</span><br/>
<span style={{fontSize:'14px'}} >haseebansare19@gmail.com</span><br/>
<a href="">My Microsoft Account</a><br/>
<a href="">My Profile</a>
    </div>
  </div>
</div>
        </div>
    
  )
}

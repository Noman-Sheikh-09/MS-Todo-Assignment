import React, { useState } from 'react'
import { Button } from '../button/Button.js';
import outlook from '../../assets/microsoft/Outlook.png'
import onedrive from '../../assets/microsoft/OneDrive.png'
import team from '../../assets/microsoft/Microsoft Teams.png'
import word from '../../assets/microsoft/Word.png'
import excel from '../../assets/microsoft/Excel.png'
import power from '../../assets/microsoft/PowerPoint.png'
import onenote from '../../assets/microsoft/OneNote.png'
import todo from '../../assets/microsoft/microsoft-todo.png'
import family from '../../assets/microsoft/SharePoint.png'
import calender from '../../assets/microsoft/Yammer.png'
import skype from '../../assets/microsoft/Skype.png'
import './appsStyle.css';
export  function Apps() {
  return (
    <div>
      <div className="card cards" >
        <a href="" className="btn btn-primary my-3" text="Back" >Back</a>
  <div className="card-body">
  <div className="d-inline-block "><i className="bi bi-grid-3x3-gap-fill text-muted " style={{fontSize:'20px'}} ></i></div>
  <div className="d-sm-inline-block"><a  className="text-info" style={{fontSize:'15px',marginLeft:'230px'}}>office</a></div>
  <div className="d-inline-block"><i className="bi bi-arrow-right ml-1" ></i></div>
  <h5 className="mb-1">Microsoft 365</h5>
  <div className="button">
  <Button src={outlook} text="Outlook" />
  <Button src={onedrive} text="OneDrive" />
  </div>
  <div className="button">
  <Button src={team} text="Teams" />
  <Button src={word} text="Word" />
  </div>
  <div className="button">
  <Button src={excel} text="Excel" />
  <Button src={power} text="Power" />
  </div>
  <div className="button">
  <Button src={onenote} text="OneNote" />
  <Button src={todo}  text="To Do"/>
  </div>
  <div className="button">
  <Button src={family} text="Family" />
  <Button src={calender} text="Calender" />
  </div>
  <Button src={skype}  text="Skype"/>

  <div className="d-sm-inline-block"><a className="text-info" style={{fontSize:'15px'}} >All apps</a></div>
  <div className="d-inline-block"><i className="bi bi-arrow-right ml-1" ></i></div>
 </div>

    </div>
    </div>
  )
}

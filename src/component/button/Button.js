import React from 'react'
import './buttonStyle.css'
export  function Button({src,text,style}) {
  return (
    <div>
       <div className="btn btn-light text-dark outlook " style={{ backgroundColor: style}}><img src={src} className="height"/> {text}</div>
    </div>
  )
}

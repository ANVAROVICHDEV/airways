import React from 'react'
import "./images.scss"
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
const Images = ({pageName}) => {



  return (
    <div className='header'>
        <img src="./images/pilot.png" alt="" />

        <div className="text">
          <div className="info"><FaCaretRight className='arrow' /><h1>{pageName}</h1><FaCaretLeft className='arrow' /></div>
          </div>
    </div>
  )
}

export default Images
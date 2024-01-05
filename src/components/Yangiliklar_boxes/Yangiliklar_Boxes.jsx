import React from 'react'
import "./Yangiliklar_Boxes.scss"
import { Link } from 'react-router-dom'
const Yangiliklar_Boxes = () => {
  return (
    <div className='Yangiliklar_Boxes'>
      <div className="box">
        <img src="./images/pilot2.png" alt="" />
        <div className="text">
          <div className="text_info">
            <h3>Bugun Xalqaro fuqaro aviatsiyasi kuni!</h3>
            <p>20.21.2023</p>
          </div>
          <div className="text_button">
          <Link to={"/Yangiliklar_ichi"}> <button>Batafsil</button></Link>
          </div>
        </div>
      </div>
      <div className="box">
        <img src="./images/hand.png" alt="" />
        <div className="text">
          <div className="text_info">
            <h3>Bugun Xalqaro fuqaro aviatsiyasi kuni!</h3>
            <p>20.21.2023</p>
          </div>
          <div className="text_button">
           <Link to={"/Yangiliklar_ichi"}> <button>Batafsil</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yangiliklar_Boxes
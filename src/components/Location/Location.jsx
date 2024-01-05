import React from 'react'
import "./Location.scss"
import { Link } from 'react-router-dom'
const Location = () => {
  return (
         <div className="locations">
        <div className="map">
         
           <img src="./images/map.png" alt="" />
        </div>
        <div className="login">
          <form action="">
            <h3>To'liq ismingiz</h3>
          <input type="text" placeholder="" /><br />
            <h3 className='number'>Telefon raqam</h3>
          <input type="text" placeholder='+998 (**) ***-**-**' /><br />
          <textarea name="" id="" cols="30" rows="10" placeholder='Murojat matni...'></textarea>
          <button>Jo’natish</button>
          </form>
        </div>
      </div>
  )
}

export default Location
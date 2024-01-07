import React from 'react'
import "./Location.scss"
import { Link } from 'react-router-dom'
const Location = () => {
  return (
         <div className="locations">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1128.9057879968093!2d71.78114047568647!3d40.3828723420603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a4e74c1d51%3A0x74f191ca540db19!2siTeach%20Academy!5e0!3m2!1sru!2s!4v1704633005690!5m2!1sru!2s"   style={{"border":'0' ,'allowfullscreen' : "" , 'loading':"lazy"  , "referrerpolicy":"no-referrer-when-downgrade"}}  ></iframe>

        </div>
        <div className="login">
          <form action="https://www.google.com/maps/place/iTeach+Academy/@40.3828955,71.7795625,17z/data=!3m1!4b1!4m6!3m5!1s0x38bb83a4e74c1d51:0x74f191ca540db19!8m2!3d40.3828914!4d71.7821374!16s%2Fg%2F11qp4_jr3t?entry=ttu">
            <h3>To'liq ismingiz</h3>
          <input type="text" placeholder="FIO" /><br />
            <h3 className='number'>Telefon raqam</h3>
          <input type="text" placeholder='+998 (**) ***-**-**' /><br />
          <h3 className='number'>Fikringiz</h3>
          <textarea name="" id="" cols="30" rows="10" placeholder='Murojat matni...'></textarea>
          <button>Jo’natish</button>
          </form>
        </div>
      </div>
  )
}

export default Location
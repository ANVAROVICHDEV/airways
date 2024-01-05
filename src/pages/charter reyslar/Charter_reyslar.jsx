import React from 'react'
import "./Charter_reyslar.scss"
import WOW from 'wowjs';
import { Charter_Acardin, Images, Location } from '../../app'

const Charter_reyslar = () => {

  return (
    <div className='Charter_reyslar'>
      <Images pageName={'Charter-reyslar'} />
      <Charter_Acardin />
      <Location />
    

    </div>
  )
}

export default Charter_reyslar
import React from 'react'
import "./Yonalishlar.scss"

import { Images , Boxes ,Location} from '../../app/index';
const Yonalishlar = () => {
  return (
    <div className='Yonalishlar'>
        <Images pageName={"Serqatnov yo’nalishlar"} />
        <Boxes />
        <Location />
    </div>
  )
}

export default Yonalishlar
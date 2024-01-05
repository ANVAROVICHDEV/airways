import React from 'react'
import "./Biz_xaqimizda.scss"
import { Biz, Images, Location } from '../../app'

const Biz_xaqimizda = () => {
  return (
    <div className='Biz_xaqimizda'>
      <Images pageName={"Biz xaqimizda"} />
      <Biz />
      <Location />
    </div>
  )
}

export default Biz_xaqimizda
import React from 'react'
import "./Qoidalar.scss"
import { Images, Location , Royxat } from '../../app'

const Qoidalar = () => {
  return (
    <div className='Qoidalar'>
      <Images pageName={"Ro’yxatdan o’tish qoidalari"} />
      <Royxat />
      <Location />
    </div>
  )
}

export default Qoidalar
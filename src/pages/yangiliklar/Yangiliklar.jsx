import React from 'react'
import "./Yangiliklar.scss"

import { Images, Location, Yangiliklar_Boxes } from '../../app'


import { NewsBoxes } from '../../app'


const Yangiliklar = () => {
  return (
    <div className="Yangiliklar">
    
    <Images pageName={"Yangiliklar"} />
    <Yangiliklar_Boxes />
      <NewsBoxes />
      <Location />
    </div>
  );
};

export default Yangiliklar;

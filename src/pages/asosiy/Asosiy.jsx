import React from "react";
import "./Asosiy.scss";
import {
  Asosiy_Yonalishlar,
  Hamkorlar,
  HeaderSlider,
  Location,
  MainSlider1,
  MainSlider2,
  Modal,
} from "../../app/index";

const Asosiy = ({ scrollTop }) => {
  scrollTop;
  return (
    <div className="asosiy">
      <header>
        <HeaderSlider />
        {/* <Modal /> */}
      </header>
      <main>
        
        <Asosiy_Yonalishlar />
        <MainSlider1 />
        <MainSlider2 />
        <Hamkorlar />
        <Location />
      </main>
    </div>
  );
};

export default Asosiy;

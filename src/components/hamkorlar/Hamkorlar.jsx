import React, { useEffect } from "react";
import "./Hamkorlar.scss";


// wow
import WOW from "wow.js";
import "animate.css/animate.min.css";
import "animate.css";

const Hamkorlar = () => {
  useEffect(() => {
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);
  return (
    <div
      className="hamkorlar wow animate__animated animate__fadeInRight"
      data-wow-delay=".2s"
      data-wow-iteration="1"
      data-wow-offset="50"
    >
      <div className="title">Bizning xamkorlar</div>

      <div className="logos">
        <div className="logo">
          <img src="./images/Layer 49 1 (1).png" alt="" />
        </div>
        <div className="logo">
          <img src="./images/Layer 49 1 (2).png" alt="" id="mi" />
        </div>
        <div className="logo">
          <img src="./images/Layer 49 1 (3).png" alt="" />
        </div>
        <div className="logo">
          <img src="./images/Layer 49 1 (4).png" alt="" />
        </div>

        <div className="logo">
          <img
            src="https://api.logobank.uz/media/logos_png/Artel-01.png"
            alt=""
          />
        </div>
        <div className="support"></div>
      </div>
    </div>
  );
};

export default Hamkorlar;

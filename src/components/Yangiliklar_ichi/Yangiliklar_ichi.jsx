import React from "react";
import "./Yangiliklar_ichi.scss";
import { Link } from "react-router-dom";
import {
  Location,
  Yangiliklar_ichi_img,
  Yangiliklar_ichi_text,
} from "../../app";
const Yangiliklar_ichi = () => {
  return (
    <>
      <div className="Yangiliklar_ichi">
        <div className="back">
          <Link to={"/"}>
            <p className="a">Asosiy</p>
          </Link>{" "}
          <hr />{" "}
          <Link to={"/Yangiliklar"}>
            <p>Orqaga</p>
          </Link>
        </div>
        <Yangiliklar_ichi_img />
        <Yangiliklar_ichi_text />
      </div>
      <Location />
    </>
  );
};

export default Yangiliklar_ichi;

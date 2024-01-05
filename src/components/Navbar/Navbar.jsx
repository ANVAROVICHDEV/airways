import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

import { AiOutlineGlobal } from "react-icons/ai";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useState } from "react";
const Navbar = () => {
  const [barscart, setBarscart] = useState(false);

  return (
    <div className="nav">
      <div className={barscart ? "barsclick active" : "barsclick"}>
        <ul>
          <li>
            <NavLink to={"/"}>Asosiy</NavLink>
          </li>

          <li>
            <NavLink to={"/Yonalishlar"}>Yo’nalishlar</NavLink>
          </li>

          <li>
            <NavLink to={"/Charter_reyslar"}>Charter reyslar</NavLink>
          </li>

          <li>
            <NavLink to={"/Qoidalar"}>Ro’yxatdan o’tish qoidalari</NavLink>
          </li>

          <li>
            <NavLink to={"/Yangiliklar"}>Yangiliklar</NavLink>
          </li>

          <li>
            <NavLink to={"/Biz_xaqimizda"}>Biz xaqimizda</NavLink>
          </li>
        </ul>

        <p>Til o'zgartirish</p>
        <select name="" id="">
          <option value="uz">Uz</option>
          <option value="Eng">Eng</option>
          <option value="Rus">Rus</option>
        </select>

        <div className="login">
          <div className="cantact">
            <p>Malumot uchun </p>
            <div className="number">
              <FaPhoneAlt />
              <Link to={"tel:+998 90 857 01 21"}>
                <h3>+7 903-264-55-44</h3>
              </Link>
            </div>
            <div className="icons">
              <div className="radio">
                <FaYoutube />
              </div>
              <div className="radio">
                <FaTelegram />
              </div>
              <div className="radio">
                <RiWhatsappFill />
              </div>
            </div>
            <div className="email">
              <Link to={`parvoz-airways@mail.ru`}>
                <h3>parvoz-airways@mail.ru</h3>
              </Link>
            </div>
            <button>Bog’lanish</button>
          </div>
        </div>
      </div>
      <div className="logo">
        <Link to={"/"}>
          {" "}
          <img className="black" src="./images/Layer_1.png" alt="" />
        </Link>
        <Link to={"/"}>
          {" "}
          <img className="white" src="./images/Layer_2.png" alt="" />
        </Link>
      </div>
      <div className="pages">
        <ul>
          <li>
            <NavLink to={"/"}>Asosiy</NavLink>
          </li>

          <li>
            <NavLink to={"/Yonalishlar"}>Yo’nalishlar</NavLink>
          </li>

          <li>
            <NavLink to={"/Charter_reyslar"}>Charter reyslar</NavLink>
          </li>

          <li>
            <NavLink to={"/Qoidalar"}>Ro’yxatdan o’tish qoidalari</NavLink>
          </li>

          <li>
            <NavLink to={"/Yangiliklar"}>Yangiliklar</NavLink>
          </li>

          <li>
            <NavLink to={"/Biz_xaqimizda"}>Biz xaqimizda</NavLink>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <div className="language">
          <select name="" id="">
            <option value="uz">Uz</option>
            <option value="Eng">Eng</option>
            <option value="Rus">Rus</option>
          </select>
        </div>

        <button>Bog’lanish</button>

        <HiMiniBars3BottomRight
          className="bars2"
          onClick={() => setBarscart(!barscart)}
        />
      </div>
      <HiMiniBars3BottomRight
        className="bars"
        onClick={() => setBarscart(!barscart)}
      />
    </div>
  );
};

export default Navbar;

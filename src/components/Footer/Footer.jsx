import React from "react";
import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  const handleTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="Footer">
      <div className="block">
        <div className="info">
          <img className="white" src="./images/Layer_2.png" alt="" />
          <h3 className="title">
            Biz sizni uzog’ingizni yaqin qilish uchun xizmat ko’rsatamiz
          </h3>
          <p>Malumot uchun</p>
          <Link to={"tel:+998 90 857 01 21"}>
            <h3 className="phone_number">+7 903-264-55-44</h3>
          </Link>
          <Link to={`parvoz-airways@mail.ru`}>
            <h3>parvoz-airways@mail.ru</h3>
          </Link>
        </div>
        <div className="menyu">
          <h3>Menyu</h3>
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
        <div className="cantact">
          <h3>Bizning ofis </h3>
          <div className="location">
            <p>Moskva shahar, Shlyuzovaya qirg'og'i, 2/1s1</p>
          </div>
          <div className="time">
            <p>Dushanba - Juma, soat 09:00 dan 18:00 gacha</p>
          </div>

          <div className="radio " onClick={handleTop}>
            <FaCaretDown />
          </div>
        </div>
      </div>
      <hr />

      <div className="networks">
        <div className="networks_text">
          <p>© 2023 Barcha huquqlar himoyalangan. Parvoz airways</p>
        </div>
        <div className="logos">
          <div className="radio">
            <FaYoutube />
          </div>

          <div className="radio">
            <FaTelegramPlane />
          </div>

          <div className="radio">
            <IoLogoWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

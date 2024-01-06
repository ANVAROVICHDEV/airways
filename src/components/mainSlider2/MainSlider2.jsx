import React, { useEffect, useState } from "react";
import "./MainSlider2.scss";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
//
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { TiArrowSortedDown } from "react-icons/ti";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
// wow
import WOW from "wow.js";
import "animate.css/animate.min.css";
import "animate.css";
import axios from "axios";
import { Link } from "react-router-dom";

const MainSlider2 = () => {
  const [news, setNews] = useState(null)

  useEffect(() => {
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
    getData()
  }, []);

  const getData = async () => {
    const response = await axios.get("http://kfuk.karimjonov.uz/api/news")
    setNews(response.data.news);
  }

  return (
    <div className="mainSlider2 wow animate__animated animate__fadeIn"
      data-wow-delay=".2s"
      data-wow-iteration="1"
      data-wow-offset="50">
      <div className="title">
        <h1>Yangiliklar</h1>
        <div className="arrows">
          <button className="mainSlider2_left">
            <IoMdArrowDropleft />
          </button>
          <button className="mainSlider2_right">
            <IoMdArrowDropright />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        slidesPerView={4}
        navigation={{
          prevEl: ".mainSlider2_left",
          nextEl: ".mainSlider2_right",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            centeredSlides: true
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {news && news.map(item => (
          <SwiperSlide>
            
            <img className="img" src={item.image} alt="" />
            <div className="info">
              <h1>{item.name}</h1>
              <Link to={`/Yangiliklar_ichi/${item.slug}`}>
              <button className="batafsil">Batafsil</button>
              </Link>
            </div>
            <div className="support"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default MainSlider2;

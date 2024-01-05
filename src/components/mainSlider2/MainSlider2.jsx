import React, { useEffect } from "react";
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

const MainSlider2 = () => {
  useEffect(() => {
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);
  return (
    <div className="mainSlider2 wow animate__animated animate__fadeIn"
    data-wow-delay=".2s"
      data-wow-iteration="1"
      data-wow-offset="50">
      <div className="title">
        <h1>Charter yo’nalishlar</h1>
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
        <SwiperSlide>
          <img src="./images/Rectangle 41.png" alt="" />
          <div className="info">
            <h1>
              Barcha yo‘nalishlarimizda talabalar uchun 50% chegirma e’lon
              qilamiz!
            </h1>
            <button className="batafsil">Batafsil</button>
          </div>
          <div className="support"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Rectangle 41.png" alt="" />
          <div className="info">
            <h1>
              Barcha yo‘nalishlarimizda talabalar uchun 50% chegirma e’lon
              qilamiz!
            </h1>
            <button className="batafsil">Batafsil</button>
          </div>
          <div className="support"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Rectangle 41.png" alt="" />
          <div className="info">
            <h1>
              Barcha yo‘nalishlarimizda talabalar uchun 50% chegirma e’lon
              qilamiz!
            </h1>
            <button className="batafsil">Batafsil</button>
          </div>
          <div className="support"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Rectangle 41.png" alt="" />
          <div className="info">
            <h1>
              Barcha yo‘nalishlarimizda talabalar uchun 50% chegirma e’lon
              qilamiz!
            </h1>
            <button className="batafsil">Batafsil</button>
          </div>
          <div className="support"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Rectangle 41.png" alt="" />
          <div className="info">
            <h1>
              Barcha yo‘nalishlarimizda talabalar uchun 50% chegirma e’lon
              qilamiz!
            </h1>
            <button className="batafsil">Batafsil</button>
          </div>
          <div className="support"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Rectangle 41.png" alt="" />
          <div className="info">
            <h1>
              Barcha yo‘nalishlarimizda talabalar uchun 50% chegirma e’lon
              qilamiz!
            </h1>
            <button className="batafsil">Batafsil</button>
          </div>
          <div className="support"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Rectangle 41.png" alt="" />
          <div className="info">
            <h1>
              Barcha yo‘nalishlarimizda talabalar uchun 50% chegirma e’lon
              qilamiz!
            </h1>
            <button className="batafsil">Batafsil</button>
          </div>
          <div className="support"></div>
        </SwiperSlide>
      </Swiper>
    </div>
    
  );
};

export default MainSlider2;

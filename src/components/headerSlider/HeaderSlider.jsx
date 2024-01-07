import { useEffect, useState } from "react";
import { ApiService } from "../../service/api.service";
import { v4 as uuidv4 } from "uuid";

// Style Css
import "./HeaderSlider.scss";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TypeAnimation } from "react-type-animation";
import { Link, useNavigate } from "react-router-dom";

const HeaderSlider = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching("sliders");
      setImages(data);
    };
    getData();
  }, []);

  const navigate = useNavigate();

  const swiper2Pagination = {
    el: ".swiper2Pagination",
    type: "fraction",
  };

  return (
    <div className="header_slider">
      <div className="mainSwiper">
        <div className="left">
          <div className="top">
            <h1>
              <TypeAnimation
                sequence={[
                  "Biz sizni uzog’ingizni yaqin qilish uchun xizmat ko’rsatamiz",
                ]}
                speed={50}
              />
            </h1>
            <div className="info">
              <p>
                <TypeAnimation
                  sequence={[
                    "Biz siz uchun barcha qulayliklarni yaratamiz barchasi oson va arzon",
                  ]}
                  speed={50}
                />
              </p>

              <button onClick={() => navigate("/Biz_xaqimizda")}>
                Batafsil
              </button>
            </div>
          </div>
          <Swiper
            className="bottom"
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            speed={400}
          >
            {images &&
              images.map((image) => (
                <div key={uuidv4()}>
                  <SwiperSlide key={uuidv4()}>
                    <img src={image.image} alt="Image" />
                  </SwiperSlide>
                </div>
              ))}
          </Swiper>
        </div>
        <div className="right">
          <Swiper
            className="right_swiper"
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            direction={"vertical"}
            speed={400}

          >
            {images &&
              images.map((image) => (
                <div key={uuidv4()}>
                  <SwiperSlide key={uuidv4()}>
                    <img src={image.image2} alt="Image" />
                  </SwiperSlide>
                </div>
              ))}
          </Swiper>
        </div>
      </div>

      <div className="swiper2">
        <Swiper
          className="swiper_adaptive"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1.4}
          navigation={{ prevEl: ".left", nextEl: ".right" }}
          pagination={swiper2Pagination}
          centeredSlides={true}
          loop={true}
        >
          {images &&
            images.map((item) => (
              <SwiperSlide key={uuidv4()}>
                <div className="support"></div>
                <img src={item.image2} alt="" />
              </SwiperSlide>
            ))}
          {/* <SwiperSlide>
            <div className="support"></div>
            <img src="./images/Rectangle 161.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="support"></div>
            <img src="./images/Rectangle 161.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="support"></div>
            <img src="./images/Rectangle 161.png" alt="" />
          </SwiperSlide> */}
        </Swiper>
        <div className="adaptiv_arrows">
          <button className="arrows left">
            <IoIosArrowBack />
          </button>
          <div className="swiper2Pagination"></div>

          <button className="arrows right">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./MainSlider1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ApiService } from "../../service/api.service";
import { Link } from "react-router-dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function App() {
	const [charters, setCharters] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const data = await ApiService.fetching("charters");
			setCharters(data);
		};
		getData();
	}, []);

	return (
		<div className="mainSlider1">
			<div className="title">
				<h1>Charter yo’nalishlar</h1>
				<div className="arrows">
					<button className="mainSlider1_left">
						<IoMdArrowDropleft />
					</button>
					<button className="mainSlider1_right">
						<IoMdArrowDropright />
					</button>
				</div>
			</div>
			<Swiper
				 spaceBetween={30}
				 centeredSlides={false}
				 autoplay={{
				   delay: 2500,
				   disableOnInteraction: false,
				 }}
				 pagination={{
				   clickable: false,
				 }}
				 modules={[Autoplay, Pagination, Navigation]}
				navigation={{
					prevEl: ".mainSlider1_left",
					nextEl: ".mainSlider1_right",
				}}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 1.5,
					},
					900: {
						slidesPerView: 2.5,
					},
				}}
				className="mySwiper"
			>
				{charters &&
					charters.map((charter) => (
						<SwiperSlide key={charter.id}>
							<Link to={"/Charter_reyslar"}>
								<div className="image">
									<img src={charter?.image} alt={charter.name} />
								</div>
								<div className="text">{charter.name}</div>
							</Link>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}

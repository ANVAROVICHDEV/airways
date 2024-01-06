import React, { useEffect, useState } from 'react'
import "./Yangiliklar_ichi_text.scss";
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Yangiliklar_ichi_text = () => {
  const {slug} = useParams()

  const [news , setNews] = useState()

  useEffect(() => {
    const getData = async () => {
			try {
				const data = await axios.get(`http://kfuk.karimjonov.uz/api/new/${slug}`)
				setNews(data.data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		getData();
  } , [])


	return (
		<div className="Yangiliklar_ichi_text">
			<div className="text">
				<div className="text_data">
					<h3>Bugun Xalqaro fuqaro aviatsiyasi kuni!</h3>
					<p>
						Bugun Xalqaro fuqaro aviatsiyasi kuni!Silk Avia havo kemalari
						parvozlarining xavfsizligi, qulayligi va o‘z vaqtida bajarilishini
						ta’minlashga o`z hissasini qo`shayotgan O‘zbekiston Respublikasining
						aviatsiya xodimlarini, shu jumladan barcha dispetcherlar,
						uchuvchilar, muhandislarni bugungi bayram bilan tabriklaydi.
					</p>
					<p>
						Bugun Xalqaro fuqaro aviatsiyasi kuni!Silk Avia havo kemalari
						parvozlarining xavfsizligi, qulayligi va o‘z vaqtida bajarilishini
						ta’minlashga o`z hissasini qo`shayotgan O‘zbekiston Respublikasining
						aviatsiya xodimlarini, shu jumladan barcha dispetcherlar,
						uchuvchilar, muhandislarni bugungi bayram bilan tabriklaydi.
					</p>
				</div>
				<div className="text_date">
					<h3>20.20.2023</h3>
				</div>
			</div>
		</div>
	);
};

export default Yangiliklar_ichi_text;

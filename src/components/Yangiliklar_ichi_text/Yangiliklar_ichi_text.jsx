import React, { useEffect, useState } from 'react'
import "./Yangiliklar_ichi_text.scss";
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Yangiliklar_ichi_text = () => {
  const {slug} = useParams()

  document.documentElement.scrollTop = 0

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
			<div className="img">
			<img width={'100%'} height={"300px"} style={{objectFit:"cover" , borderRadius: '12px'}} src={news?.image} alt="" />

			</div>
			<div className="text">
				<div className="text_data">
					<h3>{news?.name}</h3>
					<p>
						{news?.description}
					</p>
					
				</div>
				<div className="text_date">
					<h3>{news?.date}.</h3>
				</div>
			</div>
		</div>
	);
};

export default Yangiliklar_ichi_text;

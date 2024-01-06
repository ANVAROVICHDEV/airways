import React, { useEffect, useState } from "react";
import "./Yangiliklar_Boxes.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const Yangiliklar_Boxes = () => {
	const [news, setNews] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await axios.get("http://kfuk.karimjonov.uz/api/news");
				setNews(data.data.random);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		getData();
	}, []);
	return (
		<div className="Yangiliklar_Boxes">
			{news &&
				news.map((item) => (
					<div className="box" key={item.id}>
						<img src={item.image} alt={item.name} />
						<div className="text">
							<div className="text_info">
								<h3>{item.name}</h3>
								{/* <p>20.21.2023</p> */}
							</div>
							<div className="text_button">
								<Link to={`/Yangiliklar_ichi/${item.slug}`}>
									<button>Batafsil</button>
								</Link>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Yangiliklar_Boxes;

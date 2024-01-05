import React, { useEffect, useState } from "react";
import "./Biz.scss";
import { ApiService } from "../../service/api.service";
const Biz = () => {
	const [about, setAbout] = useState();

	useEffect(() => {
		const getData = async () => {
			const data = await ApiService.fetching("about");
			setAbout(data);
		};
		getData();

		document.documentElement.scrollTop = 0;
	}, []);

	return (
		<div className="Biz">
			<div className="people box">
				<div className="img">
					<img src={about?.image} alt="" />
				</div>
				<div className="text">
					<h2>Kompaniya xaqida</h2>
					<p>{about?.content}</p>
				</div>
			</div>

			<div className="peoples box">
				<div className="text">
					<h2>Bizning maqsadimiz</h2>
					<p>{about?.content2}</p>
				</div>
				<div className="img">
					<img src={about?.image2} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Biz;

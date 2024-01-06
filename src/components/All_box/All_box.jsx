import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./All_box.scss";
import { Link } from "react-router-dom";
import { Calendar, theme } from "antd";
import { ApiService } from "../../service/api.service";
const All_box = () => {
	document.documentElement.scrollTop = 0;

	const [directions, setDirections] = useState([]);
	const [code, setCode] = useState();
	const { token } = theme.useToken();
	const wrapperStyle = {
		width: 300,
		border: `1px solid ${token.colorBorderSecondary}`,
		borderRadius: token.borderRadiusLG,
	};
	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching("directions");
				setDirections(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		getData();
	}, []);

	const onPanelChange = async (value) => {
		directions && directions.map((item) => setCode(item));

		const f = code.from_code; // Replace with the actual IATA code for departure
		const t = code.to_code; // Replace with the actual IATA code for arrival
		const inp = value.format("YYYY-MM-DD"); // Replace with the actual departure date in the format 'YYYY-MM-DD'

		const sendData = async () => {
			const url =
				"https://geodata.nemo.travel/api/flights/search/request?user_language_get_change=uz";

			const data = {
				segments: [
					{
						departure: {
							IATA: f,
							isCity: false,
						},
						arrival: {
							IATA: t,
							isCity: false,
						},
						departureDate: `${inp}T00:00:00`,
					},
				],
				passengers: [
					{
						type: "ADT",
						count: 1,
					},
				],
				parameters: {
					direct: false,
					aroundDates: 0,
					serviceClass: "Economy",
					flightNumbers: null,
					airlines: [],
					delayed: true,
					extraValue: null,
				},
			};

			const form = new FormData();
			form.append("request", JSON.stringify(data));

			try {
				const response = await fetch(url, {
					method: "POST",
					body: form,
				});

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const res = await response.json();
				window.location.replace(
					`https://avia.parvoz-airways.ru/results/${res.flights.search.request.id}`,
				);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		sendData();
	};

	return (
		<div className="All_box">
			<div className="back">
				<hr />{" "}
				<Link to={"/"}>
					<p>Orqaga</p>
				</Link>
			</div>
			<div className="boxes">
				{directions &&
					directions.map((direction) => (
						<div className="box" key={direction.id}>
							<div className="box_hover ">
								<div style={wrapperStyle}>
									<Calendar fullscreen={false} onChange={onPanelChange} />
								</div>
							</div>
							<img src={direction.image} alt="" />
							<div className="text">
								<div className="info">
									<h3>{direction.from}</h3>
									<FaAngleDown />
									<h3>{direction.to}</h3>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default All_box;

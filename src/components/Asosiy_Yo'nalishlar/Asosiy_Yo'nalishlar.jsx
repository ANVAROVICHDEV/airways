import React, { useEffect, useState } from "react";
import "./Asosiy_Yo'nalishlar.scss";

import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Calendar, theme } from "antd";
import { ApiService } from "../../service/api.service";
const AsosiyYonalishlar = () => {
	const [directions, setDirections] = useState([]);
	const [code, setCode] = useState();
	const { token } = theme.useToken();
	const [calendarid , setCalendarid] = useState()
	
	const changeid = (id) =>{
		setCalendarid(id)
		setTimeout(() =>{
			setCalendarid(null)
		},10000)
	}

	const wrapperStyle = {
		width: 300,
		border: `1px solid ${token.colorBorderSecondary}`,
		borderRadius: token.borderRadiusLG,
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching("direction");
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
		<div className="AsosiyYonalishlar">
			<div className="boxes">
				<div className="text">
					<h1>Serqatnov yo’nalishlar</h1>
				</div>

				{directions &&
					directions.map((direction) => (
						<div className="box" key={direction.id}>
							<div className="box_hover">
									<div className="icon">
										<div className="radio">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM6 15H8V17H6V15ZM10 11H18V13H10V11ZM10 15H15V17H10V15Z"
													fill="#EF6A3C"
												/>
											</svg>
										</div>
									</div>
									<div className="botton">
										<button onClick={() => changeid(direction.id)}>Qidirish</button>
									</div>
						    </div>
							<div className={direction.id == calendarid? "kalendarbox active" : "kalendarbox"}>
							<div className="kalendar">
							<div style={{width:"100%" , height:'100%'}}>
									<Calendar fullscreen={false} onChange={onPanelChange} />
								</div>
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

			<div className="button">
				<Link to={"/Yonalishlar"}>
					<button>Barchasini ko’rish</button>
				</Link>
			</div>
		</div>
	);
};

export default AsosiyYonalishlar;

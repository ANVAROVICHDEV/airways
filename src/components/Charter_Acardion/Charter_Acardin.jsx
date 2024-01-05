import React, { useEffect, useState } from "react";
import "./Charter_Acardin.css";
import { IoMdArrowDropup } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { ApiService } from "../../service/api.service";
import { v4 as uuidv4 } from "uuid";
const Charter_Acardin = () => {
	const [charterss, setCharterss] = useState();
	const [chartersId, setChartersId] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const data = await ApiService.fetching("charters");
			setCharterss(data);
		};
		getData();

		document.documentElement.scrollTop = 0;
	}, []);

	const openAcardion = (id) => {
		if (chartersId == id) {
			setChartersId(null);
		} else {
			setChartersId(id);
		}
	};

	return (
		<div className="Charter_Acardin">
			{charterss &&
				charterss.map((charters) => (
					<div className="Acardion_box" key={uuidv4()}>
						<button
							className={
								chartersId === charters.id
									? "Acardion_button active"
									: "Acardion_button"
							}
							onClick={() => openAcardion(charters.id)}
						>
							<img
								style={{ objectFit: "cover" }}
								width={"200px"}
								height={"80px"}
								src={charters.image}
								alt={charters.name}
							/>{" "}
							<h2>{charters.name}</h2>{" "}
							<div className="radio">
								<IoMdArrowDropup className="top" />{" "}
								<IoMdArrowDropdown className="down" />
							</div>
						</button>
						<p
							className={
								chartersId === charters.id
									? "Acardion_text active"
									: "Acardion_text"
							}
						>
							{charters.charters.map((item) => (
								<div className="Direction" key={item.id}>
									<div className="Direction_text">
										<h3>{item.city}</h3>
									</div>
									<div className="Direction_time">
										<p>{item.date}</p>
										<button>{item.price}</button>
									</div>
								</div>
							))}
						</p>
					</div>
				))}

			{/* <div className="Acardion_box" key={uuidv4()}>
				<button className={"Acardion_button active"}>
					<img src="./images/Direction.png" alt="" /> <h2>escvesfes</h2>{" "}
					<div className="radio">
						<IoMdArrowDropup className="top" />{" "}
						<IoMdArrowDropdown className="down" />
					</div>
				</button>
				<p className={"Acardion_text "}>
					<div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
				</p>
			</div>
            <div className="Acardion_box" key={uuidv4()}>
				<button className={"Acardion_button active"}>
					<img src="./images/Direction.png" alt="" /> <h2>escvesfes</h2>{" "}
					<div className="radio">
						<IoMdArrowDropup className="top" />{" "}
						<IoMdArrowDropdown className="down" />
					</div>
				</button>
				<p className={"Acardion_text active"}>
					<div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
                    <div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
                    <div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
                    <div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
                    <div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
                    <div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
                    <div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
                    <div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
				</p>
			</div>
            <div className="Acardion_box" key={uuidv4()}>
				<button className={"Acardion_button active"}>
					<img src="./images/Direction.png" alt="" /> <h2>escvesfes</h2>{" "}
					<div className="radio">
						<IoMdArrowDropup className="top" />{" "}
						<IoMdArrowDropdown className="down" />
					</div>
				</button>
				<p className={"Acardion_text "}>
					<div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
				</p>
			</div>
            <div className="Acardion_box" key={uuidv4()}>
				<button className={"Acardion_button active"}>
					<img src="./images/Direction.png" alt="" /> <h2>escvesfes</h2>{" "}
					<div className="radio">
						<IoMdArrowDropup className="top" />{" "}
						<IoMdArrowDropdown className="down" />
					</div>
				</button>
				<p className={"Acardion_text "}>
					<div className="Direction">
						<div className="Direction_text">
							<h3>Toshkent</h3>{" "}
							<h4>
								<FaChevronRight />
							</h4>{" "}
							<h3>Moskva</h3>
						</div>
						<div className="Direction_time">
							<p>08.12. 22:00</p>
							<button>20 500 00.p.</button>
						</div>
					</div>
				</p>
			</div> */}
		</div>
	);
};

export default Charter_Acardin;

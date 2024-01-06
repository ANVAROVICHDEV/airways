import React from "react";
import "./Asosiy_Yo'nalishlar.scss";

import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Calendar, theme } from "antd";
const AsosiyYonalishlar = () => {
	// const { token } = theme.useToken();
	// const wrapperStyle = {
	// 	width: 300,
	// 	border: `1px solid ${token.colorBorderSecondary}`,
	// 	borderRadius: token.borderRadiusLG,
	// };

	// const onPanelChange = (value) => {
	// 	console.log(value.format("YYYY-MM-DD"));
	// };

	return (
		<div className="AsosiyYonalishlar">
			<div className="boxes">
				<div className="text">
					<h1>Serqatnov yo’nalishlar</h1>
				</div>


				{/* <div className="box">
					<div className="box_hover ">
						<div style={wrapperStyle } >
							<Calendar  fullscreen={false} onChange={onPanelChange} />
						</div>
					</div>
					<img src="./images/box.png" alt="" />
					<div className="text">
						<div className="info">
							<h3>Sanpeturburg</h3>
							<FaAngleDown />
							<h3>Toshkent</h3>
						</div>
					</div>
				</div> */}

        
			</div>

			<div className="button">
				<Link to={"/All_box"}>
					<button>Barchasini ko’rish</button>
				</Link>
			</div>
		</div>
	);
};

export default AsosiyYonalishlar;

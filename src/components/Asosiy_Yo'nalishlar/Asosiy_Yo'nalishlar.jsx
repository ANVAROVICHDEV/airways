import React, { useEffect, useState } from "react";
import "./Asosiy_Yo'nalishlar.scss";

import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Calendar, theme } from "antd";
import { ApiService } from "../../service/api.service";
import moment from "moment";
// 
import { v4 as uuidv4 } from "uuid";

const AsosiyYonalishlar = () => {
  const [realTime, setRealTime] = useState(moment().format('YYYY-MM-DD'))
  const [directions, setDirections] = useState([realTime]);
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
    console.log(value.format("YYYY-MM-DD"));
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
          `https://avia.parvoz-airways.ru/results/${res.flights.search.request.id}`
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
            <div className="box" key={uuidv4()}>
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

      <div className="button">
        <Link to={"/Yonalishlar"}>
          <button>Barchasini ko’rish</button>
        </Link>
      </div>
    </div>
  );
};

export default AsosiyYonalishlar;

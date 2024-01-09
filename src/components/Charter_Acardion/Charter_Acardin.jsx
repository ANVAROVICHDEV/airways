import React, { useEffect, useState } from "react";
import "./Charter_Acardin.scss";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa6";
import { ApiService } from "../../service/api.service";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
} from "@mui/material";
import { Typography } from "antd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Charter_Acardin = () => {
  //////////////////////////////////////
  const [charterss, setCharterss] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching("charters");
      setCharterss(data);
    };
    getData();

    document.documentElement.scrollTop = 0;
  }, []);

  //////////////////////////////////////

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [num, setNum] = useState(1);
  const [buttonClick, setButtonClick] = useState(false);
  const [charterid , setCharterid] = useState()
  const handlebutton = (id) =>{
    setButtonClick(!buttonClick)
    setCharterid(id)
  }

  return (
    <div className="Acardion">
   

      {charterss &&
        charterss.map(
          (charters) => (
            (
              <div className="Full" key={charters.id}>
                <button
                  onClick={() => handlebutton(charters.id)}
                  className="Acardion_button"
                >
                  <div className="img">
                    <img src={charters.image} alt="" />
                  </div>
                  <div className="right">
                    <div className="text">
                      <h2>{charters.name}</h2>
                    </div>
                    <div className="radio ">
                      <TiArrowSortedUp
                        className={buttonClick ? "arrow active" : "arrow"}
                      />
                    </div>
                  </div>
                </button>

                {charters.charters.length ? (
                  charters.charters.map((iteam) => (
                    console.log(iteam),
                    <div
                      className={
                        charterid === charters.id && buttonClick ? "Acardion_text active" : "Acardion_text"
                      }
                      key={iteam.id}
                    >
                      <div className="data">
                        <div className="name">
                          <h3>
                            {iteam.city}
                          </h3>
                        </div>
                        <div className="right">
                          <div className="time">
                            <p>{iteam.date}</p>
                          </div>
                          <div className="price">
                            <button>{iteam.price}</button>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  ))
                ) : (
                  ""
                )}
              </div>
            )
          )
        )}
    </div>

  );
};

export default Charter_Acardin;

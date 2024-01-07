import React, { useEffect, useState } from "react";
import "./NewsBoxes.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsBoxes = () => {
  const [news, setNews] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://kfuk.karimjonov.uz/api/news")
      setNews(response.data.news);
    }
    getData()
  }, [])
  return (
    <div className="newsBoxes">
      {
        news && news.map(item => (
          <div className="box">
            <img src={item.image} alt="" />
            <div className="info">
              <h1>
                {
                  item.name
                }
              </h1>
              <Link to={`/Yangiliklar_ichi/${item.slug}`}>
                <button className="batafsil">Batafsil</button>
              </Link>
            </div>
            <div className="support"></div>
          </div>
        ))
      }
    </div>
  );
};

export default NewsBoxes;

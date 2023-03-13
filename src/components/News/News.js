import React from "react";
import ArrowBottom from "../SpaServices/ArrowBottom";
import "./News.scss";
import news from "./NewsData";
import NewsIcon from "./NewsIcon";
import Floral2 from "../../assets/flowers&leafs/cvet 2.png";

const News = () => {
  return (
    <section id="news-section">
      <div className="news-section-container">
        <h3 className="news-title">News</h3>
        <div className="news-container">
          <img src={Floral2} alt="floral" className="news-floral" />
          {news.map((data) => {
            return (
              <article id={data.id} className="single-news">
                <img src={data.image} alt="news" className="news-image" />
                <div className="news-text-container">
                  <div className="news-icons">
                    <NewsIcon />
                    <p>News</p>
                  </div>
                  <h4>{data.title}</h4>
                  <div className="news-time">
                    <p>08.09.2020.</p>
                    <p>14:30h</p>
                    <div className="news-line"></div>
                  </div>
                  <p className="news-text">{data.text}</p>
                  <div className="read-more">
                    <p>Read more</p>
                    <ArrowBottom />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;

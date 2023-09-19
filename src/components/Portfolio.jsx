import React, { useState } from "react";
import "../styles/portfolio.css";
import { Card } from "./reusable/Card";

export const Portfolio = () => {
  const cardsArray = [
    {
      id: 1,
      title: "Mobile Design",
    },
    {
      id: 2,
      title: "Mobile Design",
    },
    {
      id: 3,
      title: "Mobile Design",
    },
    {
      id: 4,
      title: "Mobile Design",
    },
    {
      id: 5,
      title: "Mobile Design",
    },
    {
      id: 6,
      title: "Mobile Design",
    },
  ];
  return (
    <section className="portfolio my-5 ">
      <div className="container">
        <h1 className="my-5">Portfolio</h1>
        <div className="row">
          {cardsArray.map((card) => (
            <Card
              color={card.id % 2 !== 0 ? "#959188" : "#404040"}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

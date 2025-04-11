import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherCard = ({ forecast }) => {
  return (
    <div
      className="weather-card"
      style={{
        border: "1px solid black",
        textAlign: "center",
        borderRadius: "8px",
        padding: "16px",
        margin: "2px",
      }}
    >
      <div className="day">{forecast.day}</div>
      <WeatherIcon img={forecast.img} alt={forecast.imgAlt} />
      <WeatherData conditions={forecast.conditions} time={forecast.time} />
    </div>
  );
};

export default WeatherCard;

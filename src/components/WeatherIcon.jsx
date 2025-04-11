import React from "react";

const WeatherIcon = ({ img, alt }) => {
  return (
    <div className="weather-icon">
      <img src={img} alt={alt}></img>
    </div>
  );
};

export default WeatherIcon;

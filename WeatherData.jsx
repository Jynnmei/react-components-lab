import React from "react";

const WeatherData = ({ day, conditions, time }) => {
  return (
    <div className="weather-data">
      <div className="day">{day}</div>
      <div className="conditions">Condition: {conditions}</div>
      <div className="time">Time: {time}</div>
    </div>
  );
};

export default WeatherData;

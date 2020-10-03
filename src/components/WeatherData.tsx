import React from "react";
import "../App.css";

// TODO: make this an interface
function WeatherData(props: any) {
  return <div className="weather-container">{props.weather.timezone}</div>;
}

export default WeatherData;

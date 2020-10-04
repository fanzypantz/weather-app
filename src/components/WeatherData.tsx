import React, { useEffect, useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import "../styles/weather.scss";
import WeatherIcon from "./WeatherIcon";
import { WeatherInterface } from "../interfaces";

const IMAGE_API_KEY = process.env.REACT_APP_IMAGE_API_KEY;

const unsplash = new Unsplash({
  accessKey: IMAGE_API_KEY,
});

// TODO: make this an interface
function WeatherData(props: { weather: WeatherInterface }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    unsplash.photos
      .getRandomPhoto({ collections: [327760] })
      .then(toJson)
      .then((res) => {
        setBackgroundImage(res.urls.regular);
      });
  }, []);

  console.log("props: ", props.weather);

  const getTime = (time: number) => {
    const newTime = new Date(time);
    return newTime.toString();
  };

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#303871",
      }}
    >
      <div className="overlay" />
      <h1 className="weather-temp">{Math.round(props.weather.current.temp)}</h1>
      <div>
        <WeatherIcon icon={props.weather.current.weather[0].icon} />
        <h2>{getTime(props.weather.current.dt)}</h2>
      </div>
    </div>
  );
}

export default WeatherData;

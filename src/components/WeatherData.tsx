import React, { useEffect, useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import "../styles/weather.scss";

const IMAGE_API_KEY = process.env.REACT_APP_IMAGE_API_KEY;

const unsplash = new Unsplash({
  accessKey: IMAGE_API_KEY,
});

// TODO: make this an interface
function WeatherData(props: any) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    unsplash.photos
      .getRandomPhoto({ collections: [327760] })
      .then(toJson)
      .then((res) => {
        console.log("res: ", res);
        setBackgroundImage(res.urls.regular);
      });
  }, []);

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#303871",
      }}
    >
      <div className="overlay"></div>
      Potato
    </div>
  );
}

export default WeatherData;

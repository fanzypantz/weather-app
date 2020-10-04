import React from "react";
import "../styles/weather.scss";

import { ReactComponent as Sun } from "../images/svg/012-sun.svg";
import { ReactComponent as Night } from "../images/svg/031-stars.svg";
import { ReactComponent as SunCloud } from "../images/svg/004-clouds and sun.svg";
import { ReactComponent as Cloud } from "../images/svg/006-cloud.svg";
import { ReactComponent as CloudNight } from "../images/svg/002-cloudy night.svg";
import { ReactComponent as Rain } from "../images/svg/023-cloud.svg";
import { ReactComponent as RainSun } from "../images/svg/022-cloud.svg";
import { ReactComponent as Thunder } from "../images/svg/019-storm.svg";
import { ReactComponent as Snow } from "../images/svg/010-snow.svg";
import { ReactComponent as Mist } from "../images/svg/028-clouds.svg";

function WeatherIcon(props: { icon: string }) {
  // Simple switch on icon type
  switch (props.icon) {
    case "02d":
      return <SunCloud />;
    case "03d":
      return <Cloud />;
    case "04d":
      // TODO: fix icon
      return <Cloud />;
    case "09d":
      return <Rain />;
    case "10d":
      return <RainSun />;
    case "11d":
      return <Thunder />;
    case "13d":
      return <Snow />;
    case "50d":
      return <Mist />;
    case "01n":
      return <Night />;
    case "02n":
      return <CloudNight />;
    case "03n":
      return <Cloud />;
    case "04n":
      // TODO: fix icon
      return <Rain />;
    case "09n":
      return <Rain />;
    case "10n":
      return <Rain />;
    case "11n":
      return <Thunder />;
    case "13n":
      return <Snow />;
    case "50n":
      return <Mist />;
    default:
      return <Sun />;
  }
}

export default WeatherIcon;

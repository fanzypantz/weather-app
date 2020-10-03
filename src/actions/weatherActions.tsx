import { SET_WEATHER } from "../constants";
import { WeatherInterface } from "../interfaces";

const setWeather = (weather: WeatherInterface) => {
  return {
    type: SET_WEATHER,
    payload: weather,
  };
};

export default {
  setWeather,
};

import { SET_WEATHER } from "../constants";

const setWeather = (weather: any) => {
  return {
    type: SET_WEATHER,
    payload: weather,
  };
};

export default {
  setWeather,
};

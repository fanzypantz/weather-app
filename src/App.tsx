import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherData from "./components/WeatherData";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";

function App() {
  const weather = useSelector((state: RootState) => {
    return state.weather;
  });

  return (
    <div className="App">
      <SearchBar />
      {Object.keys(weather).length > 0 && <WeatherData weather={weather} />}
    </div>
  );
}

export default App;

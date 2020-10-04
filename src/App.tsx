import React from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";

import SearchBar from "./components/SearchBar";
import WeatherData from "./components/WeatherData";
import Gradient from "./components/Gradient";

function App() {
  const weather = useSelector((state: RootState) => {
    return state.weather;
  });

  const gradients = [
    ["#9D4792", "#3B497A"],
    ["#3B497A", "#9D4792"],
  ];

  return (
    <div className="App">
      <Gradient gradients={gradients} />
      <SearchBar />
      {Object.keys(weather).length > 0 && <WeatherData weather={weather} />}
    </div>
  );
}

export default App;

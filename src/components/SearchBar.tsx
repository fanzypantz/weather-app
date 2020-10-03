import React, { useEffect, useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

import cities from "../data/city.list.json";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function SearchBar() {
  // Local State
  const [searchQuery, setSearchQuery] = useState("");
  const [renderCities, setRenderCities] = useState([] as any);

  // Global State
  const weather = useSelector((state: RootState) => {
    return state.weather;
  });

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO remove this if unused
    setSearchQuery(e.target.value);
    if (e.target.value === "" || e.target.value === undefined) {
      setRenderCities([]);
    } else {
      setRenderCities(searchCity(e.target.value)?.slice(0, 20));
    }
  };

  const searchCity = (query: string) => {
    if (cities === [] || cities === undefined) {
      return;
    }
    // @ts-ignore
    let newCities = cities.filter((city: { name: string }) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    if (newCities !== undefined) {
      newCities.sort((a: { name: string }, b: { name: string }) => {
        if (a.name < b.name) return -1;
        return a.name > b.name ? 1 : 0;
      });
      return newCities;
    } else {
      return [];
    }
  };

  const selectCity = (city: {
    name: string;
    state: string;
    country: string;
  }) => {
    console.log("city: ", city);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.state},${city.country}&appid=${WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("errors: ", err);
      });
  };

  const queryCity = (id: number) => {};

  const citiesList = renderCities.map((city: any, index: number) => (
    <div key={index} onClick={() => selectCity(city)}>
      {city.name}
    </div>
  ));

  return (
    <div className="searchbar">
      {citiesList}
      <input type="text" onChange={(e) => onSearchChange(e)} />
    </div>
  );
}

export default SearchBar;

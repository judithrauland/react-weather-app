import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "da4354ccc4b5c937168c50391a787c99";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autocomplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-light">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{city}</h1>
          <ul>
            <li>Last updated:</li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img src={weather.icon} alt={weather.description} />
            </div>
            <div className="float-left">
              {Math.round(weather.temperature)} °C
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {Math.round(weather.wind)} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return setCity("Cologne");
  }
}

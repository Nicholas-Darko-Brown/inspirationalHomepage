import React from "react";
import './Weather.css';
import {TiWeatherPartlySunny} from 'react-icons/ti';

const Weather = () => {
  const API_KEY = "5e19de9024a1ddbf8360f2aa62455696";
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=5.55602&lon=-0.1969&appid=${API_KEY}`;

  const getWeather = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    // Convert weather
    const kelvinTemp = json.main.temp;
    const kelvinToCelsius = (kelvinTemp - 273.15).toFixed(2);
    const weatherDesc = json.weather[0].description;
    const getKelvinTemp = document.querySelector(".Weather-figure");
    getKelvinTemp.textContent = kelvinToCelsius + "\u00b0";
    const getWeatherDesc = document.querySelector(".Weather-type");
    getWeatherDesc.textContent = weatherDesc;
  };
  getWeather();

  return (
    <div className="Weather-container">
      <div className="weather-wrapper">
        <TiWeatherPartlySunny />
        <span className="Weather-figure">&#176;</span>
      </div>
      <div className="weather-type-wrapper">
        <span className="Weather-type"></span>
      </div>
    </div>
  );
}

export default Weather
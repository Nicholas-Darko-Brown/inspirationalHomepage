import React from "react";
import './Weather.css';
import {TiWeatherPartlySunny} from 'react-icons/ti';

const Weather = () => {
  const getWeather = async () => {
    const response = await fetch(
      "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Kumasi&days=3",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key": "e9a048529amsh7b42a9c837cf0bcp13231djsn17b6f6a60dce",
        },
      }
    );
    const jsonResponse = await response.json();
    document.querySelector(".Weather-figure").textContent = `${jsonResponse.current.temp_c}\u00B0C ☁️`
    document.querySelector(".Weather-type").textContent = `${jsonResponse.location.name}, ${jsonResponse.location.region} 🌇`;
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
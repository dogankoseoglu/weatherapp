import React from "react";
import "./WeatherApp.css";
import clearDay from "../Assets/Weather=Clear, Moment=Day.svg";
import clearNight from "../Assets/Weather=Clear, Moment=Night.svg";
import cloudyDay from "../Assets/Weather=Cloudy, Moment=Day.svg";
import clodyNight from "../Assets/Weather=Cloudy, Moment=Night.svg";
import fewcloudsDay from "../Assets/Weather=Few clouds, Moment=Day.svg";
import fewcloudsNight from "../Assets/Weather=Few clouds, Moment=Night.svg";
import rainDay from "../Assets/Weather=Rain, Moment=Day.svg";
import rainNight from "../Assets/Weather=Rain, Moment=Night.svg";
import stormDay from "../Assets/Weather=Storm, Moment=Day.svg";
import stormNight from "../Assets/Weather=Storm, Moment=Night.svg";
import logo from "../Assets/Vector.svg";
import temp from "../Assets/thermometer-simple-light.svg";
import rain from "../Assets/cloud-rain-light.svg";
import wind from "../Assets/wind-light.svg";
import humidity from "../Assets/drop-light.svg";
import uv from "../Assets/sun-dim-light.svg";

//url https://api.openweathermap.org/data/2.5/weather?q=izmir&appid=91ed6c2625b7e8605250dffe63ba1f15&units=metric&lang=tr

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="topPart">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="appName">qWeather</div>
      </div>
      <div className="midPart">
        <div className="bodyText">
          Welcome to qWeather.
          <p className="normalText">
            Choose a location to see the weather forecast
          </p>
        </div>
        <input
          type="text"
          className="cityInput"
          placeholder="Search Location"
        />
      </div>
      <div className="botPart">
        <div className="row">
          <div className="icon">
            <img src={temp} alt="temperature" />
            Temperature
          </div>
          <div className="data">4</div>
        </div>
        <div className="row">
          <div className="icon">
            <img src={wind} alt="temperature" />
            Wind Speed
          </div>
          <div className="data">4</div>
        </div>
        <div className="row">
          <div className="icon">
            <img src={rain} alt="temperature" />
            Rain Probability
          </div>
          <div className="data">4</div>
        </div>
        <div className="row">
          <div className="icon">
            <img src={humidity} alt="temperature" />
            Humidity
          </div>
          <div className="data">4</div>
        </div>
        <div className="row">
          <div className="icon">
            <img src={uv} alt="temperature" />
            UV Index
          </div>
          <div className="data">4</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

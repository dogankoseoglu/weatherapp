import "./App.css";
import temp from "./Components/Assets/thermometer-simple-light.svg";
import wind from "./Components/Assets/wind-light.svg";
import humidity from "./Components/Assets/drop-light.svg";
import uv from "./Components/Assets/sun-dim-light.svg";
import axios from "axios";
import React, { useState } from "react";

const api = {
  key: "cff797d2caa64c59bd4e7970f1be7444",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "tr",
  units: "metric",
};

function App() {
  const [query, setQuery] = useState("");
  const [geolocation, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  const location = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation(`${latitude},${longitude}`);

      axios
        .get(
          `${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&units=${api.units}&lang=${api.lang}`
        )
        .then((res) => {
          setWeather(res.data);
          setQuery("");
        })
        .catch((e) => {
          if (e.code === "ERR_BAD_REQUEST") {
            alert("Şehir bulunamadı!");
            setQuery("");
          }
        });
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `${api.base}weather?q=${query}&appid=${api.key}&units=${api.units}&lang=${api.lang}`
        )
        .then((res) => {
          setWeather(res.data);
          setQuery("");
        })
        .catch((e) => {
          if (e.code === "ERR_BAD_REQUEST") {
            alert("Şehir bulunamadı!");
            setQuery("");
          }
        });
    }
  };

  return (
    <div
      className="app"
      style={
        typeof weather.main != "undefined"
          ? {
              backgroundImage: `url(img/${weather.weather[0].icon}.svg)`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transition: "0.4 ease",
            }
          : null
      }
    >
      <main>
        {geolocation === "" ? location() : null}
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Arama..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyUp={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="resultPart">
            <h1 className="place">
              {weather.name + "," + weather.sys.country}
            </h1>
            <div className="desc">
              <h2>{weather.weather[0].description}</h2>
            </div>
            <div className="row">
              <div className="icon">
                <img src={temp} alt="temperature" />
                Sıcaklık
              </div>
              <div className="data">{weather.main.feels_like}&deg;C</div>
            </div>
            <div className="row">
              <div className="icon">
                <img src={wind} alt="windspeed" />
                Rüzgar Hızı
              </div>
              <div className="data">{weather.wind.speed}m/s</div>
            </div>
            <div className="row">
              <div className="icon">
                <img src={humidity} alt="temperature" />
                Nem Oranı
              </div>
              <div className="data">{weather.main.humidity}%</div>
            </div>
            <div className="row">
              <div className="icon">
                <img src={uv} alt="temperature" />
                Basınç
              </div>
              <div className="data">{weather.main.pressure}hPa</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

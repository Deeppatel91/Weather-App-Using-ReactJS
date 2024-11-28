import React, { useState, useEffect } from "react";
import "./index.css";
import { fetchWeather, fetchForecast } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const handleSearch = async (city) => {
    try {
      const weatherData = await fetchWeather(city);
      const forecastData = await fetchForecast(city);

      const dailyForecast = forecastData.list
        .filter((entry) => entry.dt_txt.includes("12:00:00"))
        .map((entry) => ({
          day: new Date(entry.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          temp: Math.round(entry.main.temp),
          icon: entry.weather[0].icon,
          description: entry.weather[0].description,
        }));

      setWeather(weatherData);
      setForecast(dailyForecast);
    } catch (error) {
      alert("City not found! Please try again.");
    }
  };

  useEffect(() => {
    handleSearch("Toronto");
  }, []);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} forecast={forecast} />}
    </div>
  );
};

export default App;

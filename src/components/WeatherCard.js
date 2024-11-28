import React from "react";
import "../index.css";

const WeatherCard = ({ weather, forecast = [] }) => {
  const { name, main, weather: weatherDetails } = weather;

  return (
    <div className="weather-card">
      <div className="weather-main">
        <div className="weather-summary">
          <h2>{name}</h2>
          <p className="temperature">{Math.round(main.temp)}°C</p>
          <p className="condition">{weatherDetails[0].description}</p>
        </div>
        <div className="weather-image">
          <img
            src={`http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
            alt={weatherDetails[0].description}
          />
        </div>
      </div>
      <div className="weather-details">
        <p>Humidity: {main.humidity}%</p>
        <p>Feels Like: {Math.round(main.feels_like)}°C</p>
        <p>Pressure: {main.pressure} mb</p>
        <p>Wind Speed: {Math.round(weather.wind.speed)} km/h</p>
      </div>
      {forecast.length > 0 && (
        <div className="forecast-container">
          {forecast.map((day, index) => (
            <div className="forecast-item" key={index}>
              <p className="day">{day.day}</p>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.description}
              />
              <p>{day.temp}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;

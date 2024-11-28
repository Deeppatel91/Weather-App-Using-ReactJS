import axios from "axios";

export const fetchWeather = async (city) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchForecast = async (city) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

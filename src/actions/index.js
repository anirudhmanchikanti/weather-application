import axios from "axios";

const API_KEY = "323d101a746338b33ad0889866e59abc";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=323d101a746338b33ad0889866e59abc`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url); //redux-promise middleware allow to write clean code

  return {
    type: "FETCH_WEATHER",
    payload: request
  };
}

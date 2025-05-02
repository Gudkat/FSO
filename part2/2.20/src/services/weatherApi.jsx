import axios from "axios";

const baseUrl = (capital) => `https://api.openweathermap.org/data/2.5/find?q=${capital}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`;

const getWeather = (capital) =>  {
  const request = axios.get(baseUrl(capital))
  return request.then(response => response.data)
}

export default getWeather
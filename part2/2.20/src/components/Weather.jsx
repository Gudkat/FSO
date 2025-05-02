import { useEffect, useState } from "react";
import getWeather from "../services/weatherApi";

const Weather = ({ capital }) => {
  const [weatherData, setWeatherdata] = useState(null)
  useEffect(
    () => {
      getWeather(capital)
        .then(data => {
          setWeatherdata({
            "temp": data.list[0].main.temp,
            "wind": data.list[0].wind.speed,
            "icon": data.list[0].weather[0].icon
          })
          // the weather here is hardcoded for the first item in the list, so in duplicate cases it will be wrong... ie capital of usa will give washington state not dc
        })
    }, [])

  if (weatherData !== null) {
    return <div>
      <h1>Weather in {capital}</h1>
      <div>Temperature {weatherData.temp}</div>
      <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Weather icon" />
      <div>Wind {weatherData.wind}</div>
    </div>
  }

}

export default Weather
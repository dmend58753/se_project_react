
import { API_KEY } from "./constant";

// Returns 'hot', 'warm', or 'cold' based on Fahrenheit temperature
export function getWeatherCondition(tempF) {
  if (tempF >= 86) return "hot";
  if (tempF >= 66) return "warm";
  return "cold";
}

// Returns true if timestamp is between sunrise and sunset (all in seconds)
function isDay(sunrise, sunset, timestamp) {
  return timestamp > sunrise && timestamp < sunset;
}

function parseWeatherData(data) {
  // Get weather condition from API and map to our keys
  let weatherCondition =
    data.weather && data.weather[0] && data.weather[0].main
      ? data.weather[0].main.toLowerCase()
      : "clear";
  if (weatherCondition === "clouds") weatherCondition = "cloudy";
  if (weatherCondition === "rain") weatherCondition = "rainy";
  if (weatherCondition === "snow") weatherCondition = "snowy";

  // Determine if it's day
  const now = Math.floor(Date.now() / 1000); // current time in seconds
  const sunrise = data.sys && data.sys.sunrise;
  const sunset = data.sys && data.sys.sunset;
  const isDaytime = sunrise && sunset ? isDay(sunrise, sunset, now) : true;
  const timeOfDay = isDaytime ? "day" : "night";

  // Store both F and C
  const tempC = Math.round(data.main.temp); // API returns Celsius
  const tempF = Math.round((data.main.temp * 9) / 5 + 32);

  return {
    city: data.name,
    temp: { F: tempF, C: tempC },
    weatherCondition,
    timeOfDay,
    isDay: isDaytime,
  };
}

export function getWeatherData() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=28.585559&lon=-81.212872&appid=${API_KEY}&units=metric`;

  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(
        new Error(`Error from weather API: ${res.status} ${res.statusText}`)
      );
    })

    .then(parseWeatherData);
}



const apiUrl = "https://api.openweathermap.org/data/2.5/weather"

const apiKey = `d0ba3bfc2d312b83454ae51067815a5d`


const cityInput = document.getElementById("city-input")
const cityName = document.getElementById("city-name")
const high = document.getElementById("high")
const low = document.getElementById("low")
const forecast = document.getElementById("forecast")
const humidity = document.getElementById("humidity")


function getWeather() {
  
  const city = cityInput.value;

  fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      
      const highTemp = Math.round(((data.main.temp_max - 273.15) * 9/5) + 32)
      const lowTemp = Math.round(((data.main.temp_min - 273.15) * 9/5) + 32)
      const forecastText = data.weather[0].description
      const humidityText = data.main.humidity

     
      cityName.textContent = city;
      high.textContent = `High: ${highTemp}°F`
      low.textContent = `Low: ${lowTemp}°F`
      forecast.textContent = `Forecast: ${forecastText}`
      humidity.textContent = `Humidity: ${humidityText}%`
    })
    .catch(error => console.error(error));
}
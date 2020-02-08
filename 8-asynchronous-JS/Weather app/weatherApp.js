console.log("Connected")

//A Simple ajax call using fetch and promises

const notificationElement = document.querySelector('.notification');
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');

//App Data

const weather = {};

weather.temperature = {
  unit: "celsius"
}

//App consts and variables

const KELVIN = 273;

//API Key

const key = "f6b43829a6dea90e8fcf07d58ccf2766";

//Check if browser suppors geolocation

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"
}

//Set users position

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  getWeather(latitude, longitude);
}

//Show error when there is an issue with geolocation service

function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message}</p>`;

}

//Get weather from API provider

function getWeather(latitude, longitude) {
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

  fetch(api)
    .then(function(response) {
      let data = response.json();
      return data;
    })

    .then(function(data) {
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
    })

    .then(function() {
      displayWeather();
    });
}


//Display weather to UI

function displayWeather() {

  iconElement.innerHTML =`<img src="icons/${weather.iconId}.png"/>`;

  tempElement.innerHTML =`${weather.temperature.value} ° <span>C</span>`

  descElement.innerHTML =weather.description;

  locationElement.innerHTML = `${weather.city}, ${weather.country}`;

}

//Celsius to fahrenheit

function celsiusToFahrenheit(temperature) {
  return (temperature * 9 / 5) + 32;
}

//When the user clicks on the temperature Element

tempElement.addEventListener("click", function() {

  if (weather.temperature.value === undefined) return;

  if (weather.temperature.unit === "celsius") {
    let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);

    tempElement.innerHTML = `${fahrenheit} ° <span>F</span>`;
    weather.temperature.unit = "fahrenheit"

  } else {
    tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
    weather.temperature.unit = "celsius";

  }
});
//
//
// function getWeather(woeid){
//
//   //https://crossorigin.me/https://google.com
//
//   fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
//     .then(result => {
//       console.log(result)
//       return result.json();
//     })
//     .then(data => {
//       console.log(data)
//       //
//       const today = data.consolidated_weather[0]
//       console.log(today)
//
//       const iconElement = document.querySelector('.weather-icon img');
//       iconElement.src = `https://www.metaweather.com/static/img/weather/png/` + `${today.weather_state_abbr}` + `.png`
//
//       const tempElement = document.querySelector('.temperature-value p');
//       tempElement.innerHTML = `${today.max_temp.toFixed(0)}°C`
//
//       const descElement = document.querySelector('.temperature-description p');
//       descElement.innerHTML = `${today.weather_state_name}`
//
//       const locationElement = document.querySelector('.location p');
//       locationElement.innerHTML = `${data.title}`
//
//
//     })
// }
//
// getWeather(44418)

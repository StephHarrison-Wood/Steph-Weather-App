// Current Date
let now = new Date();

let current = document.querySelector("p .current");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

document.getElementById(
  "current"
).innerHTML = `${day} ${date} ${month} ${hours}:${minutes}`;

//Week 5 Homework

function displayWeatherConditon(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let apiKey = "b6f22d190d1b4915f58b50eef956214d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditon);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "b6f22d190d1b4915f58b50eef956214d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherConditon);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("London");
// Celsius to Fahrenheit

//function convertToFahrenheit(event) {
//event.preventDefault();
// let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = 54;
//}

//function convertToCelsius(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//  temperatureElement.innerHTML = 12;
//}

// to add back into HTML <p><a href="" id="celsius"> °C</a><a href="" id="fahrenheit"> °F</a></p>

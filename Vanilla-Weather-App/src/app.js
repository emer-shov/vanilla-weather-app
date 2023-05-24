function displayTemperature(response) {
  console.log(response.data.condition.description);
  console.log(response.data.temperature.current);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "2f431f06a6ad2abab0d3o47daa186t7f";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?lat=38.71667&lon=-9.13333&key=2f431f06a6ad2abab0d3o47daa186t7f&units=metric";

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

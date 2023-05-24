function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10){
    minutes=`0${minutes}`;
  }

let days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp){
    let date= new Date(timestamp * 1000);
    let day = date.getDay();
    let days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    return days[day];
}

function displayForecast(response){

}









function displayTemperature(response) {
    
  console.log(response.data.condition.description);
  console.log(response.data.temperature.current);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("date");
  let iconElement=document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.time *1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily.condition.icon_url}few-clouds-day.png`
     );
iconElement.setAttribute("alt", response.data.condition.description);
  }


let apiKey = "2f431f06a6ad2abab0d3o47daa186t7f";
let city="Lisbon";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?lat=38.71667&lon=-9.13333&key=2f431f06a6ad2abab0d3o47daa186t7f&units=metric";

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

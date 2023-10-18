let currentDate = new Date();
let options = {
  weekday: "long",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};
let date = currentDate.toLocaleDateString("en-us", options);
let rightnow = `${date}`;
document.getElementById("currentTime").innerHTML = rightnow;
//
//
let currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate() + 1);
let options2 = {
  weekday: "short",
  month: "numeric",
  day: "numeric",
};
let date2 = currentDate2.toLocaleDateString("en-us", options2);
let rightnow2 = `${date2}`;
document.getElementById("day2").innerHTML = rightnow2;
//
//
let currentDate3 = new Date();
currentDate3.setDate(currentDate3.getDate() + 2);
let options3 = {
  weekday: "short",
  month: "numeric",
  day: "numeric",
};
let date3 = currentDate3.toLocaleDateString("en-us", options3);
let rightnow3 = `${date3}`;
document.getElementById("day3").innerHTML = rightnow3;
//
//
let currentDate4 = new Date();
currentDate4.setDate(currentDate4.getDate() + 3);
let options4 = {
  weekday: "short",
  month: "numeric",
  day: "numeric",
};
let date4 = currentDate4.toLocaleDateString("en-us", options4);
let rightnow4 = `${date4}`;
document.getElementById("day4").innerHTML = rightnow4;
//
//
let currentDate5 = new Date();
currentDate5.setDate(currentDate5.getDate() + 4);
let options5 = {
  weekday: "short",
  month: "numeric",
  day: "numeric",
};
let date5 = currentDate5.toLocaleDateString("en-us", options5);
let rightnow5 = `${date5}`;
document.getElementById("day5").innerHTML = rightnow5;
//
//
let currentDate6 = new Date();
currentDate6.setDate(currentDate6.getDate() + 5);
let options6 = {
  weekday: "short",
  month: "numeric",
  day: "numeric",
};
let date6 = currentDate6.toLocaleDateString("en-us", options6);
let rightnow6 = `${date6}`;
document.getElementById("day6").innerHTML = rightnow6;
//
//
//
//
//Search Button
//
function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
//
//
function search(city) {
  let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}
let form = document.getElementById("city-form");
form.addEventListener("submit", handleSubmit);
search("New York");
//
//
//
//
//Current Button
//
function searchLocation(position) {
  let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#currentbutton");
currentLocationButton.addEventListener("click", getCurrentLocation);

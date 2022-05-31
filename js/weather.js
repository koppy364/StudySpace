const API_KEY = "f3cbcba3382a51f259c96428c50d13ed";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}2&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const weather = document.querySelector(".js-weather");

const API_KEY = "7f6722c3df017210cd2dcf5b57d94f55";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric` //위도와 경도를 통해 api로 날씨를 얻는다
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}, ${place}`;
    });
}

function saveCoordsObj(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj)); //COORDS의 key에 위도,경도를 담는다. JSON.stringify로 string으로 전환.
}

function handleGeoSucces(position) {
  //불러온 좌표에서, 위도,경도를 coordsObj 안의 객체에 담는다.
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoordsObj(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location."); //사용자가 위치정보를 동의하지 않았을 때 이 로고를 뜨게한다.
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); //좌표가져오기에 성공하면, handleGeoSucces, 실패하면 handleGeoError.
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS); //이 함수에서는 COORDS의 오브젝트, 즉 좌표를 가져오라고 한다. 좌표의 이름은 loadedCords.
  if (loadedCoords === null) {
    askForCoords(); //만약 COORDS의 좌표가 없다면, askForCoords 함수를 불러 좌표를 요청한다.
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude); //위도와 경도를 이용하여, 날씨를 얻는 함수를 가져온다
  }
}

function init() {
  loadCoords();
}

init();

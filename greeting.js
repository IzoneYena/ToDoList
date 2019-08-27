const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text); //localStorage의 USER_LS의 key는 currentValue(이름)으로 저장이 된다.
}

function handleSubmit(event) {
  //"submit" 이라는 이벤트를 받기 때문에 함수안에 event라고 써줌.
  event.preventDefault(); //submit 한 event는 원래 enter를 치면 날라가는데 그것을 막아준다.
  const currentValue = input.value; //input의 value(이름)을 가지는 변수를 만듬, 이름은 currentValue.
  paintGreeting(currentValue); //currentValue(이름) 을 가지고 paintGreeting 함수를 불러옴
  saveName(currentValue); //currentValue(이름) 을 가지고 saveName 함수를 불러옴
}

function askForName() {
  form.classList.add(SHOWING_CN); //display:none 이였던 form의 classList에 SHOWING_CN(.showing)을 추가한다 그리고 display: block이 되면서 화면에 뜸
  form.addEventListener("submit", handleSubmit); //enter 키를 치면, handleSubmit 함수로 이동한다.
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //form의 classList에서 .showing을 없앤다.
  greeting.classList.add(SHOWING_CN); //greeting(h4)의 classList에서 .showing을 추가시켜 보이게 만듬.
  greeting.innerText = `Hello ${text}.`; //greeting(h4)안의 텍스트 부분에 Hello (이름). 을 넣는다.
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); //USER_LS의 key의 변수를 만든다. 이름은 currentUser.
  if (currentUser === null) {
    //만약 key가 비어져있으면, 이름을 요청한다. 여기서 key(currentUser)는 이름이라고 추측가능.
    askForName();
  } else {
    paintGreeting(currentUser); //key가 차있으면 paintGreeting 함수를 요청한다
  }
}

function init() {
  loadName();
}

init();

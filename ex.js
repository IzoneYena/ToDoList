// 첫 사용은 const로, 내가 정말 필요할 떄만 let을 사용하자.

/* string
const what = "Nicolas";
console.log(what);
*/

/* 
Boolean
const wat = true;
*/

/* Array
const something = "some"
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 53, "lalala", something];
console.log(dayOfWeek);
*/

/* Object
const kimInfo = {
  name: "sungmin",
  age: 16,
  gender: "male",
  handsome: true,
  favFoods: [{ name: "chicken", fatty: true }, { name: "kimchi", fatty: false }]
};
*/

/* return
function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("sungmn", 16);
*/

/*
const calculater = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return a / b;
  },
  squ: function(a) {
    return a * a;
  }
};

const plus = calculater.plus(5, 5);
const minus = calculater.minus(5, 3);
const mul = calculater.mul(53, 5);
const div = calculater.div(20, 4);
const squ = calculater.squ(5);
console.log(squ);
*/

/*  
const title = document.querySelector(".title");

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
*/

/* 
const age = prompt("How old are you?");
if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age >= 22) {
  console.log("you can drink");
} else {
  console.log("you can't");
}
 */

/*
const title = document.querySelector(".title");

const BASE_COLOR = "white";
const OTHER_COLOR = "#ff7979";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}

init();

function handleOffline() {
  console.log("lalalala");
}

function handleOnline() {
  console.log("Its online");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

/* 
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
*/

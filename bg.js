const body = document.querySelector("body");

const IMG_NUMBER = 4;

function handleImgLoad() {}

function paintImage(imgNumber) {
  const image = new Image(); //image는 new 이미지임.
  image.src = `images/${imgNumber + 1}.jpg`; //1부터 4까지의 이미지 실행
  image.classList.add("bgimage"); //값을 설정
  body.appendChild(image); //body 안에 image를 넣음
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); //number는 0부터 3까지 내놓음
  return number; //그값을 리턴해줌
}

function init() {
  const randomNumber = genRandom(); //randomNumber는 genRandom()함수를 실행한 값.
  paintImage(randomNumber); //paintImage를 randomNumber로 실행함.
}

init();

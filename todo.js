const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //TODOS_LS 안에 toDos를 키로 set한다. 이때 toDos는 스트링 형태로 저장
}

function paintToDo(text) {
  const li = document.createElement("li"); //html에 li element를 만듬
  const delBtn = document.createElement("a"); //html에 a element를 만듬
  const span = document.createElement("span"); //html에 span element를 만듬
  const newID = toDos.length + 1; //newID는 할일들 길이의 +1을 id로 저장함.
  delBtn.innerHTML = "🌟"; //a element에 별모양을 집어넣음
  delBtn.addEventListener("click", deleteToDo); //별모양을 클릭하면 deleteToDo 함수가 실행됨.
  span.innerText = text; //span안의 text는 아까 쳤던 currentValue(할일)이 된다.
  li.appendChild(delBtn); //li안에 a를 넣음
  li.appendChild(span); //li 안에 span을 넣음
  li.id = newID; //newID는 li안의 id임.
  toDoList.appendChild(li); //toDoList(ul) 안에 li를 넣음.
  const toDoObj = {
    //toDoObj은 객체이고, 그 안에 text와 id가 있다.
    text: text,
    id: newID
  };
  toDos.push(toDoObj); //toDoObj을 toDos(할일들) 안에 집어넣는다.
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault(); //event가 날라가지 않도록 한다.
  const currentValue = toDoInput.value; //input의 value를 currentValue(할일)라고 한다.
  paintToDo(currentValue); //currentValue(할일)로 함수를 불러온다.
  toDoInput.value = ""; //input 안의 글자들은 초기화된다.
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS); //loadedToDos는 TODOS_LS의 키.
  if (loadedToDos !== null) {
    const parseToDos = JSON.parse(loadedToDos); //loadedToDos를 string에서 변화시킴, 이름은 parseToDos
    parseToDos.forEach(function(toDo) {
      //parseToDos 안의 각각 paintToDo함수를 실행시키고 text로 실행함.
      paintToDo(toDo.text);
    });
  } else {
  }
}

function init() {
  loadToDos(); //loadToDos 함수를 불러온다
  toDoForm.addEventListener("submit", handleSubmit); //toDoForm에 enter를 치면, event가 반응하여 handleSubmit 함수를 불러온다.
}

init();

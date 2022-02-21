const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*버튼사용
const loginButton= document.querySelector("#login-form button");*/

/*링크 이벤트동작 막기
const link = document.querySelector("a");*/
 
function OnLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  /*string과 변수결합 `string ${변수}` 
  greeting.innerText = "Hello " + username;*/
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings(username);

  /*버튼사용시 유효성검증
  if(username === "") {
    alert("Please write your name");
  } else if(username.length > 15) {
    alert("Your name is too long");
  }*/
}

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername}`;
}
/*이벤트 동작막기
function handleLinkClick(event){
  event.preventDefault();
  console.dir(event);
  alert("clicked!");
}*/

loginForm.addEventListener("submit", OnLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
  paintGreetings(savedUsername);
}
/*이벤트 동작막기
link.addEventListener("click", handleLinkClick);*/

/*버튼이벤트
loginButton.addEventListener("click", onLoginBtnClick)*/


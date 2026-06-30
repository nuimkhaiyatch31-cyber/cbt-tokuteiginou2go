const users = [
  {
    username: "mantono",
    password: "12345"
  },
   {
    username: "muhamamad",
    password: "12345"
  },
  {
    username: "hendi",
    password: "12345"
  },
  {
    username: "kevin",
    password: "12345"
  },
  {
    username: "feby",
    password: "12345"
  },
  {
    username: "nuim",
    password: "12345"
  },
  {
    username: "rio",
    password: "12345"
  },
  {
    username: "andi",
    password: "12345"
  }
  
];



// LOGIN

function login(){

const username =
document.getElementById(
"username"
).value;

const password =
document.getElementById(
"password"
).value;

const user = users.find(u=>

u.username === username &&

u.password === password

);

if(user){

localStorage.setItem(
"user",
username
);

window.location.href =
"menu.html";

}else{

alert(
"Username atau Password salah"
);

}

}


// USERNAME

if(
document.getElementById(
"userName"
)
){

document.getElementById(
"userName"
).innerText =

localStorage.getItem(
"user"
);

}


// PILIH PAKET

function selectSet(setName){

localStorage.setItem(
"selectedSet",
setName
);

window.location.href =
"quiz.html";

}


// LOGOUT

function logout(){

localStorage.clear();

window.location.href =
"index.html";

}


// LOAD SOAL

let questions = [];

const selectedSet =

localStorage.getItem(
"selectedSet"
);

if(selectedSet === "paket1"){
questions = paket1;
}

if(selectedSet === "paket2"){
questions = paket2;
}

if(selectedSet === "paket3"){
questions = paket3;
}

if(selectedSet === "paket4"){
questions = paket4;
}

if(selectedSet === "paket5"){
questions = paket5;
}

if(selectedSet === "paket6"){
questions = paket6;
}

if(selectedSet === "paket7"){
questions = paket7;
}
if(selectedSet === "paket8"){
questions = paket8;
}
if(selectedSet === "paket9"){
questions = paket9;
}
if(selectedSet === "paket10"){
questions = paket10;
}

// VARIABLE

let currentQuestion = 0;

let selectedAnswer = null;

let score = 0;

let answeredQuestions = [];


// LOAD QUESTION

function loadQuestion(){

if(
!document.getElementById(
"question"
)
)return;

document.getElementById(
"explanationBox"
).style.display =
"none";

const q =
questions[currentQuestion];

document.getElementById(
"questionNumber"
).innerText =
currentQuestion + 1;

document.getElementById(
"question"
).innerHTML =
q.question;

const optionsDiv =
document.getElementById(
"options"
);

optionsDiv.innerHTML = "";

q.options.forEach((option,index)=>{

const div =
document.createElement(
"div"
);

div.classList.add(
"option"
);

div.innerHTML = option;

div.onclick = ()=>{

if(
answeredQuestions[currentQuestion]
!== undefined
)return;

selectedAnswer = index;

const allOptions =
document.querySelectorAll(
".option"
);

allOptions.forEach(o=>
o.classList.remove(
"selected"
)
);

div.classList.add(
"selected"
);

};

optionsDiv.appendChild(div);

});

createQuestionButtons();

}


// NOMOR SOAL

function createQuestionButtons(){

if(
!document.getElementById(
"questionButtons"
)
)return;

const box =
document.getElementById(
"questionButtons"
);

box.innerHTML = "";

questions.forEach((q,index)=>{

const btn =
document.createElement(
"button"
);

btn.classList.add(
"questionBtn"
);

if(
answeredQuestions[index]
!== undefined
){

btn.innerHTML = "✔";

btn.classList.add(
"done"
);

}else{

btn.innerText =
index + 1;

}

if(index === currentQuestion){

btn.classList.add(
"active"
);

}

btn.onclick = ()=>{

currentQuestion = index;

loadQuestion();

};

box.appendChild(btn);

});

}


// JAWAB

function nextQuestion(){

if(selectedAnswer === null){

alert(
"Pilih jawaban dulu"
);

return;

}

const q =
questions[currentQuestion];

answeredQuestions[currentQuestion]
= selectedAnswer;

const allOptions =
document.querySelectorAll(
".option"
);

allOptions.forEach((option,index)=>{

option.style.pointerEvents =
"none";

if(index === q.answer){

option.style.background =
"#22c55e";

option.style.color =
"white";

option.innerHTML += " ✅";

}

if(
index === selectedAnswer &&
selectedAnswer !== q.answer
){

option.style.background =
"#ef4444";

option.style.color =
"white";

option.innerHTML += " ❌";

}

});

if(selectedAnswer === q.answer){

score++;

}

document.getElementById(
"explanationBox"
).style.display =
"block";

document.getElementById(
"explanationText"
).innerText =
q.explanation;

createQuestionButtons();

}


// LANJUT

function continueQuiz(){

currentQuestion++;

selectedAnswer = null;

if(currentQuestion < questions.length){

loadQuestion();

}else{

localStorage.setItem(
"score",
score
);

localStorage.setItem(
"total",
questions.length
);

window.location.href =
"result.html";

}

}


// RESULT

if(
document.getElementById(
"scoreText"
)
){

document.getElementById(
"scoreText"
).innerText =

localStorage.getItem(
"score"
)

+ " / " +

localStorage.getItem(
"total"
);

}


// MENU

function backMenu(){

window.location.href =
"menu.html";

}


// AUTO LOAD

loadQuestion();

// ======================
// USER LOGIN
// ======================

const users = [

{
username:"mantono",
password:"12345"
},

{
username:"hendi",
password:"12345"
},

{
username:"feby",
password:"12345"
},

{
username:"kevin",
password:"12345"
},

{
username:"rei",
password:"abc123"
}

];


// ======================
// LOGIN
// ======================

function login(){

const username =
document.getElementById(
"username"
).value;

const password =
document.getElementById(
"password"
).value;

const user = users.find(u =>

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


// ======================
// DEMO CBT
// ======================

function tryDemo(){

localStorage.setItem(
"selectedSet",
"demo"
);

window.location.href =
"quiz.html";

}


// ======================
// PILIH PAKET
// ======================

function selectSet(setName){

localStorage.setItem(
"selectedSet",
setName
);

window.location.href =
"quiz.html";

}


// ======================
// LOAD PAKET
// ======================

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

if(selectedSet === "demo"){
questions = demo;
}


// ======================
// USER INFO
// ======================

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


// ======================
// QUIZ SYSTEM
// ======================

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;


// ======================
// LOAD QUESTION
// ======================

function loadQuestion(){

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

const optionsContainer =

document.getElementById(
"options"
);

optionsContainer.innerHTML = "";

q.options.forEach((option,index)=>{

const div =
document.createElement("div");

div.classList.add("option");

div.innerHTML = option;

div.onclick = ()=>selectAnswer(
index,
div
);

optionsContainer.appendChild(div);

});

}


// ======================
// SELECT ANSWER
// ======================

function selectAnswer(index,element){

selectedAnswer = index;

document
.querySelectorAll(".option")
.forEach(el=>{

el.classList.remove(
"selected"
);

});

element.classList.add(
"selected"
);

}


// ======================
// NEXT QUESTION
// ======================

function nextQuestion(){

if(selectedAnswer === null){

alert(
"Pilih jawaban dulu"
);

return;

}

if(
selectedAnswer ===
questions[currentQuestion].answer
){

score++;

document.getElementById(
"explanationTitle"
).innerText =
"✅ Jawaban Benar";

}else{

document.getElementById(
"explanationTitle"
).innerText =
"❌ Jawaban Salah";

}

document.getElementById(
"explanationText"
).innerText =

questions[currentQuestion]
.explanation;

document.getElementById(
"explanationBox"
).style.display =
"block";

}


// ======================
// LANJUT SOAL
// ======================

function continueQuiz(){

document.getElementById(
"explanationBox"
).style.display =
"none";

currentQuestion++;

selectedAnswer = null;

if(
currentQuestion <
questions.length
){

loadQuestion();

}else{

localStorage.setItem(
"score",
score
);

window.location.href =
"result.html";

}

}


// ======================
// RESULT PAGE
// ======================

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

+

" / "

+

questions.length;


// ======================
// DEMO MODE
// ======================

if(selectedSet === "demo"){

document.getElementById(
"premiumMessage"
).innerHTML =

`

<br><br>

<h3>
Ingin mengakses soal lebih lengkap?
</h3>

<p>
Silahkan hubungi WhatsApp kami
untuk mendapatkan akses premium.
</p>

<br>

<a
href="https://wa.me/6281932942430"
target="_blank">

<button>

Hubungi WhatsApp

</button>

</a>

`;

}else{

document.getElementById(
"premiumMessage"
).innerHTML =

`

<button
onclick="window.location.href='menu.html'">

Kumpulan Soal Lainnya

</button>

`;

}

}


// ======================
// TIMER
// ======================

if(
document.getElementById(
"timer"
)
){

let time = 3600;

const timer =
setInterval(()=>{

let minutes =
Math.floor(time / 60);

let seconds =
time % 60;

seconds =
seconds < 10
? "0" + seconds
: seconds;

document.getElementById(
"timer"
).innerText =

`${minutes}:${seconds}`;

time--;

if(time < 0){

clearInterval(timer);

window.location.href =
"result.html";

}

},1000);

}


// ======================
// START QUIZ
// ======================

if(
document.getElementById(
"question"
)
){

loadQuestion();

}


// ======================
// LOGOUT
// ======================

function logout(){

localStorage.removeItem(
"user"
);

localStorage.removeItem(
"selectedSet"
);

window.location.href =
"index.html";

}
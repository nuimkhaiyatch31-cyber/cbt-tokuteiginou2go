// ======================
// USER LOGIN
// ======================

const users = [

{
username:"dody",
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
// PILIH PAKET
// ======================

function selectSet(setName){

localStorage.setItem(
"selectedSet",
setName
);

window.location.href =
"index.html";

}


// ======================
// BANK SOAL
// ======================

const questionSets = {

paket1:[

{
question:
"<ruby>鉄骨<rt>てっこつ</rt></ruby>とびはどんな<ruby>作業<rt>さぎょう</rt></ruby>をしますか。",

options:[

"A. <ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>高層<rt>こうそう</rt></ruby>ビルやマンションの<ruby>骨組<rt>ほねぐ</rt></ruby>みをくみ<ruby>上<rt>あ</rt></ruby>げていく<ruby>作業<rt>さぎょう</rt></ruby>です",

"B. <ruby>橋<rt>はし</rt></ruby>やダム、<ruby>鉄塔<rt>てっとう</rt></ruby>、<ruby>高速道路<rt>こうそくどうろ</rt></ruby>の<ruby>鉄骨<rt>てっこつ</rt></ruby>を<ruby>組<rt>く</rt></ruby>む<ruby>作業<rt>さぎょう</rt></ruby>です",

"C. <ruby>数百<rt>すうひゃく</rt></ruby>トンの<ruby>機械<rt>きかい</rt></ruby>や<ruby>設備<rt>せつび</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>び、<ruby>設置<rt>せっち</rt></ruby>する<ruby>据<rt>す</rt></ruby>え<ruby>付<rt>つ</rt></ruby>け<ruby>作業<rt>さぎょう</rt></ruby>です",

"D. <ruby>建築物<rt>けんちくぶつ</rt></ruby>の<ruby>足場<rt>あしば</rt></ruby>を<ruby>組<rt>く</rt></ruby>む<ruby>作業<rt>さぎょう</rt></ruby>です"

],

answer:0,

explanation:
"鉄骨部材を使って骨組みを組み上げる作業です。Artinya:“Pekerjaan merakit rangka gedung tinggi atau apartemen menggunakan material baja.”

Karena 鉄骨とび (てっこつとび) adalah pekerjaan tukang scaffolding/besi yang khusus merakit rangka baja bangunan tinggi."

}

],

paket2:[

{
question:
"KYT の<ruby>基本<rt>きほん</rt></ruby>はどれですか。",

options:[

"A. <ruby>危険予知<rt>きけんよち</rt></ruby>",

"B. ゲーム",

"C. スポーツ",

"D. テスト"

],

answer:0,

explanation:
"KYT は危険予知活動です。"

}

],

paket3:[

{
question:
"<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>終<rt>お</rt></ruby>わってから、<ruby>何<rt>なに</rt></ruby>をしなければならないか。",

options:[

"A. <ruby>何<rt>なに</rt></ruby>にもしなくてもいいです",

"B. <ruby>掃除<rt>そうじ</rt></ruby>しません",

"C. <ruby>後片付<rt>あとかたづ</rt></ruby>けます",

"D. <ruby>消火確認<rt>しょうかかくにん</rt></ruby>しません"

],

answer:2,

explanation:
"作業後は後片付けが必要です。"

}

]

};


// ======================
// LOAD SET
// ======================

let questions = [];

if(
document.getElementById(
"question"
)
){

const selectedSet =

localStorage.getItem(
"selectedSet"
);

questions =
questionSets[selectedSet];

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
// RESULT
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

}


// ======================
// LOGOUT
// ======================

function logout(){

localStorage.clear();

window.location.href =
"login.html";

}


// ======================
// TIMER
// ======================

if(
document.getElementById(
"timer"
)
){

let time = 1800;

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

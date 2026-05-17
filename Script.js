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
// BANK SOAL
// ======================

const questionSets = {


// ======================
// DEMO
// ======================

demo:[

{
question:
"<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>終<rt>お</rt></ruby>わってから、<ruby>何<rt>なに</rt></ruby>をしなければならないか。",

options:[

"A. <ruby>何<rt>なに</rt></ruby>にもしなくてもいいです",

"B. <ruby>綺麗<rt>きれい</rt></ruby>に<ruby>見<rt>み</rt></ruby>えるから<ruby>掃除<rt>そうじ</rt></ruby>しません",

"C. <ruby>翌日<rt>よくじつ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>段取<rt>だんど</rt></ruby>りや<ruby>準備<rt>じゅんび</rt></ruby>をするつもりで<ruby>後片付<rt>あとかたづ</rt></ruby>けます",

"D. <ruby>火<rt>ひ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>確実<rt>かくじつ</rt></ruby>に<ruby>消火<rt>しょうか</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しません"

],

answer:2,

explanation:
"C. 翌日(よくじつ)の作業(さぎょう)の段取(だんど)りや準備(じゅんび)をするつもりで後片付(あとかたづ)けます\n\nArtinya:\nMembereskan dan merapikan setelah pekerjaan selesai sambil menyiapkan pekerjaan untuk hari berikutnya.\n\nPilihan lain salah karena:\n\nA = tidak melakukan apa-apa ❌\nB = tidak membersihkan ❌\nD = tidak memastikan api padam ❌"

},

 {
question:
"<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>終<rt>お</rt></ruby>わってから、<ruby>何<rt>なに</rt></ruby>をしなければならないか。",

options:[

"A. <ruby>何<rt>なに</rt></ruby>にもしなくてもいいです",

"B. <ruby>綺麗<rt>きれい</rt></ruby>に<ruby>見<rt>み</rt></ruby>えるから<ruby>掃除<rt>そうじ</rt></ruby>しません",

"C. <ruby>翌日<rt>よくじつ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>段取<rt>だんど</rt></ruby>りや<ruby>準備<rt>じゅんび</rt></ruby>をするつもりで<ruby>後片付<rt>あとかたづ</rt></ruby>けます",

"D. <ruby>火<rt>ひ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>確実<rt>かくじつ</rt></ruby>に<ruby>消火<rt>しょうか</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しません"

],

answer:2,

explanation:
"C. 翌日(よくじつ)の作業(さぎょう)の段取(だんど)りや準備(じゅんび)をするつもりで後片付(あとかたづ)けます\n\nArtinya:\n“Membereskan dan merapikan setelah pekerjaan selesai sambil menyiapkan pekerjaan untuk hari berikutnya.”\n\nPembahasan:\nSetelah pekerjaan selesai, area kerja harus dirapikan dan dipersiapkan untuk pekerjaan hari berikutnya agar pekerjaan berjalan aman dan efisien.\n\nPilihan lain salah karena:\n\nA = tidak melakukan apa-apa ❌\nB = tidak membersihkan area kerja ❌\nD = tidak memastikan api padam ❌ (berbahaya)"

}, 

  {
question:
"<ruby>施工計画<rt>せこうけいかく</rt></ruby>の<ruby>作成<rt>さくせい</rt></ruby>や<ruby>工程管理<rt>こうていかんり</rt></ruby>、<ruby>品質管理<rt>ひんしつかんり</rt></ruby>、<ruby>安全管理<rt>あんぜんかんり</rt></ruby>などの<ruby>監督業務<rt>かんとくぎょうむ</rt></ruby>をすることは<ruby>誰<rt>だれ</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>ですか。 <ruby>相応<rt>ふさ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>主任技術者<rt>しゅにんぎじゅつしゃ</rt></ruby>",

"B. <ruby>職長<rt>しょくちょう</rt></ruby>",

"C. <ruby>作業員<rt>さぎょういん</rt></ruby>",

"D. <ruby>発注者<rt>はっちゅうしゃ</rt></ruby>"

],

answer:0,

explanation:
"A. 主任技術者(しゅにんぎじゅつしゃ)\n\nArtinya:\nPenanggung jawab teknis yang mengawasi perencanaan pekerjaan, manajemen proses kerja, kualitas, dan keselamatan kerja.\n\nPembahasan:\n主任技術者 bertanggung jawab untuk membuat rencana pelaksanaan konstruksi serta mengawasi kualitas, progres pekerjaan, dan keselamatan di lapangan.\n\nPilihan lain salah karena:\n\nB = hanya memimpin pekerja lapangan ❌\nC = pekerja biasa ❌\nD = pihak pemberi proyek ❌"

}

],


// ======================
// MEMBER
// ======================

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
"A. 鉄骨部材(てっこつぶざい)を使(つか)って高層(こうそう)ビルやマンションの骨組(ほねぐみ)をくみ上(あ)げていく作業(さぎょう)です\n\nArtinya:\nPekerjaan merakit rangka gedung tinggi atau apartemen menggunakan material baja.\n\nPembahasan:\nKarena 鉄骨とび adalah pekerjaan khusus merakit rangka baja bangunan tinggi."

},

{
question:
"<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>終<rt>お</rt></ruby>わってから、<ruby>何<rt>なに</rt></ruby>をしなければならないか。",

options:[

"A. <ruby>何<rt>なに</rt></ruby>にもしなくてもいいです",

"B. <ruby>綺麗<rt>きれい</rt></ruby>に<ruby>見<rt>み</rt></ruby>えるから<ruby>掃除<rt>そうじ</rt></ruby>しません",

"C. <ruby>翌日<rt>よくじつ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>段取<rt>だんど</rt></ruby>りや<ruby>準備<rt>じゅんび</rt></ruby>をするつもりで<ruby>後片付<rt>あとかたづ</rt></ruby>けます",

"D. <ruby>火<rt>ひ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>確実<rt>かくじつ</rt></ruby>に<ruby>消火<rt>しょうか</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しません"

],

answer:2,

explanation:
"C. 翌日(よくじつ)の作業(さぎょう)の段取(だんど)りや準備(じゅんび)をするつもりで後片付(あとかたづ)けます\n\nArtinya:\n“Membereskan dan merapikan setelah pekerjaan selesai sambil menyiapkan pekerjaan untuk hari berikutnya.”\n\nPembahasan:\nSetelah pekerjaan selesai, area kerja harus dirapikan dan dipersiapkan untuk pekerjaan hari berikutnya agar pekerjaan berjalan aman dan efisien.\n\nPilihan lain salah karena:\n\nA = tidak melakukan apa-apa ❌\nB = tidak membersihkan area kerja ❌\nD = tidak memastikan api padam ❌ (berbahaya)"

},

{
question:
"トイレの<ruby>便器<rt>べんき</rt></ruby>、<ruby>洗面器<rt>せんめんき</rt></ruby>などを<ruby>設置<rt>せっち</rt></ruby>する<ruby>工事<rt>こうじ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>工事<rt>こうじ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>衛生器具設備工事<rt>えいせいきぐせつびこうじ</rt></ruby>",

"B. <ruby>給湯設備<rt>きゅうとうせつび</rt></ruby>",

"C. <ruby>排水<rt>はいすい</rt></ruby>・<ruby>通気設備<rt>つうきせつび</rt></ruby>",

"D. <ruby>給水設備工事<rt>きゅうすいせつびこうじ</rt></ruby>"

],

answer:0,

explanation:
"A. 衛生器具設備工事(えいせいきぐせつびこうじ)\n\nArtinya:\nPekerjaan instalasi perlengkapan sanitasi seperti toilet dan wastafel.\n\nPembahasan:\n衛生器具設備工事 adalah pekerjaan pemasangan perlengkapan sanitasi seperti toilet, wastafel, dan peralatan kebersihan lainnya.\n\nPilihan lain salah karena:\n\nB = instalasi air panas ❌\nC = sistem pembuangan dan ventilasi ❌\nD = instalasi suplai air ❌"

},

{
question:
"<ruby>施工計画<rt>せこうけいかく</rt></ruby>の<ruby>作成<rt>さくせい</rt></ruby>や<ruby>工程管理<rt>こうていかんり</rt></ruby>、<ruby>品質管理<rt>ひんしつかんり</rt></ruby>、<ruby>安全管理<rt>あんぜんかんり</rt></ruby>などの<ruby>監督業務<rt>かんとくぎょうむ</rt></ruby>をすることは<ruby>誰<rt>だれ</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>ですか。 <ruby>相応<rt>ふさ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>主任技術者<rt>しゅにんぎじゅつしゃ</rt></ruby>",

"B. <ruby>職長<rt>しょくちょう</rt></ruby>",

"C. <ruby>作業員<rt>さぎょういん</rt></ruby>",

"D. <ruby>発注者<rt>はっちゅうしゃ</rt></ruby>"

],

answer:0,

explanation:
"A. 主任技術者(しゅにんぎじゅつしゃ)\n\nArtinya:\nPenanggung jawab teknis yang mengawasi perencanaan pekerjaan, manajemen proses kerja, kualitas, dan keselamatan kerja.\n\nPembahasan:\n主任技術者 bertanggung jawab untuk membuat rencana pelaksanaan konstruksi serta mengawasi kualitas, progres pekerjaan, dan keselamatan di lapangan.\n\nPilihan lain salah karena:\n\nB = hanya memimpin pekerja lapangan ❌\nC = pekerja biasa ❌\nD = pihak pemberi proyek ❌"

},

{
question:
"KYT の<ruby>基本<rt>きほん</rt></ruby>として 4 ラウンドあります。 4 つの<ruby>中<rt>なか</rt></ruby>で<ruby>正<rt>ただ</rt></ruby>しくないものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. どんな<ruby>危険<rt>きけん</rt></ruby>が<ruby>潜<rt>ひそ</rt></ruby>んでいるか",

"B. これが<ruby>危険<rt>きけん</rt></ruby>のポイントだ",

"C. あなたならどうする",

"D. <ruby>危険予知活動<rt>きけんよちかつどう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う"

],

answer:3,

explanation:
"D. 危険予知活動(きけんよちかつどう)を行(おこな)う\n\nArtinya:\n“Melakukan kegiatan prediksi bahaya.”\n\nPembahasan:\nJawaban D salah karena bukan termasuk 4 ronde dasar KYT.\n\n4 ronde dasar KYT adalah:\n\n1. どんな危険が潜んでいるか\n(Mencari bahaya yang mungkin ada)\n\n2. これが危険のポイントだ\n(Menentukan titik bahaya utama)\n\n3. あなたならどうする\n(Apa tindakan yang harus dilakukan)\n\n4. 指差し呼称で確認する\n(Melakukan konfirmasi dengan penunjukan dan pengucapan)\n\nPilihan A, B, dan C termasuk bagian dari dasar KYT ✅"

},

{
question:
"<ruby>長期<rt>ちょうき</rt></ruby>にわたって<ruby>吸<rt>す</rt></ruby>い<ruby>続<rt>つづ</rt></ruby>けると<ruby>肺<rt>はい</rt></ruby>の<ruby>機能障害<rt>きのうしょうがい</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>起<rt>お</rt></ruby>こすため<ruby>何<rt>なに</rt></ruby>を<ruby>着用<rt>ちゃくよう</rt></ruby>しなければならないか。",

options:[

"A. <ruby>保護<rt>ほご</rt></ruby>メガネ",

"B. <ruby>手袋<rt>てぶくろ</rt></ruby>",

"C. シールド<ruby>面付<rt>めんつ</rt></ruby>きヘルメット",

"D. <ruby>保護<rt>ほご</rt></ruby>マスク"

],

answer:3,

explanation:
"D. 保護(ほご)マスク\n\nArtinya:\nMasker pelindung.\n\nPembahasan:\nDebu atau zat berbahaya yang terhirup dalam jangka panjang dapat menyebabkan gangguan fungsi paru-paru, sehingga harus menggunakan masker pelindung.\n\nPilihan lain salah karena:\n\nA = hanya melindungi mata ❌\nB = hanya melindungi tangan ❌\nC = melindungi wajah dan kepala ❌"

},

{
question:
"<ruby>手戻<rt>てもど</rt></ruby>りはどんなことしますか。 <ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. ある<ruby>作業<rt>さぎょう</rt></ruby>をしないで<ruby>先<rt>さき</rt></ruby>に<ruby>進<rt>すす</rt></ruby>んでしまったため、その<ruby>作業<rt>さぎょう</rt></ruby>まで<ruby>戻<rt>もど</rt></ruby>ってやりなおすことです",

"B. てじゅんや てはい をまちがえることです",

"C. <ruby>次<rt>つぎ</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>掛<rt>か</rt></ruby>かれず<ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>動作<rt>どうさ</rt></ruby>がストップしている<ruby>状態<rt>じょうたい</rt></ruby>です",

"D. <ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>たないこと、やっても<ruby>効果<rt>こうか</rt></ruby>がないことです"

],

answer:0,

explanation:
"A. ある作業(さぎょう)をしないで先(さき)に進(すす)んでしまったため、その作業(さぎょう)まで戻(もど)ってやりなおすことです\n\nArtinya:\nKarena ada pekerjaan yang terlewat lalu pekerjaan harus kembali ke tahap sebelumnya untuk dikerjakan ulang.\n\nPembahasan:\n手戻り berarti mengulang pekerjaan karena ada proses yang terlewat atau salah sehingga harus kembali ke tahap sebelumnya.\n\nPilihan lain salah karena:\n\nB = salah prosedur atau persiapan ❌\nC = kondisi pekerjaan terhenti ❌\nD = pekerjaan yang tidak berguna ❌"

},

{
question:
"<ruby>安全衛生活動<rt>あんぜんえいせいかつどう</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きく<ruby>分<rt>わ</rt></ruby>けて「<ruby>安全管理<rt>あんぜんかんり</rt></ruby>」と「___」の<ruby>二<rt>ふた</rt></ruby>つに<ruby>分<rt>わ</rt></ruby>けられます。",

options:[

"A. <ruby>健康管理<rt>けんこうかんり</rt></ruby>",

"B. <ruby>作業員管理<rt>さぎょういんかんり</rt></ruby>",

"C. <ruby>衛生管理<rt>えいせいかんり</rt></ruby>",

"D. <ruby>現場管理<rt>げんばかんり</rt></ruby>"

],

answer:2,

explanation:
"C. 衛生管理(えいせいかんり)\n\nArtinya:\nManajemen kebersihan dan kesehatan kerja.\n\nPembahasan:\n安全衛生活動 dibagi menjadi dua yaitu 安全管理 (manajemen keselamatan) dan 衛生管理 (manajemen kesehatan dan kebersihan kerja).\n\nPilihan lain salah karena:\n\nA = hanya fokus kesehatan ❌\nB = manajemen pekerja ❌\nD = manajemen lapangan ❌"

},

{
question:
"「ご<ruby>苦労<rt>くろう</rt></ruby>さま」と<ruby>言<rt>い</rt></ruby>われたらどういう<ruby>返事<rt>へんじ</rt></ruby>をしますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. とんでもないです",

"B. いいよ",

"C. ありがとうございます",

"D. ごちそうさまでした"

],

answer:2,

explanation:
"C. ありがとうございます\n\nArtinya:\nTerima kasih.\n\nPembahasan:\nJika seseorang mengatakan 「ご苦労さま」, balasan yang sopan dan umum digunakan adalah 「ありがとうございます」.\n\nPilihan lain salah karena:\n\nA = ungkapan menolak pujian ❌\nB = terlalu santai ❌\nD = digunakan setelah makan ❌"

},

{
question:
"<ruby>推進<rt>すいしん</rt></ruby>トンネル<ruby>工事<rt>こうじ</rt></ruby>は<ruby>主<rt>おも</rt></ruby>に<ruby>利用<rt>りよう</rt></ruby>されるは<ruby>何<rt>なん</rt></ruby>ですか。<ruby>相応<rt>ふさわ</rt></ruby>しくないものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>電力<rt>でんりょく</rt></ruby>",

"B. <ruby>通信<rt>つうしん</rt></ruby>",

"C. ガス",

"D. <ruby>国道<rt>こくどう</rt></ruby>"

],

answer:3,

explanation:
"Arti Soal:\nUntuk apa tunnel dorong (推進トンネル工事) biasanya digunakan? Pilih jawaban yang tidak sesuai.\n\nD. 国道(こくどう)\n\nArtinya:\nJalan nasional.\n\nPembahasan:\n推進トンネル工事 biasanya digunakan untuk jalur bawah tanah seperti listrik, komunikasi, dan gas, bukan untuk jalan raya nasional.\n\nPilihan lain benar karena:\n\nA = digunakan untuk jalur listrik ✅\nB = digunakan untuk jalur komunikasi ✅\nC = digunakan untuk jalur gas ✅"

},

{
question:
"<ruby>事業活動<rt>じぎょうかつどう</rt></ruby>で<ruby>生<rt>しょう</rt></ruby>じたごみは<ruby>何<rt>なに</rt></ruby>に<ruby>分<rt>わ</rt></ruby>けられますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>産業廃棄物<rt>さんぎょうはいきぶつ</rt></ruby> と <ruby>事業系一般廃棄物<rt>じぎょうけいいっぱんはいきぶつ</rt></ruby>",

"B. <ruby>産業廃棄物<rt>さんぎょうはいきぶつ</rt></ruby> と <ruby>家庭廃棄物<rt>かていはいきぶつ</rt></ruby>",

"C. <ruby>家庭廃棄物<rt>かていはいきぶつ</rt></ruby> と <ruby>農業廃棄物<rt>のうぎょうはいきぶつ</rt></ruby>",

"D. <ruby>農業廃棄物<rt>のうぎょうはいきぶつ</rt></ruby> と <ruby>事業系一般廃棄物<rt>じぎょうけいいっぱんはいきぶつ</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nSampah yang dihasilkan dari kegiatan usaha dibagi menjadi apa saja?\n\nA. 産業廃棄物(さんぎょうはいきぶつ) と 事業系一般廃棄物(じぎょうけいいっぱんはいきぶつ)\n\nArtinya:\nLimbah industri dan limbah umum dari kegiatan usaha.\n\nPembahasan:\nSampah dari kegiatan usaha dibagi menjadi dua yaitu 産業廃棄物 (limbah industri) dan 事業系一般廃棄物 (limbah umum kegiatan usaha).\n\nPilihan lain salah karena:\n\nB = limbah rumah tangga bukan kategori utama kegiatan usaha ❌\nC = tidak sesuai klasifikasi ❌\nD = limbah pertanian bukan pembagian utama ❌"

},

{
question:
"<ruby>原価<rt>げんか</rt></ruby>―<ruby>工期<rt>こうき</rt></ruby>―<ruby>品質<rt>ひんしつ</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>として、<ruby>間違<rt>まちが</rt></ruby>っているものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>工期<rt>こうき</rt></ruby>を<ruby>早<rt>はや</rt></ruby>くするには、<ruby>原価<rt>げんか</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなっています",

"B. <ruby>工期<rt>こうき</rt></ruby>をもっと<ruby>早<rt>はや</rt></ruby>くするには、<ruby>原価<rt>げんか</rt></ruby>がもっと<ruby>低<rt>ひく</rt></ruby>くなっています",

"C. <ruby>工期<rt>こうき</rt></ruby>を<ruby>遅<rt>おそ</rt></ruby>くするには、<ruby>原価<rt>げんか</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなっています",

"D. <ruby>原価<rt>げんか</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>ければ<ruby>品質<rt>ひんしつ</rt></ruby>は<ruby>悪<rt>わる</rt></ruby>くなる"

],

answer:1,

explanation:
"Arti Soal:\nPilih hubungan antara biaya, waktu pekerjaan, dan kualitas yang salah.\n\nB. 工期(こうき)をもっと早(はや)くするには、原価(げんか)がもっと低(ひく)くなっています\n\nArtinya:\nUntuk mempercepat waktu pekerjaan, biaya menjadi lebih rendah.\n\nPembahasan:\nPernyataan tersebut salah karena biasanya jika pekerjaan dipercepat maka biaya justru meningkat, misalnya karena penambahan pekerja atau lembur.\n\nPilihan lain benar karena:\n\nA = mempercepat pekerjaan biasanya biaya naik ✅\nC = pekerjaan terlalu lama bisa menambah biaya ✅\nD = biaya terlalu rendah dapat menurunkan kualitas ✅"

},

{
question:
"<ruby>電気通信工事<rt>でんきつうしんこうじ</rt></ruby>として、<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>える<ruby>方式<rt>ほうしき</rt></ruby>はいくつありますか。<ruby>相応<rt>ふさ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. 2",

"B. 3",

"C. 4",

"D. 5"

],

answer:0,

explanation:
"Arti Soal:\nDalam pekerjaan telekomunikasi listrik, ada berapa cara untuk menyampaikan informasi?\n\nA. 2\n\nArtinya:\nTerdapat 2 cara.\n\nPembahasan:\nDalam 電気通信工事, cara penyampaian informasi dibagi menjadi dua yaitu komunikasi kabel (有線通信) dan komunikasi nirkabel (無線通信).\n\nPilihan lain salah karena:\n\nB = jumlah terlalu banyak ❌\nC = tidak sesuai klasifikasi ❌\nD = tidak sesuai klasifikasi ❌"

},

{
question:
"<ruby>必要<rt>ひつよう</rt></ruby>なものを<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>数<rt>かず</rt></ruby>だけ<ruby>配置<rt>はいち</rt></ruby>し、<ruby>不必要<rt>ふひつよう</rt></ruby>なものは<ruby>廃棄<rt>はいき</rt></ruby>するなどのことは<ruby>何<rt>なん</rt></ruby>というか。",

options:[

"A. <ruby>整理<rt>せいり</rt></ruby>",

"B. <ruby>整頓<rt>せいとん</rt></ruby>",

"C. <ruby>清掃<rt>せいそう</rt></ruby>",

"D. <ruby>清潔<rt>せいけつ</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nMenempatkan barang yang diperlukan sesuai jumlah yang dibutuhkan dan membuang barang yang tidak diperlukan disebut apa?\n\nA. 整理(せいり)\n\nArtinya:\nPemilahan atau penataan.\n\nPembahasan:\n整理 berarti memisahkan barang yang diperlukan dan tidak diperlukan lalu membuang yang tidak diperlukan.\n\nPilihan lain salah karena:\n\nB = merapikan barang agar mudah digunakan ❌\nC = membersihkan area kerja ❌\nD = menjaga kebersihan tetap terpelihara ❌"

},

{
question:
"<ruby>電波法<rt>でんぱほう</rt></ruby>では　<ruby>何<rt>なに</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うとき<ruby>免許<rt>めんきょ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>となりますか。",

options:[

"A. トランシーバー",

"B. ファイバー",

"C. ドローン",

"D. スプリンクラー"

],

answer:0,

explanation:
"Arti Soal:\nMenurut Undang-Undang Gelombang Radio, penggunaan apa yang memerlukan izin?\n\nA. トランシーバー\n\nArtinya:\nHandy talky / alat komunikasi radio.\n\nPembahasan:\nPenggunaan alat komunikasi radio tertentu seperti トランシーバー memerlukan izin berdasarkan 電波法.\n\nPilihan lain salah karena:\n\nB = kabel fiber optik ❌\nC = drone bukan jawaban utama soal ini ❌\nD = alat penyiram air ❌"

},

{
question:
"<ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きさによって<ruby>仕分<rt>しわ</rt></ruby>けることができる<ruby>網<rt>あみ</rt></ruby>がついた<ruby>道具<rt>どうぐ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>というか。",

options:[

"A. トロ<ruby>箱<rt>ばこ</rt></ruby>",

"B. ふるい",

"C. スコップ",

"D. かくはん<ruby>機<rt>き</rt></ruby>"

],

answer:1,

explanation:
"Arti Soal:\nAlat berjaring yang digunakan untuk memisahkan material berdasarkan ukuran disebut apa?\n\nB. ふるい\n\nArtinya:\nAyakan / saringan.\n\nPembahasan:\nふるい digunakan untuk menyaring atau memisahkan material berdasarkan ukuran partikel.\n\nPilihan lain salah karena:\n\nA = kotak/wadah material ❌\nC = sekop ❌\nD = mesin pengaduk ❌"

},

{
question:
"<ruby>舗装<rt>ほそう</rt></ruby><ruby>工事<rt>こうじ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、<ruby>一番下<rt>いちばんした</rt></ruby>の<ruby>層<rt>そう</rt></ruby>で<ruby>作業<rt>さぎょう</rt></ruby>するのはどれですか。",

options:[

"A. <ruby>路床工事<rt>ろしょうこうじ</rt></ruby>",

"B. <ruby>路盤工事<rt>ろばんこうじ</rt></ruby>",

"C. <ruby>基層工事<rt>きそこうじ</rt></ruby>",

"D. <ruby>表層工事<rt>ひょうそうこうじ</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nDalam pekerjaan perkerasan jalan, pekerjaan pada lapisan paling bawah adalah yang mana?\n\nA. 路床工事(ろしょうこうじ)\n\nArtinya:\nPekerjaan tanah dasar jalan.\n\nPembahasan:\n路床工事 adalah pekerjaan pada lapisan paling bawah yang menjadi dasar dari konstruksi jalan.\n\nPilihan lain salah karena:\n\nB = lapisan di atas tanah dasar ❌\nC = lapisan pondasi atas ❌\nD = lapisan permukaan jalan ❌"

},

{
question:
"<ruby>職長<rt>しょくちょう</rt></ruby>として<ruby>災害<rt>さいがい</rt></ruby>・<ruby>事故発生時<rt>じこはっせいじ</rt></ruby>はどのように<ruby>対応<rt>たいおう</rt></ruby>しますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>機械<rt>きかい</rt></ruby>・<ruby>工具<rt>こうぐ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>使用<rt>しよう</rt></ruby>の<ruby>徹底<rt>てってい</rt></ruby>",

"B. <ruby>安全<rt>あんぜん</rt></ruby>ミーティングの<ruby>実施<rt>じっし</rt></ruby>",

"C. <ruby>自分<rt>じぶん</rt></ruby>の<ruby>所属<rt>しょぞく</rt></ruby>する<ruby>会社<rt>かいしゃ</rt></ruby>や<ruby>工事<rt>こうじ</rt></ruby><ruby>全体<rt>ぜんたい</rt></ruby>をまとめる<ruby>会社<rt>かいしゃ</rt></ruby>などで<ruby>取<rt>と</rt></ruby>り<ruby>決<rt>き</rt></ruby>めを<ruby>行<rt>おこな</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>です",

"D. <ruby>品質管理<rt>ひんしつかんり</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です"

],

answer:2,

explanation:
"Arti Soal:\nSebagai kepala pekerja (職長), bagaimana penanganan saat terjadi bencana atau kecelakaan?\n\nC. 自分(じぶん)の所属(しょぞく)する会社(かいしゃ)や工事(こうじ)全体(ぜんたい)をまとめる会社(かいしゃ)などで取(と)り決(き)めを行(おこな)う必要(ひつよう)です\n\nArtinya:\nPerlu melakukan koordinasi dan penetapan tindakan dengan perusahaan tempat bekerja dan perusahaan yang mengatur keseluruhan proyek.\n\nPembahasan:\nSaat terjadi kecelakaan atau bencana, 職長 harus melakukan koordinasi dan mengikuti prosedur penanganan yang telah ditentukan perusahaan dan proyek.\n\nPilihan lain salah karena:\n\nA = pencegahan penggunaan alat ❌\nB = kegiatan rutin keselamatan ❌\nD = fokus pada kualitas pekerjaan ❌"

},

{
question:
`
<img src="Gambar 1.png" class="question-image">

<br><br>

イラストにやるとどんなグラフですか。
`,

options:[

"A. <ruby>災害<rt>さいがい</rt></ruby>や<ruby>事故<rt>じこ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>グラフ",

"B. <ruby>年代別<rt>ねんだいべつ</rt></ruby><ruby>労働力人口<rt>ろうどうりょくじんこう</rt></ruby>の<ruby>調査結果<rt>ちょうさけっか</rt></ruby>のグラフ",

"C. <ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる<ruby>外国人<rt>がいこくじん</rt></ruby>",

"D. ベトナムの<ruby>特定技能実習生<rt>とくていぎのうじっしゅうせい</rt></ruby>"

],

answer:1,

explanation:
"Arti Soal:\nGrafik pada ilustrasi tersebut menunjukkan grafik apa?\n\nB. 年代別(ねんだいべつ)労働力人口(ろうどうりょくじんこう)の調査結果(ちょうさけっか)のグラフ\n\nArtinya:\nGrafik hasil survei jumlah tenaga kerja berdasarkan usia.\n\nPembahasan:\nIlustrasi tersebut menunjukkan data tenaga kerja berdasarkan kelompok usia sehingga jawaban yang benar adalah B.\n\nPilihan lain salah karena:\n\nA = grafik kecelakaan ❌\nC = data orang asing di Jepang ❌\nD = peserta magang keterampilan Vietnam ❌"

},

  {
question:
"<ruby>岸壁工事<rt>がんぺきこうじ</rt></ruby>の<ruby>定義<rt>ていぎ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。<ruby>相応<rt>ふさわ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>港<rt>みなと</rt></ruby>で<ruby>船<rt>ふね</rt></ruby>から<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>積<rt>つ</rt></ruby>んだり<ruby>降<rt>お</rt></ruby>ろしたりするため",

"B. <ruby>船<rt>ふね</rt></ruby>が<ruby>安全<rt>あんぜん</rt></ruby>にとまったり、<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>積<rt>つ</rt></ruby>んだり<ruby>下<rt>お</rt></ruby>ろしたりできるようにするため<ruby>波<rt>なみ</rt></ruby>が<ruby>港<rt>みなと</rt></ruby>に<ruby>入<rt>はい</rt></ruby>らないようにする",

"C. <ruby>土砂<rt>どしゃ</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めて<ruby>新<rt>あたら</rt></ruby>しい<ruby>土地<rt>とち</rt></ruby>をつくる<ruby>工事<rt>こうじ</rt></ruby>を<ruby>埋立工事<rt>うめたてこうじ</rt></ruby>といいます",

"D. <ruby>海<rt>うみ</rt></ruby>や<ruby>川<rt>かわ</rt></ruby>などの<ruby>底<rt>そこ</rt></ruby>の<ruby>土砂<rt>どしゃ</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>除<rt>のぞ</rt></ruby>く<ruby>工事<rt>こうじ</rt></ruby>です"

],

answer:0,

explanation:
"Arti Soal:\nApa definisi pekerjaan pembangunan dermaga (岸壁工事)?\n\nA. 港(みなと)で船(ふね)から荷物(にもつ)を積(つ)んだり降(お)ろしたりするため\n\nArtinya:\nUntuk memuat dan menurunkan barang dari kapal di pelabuhan.\n\nPembahasan:\n岸壁工事 adalah pekerjaan pembangunan dermaga yang digunakan kapal untuk bersandar serta memuat dan menurunkan barang.\n\nPilihan lain salah karena:\n\nB = fungsi pemecah ombak ❌\nC = pekerjaan reklamasi ❌\nD = pekerjaan pengerukan ❌"

},

  {
question:
"<ruby>採石現場<rt>さいせきげんば</rt></ruby>や<ruby>建築現場<rt>けんちくげんば</rt></ruby>などで<ruby>発破<rt>はっぱ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>業務<rt>ぎょうむ</rt></ruby>に<ruby>就<rt>つ</rt></ruby>くには<ruby>何<rt>なに</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>ですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>特定技能資格<rt>とくていぎのうしかく</rt></ruby>",

"B. <ruby>発破技師免許<rt>はっぱぎしめんきょ</rt></ruby>",

"C. JLPT <ruby>資格<rt>しかく</rt></ruby>",

"D. <ruby>職長免許<rt>しょくちょうめんきょ</rt></ruby>"

],

answer:1,

explanation:
"Arti Soal:\nUntuk bekerja melakukan peledakan di lokasi tambang batu atau konstruksi, apa yang diperlukan?\n\nB. 発破技師免許(はっぱぎしめんきょ)\n\nArtinya:\nLisensi teknisi peledakan.\n\nPembahasan:\nPekerjaan peledakan (発破) memerlukan lisensi khusus yaitu 発破技師免許 karena termasuk pekerjaan berbahaya.\n\nPilihan lain salah karena:\n\nA = bukan lisensi khusus peledakan ❌\nC = sertifikat bahasa Jepang ❌\nD = lisensi kepala pekerja ❌"

},

  {
question:
"<ruby>労働基準法<rt>ろうどうきじゅんほう</rt></ruby>のどんな<ruby>法律<rt>ほうりつ</rt></ruby>ですか。<ruby>相応<rt>ふさわ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>労働者<rt>ろうどうしゃ</rt></ruby>は<ruby>使用者<rt>しようしゃ</rt></ruby>より<ruby>立場<rt>たちば</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>いため、<ruby>労働者<rt>ろうどうしゃ</rt></ruby>を<ruby>保護<rt>ほご</rt></ruby>するため",

"B. <ruby>労働者<rt>ろうどうしゃ</rt></ruby>は<ruby>使用者<rt>しようしゃ</rt></ruby>より<ruby>立場<rt>たちば</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>いため、<ruby>労働者<rt>ろうどうしゃ</rt></ruby>を<ruby>保護<rt>ほご</rt></ruby>するため",

"C. <ruby>職長<rt>しょくちょう</rt></ruby>は<ruby>使用者<rt>しようしゃ</rt></ruby>より<ruby>立場<rt>たちば</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>いため、<ruby>職長<rt>しょくちょう</rt></ruby>を<ruby>保護<rt>ほご</rt></ruby>するため",

"D. <ruby>労働者<rt>ろうどうしゃ</rt></ruby>は<ruby>使用者<rt>しようしゃ</rt></ruby>より<ruby>立場<rt>たちば</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>いため、お<ruby>客様<rt>きゃくさま</rt></ruby>を<ruby>保護<rt>ほご</rt></ruby>するため"

],

answer:0,

explanation:
"Arti Soal:\nUndang-Undang Standar Ketenagakerjaan (労働基準法) adalah hukum seperti apa?\n\nA. 労働者(ろうどうしゃ)は使用者(しようしゃ)より立場(たちば)が弱(よわ)いため、労働者(ろうどうしゃ)を保護(ほご)するため\n\nArtinya:\nKarena posisi pekerja lebih lemah dibanding pemberi kerja, maka hukum ini dibuat untuk melindungi pekerja.\n\nPembahasan:\n労働基準法 dibuat untuk melindungi hak dan kondisi kerja pekerja karena posisi pekerja biasanya lebih lemah dibanding perusahaan.\n\nPilihan lain salah karena:\n\nB = pekerja bukan pihak yang lebih kuat ❌\nC = bukan khusus melindungi kepala pekerja ❌\nD = bukan untuk melindungi pelanggan ❌"

},

  {
question:
"<ruby>作業<rt>さぎょう</rt></ruby>が<ruby>不安定<rt>ふあんてい</rt></ruby>で<ruby>品質<rt>ひんしつ</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>ではないことはなんといいますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. ムリ",

"B. ムダ",

"C. ムラ",

"D. スムーズ"

],

answer:2,

explanation:
"Arti Soal:\nApa istilah untuk pekerjaan yang tidak stabil dan kualitasnya tidak konsisten?\n\nC. ムラ\n\nArtinya:\nKetidakkonsistenan / variasi tidak stabil.\n\nPembahasan:\nムラ berarti kondisi pekerjaan atau kualitas yang tidak stabil dan tidak seragam.\n\nPilihan lain salah karena:\n\nA = pekerjaan berlebihan/melebihi kemampuan ❌\nB = pemborosan ❌\nD = lancar/mulus ❌"

},

  {
question:
"<ruby>建物<rt>たてもの</rt></ruby>が<ruby>立<rt>た</rt></ruby>つ<ruby>土地<rt>とち</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さは<ruby>何<rt>なん</rt></ruby>というか。",

options:[

"A. ＧＬ",

"B. ＦＬ",

"C. ＦＨ",

"D. ＳＬ"

],

answer:0,

explanation:
"Arti Soal:\nApa istilah untuk ketinggian permukaan tanah tempat bangunan berdiri?\n\nA. ＧＬ\n\nArtinya:\nGround Level (permukaan tanah).\n\nPembahasan:\nＧＬ adalah singkatan dari Ground Level yaitu tinggi permukaan tanah pada lokasi bangunan.\n\nPilihan lain salah karena:\n\nB = Floor Level ❌\nC = tinggi tertentu/floor height ❌\nD = bukan istilah permukaan tanah ❌"

},
  
{
question:
"<ruby>公共<rt>こうきょう</rt></ruby>の<ruby>下水道<rt>げすいどう</rt></ruby>を<ruby>流<rt>なが</rt></ruby>してはいけない<ruby>理由<rt>りゆう</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しくないものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>下水道<rt>げすいどう</rt></ruby><ruby>施設<rt>しせつ</rt></ruby>を<ruby>腐食<rt>ふしょく</rt></ruby>させる",

"B. <ruby>下水道<rt>げすいどう</rt></ruby><ruby>管内<rt>かんない</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>危険<rt>きけん</rt></ruby>にする",

"C. <ruby>下水道<rt>げすいどう</rt></ruby><ruby>処理施設<rt>しょりしせつ</rt></ruby>における<ruby>生物処理<rt>せいぶつしょり</rt></ruby>の<ruby>機能<rt>きのう</rt></ruby>を<ruby>増速<rt>ぞうそく</rt></ruby>させる",

"D. <ruby>下水道<rt>げすいどう</rt></ruby><ruby>処理施設<rt>しょりしせつ</rt></ruby>などで<ruby>発生<rt>はっせい</rt></ruby>した<ruby>汚泥<rt>おでい</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>、<ruby>処分<rt>しょぶん</rt></ruby>を<ruby>困難<rt>こんなん</rt></ruby>にする"

],

answer:2,

explanation:
"Arti Soal:\nPilih alasan yang tidak benar mengenai mengapa sesuatu tidak boleh dialirkan ke saluran pembuangan umum.\n\nC. 下水道(げすいどう)処理施設(しょりしせつ)における生物(せいぶつ)処理(しょり)の機能(きのう)を増速(ぞうそく)させる\n\nArtinya:\nMempercepat fungsi pengolahan biologis di fasilitas pengolahan limbah.\n\nPembahasan:\nPernyataan ini salah karena zat berbahaya justru mengganggu fungsi pengolahan biologis, bukan mempercepatnya.\n\nPilihan lain benar karena:\n\nA = dapat merusak fasilitas saluran ❌\nB = membahayakan pekerjaan dalam saluran ❌\nD = menyulitkan pengolahan lumpur limbah ❌"

},

  {
question:
"<ruby>建築現場<rt>けんちくげんば</rt></ruby>などで<ruby>発破<rt>はっぱ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>業務<rt>ぎょうむ</rt></ruby>につくには<ruby>何<rt>なん</rt></ruby>の<ruby>免許<rt>めんきょ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>ですか。",

options:[

"A. <ruby>発破技師免許<rt>はっぱぎしめんきょ</rt></ruby>",

"B. <ruby>特別教育修了<rt>とくべつきょういくしゅうりょう</rt></ruby>",

"C. <ruby>技能講習修了<rt>ぎのうこうしゅうしゅうりょう</rt></ruby>",

"D. <ruby>運転士<rt>うんてんし</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nUntuk bekerja melakukan peledakan di lokasi konstruksi, lisensi apa yang diperlukan?\n\nA. 発破技師免許(はっぱぎしめんきょ)\n\nArtinya:\nLisensi teknisi peledakan.\n\nPembahasan:\nPekerjaan peledakan (発破) memerlukan lisensi resmi yaitu 発破技師免許 karena termasuk pekerjaan berbahaya.\n\nPilihan lain salah karena:\n\nB = hanya sertifikat pendidikan khusus ❌\nC = hanya sertifikat pelatihan keterampilan ❌\nD = pengemudi/operator ❌"

},

  {
question:
"<ruby>手待<rt>てま</rt></ruby>ちの<ruby>原因<rt>げんいん</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。<ruby>相応<rt>ふさわ</rt></ruby>しくないものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>工程管理<rt>こうていかんり</rt></ruby>のミス",

"B. <ruby>前工程<rt>ぜんこうてい</rt></ruby>の<ruby>遅<rt>おく</rt></ruby>れ",

"C. <ruby>材料<rt>ざいりょう</rt></ruby>や<ruby>資機材<rt>しきざい</rt></ruby>の<ruby>十分<rt>じゅうぶん</rt></ruby>",

"D. <ruby>共通機械<rt>きょうつうきかい</rt></ruby>の<ruby>使用待<rt>しようま</rt></ruby>ち"

],

answer:2,

explanation:
"Arti Soal:\nApa penyebab waktu menunggu pekerjaan (手待ち)? Pilih yang tidak sesuai.\n\nC. 材料(ざいりょう)や資機材(しきざい)の十分(じゅうぶん)\n\nArtinya:\nMaterial dan perlengkapan yang cukup.\n\nPembahasan:\nJika material dan perlengkapan sudah cukup, maka itu bukan penyebab 手待ち (waktu menunggu pekerjaan).\n\nPilihan lain benar sebagai penyebab 手待ち karena:\n\nA = kesalahan manajemen proses ❌\nB = keterlambatan proses sebelumnya ❌\nD = menunggu penggunaan mesin bersama ❌"

},

  {
question:
"<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>では、<ruby>事業場<rt>じぎょうば</rt></ruby>の<ruby>規模<rt>きぼ</rt></ruby>が 50 <ruby>以上<rt>いじょう</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>を<ruby>選任<rt>せんにん</rt></ruby>することが<ruby>義務<rt>ぎむ</rt></ruby>つけられていますか。",

options:[

"A. <ruby>発注者<rt>はっちゅうしゃ</rt></ruby>",

"B. <ruby>監督者<rt>かんとくしゃ</rt></ruby>",

"C. <ruby>安全管理者<rt>あんぜんかんりしゃ</rt></ruby>と<ruby>衛生管理者<rt>えいせいかんりしゃ</rt></ruby>",

"D. <ruby>係長<rt>かかりちょう</rt></ruby>"

],

answer:2,

explanation:
"Arti Soal:\nMenurut Undang-Undang Keselamatan dan Kesehatan Kerja, jika tempat kerja memiliki 50 orang atau lebih, siapa yang wajib ditunjuk?\n\nC. 安全管理者(あんぜんかんりしゃ)と衛生管理者(えいせいかんりしゃ)\n\nArtinya:\nPetugas keselamatan dan petugas kesehatan kerja.\n\nPembahasan:\nBerdasarkan 労働安全衛生法, tempat kerja dengan skala tertentu wajib menunjuk 安全管理者 dan 衛生管理者.\n\nPilihan lain salah karena:\n\nA = pemberi proyek ❌\nB = pengawas umum ❌\nD = kepala bagian ❌"

},

  {
question:
"<ruby>職場<rt>しょくば</rt></ruby>の<ruby>上司<rt>じょうし</rt></ruby>や<ruby>先輩<rt>せんぱい</rt></ruby>が<ruby>部下<rt>ぶか</rt></ruby>や<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して、<ruby>知識<rt>ちしき</rt></ruby>や<ruby>技術<rt>ぎじゅつ</rt></ruby>などを<ruby>身<rt>み</rt></ruby>につけさせる<ruby>教育<rt>きょういく</rt></ruby>のことは<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. OJT",

"B. OJB",

"C. JBT",

"D. ADL"

],

answer:0,

explanation:
"Arti Soal:\nApa istilah untuk pendidikan di tempat kerja dimana atasan atau senior mengajarkan pengetahuan dan keterampilan kepada bawahan atau junior?\n\nA. OJT\n\nArtinya:\nOn the Job Training.\n\nPembahasan:\nOJT adalah metode pelatihan langsung di tempat kerja dengan bimbingan atasan atau senior.\n\nPilihan lain salah karena:\n\nB = bukan istilah pelatihan yang benar ❌\nC = bukan istilah umum pendidikan kerja ❌\nD = istilah berbeda di bidang lain ❌"

},

  {
question:
"<ruby>ダム工事<rt>こうじ</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>は2つあります。「<ruby>治水<rt>ちすい</rt></ruby>」ともうひとつあります。どれですか。",

options:[

"A. <ruby>排水<rt>はいすい</rt></ruby>",

"B. <ruby>利水<rt>りすい</rt></ruby>",

"C. <ruby>補水<rt>ほすい</rt></ruby>",

"D. <ruby>香水<rt>こうすい</rt></ruby>"

],

answer:1,

explanation:
"Arti Soal:\nPekerjaan pembangunan bendungan memiliki dua tujuan. Selain pengendalian banjir (治水), apa tujuan lainnya?\n\nB. 利水(りすい)\n\nArtinya:\nPemanfaatan air.\n\nPembahasan:\nTujuan utama pembangunan bendungan adalah 治水 (pengendalian banjir) dan 利水 (pemanfaatan air untuk kehidupan, pertanian, listrik, dan lainnya).\n\nPilihan lain salah karena:\n\nA = pembuangan air ❌\nC = penambahan air ❌\nD = parfum ❌"

},

 {
question:
"<ruby>建設業法<rt>けんせつぎょうほう</rt></ruby>は<ruby>何<rt>なん</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>に<ruby>定<rt>さだ</rt></ruby>められた<ruby>法律<rt>ほうりつ</rt></ruby>ですか。<ruby>相応<rt>ふさわ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>労働者<rt>ろうどうしゃ</rt></ruby>を<ruby>保護<rt>ほご</rt></ruby>するため",

"B. <ruby>建設業<rt>けんせつぎょう</rt></ruby>の<ruby>発達<rt>はったつ</rt></ruby>の<ruby>促進<rt>そくしん</rt></ruby>",

"C. <ruby>公共<rt>こうきょう</rt></ruby>の<ruby>福祉<rt>ふくし</rt></ruby>の<ruby>増進<rt>ぞうしん</rt></ruby>",

"D. <ruby>急<rt>きゅう</rt></ruby>に<ruby>施工<rt>せこう</rt></ruby>の<ruby>確保<rt>かくほ</rt></ruby>"

],

answer:2,

explanation:
"Arti Soal:\nUntuk tujuan apa Undang-Undang Konstruksi (建設業法) ditetapkan?\n\nC. 公共(こうきょう)の福祉(ふくし)の増進(ぞうしん)\n\nArtinya:\nMeningkatkan kesejahteraan umum masyarakat.\n\nPembahasan:\n建設業法 dibuat untuk menjamin pelaksanaan pekerjaan konstruksi yang tepat dan meningkatkan kesejahteraan umum.\n\nPilihan lain salah karena:\n\nA = fokus hukum ketenagakerjaan ❌\nB = hanya salah satu efek, bukan tujuan utama ❌\nD = kalimat tidak tepat ❌"

},

  {
question:
"バイブレータを<ruby>使<rt>つか</rt></ruby>って、コンクリートに<ruby>振動<rt>しんどう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えて<ruby>型枠<rt>かたわく</rt></ruby>の<ruby>隅々<rt>すみずみ</rt></ruby>で<ruby>行<rt>い</rt></ruby>きわたらせ、<ruby>不要<rt>ふよう</rt></ruby>な<ruby>空気<rt>くうき</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>するのはどんな<ruby>作業<rt>さぎょう</rt></ruby>ですか。<ruby>相応<rt>ふさ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>締<rt>し</rt></ruby>め<ruby>固<rt>かた</rt></ruby>め",

"B. <ruby>練<rt>ね</rt></ruby>り<ruby>混<rt>ま</rt></ruby>ぜ",

"C. <ruby>配合<rt>はいごう</rt></ruby>",

"D. <ruby>打<rt>う</rt></ruby>ち<ruby>継<rt>つ</rt></ruby>ぎ"

],

answer:0,

explanation:
"Arti Soal:\nPekerjaan menggunakan vibrator untuk memberikan getaran pada beton agar merata sampai ke sudut cetakan dan menghilangkan udara yang tidak diperlukan disebut apa?\n\nA. 締(し)め固(かた)め\n\nArtinya:\nPemadatan beton.\n\nPembahasan:\n締め固め adalah proses memadatkan beton menggunakan vibrator agar tidak ada rongga udara dan beton menjadi kuat serta merata.\n\nPilihan lain salah karena:\n\nB = proses mencampur beton ❌\nC = komposisi campuran ❌\nD = penyambungan pengecoran ❌"

},

  {
question:
"<ruby>危険予知<rt>きけんよち</rt></ruby>（KY）<ruby>活動<rt>かつどう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をやりますか。<ruby>間違<rt>まちが</rt></ruby>っているものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>危険予知<rt>きけんよち</rt></ruby>（KY）<ruby>活動<rt>かつどう</rt></ruby>と <ruby>危険予知訓練<rt>きけんよちくんれん</rt></ruby>（KYT)",

"B. <ruby>危険予知<rt>きけんよち</rt></ruby>（KY）<ruby>活動<rt>かつどう</rt></ruby>における<ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>",

"C. <ruby>危険予知訓練<rt>きけんよちくんれん</rt></ruby>（KYT）の<ruby>進<rt>すす</rt></ruby>め<ruby>方<rt>かた</rt></ruby>",

"D. <ruby>指差<rt>ゆびさ</rt></ruby>し<ruby>呼称<rt>こしょう</rt></ruby>の<ruby>必要性<rt>ひつようせい</rt></ruby>"

],

answer:3,

explanation:
"Arti Soal:\nApa yang dilakukan dalam aktivitas prediksi bahaya (KY)? Pilih yang salah.\n\nD. 指差(ゆびさ)し呼称(こしょう)の必要性(ひつようせい)\n\nArtinya:\nPentingnya menunjuk dan menyebut.\n\nPembahasan:\n指差し呼称 memang berhubungan dengan keselamatan kerja, tetapi bukan bagian utama dari isi kegiatan KY yang dimaksud pada soal.\n\nPilihan lain benar karena:\n\nA = berkaitan langsung dengan aktivitas dan pelatihan KY ✅\nB = peran pekerja dalam KY ✅\nC = cara menjalankan KYT ✅"

},

  {
question:
"<ruby>免許<rt>めんきょ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>なトランシーバーを<ruby>無免許<rt>むめんきょ</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>すると<ruby>違反<rt>いはん</rt></ruby>になる<ruby>法<rt>ほう</rt></ruby>は<ruby>何<rt>なん</rt></ruby>というか。",

options:[

"A. <ruby>電気通信事業法<rt>でんきつうしんじぎょうほう</rt></ruby>",

"B. <ruby>電波法<rt>でんぱほう</rt></ruby>",

"C. <ruby>航空法<rt>こうくうほう</rt></ruby>",

"D. <ruby>電気事業法<rt>でんきじぎょうほう</rt></ruby>"

],

answer:1,

explanation:
"Arti Soal:\nUndang-undang apa yang dilanggar jika menggunakan handy talky yang memerlukan izin tanpa lisensi?\n\nB. 電波法(でんぱほう)\n\nArtinya:\nUndang-Undang Gelombang Radio.\n\nPembahasan:\nPenggunaan alat komunikasi radio tanpa izin termasuk pelanggaran terhadap 電波法.\n\nPilihan lain salah karena:\n\nA = hukum bisnis telekomunikasi ❌\nC = hukum penerbangan ❌\nD = hukum kelistrikan ❌"

},

  {
question:
"<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>は5<ruby>種類<rt>しゅるい</rt></ruby>あります。その<ruby>中<rt>なか</rt></ruby>にないものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. ウレタン<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>",

"B. シート<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>",

"C. アスファルト<ruby>防止工事<rt>ぼうしこうじ</rt></ruby>",

"D. クロス<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>"

],

answer:3,

explanation:
"Arti Soal:\nPilih jenis pekerjaan waterproofing yang tidak termasuk dalam 5 jenis waterproofing.\n\nD. クロス防水工事(ぼうすいこうじ)\n\nArtinya:\nPekerjaan waterproofing cross.\n\nPembahasan:\nクロス防水工事 bukan jenis umum pekerjaan waterproofing.\n\nPilihan lain benar karena:\n\nA = waterproofing urethane ✅\nB = waterproofing sheet ✅\nC = waterproofing asphalt ✅"

},

  {
question:
"<ruby>造園<rt>ぞうえん</rt></ruby>に<ruby>含<rt>ふく</rt></ruby>まれない<ruby>工事<rt>こうじ</rt></ruby>を<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>植栽工事<rt>しょくさいこうじ</rt></ruby>",

"B. <ruby>広場工事<rt>ひろばこうじ</rt></ruby>",

"C. <ruby>屋上緑化工事<rt>おくじょうりょっかこうじ</rt></ruby>",

"D. <ruby>塗装工事<rt>とそうこうじ</rt></ruby>"

],

answer:3,

explanation:
"Arti Soal:\nPilih pekerjaan yang tidak termasuk pekerjaan landscaping (造園).\n\nD. 塗装工事(とそうこうじ)\n\nArtinya:\nPekerjaan pengecatan.\n\nPembahasan:\n塗装工事 bukan bagian dari pekerjaan landscaping atau taman.\n\nPilihan lain benar karena:\n\nA = pekerjaan penanaman ✅\nB = pekerjaan area lapangan/taman ✅\nC = penghijauan atap bangunan ✅"

},

  {
question:
"<ruby>建設業<rt>けんせつぎょう</rt></ruby>での<ruby>整頓<rt>せいとん</rt></ruby>の<ruby>定義<rt>ていぎ</rt></ruby>はどれですか。<ruby>正<rt>ただ</rt></ruby>しいものを<ruby>一<rt>ひと</rt></ruby>つ<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>必要<rt>ひつよう</rt></ruby>なものと<ruby>不必要<rt>ふひつよう</rt></ruby>なものはしょぶんして、<ruby>後<rt>あと</rt></ruby>で<ruby>使<rt>つか</rt></ruby>うものはしまっておくことです",

"B. <ruby>決<rt>き</rt></ruby>められたことやルールをいつも<ruby>正<rt>ただ</rt></ruby>しく<ruby>守<rt>まも</rt></ruby>る",

"C. <ruby>清潔<rt>せいけつ</rt></ruby>とは、<ruby>整理<rt>せいり</rt></ruby>・<ruby>整頓<rt>せいとん</rt></ruby>・<ruby>清掃<rt>せいそう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>汚<rt>よご</rt></ruby>れが<ruby>無<rt>な</rt></ruby>い<ruby>状態<rt>じょうたい</rt></ruby>を<ruby>保<rt>たも</rt></ruby>つことです",

"D. <ruby>整理<rt>せいり</rt></ruby>したものを<ruby>探<rt>さが</rt></ruby>しやすく<ruby>配置<rt>はいち</rt></ruby>する"

],

answer:3,

explanation:
"Arti Soal:\nApa definisi 整頓 (penataan/ringkas rapi) dalam industri konstruksi?\n\nD. 整理(せいり)したものを探(さが)しやすく配置(はいち)する\n\nArtinya:\nMenata barang yang sudah dirapikan agar mudah dicari.\n\nPembahasan:\n整頓 berarti menempatkan dan mengatur barang secara rapi agar mudah ditemukan dan digunakan.\n\nPilihan lain salah karena:\n\nA = definisi 整理 ❌\nB = definisi disiplin ❌\nC = definisi 清潔 ❌"

},

  {
question:
"<ruby>安全衛生活動<rt>あんぜんえいせいかつどう</rt></ruby>として、<ruby>一般的<rt>いっぱんてき</rt></ruby>に<ruby>何<rt>なに</rt></ruby>か<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>みがおこなわれますか。<ruby>間違<rt>まちが</rt></ruby>っているものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>声<rt>こえ</rt></ruby>を<ruby>聴<rt>き</rt></ruby>く",

"B. <ruby>安全衛生教育<rt>あんぜんえいせいきょういく</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>する",

"C. <ruby>作業手順書<rt>さぎょうてじゅんしょ</rt></ruby>を<ruby>作成<rt>さくせい</rt></ruby>する",

"D. コミュニケーションを<ruby>取<rt>と</rt></ruby>る"

],

answer:0,

explanation:
"Arti Soal:\nSebagai kegiatan keselamatan dan kesehatan kerja, kegiatan apa yang salah?\n\nA. 作業員(さぎょういん)の声(こえ)を聴(き)く\n\nArtinya:\nMendengarkan suara/pendapat pekerja.\n\nPembahasan:\nMendengarkan pendapat pekerja memang penting, tetapi bukan kegiatan utama yang secara umum dikategorikan sebagai aktivitas keselamatan dan kesehatan kerja.\n\nPilihan lain benar karena:\n\nB = pelatihan keselamatan kerja ✅\nC = membuat prosedur kerja ✅\nD = komunikasi kerja ✅"

},

 {
question:
"FHは<ruby>何<rt>なん</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さですか。 <ruby>相応<rt>ふさわ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>計画<rt>けいかく</rt></ruby>している<ruby>土地<rt>とち</rt></ruby>",

"B. <ruby>床<rt>ゆか</rt></ruby>の<ruby>仕上<rt>しあ</rt></ruby>がり<ruby>面<rt>めん</rt></ruby>",

"C. <ruby>壁<rt>かべ</rt></ruby>",

"D. <ruby>天井<rt>てんじょう</rt></ruby>"

],

answer:1,

explanation:
"Arti Soal:\nFH menunjukkan ketinggian apa?\n\nB. 床(ゆか)の仕上(しあ)がり面(めん)\n\nArtinya:\nPermukaan akhir lantai.\n\nPembahasan:\nFH adalah singkatan dari Floor Height atau Floor Level yang menunjukkan tinggi permukaan lantai selesai.\n\nPilihan lain salah karena:\n\nA = tanah rencana ❌\nC = dinding ❌\nD = langit-langit ❌"

},

{
question:
"5S <ruby>活動<rt>かつどう</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。 <ruby>間違<rt>まちが</rt></ruby>っているものを<ruby>選<rt>えら</rt></ruby>びなさい。",

options:[

"A. <ruby>安全<rt>あんぜん</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>",

"B. <ruby>原価<rt>げんか</rt></ruby>の<ruby>低減<rt>ていげん</rt></ruby>",

"C. <ruby>健康<rt>けんこう</rt></ruby><ruby>向上<rt>こうじょう</rt></ruby>",

"D. <ruby>品質<rt>ひんしつ</rt></ruby><ruby>向上<rt>こうじょう</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nApa tujuan dari aktivitas 5S? Pilih yang salah.\n\nA. 安全(あんぜん)の確認(かくにん)\n\nArtinya:\nPemeriksaan keselamatan.\n\nPembahasan:\nTujuan utama 5S adalah meningkatkan efisiensi kerja, kualitas, dan kesehatan lingkungan kerja, bukan sekadar pemeriksaan keselamatan.\n\nPilihan lain benar karena:\n\nB = mengurangi biaya ✅\nC = meningkatkan kesehatan kerja ✅\nD = meningkatkan kualitas ✅"

}
 
],


paket2:[

{
question:
"<ruby>足場<rt>あしば</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>も<ruby>大切<rt>たいせつ</rt></ruby>なことは<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>作業<rt>さぎょう</rt></ruby>を<ruby>早<rt>はや</rt></ruby>く<ruby>終<rt>お</rt></ruby>わらせること",

"B. <ruby>安全帯<rt>あんぜんたい</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>すること",

"C. <ruby>大声<rt>おおごえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>すこと",

"D. <ruby>道具<rt>どうぐ</rt></ruby>を<ruby>少<rt>すく</rt></ruby>なくすること"

],

answer:1,

explanation:
"Arti Soal:\nApa hal yang paling penting dalam pekerjaan scaffolding?\n\nB. 安全帯(あんぜんたい)を使用(しよう)すること\n\nArtinya:\nMenggunakan safety belt.\n\nPembahasan:\nPada pekerjaan di ketinggian, penggunaan safety belt sangat penting untuk mencegah kecelakaan jatuh.\n\nPilihan lain salah karena:\n\nA = kecepatan bukan prioritas utama ❌\nC = berbicara keras tidak berkaitan dengan keselamatan ❌\nD = mengurangi alat bukan faktor utama ❌"

},

{
question:
"<ruby>鉄筋<rt>てっきん</rt></ruby>コンクリートの<ruby>建物<rt>たてもの</rt></ruby>で、<ruby>鉄筋<rt>てっきん</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>圧縮力<rt>あっしゅくりょく</rt></ruby>だけを<ruby>支<rt>ささ</rt></ruby>える",

"B. <ruby>引張力<rt>ひっぱりりょく</rt></ruby>を<ruby>強<rt>つよ</rt></ruby>くする",

"C. <ruby>色<rt>いろ</rt></ruby>を<ruby>良<rt>よ</rt></ruby>くする",

"D. <ruby>防水<rt>ぼうすい</rt></ruby>だけを<ruby>行<rt>おこな</rt></ruby>う"

],

answer:1,

explanation:
"Arti Soal:\nApa fungsi besi tulangan pada bangunan beton bertulang?\n\nB. 引張力(ひっぱりりょく)を強(つよ)くする\n\nArtinya:\nMemperkuat gaya tarik.\n\nPembahasan:\nBesi tulangan digunakan untuk memperkuat kekuatan tarik pada beton.\n\nPilihan lain salah karena:\n\nA = beton menahan tekan, bukan hanya besi ❌\nC = bukan untuk memperindah warna ❌\nD = bukan khusus waterproofing ❌"

},

{
question:
"<ruby>高所作業<rt>こうしょさぎょう</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>する<ruby>保護具<rt>ほごぐ</rt></ruby>はどれですか。",

options:[

"A. ヘルメットと<ruby>安全帯<rt>あんぜんたい</rt></ruby>",

"B. サンダル",

"C. タオル",

"D. <ruby>軍手<rt>ぐんて</rt></ruby>だけ"

],

answer:0,

explanation:
"Arti Soal:\nAlat pelindung apa yang digunakan saat bekerja di tempat tinggi?\n\nA. ヘルメットと安全帯(あんぜんたい)\n\nArtinya:\nHelm dan safety belt.\n\nPembahasan:\nPekerjaan di tempat tinggi wajib menggunakan APD untuk keselamatan.\n\nPilihan lain salah karena:\n\nB = sandal tidak aman ❌\nC = handuk bukan alat pelindung ❌\nD = sarung tangan saja tidak cukup ❌"

},

{
question:
"コンクリートを<ruby>打設<rt>だせつ</rt></ruby>した<ruby>後<rt>あと</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>作業<rt>さぎょう</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>養生<rt>ようじょう</rt></ruby>",

"B. <ruby>解体<rt>かいたい</rt></ruby>",

"C. <ruby>塗装<rt>とそう</rt></ruby>",

"D. <ruby>掘削<rt>くっさく</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nPekerjaan apa yang diperlukan setelah pengecoran beton?\n\nA. 養生(ようじょう)\n\nArtinya:\nPerawatan beton.\n\nPembahasan:\nBeton perlu dirawat agar mendapatkan kekuatan maksimal.\n\nPilihan lain salah karena:\n\nB = pembongkaran bukan tahap berikutnya ❌\nC = pengecatan bukan proses utama beton ❌\nD = penggalian tidak berkaitan ❌"

},

{
question:
"<ruby>建設現場<rt>けんせつげんば</rt></ruby>でKY<ruby>活動<rt>かつどう</rt></ruby>とは<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>危険予知<rt>きけんよち</rt></ruby><ruby>活動<rt>かつどう</rt></ruby>",

"B. <ruby>給料<rt>きゅうりょう</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>",

"C. <ruby>建物<rt>たてもの</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>",

"D. <ruby>機械<rt>きかい</rt></ruby><ruby>修理<rt>しゅうり</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nApa yang dimaksud dengan aktivitas KY di lokasi konstruksi?\n\nA. 危険予知活動(きけんよちかつどう)\n\nArtinya:\nKegiatan prediksi bahaya.\n\nPembahasan:\nKY dilakukan untuk memprediksi bahaya sebelum pekerjaan dimulai agar mencegah kecelakaan.\n\nPilihan lain salah karena:\n\nB = bukan pengecekan gaji ❌\nC = bukan pemeriksaan bangunan ❌\nD = bukan perbaikan mesin ❌"

},

{
question:
"<ruby>型枠<rt>かたわく</rt></ruby><ruby>工事<rt>こうじ</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. コンクリートの<ruby>形<rt>かたち</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る",

"B. <ruby>鉄<rt>てつ</rt></ruby>を<ruby>切<rt>き</rt></ruby>る",

"C. <ruby>土<rt>つち</rt></ruby>を<ruby>掘<rt>ほ</rt></ruby>る",

"D. ガラスを<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>ける"

],

answer:0,

explanation:
"Arti Soal:\nApa tujuan pekerjaan bekisting?\n\nA. コンクリートの形(かたち)を作(つく)る\n\nArtinya:\nMembentuk beton.\n\nPembahasan:\nBekisting digunakan untuk membentuk beton sesuai bentuk yang direncanakan.\n\nPilihan lain salah karena:\n\nB = bukan pekerjaan memotong besi ❌\nC = bukan pekerjaan menggali tanah ❌\nD = bukan pemasangan kaca ❌"

},

{
question:
"<ruby>建築図面<rt>けんちくずめん</rt></ruby>で「GL」とは<ruby>何<rt>なん</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>しますか。",

options:[

"A. <ruby>地盤面<rt>じばんめん</rt></ruby>",

"B. <ruby>天井<rt>てんじょう</rt></ruby>",

"C. <ruby>屋根<rt>やね</rt></ruby>",

"D. <ruby>柱<rt>はしら</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nPada gambar bangunan, apa arti GL?\n\nA. 地盤面(じばんめん)\n\nArtinya:\nPermukaan tanah.\n\nPembahasan:\nGL adalah singkatan dari Ground Level.\n\nPilihan lain salah karena:\n\nB = langit-langit ❌\nC = atap ❌\nD = tiang ❌"

},

{
question:
"クレーン<ruby>作業中<rt>さぎょうちゅう</rt></ruby>にしてはいけないことは<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>荷<rt>に</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る",

"B. <ruby>合図<rt>あいず</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する",

"C. <ruby>周囲<rt>しゅうい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する",

"D. <ruby>安全<rt>あんぜん</rt></ruby>に<ruby>作業<rt>さぎょう</rt></ruby>する"

],

answer:0,

explanation:
"Arti Soal:\nApa yang tidak boleh dilakukan saat pekerjaan crane?\n\nA. 荷(に)の下(した)に入(はい)る\n\nArtinya:\nMasuk ke bawah barang angkat.\n\nPembahasan:\nMasuk ke bawah beban crane sangat berbahaya dan dapat menyebabkan kecelakaan fatal.\n\nPilihan lain salah karena:\n\nB = harus dilakukan ✅\nC = harus dilakukan ✅\nD = tindakan yang benar ✅"

},

{
question:
"<ruby>建築材料<rt>けんちくざいりょう</rt></ruby>の<ruby>木材<rt>もくざい</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>軽<rt>かる</rt></ruby>く<ruby>加工<rt>かこう</rt></ruby>しやすい",

"B. <ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>燃<rt>も</rt></ruby>えない",

"C. <ruby>錆<rt>さ</rt></ruby>びる",

"D. <ruby>水<rt>みず</rt></ruby>に<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>強<rt>つよ</rt></ruby>い"

],

answer:0,

explanation:
"Arti Soal:\nApa karakteristik kayu sebagai bahan bangunan?\n\nA. 軽(かる)く加工(かこう)しやすい\n\nArtinya:\nRingan dan mudah diproses.\n\nPembahasan:\nKayu mudah dipotong dan dibentuk sehingga banyak digunakan dalam konstruksi.\n\nPilihan lain salah karena:\n\nB = kayu bisa terbakar ❌\nC = kayu tidak berkarat ❌\nD = kayu tidak sepenuhnya tahan air ❌"

},

{
question:
"<ruby>作業開始前<rt>さぎょうかいしまえ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>点検<rt>てんけん</rt></ruby>で<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>機械<rt>きかい</rt></ruby>や<ruby>工具<rt>こうぐ</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>",

"B. <ruby>何<rt>なに</rt></ruby>もしない",

"C. <ruby>道具<rt>どうぐ</rt></ruby>を<ruby>投<rt>な</rt></ruby>げる",

"D. <ruby>休憩<rt>きゅうけい</rt></ruby>だけする"

],

answer:0,

explanation:
"Arti Soal:\nApa pemeriksaan yang benar sebelum memulai pekerjaan?\n\nA. 機械(きかい)や工具(こうぐ)の確認(かくにん)\n\nArtinya:\nMemeriksa mesin dan alat.\n\nPembahasan:\nPemeriksaan alat sebelum bekerja penting untuk mencegah kerusakan dan kecelakaan.\n\nPilihan lain salah karena:\n\nB = berbahaya jika tidak memeriksa ❌\nC = tidak aman ❌\nD = bukan pemeriksaan kerja ❌"

},

{
question:
"<ruby>建設現場<rt>けんせつげんば</rt></ruby>で「5S」に<ruby>含<rt>ふく</rt></ruby>まれないものはどれですか。",

options:[

"A. <ruby>整理<rt>せいり</rt></ruby>",

"B. <ruby>整頓<rt>せいとん</rt></ruby>",

"C. <ruby>清掃<rt>せいそう</rt></ruby>",

"D. <ruby>運転<rt>うんてん</rt></ruby>"

],

answer:3,

explanation:
"Arti Soal:\nYang tidak termasuk 5S di lokasi konstruksi adalah apa?\n\nD. 運転(うんてん)\n\nArtinya:\nMengemudi.\n\nPembahasan:\n5S terdiri dari 整理・整頓・清掃・清潔・しつけ.\n\nPilihan lain benar karena:\n\nA = Seiri ✅\nB = Seiton ✅\nC = Seisou ✅"

},

{
question:
"<ruby>鉄骨<rt>てっこつ</rt></ruby><ruby>工事<rt>こうじ</rt></ruby>でボルトを<ruby>締<rt>し</rt></ruby>める<ruby>目的<rt>もくてき</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>部材<rt>ぶざい</rt></ruby>を<ruby>固定<rt>こてい</rt></ruby>する",

"B. <ruby>色<rt>いろ</rt></ruby>を<ruby>変<rt>か</rt></ruby>える",

"C. <ruby>重<rt>おも</rt></ruby>くする",

"D. <ruby>水<rt>みず</rt></ruby>を<ruby>流<rt>なが</rt></ruby>す"

],

answer:0,

explanation:
"Arti Soal:\nApa tujuan mengencangkan baut pada pekerjaan baja?\n\nA. 部材(ぶざい)を固定(こてい)する\n\nArtinya:\nMengikat/mengunci komponen.\n\nPembahasan:\nBaut digunakan untuk menyambung dan mengikat struktur baja.\n\nPilihan lain salah karena:\n\nB = bukan mengubah warna ❌\nC = bukan membuat berat ❌\nD = bukan mengalirkan air ❌"

},

{
question:
"コンクリートの<ruby>材料<rt>ざいりょう</rt></ruby>に<ruby>含<rt>ふく</rt></ruby>まれないものはどれですか。",

options:[

"A. セメント",

"B. <ruby>水<rt>みず</rt></ruby>",

"C. <ruby>骨材<rt>こつざい</rt></ruby>",

"D. <ruby>木材<rt>もくざい</rt></ruby>"

],

answer:3,

explanation:
"Arti Soal:\nYang tidak termasuk bahan beton adalah apa?\n\nD. 木材(もくざい)\n\nArtinya:\nKayu.\n\nPembahasan:\nBeton dibuat dari semen, air, dan agregat.\n\nPilihan lain benar karena:\n\nA = bahan beton ✅\nB = bahan beton ✅\nC = bahan beton ✅"

},

{
question:
"<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby><ruby>対策<rt>たいさく</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>水分補給<rt>すいぶんほきゅう</rt></ruby>をする",

"B. <ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>まない",

"C. <ruby>無理<rt>むり</rt></ruby>をする",

"D. ヘルメットを<ruby>外<rt>はず</rt></ruby>す"

],

answer:0,

explanation:
"Arti Soal:\nManakah tindakan yang benar untuk mencegah heatstroke?\n\nA. 水分補給(すいぶんほきゅう)をする\n\nArtinya:\nMinum/cukup cairan.\n\nPembahasan:\nMencegah dehidrasi penting untuk menghindari heatstroke.\n\nPilihan lain salah karena:\n\nB = berbahaya ❌\nC = memaksakan diri ❌\nD = helm tetap harus dipakai ❌"

},

{
question:
"<ruby>建築現場<rt>けんちくげんば</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>するヘルメットの<ruby>目的<rt>もくてき</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>頭<rt>あたま</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る",

"B. <ruby>荷物<rt>にもつ</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>ぶ",

"C. <ruby>音<rt>おと</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくする",

"D. <ruby>足<rt>あし</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る"

],

answer:0,

explanation:
"Arti Soal:\nApa tujuan penggunaan helm di lokasi konstruksi?\n\nA. 頭(あたま)を守(まも)る\n\nArtinya:\nMelindungi kepala.\n\nPembahasan:\nHelm melindungi kepala dari benturan dan benda jatuh.\n\nPilihan lain salah karena:\n\nB = bukan untuk membawa barang ❌\nC = bukan pengeras suara ❌\nD = bukan pelindung kaki ❌"

},

{
question:
"<ruby>建築図面<rt>けんちくずめん</rt></ruby>で<ruby>寸法<rt>すんぽう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>理由<rt>りゆう</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>正確<rt>せいかく</rt></ruby>に<ruby>施工<rt>せこう</rt></ruby>するため",

"B. <ruby>休憩<rt>きゅうけい</rt></ruby>するため",

"C. <ruby>道具<rt>どうぐ</rt></ruby>を<ruby>減<rt>へ</rt></ruby>らすため",

"D. <ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くため"

],

answer:0,

explanation:
"Arti Soal:\nApa alasan memeriksa ukuran pada gambar bangunan?\n\nA. 正確(せいかく)に施工(せこう)するため\n\nArtinya:\nAgar pekerjaan konstruksi dilakukan dengan tepat.\n\nPembahasan:\nMemeriksa ukuran pada gambar penting untuk menghindari kesalahan konstruksi.\n\nPilihan lain salah karena:\n\nB = bukan untuk istirahat ❌\nC = bukan untuk mengurangi alat ❌\nD = bukan untuk mendengarkan musik ❌"

},

{
question:
"<ruby>電動工具<rt>でんどうこうぐ</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>するときに<ruby>必要<rt>ひつよう</rt></ruby>なことは<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>点検<rt>てんけん</rt></ruby>をする",

"B. <ruby>水<rt>みず</rt></ruby>をかける",

"C. <ruby>投<rt>な</rt></ruby>げる",

"D. <ruby>分解<rt>ぶんかい</rt></ruby>する"

],

answer:0,

explanation:
"Arti Soal:\nApa yang perlu dilakukan saat menggunakan alat listrik?\n\nA. 点検(てんけん)をする\n\nArtinya:\nMelakukan pemeriksaan.\n\nPembahasan:\nPemeriksaan alat penting untuk mencegah kecelakaan kerja.\n\nPilihan lain salah karena:\n\nB = berbahaya ❌\nC = tidak aman ❌\nD = bukan prosedur penggunaan ❌"

},

{
question:
"「<ruby>避難経路<rt>ひなんけいろ</rt></ruby>」とは<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>災害時<rt>さいがいじ</rt></ruby>に<ruby>逃<rt>に</rt></ruby>げる<ruby>道<rt>みち</rt></ruby>",

"B. <ruby>車<rt>くるま</rt></ruby>を<ruby>止<rt>と</rt></ruby>める<ruby>場所<rt>ばしょ</rt></ruby>",

"C. <ruby>材料置場<rt>ざいりょうおきば</rt></ruby>",

"D. <ruby>休憩所<rt>きゅうけいじょ</rt></ruby>"

],

answer:0,

explanation:
"Arti Soal:\nApa yang dimaksud dengan jalur evakuasi?\n\nA. 災害時(さいがいじ)に逃(に)げる道(みち)\n\nArtinya:\nJalan untuk menyelamatkan diri saat bencana.\n\nPembahasan:\nJalur evakuasi digunakan saat keadaan darurat.\n\nPilihan lain salah karena:\n\nB = tempat parkir ❌\nC = tempat material ❌\nD = tempat istirahat ❌"

},

{
question:
"<ruby>建築工事<rt>けんちくこうじ</rt></ruby>で<ruby>水平<rt>すいへい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>工具<rt>こうぐ</rt></ruby>はどれですか。",

options:[

"A. <ruby>水平器<rt>すいへいき</rt></ruby>",

"B. ハンマー",

"C. スコップ",

"D. ペンチ"

],

answer:0,

explanation:
"Arti Soal:\nAlat apa yang digunakan untuk memeriksa kerataan/horizontal?\n\nA. 水平器(すいへいき)\n\nArtinya:\nWaterpass/alat ukur horizontal.\n\nPembahasan:\n水平器 digunakan untuk memastikan permukaan rata.\n\nPilihan lain salah karena:\n\nB = alat pemukul ❌\nC = alat gali ❌\nD = alat penjepit ❌"

},

{
question:
"<ruby>作業中<rt>さぎょうちゅう</rt></ruby>に<ruby>危険<rt>きけん</rt></ruby>を<ruby>発見<rt>はっけん</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>、<ruby>最初<rt>さいしょ</rt></ruby>にすることは<ruby>何<rt>なん</rt></ruby>ですか。",

options:[

"A. <ruby>上司<rt>じょうし</rt></ruby>へ<ruby>報告<rt>ほうこく</rt></ruby>する",

"B. <ruby>無視<rt>むし</rt></ruby>する",

"C. <ruby>写真<rt>しゃしん</rt></ruby>だけ<ruby>撮<rt>と</rt></ruby>る",

"D. <ruby>走<rt>はし</rt></ruby>る"

],

answer:0,

explanation:
"Arti Soal:\nApa yang pertama dilakukan jika menemukan bahaya saat bekerja?\n\nA. 上司(じょうし)へ報告(ほうこく)する\n\nArtinya:\nMelapor kepada atasan.\n\nPembahasan:\nBahaya harus segera dilaporkan untuk mencegah kecelakaan.\n\nPilihan lain salah karena:\n\nB = berbahaya jika diabaikan ❌\nC = tidak cukup hanya foto ❌\nD = bukan tindakan utama ❌"

},

{
question:
"<ruby>建設現場<rt>けんせつげんば</rt></ruby>で<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>高所作業<rt>こうしょさぎょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うとき、<ruby>安全帯<rt>あんぜんたい</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>しなければなりません。<ruby>安全帯<rt>あんぜんたい</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>使用<rt>しよう</rt></ruby>する<ruby>目的<rt>もくてき</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",

options:[

"A. <ruby>工具<rt>こうぐ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち<ruby>運<rt>はこ</rt></ruby>ぶため",

"B. <ruby>作業服<rt>さぎょうふく</rt></ruby>を<ruby>固定<rt>こてい</rt></ruby>するため",

"C. <ruby>転落<rt>てんらく</rt></ruby><ruby>事故<rt>じこ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐため",

"D. <ruby>作業<rt>さぎょう</rt></ruby>を<ruby>早<rt>はや</rt></ruby>く<ruby>終<rt>お</rt></ruby>わらせるため"

],

answer:2,

explanation:
"Arti Soal:\nApa tujuan utama penggunaan safety belt saat bekerja di tempat tinggi?\n\nC. 転落事故(てんらくじこ)を防(ふせ)ぐため\n\nArtinya:\nUntuk mencegah kecelakaan jatuh.\n\nPembahasan:\nSafety belt digunakan untuk melindungi pekerja dari risiko jatuh.\n\nPilihan lain salah karena:\n\nA = bukan untuk membawa alat ❌\nB = bukan untuk mengikat pakaian ❌\nD = bukan untuk mempercepat pekerjaan ❌"

},

{
question:
"コンクリート<ruby>工事<rt>こうじ</rt></ruby>では、<ruby>打設後<rt>だせつご</rt></ruby>に<ruby>養生<rt>ようじょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>います。<ruby>養生<rt>ようじょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>理由<rt>りゆう</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>工事費<rt>こうじひ</rt></ruby>を<ruby>増<rt>ふ</rt></ruby>やすため",

"B. <ruby>騒音<rt>そうおん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>すため",

"C. <ruby>色<rt>いろ</rt></ruby>を<ruby>変<rt>か</rt></ruby>えるため",

"D. コンクリートの<ruby>強度<rt>きょうど</rt></ruby>を<ruby>高<rt>たか</rt></ruby>めるため"

],

answer:3,

explanation:
"Arti Soal:\nApa alasan melakukan curing/perawatan beton setelah pengecoran?\n\nD. コンクリートの強度(きょうど)を高(たか)めるため\n\nArtinya:\nUntuk meningkatkan kekuatan beton.\n\nPembahasan:\nPerawatan beton penting agar beton mengeras dengan baik dan kuat.\n\nPilihan lain salah karena:\n\nA = bukan untuk menambah biaya ❌\nB = bukan untuk menimbulkan suara ❌\nC = bukan untuk mengubah warna ❌"

},

{
question:
"<ruby>鉄骨<rt>てっこつ</rt></ruby><ruby>工事<rt>こうじ</rt></ruby>では、クレーンを<ruby>使用<rt>しよう</rt></ruby>して<ruby>重量物<rt>じゅうりょうぶつ</rt></ruby>を<ruby>運搬<rt>うんぱん</rt></ruby>します。クレーン<ruby>作業中<rt>さぎょうちゅう</rt></ruby>に<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>注意<rt>ちゅうい</rt></ruby>しなければならないこととして、<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",

options:[

"A. クレーンに<ruby>触<rt>さわ</rt></ruby>ること",

"B. <ruby>作業中<rt>さぎょうちゅう</rt></ruby>に<ruby>走<rt>はし</rt></ruby>ること",

"C. <ruby>荷<rt>に</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>立<rt>た</rt></ruby>つこと",

"D. <ruby>合図者<rt>あいずしゃ</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>に<ruby>従<rt>したが</rt></ruby>うこと"

],

answer:3,

explanation:
"Arti Soal:\nApa hal yang paling tepat diperhatikan pekerja saat pekerjaan crane?\n\nD. 合図者(あいずしゃ)の指示(しじ)に従(したが)うこと\n\nArtinya:\nMengikuti instruksi pemberi aba-aba.\n\nPembahasan:\nPekerja harus mengikuti arahan signalman demi keselamatan kerja.\n\nPilihan lain salah karena:\n\nA = berbahaya ❌\nB = tidak aman ❌\nC = sangat berbahaya ❌"

},

{
question:
"<ruby>建築現場<rt>けんちくげんば</rt></ruby>では「KY<ruby>活動<rt>かつどう</rt></ruby>」を<ruby>毎日<rt>まいにち</rt></ruby><ruby>実施<rt>じっし</rt></ruby>します。この<ruby>活動<rt>かつどう</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>建物<rt>たてもの</rt></ruby>の<ruby>色<rt>いろ</rt></ruby>を<ruby>決<rt>き</rt></ruby>めるため",

"B. <ruby>作業時間<rt>さぎょうじかん</rt></ruby>を<ruby>短<rt>みじか</rt></ruby>くするため",

"C. <ruby>危険<rt>きけん</rt></ruby>を<ruby>事前<rt>じぜん</rt></ruby>に<ruby>予測<rt>よそく</rt></ruby>するため",

"D. <ruby>給料<rt>きゅうりょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>するため"

],

answer:2,

explanation:
"Arti Soal:\nApa tujuan aktivitas KY di lokasi konstruksi?\n\nC. 危険(きけん)を事前(じぜん)に予測(よそく)するため\n\nArtinya:\nUntuk memprediksi bahaya sebelum terjadi.\n\nPembahasan:\nKY dilakukan untuk mencegah kecelakaan kerja.\n\nPilihan lain salah karena:\n\nA = bukan menentukan warna bangunan ❌\nB = bukan mempercepat waktu kerja ❌\nD = bukan mengecek gaji ❌"

},

{
question:
"<ruby>建築図面<rt>けんちくずめん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>せずに<ruby>施工<rt>せこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うと、<ruby>寸法<rt>すんぽう</rt></ruby>の<ruby>間違<rt>まちが</rt></ruby>いや<ruby>施工不良<rt>せこうふりょう</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>する<ruby>可能性<rt>かのうせい</rt></ruby>があります。<ruby>施工前<rt>せこうまえ</rt></ruby>に<ruby>図面<rt>ずめん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>理由<rt>りゆう</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",

options:[

"A. <ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>減<rt>へ</rt></ruby>らすため",

"B. <ruby>休憩<rt>きゅうけい</rt></ruby>を<ruby>増<rt>ふ</rt></ruby>やすため",

"C. <ruby>正確<rt>せいかく</rt></ruby>な<ruby>施工<rt>せこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うため",

"D. <ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くため"

],

answer:2,

explanation:
"Arti Soal:\nApa alasan memeriksa gambar sebelum konstruksi dilakukan?\n\nC. 正確(せいかく)な施工(せこう)を行(おこな)うため\n\nArtinya:\nAgar pekerjaan dilakukan dengan tepat.\n\nPembahasan:\nPemeriksaan gambar penting untuk mencegah kesalahan ukuran dan pekerjaan.\n\nPilihan lain salah karena:\n\nA = bukan tujuan utama ❌\nB = bukan untuk menambah istirahat ❌\nD = tidak berhubungan ❌"

},

{
question:
"<ruby>夏場<rt>なつば</rt></ruby>の<ruby>建設現場<rt>けんせつげんば</rt></ruby>では<ruby>熱中症対策<rt>ねっちゅうしょうたいさく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐ<ruby>方法<rt>ほうほう</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>無理<rt>むり</rt></ruby>に<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>ける",

"B. ヘルメットを<ruby>外<rt>はず</rt></ruby>して<ruby>作業<rt>さぎょう</rt></ruby>する",

"C. <ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>まない",

"D. <ruby>水分<rt>すいぶん</rt></ruby>と<ruby>塩分<rt>えんぶん</rt></ruby>を<ruby>補給<rt>ほきゅう</rt></ruby>する"

],

answer:3,

explanation:
"Arti Soal:\nApa cara yang benar untuk mencegah heatstroke di lokasi konstruksi saat musim panas?\n\nD. 水分(すいぶん)と塩分(えんぶん)を補給(ほきゅう)する\n\nArtinya:\nMengisi cairan dan garam tubuh.\n\nPembahasan:\nMencegah dehidrasi dan kekurangan garam sangat penting untuk menghindari heatstroke.\n\nPilihan lain salah karena:\n\nA = memaksakan kerja berbahaya ❌\nB = helm tetap wajib dipakai ❌\nC = tidak minum sangat berbahaya ❌"

},

{
question:
"<ruby>足場<rt>あしば</rt></ruby>の<ruby>組立作業<rt>くみたてさぎょう</rt></ruby>では、<ruby>安全基準<rt>あんぜんきじゅん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>があります。<ruby>足場<rt>あしば</rt></ruby>に<ruby>設置<rt>せっち</rt></ruby>する<ruby>設備<rt>せつび</rt></ruby>として<ruby>転落防止<rt>てんらくぼうし</rt></ruby>に<ruby>役立<rt>やくだ</rt></ruby>つものはどれですか。",

options:[

"A. ロープだけ",

"B. ペンキ",

"C. <ruby>手<rt>て</rt></ruby>すり",

"D. <ruby>看板<rt>かんばん</rt></ruby>"

],

answer:2,

explanation:
"Arti Soal:\nPeralatan apa pada scaffolding yang membantu mencegah jatuh?\n\nC. 手(て)すり\n\nArtinya:\nPegangan tangan/handrail.\n\nPembahasan:\nHandrail dipasang untuk mencegah pekerja jatuh dari scaffolding.\n\nPilihan lain salah karena:\n\nA = tali saja tidak cukup ❌\nB = cat tidak berkaitan ❌\nD = papan tanda bukan pelindung jatuh ❌"

},

{
question:
"<ruby>鉄筋工事<rt>てっきんこうじ</rt></ruby>では、<ruby>図面<rt>ずめん</rt></ruby>どおりに<ruby>鉄筋<rt>てっきん</rt></ruby>を<ruby>配置<rt>はいち</rt></ruby>することが<ruby>重要<rt>じゅうよう</rt></ruby>です。<ruby>鉄筋<rt>てっきん</rt></ruby>の<ruby>主<rt>おも</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>水<rt>みず</rt></ruby>を<ruby>流<rt>なが</rt></ruby>す",

"B. <ruby>建物<rt>たてもの</rt></ruby>の<ruby>引張力<rt>ひっぱりりょく</rt></ruby>を<ruby>補強<rt>ほきょう</rt></ruby>する",

"C. <ruby>色<rt>いろ</rt></ruby>を<ruby>良<rt>よ</rt></ruby>くする",

"D. <ruby>防音<rt>ぼうおん</rt></ruby>だけを<ruby>行<rt>おこな</rt></ruby>う"

],

answer:1,

explanation:
"Arti Soal:\nApa fungsi utama besi tulangan?\n\nB. 建物(たてもの)の引張力(ひっぱりりょく)を補強(ほきょう)する\n\nArtinya:\nMemperkuat gaya tarik bangunan.\n\nPembahasan:\nBesi tulangan digunakan untuk memperkuat kekuatan tarik beton.\n\nPilihan lain salah karena:\n\nA = bukan saluran air ❌\nC = bukan untuk warna ❌\nD = bukan khusus peredam suara ❌"

},

{
question:
"<ruby>建設機械<rt>けんせつきかい</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>には<ruby>点検<rt>てんけん</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>があります。<ruby>点検<rt>てんけん</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>理由<rt>りゆう</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",

options:[

"A. <ruby>騒音<rt>そうおん</rt></ruby>を<ruby>増<rt>ふ</rt></ruby>やすため",

"B. <ruby>機械<rt>きかい</rt></ruby>を<ruby>汚<rt>よご</rt></ruby>すため",

"C. <ruby>機械<rt>きかい</rt></ruby>の<ruby>故障<rt>こしょう</rt></ruby>や<ruby>事故<rt>じこ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐため",

"D. <ruby>作業時間<rt>さぎょうじかん</rt></ruby>を<ruby>長<rt>なが</rt></ruby>くするため"

],

answer:2,

explanation:
"Arti Soal:\nApa alasan melakukan pemeriksaan mesin sebelum digunakan?\n\nC. 機械(きかい)の故障(こしょう)や事故(じこ)を防(ふせ)ぐため\n\nArtinya:\nUntuk mencegah kerusakan dan kecelakaan.\n\nPembahasan:\nPemeriksaan mesin penting untuk menjaga keselamatan kerja.\n\nPilihan lain salah karena:\n\nA = bukan untuk menambah kebisingan ❌\nB = bukan untuk mengotori mesin ❌\nD = bukan untuk memperpanjang waktu kerja ❌"

},

{
question:
"<ruby>建築現場<rt>けんちくげんば</rt></ruby>では<ruby>整理整頓<rt>せいりせいとん</rt></ruby>が<ruby>重要<rt>じゅうよう</rt></ruby>です。5S<ruby>活動<rt>かつどう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>目的<rt>もくてき</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>道具<rt>どうぐ</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>すため",

"B. <ruby>音<rt>おと</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくするため",

"C. <ruby>工事<rt>こうじ</rt></ruby>を<ruby>中止<rt>ちゅうし</rt></ruby>するため",

"D. <ruby>安全<rt>あんぜん</rt></ruby>で<ruby>効率<rt>こうりつ</rt></ruby>の<ruby>良<rt>よ</rt></ruby>い<ruby>職場<rt>しょくば</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るため"

],

answer:3,

explanation:
"Arti Soal:\nApa tujuan kegiatan 5S di lokasi konstruksi?\n\nD. 安全(あんぜん)で効率(こうりつ)の良(よ)い職場(しょくば)を作(つく)るため\n\nArtinya:\nMenciptakan tempat kerja yang aman dan efisien.\n\nPembahasan:\n5S bertujuan meningkatkan keselamatan, kebersihan, dan efisiensi kerja.\n\nPilihan lain salah karena:\n\nA = bukan merusak alat ❌\nB = bukan memperbesar suara ❌\nC = bukan menghentikan proyek ❌"

},

{
question:
"<ruby>電動工具<rt>でんどうこうぐ</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する<ruby>際<rt>さい</rt></ruby>に、コードが<ruby>破損<rt>はそん</rt></ruby>していることを<ruby>発見<rt>はっけん</rt></ruby>しました。この<ruby>場合<rt>ばあい</rt></ruby>、<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>うべきことはどれですか。",

options:[

"A. <ruby>水<rt>みず</rt></ruby>をかける",

"B. <ruby>足<rt>あし</rt></ruby>で<ruby>踏<rt>ふ</rt></ruby>む",

"C. <ruby>修理<rt>しゅうり</rt></ruby>または<ruby>交換<rt>こうかん</rt></ruby>する",

"D. そのまま<ruby>使用<rt>しよう</rt></ruby>する"

],

answer:2,

explanation:
"Arti Soal:\nApa yang harus pertama kali dilakukan jika kabel alat listrik rusak?\n\nC. 修理(しゅうり)または交換(こうかん)する\n\nArtinya:\nMemperbaiki atau mengganti.\n\nPembahasan:\nKabel rusak sangat berbahaya dan dapat menyebabkan sengatan listrik.\n\nPilihan lain salah karena:\n\nA = berbahaya ❌\nB = bukan tindakan aman ❌\nD = tidak boleh digunakan ❌"

},

{
question:
"<ruby>建物<rt>たてもの</rt></ruby>を<ruby>施工<rt>せこう</rt></ruby>するとき、<ruby>水平<rt>すいへい</rt></ruby>や<ruby>垂直<rt>すいちょく</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>することが<ruby>必要<rt>ひつよう</rt></ruby>です。<ruby>水平確認<rt>すいへいかくにん</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>する<ruby>工具<rt>こうぐ</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. ハンマー",

"B. <ruby>水平器<rt>すいへいき</rt></ruby>",

"C. ペンチ",

"D. スコップ"

],

answer:1,

explanation:
"Arti Soal:\nAlat apa yang digunakan untuk memeriksa kerataan/horizontal?\n\nB. 水平器(すいへいき)\n\nArtinya:\nWaterpass/alat ukur horizontal.\n\nPembahasan:\n水平器 digunakan untuk memastikan permukaan rata.\n\nPilihan lain salah karena:\n\nA = alat pemukul ❌\nC = alat penjepit ❌\nD = alat gali ❌"

},

{
question:
"<ruby>建築工事<rt>けんちくこうじ</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>されるコンクリートは、セメント・<ruby>水<rt>みず</rt></ruby>・<ruby>骨材<rt>こつざい</rt></ruby>を<ruby>混<rt>ま</rt></ruby>ぜて<ruby>作<rt>つく</rt></ruby>られます。<ruby>骨材<rt>こつざい</rt></ruby>として<ruby>使<rt>つか</rt></ruby>われるものはどれですか。",

options:[

"A. <ruby>木材<rt>もくざい</rt></ruby>",

"B. ガラスだけ",

"C. <ruby>紙<rt>かみ</rt></ruby>",

"D. <ruby>砂<rt>すな</rt></ruby>や<ruby>砂利<rt>じゃり</rt></ruby>"

],

answer:3,

explanation:
"Arti Soal:\nApa yang digunakan sebagai agregat pada beton?\n\nD. 砂(すな)や砂利(じゃり)\n\nArtinya:\nPasir dan kerikil.\n\nPembahasan:\nAgregat beton terdiri dari pasir dan kerikil.\n\nPilihan lain salah karena:\n\nA = bukan agregat beton ❌\nB = bukan bahan utama ❌\nC = tidak digunakan ❌"

},

{
question:
"<ruby>建設現場<rt>けんせつげんば</rt></ruby>では<ruby>火災防止対策<rt>かさいぼうしたいさく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。<ruby>溶接作業<rt>ようせつさぎょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>際<rt>さい</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>するべきことはどれですか。",

options:[

"A. <ruby>周囲<rt>しゅうい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しない",

"B. <ruby>火<rt>ひ</rt></ruby>を<ruby>放置<rt>ほうち</rt></ruby>する",

"C. <ruby>可燃物<rt>かねんぶつ</rt></ruby>を<ruby>近<rt>ちか</rt></ruby>くに<ruby>置<rt>お</rt></ruby>かない",

"D. <ruby>水<rt>みず</rt></ruby>をまかない"

],

answer:2,

explanation:
"Arti Soal:\nApa yang harus diperhatikan saat melakukan pengelasan?\n\nC. 可燃物(かねんぶつ)を近(ちか)くに置(お)かない\n\nArtinya:\nTidak meletakkan benda mudah terbakar di dekatnya.\n\nPembahasan:\nPercikan api las dapat menyebabkan kebakaran.\n\nPilihan lain salah karena:\n\nA = berbahaya ❌\nB = tidak aman ❌\nD = bukan tindakan utama ❌"

},

{
question:
"<ruby>建築現場<rt>けんちくげんば</rt></ruby>で<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>避難<rt>ひなん</rt></ruby>しなければならない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>避難経路<rt>ひなんけいろ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しておく<ruby>必要<rt>ひつよう</rt></ruby>があります。<ruby>避難経路<rt>ひなんけいろ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>理由<rt>りゆう</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>音楽<rt>おんがく</rt></ruby>を<ruby>流<rt>なが</rt></ruby>すため",

"B. <ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>ぶため",

"C. <ruby>作業<rt>さぎょう</rt></ruby>を<ruby>増<rt>ふ</rt></ruby>やすため",

"D. <ruby>災害時<rt>さいがいじ</rt></ruby>に<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>避難<rt>ひなん</rt></ruby>するため"

],

answer:3,

explanation:
"Arti Soal:\nMengapa jalur evakuasi harus diperiksa sebelumnya?\n\nD. 災害時(さいがいじ)に安全(あんぜん)に避難(ひなん)するため\n\nArtinya:\nAgar dapat evakuasi dengan aman saat bencana.\n\nPembahasan:\nMengetahui jalur evakuasi penting untuk keselamatan kerja.\n\nPilihan lain salah karena:\n\nA = bukan untuk musik ❌\nB = bukan jalur material ❌\nC = bukan untuk menambah pekerjaan ❌"

},

{
question:
"<ruby>建設現場<rt>けんせつげんば</rt></ruby>では、<ruby>作業前<rt>さぎょうまえ</rt></ruby>ミーティングを<ruby>行<rt>おこな</rt></ruby>うことがあります。このミーティングの<ruby>目的<rt>もくてき</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",

options:[

"A. <ruby>作業<rt>さぎょう</rt></ruby>を<ruby>中止<rt>ちゅうし</rt></ruby>するため",

"B. <ruby>工具<rt>こうぐ</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>すため",

"C. <ruby>作業内容<rt>さぎょうないよう</rt></ruby>や<ruby>危険箇所<rt>きけんかしょ</rt></ruby>を<ruby>共有<rt>きょうゆう</rt></ruby>するため",

"D. <ruby>遊<rt>あそ</rt></ruby>ぶため"

],

answer:2,

explanation:
"Arti Soal:\nApa tujuan meeting sebelum pekerjaan di lokasi konstruksi?\n\nC. 作業内容(さぎょうないよう)や危険箇所(きけんかしょ)を共有(きょうゆう)するため\n\nArtinya:\nUntuk berbagi informasi pekerjaan dan lokasi berbahaya.\n\nPembahasan:\nMeeting sebelum kerja penting untuk keselamatan dan koordinasi kerja.\n\nPilihan lain salah karena:\n\nA = bukan menghentikan pekerjaan ❌\nB = bukan merusak alat ❌\nD = bukan untuk bermain ❌"

},

{
question:
"<ruby>建築材料<rt>けんちくざいりょう</rt></ruby>の<ruby>木材<rt>もくざい</rt></ruby>にはさまざまな<ruby>特徴<rt>とくちょう</rt></ruby>があります。<ruby>木材<rt>もくざい</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>錆<rt>さ</rt></ruby>びる",

"B. <ruby>水<rt>みず</rt></ruby>に<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>強<rt>つよ</rt></ruby>い",

"C. <ruby>軽<rt>かる</rt></ruby>く<ruby>加工<rt>かこう</rt></ruby>しやすい",

"D. <ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>燃<rt>も</rt></ruby>えない"

],

answer:2,

explanation:
"Arti Soal:\nApa karakteristik kayu sebagai bahan bangunan?\n\nC. 軽(かる)く加工(かこう)しやすい\n\nArtinya:\nRingan dan mudah diproses.\n\nPembahasan:\nKayu mudah dipotong dan dibentuk sehingga sering digunakan dalam konstruksi.\n\nPilihan lain salah karena:\n\nA = kayu tidak berkarat ❌\nB = kayu tidak sepenuhnya tahan air ❌\nD = kayu bisa terbakar ❌"

},

{
question:
"<ruby>現場<rt>げんば</rt></ruby>で<ruby>作業<rt>さぎょう</rt></ruby>をしているとき、<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけた<ruby>場合<rt>ばあい</rt></ruby>、<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>取<rt>と</rt></ruby>るべき<ruby>行動<rt>こうどう</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>一人<rt>ひとり</rt></ruby>で<ruby>勝手<rt>かって</rt></ruby>に<ruby>修理<rt>しゅうり</rt></ruby>する",

"B. <ruby>写真<rt>しゃしん</rt></ruby>だけ<ruby>撮<rt>と</rt></ruby>る",

"C. <ruby>無視<rt>むし</rt></ruby>する",

"D. <ruby>上司<rt>じょうし</rt></ruby>や<ruby>責任者<rt>せきにんしゃ</rt></ruby>へ<ruby>報告<rt>ほうこく</rt></ruby>する"

],

answer:3,

explanation:
"Arti Soal:\nApa tindakan pertama jika menemukan tempat berbahaya di lokasi kerja?\n\nD. 上司(じょうし)や責任者(せきにんしゃ)へ報告(ほうこく)する\n\nArtinya:\nMelapor kepada atasan atau penanggung jawab.\n\nPembahasan:\nBahaya harus segera dilaporkan untuk mencegah kecelakaan.\n\nPilihan lain salah karena:\n\nA = berbahaya jika memperbaiki sendiri ❌\nB = tidak cukup hanya foto ❌\nC = tidak boleh diabaikan ❌"

},

{
question:
"<ruby>建築工事<rt>けんちくこうじ</rt></ruby>では、<ruby>型枠<rt>かたわく</rt></ruby>を<ruby>正確<rt>せいかく</rt></ruby>に<ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てる<ruby>必要<rt>ひつよう</rt></ruby>があります。<ruby>型枠工事<rt>かたわくこうじ</rt></ruby>の<ruby>主<rt>おも</rt></ruby>な<ruby>目的<rt>もくてき</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",

options:[

"A. <ruby>水<rt>みず</rt></ruby>を<ruby>流<rt>なが</rt></ruby>すため",

"B. <ruby>騒音<rt>そうおん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>すため",

"C. <ruby>建物<rt>たてもの</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>すため",

"D. コンクリートを<ruby>決<rt>き</rt></ruby>められた<ruby>形<rt>かたち</rt></ruby>にするため"

],

answer:3,

explanation:
"Arti Soal:\nApa tujuan utama pekerjaan bekisting?\n\nD. コンクリートを決(き)められた形(かたち)にするため\n\nArtinya:\nMembentuk beton sesuai bentuk yang ditentukan.\n\nPembahasan:\nBekisting digunakan untuk membentuk beton sesuai desain.\n\nPilihan lain salah karena:\n\nA = bukan saluran air ❌\nB = bukan untuk membuat kebisingan ❌\nC = bukan untuk menghancurkan bangunan ❌"

},

{
question:
"<ruby>建設現場<rt>けんせつげんば</rt></ruby>でヘルメットを<ruby>着用<rt>ちゃくよう</rt></ruby>する<ruby>理由<rt>りゆう</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",

options:[

"A. <ruby>音<rt>おと</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きやすくするため",

"B. <ruby>荷物<rt>にもつ</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>ぶため",

"C. <ruby>作業服<rt>さぎょうふく</rt></ruby>を<ruby>固定<rt>こてい</rt></ruby>するため",

"D. <ruby>落下物<rt>らっかぶつ</rt></ruby>や<ruby>衝撃<rt>しょうげき</rt></ruby>から<ruby>頭<rt>あたま</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るため"

],

answer:3,

explanation:
"Arti Soal:\nApa alasan utama memakai helm di lokasi konstruksi?\n\nD. 落下物(らっかぶつ)や衝撃(しょうげき)から頭(あたま)を守(まも)るため\n\nArtinya:\nMelindungi kepala dari benda jatuh dan benturan.\n\nPembahasan:\nHelm keselamatan adalah APD penting untuk melindungi kepala pekerja.\n\nPilihan lain salah karena:\n\nA = bukan fungsi helm ❌\nB = bukan untuk membawa barang ❌\nC = bukan untuk mengikat pakaian ❌"

},
paket3:[
{
question:
"<ruby>リスク低減<rt>ていげん</rt></ruby><ruby>措置<rt>そち</rt></ruby>の<ruby>検討<rt>けんとう</rt></ruby>における「<ruby>管理的<rt>かんりてき</rt></ruby><ruby>対策<rt>たいさく</rt></ruby>」として<ruby>行<rt>おこな</rt></ruby>うものは、<ruby>次<rt>つぎ</rt></ruby>のうちどれか。",

options:[

"A. <ruby>作業<rt>さぎょう</rt></ruby>そのものの<ruby>廃止<rt>はいし</rt></ruby>",

"B. <ruby>作業<rt>さぎょう</rt></ruby>マニュアルの<ruby>整備<rt>せいび</rt></ruby>",

"C. <ruby>保護手袋<rt>ほごてぶくろ</rt></ruby>などの<ruby>保護具<rt>ほごぐ</rt></ruby>の<ruby>使用<rt>しよう</rt></ruby>",

"D. <ruby>機械<rt>きかい</rt></ruby>・<ruby>設備<rt>せつび</rt></ruby>の<ruby>防護柵<rt>ぼうごさく</rt></ruby>の<ruby>設置<rt>せっち</rt></ruby>"

],

answer:1,

explanation:
"Arti Soal:\nManakah yang termasuk tindakan pengendalian administratif dalam pengurangan risiko?\n\nB. 作業(さぎょう)マニュアルの整備(せいび)\n\nArtinya:\nMenyusun atau memperbaiki manual/prosedur kerja.\n\nPembahasan:\n管理的対策 (pengendalian administratif) adalah pengendalian melalui aturan kerja, SOP, pelatihan, dan manual kerja.\n\nPilihan lain salah karena:\n\nA = termasuk eliminasi bahaya ❌\nC = termasuk penggunaan APD ❌\nD = termasuk pengendalian teknik/engineering control ❌"

}
 ]

],

  
  

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
// RESULT PAGE
// ======================

if(
document.getElementById(
"scoreText"
)
){

const selectedSet =

localStorage.getItem(
"selectedSet"
);



document.getElementById(
"scoreText"
).innerText =

localStorage.getItem(
"score"
)

+

" / "

+

questionSets[selectedSet].length;





// ======================
// DEMO MODE
// ======================

if(selectedSet === "demo"){



// sembunyikan tombol
document.getElementById(
"otherQuizBtn"
).style.display = "none";



// tampilkan pesan premium
document.getElementById(
"premiumMessage"
).innerHTML =

`

<br><br>

<b>
Ingin mengakses seluruh soal CBT?
</b>

<br><br>

Silahkan melakukan pembayaran
untuk mendapatkan akun premium.

`;

}

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

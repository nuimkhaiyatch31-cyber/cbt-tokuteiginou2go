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

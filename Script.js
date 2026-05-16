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

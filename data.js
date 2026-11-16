// ==========================================================================
// 📚 《绝句二首》课文词典与诗行数据集 (data.js) - 8行逐句对齐古诗词黄金版
// 格式：["字词", "拼音", "EN 英文", "BM 马来文", "古义/本义：...\n今义：...", "u (可选:专名下划线)"]
// 结构：共 8 个区块（1–4 对应《山中》四句；5–8 对应《望庐山瀑布》四句），与 analysis.js 1–8 完全对齐
// ==========================================================================

const lessonTitle = "绝句二首";

const lessonData = [
    // ===== 区块 1：其一《山中》首句（含诗题与作者） =====
    ["其一", "qí yī", "Poem I", "Puisi Pertama", "第一首绝句"],
    ["：", "", "", "", ""],
    ["《", "", "", "", ""],
    ["山中", "shān zhōng", "In the Mountains", "Di Dalam Gunung", "诗题：在深山之中（作于王维隐居蓝田辋川之时）"],
    ["》", "", "", "", ""],
    ["〔", "", "", "", ""],
    ["唐", "táng", "Tang Dynasty", "Dinasti Tang", "朝代名，唐朝", "u"],
    ["〕", "", "", "", ""],
    ["王维", "wáng wéi", "Wang Wei (approx. 701–761)", "Wang Wei", "唐代山水田园诗派代表诗人、画家，字摩诘，世称“王右丞”，有“诗佛”之誉", "u"],
    [" ", "", "", "", ""],
    ["荆溪", "jīng xī", "Jing Stream (in Lantian, Shaanxi)", "Anak Sungai Jing", "水名：本名长水，源出陕西蓝田县西南秦岭山中，北流汇入灞水", "u"],
    ["白石", "bái shí", "white pebbles / stones", "batu-batu putih", "偏正短语：溪底洁白的石头"],
    ["出", "chū", "emerge / become visible", "timbul / kelihatan jelas", "动词：显露出来（初冬水落，故溪石显露）"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 2：其一《山中》次句

    ["天", "tiān", "the weather", "cuaca", "名词：天气、时令"],
    ["寒", "hán", "grows cold", "bertambah dingin", "形容词：寒冷（点明初冬时节）"],
    ["红叶", "hóng yè", "red maple leaves", "daun-daun merah", "偏正短语：经霜变红的枫叶"],
    ["稀", "xī", "sparse / few", "jarang / sedikit", "形容词：稀少、零落"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 3：其一《山中》第三句

    ["山路", "shān lù", "the mountain path", "lorong di gunung", "偏正短语：山间小路"],
    ["元", "yuán", "originally / in fact", "pada asalnya / sebenarnya", "古义：通“原”，本来、原本（副词）\n今义：第一、基本或货币单位"],
    ["无", "wú", "has no", "tiada", "动词：没有"],
    ["雨", "yǔ", "rain", "hujan", "名词：雨水"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 4：其一《山中》末句

    ["空翠", "kōng cuì", "misty green mountain shade", "warna gunung hijau yang berkabus", "古义：空濛青翠的山色与山岚水汽\n今义：仅用于古诗文语境"],
    ["湿", "shī", "moistens / dampens", "membasahi / melembapkan", "古义：使……沾湿、浸润（形容词使动用法）\n今义：与“干”相对（形容词）"],
    ["人", "rén", "people's / traveller's", "orang punya", "名词：行人、游人"],
    ["衣", "yī", "clothes / garments", "pakaian", "名词：衣裳"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 5：其二《望庐山瀑布（其二）》首句（含诗题与作者）

    ["其二", "qí èr", "Poem II", "Puisi Kedua", "第二首绝句"],
    ["：", "", "", "", ""],
    ["《", "", "", "", ""],
    ["望", "wàng", "Gazing from Afar at", "Memandang dari Jauh", "动词：远远地眺望（全诗诗眼）"],
    ["庐山", "lú shān", "Mount Lu (in Jiujiang, Jiangxi)", "Gunung Lu (Lushan)", "山名，在今中国江西省九江市南，以雄奇险秀及飞瀑著称", "u"],
    ["瀑布", "pù bù", "Waterfall", "Air Terjun", "名词：从山壁上直泻下来的水流"],
    ["（", "", "", "", ""],
    ["其二", "qí èr", "No. 2", "Bahagian Kedua", "李白《望庐山瀑布》组诗共两首，第一首为五言古诗，此为第二首七言绝句"],
    ["）》", "", "", "", ""],
    ["〔", "", "", "", ""],
    ["唐", "táng", "Tang Dynasty", "Dinasti Tang", "朝代名，唐朝", "u"],
    ["〕", "", "", "", ""],
    ["李白", "lǐ bái", "Li Bai (701–762)", "Li Bai", "唐代最伟大的浪漫主义诗人，字太白，号青莲居士，世称“诗仙”", "u"],
    [" ", "", "", "", ""],
    ["日", "rì", "sunlight / the sun", "cahaya matahari", "名词：太阳、阳光"],
    ["照", "zhào", "shines upon", "menyinari", "动词：照耀"],
    ["香炉", "xiāng lú", "Incense Burner Peak (Xianglufeng)", "Puncak Xianglu (Dupa)", "古义：指庐山西北部的香炉峰（峰顶尖圆、云烟缭绕如香炉）\n今义：焚香的器具", "u"],
    ["生", "shēng", "produces / gives rise to", "menimbulkan / menghasilkan", "动词：升起、蒸腾起"],
    ["紫烟", "zǐ yān", "purple mist / violet clouds", "kabus berwarna ungu", "偏正短语：日光照耀下水汽蒸腾折射出的紫色云雾"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 6：其二《望庐山瀑布（其二）》次句

    ["遥", "yáo", "from afar / in the distance", "dari jauh", "副词：远远地"],
    ["看", "kàn", "looking at", "melihat", "动词：望见"],
    ["瀑布", "pù bù", "the waterfall", "air terjun"],
    ["挂", "guà", "hanging", "tergantung", "动词（化动为静）：悬挂（将奔腾的瀑布定格为一条悬挂于山前的巨大白练）"],
    ["前川", "qián chuān", "the river/mountain stream in front", "sungai di hadapan gunung", "古义：面前的山川、江水（川：河流、水道）\n今义：多指四川简称或平川"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 7：其二《望庐山瀑布（其二）》第三句

    ["飞流", "fēi liú", "flying torrent / plunging current", "aliran air yang飞泻 deras", "偏正短语：飞快奔泻的水流"],
    ["直下", "zhí xià", "plunges straight down", "menjunam lurus ke bawah", "偏正短语：笔直地向下倾泻"],
    ["三千尺", "sān qiān chǐ", "three thousand feet (hyperbole for immense height)", "tiga ribu kaki (kiasan sangat tinggi)", "夸张虚数：极言瀑布之高之长，并非实指"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 8：其二《望庐山瀑布（其二）》末句

    ["疑", "yí", "wondering if / suspecting", "menyangka / seolah-olah", "古义：怀疑、恍惚以为（动词）\n今义：疑问、可疑"],
    ["是", "shì", "it is", "ia adalah", "判断动词：是"],
    ["银河", "yín hé", "the Milky Way / Silver River", "Bima Sakti", "名词（比喻喻体）：晴朗夜空中呈银白色光带的星河"],
    ["落", "luò", "cascading / falling from", "jatuh mencurah dari", "动词：倾落、泻下"],
    ["九天", "jiǔ tiān", "the Ninth Heaven (the highest sky)", "langit yang paling tinggi (kayangan)", "古义：天的最高处（古人认为天有九重，故称九天）\n今义：九天的时间"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（", "", "", "", ""],
    ["王维", "wáng wéi", "Wang Wei", "Wang Wei", "唐代“诗佛”", "u"],
    ["《", "", "", "", ""],
    ["山中", "shān zhōng", "In the Mountains", "Di Dalam Gunung", "五言绝句"],
    ["》／", "", "", "", ""],
    ["李白", "lǐ bái", "Li Bai", "Li Bai", "唐代“诗仙”", "u"],
    ["《", "", "", "", ""],
    ["望庐山瀑布", "wàng lú shān pù bù", "Gazing at the Lushan Waterfall", "Memandang Air Terjun Lushan", "七言绝句"],
    ["》）", "", "", "", ""]
];

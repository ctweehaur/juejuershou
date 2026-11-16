// ==========================================================================
// 📖 《绝句二首》深度文本赏析数据库 (analysis.js) - 8行逐句对齐古诗词黄金版
// 键值 1–4 对应其一《山中》四句；键值 5–8 对应其二《望庐山瀑布》四句
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全课两首绝句白话译文】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>其一：《山中》（" + U_TAG("唐") + "·" + U_TAG("王维") + "）</strong><br>" +
        U_TAG("荆溪") + "水落，水底洁白的石头显露出来；天气转寒，霜染的红叶变得稀疏凋零。山间的小路原本没有下雨，但那满山空濛青翠的浓浓雾气，却仿佛沾湿了行人的衣衫。<br>" +
        "<strong>其二：《望" + U_TAG("庐山") + "瀑布（其二）》（" + U_TAG("唐") + "·" + U_TAG("李白") + "）</strong><br>" +
        "日光照耀在" + U_TAG("香炉峰") + "上，蒸腾起一片紫色的轻烟水雾；远远望去，奔腾的瀑布就像一条白色绢匹倒挂在面前的山川上。湍急的水流笔直向下飞泻长达三千尺，恍惚中让人以为是银河从九天之上倾泻奔落到了人间。" +
        "</span><br><br>" +
        "<strong>【盛唐双璧对比导览：“诗佛”之幽与“诗仙”之奇】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>本课精选了盛唐诗坛最具代表性的两首山水绝句：" + U_TAG("王维") + "（世称“诗佛”，山水田园诗派代表，苏轼赞其“诗中有画，画中有诗”）的五言绝句《山中》，以<strong>白石、红叶、空翠</strong>勾勒出一幅清幽空灵、静态为主的初冬山林画卷；" + U_TAG("李白") + "（世称“诗仙”，浪漫主义诗派代表）的七言绝句《望" + U_TAG("庐山") + "瀑布（其二）》，则紧扣“望”字，以<strong>紫烟、飞流、银河</strong>构建出一幅动感强烈、气吞山河的飞瀑奇观。</span>",

    paragraphs: {
        // ==================== 其一：《山中》（1–4） ====================
        1: "<strong>【其一《山中》· 首句赏析：溪落石出，勾勒初冬近景】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   U_TAG("荆溪") + "[白石出]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   U_TAG("荆溪") + "水位浅落，[水底洁白的石头显露出来]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   GRAMMAR_TAG("意象与季候", "入冬枯水期溪流变浅，故水底白石嶙峋显露，以“白”色定下明净基调") +
               "</div>" +
           "</div>",

        2: "<strong>【其一《山中》· 次句赏析：天寒叶稀，点染初冬远景】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "天寒[红叶稀]。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "天气转寒，[经霜变红的枫叶变得稀疏凋零]✓。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   GRAMMAR_TAG("诗中有画（色彩对比）", "枝头稀疏的“红叶”与首句溪中“白石”高低相映、红白对照，毫无萧索悲凉之气") +
               "</div>" +
           "</div>",

        3: "<strong>【其一《山中》· 第三句赏析：山路无雨，欲扬先抑】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "山路[元]无雨，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "山间的小路[原本]✓没有下雨，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("元", "通“原”，本来、原本（副词）", "第一、元旦、货币单位") +
                   GRAMMAR_TAG("章法转折", "先交代“无雨”的客观事实，为末句“湿人衣”的奇妙错觉蓄势") +
               "</div>" +
           "</div>",

        4: "<strong>【其一《山中》· 末句赏析：空翠湿衣，化视觉为触觉（全诗诗眼）】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[空翠][湿]人衣。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "但那满山[空濛青翠的山色与山岚雾气]✓，却仿佛[浸润沾湿]✓了行人的衣衫。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("空翠", "空濛青翠的山色与山岚水汽", "仅用于古诗文语境") +
                   ANCIENT_MODERN_TAG("湿", "使……沾湿（形容词使动用法）", "潮湿（形容词）") +
                   GRAMMAR_TAG("理解与探究第1题（核心考点）", "虚实结合、化视觉为触觉（通感）！将视觉所见的青翠山色转化为触觉的湿润凉意，传达出空灵幽远的意境") +
               "</div>" +
           "</div>",

        // ==================== 其二：《望庐山瀑布（其二）》（5–8） ====================
        5: "<strong>【其二《望" + U_TAG("庐山") + "瀑布》· 首句赏析：日照香炉，紫烟升腾】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "日照" + U_TAG("香炉") + "生[紫烟]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "日光照耀在" + U_TAG("香炉峰") + "上，蒸腾起一片[紫色的轻烟水雾]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("香炉", "指庐山西北部的香炉峰（峰顶尖圆、烟云聚散如香炉）", "焚香的器具") +
                   GRAMMAR_TAG("背景烘托", "灿烂阳光照射在弥漫的水汽上折射出绚丽的“紫烟”，为瀑布出场铺设了瑰丽雄浑的背景") +
               "</div>" +
           "</div>",

        6: "<strong>【其二《望" + U_TAG("庐山") + "瀑布》· 次句赏析：遥看飞瀑，“挂”字化动为静】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[遥]看瀑布[挂][前川]。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "[远远]✓望去，奔腾的瀑布就像一条白色绢匹[倒挂]✓在[面前的山川上]✓。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("前川", "面前的山川、江水", "平川") +
                   GRAMMAR_TAG("千古炼字（“挂”字）", "化动为静！因从远处“遥看”，奔腾咆哮的瀑布宛如一条静止悬挂于苍翠山前的洁白绸带") +
               "</div>" +
           "</div>",

        7: "<strong>【其二《望" + U_TAG("庐山") + "瀑布》· 第三句赏析：飞流直下，三千尺极度夸张】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[飞流][直下][三千尺]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "[湍急的水流]✓[笔直向下飞泻]✓长达[三千尺]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("三千尺", "极言瀑布之高之长的夸张虚数，非实指", "具体长度数值") +
                   GRAMMAR_TAG("动态特写與夸张修辞", "由次句的静态远望转为极速奔泻的动态特写，“飞”、“直”写出水势之猛，“三千尺”极言落差之巨") +
               "</div>" +
           "</div>",

        8: "<strong>【其二《望" + U_TAG("庐山") + "瀑布》· 末句赏析：银河落九天，奇特比喻冠绝古今】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[疑]是[银河]落[九天]。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "[恍惚中让人以为]✓是璀璨的[银河]✓从[九天之上（天界最高处）]✓倾泻奔落到了人间。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("疑", "怀疑、恍惚以为（动词）", "疑问、可疑") +
                   ANCIENT_MODERN_TAG("九天", "古代传说天有九重，极言天之极高", "九天的时间") +
                   GRAMMAR_TAG("理解与探究第2题（夸张兼比喻）", "将飞瀑比作从九重天宇倾落的璀璨银河，想象雄奇瑰丽，抒发了对壮丽山河的由衷赞美") +
               "</div>" +
           "</div>"
    }
};

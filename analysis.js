// ==========================================================================
// 📖 《绝句二首》深度文本赏析数据库 (analysis.js) - 马来西亚古诗词黄金范例版
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
        U_TAG("荆溪") + "水位退落，水底洁白的石头显露出来；天气转寒，霜染的红叶变得稀疏凋零。山间的小路原本没有下雨，但那满山空濛青翠的浓浓山岚雾气，却仿佛浸润沾湿了行人的衣衫。<br>" +
        "<strong>其二：《望" + U_TAG("庐山") + "瀑布（其二）》（" + U_TAG("唐") + "·" + U_TAG("李白") + "）</strong><br>" +
        "日光照耀在" + U_TAG("香炉峰") + "上，蒸腾起一片紫色的轻烟水雾；远远望去，奔腾的瀑布就像一条白色绢匹倒挂在面前的山川江水上。湍急的水流笔直向下飞泻长达三千尺，恍惚中让人以为是璀璨的银河从九天之上倾泻奔落到了人间。" +
        "</span><br><br>" +
        "<strong>【盛唐双璧对比导览：“诗佛”之幽与“诗仙”之奇】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>本课精选了盛唐诗坛最具代表性的两首山水绝句：" + U_TAG("王维") + "（世称“诗佛”，山水田园诗派代表）的五言绝句《山中》，以<strong>白石、红叶、空翠</strong>勾勒出一幅清幽空灵、色彩明净的初冬山林小景，尽显“诗中有画”的静谧禅意；" + U_TAG("李白") + "（世称“诗仙”，浪漫主义诗派代表）的七言绝句《望" + U_TAG("庐山") + "瀑布（其二）》，则以<strong>紫烟、飞流、银河</strong>构建出一幅动感强烈、气吞山河的飞瀑奇观，展现了盛唐气象的雄奇豪放。</span>",

    paragraphs: {
        1: "<strong>【其一：《山中》（" + U_TAG("王维") + "）——诗中有画，空翠湿衣的初冬禅境】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 《山中》一、二句卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("荆溪") + "[白石出]，天寒[红叶稀]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("荆溪") + "水浅退落，[水底洁白的石头显露出来]✓；天气转寒，[经霜变红的枫叶变得稀少零落]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       GRAMMAR_TAG("时令特征", "初冬时节（水落石出、天寒叶稀）") +
                       GRAMMAR_TAG("设色艺术（诗中有画）", "溪中“白石”与枝头“红叶”相映成趣，色调明净素雅") +
                   "</div>" +
               "</div>" +

               // 《山中》三、四句卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "山路[元]无雨，[空翠][湿]人衣。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "山间小路[本来]✓没有下雨，但那[空濛青翠的山色与山岚雾气]✓却仿佛[浸润沾湿]✓了行人的衣裳。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("元", "通“原”，本来、原本", "元旦、货币单位") +
                       ANCIENT_MODERN_TAG("湿", "使……沾湿（形容词使动用法）", "潮湿（形容词）") +
                       GRAMMAR_TAG("核心考点（虚实结合与通感）", "将视觉上的青翠山色（“空翠”·虚）转化为触觉上的清凉湿润感（“湿人衣”·实），写尽深山幽静润泽") +
                   "</div>" +
               "</div>" +

           "</div>",

        2: "<strong>【其二：《望" + U_TAG("庐山") + "瀑布（其二）》（" + U_TAG("李白") + "）——银河落九天的浪漫豪情】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 《望庐山瀑布》一、二句卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "日照" + U_TAG("香炉") + "生[紫烟]，[遥]看瀑布[挂][前川]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "太阳照耀在" + U_TAG("香炉峰") + "上，蒸腾起一片[紫色的云雾]✓；[远远地]✓望去，瀑布像一条白练[悬挂]✓在[面前的山川江水]✓之上。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("香炉", "指庐山西北部的香炉峰", "焚香的器具") +
                       ANCIENT_MODERN_TAG("前川", "面前的山川、江水", "平川") +
                       GRAMMAR_TAG("千古炼字（“挂”字）", "化动为静！将奔腾飞泻的瀑布定格为一条高悬于苍翠山前的洁白绸带") +
                   "</div>" +
               "</div>" +

               // 《望庐山瀑布》三、四句卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[飞流][直下][三千尺]，[疑]是[银河]落[九天]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[飞快奔泻的水流]✓[笔直地向下倾泻]✓长达[三千尺]✓，[恍惚以为]✓是璀璨的[银河]✓从[天界最高处]✓倾落到了人间。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("疑", "怀疑、恍惚以为", "疑问、可疑") +
                       ANCIENT_MODERN_TAG("九天", "传说中天的最高处（九重天）", "九天的时间") +
                       GRAMMAR_TAG("核心考点（夸张＋比喻）", "“三千尺、九天”极度夸张瀑布之高险；“疑是银河落九天”将飞瀑比作天河倾落，想象奇崛壮美") +
                   "</div>" +
               "</div>" +

           "</div>"
    }
};

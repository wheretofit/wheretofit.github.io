(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53f06ab8"],{6111:function(t,n,o){"use strict";var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("figure",{staticClass:"report-img"},[o("picture",[o("source",{attrs:{type:"image/jpeg",media:"(min-width: 460px) and (max-width: 719.98px)",srcset:t.$root.imgSrc(t.src+"-tab-s.jpg")}}),o("source",{attrs:{type:"image/jpeg",media:"(min-width: 720px)",srcset:t.$root.imgSrc(t.src+"-tab-l.jpg")}}),o("img",{attrs:{src:t.$root.imgSrc(t.src+"-mob.jpg"),alt:""}})]),t.caption?o("figcaption",[t._v(t._s(t.caption))]):t._e()])},a=[],r={name:"ReportFigure",props:{src:{type:String,required:!0},caption:{type:String,default:""}}},e=r,s=(o("9f99"),o("2877")),p=Object(s["a"])(e,i,a,!1,null,null,null);n["a"]=p.exports},6568:function(t,n,o){"use strict";var i=o("f6f7"),a=o.n(i);a.a},"87db":function(t,n,o){"use strict";var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("abbr",{staticClass:"report-notation",attrs:{title:t.title}},[o("span",{staticClass:"report-notation__wrapped",on:{click:t.toggleNotation}},[t._t("default")],2),o("img",{class:[t.isInline?"inline":"block",t.isNotation?"active":""],attrs:{src:t.arrowImg},on:{click:t.toggleNotation}}),t.isNotation?[t.isInline?o("span",{staticClass:"report-notation__txt"},[t._v(t._s(t.notation.txt))]):o("div",{staticClass:"report-notation__txt report-notation__txt--block",domProps:{innerHTML:t._s(t.notation.txt)}})]:t._e()],2)},a=[],r=(o("a481"),o("0ca2")),e=o.n(r),s=o("c347"),p=o.n(s),l={name:"ReportNotation",props:["notation"],data:function(){return{isNotation:!1}},computed:{title:function(){return this.notation.txt.replace(/<p>|<\/p>/gim,"")},isInline:function(){return"inline"===this.notation.display},arrowImg:function(){return this.isInline?e.a:p.a}},methods:{toggleNotation:function(){this.isNotation=!this.isNotation}}},c=l,v=(o("6568"),o("2877")),_=Object(v["a"])(c,i,a,!1,null,null,null);n["a"]=_.exports},"9f99":function(t,n,o){"use strict";var i=o("c60e"),a=o.n(i);a.a},a481:function(t,n,o){"use strict";var i=o("cb7c"),a=o("4bf8"),r=o("9def"),e=o("4588"),s=o("0390"),p=o("5f1b"),l=Math.max,c=Math.min,v=Math.floor,_=/\$([$&`']|\d\d?|<[^>]*>)/g,u=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};o("214f")("replace",2,function(t,n,o,f){return[function(i,a){var r=t(this),e=void 0==i?void 0:i[n];return void 0!==e?e.call(i,r,a):o.call(String(r),i,a)},function(t,n){var a=f(o,t,this,n);if(a.done)return a.value;var v=i(t),_=String(this),u="function"===typeof n;u||(n=String(n));var h=v.global;if(h){var x=v.unicode;v.lastIndex=0}var m=[];while(1){var N=p(v,_);if(null===N)break;if(m.push(N),!h)break;var R=String(N[0]);""===R&&(v.lastIndex=s(_,r(v.lastIndex),x))}for(var b="",y=0,w=0;w<m.length;w++){N=m[w];for(var k=String(N[0]),C=l(c(e(N.index),_.length),0),S=[],$=1;$<N.length;$++)S.push(d(N[$]));var I=N.groups;if(u){var A=[k].concat(S,C,_);void 0!==I&&A.push(I);var j=String(n.apply(void 0,A))}else j=g(k,_,C,S,I,n);C>=y&&(b+=_.slice(y,C)+j,y=C+k.length)}return b+_.slice(y)}];function g(t,n,i,r,e,s){var p=i+t.length,l=r.length,c=u;return void 0!==e&&(e=a(e),c=_),o.call(s,c,function(o,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(p);case"<":s=e[a.slice(1,-1)];break;default:var c=+a;if(0===c)return o;if(c>l){var _=v(c/10);return 0===_?o:_<=l?void 0===r[_-1]?a.charAt(1):r[_-1]+a.charAt(1):o}s=r[c-1]}return void 0===s?"":s})}})},c60e:function(t,n,o){},d2f8:function(t,n,o){"use strict";o.r(n);var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"report-content"},[o("h2",{staticClass:"color-white"},[t._v("胖子與健康的拉鋸戰")]),o("p",{staticClass:"color-white"},[t._v("「當你是一個胖子，你就是一個被詛咒的人。人們總說：你有一天會生病。」體重破百的網紅"),o("ReportNotation",{attrs:{notation:t.notations[0]}},[t._v("汪綺")]),t._v("說道，她身穿一襲無袖低胸的黑色短洋裝，身軀與自信顯得更為豐滿。")],1),o("p",{staticClass:"color-white"},[t._v("無論在網路或現實中，汪綺都能大方地展現身體，像在葬禮上被迫長大的小女孩一般，她太清楚人們如何議論自己，汪綺喃喃地說：「健康是肥胖最被妖魔化的事。」三個月後，她走進了胃縮手術的手術房。")]),o("ReportFigure",{attrs:{src:"report2/photo1",caption:"汪綺在母親的陪伴下，準備進行胃縮手術。（攝影／林梵謹）"}}),o("h4",{attrs:{id:"title1"}},[t._v("肥胖造成健康風險   不健康的身體不只有胖")]),o("p",[o("ReportNotation",{attrs:{notation:t.notations[1]}},[t._v("研究")]),t._v("顯示，自八〇年代開始，臺灣人因為生活水平提升，體重普遍有越來越胖的趨勢，肥胖情形也相較其他亞洲國家嚴重。基於國民健康考量，政府部門開始訂定許多防治肥胖的策略，民間也掀起一股健身與減肥熱潮，並風行至今。")],1),o("p",[t._v("「健康」是推行減重最具科學正當性的好理由。國健署肥胖防治網指出，肥胖會帶來罹患嚴重疾病，例如糖尿病、高血壓與癌症等等健康風險，民眾也習慣將肥胖與病態渲染在一起告誡彼此。")]),o("p",[o("ReportNotation",{attrs:{notation:t.notations[2]}},[t._v("張凱鈞")]),t._v("分享近期的健檢結果，他語帶不可思議地說：「真的很奇妙！所有的健康數值都顯示正常，連膽固醇都沒有超標，只有體重過重。」博士生"),o("ReportNotation",{attrs:{notation:t.notations[3]}},[t._v("林宜萱")]),t._v("擁有醫學檢驗專長，她表示自己過去的健康數值除了體重之外，一直都很正常。")],1),o("p",[t._v("體重過重就代表身體不健康嗎？林宜萱回答：「身體健康是很複雜的概念。」")]),o("p",[t._v("著名醫學期刊《THE LANCET》"),o("ReportNotation",{attrs:{notation:t.notations[4]}},[t._v("研究")]),t._v("指出，過重者傾向有新陳代謝、心血管疾病的風險，但不代表一定會發生；單單仰賴 BMI（身體質量指數）、腰圍這類的體位測量來評斷一個人身體健康與否，其實不精確。")],1),o("p",[t._v("「體重高不代表身體不健康，有很多原因會影響體重變化，但結果都很相像：不是瘦就是胖。」"),o("ReportNotation",{attrs:{notation:t.notations[5]}},[t._v("黃元杰")]),t._v("說，他自嘲自己乍看是「肥宅」，卻不會有人想到他是一名健身教練，擁有專業的健康知識和固定的運動習慣，只是生來就擁有易胖體質。")],1),o("p",[t._v("學者林伊柔的"),o("ReportNotation",{attrs:{notation:t.notations[6]}},[t._v("研究")]),t._v("整理，醫學上將肥胖成因分為兩種，一是家族遺傳、個人基因或體質引起生理機能失常的內因性肥胖，另一則是飲食、行為或生活作息造成的外因性肥胖。")],1),o("p",[t._v("但大眾對肥胖成因的刻板印象停留在後者，將胖子視為好吃懶做、不懂自我節制、沒毅力等等負面人格的集大成。")]),o("p",[t._v("黃元杰認為，體態能反映出一個人在某一段時間內的生活狀態，他說：「與其關心一個人變胖，不如關心他的生活過得如何。」不健康的身體樣貌有很多種，並不是只有胖，而且造成身體不健康的原因也很多。")]),o("ReportFigure",{attrs:{src:"report2/photo2",caption:"汪綺一邊聆聽醫護人員的術前說明，一邊若有所思地看向窗外。（攝影／林梵謹）"}}),o("p",[t._v("「世界上很多人在做很不健康的事情，但他們都沒有像肥胖一樣被嚴厲喝止。」體重破百的汪綺淡淡地說，積累過久以關心之名的善意提醒，會發酵成惡意的人身攻擊；比起生理健康，胖子因人們謾罵和責備產生的抑鬱心理，是更具殺傷力的不健康因子。")]),o("h4",{attrs:{id:"title2"}},[t._v("健康大旗打翻一船胖子   身心俱傷")]),o("p",[t._v("走進浴室、褪去衣服，洗澡是人與身體最赤裸的相處時間，林宜萱常在此時想著：「要是能拿刀把身上的肥肉割掉該多好？」")]),o("p",[t._v("林宜萱認為，讓胖子對自己感覺很糟的情緒，是由頻繁的負面經驗長期累積而來：「從小家人就不斷要求我減肥，我一直接收到『胖不好、胖很醜、胖很噁心』這類的訊息。」她減重 20 公斤以後發現：「比起健康，人們似乎更在乎胖瘦。」減重成功時人們會給予正面的鼓勵，卻沒人在乎是不是透過健康的方式減肥。")]),o("p",[o("ReportNotation",{attrs:{notation:t.notations[7]}},[t._v("黃冠潔")]),t._v("是一位性格爽朗的舞者，臉上掛著陽光般的笑容。她自述自己從小就胖，老是被小學同學喊作「阿肥仔（台語）」，在升國中那年發奮減肥，每天只喝檸檬原汁與開水，其他時間就運動，一個月就從 80 公斤瘦到 50 公斤。")],1),o("p",[t._v("「我爸覺得我做得很好，完全不顧小孩性命。」黃冠潔苦笑地說，國中入學後不再受到嘲笑，讓她覺得很諷刺：「是不是要擁有大家相同的體態，才能獲得同樣的尊重？」在發育期間過度減肥，換來的是一個健康受損的身體，黃冠潔長大後胃始終很差，身材也慢慢復胖。")]),o("p",[t._v("「你是不是又胖了⋯⋯」「你這樣不健康。」「你要運動啊！」人們自認為出發點為「關心」的言語，對胖子來說可能很受傷，就像告訴憂鬱症患者「你不能再悲觀了⋯⋯」「樂觀才會健康。」「你要加油！」一樣，這些言論不但沒有關心到當事人，反而讓他感覺自己是不是真的很糟糕？")]),o("p",[t._v("「人們總是打著『健康』的大旗攻擊胖子。」健身教練黃元杰認為，大多人以「為你好」為由來要求胖子減肥時，並不會為自己的話負起責任，更不用說幫助對方打造更健康的身體。")]),o("p",[t._v("呼籲肥胖的健康風險人人視為己任，卻疏忽一件再明顯不過的事：肥胖為身體帶來的負擔，胖子自己清楚得很。")]),o("h4",{attrs:{id:"title3"}},[t._v("身體負擔矛盾又沈重   胖子減肥不擇手段")]),o("p",[t._v("試想在又濕又悶的炎熱夏天走路，大腿內側的肉會因為汗水相黏、撕開，又黏住再拔開，隨著步伐不停來回摩擦，直到發痛、紅腫甚至破皮……這是擁有一雙粗胖大腿才懂的折磨。")]),o("p",[t._v("胖身體有形形色色的型態，每位胖子的困擾也不盡相同，無時無刻不在告誡當事人肥胖造成的痛苦。"),o("ReportNotation",{attrs:{notation:t.notations[8]}},[t._v("孫家偉")]),t._v("表示，身體對膝蓋造成的負擔很大；"),o("ReportNotation",{attrs:{notation:t.notations[9]}},[t._v("賀芸")]),t._v("說，爬樓梯時容易喘；"),o("ReportNotation",{attrs:{notation:t.notations[10]}},[t._v("蔡博藝")]),t._v("解釋，即便每天都睡超過十小時，白天活動還是很累。")],1),o("p",[o("ReportNotation",{attrs:{notation:t.notations[11]}},[t._v("曾維萱")]),t._v("則分享，除了大腿摩擦，她還有手臂摩擦腋下、胸罩摩擦身體的麻煩，曾維萱描述：「會很燒、很燙、很痛。」她的身體不僅怕熱，皮膚也要頻繁保養。")],1),o("p",[t._v("如此折騰的身體經驗確實讓人燃起熊熊的減肥鬥志，然而想改變身材、打造一副醫學認證「健康」的身體，對任何體型的人來說，都不是一件容易的事。除了基因上的限制，必須養成全新的生活習慣，有時還得尋求健身教練、營養學專家，甚至是醫療人員的協助。")]),o("p",[t._v("減肥靠得不僅是意志力，在精力與財力上都要付出成本，令人往往心有餘而力不足。「胖真的不是刻意的。」"),o("ReportNotation",{attrs:{notation:t.notations[12]}},[t._v("黃元杰")]),t._v("說出許多胖子的心聲，他專研健身與營養學，過去減肥復胖來回至少十次，最瘦曾達 68 公斤，至今仍與體重搏鬥。")],1),o("p",[o("ReportNotation",{attrs:{notation:t.notations[13]}},[t._v("許思薇")]),t._v("曾花兩萬台幣購買瘦身療程，雖小有成效，卻因經濟能力無法持續負荷而作罷，體重也回升；"),o("ReportNotation",{attrs:{notation:t.notations[14]}},[t._v("簡秀娟")]),t._v("表示，在醫院看過減肥門診、吃代餐，也喝過減肥奶昔，雖都有短暫的效果，仍難敵根深蒂固的生活習慣。")],1),o("p",[t._v("「人在餓的時候會失去理智。」體重破百的張凱鈞自白：「當我看著手中的食物，又看著鏡子中的自己時，我會責備自己。但我還是會吃，吃完就內疚。」他期許以更健康的方式愛自己的身體，實際作為老是大相徑庭。")]),o("p",[t._v("「有一次洗澡我替自己推拿，推到肚子時，我一邊推、一邊哭、一邊跟它們說『對不起』⋯⋯我還是瘦不下來，讓我覺得自己很虛偽。」"),o("ReportNotation",{attrs:{notation:t.notations[15]}},[t._v("張凱鈞")]),t._v("對無法控制飲食的自己深感罪惡——「不夠痛苦」是他認為堅持不下去的原因。")],1),o("p",[t._v("張凱鈞解釋，他鮮少遭受身材霸凌，平時與人交往也很愉快，因此想瘦的動力與慾望沒有痛苦到必須轉變生活習慣。「如果因為身材被攻擊，我早就變瘦了。」外型圓潤的演員"),o("ReportNotation",{attrs:{notation:t.notations[16]}},[t._v("郭文頤")]),t._v("有相似的經驗，她說：「為了活下去，一定會改變的吧？」")],1),o("h4",{attrs:{id:"title4"}},[t._v("減肥並非以胖為恥   認同自己為健康改變")]),o("p",[t._v("汪綺的母親過去是名護理師，好幾年前就嘗試說服女兒接受減重手術，但汪綺斷然拒絕的原因是：「我對我的狀態很舒服，我不討厭當胖子。」")]),o("p",[t._v("汪綺是來自臺灣的網紅，在網路上化名「貓不」，她在短影音社群《美拍》中的追蹤人數超過 50 萬。汪綺想用自己的存在，證明任何體型都能找到活出自我的方式，而粉絲也是基於這個理由支持著她，汪綺始終認為自己不需要動減重手術。")]),o("p",[t._v("直到近年，身體的種種警訊讓 25 歲的汪綺感到不對勁，體力變差、體重逐年上升，腳部的疼痛讓喜愛打扮的汪綺不能再穿高跟鞋，身體甚至出現影響基本生命機能的症狀，她意識到自己必須要有所改變。")]),o("ReportFigure",{attrs:{src:"report2/photo3",caption:"汪綺在五小時的手術後極為虛弱，她的母親擔憂地在病床旁安撫著。（攝影／林梵謹）"}}),o("p",[t._v("在 2017 年的夏日正午，汪綺動了一場超過五個小時的胃縮手術，手術切除她三分之二的胃，是一種具有一定風險且不可逆的減重手術。")]),o("p",[t._v("汪綺在手術前晚口吻平靜，實際上心裡「怕得要死」；但她相信，認同肥胖身體存在的價值，跟追求身體健康並不衝突：「我接受手術，不是因為我認為胖不好。我花了很多時間接受自己的身體，並且喜歡它，同時我也可以為健康做出改變。」")]),o("p",[t._v("「我並不討厭別人用『健康』的名義要求我減肥。」"),o("ReportNotation",{attrs:{notation:t.notations[17]}},[t._v("黃志嘉")]),t._v("認為，不了解自己的人才會為了得到別人的認同改變身材，他說：「真的為健康減肥，代表你認同你自己，這是一件很偉大的事。」")],1)],1)},a=[],r=o("87db"),e=o("6111"),s={name:"ReportContent2",components:{ReportNotation:r["a"],ReportFigure:e["a"]},data:function(){return{notations:[{txt:"（155 公分／曾 120 公斤）",display:"inline"},{txt:"<p>林月美、朱志良、洪清霖、黃伯超（1985）。〈台灣地區青少年之營養狀態評估〉，《中華民國營養學會雜誌》，10（3,4）：91-105。</p><p>葉志嶸、張新儀、潘文涵（2011）。〈臺灣近十二年之肥胖與代謝症候群之變遷趨勢：由 NAHSIT 1993-1996 到 2005-2008〉。《Asia Pacific Journal of Clinical Nutrition》，20（2）：292-300。</p>",display:"block"},{txt:"（173 公分／140 公斤）",display:"inline"},{txt:"（160 公分／曾 85 公斤）",display:"inline"},{txt:"<p>Yamanea, Yosuke (2004), Appropriate BMI for Asian populations, THE LANCET, 363, 1077.</p>",display:"block"},{txt:"（175 公分／105 公斤）",display:"inline"},{txt:"<p>林伊柔（2011）。如果你再瘦一點就更好了：胖女性的身體經驗。東海大學社會學研究所碩士班碩士論文。</p>",display:"block"},{txt:"（160 公分／98 公斤）",display:"inline"},{txt:"（180 公分／115 公斤）",display:"inline"},{txt:"（173 公分／曾 88 公斤）",display:"inline"},{txt:"（161 公分／曾 88 公斤）",display:"inline"},{txt:"（158 公分／86 公斤）",display:"inline"},{txt:"（175 公分／105 公斤）",display:"inline"},{txt:"（164 公分／83 公斤）",display:"inline"},{txt:"（170 公分／145 公斤）",display:"inline"},{txt:"（173 公分／140 公斤）",display:"inline"},{txt:"（160 公分／73 公斤）",display:"inline"},{txt:"（176 公分／120 公斤）",display:"inline"}]}},mounted:function(){this.$emit("loaded")}},p=s,l=o("2877"),c=Object(l["a"])(p,i,a,!1,null,null,null);n["default"]=c.exports},f6f7:function(t,n,o){}}]);
//# sourceMappingURL=chunk-53f06ab8-legacy.38d9c308.js.map
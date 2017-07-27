"use strict";
const Alexa = require("alexa-sdk"); // import the library

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

// =====================================================================================================
// --------------------------------- Section 1. Data and Text strings  ---------------------------------
// =====================================================================================================


var data=[
    {
      libraryName:"northfield library",
      address:"byron square",
      cityName:"aberdeen",
      email:"",
      phone:"0121 464 1007"
    },
    {
      libraryName:"aberdeen central library",
      address:"rosemount viaduct",
      cityName:"aberdeen",
      email:"centrallibrary@aberdeencity.gov.uk",
      phone:"01224 652500"
    },
    {
      libraryName:"ferryhill library",
      address:"fonthill road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"torry library",
      address:"victoria road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"cove library",
      address:"loirston avenue",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"kincorth library and customer access point",
      address:"provost watt drive",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"culter library",
      address:"north deeside road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"airyhall library",
      address:"springfield road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"cults library",
      address:"429 north deeside road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"cornhill library",
      address:"cornhill drive",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"mastrick library",
      address:"greenfern road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"dyce library",
      address:"riverview drive",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"bucksburn community library",
      address:"kepplehills road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"bridge of don library",
      address:"scotscityname road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"tillydrone library",
      address:"pennan road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"woodside library",
      address:"356 clifton road",
      cityName:"aberdeen",
      email:"",
      phone:""
    },
    {
      libraryName:"aboyne library",
      address:"community centre",
      cityName:"aboyne",
      email:"",
      phone:""
    },
    {
      libraryName:"balleter library",
      address:"station square",
      cityName:"ballater",
      email:"",
      phone:""
    },
    {
      libraryName:"balmedie library",
      address:"eigie road",
      cityName:"balmedie",
      email:"",
      phone:""
    },
    {
      libraryName:"banchory library",
      address:"bridge street",
      cityName:"banchory",
      email:"",
      phone:""
    },
    {
      libraryName:"banff library",
      address:"high street",
      cityName:"banff",
      email:"",
      phone:""
    },
    {
      libraryName:"whitehills library",
      address:"loch street",
      cityName:"banff",
      email:"",
      phone:""
    },
    {
      libraryName:"bracoden library",
      address:"bracoden school",
      cityName:"banff",
      email:"",
      phone:""
    },
    {
      libraryName:"ellon library",
      address:"station road",
      cityName:"ellon",
      email:"",
      phone:""
    },
    {
      libraryName:"fettercairn library",
      address:"fettercairn school",
      cityName:"fettercairn",
      email:"",
      phone:""
    },
    {
      libraryName:"new pitsligo library",
      address:"79 high street",
      cityName:"fraserburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"strichen library",
      address:"59a water street",
      cityName:"fraserburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"cairnbulg library",
      address:"station road",
      cityName:"fraserburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"fraserburgh library",
      address:"king edward street",
      cityName:"fraserburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"aberchirder library",
      address:"111 main street",
      cityName:"huntly",
      email:"",
      phone:""
    },
    {
      libraryName:"huntly library",
      address:"brander library",
      cityName:"huntly",
      email:"",
      phone:""
    },
    {
      libraryName:"insch library",
      address:"insch institute",
      cityName:"insch",
      email:"",
      phone:""
    },
    {
      libraryName:"inverurie library",
      address:"cityname hall",
      cityName:"inverurie",
      email:"",
      phone:""
    },
    {
      libraryName:"kemnay library",
      address:"kendall road",
      cityName:"kemnay",
      email:"",
      phone:""
    },
    {
      libraryName:"kintore library",
      address:"castle walk",
      cityName:"kintore",
      email:"",
      phone:""
    },
    {
      libraryName:"laurencekirk library",
      address:"the burgh buildings",
      cityName:"laurencekirk",
      email:"",
      phone:""
    },
    {
      libraryName:"macduff library",
      address:"17 high street",
      cityName:"macduff",
      email:"",
      phone:""
    },
    {
      libraryName:"mintlaw library",
      address:"newlands road",
      cityName:"mintlaw",
      email:"",
      phone:""
    },
    {
      libraryName:"inverbervie library",
      address:"church street",
      cityName:"montrose",
      email:"",
      phone:""
    },
    {
      libraryName:"newmachar library",
      address:"school road",
      cityName:"newmachar",
      email:"",
      phone:""
    },
    {
      libraryName:"newtonhill library",
      address:"coastal car park",
      cityName:"newtonhill",
      email:"",
      phone:""
    },
    {
      libraryName:"alis headquarters",
      address:"meldrum meg way",
      cityName:"oldmeldrum",
      email:"ruth.greig@aberdeenshire.gov.uk",
      phone:"01651 871218"
    },
    {
      libraryName:"meldrum library",
      address:"meldrum academy",
      cityName:"oldmeldrum",
      email:"",
      phone:""
    },
    {
      libraryName:"cruden bay library",
      address:"station road",
      cityName:"peterhead",
      email:"",
      phone:""
    },
    {
      libraryName:"peterhead library",
      address:"51 st peter street",
      cityName:"peterhead",
      email:"",
      phone:""
    },
    {
      libraryName:"boddam library",
      address:"26 queens road",
      cityName:"peterhead",
      email:"",
      phone:""
    },
    {
      libraryName:"portlethen library",
      address:"bruntland road",
      cityName:"portlethen",
      email:"",
      phone:""
    },
    {
      libraryName:"portsoy library",
      address:"aird green",
      cityName:"portsoy",
      email:"",
      phone:""
    },
    {
      libraryName:"rosehearty library",
      address:"pitsligo street",
      cityName:"rosehearty",
      email:"",
      phone:""
    },
    {
      libraryName:"westhill library",
      address:"hays way",
      cityName:"skene",
      email:"",
      phone:""
    },
    {
      libraryName:"stonehaven library",
      address:"evan street",
      cityName:"stonehaven",
      email:"",
      phone:""
    },
    {
      libraryName:"turriff library",
      address:"grange villa",
      cityName:"turriff",
      email:"",
      phone:""
    },
    {
      libraryName:"amlwch library",
      address:"ffordd parys",
      cityName:"amlwch",
      email:"",
      phone:""
    },
    {
      libraryName:"beaumaris library",
      address:"hen ysgol david hughes",
      cityName:"beaumaris",
      email:"",
      phone:""
    },
    {
      libraryName:"benllech library",
      address:"ffordd bangor",
      cityName:"benllech",
      email:"",
      phone:""
    },
    {
      libraryName:"holyhead library",
      address:"newry fields",
      cityName:"caergybi",
      email:"",
      phone:""
    },
    {
      libraryName:"cemaes library",
      address:"lôn glascoed",
      cityName:"cemaes",
      email:"",
      phone:""
    },
    {
      libraryName:"llangefni library",
      address:"lôn-y-felin",
      cityName:"llangefni",
      email:"dpxlh@anglesey.gov.uk",
      phone:"01248 752095"
    },
    {
      libraryName:"moelfre library",
      address:"y ganolfan",
      cityName:"moelfre",
      email:"",
      phone:""
    },
    {
      libraryName:"newborough library",
      address:"neuadd pritchard jones",
      cityName:"niwbwrch",
      email:"",
      phone:""
    },
    {
      libraryName:"menai bridge library",
      address:"ffordd y ffair",
      cityName:"porthaethwy",
      email:"",
      phone:""
    },
    {
      libraryName:"arbroath library",
      address:"hill terrace",
      cityName:"arbroath",
      email:"arbroath.library@angus.gov.uk",
      phone:"01241 872248"
    },
    {
      libraryName:"brechin library",
      address:"10 st ninians square",
      cityName:"brechin",
      email:"brechin.library@angus.gov.uk",
      phone:"1355 622687"
    },
    {
      libraryName:"carnoustie library",
      address:"high street",
      cityName:"carnoustie",
      email:"carnoustie.library@angus.gov.uk",
      phone:"01241 859620"
    },
    {
      libraryName:"forfar library",
      address:"west high street",
      cityName:"forfar",
      email:"forfar.library@angus.gov.uk",
      phone:"01307 466071"
    },
    {
      libraryName:"kirriemuir library",
      address:"cityname hall",
      cityName:"kirriemuir",
      email:"kirriemuir.library@angus.gov.uk",
      phone:"01575 572357"
    },
    {
      libraryName:"monifieth library",
      address:"high street",
      cityName:"monifieth",
      email:"monifieth.library@angus.gov.uk",
      phone:"01382 533819"
    },
    {
      libraryName:"montrose library",
      address:"high street",
      cityName:"montrose",
      email:"montrose.library@angus.gov.uk",
      phone:"01674 673256"
    },
    {
      libraryName:"library headquarters",
      address:"highland avenue",
      cityName:"dunoon",
      email:"andy.ewan@argyll-bute.gov.uk",
      phone:"01369 703214"
    },
    {
      libraryName:"dunoon library",
      address:"248 argyll street",
      cityName:"dunoon",
      email:"",
      phone:""
    },
    {
      libraryName:"oban library",
      address:"77 albany road",
      cityName:"oban",
      email:"",
      phone:""
    },
    {
      libraryName:"ardrossan library",
      address:"39-41 princes street",
      cityName:"ardrossan",
      email:"localhistory@north-ayrshire.gov.uk",
      phone:"+44 (0) 1294 469137"
    },
    {
      libraryName:"auchinleck community library",
      address:"well road",
      cityName:"auchinleck",
      email:"",
      phone:""
    },
    {
      libraryName:"tarbolton library",
      address:"54 montgomery street",
      cityName:"ayr",
      email:"",
      phone:""
    },
    {
      libraryName:"mossblown library",
      address:"2 annbank road",
      cityName:"ayr",
      email:"",
      phone:""
    },
    {
      libraryName:"coylton library",
      address:"28 main street",
      cityName:"ayr",
      email:"",
      phone:""
    },
    {
      libraryName:"forehill library",
      address:"31 mount oliphant crescent",
      cityName:"ayr",
      email:"",
      phone:""
    },
    {
      libraryName:"alloway library",
      address:"doonholm road",
      cityName:"ayr",
      email:"",
      phone:""
    },
    {
      libraryName:"beith library",
      address:"39- 41'main street",
      cityName:"beith",
      email:"",
      phone:""
    },
    {
      libraryName:"catrine community library",
      address:"2 institute avenue",
      cityName:"catrine",
      email:"",
      phone:""
    },
    {
      libraryName:"cumnock community library",
      address:"25-27 ayr road",
      cityName:"cumnock",
      email:"",
      phone:""
    },
    {
      libraryName:"dalmellington community library",
      address:"citynamehead",
      cityName:"dalmellington",
      email:"",
      phone:""
    },
    {
      libraryName:"dalry library",
      address:"14-16 the cross",
      cityName:"dalry",
      email:"",
      phone:""
    },
    {
      libraryName:"dalrymple community library",
      address:"barbieston road",
      cityName:"dalrymple",
      email:"",
      phone:""
    },
    {
      libraryName:"darvel community library",
      address:"cityname hall",
      cityName:"darvel",
      email:"",
      phone:""
    },
    {
      libraryName:"dreghorn library",
      address:"main street",
      cityName:"dreghorn",
      email:"",
      phone:""
    },
    {
      libraryName:"drongan community library",
      address:"mill oshield road",
      cityName:"drongan",
      email:"",
      phone:""
    },
    {
      libraryName:"galston community library",
      address:"henrietta street",
      cityName:"galston",
      email:"",
      phone:""
    },
    {
      libraryName:"ballantrae library",
      address:"the hall",
      cityName:"girvan",
      email:"",
      phone:""
    },
    {
      libraryName:"girvan library",
      address:"montgomerie street",
      cityName:"girvan",
      email:"",
      phone:""
    },
    {
      libraryName:"hurlford community library",
      address:"blair road",
      cityName:"hurlford",
      email:"",
      phone:""
    },
    {
      libraryName:"bourtreehill library",
      address:"cheviot way",
      cityName:"irvine",
      email:"",
      phone:""
    },
    {
      libraryName:"irvine library",
      address:"168 high street",
      cityName:"irvine",
      email:"",
      phone:""
    },
    {
      libraryName:"arran library",
      address:"brodick hall",
      cityName:"isle of arran",
      email:"",
      phone:""
    },
    {
      libraryName:"kilbirnie library",
      address:"avils place",
      cityName:"kilbirnie",
      email:"",
      phone:""
    },
    {
      libraryName:"the dick institute library",
      address:"elmbank avenue",
      cityName:"kilmarnock",
      email:"",
      phone:""
    },
    {
      libraryName:"bellfield community library",
      address:"79 whatriggs road",
      cityName:"kilmarnock",
      email:"",
      phone:""
    },
    {
      libraryName:"symington library",
      address:"15 brewlands road",
      cityName:"kilmarnock",
      email:"",
      phone:""
    },
    {
      libraryName:"dundonald library",
      address:"fullarton avenue",
      cityName:"kilmarnock",
      email:"",
      phone:""
    },
    {
      libraryName:"crosshouse community library",
      address:"crosshouse area centre",
      cityName:"kilmarnock",
      email:"",
      phone:""
    },
    {
      libraryName:"kilmaurs community library",
      address:"irvine road",
      cityName:"kilmaurs",
      email:"",
      phone:""
    },
    {
      libraryName:"kilwinning library",
      address:"st winnings lane",
      cityName:"kilwinning",
      email:"",
      phone:""
    },
    {
      libraryName:"fairlie library",
      address:"main road",
      cityName:"largs",
      email:"",
      phone:""
    },
    {
      libraryName:"largs library",
      address:"29 allenpark street",
      cityName:"largs",
      email:"",
      phone:""
    },
    {
      libraryName:"mauchline community library",
      address:"2 the cross",
      cityName:"mauchline",
      email:"",
      phone:""
    },
    {
      libraryName:"maybole library",
      address:"carnegie building",
      cityName:"maybole",
      email:"",
      phone:""
    },
    {
      libraryName:"muirkirk community library",
      address:"burns avenue",
      cityName:"muirkirk",
      email:"",
      phone:""
    },
    {
      libraryName:"new cumnock community library",
      address:"community centre",
      cityName:"new cumnock",
      email:"",
      phone:""
    },
    {
      libraryName:"newmilns community library",
      address:"craigview road",
      cityName:"newmilns",
      email:"",
      phone:""
    },
    {
      libraryName:"ochiltree community library",
      address:"main street",
      cityName:"ochiltree",
      email:"",
      phone:""
    },
    {
      libraryName:"patna community library",
      address:"doonside avenue",
      cityName:"patna",
      email:"",
      phone:""
    },
    {
      libraryName:"prestwick library",
      address:"14 kyle street",
      cityName:"prestwick",
      email:"",
      phone:""
    },
    {
      libraryName:"saltcoats library",
      address:"springvale place",
      cityName:"saltcoats",
      email:"",
      phone:""
    },
    {
      libraryName:"skelmorlie library",
      address:"hally brown library and reading room",
      cityName:"skelmorlie",
      email:"",
      phone:""
    },
    {
      libraryName:"springside library",
      address:"springside community centre",
      cityName:"springside",
      email:"",
      phone:""
    },
    {
      libraryName:"stevenston library",
      address:"main street",
      cityName:"stevenston",
      email:"",
      phone:""
    },
    {
      libraryName:"stewarton community library",
      address:"avenue street",
      cityName:"stewarton",
      email:"",
      phone:""
    },
    {
      libraryName:"troon library",
      address:"5 south beach",
      cityName:"troon",
      email:"",
      phone:""
    },
    {
      libraryName:"west kilbride library",
      address:"halfway street",
      cityName:"west kilbride",
      email:"",
      phone:""
    },
    {
      libraryName:"aviemore library",
      address:"muirton",
      cityName:"aviemore",
      email:"aviemore.library@highlifehighland.com",
      phone:"01479 813141"
    },
    {
      libraryName:"grancityname library",
      address:"ymca building",
      cityName:"grancityname-on-spey",
      email:"",
      phone:""
    },
    {
      libraryName:"badenoch library",
      address:"spey street",
      cityName:"kingussie",
      email:"",
      phone:""
    },
    {
      libraryName:"ampthill  library",
      address:"1 dunstable street",
      cityName:"ampthill",
      email:"",
      phone:""
    },
    {
      libraryName:"barton library",
      address:"bedford road",
      cityName:"barton le clay",
      email:"",
      phone:"0300 3008054"
    },
    {
      libraryName:"kempston library",
      address:"halsey road",
      cityName:"bedford",
      email:"bedfordshire.libraries@bedford.gov.uk",
      phone:"01234 276453"
    },
    {
      libraryName:"putnoe library",
      address:"library walk",
      cityName:"bedford",
      email:"bedfordshire.libraries@bedford.gov.uk",
      phone:"01234 276462"
    },
    {
      libraryName:"bedford central library",
      address:"harpur street",
      cityName:"bedford",
      email:"bedfordshire.libraries@bedford.gov.uk",
      phone:"01234 718178"
    },
    {
      libraryName:"bromham library",
      address:"springfield drive",
      cityName:"bedford",
      email:"bedfordshire.libraries@bedford.gov.uk",
      phone:"01234 824391"
    },
    {
      libraryName:"bedford prison library",
      address:"st loyes street",
      cityName:"bedford",
      email:"",
      phone:""
    },
    {
      libraryName:"biggleswade library",
      address:"chestnut avenue",
      cityName:"biggleswade",
      email:"",
      phone:"0300 3008055"
    },
    {
      libraryName:"dunstable library",
      address:"vernon place",
      cityName:"dunstable",
      email:"",
      phone:""
    },
    {
      libraryName:"flitwick library",
      address:"coniston road",
      cityName:"flitwick",
      email:"",
      phone:""
    },
    {
      libraryName:"houghton regis library",
      address:"bedford sq",
      cityName:"houghton regis",
      email:"",
      phone:"0300 3008058"
    },
    {
      libraryName:"leighton buzzard library",
      address:"lake street",
      cityName:"leighton buzzard",
      email:"",
      phone:""
    },
    {
      libraryName:"bury park library",
      address:"161 dunstable rd",
      cityName:"luton",
      email:"libraryinfo@lutonculture.com",
      phone:"01582 486569"
    },
    {
      libraryName:"luton central library",
      address:"st georges square",
      cityName:"luton",
      email:"libraryinfo@lutonculture.com",
      phone:"01582 547418"
    },
    {
      libraryName:"leagrave library",
      address:"marsh road",
      cityName:"luton",
      email:"libraryinfo@lutonculture.com",
      phone:"01582 556650"
    },
    {
      libraryName:"sundon park library",
      address:"hill rise",
      cityName:"luton",
      email:"libraryinfo@lutonculture.com",
      phone:"01582 574 573"
    },
    {
      libraryName:"marsh farm library",
      address:"lea manor high school, northwell drive",
      cityName:"luton",
      email:"libraryinfo@lutonculture.com",
      phone:"01582 574 803"
    },
    {
      libraryName:"lewsey library",
      address:"landrace road",
      cityName:"luton",
      email:"libraryinfo@lutonculture.com",
      phone:"01582 696 094"
    },
    {
      libraryName:"wigmore library",
      address:"wigmore lane",
      cityName:"luton",
      email:"libraryinfo@lutonculture.com",
      phone:"01582 706340"
    },
    {
      libraryName:"stopsley library",
      address:"hitchin road",
      cityName:"luton",
      email:"libraryinfo@lutonculture.com",
      phone:"01582 706368"
    },
    {
      libraryName:"potton library",
      address:"clock house",
      cityName:"potton",
      email:"",
      phone:""
    },
    {
      libraryName:"sandy library",
      address:"market square",
      cityName:"sandy",
      email:"",
      phone:""
    },
    {
      libraryName:"shefford library",
      address:"high street",
      cityName:"shefford",
      email:"",
      phone:""
    },
    {
      libraryName:"stotfold library",
      address:"hitchin road",
      cityName:"stotfold",
      email:"",
      phone:""
    },
    {
      libraryName:"toddington library",
      address:"9 market square",
      cityName:"toddington",
      email:"",
      phone:"0300 3008069"
    },
    {
      libraryName:"wootton library",
      address:"lorraine rd",
      cityName:"wootton",
      email:"bedfordshire.libraries@bedford.gov.uk",
      phone:"01234 766 061"
    },
    {
      libraryName:"arborfield container library",
      address:"parish council car park",
      cityName:"arborfield cross",
      email:"",
      phone:"07801 664 520"
    },
    {
      libraryName:"ascot durning library",
      address:"high street",
      cityName:"ascot",
      email:"ascot.library@rbwm.gov.uk",
      phone:"01344 630140"
    },
    {
      libraryName:"ascot heath library",
      address:"fernbank road",
      cityName:"ascot",
      email:"ascotheath.library@bracknell-forest.gov.uk",
      phone:"01344 884030"
    },
    {
      libraryName:"sunningdale container library",
      address:"recreation ground",
      cityName:"ascot",
      email:"container.library@rbwm.gov.uk",
      phone:"01628 796555"
    },
    {
      libraryName:"binfield library",
      address:"benetfeld road",
      cityName:"binfield",
      email:"binfield.library@bracknell-forest.gov.uk",
      phone:"01344 306663"
    },
    {
      libraryName:"bracknell library",
      address:"cityname square",
      cityName:"bracknell",
      email:"bracknell.library@bracknell-forest.gov.uk",
      phone:"01344 423149"
    },
    {
      libraryName:"harmans water library",
      address:"the square",
      cityName:"bracknell",
      email:"harmanswater.library@bracknell-forest.gov.uk",
      phone:"01344 423660"
    },
    {
      libraryName:"great hollands library",
      address:"the square",
      cityName:"bracknell",
      email:"greathollands.library@bracknell-forest.gov.uk",
      phone:"01344 424095"
    },
    {
      libraryName:"whitegrove library",
      address:"5 county lane",
      cityName:"bracknell",
      email:"whitegrove.library@bracknell-forest.gov.uk",
      phone:"01344 424211"
    },
    {
      libraryName:"birch hill library",
      address:"leppington",
      cityName:"bracknell",
      email:"birchhill.library@bracknell-forest.gov.uk",
      phone:"01344 456526"
    },
    {
      libraryName:"cookham library",
      address:"high road",
      cityName:"cookham",
      email:"cookham.library@rbwm.gov.uk",
      phone:"01628 526147"
    },
    {
      libraryName:"cox green library",
      address:"49 highfield lane",
      cityName:"cox green",
      email:"coxgreenlib@rbwm.gov.uk",
      phone:"01628 673942"
    },
    {
      libraryName:"crowthorne library",
      address:"162 high street",
      cityName:"crowthorne",
      email:"",
      phone:""
    },
    {
      libraryName:"datchet library",
      address:"montagu house",
      cityName:"datchet",
      email:"datchet.library@rbwm.gov.uk",
      phone:"01753 545 310"
    },
    {
      libraryName:"eton library",
      address:"136 high street",
      cityName:"eton",
      email:"eton.library@rbwm.gov.uk",
      phone:"01753 860506"
    },
    {
      libraryName:"eton wick library",
      address:"village hall",
      cityName:"eton wick",
      email:"etonwick.library@rbwm.gov.uk",
      phone:"01753 857 933"
    },
    {
      libraryName:"lambourn library",
      address:"high street",
      cityName:"hangerford",
      email:"lambournlibrary@westberks.gov.uk",
      phone:"01488 71350"
    },
    {
      libraryName:"holyport container library",
      address:"holyport school",
      cityName:"holyport",
      email:"container.library@rbwm.gov.uk",
      phone:"01628 796555"
    },
    {
      libraryName:"hungerford library",
      address:"church street",
      cityName:"hungerford",
      email:"hungerfordlibrary@westberks.gov.uk",
      phone:"01488 682 660"
    },
    {
      libraryName:"maidenhead library",
      address:"st. ives road",
      cityName:"maidenhead",
      email:"maidenhead.library@rbwm.gov.uk",
      phone:"01628 796 969"
    },
    {
      libraryName:"woodlands park container library",
      address:"woodlands park village centre, manifold way",
      cityName:"maidenhead",
      email:"container.library@rbwm.gov.uk",
      phone:"01628 796555"
    },
    {
      libraryName:"furze platt container library",
      address:"shifford crescent shops,",
      cityName:"maidenhead",
      email:"container.library@rbwm.gov.uk",
      phone:"01628 796555"
    },
    {
      libraryName:"newbury library",
      address:"the wharf",
      cityName:"newbury",
      email:"newburylibrary@westberks.gov.uk",
      phone:"01635 519900"
    },
    {
      libraryName:"old windsor library",
      address:"memorial hall",
      cityName:"old windsor",
      email:"oldwindsor.library@rbwm.gov.uk",
      phone:"01753 852098"
    },
    {
      libraryName:"caversham library",
      address:"church street",
      cityName:"reading",
      email:"",
      phone:"0118 901 5103"
    },
    {
      libraryName:"reading central library",
      address:"abbey square",
      cityName:"reading",
      email:"",
      phone:"0118 901 5950"
    },
    {
      libraryName:"lower earley library",
      address:"chalfont close",
      cityName:"reading",
      email:"",
      phone:"0118 931 2150"
    },
    {
      libraryName:"mortimer library",
      address:"27 victoria road",
      cityName:"reading",
      email:"mortimerlibrary@westberks.gov.uk",
      phone:"0118 933 2882"
    },
    {
      libraryName:"twyford library",
      address:"polehampton close",
      cityName:"reading",
      email:"",
      phone:"0118 934 0800"
    },
    {
      libraryName:"maiden erlegh library",
      address:"off silverdale road",
      cityName:"reading",
      email:"",
      phone:"0118 966 6630"
    },
    {
      libraryName:"woodley library",
      address:"headley road",
      cityName:"reading",
      email:"",
      phone:"0118 969 0304"
    },
    {
      libraryName:"spencers wood library",
      address:"basingstoke road",
      cityName:"reading",
      email:"",
      phone:"0118 988 4771"
    },
    {
      libraryName:"palmer park library",
      address:"st bartholomews road",
      cityName:"reading",
      email:"",
      phone:""
    },
    {
      libraryName:"whitley library",
      address:"205 northumberland avenue",
      cityName:"reading",
      email:"",
      phone:""
    },
    {
      libraryName:"southcote library",
      address:"southcote lane",
      cityName:"reading",
      email:"",
      phone:""
    },
    {
      libraryName:"tilehurst library",
      address:"school road",
      cityName:"reading",
      email:"",
      phone:""
    },
    {
      libraryName:"toy library",
      address:"ambleside centre",
      cityName:"reading",
      email:"",
      phone:""
    },
    {
      libraryName:"burghfield common library",
      address:"school lane",
      cityName:"reading",
      email:"",
      phone:""
    },
    {
      libraryName:"theale library",
      address:"church street",
      cityName:"reading",
      email:"",
      phone:""
    },
    {
      libraryName:"pangbourne library",
      address:"reading road",
      cityName:"reading",
      email:"",
      phone:""
    },
    {
      libraryName:"sandhurst library",
      address:"the broadway",
      cityName:"sandhurst",
      email:"",
      phone:""
    },
    {
      libraryName:"cippenham library",
      address:"elmshott lane",
      cityName:"slough",
      email:"library@slough.gov.uk",
      phone:"01628 661745"
    },
    {
      libraryName:"slough library",
      address:"high street",
      cityName:"slough",
      email:"library@slough.gov.uk",
      phone:"01753 535166"
    },
    {
      libraryName:"britwell library",
      address:"wentworth avenue",
      cityName:"slough",
      email:"",
      phone:""
    },
    {
      libraryName:"langley library",
      address:"trelawney avenue",
      cityName:"slough",
      email:"",
      phone:""
    },
    {
      libraryName:"sunninghill library",
      address:"school road",
      cityName:"sunninghill",
      email:"sunninghill.library@rbwm.gov.uk",
      phone:"01344 621493"
    },
    {
      libraryName:"wargrave library",
      address:"woodclyff hostel",
      cityName:"wargrave",
      email:"",
      phone:"0118 9404656"
    },
    {
      libraryName:"thatcham library",
      address:"bath road",
      cityName:"west berkshire",
      email:"",
      phone:""
    },
    {
      libraryName:"windsor library",
      address:"bachelors acre",
      cityName:"windsor",
      email:"windsor.library@rbwm.gov.uk",
      phone:"01753 743940 01753 743941 (reference library)"
    },
    {
      libraryName:"dedworth library",
      address:"dedworth school, smiths lane",
      cityName:"windsor",
      email:"",
      phone:"01753 868733"
    },
    {
      libraryName:"winnersh library",
      address:"forest school",
      cityName:"winnersh",
      email:"",
      phone:""
    },
    {
      libraryName:"wokingham library",
      address:"denmark street",
      cityName:"wokingham",
      email:"",
      phone:"0118 9781368"
    },
    {
      libraryName:"finchampstead library",
      address:"gorse ride north",
      cityName:"wokingham",
      email:"",
      phone:""
    },
    {
      libraryName:"wraysbury container library",
      address:"village hall car park",
      cityName:"wraysbury",
      email:"container.library@rbwm.gov.uk",
      phone:"01628 796555"
    },
    {
      libraryName:"abertillery library",
      address:"station hill",
      cityName:"abertillery",
      email:"",
      phone:""
    },
    {
      libraryName:"blaina library",
      address:"reading institute",
      cityName:"blaina",
      email:"",
      phone:""
    },
    {
      libraryName:"brynmawr library",
      address:"market street",
      cityName:"brynmawr",
      email:"",
      phone:""
    },
    {
      libraryName:"cwm library",
      address:"canning street",
      cityName:"cwm",
      email:"",
      phone:""
    },
    {
      libraryName:"ebbw vale library",
      address:"21 bethcar street",
      cityName:"ebbw vale",
      email:"",
      phone:""
    },
    {
      libraryName:"tredegar library",
      address:"the circle",
      cityName:"tredegar",
      email:"tredegar.library@blaenau-gwent.gov.uk",
      phone:"01495 722687"
    },
    {
      libraryName:"bridgend library",
      address:"wyndham street",
      cityName:"bridgend",
      email:"bridgendlib@bridgend.gov.uk",
      phone:"01656 754830"
    },
    {
      libraryName:"ogmore vale library",
      address:"ogmore valley life centre",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"nantymoel library",
      address:"berwyn centre",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"pontycymer library",
      address:"107 oxford street",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"betws library",
      address:"betws centre",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"aberkenfig library",
      address:"heol y llyfrau",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"sarn cyberlink library",
      address:"lifelong learning centre",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"pyle library",
      address:"pyle life centre",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"maesteg library",
      address:"north's lane",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"pencoed library",
      address:"penybont road",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"porthcawl library",
      address:"church place",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"aberkenfig library",
      address:"heol y llyfrau",
      cityName:"bridgend",
      email:"",
      phone:""
    },
    {
      libraryName:"caerau cyberlink library",
      address:"naddfa chapel centre",
      cityName:"maesteg",
      email:"",
      phone:""
    },
    {
      libraryName:"blaengarw library",
      address:"blaengarw infants school",
      cityName:"pontycymer",
      email:"",
      phone:""
    },
    {
      libraryName:"local and family history centre",
      address:"tŷ'r ardd",
      cityName:"sunnyside",
      email:"blis@bridgend.gov.uk",
      phone:"01656 754810"
    },
    {
      libraryName:"evanscityname library",
      address:"community centre",
      cityName:"tonyrefail",
      email:"",
      phone:""
    },
    {
      libraryName:"westbury-on-trym library",
      address:"falcondale road",
      cityName:"bristol",
      email:"westbury.library@bristol.gov.uk",
      phone:"0117 9038552"
    },
    {
      libraryName:"cadbury heath library",
      address:"school road",
      cityName:"bristol",
      email:"cadburyheath.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"bradley stoke library",
      address:"bradley stoke leisure centre and library",
      cityName:"bristol",
      email:"bradleystoke_library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"chipping sodbury library",
      address:"high street",
      cityName:"bristol",
      email:"chippingsodbury.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"shirehampton library",
      address:"station road",
      cityName:"bristol",
      email:"",
      phone:""
    },
    {
      libraryName:"severn beach library",
      address:"severn beach post office",
      cityName:"bristol",
      email:"",
      phone:""
    },
    {
      libraryName:"amersham library",
      address:"chiltern avenue",
      cityName:"amersham",
      email:"lib-ame@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"aylesbury study centre",
      address:"county offices,",
      cityName:"aylesbury",
      email:"lib-ref@buckscc.gov.uk",
      phone:"0845 2303132"
    },
    {
      libraryName:"aylesbury library",
      address:"walton street",
      cityName:"aylesbury",
      email:"lib-ayl@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"beaconsfield library",
      address:"reynolds road",
      cityName:"beaconsfield",
      email:"lib-bea@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"bourne end library",
      address:"wakeman road",
      cityName:"bourne end",
      email:"lib-boe@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"buckingham library",
      address:"verney close",
      cityName:"buckingham",
      email:"lib-buc@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"burnham library",
      address:"windsor lane",
      cityName:"burnham",
      email:"lib-bur@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"chalfont st giles library",
      address:"high street",
      cityName:"chalfont st. giles",
      email:"",
      phone:"01494 874732"
    },
    {
      libraryName:"chalfont st peter library",
      address:"high street",
      cityName:"chalfont st.peter",
      email:"csp-community-library@live.co.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"chesham library",
      address:"elgiva lane",
      cityName:"chesham",
      email:"lib-che@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"farnham common library",
      address:"victoria road",
      cityName:"farnham common",
      email:"contact.farnhamccl@gmail.com",
      phone:"0845 2303232"
    },
    {
      libraryName:"flackwell heath library",
      address:"carrington junior school",
      cityName:"flackwell heath",
      email:"lib-flh@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"gerrards cross library",
      address:"38 station road",
      cityName:"gerrards cross",
      email:"lib-gex@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"great missenden library",
      address:"high street",
      cityName:"great missenden",
      email:"lib-mis@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"hazlemere library",
      address:"312 amersham road",
      cityName:"hazlemere",
      email:"lib-haz@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"west wycombe library",
      address:"swan yard",
      cityName:"high wycombe",
      email:"enquiries@westwycombelibrary.org.uk",
      phone:"01494 449958"
    },
    {
      libraryName:"high wycombe library",
      address:"5 eden place",
      cityName:"high wycombe",
      email:"lib-hiw@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"micklefield library",
      address:"micklefield road",
      cityName:"high wycombe",
      email:"lib-mic@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"stokenchurch library",
      address:"wycombe road",
      cityName:"high wycombe",
      email:"lib-sto@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"richings park library",
      address:"38 bathurst walk",
      cityName:"iver",
      email:"",
      phone:""
    },
    {
      libraryName:"iver heath library",
      address:"st margarets close",
      cityName:"iver heath",
      email:"lib-ivh@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"ivinghoe library",
      address:"cityname hall",
      cityName:"ivinghoe",
      email:"lib-ivi@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"little chalfont library",
      address:"cokes lane",
      cityName:"little chalfont",
      email:"info@lccl.org",
      phone:"01494 764602"
    },
    {
      libraryName:"long crendon library",
      address:"high street",
      cityName:"long crendon",
      email:"lib-lon@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"marlow library",
      address:"institute road",
      cityName:"marlow",
      email:"lib-mar@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"bletchley library",
      address:"westfield road",
      cityName:"milton keynes",
      email:"bletchley.library@milton-keynes.gov.uk",
      phone:"01908 372797"
    },
    {
      libraryName:"westcroft library",
      address:"17/18 barnsdale drive",
      cityName:"milton keynes",
      email:"westcroft.library@milton-keynes.gov.uk",
      phone:"01908 507874"
    },
    {
      libraryName:"stony stratford library",
      address:"5-7 church street",
      cityName:"milton keynes",
      email:"stonystratford.library@milton-keynes.gov.uk",
      phone:"01908 562562"
    },
    {
      libraryName:"woburn sands library",
      address:"friends meeting house",
      cityName:"milton keynes",
      email:"woburnsands.library@milton-keynes.gov.uk",
      phone:"01908 582033"
    },
    {
      libraryName:"wolverton library",
      address:"cityname hall",
      cityName:"milton keynes",
      email:"wolverton.library@milton-keynes.gov.uk",
      phone:"1907 312812"
    },
    {
      libraryName:"kingston library",
      address:"room 12",
      cityName:"milton keynes",
      email:"",
      phone:""
    },
    {
      libraryName:"leon library",
      address:"fern grove",
      cityName:"milton keynes",
      email:"",
      phone:""
    },
    {
      libraryName:"open university library",
      address:"walton hall",
      cityName:"milton keynes",
      email:"",
      phone:""
    },
    {
      libraryName:"newport pagnell library",
      address:"st john street",
      cityName:"newport pagnell",
      email:"",
      phone:"01908 610933"
    },
    {
      libraryName:"olney library",
      address:"high street",
      cityName:"olney",
      email:"olney.library@milton-keynes.gov.uk",
      phone:"01234 711474"
    },
    {
      libraryName:"princes risborough library",
      address:"bell street",
      cityName:"princes risborough",
      email:"lib-prr@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"steeple claydon library",
      address:"village hall",
      cityName:"steeple claydon",
      email:"",
      phone:""
    },
    {
      libraryName:"iver library",
      address:"st peters centre",
      cityName:"thorney lane",
      email:"",
      phone:""
    },
    {
      libraryName:"wendover library",
      address:"high street",
      cityName:"wendover",
      email:"lib-wen@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"wing library",
      address:"village hall",
      cityName:"wing",
      email:"lib-wig@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"winslow library",
      address:"park road",
      cityName:"winslow",
      email:"lib-wis@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"castlefield library",
      address:"castlefield county combined school",
      cityName:"wycombe",
      email:"lib-cas@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"haddenham library",
      address:"churchway",
      cityName:"haddenham",
      email:"lib-had@buckscc.gov.uk",
      phone:"0845 2303232"
    },
    {
      libraryName:"aberbargoed library",
      address:"pant street",
      cityName:"aberbargoed",
      email:"",
      phone:""
    },
    {
      libraryName:"abercarn library",
      address:"high street",
      cityName:"abercarn",
      email:"",
      phone:""
    },
    {
      libraryName:"abertridwr library",
      address:"aberfawr road",
      cityName:"abertridwr",
      email:"",
      phone:""
    },
    {
      libraryName:"bargoed library",
      address:"the square",
      cityName:"bargoed",
      email:"libraries@caerphilly.gov.uk",
      phone:"01443 875548"
    },
    {
      libraryName:"deri library",
      address:"bailey street",
      cityName:"bargoed",
      email:"",
      phone:""
    },
    {
      libraryName:"bedwas library",
      address:"newport road",
      cityName:"bedwas",
      email:"",
      phone:""
    },
    {
      libraryName:"blackwood library",
      address:"192 high street",
      cityName:"blackwood",
      email:"",
      phone:""
    },
    {
      libraryName:"caerphilly library",
      address:"morgan jones park",
      cityName:"caerphilly",
      email:"",
      phone:""
    },
    {
      libraryName:"llanbradach library",
      address:"school street",
      cityName:"llanbradach",
      email:"",
      phone:""
    },
    {
      libraryName:"machen library",
      address:"village hall and social centre",
      cityName:"machen",
      email:"",
      phone:""
    },
    {
      libraryName:"nelson library",
      address:"commercial street",
      cityName:"nelson",
      email:"libnels@caerphilly.gov.uk",
      phone:"01443 451632"
    },
    {
      libraryName:"new tredegar library",
      address:"duffryn terrace",
      cityName:"new tredegar",
      email:"",
      phone:""
    },
    {
      libraryName:"newbridge library",
      address:"church road",
      cityName:"newbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"pengam library",
      address:"ivor street",
      cityName:"pengam",
      email:"",
      phone:""
    },
    {
      libraryName:"pontlottyn library",
      address:"community centre",
      cityName:"pontlottyn",
      email:"",
      phone:""
    },
    {
      libraryName:"risca library",
      address:"park place",
      cityName:"risca",
      email:"",
      phone:""
    },
    {
      libraryName:"rhymney library",
      address:"victoria road",
      cityName:"tredegar",
      email:"",
      phone:""
    },
    {
      libraryName:"ystrad mynach library",
      address:"high street",
      cityName:"ystrad mynach",
      email:"",
      phone:""
    },
    {
      libraryName:"thurso library",
      address:"davidsons lane",
      cityName:"thurso",
      email:"",
      phone:""
    },
    {
      libraryName:"wick library",
      address:"carnegie public library",
      cityName:"wick",
      email:"",
      phone:""
    },
    {
      libraryName:"bar hill library",
      address:"gladeside",
      cityName:"bar hill",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"bar hill library",
      address:"gladeside",
      cityName:"bar hill",
      email:"",
      phone:""
    },
    {
      libraryName:"bassingbourn library access point",
      address:"bassingbourn community book café, the limes, high street",
      cityName:"bassingbourn",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"bottisham library access point",
      address:"village college",
      cityName:"bottisham",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"buckden library",
      address:"millennium community hall and sports centre",
      cityName:"buckden",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"burwell library",
      address:"village college",
      cityName:"burwell",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"burwell library",
      address:"village college",
      cityName:"burwell",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"rock road library",
      address:"rock road",
      cityName:"cambridge",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"cherry hinton library",
      address:"high street",
      cityName:"cambridge",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"cambridge central library and  learning centre",
      address:"cambridge central library",
      cityName:"cambridge",
      email:"your.library@cambridgeshire.gov.uk",
      phone:"0345 045 5225"
    },
    {
      libraryName:"milton road library",
      address:"ascham road",
      cityName:"cambridge",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"arbury court library and learning centre",
      address:"arbury court",
      cityName:"cambridge",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"barnwell road library",
      address:"barnwell road",
      cityName:"cambridge",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"chatteris library",
      address:"2 furrowfields road",
      cityName:"chatteris",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"comberton library",
      address:"village college",
      cityName:"comberton",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"cottenham library",
      address:"margett street",
      cityName:"cottenham",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"ely library and learning centre",
      address:"ely library, 6 the cloisters",
      cityName:"ely",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"fulbourn library access point",
      address:"fulbourn village library, the swifts",
      cityName:"fulbourn",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"cambourne library",
      address:"sackville house",
      cityName:"great cambourne",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"great shelford library",
      address:"10-12 woollards lane",
      cityName:"great shelford",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"the haddenham library",
      address:"arkenstall centre",
      cityName:"haddenham",
      email:"",
      phone:"01353 740624,"
    },
    {
      libraryName:"histon library",
      address:"school hill",
      cityName:"histon",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"histon library",
      address:"school hill",
      cityName:"histon",
      email:"",
      phone:""
    },
    {
      libraryName:"huntingdon library and learning centre",
      address:"princes street",
      cityName:"huntingdon",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"linton library",
      address:"cathodeon centre",
      cityName:"linton",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"little downham library access point",
      address:"little downham book cafe",
      cityName:"little downham",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"littleport library",
      address:"cityname hall",
      cityName:"littleport",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"march library and learning centre",
      address:"city road",
      cityName:"march",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"papworth library",
      address:"lower pendrill court",
      cityName:"papworth everard",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"crowland library",
      address:"hall street",
      cityName:"peterborough",
      email:"crowland.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"deepings library",
      address:"the park",
      cityName:"peterborough",
      email:"deepings.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"eye library",
      address:"crowland road",
      cityName:"peterborough",
      email:"eyelibrary@vivacity-peterborough.com",
      phone:"01733 864142"
    },
    {
      libraryName:"werrington library",
      address:"staniland way",
      cityName:"peterborough",
      email:"werringtonlibrary@vivacity-peterborough.com",
      phone:"01733 864282"
    },
    {
      libraryName:"bretton library",
      address:"the cressett",
      cityName:"peterborough",
      email:"brettonlibrary@vivacity-peterborough.com",
      phone:"01733 864291"
    },
    {
      libraryName:"dogsthorpe library",
      address:"central avenue",
      cityName:"peterborough",
      email:"dogsthorpelibrary@vivacity-peterborough.com",
      phone:"01733 864300"
    },
    {
      libraryName:"stanground library",
      address:"southfields avenue",
      cityName:"peterborough",
      email:"stangroundlibrary@vivacity-peterborough.com",
      phone:"01733 864302"
    },
    {
      libraryName:"woodston library",
      address:"orchard street",
      cityName:"peterborough",
      email:"woodstonlibrary@vivacity-peterborough.com",
      phone:"01733 864304"
    },
    {
      libraryName:"thorney library",
      address:"church street",
      cityName:"peterborough",
      email:"thorneylibrary@vivacity-peterborough.com",
      phone:"01733 864542"
    },
    {
      libraryName:"orton library",
      address:"orton centre",
      cityName:"peterborough",
      email:"",
      phone:""
    },
    {
      libraryName:"hampton library",
      address:"6b serpentine green shopping centre",
      cityName:"peterborough",
      email:"",
      phone:""
    },
    {
      libraryName:"ramsey library",
      address:"school lane",
      cityName:"ramsey",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"melbourn library access point",
      address:"melbourn district cafe library",
      cityName:"royston",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"gamlingay library access point",
      address:"the almshouse chapel",
      cityName:"sandy",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"sawston library",
      address:"village college",
      cityName:"sawston",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"sawston library",
      address:"village college",
      cityName:"sawston",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"sawtry library",
      address:"fen lane",
      cityName:"sawtry",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"soham library",
      address:"clay street",
      cityName:"soham",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"somersham library access point",
      address:"somersham community information centre",
      cityName:"somersham",
      email:"",
      phone:"01487 840266,"
    },
    {
      libraryName:"st. ives library",
      address:"4 library row",
      cityName:"st ives",
      email:"",
      phone:""
    },
    {
      libraryName:"st neots library",
      address:"priory lane",
      cityName:"st neots",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"swavesey library access point",
      address:"your library, swavesey village college",
      cityName:"swavesey",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"swavesey library access point",
      address:"swavesey village college",
      cityName:"swavesey",
      email:"",
      phone:"344 045 5225"
    },
    {
      libraryName:"warboys library",
      address:"high street",
      cityName:"warboys",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"waterbeach library access point",
      address:"waterbeach library access point",
      cityName:"waterbeach",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"whittlesey library",
      address:"31-35 market street",
      cityName:"whittlesey",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"willingham library",
      address:"church street",
      cityName:"willingham",
      email:"",
      phone:""
    },
    {
      libraryName:"wisbech library",
      address:"1 ely place",
      cityName:"wisbech",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"yaxley library",
      address:"lansdowne road",
      cityName:"yaxley",
      email:"",
      phone:"0345 045 5225"
    },
    {
      libraryName:"garnant library",
      address:"77 cwmaman road",
      cityName:"ammanford",
      email:"",
      phone:""
    },
    {
      libraryName:"ammanford library",
      address:"3 wind street",
      cityName:"ammanford",
      email:"",
      phone:""
    },
    {
      libraryName:"brynaman library",
      address:"brynaman cp infants school",
      cityName:"brynaman",
      email:"",
      phone:""
    },
    {
      libraryName:"burry port library",
      address:"brynmor house",
      cityName:"burry port",
      email:"",
      phone:""
    },
    {
      libraryName:"carmarthen library",
      address:"st peters street",
      cityName:"carmarthen",
      email:"information@carmarthenshire.gov.uk",
      phone:"01267 230873"
    },
    {
      libraryName:"st clears library",
      address:"old police station",
      cityName:"carmarthen",
      email:"",
      phone:""
    },
    {
      libraryName:"whitland library",
      address:"cityname hall",
      cityName:"carmarthen",
      email:"",
      phone:""
    },
    {
      libraryName:"trimsaran library",
      address:"trimsaran leisure centre",
      cityName:"kidwelly",
      email:"",
      phone:""
    },
    {
      libraryName:"llandeilo library",
      address:"crescent road",
      cityName:"llandeilo",
      email:"",
      phone:""
    },
    {
      libraryName:"llandovery library",
      address:"the car park",
      cityName:"llandovery",
      email:"",
      phone:""
    },
    {
      libraryName:"tumble library",
      address:"welfare hall",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"cross hands library",
      address:"10 llandeilo road",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"llangennech library",
      address:"old school",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"llwynhendy library",
      address:"heol elfed",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"llanelli library",
      address:"vaughan street",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"pontyberem library",
      address:"memorial hall and institute",
      cityName:"llanelli",
      email:"libraries@carmarthenshire.gov.uk",
      phone:"01269 870891"
    },
    {
      libraryName:"pontyates library",
      address:"welfare hall",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"dafen library",
      address:"parish church hall",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"pembrey library",
      address:"old pembrey school",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"kidwelly library",
      address:"4 bridge street",
      cityName:"llanelli",
      email:"",
      phone:""
    },
    {
      libraryName:"llanybydder library",
      address:"day centre",
      cityName:"llanybydder",
      email:"",
      phone:""
    },
    {
      libraryName:"newcastle emlyn library",
      address:"church lane",
      cityName:"newcastle emlyn",
      email:"",
      phone:""
    },
    {
      libraryName:"aberaeron library",
      address:"county hall",
      cityName:"aberaeron",
      email:"",
      phone:""
    },
    {
      libraryName:"aberystwyth library",
      address:"corporation street",
      cityName:"aberystwyth",
      email:"cwestllb@ceredigion.gov.uk",
      phone:"01970 633703"
    },
    {
      libraryName:"cardigan library",
      address:"4th floor",
      cityName:"cardigan",
      email:"",
      phone:""
    },
    {
      libraryName:"llyfrgell genedlaethol cymru / national library of wales",
      address:"aberystwyth",
      cityName:"ceredigion",
      email:"holi@llgc.org.uk",
      phone:"01970 632800"
    },
    {
      libraryName:"lampeter library",
      address:"market street",
      cityName:"lampeter",
      email:"",
      phone:""
    },
    {
      libraryName:"llandysul library",
      address:"canolfan ceredigion",
      cityName:"llandysul",
      email:"",
      phone:""
    },
    {
      libraryName:"new quay library",
      address:"uplands square",
      cityName:"new quay",
      email:"",
      phone:""
    },
    {
      libraryName:"tregaron library",
      address:"secondary school",
      cityName:"tregaron",
      email:"",
      phone:""
    },
    {
      libraryName:"alderley edge library",
      address:"44a london road",
      cityName:"alderley edge",
      email:"alderleyedge.library@cheshireeast.gov.uk",
      phone:"01625 584487"
    },
    {
      libraryName:"alsager library",
      address:"sandbach road north",
      cityName:"alsager",
      email:"alsager.library@cheshireeast.gov.uk",
      phone:"01270 375325"
    },
    {
      libraryName:"altrincham library",
      address:"20 stamford new road",
      cityName:"altrincham",
      email:"altrincham.library@trafford.gov.uk",
      phone:"0161 912 5920"
    },
    {
      libraryName:"barnton library",
      address:"citynamefield lane",
      cityName:"barnton",
      email:"",
      phone:""
    },
    {
      libraryName:"chester library",
      address:"northgate street",
      cityName:"chester",
      email:"chester.infopoint@cheshire.gov.uk",
      phone:"01244 312935"
    },
    {
      libraryName:"great boughton library",
      address:"green lane",
      cityName:"chester",
      email:"greatboughton.library@cheshirewestandchester.gov.uk",
      phone:"01244 320709"
    },
    {
      libraryName:"saughall library centre",
      address:"vernon institute",
      cityName:"chester",
      email:"",
      phone:"01244 881859"
    },
    {
      libraryName:"blacon library",
      address:"western avenue",
      cityName:"chester",
      email:"blacon.library@cheshirewestandchester.gov.uk",
      phone:"01244 390628"
    },
    {
      libraryName:"elton library centre",
      address:"elton community centre",
      cityName:"chester",
      email:"",
      phone:"01928 724898"
    },
    {
      libraryName:"hoole library",
      address:"91 hoole road",
      cityName:"chester",
      email:"info@cheshire.gov.uk",
      phone:""
    },
    {
      libraryName:"bishops high library",
      address:"vaughans lane",
      cityName:"chester",
      email:"",
      phone:""
    },
    {
      libraryName:"lache library",
      address:"lache park avenue",
      cityName:"chester",
      email:"",
      phone:""
    },
    {
      libraryName:"congleton library",
      address:"market square",
      cityName:"congleton",
      email:"congleton.library@cheshireeast.gov.uk",
      phone:"01260 375550"
    },
    {
      libraryName:"crewe library",
      address:"prince albert street",
      cityName:"crewe",
      email:"crewe.library@cheshireeast.gov.uk",
      phone:"01270 375295"
    },
    {
      libraryName:"disley library",
      address:"off buxton old road",
      cityName:"disley",
      email:"disley.library@cheshireeast.gov.uk",
      phone:"01663 765635"
    },
    {
      libraryName:"little sutton library",
      address:"chester road",
      cityName:"ellesmere port",
      email:"littlesutton.library@cheshirewestandchester.gov.uk",
      phone:"0151 339 3373"
    },
    {
      libraryName:"hope farm library",
      address:"bridge meadow",
      cityName:"ellesmere port",
      email:"hopefarm.library@cheshirewestandchester.gov.uk",
      phone:"0151 355 8923"
    },
    {
      libraryName:"ellesmere port library",
      address:"civic way",
      cityName:"ellesmere port",
      email:"eport.infopoint@cheshire.gov.uk",
      phone:"0151 357 46845"
    },
    {
      libraryName:"frodsham library",
      address:"rock chapel",
      cityName:"frodsham",
      email:"frodsham.library@cheshirewestandchester.gov.uk",
      phone:"01928 734214"
    },
    {
      libraryName:"handforth library",
      address:"the green",
      cityName:"handforth",
      email:"handforth.library@cheshireeast.gov.uk",
      phone:"01625 378272"
    },
    {
      libraryName:"helsby library",
      address:"lower robin hood lane",
      cityName:"helsby",
      email:"helsby.library@cheshirewestandchester.gov.uk",
      phone:"01928 724659"
    },
    {
      libraryName:"holmes chapel library",
      address:"london road",
      cityName:"holmes chapel",
      email:"holmeschapel.library@cheshireeast.gov.uk",
      phone:"01477 689550"
    },
    {
      libraryName:"knutsford library",
      address:"toft road",
      cityName:"knutsford",
      email:"knutsford.library@cheshireeast.gov.uk",
      phone:"01625 374873"
    },
    {
      libraryName:"macclesfield library",
      address:"jordangate",
      cityName:"macclesfield",
      email:"macclesfield.library@cheshireeast.gov.uk",
      phone:"01625 374000"
    },
    {
      libraryName:"bollington library",
      address:"palmerston street",
      cityName:"macclesfield",
      email:"bollington.library@cheshireeast.gov.uk",
      phone:"01625 378266"
    },
    {
      libraryName:"hurdsfield library",
      address:"7 hurdsfield green",
      cityName:"macclesfield",
      email:"",
      phone:"01625 423788"
    },
    {
      libraryName:"weston library",
      address:"community centre",
      cityName:"macclesfield",
      email:"",
      phone:"01625 614008"
    },
    {
      libraryName:"malpas library",
      address:"bishop heber high school",
      cityName:"malpas",
      email:"",
      phone:"01948 862021"
    },
    {
      libraryName:"middlewich library",
      address:"lewin street",
      cityName:"middlewich",
      email:"middlewich.library@cheshireeast.gov.uk",
      phone:"01606 288070"
    },
    {
      libraryName:"nantwich library",
      address:"beam street",
      cityName:"nantwich",
      email:"nantwich.library@cheshireeast.gov.uk",
      phone:"01270 375361"
    },
    {
      libraryName:"neston library",
      address:"parkgate road",
      cityName:"neston",
      email:"neston.infopoint@cheshirewestandchester.gov.uk",
      phone:"0151 337 4670"
    },
    {
      libraryName:"sandiway library",
      address:"mere lane",
      cityName:"northwich",
      email:"",
      phone:""
    },
    {
      libraryName:"weaverham library",
      address:"russett road",
      cityName:"northwich",
      email:"",
      phone:""
    },
    {
      libraryName:"northwich library",
      address:"witton street",
      cityName:"northwich",
      email:"",
      phone:""
    },
    {
      libraryName:"poynton library",
      address:"park lane",
      cityName:"poynton",
      email:"poynton.library@cheshireeast.gov.uk",
      phone:"01625 876257"
    },
    {
      libraryName:"prestbury library",
      address:"reading room",
      cityName:"prestbury",
      email:"",
      phone:"01625 827501"
    },
    {
      libraryName:"halton lea library",
      address:"halton lea",
      cityName:"runcorn",
      email:"",
      phone:"01928 704455"
    },
    {
      libraryName:"runcorn library",
      address:"egerton street",
      cityName:"runcorn",
      email:"",
      phone:""
    },
    {
      libraryName:"sandbach library",
      address:"the common",
      cityName:"sandbach",
      email:"sandbach.library@cheshireeast.gov.uk",
      phone:"01270 375355"
    },
    {
      libraryName:"tarporley library",
      address:"tarporley high school",
      cityName:"tarporley",
      email:"tarporley.library@cheshirewestandchester.gov.uk",
      phone:"01829 731794"
    },
    {
      libraryName:"tarvin library",
      address:"community centre",
      cityName:"tarvin",
      email:"",
      phone:""
    },
    {
      libraryName:"tattenhall library",
      address:"park primary school",
      cityName:"tattenhall",
      email:"",
      phone:""
    },
    {
      libraryName:"burtonwood library",
      address:"chapel lane",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 226 563"
    },
    {
      libraryName:"stockton heath library",
      address:"alexandra park",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 261148"
    },
    {
      libraryName:"westbrook library",
      address:"westbrook crescent",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 416 561"
    },
    {
      libraryName:"winwick library",
      address:"myddleton lane",
      cityName:"warrington",
      email:"",
      phone:"01925 417 678"
    },
    {
      libraryName:"warrington library",
      address:"museum street",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 442889"
    },
    {
      libraryName:"penketh library",
      address:"honiton way",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 723 730"
    },
    {
      libraryName:"lymm library",
      address:"davies way (off brookfield rd)",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 754 367"
    },
    {
      libraryName:"culcheth library",
      address:"warrington road",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 763293"
    },
    {
      libraryName:"orford library",
      address:"poplars avenue",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 812 821"
    },
    {
      libraryName:"woolston library",
      address:"woolston neighbourhood hub, hall road",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 816146"
    },
    {
      libraryName:"padgate library",
      address:"insall road",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 818 096"
    },
    {
      libraryName:"birchwood library",
      address:"brock road",
      cityName:"warrington",
      email:"library@warrington.gov.uk",
      phone:"01925 827491"
    },
    {
      libraryName:"widnes library",
      address:"kingsway learning centre",
      cityName:"widnes",
      email:"",
      phone:"0151 907 8300"
    },
    {
      libraryName:"ditton library",
      address:"queens avenue",
      cityName:"widnes",
      email:"",
      phone:""
    },
    {
      libraryName:"willaston library centre",
      address:"willaston methodist church",
      cityName:"willaston",
      email:"",
      phone:"0151 327 6100"
    },
    {
      libraryName:"wilmslow library",
      address:"south drive",
      cityName:"wilmslow",
      email:"wilmslow.library@cheshireeast.gov.uk",
      phone:"01625 374060"
    },
    {
      libraryName:"winsford library",
      address:"high street",
      cityName:"winsford",
      email:"winsford.library@cheshirewestandchester.gov.uk",
      phone:"01606 552065"
    },
    {
      libraryName:"wharton library",
      address:"willow square",
      cityName:"winsford",
      email:"",
      phone:""
    },
    {
      libraryName:"avonmouth library",
      address:"avonmouth road",
      cityName:"bristol",
      email:"avonmouth.library@bristol.gov.uk",
      phone:"0117 903 8521"
    },
    {
      libraryName:"st george library",
      address:"church road",
      cityName:"bristol",
      email:"st.george.library@bristol.gov.uk",
      phone:"0117 903 8523"
    },
    {
      libraryName:"henleaze library",
      address:"northumbria drive",
      cityName:"bristol",
      email:"henleaze.library@bristol.gov.uk",
      phone:"0117 903 8541"
    },
    {
      libraryName:"lawrence weston library",
      address:"stile acres",
      cityName:"bristol",
      email:"lawrencew.library@bristol.gov.uk",
      phone:"0117 903 8553"
    },
    {
      libraryName:"sea mills library",
      address:"sylvan way",
      cityName:"bristol",
      email:"seamills.library@bristol.gov.uk",
      phone:"0117 903 8555"
    },
    {
      libraryName:"hillfields library",
      address:"summerleaze",
      cityName:"bristol",
      email:"hillfields.library@bristol.gov.uk",
      phone:"0117 903 8576"
    },
    {
      libraryName:"eastville library",
      address:"muller road",
      cityName:"bristol",
      email:"eastville.library@bristol.gov.uk",
      phone:"0117 903 8578"
    },
    {
      libraryName:"filwood library",
      address:"filwood broadway",
      cityName:"bristol",
      email:"filwood.library@bristol.gov.uk",
      phone:"0117 903 8581"
    },
    {
      libraryName:"knowle library",
      address:"1st floor broadwalk shopping centre",
      cityName:"bristol",
      email:"knowle.library@bristol.gov.uk",
      phone:"0117 903 8585"
    },
    {
      libraryName:"bristol central library - learning centre",
      address:"college green",
      cityName:"bristol",
      email:"library_lending_centre@bristol.gov.uk",
      phone:"0117 9037216"
    },
    {
      libraryName:"henbury library",
      address:"crow lane",
      cityName:"bristol",
      email:"henbury.library@bristol.gov.uk",
      phone:"0117 9038522"
    },
    {
      libraryName:"bedminster library",
      address:"st peter's court",
      cityName:"bristol",
      email:"bedminster.library@bristol.gov.uk",
      phone:"0117 9038529"
    },
    {
      libraryName:"horfield library",
      address:"filton avenue",
      cityName:"bristol",
      email:"horfield.library@bristol.gov.uk",
      phone:"0117 9038538"
    },
    {
      libraryName:"trinity road library",
      address:"the old library",
      cityName:"bristol",
      email:"trinityrd.library@bristol.gov.uk",
      phone:"0117 9038543"
    },
    {
      libraryName:"stockwood library",
      address:"stockwood road",
      cityName:"bristol",
      email:"stockwood.library@bristol.gov.uk",
      phone:"0117 9038546"
    },
    {
      libraryName:"redland library",
      address:"whiteladies road",
      cityName:"bristol",
      email:"redland.library@bristol.gov.uk",
      phone:"0117 9038549"
    },
    {
      libraryName:"wick road library",
      address:"wick road",
      cityName:"bristol",
      email:"wickrd.library@bristol.gov.uk",
      phone:"0117 9038557"
    },
    {
      libraryName:"fishponds library",
      address:"fishponds road",
      cityName:"bristol",
      email:"fishpond.library@bristol.gov.uk",
      phone:"0117 9038560"
    },
    {
      libraryName:"cheltenham road library",
      address:"cheltenham road",
      cityName:"bristol",
      email:"cheltenhamrd.library@bristol.gov.uk",
      phone:"0117 9038562"
    },
    {
      libraryName:"bishopsworth library",
      address:"bishopsworth road",
      cityName:"bristol",
      email:"bishopsworth.library@bristol.gov.uk",
      phone:"0117 9038566"
    },
    {
      libraryName:"hartcliffe library",
      address:"peterson square",
      cityName:"bristol",
      email:"hartcliffe.library@bristol.gov.uk",
      phone:"0117 9038568"
    },
    {
      libraryName:"clifton library",
      address:"princess victoria street",
      cityName:"bristol",
      email:"clifton.library@bristol.gov.uk",
      phone:"0117 9038572"
    },
    {
      libraryName:"marksbury road library",
      address:"marksbury road",
      cityName:"bristol",
      email:"marksburyrd.library@bristol.gov.uk",
      phone:"0117 9038574"
    },
    {
      libraryName:"southmead library",
      address:"greystoke avenue",
      cityName:"bristol",
      email:"southmead.library@bristol.gov.uk",
      phone:"0117 9038583"
    },
    {
      libraryName:"st. pauls library",
      address:"grosvenor road",
      cityName:"bristol",
      email:"st.pauls.library@bristol.gov.uk",
      phone:"0117 914 5489"
    },
    {
      libraryName:"alloa library",
      address:"26-28 drysdale street",
      cityName:"alloa",
      email:"libraries@clacks.gov.uk",
      phone:"01259 722262"
    },
    {
      libraryName:"library at alva cap",
      address:"153 west stirling street",
      cityName:"alva",
      email:"",
      phone:""
    },
    {
      libraryName:"library at clackmannan cap",
      address:"main street",
      cityName:"clackmannan",
      email:"",
      phone:""
    },
    {
      libraryName:"library at dollar cap",
      address:"dollar civic centre",
      cityName:"dollar",
      email:"",
      phone:""
    },
    {
      libraryName:"library at menstrie cap",
      address:"the dumyat leisure centre",
      cityName:"menstrie",
      email:"",
      phone:""
    },
    {
      libraryName:"library at sauchie cap",
      address:"42-48 main street",
      cityName:"sauchie",
      email:"",
      phone:""
    },
    {
      libraryName:"tillicoultry branch library",
      address:"99 high street",
      cityName:"tillicoultry",
      email:"",
      phone:""
    },
    {
      libraryName:"tullibody branch library",
      address:"leisure centre",
      cityName:"tullibody",
      email:"",
      phone:""
    },
    {
      libraryName:"greystone library",
      address:"greystone road",
      cityName:"antrim",
      email:"",
      phone:""
    },
    {
      libraryName:"antrim library",
      address:"7 high street",
      cityName:"antrim",
      email:"",
      phone:""
    },
    {
      libraryName:"ballycastle library",
      address:"5 leyland road",
      cityName:"ballycastle",
      email:"",
      phone:""
    },
    {
      libraryName:"ballyclare library",
      address:"the market house",
      cityName:"ballyclare",
      email:"",
      phone:""
    },
    {
      libraryName:"ballymena central library",
      address:"5 pat's brae",
      cityName:"ballymena",
      email:"localstudies.neelb@ni-libraries.net",
      phone:"028 2566 41214125"
    },
    {
      libraryName:"ballymoney library",
      address:"rodden foot",
      cityName:"ballymoney",
      email:"",
      phone:""
    },
    {
      libraryName:"chichester library",
      address:"salisbury avenue",
      cityName:"belfast",
      email:"chichester.library@westsussex.gov.uk",
      phone:"01243 777351"
    },
    {
      libraryName:"central lending library belfast",
      address:"royal avenue",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"finaghy library",
      address:"finaghy road south",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"suffolk library",
      address:"stewartscityname road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"falls road library",
      address:"49 falls road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"whiterock library",
      address:"whiterock road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"shankill road library",
      address:"298-300 shankill road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"ballygomartin library",
      address:"mount gilbert community school",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"ardoyne library",
      address:"446-450 crumlin road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"grove library",
      address:"120 york road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"colin glen library",
      address:"colin centre",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"holywood library",
      address:"sullivan building",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"holywood arches library",
      address:"4-12 holywood road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"ballyhackamore library",
      address:"1-3 eastleigh drive",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"tullycarnet library",
      address:"kincross avenue",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"woodstock road library",
      address:"358 woodstock road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"cregagh library",
      address:"409-413 cregagh road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"ormeau road library",
      address:"ormeau road embankment",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"newcitynamebreda library",
      address:"saintfield road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"lisburn road library",
      address:"440 lisburn road",
      cityName:"belfast",
      email:"",
      phone:""
    },
    {
      libraryName:"broughshane library",
      address:"main street",
      cityName:"broughshane",
      email:"",
      phone:""
    },
    {
      libraryName:"carnlough library",
      address:"cityname hall",
      cityName:"carnlough",
      email:"",
      phone:""
    },
    {
      libraryName:"carrickfergus library",
      address:"2 joymount court",
      cityName:"carrickfergus",
      email:"",
      phone:""
    },
    {
      libraryName:"crumlin library",
      address:"orchard road",
      cityName:"crumlin",
      email:"",
      phone:""
    },
    {
      libraryName:"cushendall library",
      address:"mill street",
      cityName:"cushendall",
      email:"",
      phone:""
    },
    {
      libraryName:"greenisland library",
      address:"17 glassillan grove",
      cityName:"greenisland",
      email:"",
      phone:""
    },
    {
      libraryName:"larne library",
      address:"36 pound street",
      cityName:"larne",
      email:"",
      phone:""
    },
    {
      libraryName:"lisburn city library",
      address:"23 linenhall street",
      cityName:"lisburn",
      email:"",
      phone:""
    },
    {
      libraryName:"glengormley library",
      address:"40 carnmoney road",
      cityName:"newcitynameabbey",
      email:"",
      phone:""
    },
    {
      libraryName:"cloughfern library",
      address:"2a kings crescent",
      cityName:"newcitynameabbey",
      email:"",
      phone:""
    },
    {
      libraryName:"portglenone library",
      address:"19 citynamehill road",
      cityName:"portglenone",
      email:"",
      phone:""
    },
    {
      libraryName:"portrush library",
      address:"12 causeway street",
      cityName:"portrush",
      email:"",
      phone:""
    },
    {
      libraryName:"randalscityname library",
      address:"34 new street",
      cityName:"randalscityname",
      email:"",
      phone:""
    },
    {
      libraryName:"rathcoole library",
      address:"2 rosslea way",
      cityName:"rathcoole",
      email:"",
      phone:""
    },
    {
      libraryName:"whitehead library",
      address:"17b edward road",
      cityName:"whitehead",
      email:"",
      phone:""
    },
    {
      libraryName:"armagh library",
      address:"market square",
      cityName:"armagh",
      email:"",
      phone:""
    },
    {
      libraryName:"bessbrook library",
      address:"church road",
      cityName:"bessbrook",
      email:"",
      phone:""
    },
    {
      libraryName:"brownlow library",
      address:"brownlow road",
      cityName:"craigavon",
      email:"",
      phone:""
    },
    {
      libraryName:"creggan library",
      address:"59 central drive",
      cityName:"creggan",
      email:"",
      phone:""
    },
    {
      libraryName:"crossmaglen library",
      address:"the square",
      cityName:"crossmaglen",
      email:"",
      phone:""
    },
    {
      libraryName:"keady library",
      address:"market street",
      cityName:"keady",
      email:"",
      phone:""
    },
    {
      libraryName:"lurgan library",
      address:"carnegie street",
      cityName:"lurgan",
      email:"",
      phone:""
    },
    {
      libraryName:"portadown library",
      address:"24-26 church street",
      cityName:"portadown",
      email:"",
      phone:""
    },
    {
      libraryName:"richhill library",
      address:"maynooth road",
      cityName:"richill",
      email:"",
      phone:""
    },
    {
      libraryName:"donegal county library",
      address:"administrative centre",
      cityName:"letterkenny",
      email:"library@deonegalcoco.ie",
      phone:"0353 074 9121968"
    },
    {
      libraryName:"ballynahinch library",
      address:"main street",
      cityName:"ballynahinch",
      email:"",
      phone:""
    },
    {
      libraryName:"banbridge library",
      address:"scarva road",
      cityName:"banbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"bangor carnegie library",
      address:"80 hamilton road",
      cityName:"bangor",
      email:"",
      phone:""
    },
    {
      libraryName:"carryduff library",
      address:"church road",
      cityName:"carryduff",
      email:"",
      phone:""
    },
    {
      libraryName:"castlewellan library",
      address:"main street",
      cityName:"castlewellan",
      email:"",
      phone:""
    },
    {
      libraryName:"comber library",
      address:"newtonards road",
      cityName:"comber",
      email:"",
      phone:""
    },
    {
      libraryName:"donaghadee library",
      address:"5 killaughey road",
      cityName:"donaghadee",
      email:"",
      phone:""
    },
    {
      libraryName:"downpatrick library",
      address:"market st",
      cityName:"downpatrick",
      email:"",
      phone:""
    },
    {
      libraryName:"dromore library",
      address:"cityname hall",
      cityName:"dromore",
      email:"",
      phone:""
    },
    {
      libraryName:"dundonald library",
      address:"16 church road",
      cityName:"dundonald",
      email:"",
      phone:""
    },
    {
      libraryName:"gilford library",
      address:"main street",
      cityName:"gilford",
      email:"",
      phone:""
    },
    {
      libraryName:"kilkeel library",
      address:"greencastle street",
      cityName:"kilkeel",
      email:"",
      phone:""
    },
    {
      libraryName:"killyleagh library",
      address:"high street",
      cityName:"killyleagh",
      email:"",
      phone:""
    },
    {
      libraryName:"moira library",
      address:"backwood road",
      cityName:"moira",
      email:"",
      phone:""
    },
    {
      libraryName:"newcastle library",
      address:"141/143 main street",
      cityName:"newcastle",
      email:"",
      phone:""
    },
    {
      libraryName:"newry library",
      address:"79 hill street",
      cityName:"newry",
      email:"",
      phone:""
    },
    {
      libraryName:"newcitynameards library",
      address:"queen's hall",
      cityName:"newcitynameards",
      email:"",
      phone:""
    },
    {
      libraryName:"portaferry library",
      address:"47 high street",
      cityName:"portaferry",
      email:"",
      phone:""
    },
    {
      libraryName:"rathfriland library",
      address:"john street",
      cityName:"rathfriland",
      email:"",
      phone:""
    },
    {
      libraryName:"saintfield library",
      address:"ballynahinch road",
      cityName:"saintfield",
      email:"",
      phone:""
    },
    {
      libraryName:"warrenpoint library",
      address:"summerhill",
      cityName:"warrenpoint",
      email:"",
      phone:""
    },
    {
      libraryName:"dublin city library",
      address:"administrative headquarters",
      cityName:"dublin",
      email:"dublinpubliclibraries@dublincity.ie",
      phone:"0353 01 674 4800"
    },
    {
      libraryName:"dun laoghaire library",
      address:"lower georges street",
      cityName:"dún laoghaire",
      email:"dunlaoghairelib@dlrcoco.ie",
      phone:"0353 01 280 1147"
    },
    {
      libraryName:"fingal county library",
      address:"county hall",
      cityName:"swords",
      email:"libraries@fingalcoco.ie",
      phone:"0353 01 890 5000"
    },
    {
      libraryName:"south dublin county library",
      address:"library square",
      cityName:"tallaght",
      email:"library@sdublincoco.ie",
      phone:"0353 01 459 7834"
    },
    {
      libraryName:"barnard castle library",
      address:"2 hall street",
      cityName:"barnard castle",
      email:"",
      phone:"01833 638001"
    },
    {
      libraryName:"wolsingham library",
      address:"cityname hall",
      cityName:"bishop auckland",
      email:"awh.llc.library.wolsingham@durham.gov.uk",
      phone:"01388 527 625"
    },
    {
      libraryName:"woodhouse close library",
      address:"woodhouse lane",
      cityName:"bishop auckland",
      email:"",
      phone:""
    },
    {
      libraryName:"pelton library",
      address:"ouston lane",
      cityName:"chester le street",
      email:"awh.llc.library.pelton@durham.gov.uk",
      phone:"0191 3700485"
    },
    {
      libraryName:"chester-le-street library",
      address:"station road",
      cityName:"chester le street",
      email:"",
      phone:""
    },
    {
      libraryName:"chilton library",
      address:"durham road",
      cityName:"chilton",
      email:"awh.llc.library.chilton@durham.gov.uk",
      phone:"01388 720251"
    },
    {
      libraryName:"consett library",
      address:"victoria road",
      cityName:"consett",
      email:"",
      phone:"01207 503606"
    },
    {
      libraryName:"willington library",
      address:"46a high street",
      cityName:"crook",
      email:"awh.llc.library.willington@durham.gov.uk",
      phone:"01388 746 341"
    },
    {
      libraryName:"crook library",
      address:"market place",
      cityName:"crook",
      email:"",
      phone:"01388 766504"
    },
    {
      libraryName:"cockerton library",
      address:"cockerton green",
      cityName:"darlington",
      email:"cockerton.library@darlington.gov.uk",
      phone:"01325 461320"
    },
    {
      libraryName:"crown street central library",
      address:"crown street",
      cityName:"darlington",
      email:"",
      phone:"01325-349610"
    },
    {
      libraryName:"bowburn library",
      address:"durham road",
      cityName:"durham",
      email:"",
      phone:"0191 377 0693"
    },
    {
      libraryName:"belmont library",
      address:"cheveley park shopping centre",
      cityName:"durham",
      email:"",
      phone:"0191 3843223"
    },
    {
      libraryName:"durham clayport library",
      address:"millenium place",
      cityName:"durham",
      email:"",
      phone:"0191 386 4003"
    },
    {
      libraryName:"esh winning library",
      address:"college view",
      cityName:"esh winning",
      email:"awh.llc.library.eshwinning@durham.gov.uk",
      phone:"0191 373 4412"
    },
    {
      libraryName:"cornforth library",
      address:"high street",
      cityName:"ferryhill",
      email:"awh.llc.library.cornforth@durham.gov.uk",
      phone:"01740654 320"
    },
    {
      libraryName:"ferryhill library",
      address:"north street",
      cityName:"ferryhill",
      email:"",
      phone:""
    },
    {
      libraryName:"blackhall colliery library",
      address:"back middle street",
      cityName:"hartlepool",
      email:"",
      phone:"0191 5863545"
    },
    {
      libraryName:"lanchester library",
      address:"newbiggen lane",
      cityName:"lanchester",
      email:"awh.llc.library.lanchester@durham.gov.uk",
      phone:"01207 521 021"
    },
    {
      libraryName:"langley park library",
      address:"unit 6",
      cityName:"langley park",
      email:"",
      phone:""
    },
    {
      libraryName:"newton aycliffe library",
      address:"central avenue",
      cityName:"newton aycliffe",
      email:"",
      phone:"tel: 01325 312856"
    },
    {
      libraryName:"newton hall library",
      address:"alnwick road",
      cityName:"newton hall",
      email:"awh.llc.library.newtonhall@durham.gov.uk",
      phone:"0191 386 7695"
    },
    {
      libraryName:"easington colliery library",
      address:"seaside lane",
      cityName:"peterlee",
      email:"awh.llc.library.easington@durham.gov.uk",
      phone:"0191 527 0239"
    },
    {
      libraryName:"horden library",
      address:"sunderland road",
      cityName:"peterlee",
      email:"awh.llc.library.horden@durham.gov.uk",
      phone:"0191 586 3887"
    },
    {
      libraryName:"peterlee library",
      address:"burnhope way",
      cityName:"peterlee",
      email:"",
      phone:"0191 5862279"
    },
    {
      libraryName:"sacriston library",
      address:"plawsworth road",
      cityName:"sacriston",
      email:"awh.llc.library.sacriston@durham.gov.uk",
      phone:"0191 371 0550"
    },
    {
      libraryName:"murton library",
      address:"barnes road",
      cityName:"seaham",
      email:"awh.llc.library.murton@durham.gov.uk",
      phone:"0191 526 2025"
    },
    {
      libraryName:"seaham library",
      address:"st. johns square",
      cityName:"seaham",
      email:"awh.llc.library.seaham@durham.gov.uk",
      phone:"0191 581 2034"
    },
    {
      libraryName:"shildon library",
      address:"church street",
      cityName:"shildon",
      email:"",
      phone:""
    },
    {
      libraryName:"shotton library",
      address:"co-operative terrace",
      cityName:"shotton",
      email:"awh.llc.library.shotton@durham.gov.uk",
      phone:"0191 526 1379"
    },
    {
      libraryName:"spennymoor library",
      address:"24 cheapside",
      cityName:"spennymoor",
      email:"",
      phone:"01388 814 694"
    },
    {
      libraryName:"annfield plain library",
      address:"north road",
      cityName:"stanley",
      email:"",
      phone:"01207 234241"
    },
    {
      libraryName:"south moor library",
      address:"severn crescent",
      cityName:"stanley",
      email:"awh.llc.library.southmoor@durham.gov.uk",
      phone:"01207 235 596"
    },
    {
      libraryName:"sedgefield library",
      address:"front street",
      cityName:"stockton-on-tees",
      email:"awh.llc.library.sedgefield@durham.gov.uk",
      phone:"01740 620103"
    },
    {
      libraryName:"thornley library",
      address:"high street",
      cityName:"thornley",
      email:"awh.llc.library.thornley@durham.gov.uk",
      phone:"01429 821 431"
    },
    {
      libraryName:"trimdon library",
      address:"church road",
      cityName:"trimdon",
      email:"awh.llc.library.trimdon@durham.gov.uk",
      phone:"01429 880433"
    },
    {
      libraryName:"bishop auckland library",
      address:"bishop auckland cityname hall",
      cityName:"wear valley",
      email:"",
      phone:"01388 602610"
    },
    {
      libraryName:"wingate library",
      address:"front street",
      cityName:"wingate",
      email:"awh.llc.library.wingate@durham.gov.uk",
      phone:"01429 838 339"
    },
    {
      libraryName:"libraries ni, centre for migration studies",
      address:"ulster american folk park, 2 mellon road",
      cityName:"castlecityname",
      email:"centremigstudies@ni-libraries.net",
      phone:"028 82256315"
    },
    {
      libraryName:"enniskillen library",
      address:"halls lane",
      cityName:"enniskillen",
      email:"",
      phone:""
    },
    {
      libraryName:"irvinescityname library",
      address:"main street",
      cityName:"irvinescityname",
      email:"",
      phone:""
    },
    {
      libraryName:"lisnaskea library",
      address:"drumhaw",
      cityName:"lisnaskea",
      email:"",
      phone:""
    },
    {
      libraryName:"galway county library",
      address:"island house",
      cityName:"galway",
      email:"info@galwaylibrary.ie",
      phone:"0353 091 562471"
    },
    {
      libraryName:"kerry county library",
      address:"moyderwell",
      cityName:"tralee",
      email:"info@kerrycolib.ie",
      phone:"0353 066 7121200"
    },
    {
      libraryName:"kildare county library",
      address:"riverbank",
      cityName:"newbridge",
      email:"colibrary@kildarecoco.ie",
      phone:"0353 045 431486"
    },
    {
      libraryName:"kilkenny public libraries",
      address:"6 rose inn st",
      cityName:"kilkenny",
      email:"info@kilkennylibrary.ie",
      phone:"0353 056 7794160"
    },
    {
      libraryName:"laois county library",
      address:"county hall",
      cityName:"portlaoise",
      email:"library@laoiscoco.ie",
      phone:"0353 057 8674315"
    },
    {
      libraryName:"leitrim county library",
      address:"main street",
      cityName:"ballinamore",
      email:"library@leitrimcoco.ie",
      phone:"0353 071 9645582"
    },
    {
      libraryName:"limerick county library",
      address:"58 o'connell street",
      cityName:"limerick",
      email:"libinfo@limerickcoco.ie",
      phone:"0353 061 49 65 26"
    },
    {
      libraryName:"limerick city library",
      address:"the granary",
      cityName:"limerick",
      email:"citylib@limerickcity.ie",
      phone:"0353 61 407510"
    },
    {
      libraryName:"coleraine library",
      address:"queen street",
      cityName:"coleraine",
      email:"",
      phone:""
    },
    {
      libraryName:"derry central library",
      address:"35 foyle street",
      cityName:"derry",
      email:"derrycentrallibrary@ni-libraries.net",
      phone:"028 71272310"
    },
    {
      libraryName:"waterside library",
      address:"23 glendermot road",
      cityName:"derry",
      email:"",
      phone:""
    },
    {
      libraryName:"shantallow library",
      address:"92 racecourse road",
      cityName:"derry",
      email:"",
      phone:""
    },
    {
      libraryName:"draperscityname library",
      address:"high street",
      cityName:"draperscityname",
      email:"",
      phone:""
    },
    {
      libraryName:"dungiven library",
      address:"74 main street",
      cityName:"dungiven",
      email:"",
      phone:""
    },
    {
      libraryName:"garvagh library",
      address:"bridge street",
      cityName:"garvagh",
      email:"",
      phone:""
    },
    {
      libraryName:"kilrea library",
      address:"cityname hall",
      cityName:"kilrea",
      email:"",
      phone:""
    },
    {
      libraryName:"limavady library",
      address:"5 connell street",
      cityName:"limavady",
      email:"",
      phone:""
    },
    {
      libraryName:"maghera library",
      address:"1 main street",
      cityName:"maghera",
      email:"",
      phone:""
    },
    {
      libraryName:"magherafelt library",
      address:"the bridewell",
      cityName:"magherafelt",
      email:"",
      phone:""
    },
    {
      libraryName:"moneymore library",
      address:"8 main street",
      cityName:"moneymore",
      email:"",
      phone:""
    },
    {
      libraryName:"portstewart library",
      address:"cityname hall",
      cityName:"portstewart",
      email:"",
      phone:""
    },
    {
      libraryName:"longford county library",
      address:"cityname centre",
      cityName:"longford",
      email:"library@longfordcoco.ie",
      phone:"0353 043 41124"
    },
    {
      libraryName:"louth county library",
      address:"roden place",
      cityName:"dundalk",
      email:"libraryhelpdesk@louthcoco.ie",
      phone:"0353 042 9335457"
    },
    {
      libraryName:"mayo county library",
      address:"john moore rd",
      cityName:"castlebar",
      email:"avaughan@mayococo.ie",
      phone:"0353 094 9047573"
    },
    {
      libraryName:"kells and connor library",
      address:"5 main street",
      cityName:"kells",
      email:"",
      phone:""
    },
    {
      libraryName:"meath county library",
      address:"railway street",
      cityName:"navan",
      email:"colibrarian@meathcoco.ie",
      phone:"0353 046 9021134"
    },
    {
      libraryName:"monaghan county library",
      address:"98th avenue",
      cityName:"clones",
      email:"moncolib@eircom.net",
      phone:"0353 047 51143"
    },
    {
      libraryName:"offaly county library",
      address:"o'connor square",
      cityName:"tullamore",
      email:"libraryhq@offalycoco.ie",
      phone:"0353 057 93 46833"
    },
    {
      libraryName:"roscommon county library",
      address:"abbey street",
      cityName:"roscommon",
      email:"roslib@roscommoncoco.ie",
      phone:"0353 090 6637277"
    },
    {
      libraryName:"sligo county library",
      address:"bridge street\\\\nwestward cityname centre",
      cityName:"sligo",
      email:"sligolib@sligococo.ie",
      phone:"0353 071 9147190"
    },
    {
      libraryName:"castlederg library",
      address:"main street",
      cityName:"castlederg",
      email:"",
      phone:""
    },
    {
      libraryName:"coalisland library",
      address:"the cornmill",
      cityName:"coalisland",
      email:"",
      phone:""
    },
    {
      libraryName:"cookscityname library",
      address:"burn road",
      cityName:"cookscityname",
      email:"",
      phone:""
    },
    {
      libraryName:"dungannon library",
      address:"market square",
      cityName:"dungannon",
      email:"",
      phone:""
    },
    {
      libraryName:"fintona library",
      address:"112-114 main street",
      cityName:"fintona",
      email:"",
      phone:""
    },
    {
      libraryName:"fivemilecityname library",
      address:"main street",
      cityName:"fivemilecityname",
      email:"",
      phone:""
    },
    {
      libraryName:"moy library",
      address:"the square",
      cityName:"moy",
      email:"",
      phone:""
    },
    {
      libraryName:"newcitynamestewart library",
      address:"main street",
      cityName:"newcitynamestewart",
      email:"",
      phone:""
    },
    {
      libraryName:"omagh library",
      address:"1 spillers place",
      cityName:"omagh",
      email:"omaghlibrary@ni-libraries.net",
      phone:"0288 2244821"
    },
    {
      libraryName:"strabane library",
      address:"1 railway road",
      cityName:"strabane",
      email:"",
      phone:""
    },
    {
      libraryName:"waterford city council library",
      address:"waterford city council depot",
      cityName:"waterford",
      email:"library@waterfordcity.ie",
      phone:"0353 051 849839"
    },
    {
      libraryName:"westmeath county library",
      address:"dublin road",
      cityName:"mullingar",
      email:"library@westmeathcoco.ie",
      phone:"0353 044 9340781"
    },
    {
      libraryName:"wexford county library",
      address:"floor 2., block d",
      cityName:"carricklawn",
      email:"libraryhq@wexfordcoco.ie",
      phone:"0353 53 9214922"
    },
    {
      libraryName:"wicklow county library",
      address:"boghall road",
      cityName:"bray",
      email:"library@wicklowcoco.ie",
      phone:"0353 01 2866566"
    },
    {
      libraryName:"strathfoyle library",
      address:"22 temple road",
      cityName:"strathfoyle",
      email:"",
      phone:""
    },
    {
      libraryName:"tipperary libraries",
      address:"castle avenue",
      cityName:"thurles",
      email:"info@tipperarylibraries.ie",
      phone:"0353 0504 21555"
    },
    {
      libraryName:"waterford county library",
      address:"waterford co. library hq.",
      cityName:"lismore",
      email:"libraryhq@waterfordcoco.ie",
      phone:"0353 058 21370"
    },
    {
      libraryName:"abergele library",
      address:"market street",
      cityName:"abergele",
      email:"",
      phone:""
    },
    {
      libraryName:"colwyn bay library",
      address:"woodland road west",
      cityName:"colwyn bay",
      email:"",
      phone:""
    },
    {
      libraryName:"conwy library",
      address:"cityname hall",
      cityName:"conwy",
      email:"",
      phone:""
    },
    {
      libraryName:"conwy library",
      address:"cityname hall",
      cityName:"conwy",
      email:"",
      phone:""
    },
    {
      libraryName:"cerrigydrudion library",
      address:"king street",
      cityName:"corwen",
      email:"",
      phone:""
    },
    {
      libraryName:"deganwy library",
      address:"223 station road",
      cityName:"deganwy",
      email:"",
      phone:""
    },
    {
      libraryName:"kinmel bay library",
      address:"community centre",
      cityName:"kinmel bay",
      email:"",
      phone:""
    },
    {
      libraryName:"llandudno library",
      address:"mostyn street",
      cityName:"llandudno",
      email:"",
      phone:""
    },
    {
      libraryName:"llandudno junction library",
      address:"maes derw",
      cityName:"llandudno junction",
      email:"",
      phone:""
    },
    {
      libraryName:"llanfairfechan library",
      address:"village road",
      cityName:"llanfairfechan",
      email:"",
      phone:""
    },
    {
      libraryName:"llanrwst library",
      address:"plas yn dre",
      cityName:"llanrwst",
      email:"",
      phone:""
    },
    {
      libraryName:"penrhyn bay library",
      address:"llandudno road",
      cityName:"nr llandudno",
      email:"",
      phone:""
    },
    {
      libraryName:"penmaenmawr library",
      address:"bangor road",
      cityName:"penmaenmawr",
      email:"",
      phone:""
    },
    {
      libraryName:"cork county library",
      address:"carrigrohane road",
      cityName:"cork",
      email:"corkcountylibrary@corkcoco.ie",
      phone:"0353 021 4546499"
    },
    {
      libraryName:"cork city library",
      address:"57-61 grand parade",
      cityName:"cork",
      email:"libraries@corkcity.ie",
      phone:"0353 021 4924900"
    },
    {
      libraryName:"bodmin library",
      address:"lower bore street",
      cityName:"bodmin",
      email:"bodmin.library@cornwall.gov.uk",
      phone:"01208 72286"
    },
    {
      libraryName:"bude library",
      address:"the wharf",
      cityName:"bude",
      email:"bude.library@cornwall.gov.uk",
      phone:"0300 1234 111"
    },
    {
      libraryName:"callington library",
      address:"coronation road",
      cityName:"callington",
      email:"callington.library@cornwall.gov.uk",
      phone:"01579 383236"
    },
    {
      libraryName:"camborne library",
      address:"the cross",
      cityName:"camborne",
      email:"camborne.library@cornwall.gov.uk",
      phone:"01209 713544"
    },
    {
      libraryName:"camelford library",
      address:"cityname hall",
      cityName:"camelford",
      email:"camelford.library@cornwall.gov.uk",
      phone:"03001234 111"
    },
    {
      libraryName:"falmouth library",
      address:"municipal offices",
      cityName:"falmouth",
      email:"falmouth.library@cornwall.gov.uk",
      phone:"01326 314901"
    },
    {
      libraryName:"fowey library",
      address:"caffa mill house",
      cityName:"fowey",
      email:"fowey.library@cornwall.gov.uk",
      phone:"01726 832332"
    },
    {
      libraryName:"hayle library",
      address:"commercial road",
      cityName:"hayle",
      email:"hayle.library@cornwall.gov.uk",
      phone:"+44 (0)1736 753196"
    },
    {
      libraryName:"helston library",
      address:"trengrouse way",
      cityName:"helston",
      email:"helston.library@cornwall.gov.uk",
      phone:"01326 572321"
    },
    {
      libraryName:"st keverne library",
      address:"st keverne village primary school",
      cityName:"helston",
      email:"stkeverne.library@cornwall.gov.uk",
      phone:"01326 281218"
    },
    {
      libraryName:"launceston library",
      address:"bounsalls lane",
      cityName:"launceston",
      email:"launceston.library@cornwall.gov.uk",
      phone:"01566 773306"
    },
    {
      libraryName:"liskeard library",
      address:"barras street",
      cityName:"liskeard",
      email:"email:  liskeard.library@cornwall.gov.uk",
      phone:"+44 (0)1579 343285"
    },
    {
      libraryName:"upton cross library",
      address:"upton cross school",
      cityName:"liskeard",
      email:"uptoncross.library@cornwall.gov.uk",
      phone:"01579 363878"
    },
    {
      libraryName:"looe library",
      address:"sea front court",
      cityName:"looe",
      email:"looe.library@cornwall.gov.uk",
      phone:"+44 (0)1503 262365"
    },
    {
      libraryName:"lostwithiel library",
      address:"taprell house",
      cityName:"lostwithiel",
      email:"lostwithiel.library@cornwall.gov.uk",
      phone:"01208 872747"
    },
    {
      libraryName:"newquay library",
      address:"marcus hill",
      cityName:"newquay",
      email:"newquay.library@cornwall.gov.uk",
      phone:"01637 873538"
    },
    {
      libraryName:"padstow library",
      address:"the institute",
      cityName:"padstow",
      email:"padstow.library@cornwall.gov.uk",
      phone:"01841 532387"
    },
    {
      libraryName:"par library",
      address:"hamleys corner",
      cityName:"par",
      email:"par.library@cornwall.gov.uk",
      phone:"03001234 111"
    },
    {
      libraryName:"penryn library",
      address:"st thomas street",
      cityName:"penryn",
      email:"",
      phone:""
    },
    {
      libraryName:"penzance library",
      address:"morrab road",
      cityName:"penzance",
      email:"penzance.library@cornwall.gov.uk",
      phone:"01736 363 954"
    },
    {
      libraryName:"perranporth library",
      address:"oddfellows hall",
      cityName:"perranporth",
      email:"perranporth.library@cornwall.gov.uk",
      phone:"01872 572 590"
    },
    {
      libraryName:"redruth library",
      address:"2-4 clinton road",
      cityName:"redruth",
      email:"redruth.library@cornwall.gov.uk",
      phone:"0300 1234 111"
    },
    {
      libraryName:"cornwall learning library",
      address:"cornwall council",
      cityName:"redruth",
      email:"",
      phone:""
    },
    {
      libraryName:"saltash library",
      address:"callington road",
      cityName:"saltash",
      email:"saltash.library@cornwall.gov.uk",
      phone:"01752 842 478"
    },
    {
      libraryName:"st agnes library",
      address:"the car park",
      cityName:"st agnes",
      email:"stagnes.library@cornwall.gov.uk",
      phone:"01872 553 245"
    },
    {
      libraryName:"st austell library",
      address:"2 carlyon road",
      cityName:"st austell",
      email:"staustell.library@cornwall.gov.uk",
      phone:"01726 73348"
    },
    {
      libraryName:"st dennis library",
      address:"carne hill",
      cityName:"st austell",
      email:"stdennis.library@cornwall.gov.uk",
      phone:"01726 823149"
    },
    {
      libraryName:"st columb library",
      address:"the cityname hall",
      cityName:"st columb",
      email:"stcolumb.library@cornwall.gov.uk",
      phone:"01637 881 480"
    },
    {
      libraryName:"st ives library",
      address:"gabriel street",
      cityName:"st ives",
      email:"stives.library@cornwall.gov.uk",
      phone:"01736 788 586"
    },
    {
      libraryName:"st just library",
      address:"market street",
      cityName:"st just",
      email:"stjust.library@cornwall.gov.uk",
      phone:"01736 788 669"
    },
    {
      libraryName:"torpoint library",
      address:"fore street",
      cityName:"torpoint",
      email:"torpoint.library@cornwall.gov.uk",
      phone:"01752 812207"
    },
    {
      libraryName:"truro library",
      address:"union place",
      cityName:"truro",
      email:"truro.library@cornwall.gov.uk",
      phone:"01872 279205"
    },
    {
      libraryName:"wadebridge library",
      address:"southern way",
      cityName:"wadebridge",
      email:"wadebridge.library@cornwall.gov.uk",
      phone:"01208 812 202"
    },
    {
      libraryName:"carlow county library",
      address:"tullow street",
      cityName:"carlow",
      email:"library@carlowcoco.ie",
      phone:"0353 059 9170094"
    },
    {
      libraryName:"cavan county library",
      address:"famham street",
      cityName:"cavan",
      email:"library@cavancoco.ie",
      phone:"0353 049 4378500"
    },
    {
      libraryName:"local studies centre, clare county library",
      address:"harmony row\\\\nthe manse",
      cityName:"ennis",
      email:"mailbox@clarelibrary.ie",
      phone:"0353 065 6846271"
    },
    {
      libraryName:"egglescliffe library",
      address:"butterfield drive",
      cityName:"egglescliffe",
      email:"egglescliffe.library@stockton.gov.uk",
      phone:"01642 527959"
    },
    {
      libraryName:"fairfield library",
      address:"fairfield road",
      cityName:"fairfield",
      email:"",
      phone:""
    },
    {
      libraryName:"ingelby barwick library",
      address:"ingleby barwick community campus",
      cityName:"ingleby barwick",
      email:"",
      phone:""
    },
    {
      libraryName:"alston library",
      address:"cityname hall",
      cityName:"alston",
      email:"",
      phone:""
    },
    {
      libraryName:"ambleside library cdc",
      address:"kelsick road",
      cityName:"ambleside",
      email:"kendal.library@cumbriacc.gov.uk",
      phone:"0153 9432507"
    },
    {
      libraryName:"appleby library",
      address:"low wiend",
      cityName:"appleby",
      email:"",
      phone:""
    },
    {
      libraryName:"arnside library",
      address:"pier lane",
      cityName:"arnside",
      email:"kendal.library@cumbriacc.gov.uk",
      phone:"01524 761649"
    },
    {
      libraryName:"askam library",
      address:"lord street",
      cityName:"askam",
      email:"barrow.library@cumbriacc.gov.uk",
      phone:"01229 462869"
    },
    {
      libraryName:"aspatria library",
      address:"the brandraw",
      cityName:"aspatria",
      email:"",
      phone:""
    },
    {
      libraryName:"barrow library",
      address:"ramsden square",
      cityName:"barrow in furness",
      email:"barrow.library@cumbriacc.gov.uk",
      phone:"01229 407370"
    },
    {
      libraryName:"barrow island library",
      address:"19 ramsden dock road",
      cityName:"barrow in furness",
      email:"barrow.library@cumbriacc.gov.uk",
      phone:"01229 894380"
    },
    {
      libraryName:"roose library",
      address:"roose road",
      cityName:"barrow in furness",
      email:"barrow.library@cumbriacc.gov.uk",
      phone:"01229 894384"
    },
    {
      libraryName:"walney library",
      address:"central drive",
      cityName:"barrow in furness",
      email:"",
      phone:""
    },
    {
      libraryName:"ormsgill library",
      address:"ormsgill childrens centre",
      cityName:"barrow in furness",
      email:"",
      phone:""
    },
    {
      libraryName:"hallbankgate library link",
      address:"store terrace",
      cityName:"brampton",
      email:"",
      phone:""
    },
    {
      libraryName:"broughton in furness(library link)",
      address:"the victory hall",
      cityName:"broughton in furness",
      email:"",
      phone:""
    },
    {
      libraryName:"carlisle library",
      address:"11 globe lane",
      cityName:"carlisle",
      email:"carlisle.library@cumbriacc.gov.uk",
      phone:"01228 227310"
    },
    {
      libraryName:"denton holme library",
      address:"community centre",
      cityName:"carlisle",
      email:"carlisle.library@cumbriacc.gov.uk",
      phone:"01228 607340"
    },
    {
      libraryName:"harraby library",
      address:"edgehill road",
      cityName:"carlisle",
      email:"carlisle.library@cumbriacc.gov.uk",
      phone:"01228 607341"
    },
    {
      libraryName:"morton library",
      address:"morton community centre",
      cityName:"carlisle",
      email:"",
      phone:"01228 607342"
    },
    {
      libraryName:"longcityname library",
      address:"lochinvar centre",
      cityName:"carlisle",
      email:"carlisle.library@cumbriacc.gov.uk",
      phone:"01228 791638"
    },
    {
      libraryName:"brampton library",
      address:"1 market place.",
      cityName:"carlisle",
      email:"carlisle.library@cumbriacc.gov.uk",
      phone:"016977 2189"
    },
    {
      libraryName:"dalston library",
      address:"14 the square",
      cityName:"carlisle",
      email:"",
      phone:""
    },
    {
      libraryName:"cleator moor library",
      address:"market square",
      cityName:"cleator moor",
      email:"whitehaven.library@cumbriacc.gov.uk",
      phone:"01946 855030"
    },
    {
      libraryName:"cockermouth library",
      address:"main street",
      cityName:"cockermouth",
      email:"workington.library@cumbriacc.gov.uk",
      phone:"01900 325990"
    },
    {
      libraryName:"dalton in furness library",
      address:"nelson street",
      cityName:"dalton in furness",
      email:"barrow.library@cumbriacc.gov.uk",
      phone:"01229 897921"
    },
    {
      libraryName:"thornhill library",
      address:"thornhill school",
      cityName:"egremont",
      email:"library@southampton.gov.uk",
      phone:"023 8083 3007"
    },
    {
      libraryName:"egremont library",
      address:"cityname hall",
      cityName:"egremont",
      email:"",
      phone:""
    },
    {
      libraryName:"frizington library",
      address:"main street",
      cityName:"frizington",
      email:"whitehaven.library@cumbriacc.gov.uk",
      phone:"01946 810775"
    },
    {
      libraryName:"grange over sands library",
      address:"grange fell road",
      cityName:"grange over sands",
      email:"kendal.library@cumbriacc.gov.uk",
      phone:"015395 32749"
    },
    {
      libraryName:"kendal library",
      address:"stricklandgate",
      cityName:"kendal",
      email:"kendal.library@cumbriacc.gov.uk",
      phone:"01539 773520"
    },
    {
      libraryName:"keswick library",
      address:"heads lane",
      cityName:"keswick",
      email:"",
      phone:""
    },
    {
      libraryName:"kirkby lonsdale library",
      address:"chapel lane",
      cityName:"kirby lonsdale",
      email:"kendal.library@cumbriacc.gov.uk",
      phone:"015242 71386"
    },
    {
      libraryName:"kirkby stephen library",
      address:"15 market street",
      cityName:"kirkby stephen",
      email:"penrith.library@cumbriacc.gov.uk",
      phone:"017683 71775"
    },
    {
      libraryName:"maryport library",
      address:"lawson street",
      cityName:"maryport",
      email:"workington.library@cumbriacc.gov.uk",
      phone:"01900 812384"
    },
    {
      libraryName:"millom library",
      address:"st georges road",
      cityName:"millom",
      email:"whitehaven.library@cumbriacc.gov.uk",
      phone:"01229 772445"
    },
    {
      libraryName:"milnthorpe library",
      address:"19 the square",
      cityName:"milnthorpe",
      email:"kendal.library@cumbriacc.gov.uk",
      phone:"015395 63040"
    },
    {
      libraryName:"penrith library",
      address:"st andrews churchyard",
      cityName:"penrith",
      email:"penrith.library@cumbriacc.gov.uk",
      phone:"01768 242100"
    },
    {
      libraryName:"lazonby co-op (library link)",
      address:"penrith co-operative society",
      cityName:"penrith",
      email:"",
      phone:""
    },
    {
      libraryName:"seascale library",
      address:"gosforth road",
      cityName:"seascale",
      email:"whitehaven.library@cumbriacc.gov.uk",
      phone:"019467 28487"
    },
    {
      libraryName:"sedbergh library",
      address:"main street",
      cityName:"sedbergh",
      email:"kendal.library@cumbriacc.gov.uk",
      phone:"015396 20186"
    },
    {
      libraryName:"shap library",
      address:"the old courthouse",
      cityName:"shap",
      email:"penrith.library@cumbriacc.gov.uk",
      phone:"01931 716644"
    },
    {
      libraryName:"silloth library",
      address:"solway community school",
      cityName:"silloth",
      email:"workington.library@cumbriacc.gov.uk",
      phone:"016973 32195"
    },
    {
      libraryName:"coniston library",
      address:"john ruskin institute",
      cityName:"south lakeland",
      email:"kendal.library@cumbriacc.gov.uk",
      phone:"015394 41731"
    },
    {
      libraryName:"st bees library",
      address:"st bees library",
      cityName:"st bees",
      email:"",
      phone:""
    },
    {
      libraryName:"ulverston library",
      address:"kings road",
      cityName:"ulverston",
      email:"",
      phone:""
    },
    {
      libraryName:"cumbria libraries, whitehaven record office and local studies library",
      address:"scotch street",
      cityName:"whitehaven",
      email:"whitehaven.record.office@cumbriacc.gov.uk",
      phone:"01946 852920"
    },
    {
      libraryName:"hensingham library",
      address:"richmond hill road",
      cityName:"whitehaven",
      email:"whitehaven.library@cumbriacc.gov.uk",
      phone:"01946 852921"
    },
    {
      libraryName:"mirehouse library",
      address:"meadow road",
      cityName:"whitehaven",
      email:"whitehaven.library@cumbriacc.gov.uk",
      phone:"01946 852923"
    },
    {
      libraryName:"kells library",
      address:"high road",
      cityName:"whitehaven",
      email:"agnes.ligeti@cumbriacc.gov.uk",
      phone:7818588481
    },
    {
      libraryName:"whitehaven library",
      address:"lowther street",
      cityName:"whitehaven",
      email:"",
      phone:""
    },
    {
      libraryName:"wigton library",
      address:"high street",
      cityName:"wigton",
      email:"workington.library@cumbriacc.gov.uk",
      phone:"016973 66150"
    },
    {
      libraryName:"abbeycityname library",
      address:"holm cultram abbey c of e primary school",
      cityName:"wigton",
      email:"",
      phone:""
    },
    {
      libraryName:"windermere library",
      address:"ellerthwaite",
      cityName:"windermere",
      email:"",
      phone:""
    },
    {
      libraryName:"workington library",
      address:"vulcans lane",
      cityName:"workington",
      email:"workington.library@cumbriacc.gov.uk",
      phone:"01900 325170"
    },
    {
      libraryName:"moorclose library",
      address:"needham drive",
      cityName:"workington",
      email:"workington.library@cumbriacc.gov.uk",
      phone:"01900 325190"
    },
    {
      libraryName:"distington library",
      address:"community centre",
      cityName:"workington",
      email:"whitehaven.library@cumbriacc.gov.uk",
      phone:"01946 832649"
    },
    {
      libraryName:"corwen library",
      address:"neuadd edeyrnion",
      cityName:"corwen",
      email:"",
      phone:""
    },
    {
      libraryName:"denbigh library",
      address:"hall square",
      cityName:"denbigh",
      email:"",
      phone:""
    },
    {
      libraryName:"llangollen library",
      address:"the chapel",
      cityName:"llangollen",
      email:"",
      phone:""
    },
    {
      libraryName:"prestatyn library",
      address:"nant hall road",
      cityName:"prestatyn",
      email:"",
      phone:""
    },
    {
      libraryName:"rhuthin library",
      address:"record street",
      cityName:"rhuthin",
      email:"library@denbighshire.gov.uk",
      phone:"01824 705274"
    },
    {
      libraryName:"rhuddlan library",
      address:"vicarage lane",
      cityName:"rhyl",
      email:"",
      phone:""
    },
    {
      libraryName:"rhyl library",
      address:"church street",
      cityName:"rhyl",
      email:"",
      phone:""
    },
    {
      libraryName:"st asaph library",
      address:"the roe",
      cityName:"st asaph",
      email:"",
      phone:""
    },
    {
      libraryName:"somercotes library",
      address:"somerlea park junior school",
      cityName:"alfreton",
      email:"",
      phone:"01773 540514"
    },
    {
      libraryName:"south normanton library",
      address:"new street",
      cityName:"alfreton",
      email:"southnormanton.library@derbyshire.gov.uk",
      phone:"01773 811493"
    },
    {
      libraryName:"alfreton library",
      address:"severn square",
      cityName:"alfreton",
      email:"alfreton.library@derbyshire.gov.uk",
      phone:"01773 833199"
    },
    {
      libraryName:"allenton library",
      address:"poole street",
      cityName:"allenton",
      email:"",
      phone:""
    },
    {
      libraryName:"alvaston library",
      address:"london road",
      cityName:"alvaston",
      email:"",
      phone:""
    },
    {
      libraryName:"ashbourne library",
      address:"cokayne avenue",
      cityName:"ashbourne",
      email:"ashbourne.library@derbyshire.gov.uk",
      phone:"01335 342702"
    },
    {
      libraryName:"bakewell library",
      address:"granby road",
      cityName:"bakewell",
      email:"bakewell.library@derbyshire.gov.uk",
      phone:"01629 812267"
    },
    {
      libraryName:"duffield library",
      address:"wirksworth road",
      cityName:"belper",
      email:"duffield.library@derbyshire.gov.uk",
      phone:"01332 840324"
    },
    {
      libraryName:"belper library",
      address:"bridge street",
      cityName:"belper",
      email:"belper.library@derbyshire.gov.uk",
      phone:"01773 824333"
    },
    {
      libraryName:"borrowash library",
      address:"victoria avenue",
      cityName:"borrowash",
      email:"borrowash.library@derbyshire.gov.uk",
      phone:"01332 663440"
    },
    {
      libraryName:"tideswell library",
      address:"st. johns institute",
      cityName:"buxton",
      email:"",
      phone:"01298 871769"
    },
    {
      libraryName:"buxton library",
      address:"kents bank road",
      cityName:"buxton",
      email:"buxton.library@derbyshire.gov.uk",
      phone:"01629 533460"
    },
    {
      libraryName:"brimington library",
      address:"church street",
      cityName:"chesterfield",
      email:"brimington.library@derbyshire.gov.uk",
      phone:"01245 271547"
    },
    {
      libraryName:"wingerworth library",
      address:"parish rooms",
      cityName:"chesterfield",
      email:"wingerworth.library@derbyshire.gov.uk",
      phone:"01246 208345"
    },
    {
      libraryName:"chesterfield library",
      address:"new beetwell street",
      cityName:"chesterfield",
      email:"chesterfield.library@derbyshire.gov.uk",
      phone:"01246 209292"
    },
    {
      libraryName:"old whittington library",
      address:"swanwick memorial hall",
      cityName:"chesterfield",
      email:"oldwhittington.library@derbyshire.gov.uk",
      phone:"01246 454412"
    },
    {
      libraryName:"staveley library",
      address:"hall lane",
      cityName:"chesterfield",
      email:"staveley.library@derbyshire.gov.uk",
      phone:"01246 472448"
    },
    {
      libraryName:"clowne library",
      address:"recreation close",
      cityName:"chesterfield",
      email:"clowne.library@derbyshire.gov.uk",
      phone:"01246 810675"
    },
    {
      libraryName:"bolsover library",
      address:"church street",
      cityName:"chesterfield",
      email:"bolsover.library@derbyshire.gov.uk",
      phone:"01246 823179"
    },
    {
      libraryName:"holmewood library",
      address:"heath road",
      cityName:"chesterfield",
      email:"holmewood.library@derbyshire.gov.uk",
      phone:"01246 851307"
    },
    {
      libraryName:"clay cross library",
      address:"kenning park",
      cityName:"chesterfield",
      email:"claycross.library@derbyshire.gov.uk",
      phone:"01246 862592"
    },
    {
      libraryName:"creswell library",
      address:"50-54 elmton road",
      cityName:"creswell",
      email:"",
      phone:"01909 721606"
    },
    {
      libraryName:"derby city libraries, local studies library",
      address:"25b irongate",
      cityName:"derby",
      email:"localstudies.library@derby.gov.uk",
      phone:"01332 255393"
    },
    {
      libraryName:"derby central library",
      address:"the wardwick",
      cityName:"derby",
      email:"central.library@derby.gov.uk",
      phone:"01332 2553989"
    },
    {
      libraryName:"spondon library",
      address:"sitwell street",
      cityName:"derby",
      email:"spondon.library@derby.gov.uk",
      phone:"01332 662708"
    },
    {
      libraryName:"sinfin library",
      address:"district centre",
      cityName:"derby",
      email:"sinfin.library@derby.gov.uk",
      phone:"01332 711302"
    },
    {
      libraryName:"mickleover library",
      address:"holly end road",
      cityName:"derby",
      email:"mickleover.library@derby.gov.uk",
      phone:"01332 718926"
    },
    {
      libraryName:"springwood library",
      address:"springwood leisure centre",
      cityName:"derby",
      email:"",
      phone:""
    },
    {
      libraryName:"derwent community library",
      address:"roe farm lane",
      cityName:"derby",
      email:"",
      phone:""
    },
    {
      libraryName:"chaddesden library",
      address:"chaddesden park",
      cityName:"derby",
      email:"",
      phone:""
    },
    {
      libraryName:"allestree library",
      address:"park farm centre",
      cityName:"derby",
      email:"",
      phone:""
    },
    {
      libraryName:"mackworth library",
      address:"prince charles avenue",
      cityName:"derby",
      email:"",
      phone:""
    },
    {
      libraryName:"blagreaves library",
      address:"blagreaves lane",
      cityName:"derby",
      email:"",
      phone:""
    },
    {
      libraryName:"peartree library",
      address:"peartree road",
      cityName:"derby",
      email:"",
      phone:""
    },
    {
      libraryName:"chellaston library",
      address:"barley croft",
      cityName:"derby",
      email:"",
      phone:""
    },
    {
      libraryName:"dronfield library",
      address:"manor house",
      cityName:"dronfield",
      email:"dronfield.library@derbyshire.gov.uk",
      phone:"01629 533450"
    },
    {
      libraryName:"eckington library",
      address:"market street",
      cityName:"eckington",
      email:"eckington.library@derbyshire.gov.uk",
      phone:"01246 433943"
    },
    {
      libraryName:"etwall library",
      address:"egginton road",
      cityName:"etwall",
      email:"etwall.library@derbyshire.gov.uk",
      phone:"01283 733357"
    },
    {
      libraryName:"hadfield library",
      address:"station road",
      cityName:"glossop",
      email:"",
      phone:"01457 852589"
    },
    {
      libraryName:"glossop library",
      address:"victoria hall",
      cityName:"glossop",
      email:"glossop.library@derbyshire.gov.uk",
      phone:"01457 852616"
    },
    {
      libraryName:"gamesley library",
      address:"gamesley primary school",
      cityName:"glossop",
      email:"gamesley.library@derbyshire.gov.uk",
      phone:"01457 860041"
    },
    {
      libraryName:"heanor library",
      address:"ilkeston road",
      cityName:"heanor",
      email:"heanor.library@derbyshire.gov.uk",
      phone:"01773 712482"
    },
    {
      libraryName:"chapel-en-le-frith library",
      address:"cityname hall",
      cityName:"high peak",
      email:"chapel.library@derbyshire.gov.uk",
      phone:"01298 812212"
    },
    {
      libraryName:"whaley bridge library",
      address:"mechanics institute",
      cityName:"high peak",
      email:"whaleybridge.library@derbyshire.gov.uk",
      phone:"01663 732480"
    },
    {
      libraryName:"hayfield library",
      address:"kinder road",
      cityName:"high peak",
      email:"",
      phone:"01663 743508"
    },
    {
      libraryName:"new mills library",
      address:"hall street",
      cityName:"high peak",
      email:"newmills.library@derbyshire.gov.uk",
      phone:"01663 743603"
    },
    {
      libraryName:"ilkeston library",
      address:"market street",
      cityName:"ilkeston",
      email:"ilkeston.library@derbyshire.gov.uk",
      phone:"0115 9301104"
    },
    {
      libraryName:"kegworth library",
      address:"high street",
      cityName:"kegworth",
      email:"kegworthlibrary@leics.gov.uk",
      phone:"0116 3053609"
    },
    {
      libraryName:"killamarsh library",
      address:"killamarsh community campus",
      cityName:"killamarsh",
      email:"killamarsh.library@derbyshire.gov.uk",
      phone:"0114 2485616"
    },
    {
      libraryName:"long eaton library",
      address:"tamworth road",
      cityName:"long eaton",
      email:"longeaton.library@derbyshire.gov.uk",
      phone:"0115 9735426"
    },
    {
      libraryName:"matlock library",
      address:"steep turnpike",
      cityName:"matlock",
      email:"matlock.library@derbyshire.gov.uk",
      phone:"01629 582480"
    },
    {
      libraryName:"derbyshire libraries local studies library",
      address:"county hall\\\\nderbyshire county council",
      cityName:"matlock",
      email:"localstudies@derbyshire.gov.uk",
      phone:"01629 585579"
    },
    {
      libraryName:"wirksworth library",
      address:"cityname hall",
      cityName:"matlock",
      email:"",
      phone:"01629 823173"
    },
    {
      libraryName:"measham library",
      address:"thorpe road",
      cityName:"measham",
      email:"meashamlibrary@leics.gov.uk",
      phone:"0116 3053709"
    },
    {
      libraryName:"melbourne library",
      address:"leisure centre",
      cityName:"melbourne",
      email:"melbourne.library@derbyshire.gov.uk",
      phone:"01332 863893"
    },
    {
      libraryName:"pinxton library",
      address:"kirkstead road",
      cityName:"pinxton",
      email:"pinxton.library@derbyshire.gov.uk",
      phone:"01773 812317"
    },
    {
      libraryName:"ripley library",
      address:"grosvenor road",
      cityName:"ripley",
      email:"ripley.library@derbyshire.gov.uk",
      phone:"01773 743321"
    },
    {
      libraryName:"sandiacre library",
      address:"doncaster avenue",
      cityName:"sandiacre",
      email:"sandiacre.library@derbyshire.gov.uk",
      phone:"0115 9396805"
    },
    {
      libraryName:"shirebrook library",
      address:"19 patchwork row",
      cityName:"shirebrook",
      email:"",
      phone:"01623 742425"
    },
    {
      libraryName:"woodville library",
      address:"1 hartshorne road",
      cityName:"swadlincote",
      email:"",
      phone:"01629 531397"
    },
    {
      libraryName:"swadlincote library",
      address:"civic way",
      cityName:"swadlincote",
      email:"swadlincote.library@derbyshire.gov.uk",
      phone:"01629 533013"
    },
    {
      libraryName:"whitwell library",
      address:"community centre",
      cityName:"whitwell",
      email:"whitwell.library@derbyshire.gov.uk",
      phone:"01909 722906"
    },
    {
      libraryName:"newbold library",
      address:"windermere road",
      cityName:"chesterfield",
      email:"",
      phone:"01246 277328"
    },
    {
      libraryName:"appledore library",
      address:"the quay",
      cityName:"appledore",
      email:"appledore.library@devon.gov.uk",
      phone:"01237 477442"
    },
    {
      libraryName:"ashburton library",
      address:"old cityname hall",
      cityName:"ashburton",
      email:"ashburton.library@devon.gov.uk",
      phone:"01364 652896"
    },
    {
      libraryName:"axminster library",
      address:"south street",
      cityName:"axminster",
      email:"axminster.library@devon.gov.uk",
      phone:"01297 32693"
    },
    {
      libraryName:"bampton library",
      address:"newton square",
      cityName:"bampton",
      email:"bampton.library@devon.gov.uk",
      phone:"01398 331802"
    },
    {
      libraryName:"barnstaple library",
      address:"tuly street",
      cityName:"barnstaple",
      email:"barnref.library@devon.gov.uk",
      phone:"01271 388593"
    },
    {
      libraryName:"bideford library",
      address:"new road",
      cityName:"bideford",
      email:"bideford.library@devon.gov.uk",
      phone:"01237 476075"
    },
    {
      libraryName:"bovey tracey library",
      address:"abbey road",
      cityName:"bovey tracey",
      email:"boveytracey.library@devon.gov.uk",
      phone:"01626 832026"
    },
    {
      libraryName:"braunton library",
      address:"challoners road",
      cityName:"braunton",
      email:"braunton.library@devon.gov.uk",
      phone:"01271 812808"
    },
    {
      libraryName:"buckfastleigh library",
      address:"cityname hall",
      cityName:"buckfastleigh",
      email:"buckfast.library@devon.gov.uk",
      phone:"01364 642638"
    },
    {
      libraryName:"budleigh salterton library",
      address:"station road",
      cityName:"budleigh salterton",
      email:"budleigh.library@devon.gov.uk",
      phone:"01395 443245"
    },
    {
      libraryName:"chagford library",
      address:"jubilee hall",
      cityName:"chagford",
      email:"chagford.library@devon.gov.uk",
      phone:"01647 433651"
    },
    {
      libraryName:"chulmleigh library",
      address:"fourways cross",
      cityName:"chulmleigh",
      email:"chulmleigh.library@devon.gov.uk",
      phone:"01769 580292"
    },
    {
      libraryName:"colyton library",
      address:"high street",
      cityName:"colyton",
      email:"colyton.library@devon.gov.uk",
      phone:"01297 552877"
    },
    {
      libraryName:"combe martin library",
      address:"westbourne terrace",
      cityName:"combe martin",
      email:"combemartin.library@devon.gov.uk",
      phone:"01271 822321"
    },
    {
      libraryName:"crediton library",
      address:"belle parade",
      cityName:"crediton",
      email:"crediton.library@devon.gov.uk",
      phone:"01363 772578"
    },
    {
      libraryName:"cullompton library",
      address:"2 exeter hill",
      cityName:"cullompton",
      email:"cullompton.library@devon.gov.uk",
      phone:"01884 33628"
    },
    {
      libraryName:"dartmouth library",
      address:"the flavel",
      cityName:"dartmouth",
      email:"dartmouth.library@devon.gov.uk",
      phone:"01803 832502"
    },
    {
      libraryName:"dartmouth library",
      address:"the flavel",
      cityName:"dartmouth",
      email:"dartmouth.library@devon.gov.uk",
      phone:"01803 832502"
    },
    {
      libraryName:"dawlish library",
      address:"1 lawn terrace",
      cityName:"dawlish",
      email:"dawlish.library@devon.gov.uk",
      phone:"01626 862529"
    },
    {
      libraryName:"st thomas library",
      address:"the plaza",
      cityName:"exeter",
      email:"st.thomas.library@devon.gov.uk",
      phone:"01392 252783"
    },
    {
      libraryName:"exeter central library",
      address:"castle street",
      cityName:"exeter",
      email:"exeterref.library@devon.gov.uk",
      phone:"01392 384206"
    },
    {
      libraryName:"clyst vale library",
      address:"clyst vale community college",
      cityName:"exeter",
      email:"clyst.vale.library@devon.gov.uk",
      phone:"01392 464010"
    },
    {
      libraryName:"pinhoe library",
      address:"main road",
      cityName:"exeter",
      email:"pinhoe.library@devon.gov.uk",
      phone:"01392 466007"
    },
    {
      libraryName:"exmouth library",
      address:"40 exeter road",
      cityName:"exmouth",
      email:"exmouth.library@devon.gov.uk",
      phone:"01395 272677"
    },
    {
      libraryName:"holsworthy library",
      address:"north road",
      cityName:"holsworthy",
      email:"holsworthy.library@devon.gov.uk",
      phone:"01409 253514"
    },
    {
      libraryName:"honiton library",
      address:"48-50 new street",
      cityName:"honiton",
      email:"honiton.library@devon.gov.uk",
      phone:"01404 42818"
    },
    {
      libraryName:"ilfracombe library",
      address:"the candar",
      cityName:"ilfracombe",
      email:"ilfracombe.library@devon.gov.uk",
      phone:"01271 862388"
    },
    {
      libraryName:"ivybridge library",
      address:"the watermark",
      cityName:"ivybridge",
      email:"ivybridge.library@devon.gov.uk",
      phone:"01752 893140â â"
    },
    {
      libraryName:"kingsbridge library",
      address:"ilbert road",
      cityName:"kingsbridge",
      email:"kingsbridge.library@devon.gov.uk",
      phone:"01548 852315"
    },
    {
      libraryName:"kingerswell library",
      address:"1 newton road",
      cityName:"kingskerswell",
      email:"kingskerswell.library@devon.gov.uk",
      phone:"01803 873723"
    },
    {
      libraryName:"kingsteignton library",
      address:"newton road",
      cityName:"kingsteignton",
      email:"kingsteign.library@devon.gov.uk",
      phone:"01626 367980"
    },
    {
      libraryName:"lynton library",
      address:"market hall",
      cityName:"lynton",
      email:"lynton.library@devon.gov.uk",
      phone:"01598 752505"
    },
    {
      libraryName:"moretonhampstead library",
      address:"fore street",
      cityName:"moretonhampstead",
      email:"moreton.library@devon.gov.uk",
      phone:"01647 440523"
    },
    {
      libraryName:"newton abbot library",
      address:"market street",
      cityName:"newton abbot",
      email:"newtonabbot.library@devon.gov.uk",
      phone:"01626 206420"
    },
    {
      libraryName:"northam library",
      address:"fore street",
      cityName:"northam",
      email:"northam.library@devon.gov.uk",
      phone:"01237 475111"
    },
    {
      libraryName:"okehampton library",
      address:"4 north street",
      cityName:"okehampton",
      email:"okehampton.library@devon.gov.uk",
      phone:"01837 52805"
    },
    {
      libraryName:"ottery st mary library",
      address:"old cityname hall",
      cityName:"ottery st mary",
      email:"ottery.library@devon.gov.uk",
      phone:"01404 813838"
    },
    {
      libraryName:"estover community library",
      address:"tor bridge high school",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 207889"
    },
    {
      libraryName:"st aubyn (devonport) library",
      address:"chapel street",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 305203"
    },
    {
      libraryName:"plympton library",
      address:"ridgeway",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 305630"
    },
    {
      libraryName:"peverell library",
      address:"242a peverell park road",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 305633"
    },
    {
      libraryName:"southway library",
      address:"359 southway drive",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 305636"
    },
    {
      libraryName:"plymouth central library",
      address:"drake circus",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 305923"
    },
    {
      libraryName:"st budeaux library",
      address:"the square",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 306237"
    },
    {
      libraryName:"stoke library",
      address:"21 albert road",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 306239"
    },
    {
      libraryName:"west park library",
      address:"423-425 crownhill road",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 306241"
    },
    {
      libraryName:"crownhill library",
      address:"cross park road",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 306248"
    },
    {
      libraryName:"plymstock library",
      address:"horn cross road",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 306606"
    },
    {
      libraryName:"efford library",
      address:"19 torridge way",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 308985"
    },
    {
      libraryName:"ernesettle library",
      address:"3 hornchurch road",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 365522"
    },
    {
      libraryName:"north prospect library",
      address:"wolseley road",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 556778"
    },
    {
      libraryName:"laira library",
      address:"240 old laira road",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 665737"
    },
    {
      libraryName:"tothill library",
      address:"tothill community centre",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 667427"
    },
    {
      libraryName:"eggbuckland library",
      address:"eggbuckland community college",
      cityName:"plymouth",
      email:"library@plymouth.gov.uk",
      phone:"01752 786353"
    },
    {
      libraryName:"princecityname library",
      address:"claremont house",
      cityName:"princecityname",
      email:"princecityname.library@devon.gov.uk",
      phone:"01822 890370"
    },
    {
      libraryName:"salcombe library",
      address:"cliff house",
      cityName:"salcombe",
      email:"salcombe.library@devon.gov.uk",
      phone:"01548 843423"
    },
    {
      libraryName:"seaton library",
      address:"23 queen street",
      cityName:"seaton",
      email:"seaton.library@devon.gov.uk",
      phone:"01297 21832"
    },
    {
      libraryName:"sidmouth library",
      address:"blackmore drive",
      cityName:"sidmouth",
      email:"sidmouth.library@devon.gov.uk",
      phone:"01395 512192"
    },
    {
      libraryName:"south moulton library",
      address:"1 east street",
      cityName:"south molton",
      email:"southmolton.library@devon.gov.uk",
      phone:"01769 572128"
    },
    {
      libraryName:"stoke fleming library",
      address:"village hall",
      cityName:"stoke fleming",
      email:"stokeflem.library@devon.gov.uk",
      phone:"01803 770076"
    },
    {
      libraryName:"tavistock library",
      address:"the quay",
      cityName:"tavistock",
      email:"tavistock.library@devon.gov.uk",
      phone:"01822 612218"
    },
    {
      libraryName:"chudleigh library",
      address:"market way",
      cityName:"teignbridge",
      email:"chudleigh.library@devon.gov.uk",
      phone:"01626 852469"
    },
    {
      libraryName:"teignmouth library",
      address:"fore street",
      cityName:"teignmouth",
      email:"teignmouth.library@devon.gov.uk",
      phone:"01626 774646"
    },
    {
      libraryName:"tiverton library and learning centre",
      address:"phoenix house",
      cityName:"tiverton",
      email:"tiverton.library@devon.gov.uk",
      phone:"01884 244644"
    },
    {
      libraryName:"topsham library",
      address:"nelson close",
      cityName:"topsham",
      email:"topsham.library@devon.gov.uk",
      phone:"01392 874955"
    },
    {
      libraryName:"torrington library",
      address:"castle hill",
      cityName:"torrington",
      email:"torrington.library@devon.gov.uk",
      phone:"01805 622107"
    },
    {
      libraryName:"totnes library",
      address:"27a high street",
      cityName:"totnes",
      email:"totnes.library@devon.gov.uk",
      phone:"01803 862210"
    },
    {
      libraryName:"uffculme library",
      address:"school house",
      cityName:"uffculme",
      email:"uffculme.library@devon.gov.uk",
      phone:"01884 840522"
    },
    {
      libraryName:"beaminster library",
      address:"6 fleet street",
      cityName:"beaminster",
      email:"beaminsterlibrary@dorsetcc.gov.uk",
      phone:"01308 862362"
    },
    {
      libraryName:"blandford library",
      address:"the tabernacle",
      cityName:"blandford forum",
      email:"blandfordlibrary@dorsetcc.gov.uk",
      phone:"01258 452075"
    },
    {
      libraryName:"springbourne library",
      address:"holdenhurst road",
      cityName:"bournemouth",
      email:"springbourne@bournemouthlibraries.org.uk",
      phone:"01202 397115"
    },
    {
      libraryName:"southbourne library",
      address:"seabourne road",
      cityName:"bournemouth",
      email:"southbourne@bournemouthlibraries.org.uk",
      phone:"01202 428784"
    },
    {
      libraryName:"tuckton library",
      address:"wick lane",
      cityName:"bournemouth",
      email:"tuckton@bourneouthlibraries.org.uk",
      phone:"01202 429521"
    },
    {
      libraryName:"castlepoint library",
      address:"castlepoint",
      cityName:"bournemouth",
      email:"castlepoint@bournemouthlibraries.org.uk",
      phone:"01202 451900"
    },
    {
      libraryName:"boscombe library",
      address:"hawkwood road",
      cityName:"bournemouth",
      email:"boscombe@bournemouthlibraries.org.uk",
      phone:"01202 452777"
    },
    {
      libraryName:"kinson hub library",
      address:"kinson community centre, wimborne road",
      cityName:"bournemouth",
      email:"kinson@bournemouthlibraries.org.uk",
      phone:"01202 452788"
    },
    {
      libraryName:"bournemouth library",
      address:"22 the triangle",
      cityName:"bournemouth",
      email:"medi.bernard@bournemouthlibraries.org.uk",
      phone:"01202 454 848"
    },
    {
      libraryName:"charminster library",
      address:"strouden avenue",
      cityName:"bournemouth",
      email:"charminster@charminsterlibraries.org.uk",
      phone:"01202 510379"
    },
    {
      libraryName:"winton library",
      address:"wimborne road",
      cityName:"bournemouth",
      email:"winton@bournemouthlibraries.org.uk",
      phone:"01202 528139"
    },
    {
      libraryName:"ensbury park library",
      address:"31 columbia road",
      cityName:"bournemouth",
      email:"ensburypark@bournemouthlibraries.org.uk",
      phone:"01202 536397"
    },
    {
      libraryName:"west howe library",
      address:"cunningham crescent",
      cityName:"bournemouth",
      email:"westhowe@bourenouthlibraries.org.uk",
      phone:"01202 573665"
    },
    {
      libraryName:"westbourne library",
      address:"alum chine road",
      cityName:"bournemouth",
      email:"westbourne@bournemouthlibraries.org.uk",
      phone:"01202 761845"
    },
    {
      libraryName:"charmouth library",
      address:"the street",
      cityName:"bridport",
      email:"charmouthlibrary@dorsetcc.gov.uk",
      phone:"01297 560640"
    },
    {
      libraryName:"burton bradstock library",
      address:"the old wesleyan chapel",
      cityName:"bridport",
      email:"burtonbradstocklibrary@dorsetcc.gov.uk",
      phone:"01308 897563"
    },
    {
      libraryName:"bridport library",
      address:"south street",
      cityName:"bridport",
      email:"",
      phone:""
    },
    {
      libraryName:"christchurch library",
      address:"high street",
      cityName:"christchurch",
      email:"christchurchlibrary@dorsetcc.gov.uk",
      phone:"01202 485938"
    },
    {
      libraryName:"highcliffe library",
      address:"gordon road",
      cityName:"christchurch",
      email:"highcliffelibrary@dorsetcc.gov.uk",
      phone:"01425 272202"
    },
    {
      libraryName:"dorchester library",
      address:"colliton park",
      cityName:"dorchester",
      email:"dorchesterlibrary@dorsetcc.gov.uk",
      phone:"01305 224440224652"
    },
    {
      libraryName:"chickerell library",
      address:"east street",
      cityName:"dorchester",
      email:"chickerelllibrary@dorsetcc.gov.uk",
      phone:"01305 760095"
    },
    {
      libraryName:"crossways library",
      address:"old farm way",
      cityName:"dorchester",
      email:"crosswayslibrary@dorsetcc.gov.uk",
      phone:"01305 854080"
    },
    {
      libraryName:"ferndown library",
      address:"pennys walk",
      cityName:"ferndown",
      email:"ferndownlibrary@dorsetcc.gov.uk",
      phone:"01202 874542"
    },
    {
      libraryName:"gillingham library",
      address:"chantry fields",
      cityName:"gillingham",
      email:"gillinghamlibrary@dorsetcc.gov.uk",
      phone:"01747 822180"
    },
    {
      libraryName:"hamworthy library",
      address:"blandford road",
      cityName:"hamworthy",
      email:"",
      phone:""
    },
    {
      libraryName:"lyme regis library",
      address:"silver street",
      cityName:"lyme regis",
      email:"lymeregislibrary@dorsetcc.gov.uk",
      phone:"01297 443151"
    },
    {
      libraryName:"poole library",
      address:"the dolphin centre",
      cityName:"poole",
      email:"centrallibrary@poole.gov.uk",
      phone:"01202 262421"
    },
    {
      libraryName:"poole local history centre library",
      address:"4 high street\\\\npoole",
      cityName:"poole",
      email:"",
      phone:"01202 262621"
    },
    {
      libraryName:"creekmoor library",
      address:"34 northmead drive",
      cityName:"poole",
      email:"creekmoorlibrary@poole.gov.uk",
      phone:"01202 659289"
    },
    {
      libraryName:"oakdale library",
      address:"wimborne road",
      cityName:"poole",
      email:"oakdalelibrary@poole.gov.uk",
      phone:"01202 674213"
    },
    {
      libraryName:"canford heath library",
      address:"mitchell road",
      cityName:"poole",
      email:"canfordheathlibrary@poole.gov.uk",
      phone:"01202 678955"
    },
    {
      libraryName:"broadstone library",
      address:"10 story lane",
      cityName:"poole",
      email:"broadstonelibrary@poole.gov.uk",
      phone:"01202 693504"
    },
    {
      libraryName:"canford cliffs library",
      address:"western road",
      cityName:"poole",
      email:"canfordcliffslibrary@poole.gov.uk",
      phone:"01202 707805"
    },
    {
      libraryName:"parkstone library",
      address:"britannia road",
      cityName:"poole",
      email:"parkstonelibrary@poole.gov.uk",
      phone:"01202 742218"
    },
    {
      libraryName:"rossmore library",
      address:"herbert avenue",
      cityName:"poole",
      email:"rossmorelibrary@poole.gov.uk",
      phone:"01202 746023"
    },
    {
      libraryName:"branksome library",
      address:"212-220 ashley road",
      cityName:"poole",
      email:"branksomelibrary@poole.gov.uk",
      phone:"01202 748832"
    },
    {
      libraryName:"portland tophill library",
      address:"the straits",
      cityName:"portland",
      email:"portlandtophilllibrary@dorsetcc.gov.uk",
      phone:"01305 820171"
    },
    {
      libraryName:"portland underhill library",
      address:"28 fortuneswell",
      cityName:"portland",
      email:"",
      phone:""
    },
    {
      libraryName:"puddlecityname library",
      address:"high street",
      cityName:"puddlecityname",
      email:"puddlecitynamelibrary@dorsetcc.gov.uk",
      phone:"01305 848506"
    },
    {
      libraryName:"lytchett matravers library",
      address:"high street",
      cityName:"purbeck",
      email:"lytchettmatraverslibrary@dorsetcc.gov.uk",
      phone:"01202 621281"
    },
    {
      libraryName:"swanage library",
      address:"high street",
      cityName:"purbeck",
      email:"swanagelibrary@dorsetcc.gov.uk",
      phone:"01929 423485"
    },
    {
      libraryName:"corfe castle library",
      address:"east street",
      cityName:"purbeck",
      email:"corfecastlelibrary@dorsetcc.gov.uk",
      phone:"01929 480760"
    },
    {
      libraryName:"wareham library",
      address:"south street",
      cityName:"purbeck",
      email:"warehamlibrary@dorsetcc.gov.uk",
      phone:"01929 556146"
    },
    {
      libraryName:"shaftesbury library",
      address:"bell street",
      cityName:"shaftesbury",
      email:"shaftesburylibrary@dorsetcc.gov.uk",
      phone:"01747 852256"
    },
    {
      libraryName:"sherborne library",
      address:"hound street",
      cityName:"sherborne",
      email:"sherbornelibrary@dorsetcc.gov.uk",
      phone:"01935 812683"
    },
    {
      libraryName:"stalbridge library",
      address:"station road",
      cityName:"stalbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"sturminster newton library",
      address:"brinsley close",
      cityName:"sturminster newton",
      email:"sturminsternewtonlibrary@dorsetcc.gov.uk",
      phone:"01258 472669"
    },
    {
      libraryName:"verwood library",
      address:"1 manor road",
      cityName:"verwood",
      email:"verwoodlibrary@dorsetcc.gov.uk",
      phone:"01202 822972"
    },
    {
      libraryName:"wyke regis library",
      address:"portland road",
      cityName:"weymouth",
      email:"wykeregislibrary@dorsetcc.gov.uk",
      phone:"01305 760191"
    },
    {
      libraryName:"weymouth library",
      address:"great george street",
      cityName:"weymouth",
      email:"weymouthlibrary@dorsetcc.gov.uk",
      phone:"01305 762 410"
    },
    {
      libraryName:"littlemoor library",
      address:"louviers road",
      cityName:"weymouth",
      email:"littlemoorlibrary@dorsetcc.gov.uk",
      phone:"01305 812350"
    },
    {
      libraryName:"corfe mullen library",
      address:"54 wareham road",
      cityName:"wimborne",
      email:"corfemullenlibrary@dorsetcc.gov.uk",
      phone:"01202 659755"
    },
    {
      libraryName:"west moors library",
      address:"station road",
      cityName:"wimborne",
      email:"westmoorslibrary@dorsetcc.gov.uk",
      phone:"01202 873272"
    },
    {
      libraryName:"wimborne library",
      address:"crown mead",
      cityName:"wimborne",
      email:"wimbornelibrary@dorsetcc.gov.uk",
      phone:"01202 882770"
    },
    {
      libraryName:"colehill library",
      address:"middlehill road",
      cityName:"wimborne",
      email:"colehilllibrary@dorsetcc.gov.uk",
      phone:"01202 886676"
    },
    {
      libraryName:"wool library",
      address:"colliers lane",
      cityName:"wool",
      email:"woollibrary@dorsetcc.gov.uk",
      phone:"01929 405259"
    },
    {
      libraryName:"castle douglas library",
      address:"king street",
      cityName:"castle douglas",
      email:"",
      phone:""
    },
    {
      libraryName:"dalbeattie library",
      address:"23-25 high street",
      cityName:"dalbeattie",
      email:"",
      phone:""
    },
    {
      libraryName:"dalry library",
      address:"77 main street",
      cityName:"dalry",
      email:"",
      phone:""
    },
    {
      libraryName:"lochthorn library",
      address:"edinburgh road",
      cityName:"dumfries",
      email:"",
      phone:""
    },
    {
      libraryName:"georgecityname library",
      address:"gillbrae road",
      cityName:"dumfries",
      email:"",
      phone:""
    },
    {
      libraryName:"lochside library",
      address:"30 lochside road",
      cityName:"dumfries",
      email:"",
      phone:""
    },
    {
      libraryName:"eastriggs library",
      address:"eastriggs primary school",
      cityName:"eastriggs",
      email:"",
      phone:""
    },
    {
      libraryName:"gatehouse library",
      address:"63 high street",
      cityName:"gatehouse of fleet",
      email:"",
      phone:""
    },
    {
      libraryName:"gretna library",
      address:"central avenue",
      cityName:"gretna",
      email:"",
      phone:""
    },
    {
      libraryName:"kirkcudbright library",
      address:"high street",
      cityName:"kirkcudbright",
      email:"",
      phone:""
    },
    {
      libraryName:"langholm library",
      address:"charles street",
      cityName:"langholm",
      email:"",
      phone:""
    },
    {
      libraryName:"lochmaben library",
      address:"14 high street",
      cityName:"lochmaben",
      email:"",
      phone:""
    },
    {
      libraryName:"lockerbie library",
      address:"31-33 high street",
      cityName:"lockerbie",
      email:"",
      phone:""
    },
    {
      libraryName:"moffat library",
      address:"high street",
      cityName:"moffat",
      email:"",
      phone:""
    },
    {
      libraryName:"newton stewart library",
      address:"church street",
      cityName:"newton stewart",
      email:"",
      phone:""
    },
    {
      libraryName:"port william library",
      address:"main street",
      cityName:"port william",
      email:"",
      phone:""
    },
    {
      libraryName:"sanquhar library",
      address:"106 high street",
      cityName:"sanquhar",
      email:"",
      phone:""
    },
    {
      libraryName:"kirkconnel library",
      address:"greystone avenue",
      cityName:"sanquhar",
      email:"",
      phone:""
    },
    {
      libraryName:"stranraer library",
      address:"2 10 north strand street",
      cityName:"stranraer",
      email:"",
      phone:""
    },
    {
      libraryName:"thornhill library",
      address:"citynamehead street",
      cityName:"thornhill",
      email:"library@southampton.gov.uk",
      phone:"023 8083 3007"
    },
    {
      libraryName:"whithorn library",
      address:"60 st john street",
      cityName:"whithorn",
      email:"",
      phone:""
    },
    {
      libraryName:"wigcityname library",
      address:"county buildings",
      cityName:"wigcityname",
      email:"",
      phone:""
    },
    {
      libraryName:"annan library",
      address:"charles street",
      cityName:"annan",
      email:"",
      phone:""
    },
    {
      libraryName:"ewart public library",
      address:"catherine street",
      cityName:"dumfries",
      email:"",
      phone:""
    },
    {
      libraryName:"dundee central library",
      address:"the wellgate",
      cityName:"dundee",
      email:"central.library@dundeecity.gov.uk",
      phone:"01382 431500"
    },
    {
      libraryName:"whitfield community library",
      address:"whitfield shopping centre",
      cityName:"dundee",
      email:"whitfield.library@dundeecity.gov.uk",
      phone:"01382 432561"
    },
    {
      libraryName:"blackness community library",
      address:"224 perth road",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"lochee community library",
      address:"high street",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"ardler community library",
      address:"turnberry avenue",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"menzieshill community library",
      address:"orleans place",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"charleston community library",
      address:"60 craigowan road",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"kirkton community library",
      address:"derwent avenue",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"coldside community library",
      address:"150 strathmartine road",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"arthurstone community library",
      address:"arthurstone terrace",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"hub community library",
      address:"pitkerro road",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"douglas community library",
      address:"balmoral place",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"fintry community library",
      address:"findcastle street",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"broughty ferry community library",
      address:"queen street",
      cityName:"dundee",
      email:"",
      phone:""
    },
    {
      libraryName:"westerton library",
      address:"82 maxwell avenue",
      cityName:"bearsden",
      email:"",
      phone:""
    },
    {
      libraryName:"brookwood library",
      address:"166 drymen road",
      cityName:"bearsden",
      email:"",
      phone:""
    },
    {
      libraryName:"bishopbriggs library",
      address:"170 kirkintilloch road",
      cityName:"bishopbriggs",
      email:"",
      phone:""
    },
    {
      libraryName:"craighead library",
      address:"milton of campsie",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"wiliam patrick library",
      address:"2-4 west high street",
      cityName:"kirkintilloch",
      email:"libraries@eastdunbarton.gov.uk",
      phone:"0141 776 8090"
    },
    {
      libraryName:"lennoxcityname library",
      address:"main street",
      cityName:"lennoxcityname",
      email:"",
      phone:""
    },
    {
      libraryName:"lenzie library",
      address:"13/15 alexandra avenue",
      cityName:"lenzie",
      email:"",
      phone:""
    },
    {
      libraryName:"milngavie library",
      address:"allander road",
      cityName:"milngavie",
      email:"",
      phone:""
    },
    {
      libraryName:"dunbar library",
      address:"castellau house",
      cityName:"dunbar",
      email:"",
      phone:""
    },
    {
      libraryName:"east linton library",
      address:"60a high street",
      cityName:"east linton",
      email:"",
      phone:""
    },
    {
      libraryName:"gullane library",
      address:"east links road",
      cityName:"gullane",
      email:"",
      phone:""
    },
    {
      libraryName:"haddington library",
      address:"newton port",
      cityName:"haddington",
      email:"",
      phone:""
    },
    {
      libraryName:"longniddry library",
      address:"church way",
      cityName:"longniddry",
      email:"",
      phone:""
    },
    {
      libraryName:"musselburgh library",
      address:"10 bridge street",
      cityName:"musselburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"north berwick library",
      address:"the old school",
      cityName:"north berwick",
      email:"",
      phone:""
    },
    {
      libraryName:"ormiston library",
      address:"5a meadowbank",
      cityName:"ormiston",
      email:"",
      phone:""
    },
    {
      libraryName:"port seton library",
      address:"community centre",
      cityName:"port seton",
      email:"",
      phone:""
    },
    {
      libraryName:"prestonpans library",
      address:"c/o st andrews scottish episcopal church",
      cityName:"prestonpans",
      email:"",
      phone:""
    },
    {
      libraryName:"tranent library",
      address:"3 civic square",
      cityName:"tranent",
      email:"",
      phone:""
    },
    {
      libraryName:"wallyford library",
      address:"3 faside buildings",
      cityName:"wallyford",
      email:"",
      phone:""
    },
    {
      libraryName:"barrhead community library",
      address:"4 church road",
      cityName:"barrhead",
      email:"",
      phone:""
    },
    {
      libraryName:"busby community library",
      address:"duff memorial hall",
      cityName:"busby",
      email:"",
      phone:""
    },
    {
      libraryName:"clarkston community library",
      address:"clarkston road",
      cityName:"clarkston",
      email:"",
      phone:""
    },
    {
      libraryName:"eaglesham community library",
      address:"montgomerie hall",
      cityName:"eaglesham",
      email:"",
      phone:""
    },
    {
      libraryName:"giffnock community library",
      address:"station road",
      cityName:"giffnock",
      email:"giffnock.library@eastrenfrewshire.gov.uk",
      phone:"+44 (0)141 577 4976"
    },
    {
      libraryName:"neilston community library",
      address:"main street",
      cityName:"neilston",
      email:"",
      phone:""
    },
    {
      libraryName:"netherlee comm library centre",
      address:"netherlee pavillion",
      cityName:"netherlee",
      email:"",
      phone:""
    },
    {
      libraryName:"mearns community library",
      address:"mckinley place",
      cityName:"newton mearns",
      email:"",
      phone:""
    },
    {
      libraryName:"thornliebank community library",
      address:"1 spiersbridge road",
      cityName:"thornliebank",
      email:"",
      phone:""
    },
    {
      libraryName:"uplawmoor comm library centre",
      address:"mure hall",
      cityName:"uplawmoor",
      email:"",
      phone:""
    },
    {
      libraryName:"anlaby library",
      address:"north street",
      cityName:"anlaby",
      email:"anlaby.library@eastriding.gov.uk",
      phone:"01482 657 108"
    },
    {
      libraryName:"beverley library",
      address:"champney road",
      cityName:"beverley",
      email:"beverley.library@eastriding.gov.uk",
      phone:"01482 392 750"
    },
    {
      libraryName:"leven library",
      address:"recreation hall,",
      cityName:"beverley",
      email:"leven.library@eastriding.gov.uk",
      phone:"01964 543 360"
    },
    {
      libraryName:"north bridlington library",
      address:"martongate",
      cityName:"bridlington",
      email:"northbridlington.library@eastriding.gov.uk",
      phone:"01262 671468"
    },
    {
      libraryName:"bridlington library",
      address:"king street",
      cityName:"bridlington",
      email:"bridlington.library@eastriding.gov.uk",
      phone:"01262 672 917"
    },
    {
      libraryName:"flamborough library",
      address:"south sea road",
      cityName:"bridlington",
      email:"flamborough.library@eastriding.gov.uk",
      phone:"01262 850 085"
    },
    {
      libraryName:"brough library",
      address:"east riding petuaria centre",
      cityName:"brough",
      email:"cscbrough@eastriding.gov.uk",
      phone:"846 1225000"
    },
    {
      libraryName:"cottingham library",
      address:"the green",
      cityName:"cottingham",
      email:"cottingham.library@eastriding.gov.uk",
      phone:"01482 392 762"
    },
    {
      libraryName:"driffield library",
      address:"cross hill",
      cityName:"driffield",
      email:"driffield.library@eastriding.gov.uk",
      phone:"01377 253393"
    },
    {
      libraryName:"elloughton library",
      address:"elloughton road",
      cityName:"elloughton",
      email:"angela.mooring@eastriding.gov.uk",
      phone:"01482 667 166"
    },
    {
      libraryName:"goole library",
      address:"carlisle street",
      cityName:"goole",
      email:"goole.library@eastriding.gov.uk",
      phone:"01405 762 187"
    },
    {
      libraryName:"snaith library",
      address:"27 market place",
      cityName:"goole",
      email:"snaith.library@eastriding.gov.uk",
      phone:"01405 860 096"
    },
    {
      libraryName:"hessle library",
      address:"southgate",
      cityName:"hessle",
      email:"hessle.library@eastriding.gov.uk",
      phone:"01482 640 114"
    },
    {
      libraryName:"holderness road csc and library",
      address:"1 the mount",
      cityName:"holderness road",
      email:"",
      phone:"01482 300 300"
    },
    {
      libraryName:"hornsea library",
      address:"newbegin",
      cityName:"hornsea",
      email:"hornsea.library@eastriding.gov.uk",
      phone:"01964 532 561"
    },
    {
      libraryName:"howden library",
      address:"shire hall",
      cityName:"howden",
      email:"howden.library@eastriding.gov.uk",
      phone:"01430 430 378"
    },
    {
      libraryName:"holderness road customer service centre and library",
      address:"1 the mount",
      cityName:"hull",
      email:"holderness.csc@hullcc.gov.uk",
      phone:"01482 318830"
    },
    {
      libraryName:"walker street customer service centre and library",
      address:"the octagon",
      cityName:"hull",
      email:"walkerstreet.csc@hullcc.gov.uk",
      phone:"01482 318845"
    },
    {
      libraryName:"fred moore library",
      address:"wold road",
      cityName:"hull",
      email:"fredmoore.library@hullcc.gov.uk",
      phone:"01482 331 239"
    },
    {
      libraryName:"greenwood avenue library",
      address:"220 greenwood avenue",
      cityName:"hull",
      email:"greenwood.library@hullcc.gov.uk",
      phone:"01482 331 257"
    },
    {
      libraryName:"western library",
      address:"the boulevard",
      cityName:"hull",
      email:"western.library@hullcc.gov.uk",
      phone:"01482 331217"
    },
    {
      libraryName:"bransholme library",
      address:"north point shopping centre",
      cityName:"hull",
      email:"bransholme.library@hullcc.gov.uk",
      phone:"01482 331234"
    },
    {
      libraryName:"ings customer service centre and library",
      address:"savoy road",
      cityName:"hull",
      email:"ingsroad.library@hullcc.gov.uk",
      phone:"01482 331250"
    },
    {
      libraryName:"marfleet library",
      address:"healthcare centre",
      cityName:"hull",
      email:"marfleet.library@hullcc.gov.uk",
      phone:"01482 331264"
    },
    {
      libraryName:"avenues library",
      address:"76 chanterlands avenue",
      cityName:"hull",
      email:"avenues.library@hullcc.gov.uk",
      phone:"01482 331280"
    },
    {
      libraryName:"longhill library",
      address:"longhill health centre",
      cityName:"hull",
      email:"longhill.library@hullcc.gov.uk",
      phone:"01482 331530"
    },
    {
      libraryName:"stadium library",
      address:"kc stadium",
      cityName:"hull",
      email:"claire.stanley@hullcc.gov.uk",
      phone:"01482 381947"
    },
    {
      libraryName:"anlaby park library",
      address:"the greenway",
      cityName:"hull",
      email:"anlabypark.library@hullcc.gov.uk",
      phone:"01482 614483"
    },
    {
      libraryName:"gipsyville library",
      address:"728 - 730 hessle high road",
      cityName:"hull",
      email:"gipsyville.library@hullcc.gov.uk",
      phone:"01482 616 973"
    },
    {
      libraryName:"hull central library",
      address:"albion st",
      cityName:"hull",
      email:"reference.library@hullcc.gov.uk",
      phone:"01482 616870"
    },
    {
      libraryName:"freedom centre library",
      address:"95 preston road",
      cityName:"hull",
      email:"claire.stanley@hullcc.gov.uk",
      phone:"01482 710100"
    },
    {
      libraryName:"hedon library",
      address:"st augustine gate",
      cityName:"hull",
      email:"hedon.library@eastriding.gov.uk",
      phone:"01482 897 651"
    },
    {
      libraryName:"little weighton library",
      address:"parish hall",
      cityName:"little weighton",
      email:"libby.herbert@eastriding.gov.uk",
      phone:"01482 845 436"
    },
    {
      libraryName:"market weighton library",
      address:"beverley road",
      cityName:"market weighton",
      email:"cscweighton@eastriding.gov.uk",
      phone:"08451 225000"
    },
    {
      libraryName:"north ferriby library",
      address:"church road",
      cityName:"north ferriby",
      email:"northferriby.library@eastriding.gov.uk",
      phone:"01482 632 227"
    },
    {
      libraryName:"pocklington library",
      address:"east riding pocela centre",
      cityName:"pocklington",
      email:"customer.services@eastriding.gov.uk",
      phone:"8452 225000"
    },
    {
      libraryName:"rawcliffe traveling library",
      address:"the green amenity land",
      cityName:"rawcliffe",
      email:"",
      phone:""
    },
    {
      libraryName:"skidby library",
      address:"village hall",
      cityName:"skidby",
      email:"libby.herbert@eastriding.gov.uk",
      phone:"01482 845 449"
    },
    {
      libraryName:"south cave library",
      address:"church street",
      cityName:"south cave",
      email:"southcave.library@eastriding.gov.uk",
      phone:"01430 422 901"
    },
    {
      libraryName:"stamford bridge library",
      address:"church road",
      cityName:"stamford bridge",
      email:"stamfordbridge.library@eastriding.gov.uk",
      phone:"01759 372 487"
    },
    {
      libraryName:"swanland library",
      address:"village hall",
      cityName:"swanland",
      email:"swanland.library@eastriding.gov.uk",
      phone:"01482 634 896"
    },
    {
      libraryName:"willerby library",
      address:"the institute",
      cityName:"willerby",
      email:"willerby.library@eastriding.gov.uk",
      phone:"01482 658 077"
    },
    {
      libraryName:"withernsea library",
      address:"queen street",
      cityName:"withernsea",
      email:"withernsea.library@eastriding.gov.uk",
      phone:"01964 612 537"
    },
    {
      libraryName:"alfriston village library",
      address:"war memorial hall",
      cityName:"alfriston",
      email:"",
      phone:""
    },
    {
      libraryName:"battle library",
      address:"7 market square",
      cityName:"battle",
      email:"library.battle@eastsussexcc.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"bexhill library",
      address:"western road",
      cityName:"bexhill",
      email:"library.bexhill@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"hove library",
      address:"182-186 church road",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 290700"
    },
    {
      libraryName:"jubilee library",
      address:"jubilee street",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 290800"
    },
    {
      libraryName:"coldean library,",
      address:"library court, 24 beatty avenue",
      cityName:"brighton",
      email:"",
      phone:"01273 296 902"
    },
    {
      libraryName:"hangleton library",
      address:"west way",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 904"
    },
    {
      libraryName:"hollingbury library",
      address:"1st floor, carden hill",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 908"
    },
    {
      libraryName:"moulsecoomb library",
      address:"the highway",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 910"
    },
    {
      libraryName:"patcham library",
      address:"patcham community centre",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 912"
    },
    {
      libraryName:"rottingdean library",
      address:"the grange",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 918"
    },
    {
      libraryName:"saltdean library",
      address:"saltdean lido",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 920"
    },
    {
      libraryName:"westdene library",
      address:"bankside",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 922"
    },
    {
      libraryName:"whitehawk library",
      address:"179a whitehawk road",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 924"
    },
    {
      libraryName:"woodingdean library",
      address:"warren road",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296 928"
    },
    {
      libraryName:"portslade library",
      address:"old shoreham road",
      cityName:"brighton",
      email:"libraries@brighton-hove.gov.uk",
      phone:"01273 296914"
    },
    {
      libraryName:"brighton history centre library",
      address:"pavilion gardens",
      cityName:"brighton",
      email:"localhistory@brighton-hove.gov.uk",
      phone:"01273 296972"
    },
    {
      libraryName:"mile oak library",
      address:"chalky road, mile oak",
      cityName:"brighton",
      email:"",
      phone:""
    },
    {
      libraryName:"crowborough library",
      address:"pine grove",
      cityName:"crowborough",
      email:"library.crowborough@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"willingdon library",
      address:"coppice avenue",
      cityName:"eastbourne",
      email:"library.willingdon@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"eastbourne library",
      address:"grove road",
      cityName:"eastbourne",
      email:"rhona.drever@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"hampden park library",
      address:"brodrick close",
      cityName:"eastbourne",
      email:"library.hampdenpark@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"langney library",
      address:"unit 3",
      cityName:"eastbourne",
      email:"library.langney@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"pevensey bay library",
      address:"wallsend house",
      cityName:"eastbourne",
      email:"library.pevenseybay@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"forest row library",
      address:"the community centre",
      cityName:"forest row",
      email:"library.forestrow@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"hailsham library",
      address:"western road",
      cityName:"hailsham",
      email:"rhona.drever@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"hastings library",
      address:"brassey institute",
      cityName:"hastings",
      email:"rhona.drever@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"hastings children's library",
      address:"robertson passage",
      cityName:"hastings",
      email:"hastingschildren@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"ore library",
      address:"old london road",
      cityName:"hastings",
      email:"library.ore@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"heathfield library",
      address:"21 high street",
      cityName:"heathfield",
      email:"library.heathfield@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"ringmer library",
      address:"cecil gates room",
      cityName:"lewes",
      email:"library.ringmer@eastsussex.gov.uk",
      phone:"0345 6080195"
    },
    {
      libraryName:"lewes library",
      address:"styles field",
      cityName:"lewes",
      email:"library.lewes@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"mayfield library",
      address:"mayfield ce  school",
      cityName:"mayfield",
      email:"library.mayfield@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"newhaven library",
      address:"16 high street",
      cityName:"newhaven",
      email:"rhona.drever@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"northiam village library",
      address:"jessamine house",
      cityName:"northiam",
      email:"",
      phone:""
    },
    {
      libraryName:"peacehaven library",
      address:"meridian centre",
      cityName:"peacehaven",
      email:"library.peacehaven@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"polegate library",
      address:"windsor way",
      cityName:"polegate",
      email:"library.polegate@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"rotherfield village library",
      address:"memorial institute",
      cityName:"rotherfield",
      email:"",
      phone:"01892 853137"
    },
    {
      libraryName:"rye library",
      address:"30 high street",
      cityName:"rye",
      email:"rhona.drever@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"seaford library",
      address:"17 sutton park road",
      cityName:"seaford",
      email:"library.seaford@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"sedlescombe village library",
      address:"the village hall",
      cityName:"sedlescombe",
      email:"",
      phone:""
    },
    {
      libraryName:"hollington library",
      address:"96 battle road",
      cityName:"st leonards on sea",
      email:"library.hollington@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"uckfield library",
      address:"library way",
      cityName:"uckfield",
      email:"rhona.drever@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"wadhurst library",
      address:"the institute",
      cityName:"wadhurst",
      email:"library.wadhurst@eastsussex.gov.uk",
      phone:"0345 6080196"
    },
    {
      libraryName:"edinburgh central lending library",
      address:"7-9 george iv bridge",
      cityName:"edinburgh",
      email:"",
      phone:"0131 242 8030"
    },
    {
      libraryName:"morningside library",
      address:"184 morningside road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"fountainbridge library",
      address:"137 dundas street",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"balgreen library",
      address:"173 balgreen road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"sighthill library",
      address:"55 slighthill road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"corstorphine library",
      address:"12 kirk loan",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"colinton library",
      address:"14 thorburn road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"oxgangs library",
      address:"343 oxgangs road north",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"wester hailes library",
      address:"1 west side plaza",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"currie library",
      address:"210 lanark road west",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"balerno library",
      address:"1 main street",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"portobello library",
      address:"14 rosefield avenue",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"craigmillar library",
      address:"7 niddrie marischal gardens",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"moredun library",
      address:"92 moredun park road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"gilmerton library",
      address:"13 newtoft street",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"ratho library",
      address:"6 school wynd",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"kirkliston library",
      address:"16 station road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"stockbridge library",
      address:"11 hamilton place",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"south queensferry library",
      address:"9 shore road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"muirhouse library",
      address:"15 pennywell court",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"blackhall library",
      address:"56 hillhouse road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"granton library",
      address:"29 wardieburn terrace",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"leith library",
      address:"28-30 ferry road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"mcdonald road library",
      address:"2 mcdonald road",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"piershill library",
      address:"30 piershill terrace",
      cityName:"edinburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"aveley library",
      address:"purfleet road",
      cityName:"aveley",
      email:"aveley.library@thurrock.gov.uk",
      phone:"01708 865667"
    },
    {
      libraryName:"basildon library",
      address:"the basildon centre",
      cityName:"basildon",
      email:"basildon.library@essexcc.gov.uk",
      phone:"01268 288533"
    },
    {
      libraryName:"fryerns library",
      address:"whitmore way",
      cityName:"basildon",
      email:"fryerns.library@essexcc.gov.uk",
      phone:"01268 521642"
    },
    {
      libraryName:"laindon library",
      address:"new century road",
      cityName:"basildon",
      email:"laindon.library@essexcc.gov.uk",
      phone:"01268 542065"
    },
    {
      libraryName:"vange library",
      address:"southview road",
      cityName:"basildon",
      email:"vange.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"great tarpots library",
      address:"127 london road",
      cityName:"benfleet",
      email:"greattarpots.library@essexcc.gov.uk",
      phone:"01268 757361"
    },
    {
      libraryName:"south benfleet library",
      address:"264 high road",
      cityName:"benfleet",
      email:"south.benfleetlibrary@essex.gov.uk",
      phone:"01268 758558"
    },
    {
      libraryName:"hadleigh library",
      address:"180 london road",
      cityName:"benfleet",
      email:"help@suffolklibraries.co.uk",
      phone:"01473 823778"
    },
    {
      libraryName:"billericay library",
      address:"143 high street",
      cityName:"billericay",
      email:"billericay.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"braintree library",
      address:"fairfield road",
      cityName:"braintree",
      email:"braintree.library@essexcc.gov.uk",
      phone:"01376 320752"
    },
    {
      libraryName:"shenfield library",
      address:"hutton road",
      cityName:"brentwood",
      email:"shenfield.library@essexcc.gov.uk",
      phone:"01277 225540"
    },
    {
      libraryName:"brentwood library",
      address:"new road",
      cityName:"brentwood",
      email:"brentwood.library@essexcc.gov.uk",
      phone:"01277 264290"
    },
    {
      libraryName:"buckhurst hill library",
      address:"165 queens road",
      cityName:"buckhurst hill",
      email:"buckhurst.library@essexcc.gov.uk",
      phone:"0208504 0810"
    },
    {
      libraryName:"burnham-on-crouch library",
      address:"103 station road",
      cityName:"burnham-on-crouch",
      email:"burnham.library@essexcc.gov.uk",
      phone:"01621 782006"
    },
    {
      libraryName:"canvey library",
      address:"high street",
      cityName:"canvey island",
      email:"canvey.library@essex.gov.uk",
      phone:"01268 683741"
    },
    {
      libraryName:"chadwell information centre",
      address:"brentwood road",
      cityName:"chadwell st mary",
      email:"chadwell.information.centre@thurrock.gov.uk",
      phone:"01375 842511"
    },
    {
      libraryName:"danbury library",
      address:"main road",
      cityName:"chelmsford",
      email:"danbury.library@essexcc.gov.uk",
      phone:"01245 225603"
    },
    {
      libraryName:"galleywood library",
      address:"watchouse rd",
      cityName:"chelmsford",
      email:"galleywood.library@essexcc.gov.uk",
      phone:"01245 259042"
    },
    {
      libraryName:"hatfield peverel library",
      address:"the street",
      cityName:"chelmsford",
      email:"hatfieldpeverel.library@essexcc.gov.uk",
      phone:"01245 380988"
    },
    {
      libraryName:"broomfield library",
      address:"180 main street",
      cityName:"chelmsford",
      email:"broomfield.library@essexcc.gov.uk",
      phone:"01245 440254"
    },
    {
      libraryName:"north melbourne library",
      address:"dickens place",
      cityName:"chelmsford",
      email:"northmelbourne.library@essexcc.gov.uk",
      phone:"01245 442292"
    },
    {
      libraryName:"great baddow library",
      address:"27 high street",
      cityName:"chelmsford",
      email:"greatbaddow.library@essexcc.gov.uk",
      phone:"01245 478032"
    },
    {
      libraryName:"writtle library",
      address:"45 the green",
      cityName:"chelmsford",
      email:"writtle.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"south woodham ferrers library",
      address:"trinity square",
      cityName:"chelmsford",
      email:"",
      phone:"0845 603 7628"
    },
    {
      libraryName:"chelmsford library",
      address:"po box 882",
      cityName:"chelmsford",
      email:"chelmsford.library@essexcc.gov.uk",
      phone:"01245 492 758"
    },
    {
      libraryName:"chigwell library",
      address:"hainault road",
      cityName:"chigwell",
      email:"chigwell.library@essexcc.gov.uk",
      phone:"020 85007809"
    },
    {
      libraryName:"hainault library",
      address:"100 manford way",
      cityName:"chigwell",
      email:"hainault.library@redbridge.gov.uk",
      phone:"0208708 9206"
    },
    {
      libraryName:"chipping ongar library",
      address:"the pleasance",
      cityName:"chipping ongar",
      email:"chippingongar.library@essexcc.gov.uk",
      phone:"01277 362616"
    },
    {
      libraryName:"jaywick library",
      address:"public hall",
      cityName:"clacton on sea",
      email:"",
      phone:""
    },
    {
      libraryName:"clacton library",
      address:"station road (opposite the cityname hall)",
      cityName:"clacton-on-sea",
      email:"clacton.library@essex.gov.uk",
      phone:"01255 421207"
    },
    {
      libraryName:"holland library",
      address:"public hall frinton road",
      cityName:"clacton-on-sea",
      email:"holland.library@essexcc.gov.uk",
      phone:"01255 812409"
    },
    {
      libraryName:"bishops park library",
      address:"jaywick lane",
      cityName:"clacton-on-sea",
      email:"",
      phone:""
    },
    {
      libraryName:"coggeshall library",
      address:"the friends' meeting house",
      cityName:"coggeshall",
      email:"coggeshall.library@essexcc.gov.uk",
      phone:"01376 561962"
    },
    {
      libraryName:"colchester library",
      address:"trinity square",
      cityName:"colchester",
      email:"viv.kuphal@essexcc.gov.uk",
      phone:"01206 245900"
    },
    {
      libraryName:"prettygate library",
      address:"prettygate road",
      cityName:"colchester",
      email:"prettygate.library@essexcc.gov.uk",
      phone:"01206 563700"
    },
    {
      libraryName:"greenstead library",
      address:"hawthorne avenue",
      cityName:"colchester",
      email:"greenstead.library@essex.gov.uk",
      phone:"01206 862758"
    },
    {
      libraryName:"west mersea library",
      address:"13 high street",
      cityName:"colchester",
      email:"westmersea.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"brightlingsea library",
      address:"new street",
      cityName:"colchester",
      email:"brightlingsea.library@essexcc.uk",
      phone:"1207 302399"
    },
    {
      libraryName:"dunmow library",
      address:"47 white hart way",
      cityName:"dunmow",
      email:"dunmow.library@essexcc.gov.uk",
      phone:"01371 873447"
    },
    {
      libraryName:"thaxted library",
      address:"clarance house",
      cityName:"dunmow",
      email:"thaxted.library@essexcc.gov.uk",
      phone:"846 603 7628"
    },
    {
      libraryName:"earls colne library",
      address:"william hunt reading room and library",
      cityName:"earls colne",
      email:"earlscolne.library@essexcc.gov.uk",
      phone:"01787 223565"
    },
    {
      libraryName:"epping library",
      address:"st john's road",
      cityName:"epping",
      email:"epping.library@essexcc.gov.uk",
      phone:"01992 573504"
    },
    {
      libraryName:"north weald library",
      address:"138 high road",
      cityName:"epping",
      email:"northweald.library@essex.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"frinton library",
      address:"59 old road",
      cityName:"frinton-on-sea",
      email:"frinton.library@essex.gov.uk",
      phone:"01255 672581"
    },
    {
      libraryName:"blackshots library",
      address:"blackshots lane",
      cityName:"grays",
      email:"blackshots.library@thurrock.gov.uk",
      phone:"01375 373244"
    },
    {
      libraryName:"grays library",
      address:"orsett road",
      cityName:"grays",
      email:"grays.library@thurrock.gov.uk",
      phone:"01375 413976"
    },
    {
      libraryName:"halstead library",
      address:"bridge street",
      cityName:"halstead",
      email:"halstead.library@essex.gov.uk",
      phone:"01787 473431"
    },
    {
      libraryName:"great parndon library",
      address:"parnall rd",
      cityName:"harlow",
      email:"gtparndon.library@essexcc.gov.uk",
      phone:"01279 435101"
    },
    {
      libraryName:"tye green library",
      address:"tilegate road",
      cityName:"harlow",
      email:"tyegreen.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"mark hall library",
      address:"the stow",
      cityName:"harlow",
      email:"markhall.library@essexcc.gov.uk",
      phone:"01279 425533"
    },
    {
      libraryName:"harwich library",
      address:"upper kingsway",
      cityName:"harwich",
      email:"harwich.library@essex.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"hockley library",
      address:"southend road",
      cityName:"hockley",
      email:"hockley.library@essexcc.gov.uk",
      phone:"01702 203558"
    },
    {
      libraryName:"hullbridge library",
      address:"ferry road",
      cityName:"hockley",
      email:"hullbridge.library@essexcc.gov.uk",
      phone:"01702 230868"
    },
    {
      libraryName:"hornchurch library",
      address:"44 north street",
      cityName:"hornchurch",
      email:"hornchurch.library@havering.gov.uk",
      phone:"01708 434903"
    },
    {
      libraryName:"ingatestone library",
      address:"high street",
      cityName:"ingatestone",
      email:"ingatestone.library@essexcc.gov.uk",
      phone:"01277 354284"
    },
    {
      libraryName:"stock library",
      address:"swan lane",
      cityName:"ingatestone",
      email:"",
      phone:""
    },
    {
      libraryName:"kelvedon library",
      address:"aylett's foundation school",
      cityName:"kelvedon",
      email:"kelvedon1.library@essex.gov.uk",
      phone:"01376 570843"
    },
    {
      libraryName:"leigh library",
      address:"broadway west",
      cityName:"leigh on sea",
      email:"",
      phone:""
    },
    {
      libraryName:"kent elms library",
      address:"1 raleigh road",
      cityName:"leigh on sea",
      email:"",
      phone:""
    },
    {
      libraryName:"debden library",
      address:"borders lane",
      cityName:"loughton",
      email:"debdenlib@essex.gov.uk",
      phone:"0208 5085869"
    },
    {
      libraryName:"loughton library",
      address:"traps hill",
      cityName:"loughton",
      email:"loughton.library@essexcc.gov.uk",
      phone:"0208502 0181"
    },
    {
      libraryName:"maldon library",
      address:"carmelite house",
      cityName:"maldon",
      email:"maldon.library@essex.gov.uk",
      phone:"01621 853556"
    },
    {
      libraryName:"manningtree library",
      address:"high street",
      cityName:"manningtree",
      email:"manningtree.library@essex.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"old harlow library",
      address:"30 high street",
      cityName:"old harlow",
      email:"harlow.library@essexcc.gov.uk",
      phone:"01279 413772"
    },
    {
      libraryName:"pitsea library",
      address:"community centre",
      cityName:"pitsea",
      email:"pitsea.library@essexcc.gov.uk",
      phone:"01268 552884"
    },
    {
      libraryName:"rainham library",
      address:"7/11 the broadway",
      cityName:"rainham",
      email:"rainham.library@havering.gov.uk",
      phone:"01708 551905"
    },
    {
      libraryName:"south hornhcurch library",
      address:"rainham road",
      cityName:"rainham",
      email:"southhornchurch.library@havering.gov.uk",
      phone:"01708 554126"
    },
    {
      libraryName:"rayleigh library",
      address:"132/4 high street",
      cityName:"rayleigh",
      email:"rayleigh.library@essexcc.gov.uk",
      phone:"01268 775830"
    },
    {
      libraryName:"rochford library",
      address:"8 roche close",
      cityName:"rochford",
      email:"",
      phone:""
    },
    {
      libraryName:"harold wood library",
      address:"arundel road",
      cityName:"romford",
      email:"haroldwood.library@havering.gov.uk",
      phone:"01708 342071"
    },
    {
      libraryName:"harold hill library",
      address:"hilldene avenue",
      cityName:"romford",
      email:"haroldhill.library@havering.gov.uk",
      phone:"01708 342749"
    },
    {
      libraryName:"gidea park library",
      address:"balgores lane",
      cityName:"romford",
      email:"gideapark.library@havering.gov.uk",
      phone:"01708 441856"
    },
    {
      libraryName:"elm park library",
      address:"st. nicholas avenue",
      cityName:"romford",
      email:"elmpark.library@havering.gov.uk",
      phone:"01708 451270"
    },
    {
      libraryName:"collier row library",
      address:"45 collier row road",
      cityName:"romford",
      email:"collierrow.library@havering.gov.uk",
      phone:"01708 760063"
    },
    {
      libraryName:"romford central library",
      address:"st. edwards way",
      cityName:"romford",
      email:"",
      phone:""
    },
    {
      libraryName:"saffron walden library",
      address:"2 king street",
      cityName:"saffron walden",
      email:"saffronwalden.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"thorpedene library",
      address:"delaware road",
      cityName:"shoeburyness",
      email:"",
      phone:"0170 2587761"
    },
    {
      libraryName:"friars library",
      address:"the renown",
      cityName:"shoeburyness",
      email:"",
      phone:""
    },
    {
      libraryName:"sible hedingham library",
      address:"169 swan street",
      cityName:"sible hedingham",
      email:"siblehedingham.library@essexcc.gov.uk",
      phone:"01787 460650"
    },
    {
      libraryName:"silver end library",
      address:"10 the broadway",
      cityName:"silver end",
      email:"silverend.library@essexcc.gov.uk",
      phone:"01376 584754"
    },
    {
      libraryName:"belhus library",
      address:"derry avenue",
      cityName:"south ockendon",
      email:"belhus.library@thurrock.gov.uk",
      phone:"01708 852398"
    },
    {
      libraryName:"southchurch library",
      address:"221 lifstan way",
      cityName:"southend-on-sea",
      email:"",
      phone:"01702 215011"
    },
    {
      libraryName:"southend central library",
      address:"victoria avenue",
      cityName:"southend-on-sea",
      email:"library@southend.gov.uk",
      phone:"01702 534100"
    },
    {
      libraryName:"great wakering library",
      address:"16 high street",
      cityName:"southend-on-sea",
      email:"greatwakering.library@essexcc.gov.uk",
      phone:"01702 219438"
    },
    {
      libraryName:"southminster library",
      address:"queenborough road",
      cityName:"southminster",
      email:"southminster.library@essex.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"stanford-le-hope library",
      address:"high street",
      cityName:"stanford le hope",
      email:"stanford.le.hope.library@thurrock.gov.uk",
      phone:"01375 672058"
    },
    {
      libraryName:"corringham library",
      address:"st. johns way",
      cityName:"stanford le hope",
      email:"corringham@thurrock.gov.uk",
      phone:"01375 678 534"
    },
    {
      libraryName:"stansted library",
      address:"crafton green",
      cityName:"stansted mountfitchet",
      email:"stansted.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"stanway library",
      address:"10 villa road",
      cityName:"stanway",
      email:"stanway.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"tilbury library",
      address:"civic square",
      cityName:"tilbury",
      email:"tilbury.library@thurrock.gov.uk",
      phone:"01375 842612"
    },
    {
      libraryName:"east tilbury library",
      address:"princess avenue",
      cityName:"tilbury",
      email:"easttilbury.library@thurrock.gov.uk",
      phone:"01375 844921"
    },
    {
      libraryName:"tiptree library",
      address:"rectory road",
      cityName:"tiptree",
      email:"tiptree.library@essex.gov.uk",
      phone:"01621 816458"
    },
    {
      libraryName:"upminster library",
      address:"26 corbets tey road",
      cityName:"upminster",
      email:"upminster.library@havering.gov.uk",
      phone:"01708 434933"
    },
    {
      libraryName:"waltham abbey library",
      address:"37 sun street",
      cityName:"waltham abbey",
      email:"walthamabbey.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"walton library",
      address:"52 high street",
      cityName:"walton-on-the-naze",
      email:"",
      phone:""
    },
    {
      libraryName:"westcliff library",
      address:"649 london road",
      cityName:"westcliff on sea",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01724 860605"
    },
    {
      libraryName:"wickford library",
      address:"market road",
      cityName:"wickford",
      email:"",
      phone:"0845 603 7628"
    },
    {
      libraryName:"witham library",
      address:"18 newland street",
      cityName:"witham",
      email:"witham.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"wickham bishops library",
      address:"school road",
      cityName:"witham",
      email:"wickhambishops.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"wivenhoe library",
      address:"104/6 high street",
      cityName:"wivenhoe",
      email:"wivenhoe.library@essexcc.gov.uk",
      phone:"0845 603 7628"
    },
    {
      libraryName:"boness library",
      address:"scotlands close",
      cityName:"boness",
      email:"",
      phone:""
    },
    {
      libraryName:"bonnybridge library",
      address:"bridge street",
      cityName:"bonnybridge",
      email:"",
      phone:""
    },
    {
      libraryName:"denny library",
      address:"49 church walk",
      cityName:"denny",
      email:"",
      phone:""
    },
    {
      libraryName:"falkirk library",
      address:"hope street",
      cityName:"falkirk",
      email:"for family history enquiries: irene.mcintyre@falkirk.gov.uk",
      phone:"01324 503605"
    },
    {
      libraryName:"grangemouth library",
      address:"boness road",
      cityName:"grangemouth",
      email:"",
      phone:""
    },
    {
      libraryName:"larbert library",
      address:"22 hallam road",
      cityName:"larbert",
      email:"",
      phone:""
    },
    {
      libraryName:"meadowbank library",
      address:"6a stevenson avenue",
      cityName:"polmont",
      email:"",
      phone:""
    },
    {
      libraryName:"slamannan library",
      address:"the cross",
      cityName:"slamannan",
      email:"",
      phone:""
    },
    {
      libraryName:"kincardine library",
      address:"2 keith street",
      cityName:"alloa",
      email:"",
      phone:""
    },
    {
      libraryName:"st monans library",
      address:"st monans cityname hall",
      cityName:"anstruther",
      email:"",
      phone:""
    },
    {
      libraryName:"pittenweem library",
      address:"ground floor old cityname hall",
      cityName:"anstruther",
      email:"",
      phone:""
    },
    {
      libraryName:"anstruther library",
      address:"easter cityname hall",
      cityName:"anstruther",
      email:"",
      phone:""
    },
    {
      libraryName:"crail library",
      address:"marketgate",
      cityName:"anstruther",
      email:"",
      phone:""
    },
    {
      libraryName:"aberdour library",
      address:"aberdour community centre",
      cityName:"burntisland",
      email:"",
      phone:""
    },
    {
      libraryName:"burntisland library",
      address:"102 high street",
      cityName:"burntisland",
      email:"",
      phone:""
    },
    {
      libraryName:"kinghorn library",
      address:"rossland place",
      cityName:"burntisland",
      email:"",
      phone:""
    },
    {
      libraryName:"cowdenbeath library",
      address:"41 high street",
      cityName:"cowdenbeath",
      email:"",
      phone:""
    },
    {
      libraryName:"cupar library",
      address:"33 crossgate",
      cityName:"cupar",
      email:"",
      phone:"01334 412285"
    },
    {
      libraryName:"newburgh library",
      address:"120 high street",
      cityName:"cupar",
      email:"",
      phone:""
    },
    {
      libraryName:"auchtermuchty library",
      address:"auchtermuchty cityname hall",
      cityName:"cupar",
      email:"",
      phone:""
    },
    {
      libraryName:"falkland library",
      address:"back wynd",
      cityName:"cupar",
      email:"",
      phone:""
    },
    {
      libraryName:"ladybank library",
      address:"23 commercial road",
      cityName:"cupar",
      email:"",
      phone:""
    },
    {
      libraryName:"dunfermline carnegie library",
      address:"abbot street",
      cityName:"dunfermline",
      email:"",
      phone:"01383 312600"
    },
    {
      libraryName:"rosyth library",
      address:"parkgate community centre",
      cityName:"dunfermline",
      email:"",
      phone:""
    },
    {
      libraryName:"abbeyview library",
      address:"38 abbey view",
      cityName:"dunfermline",
      email:"",
      phone:""
    },
    {
      libraryName:"duloch library",
      address:"nightingale place",
      cityName:"dunfermline",
      email:"",
      phone:""
    },
    {
      libraryName:"dalgety bay library",
      address:"regents way",
      cityName:"dunfermline",
      email:"",
      phone:""
    },
    {
      libraryName:"citynamehill library",
      address:"citynamehill community centre",
      cityName:"dunfermline",
      email:"",
      phone:""
    },
    {
      libraryName:"valleyfield library",
      address:"valleyfield health centre",
      cityName:"dunfermline",
      email:"",
      phone:""
    },
    {
      libraryName:"oakley library",
      address:"station road",
      cityName:"dunfermline",
      email:"",
      phone:""
    },
    {
      libraryName:"freuchie library",
      address:"lumsden memorial hall",
      cityName:"freuchie",
      email:"",
      phone:""
    },
    {
      libraryName:"glenwood library",
      address:"glenwood centre",
      cityName:"glenrothes",
      email:"",
      phone:""
    },
    {
      libraryName:"leslie library",
      address:"289 high street",
      cityName:"glenrothes",
      email:"",
      phone:""
    },
    {
      libraryName:"pitteuchar library",
      address:"glamis centre",
      cityName:"glenrothes",
      email:"",
      phone:""
    },
    {
      libraryName:"rothes halls library",
      address:"rothes square",
      cityName:"glenrothes",
      email:"",
      phone:""
    },
    {
      libraryName:"markinch library",
      address:"markinch primary school",
      cityName:"glenrothes",
      email:"",
      phone:""
    },
    {
      libraryName:"cadham library",
      address:"12 cadham neighbourhood centre",
      cityName:"glenrothes",
      email:"",
      phone:""
    },
    {
      libraryName:"inverkeithing library",
      address:"inverkeithing local office civic centre",
      cityName:"inverkeithing",
      email:"",
      phone:""
    },
    {
      libraryName:"kelty library",
      address:"cocklaw street",
      cityName:"kelty",
      email:"",
      phone:""
    },
    {
      libraryName:"kirkcaldy central library",
      address:"museum and art gallery",
      cityName:"kirkcaldy",
      email:"",
      phone:"01592 583206"
    },
    {
      libraryName:"sinclaircityname library",
      address:"loughborough road",
      cityName:"kirkcaldy",
      email:"",
      phone:""
    },
    {
      libraryName:"east wemyss library",
      address:"east wemyss primary",
      cityName:"kirkcaldy",
      email:"",
      phone:""
    },
    {
      libraryName:"templehall library",
      address:"beauly place",
      cityName:"kirkcaldy",
      email:"",
      phone:""
    },
    {
      libraryName:"methil library",
      address:"wellesley road",
      cityName:"leven",
      email:"",
      phone:"01333 592470"
    },
    {
      libraryName:"buckhaven library",
      address:"3 college street",
      cityName:"leven",
      email:"",
      phone:""
    },
    {
      libraryName:"kennoway library",
      address:"1-3 bishops court",
      cityName:"leven",
      email:"",
      phone:""
    },
    {
      libraryName:"lundin links library",
      address:"7 lundin square",
      cityName:"leven",
      email:"",
      phone:""
    },
    {
      libraryName:"elie library",
      address:"siward lane",
      cityName:"leven",
      email:"",
      phone:""
    },
    {
      libraryName:"colinsburgh library",
      address:"48-50 main street",
      cityName:"leven",
      email:"",
      phone:""
    },
    {
      libraryName:"bowhill library",
      address:"bowhill community centre",
      cityName:"lochgelly",
      email:"",
      phone:""
    },
    {
      libraryName:"lochore library",
      address:"rosewell clinic",
      cityName:"lochgelly",
      email:"",
      phone:""
    },
    {
      libraryName:"lochgelly library",
      address:"2-4 high street",
      cityName:"lochgelly",
      email:"",
      phone:""
    },
    {
      libraryName:"cardenden library",
      address:"carden avenue",
      cityName:"lochgelly",
      email:"",
      phone:""
    },
    {
      libraryName:"st andrews library",
      address:"church square",
      cityName:"st andrews",
      email:"",
      phone:""
    },
    {
      libraryName:"tayport library",
      address:"municipal buildings",
      cityName:"tayport",
      email:"",
      phone:""
    },
    {
      libraryName:"bagillt library",
      address:"pentre",
      cityName:"bagillt",
      email:"",
      phone:""
    },
    {
      libraryName:"broughton library",
      address:"broughton hall road",
      cityName:"buckley",
      email:"",
      phone:""
    },
    {
      libraryName:"connah's quay library",
      address:"wepre drive",
      cityName:"connah's quay",
      email:"",
      phone:""
    },
    {
      libraryName:"queensferry library",
      address:"queensferry campus",
      cityName:"deeside",
      email:"",
      phone:""
    },
    {
      libraryName:"mancot library",
      address:"mancot lane",
      cityName:"deeside",
      email:"",
      phone:""
    },
    {
      libraryName:"buckley library",
      address:"the precinct",
      cityName:"deeside",
      email:"",
      phone:""
    },
    {
      libraryName:"flint library",
      address:"church street",
      cityName:"flint",
      email:"",
      phone:""
    },
    {
      libraryName:"hawarden library",
      address:"old rectory",
      cityName:"hawarden",
      email:"",
      phone:""
    },
    {
      libraryName:"holywell library",
      address:"north road",
      cityName:"holywell",
      email:"",
      phone:""
    },
    {
      libraryName:"halkyn library",
      address:"the village hall",
      cityName:"holywell",
      email:"",
      phone:""
    },
    {
      libraryName:"hope library",
      address:"castell alun high school",
      cityName:"hope",
      email:"hope.library@salford.gov.uk",
      phone:"0161 921 2185"
    },
    {
      libraryName:"mold library",
      address:"earl road",
      cityName:"mold",
      email:"",
      phone:""
    },
    {
      libraryName:"gwernaffield library",
      address:"community centre",
      cityName:"mold",
      email:"",
      phone:""
    },
    {
      libraryName:"mynydd isa library",
      address:"community centre",
      cityName:"mold",
      email:"",
      phone:""
    },
    {
      libraryName:"saltney library",
      address:"salisbury avenue",
      cityName:"saltney",
      email:"",
      phone:""
    },
    {
      libraryName:"eastfield library",
      address:"8 ben lawers drive",
      cityName:"glasgow",
      email:"",
      phone:"01236 720032"
    },
    {
      libraryName:"mitchell library",
      address:"north street",
      cityName:"glasgow",
      email:"lil@csglasgow.org",
      phone:"0141 287 2999 or 2876"
    },
    {
      libraryName:"goma library",
      address:"royal exchange square",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"partick library",
      address:"305 dumbarton road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"hillhead library",
      address:"348 byres road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"anniesland library",
      address:"833 crow road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"knightswood library",
      address:"27 dunterlie avenue",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"whiteinch library",
      address:"14 victoria park drive south",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"drumchapel library",
      address:"65 hecla avenue",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"maryhill library",
      address:"1508 maryhill road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"springburn library",
      address:"kay street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"royston library",
      address:"67 royston road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"barmulloch library",
      address:"46 wallacewell quad",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"possilpark library",
      address:"127 allander street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"milton library",
      address:"204 liddesdale road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"woodside library",
      address:"343 st georges road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"dennistoun library",
      address:"2a craigpark",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"parkhead library",
      address:"64 tollcross road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"shettleston library",
      address:"154 wellshot road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"riddrie library",
      address:"1020 cumbernauld road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"stepps library",
      address:"10 bleinheim road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"library at the bridge",
      address:"1000 westerhouse road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"bridgeton library",
      address:"23 landressy street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"pollokshields library",
      address:"30 leslie street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"govanhill library",
      address:"170 langside road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"langside library",
      address:"2 sinclair drive",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"pollokshaws library",
      address:"50/60 shawbridge street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"couper institute library",
      address:"84 clarkston road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"castlemilk library",
      address:"100 castlemilk drive",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"gorbals library",
      address:"180 crown street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"ibrox library",
      address:"1 midlock street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"elder park library",
      address:"228a langlands road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"cardonald library",
      address:"1113 mosspark drive",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"pollok library",
      address:"27 cowglen road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"kilsyth library",
      address:"burngreen",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"cumbernauld library",
      address:"8 allander walk",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"condorrat library",
      address:"north road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"moodiesburn library",
      address:"glenmanor avenue",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"baillieston library",
      address:"141 main street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"chryston library",
      address:"chryston valley business park",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"viewpark library",
      address:"burnhead street",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"berkeley library",
      address:"school lane",
      cityName:"berkeley",
      email:"berkeley.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"bishops cleeve library",
      address:"tobyfield road",
      cityName:"bishops cleeve",
      email:"bishopscleeve.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"bourton-on-the-water library",
      address:"youth centre",
      cityName:"bourton-on-the-water",
      email:"",
      phone:""
    },
    {
      libraryName:"bream library",
      address:"high street",
      cityName:"bream",
      email:"bream.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"brockworth library",
      address:"moorfield road",
      cityName:"brockworth",
      email:"",
      phone:""
    },
    {
      libraryName:"charlton kings library",
      address:"church street",
      cityName:"charlton kings",
      email:"charltonkings.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"cheltenham library",
      address:"clarence street",
      cityName:"cheltenham",
      email:"",
      phone:""
    },
    {
      libraryName:"hesters way library",
      address:"goldsmith road",
      cityName:"cheltenham",
      email:"",
      phone:""
    },
    {
      libraryName:"chipping campden library",
      address:"high street",
      cityName:"chipping campden",
      email:"",
      phone:""
    },
    {
      libraryName:"churchdown library",
      address:"parton road",
      cityName:"churchdown",
      email:"",
      phone:""
    },
    {
      libraryName:"cinderford library",
      address:"belle vue road",
      cityName:"cinderford",
      email:"cinderford.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"cirencester library",
      address:"the waterloo",
      cityName:"cirencester",
      email:"",
      phone:""
    },
    {
      libraryName:"coleford library",
      address:"the main place",
      cityName:"coleford",
      email:"coleford.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"dursley library",
      address:"may lane",
      cityName:"dursley",
      email:"dursley.library@gloucestershire.gov.uk",
      phone:""
    },
    {
      libraryName:"fairford library",
      address:"london road",
      cityName:"fairford",
      email:"",
      phone:""
    },
    {
      libraryName:"gloucester library",
      address:"brunswick road",
      cityName:"gloucester",
      email:"gloucester.library@gloucestershire.gov.uk",
      phone:"01452 426923"
    },
    {
      libraryName:"hucclecote library",
      address:"hucclecote road",
      cityName:"gloucester",
      email:"hucclecote.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"matson library",
      address:"winsley road",
      cityName:"gloucester",
      email:"matson.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"library services for education",
      address:"quayside house",
      cityName:"gloucester",
      email:"",
      phone:""
    },
    {
      libraryName:"gloucester prison library",
      address:"barrack square",
      cityName:"gloucester",
      email:"",
      phone:""
    },
    {
      libraryName:"tuffley library",
      address:"windsor drive",
      cityName:"gloucester",
      email:"",
      phone:""
    },
    {
      libraryName:"lechlade library",
      address:"market place",
      cityName:"lechlade",
      email:"lechlade.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"longlevens library",
      address:"church road",
      cityName:"longlevens",
      email:"longlevens.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"lydney library",
      address:"hill street",
      cityName:"lydney",
      email:"lydney.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"mitcheldean library",
      address:"high street",
      cityName:"mitcheldean",
      email:"mitcheldean.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"moreton-in-marsh library",
      address:"stow road",
      cityName:"moreton in marsh",
      email:"",
      phone:""
    },
    {
      libraryName:"nailsworth library",
      address:"old market",
      cityName:"nailsworth",
      email:"nailsworth.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"newent library",
      address:"high street",
      cityName:"newent",
      email:"",
      phone:""
    },
    {
      libraryName:"newnham library",
      address:"high street",
      cityName:"newnham",
      email:"",
      phone:""
    },
    {
      libraryName:"prestbury library",
      address:"the burgage",
      cityName:"prestbury",
      email:"",
      phone:""
    },
    {
      libraryName:"quedgeley library",
      address:"bristol road",
      cityName:"quedgeley",
      email:"quedgeley.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"stonehouse library",
      address:"elms road",
      cityName:"stonehouse",
      email:"",
      phone:""
    },
    {
      libraryName:"stow-on-the-wold library",
      address:"st edwards hall",
      cityName:"stow-on-the-wold",
      email:"",
      phone:""
    },
    {
      libraryName:"minchinhampton library",
      address:"school road",
      cityName:"stroud",
      email:"minchinhampton.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"stroud library",
      address:"lansdown",
      cityName:"stroud",
      email:"",
      phone:""
    },
    {
      libraryName:"tetbury library",
      address:"close gardens",
      cityName:"tetbury",
      email:"",
      phone:""
    },
    {
      libraryName:"tewkesbury library",
      address:"sun street",
      cityName:"tewkesbury",
      email:"tewkesbury.library@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"up hatherley library",
      address:"hulbert crescent",
      cityName:"up hatherley",
      email:"uphatherleylibrary@gloucestershire.gov.uk",
      phone:"0845 2305420"
    },
    {
      libraryName:"winchcombe library",
      address:"back lane",
      cityName:"winchcombe",
      email:"",
      phone:""
    },
    {
      libraryName:"wotton-under-edge library",
      address:"ludgate hill",
      cityName:"wotton-under-edge",
      email:"",
      phone:""
    },
    {
      libraryName:"anerley library",
      address:"anerley cityname hall",
      cityName:"anerley",
      email:"anerley.library@bromley.gov.uk",
      phone:"020 8778 7457"
    },
    {
      libraryName:"thames view library",
      address:"sue bramley community centre",
      cityName:"barking",
      email:"thamesview.library@lbbd.gov.uk",
      phone:"020 82704164"
    },
    {
      libraryName:"chipping barnet library",
      address:"3 stapylton road",
      cityName:"barnet",
      email:"chipping.barnet.library@barnet.gov.uk",
      phone:"020 8359 4040"
    },
    {
      libraryName:"east barnet library",
      address:"85 brookhill road",
      cityName:"barnet",
      email:"",
      phone:""
    },
    {
      libraryName:"beckenham library",
      address:"beckenham road",
      cityName:"beckenham",
      email:"beckenham.library@bromley.gov.uk",
      phone:"020 8650 7292"
    },
    {
      libraryName:"summerhouse drive library",
      address:"summerhouse drive",
      cityName:"bexley",
      email:"summerhousedrivelibrary@kent.gov.uk",
      phone:"01322 527604"
    },
    {
      libraryName:"bexley village library",
      address:"bourne road",
      cityName:"bexley",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"bostall library",
      address:"king harolds way",
      cityName:"bexleyheath",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"brentford library",
      address:"boston manor road",
      cityName:"brentford",
      email:"hounslowlibraries@cip.org.uk",
      phone:"020 85608801"
    },
    {
      libraryName:"downham library",
      address:"7-9 moorside road",
      cityName:"bromley",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"burnt ash library",
      address:"burnt ash lane",
      cityName:"bromley",
      email:"burntash.library@bromley.gov.uk",
      phone:"020 8460 3405"
    },
    {
      libraryName:"shortlands library",
      address:"110 shortlands road",
      cityName:"bromley",
      email:"shortlands.library@bromley.gov.uk",
      phone:"020 8460 9692"
    },
    {
      libraryName:"bromley central library",
      address:"high street",
      cityName:"bromley",
      email:"central.library@bromley.gov.uk",
      phone:"020 8460 9955"
    },
    {
      libraryName:"southborough library",
      address:"southborough lane",
      cityName:"bromley",
      email:"southborough.library@bromley.gov.uk",
      phone:"020 8467 0355"
    },
    {
      libraryName:"north chingford library",
      address:"the green",
      cityName:"chingford",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1070"
    },
    {
      libraryName:"south chingford library",
      address:"hall lane",
      cityName:"chingford",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1079"
    },
    {
      libraryName:"chislehurst library",
      address:"red hill",
      cityName:"chislehurst",
      email:"chislehurst.library@bromley.gov.uk",
      phone:"020 8467 1318"
    },
    {
      libraryName:"crayford library",
      address:"crayford road",
      cityName:"crayford",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"new addington library",
      address:"central parade",
      cityName:"croydon",
      email:"newaddington@croydon.gov.uk",
      phone:"020 8726 6900"
    },
    {
      libraryName:"broad green library",
      address:"89 canterbury road",
      cityName:"croydon",
      email:"broadgreen@croydononline.org",
      phone:"020 8726 6900"
    },
    {
      libraryName:"shirley library",
      address:"wickham road",
      cityName:"croydon",
      email:"shirley@croydononline.org",
      phone:"020 8726 6900"
    },
    {
      libraryName:"sanderstead library",
      address:"farm fields",
      cityName:"croydon",
      email:"sanderstead@croydon.gov.uk",
      phone:"020 8726 6900"
    },
    {
      libraryName:"selsdon library",
      address:"addington road",
      cityName:"croydon",
      email:"selsdon@croydononline.org",
      phone:"020 8726 6900"
    },
    {
      libraryName:"bradmore green library",
      address:"bradmore way",
      cityName:"croydon",
      email:"bradmoregreen@croydononline.org",
      phone:"020 8726 6900"
    },
    {
      libraryName:"coulsdon library",
      address:"167 brighton road",
      cityName:"croydon",
      email:"coulsdon@croydononline.org",
      phone:"020 8726 6900"
    },
    {
      libraryName:"purley library",
      address:"banstead road",
      cityName:"croydon",
      email:"purley@croydononline.org",
      phone:"020 8726 6900"
    },
    {
      libraryName:"croydon central library",
      address:"croydon clocktower",
      cityName:"croydon",
      email:"libraries@croydon.gov.uk",
      phone:"020 8726 6900"
    },
    {
      libraryName:"ashburton library",
      address:"ashburton learning village",
      cityName:"croydon",
      email:"ashburton@croydon.gov.uk",
      phone:"020 8726 6900"
    },
    {
      libraryName:"south norwood library",
      address:"lawrence road/selhurst road",
      cityName:"croydon",
      email:"southnorwood@croydononline.org",
      phone:"020 8726 6900"
    },
    {
      libraryName:"norbury library",
      address:"beatrice avenue",
      cityName:"croydon",
      email:"norbury@croydononline.org",
      phone:"020 8726 6900"
    },
    {
      libraryName:"thornton heath library",
      address:"190 brigstock road",
      cityName:"croydon",
      email:"thorntonheath@croydon.gov.uk",
      phone:"0208726 6900"
    },
    {
      libraryName:"markyate library",
      address:"markyate road",
      cityName:"dagenham",
      email:"markyate.library@lbbd.gov.uk",
      phone:"020 82704137"
    },
    {
      libraryName:"castle green library",
      address:"castle green",
      cityName:"dagenham",
      email:"castlegreen.library@lbbd.gov.uk",
      phone:"020 82704166"
    },
    {
      libraryName:"wantz library",
      address:"rainham road north",
      cityName:"dagenham",
      email:"wantz.library@lbbd.gov.uk",
      phone:"020 82704169"
    },
    {
      libraryName:"valence library",
      address:"becontree avenue",
      cityName:"dagenham",
      email:"valence.library@lbbd.gov.uk",
      phone:"020 82706864"
    },
    {
      libraryName:"barking and dagenham, local studies centre library",
      address:"becontree ave\\\\nvalence house museum",
      cityName:"dagenham",
      email:"localstudies@bardaglea.org.uk",
      phone:"020 82706897"
    },
    {
      libraryName:"dagenham library",
      address:"1 church elm lane",
      cityName:"dagenham",
      email:"",
      phone:""
    },
    {
      libraryName:"eastcote library",
      address:"88 field end road",
      cityName:"eastcote",
      email:"eabranch@hillingdongrid.org",
      phone:"0208866 3668"
    },
    {
      libraryName:"edgware library",
      address:"hale lane",
      cityName:"edgware",
      email:"edgware.library@barnet.gov.uk",
      phone:"0208359 2626"
    },
    {
      libraryName:"bob lawrence library",
      address:"6-8 north parade",
      cityName:"edgware",
      email:"boblawrence.library@harrow.gov.uk",
      phone:"0208952 4140"
    },
    {
      libraryName:"burnt oak library",
      address:"watling avenue",
      cityName:"edgware",
      email:"burnt.oak.library@barnet.gov.uk",
      phone:"0208959 3112"
    },
    {
      libraryName:"john jackson library",
      address:"bush hill park",
      cityName:"enfield",
      email:"bush.hill.library@enfield.gov.uk",
      phone:"0208379 1709"
    },
    {
      libraryName:"enfield highway library",
      address:"258 hertford road",
      cityName:"enfield",
      email:"enfield.highway.library@enfield.gov.uk",
      phone:"0208379 1710"
    },
    {
      libraryName:"ponders end library",
      address:"college court",
      cityName:"enfield",
      email:"ponders.end.library@enfield.gov.uk",
      phone:"0208379 1712"
    },
    {
      libraryName:"bullsmoor library",
      address:"kempe road",
      cityName:"enfield",
      email:"bullsmoore.library@enfield.gov.uk",
      phone:"0208379 1723"
    },
    {
      libraryName:"ordnance road library",
      address:"645 hertford road",
      cityName:"enfield",
      email:"ordnance.road.library@enfield.gov.uk",
      phone:"0208379 17256"
    },
    {
      libraryName:"enfield local history library",
      address:"thomas hardy house (1st floor)",
      cityName:"enfield",
      email:"local.history@enfield.gov.uk",
      phone:"0208379 2724"
    },
    {
      libraryName:"enfield cityname library",
      address:"66 church street",
      cityName:"enfield",
      email:"",
      phone:""
    },
    {
      libraryName:"enfield island village library",
      address:"unit 44-46 island centre way",
      cityName:"enfield",
      email:"",
      phone:""
    },
    {
      libraryName:"erith library",
      address:"100 erith high street",
      cityName:"erith",
      email:"",
      phone:"01322 336582"
    },
    {
      libraryName:"north heath library",
      address:"mill road",
      cityName:"erith",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"slade green library",
      address:"howbury centre",
      cityName:"erith",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"feltham library",
      address:"the centre",
      cityName:"feltham",
      email:"hounslowlibraries@cip.org.uk",
      phone:"020 88903506"
    },
    {
      libraryName:"bedfont library",
      address:"staines road",
      cityName:"feltham",
      email:"hounslowlibraries@cip.org.uk",
      phone:"020 88906173"
    },
    {
      libraryName:"wood end library",
      address:"whitton avenue west",
      cityName:"greenford",
      email:"woodlib@ealing.gov.uk",
      phone:"0208422 3965"
    },
    {
      libraryName:"greenford library",
      address:"oldfield lane south",
      cityName:"greenford",
      email:"greelib@ealing.gov.uk",
      phone:"0208578 1466"
    },
    {
      libraryName:"perivale library",
      address:"horsenden lane south",
      cityName:"greenford",
      email:"perilib@ealing.gov.uk",
      phone:"0208997 2830"
    },
    {
      libraryName:"ham library",
      address:"ham street",
      cityName:"ham",
      email:"ham.library@richmond.gov.uk",
      phone:"020 89408703"
    },
    {
      libraryName:"hampton library",
      address:"rosehill",
      cityName:"hampton",
      email:"hampton.library@richmond.gov.uk",
      phone:"0208979 5110"
    },
    {
      libraryName:"hampton hill library",
      address:"68 high street",
      cityName:"hampton",
      email:"",
      phone:""
    },
    {
      libraryName:"hampton wick library",
      address:"bennet close",
      cityName:"hampton wick",
      email:"hamptonwick.library@richmond.gov.uk",
      phone:"0208977 1559"
    },
    {
      libraryName:"hanworth air park leisure centre and library",
      address:"uxbridge road",
      cityName:"hanworth",
      email:"hounslowlibraries@cip.org.uk",
      phone:"0208898 0256"
    },
    {
      libraryName:"harefield library",
      address:"park lane",
      cityName:"harefield",
      email:"hdbranch@hillingdongrid.org",
      phone:"01895 822171"
    },
    {
      libraryName:"gayton library",
      address:"garden house",
      cityName:"harrow",
      email:"gayton.library@harrow.gov.uk",
      phone:"020 8427 6012 or 020 8427 8986"
    },
    {
      libraryName:"civic centre library",
      address:"po box 4",
      cityName:"harrow",
      email:"civiccentre.library@harrow.gov.uk",
      phone:"0208424 1055"
    },
    {
      libraryName:"hayes library",
      address:"hayes street",
      cityName:"hayes",
      email:"hayes.library@bromley.gov.uk",
      phone:"020 8462 2445"
    },
    {
      libraryName:"harlington library",
      address:"pinkwell lane",
      cityName:"hayes",
      email:"hlbranch@hillingdongrid.org",
      phone:"0208569 1612"
    },
    {
      libraryName:"yeading library",
      address:"yeading lane",
      cityName:"hayes",
      email:"yebranch@hillingdongrid.org",
      phone:"0208573 0261"
    },
    {
      libraryName:"hayes end library",
      address:"1346 uxbridge road",
      cityName:"hayes",
      email:"hebranch@hillingdongrid.org",
      phone:"0208573 4209"
    },
    {
      libraryName:"charville library",
      address:"bury avenue",
      cityName:"hayes",
      email:"khbranch@hillingdongrid.org",
      phone:"0208845 3773"
    },
    {
      libraryName:"botwell green library",
      address:"botwell green sports and leisure centre",
      cityName:"hayes",
      email:"",
      phone:""
    },
    {
      libraryName:"oak farm library",
      address:"sutton court road",
      cityName:"hillingdon",
      email:"ofbranch@hillingdongrid.org",
      phone:"01895 234690"
    },
    {
      libraryName:"isleworth library",
      address:"twickenham road",
      cityName:"hounslow",
      email:"hounslowlibraries@cip.org.uk",
      phone:"020 85602934"
    },
    {
      libraryName:"heston library",
      address:"new heston road",
      cityName:"hounslow",
      email:"hounslowlibraries@cip.org.uk",
      phone:"020 85701028"
    },
    {
      libraryName:"beavers library @ the hub",
      address:"salisbury road",
      cityName:"hounslow",
      email:"hounslowlibraries@cip.org.uk",
      phone:"0208572 6995"
    },
    {
      libraryName:"cranford library",
      address:"bath road",
      cityName:"hounslow",
      email:"hounslowlibraries@cip.org.uk",
      phone:"0208759 0641"
    },
    {
      libraryName:"hounslow library",
      address:"centrespace",
      cityName:"hounslow",
      email:"hounslowlibraries@cip.org.uk",
      phone:"0845 456 2800"
    },
    {
      libraryName:"ickenham library",
      address:"long lane",
      cityName:"ickenham",
      email:"icbranch@hillingdongrid.org",
      phone:"01895 635945"
    },
    {
      libraryName:"goodmayes library",
      address:"76 goodmayes lane",
      cityName:"ilford",
      email:"goodmayes.library@redbridge.gov.uk",
      phone:"0208708 7750"
    },
    {
      libraryName:"gants hill library",
      address:"490 cranbrook road",
      cityName:"ilford",
      email:"gantshill.library@redbidge.gov.uk",
      phone:"0208708 9274"
    },
    {
      libraryName:"fullwell cross library",
      address:"140 high street",
      cityName:"ilford",
      email:"fullwellcross.library@redbridge.gov.uk",
      phone:"0208708 9281"
    },
    {
      libraryName:"ilford central library",
      address:"clements road",
      cityName:"ilford",
      email:"",
      phone:""
    },
    {
      libraryName:"uphall library",
      address:"uphall primary school",
      cityName:"ilford",
      email:"",
      phone:""
    },
    {
      libraryName:"seven kings library",
      address:"679 high road",
      cityName:"ilford",
      email:"",
      phone:""
    },
    {
      libraryName:"clayhall library",
      address:"1 claybury broadway",
      cityName:"ilford",
      email:"",
      phone:""
    },
    {
      libraryName:"osterley library",
      address:"st. marys crescent",
      cityName:"isleworth",
      email:"houslowlibraries@cip.org.uk",
      phone:"020 85604295"
    },
    {
      libraryName:"n4 library",
      address:"26 blackstock road",
      cityName:"islington",
      email:"n4.library@islington.gov.uk",
      phone:"020 7527 7800"
    },
    {
      libraryName:"archway library",
      address:"hamlyn house",
      cityName:"islington",
      email:"archway.library@islington.gov.uk",
      phone:"020 7527 7820"
    },
    {
      libraryName:"north library",
      address:"manor gardens",
      cityName:"islington",
      email:"north.library@islington.gov.uk",
      phone:"020 7527 7840"
    },
    {
      libraryName:"south library",
      address:"115-117 essex road",
      cityName:"islington",
      email:"south.library@islington.gov.uk",
      phone:"020 7527 7860"
    },
    {
      libraryName:"mildmay library",
      address:"21-23 mildmay park",
      cityName:"islington",
      email:"mildmay.library@islington.gov.uk",
      phone:"020 7527 7880"
    },
    {
      libraryName:"john barnes library",
      address:"275 camden road",
      cityName:"islington",
      email:"johnbarnes.library@islington.gov.uk",
      phone:"020 7527 7900"
    },
    {
      libraryName:"west library",
      address:"bridgeman road",
      cityName:"islington",
      email:"west.library@islington.gov.uk",
      phone:"020 7527 7920"
    },
    {
      libraryName:"finsbury library",
      address:"245 st john street",
      cityName:"islington",
      email:"finsbury.library@islington.gov.uk",
      phone:"020 7527 7960"
    },
    {
      libraryName:"kew library",
      address:"106 north road",
      cityName:"kew",
      email:"kew.library@richmond.gov.uk",
      phone:"0208876 8654"
    },
    {
      libraryName:"south lambeth library",
      address:"180 south lambeth road",
      cityName:"lambeth",
      email:"southlambethlibrary@lambeth.gov.uk",
      phone:"020 7926 0705"
    },
    {
      libraryName:"clapham library",
      address:"1 northside",
      cityName:"lambeth",
      email:"claphamlibrary@lambeth.gov.uk",
      phone:"020 7926 0717"
    },
    {
      libraryName:"brixton library",
      address:"brixton oval",
      cityName:"lambeth",
      email:"infoservice@lambeth.gov.uk",
      phone:"020 7926 1056"
    },
    {
      libraryName:"carnegie library",
      address:"188 herne hill road",
      cityName:"lambeth",
      email:"carnegielibrary@lambeth.gov.uk",
      phone:"020 7926 6050"
    },
    {
      libraryName:"minet library",
      address:"52 knatchbull road",
      cityName:"lambeth",
      email:"minetlibrary@lambeth.gov.uk",
      phone:"020 7926 6073"
    },
    {
      libraryName:"streatham library",
      address:"63 streatham high road",
      cityName:"lambeth",
      email:"streathamlibrary@lambeth.gov.uk",
      phone:"020 7926 6768"
    },
    {
      libraryName:"streatham library",
      address:"63 streatham high road",
      cityName:"lambeth",
      email:"streathamlibrary@lambeth.gov.uk",
      phone:"020 7926 6768"
    },
    {
      libraryName:"west norwood library",
      address:"norwood high street",
      cityName:"lambeth",
      email:"westnorwoodlibrary@lambeth.gov.uk",
      phone:"020 7926 8092"
    },
    {
      libraryName:"durning library",
      address:"167 kennington lane",
      cityName:"lambeth",
      email:"durninglibrary@lambeth.gov.uk",
      phone:"020 7926 8682"
    },
    {
      libraryName:"mayfair library",
      address:"25 south audley street",
      cityName:"london",
      email:"mayfairlibrary@westminster.gov.uk",
      phone:"(020) 7641 1300"
    },
    {
      libraryName:"brompton library",
      address:"210 old brompton road",
      cityName:"london",
      email:"information.services@rbkc.gov.uk",
      phone:"020 7361 3010"
    },
    {
      libraryName:"idea store canary wharf",
      address:"churchill place",
      cityName:"london",
      email:"ideastore@towerhamlets.gov.uk",
      phone:"020 7364 1262"
    },
    {
      libraryName:"canada water library",
      address:"21 surrey quays road",
      cityName:"london",
      email:"southwark.libraries@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"westminster music library",
      address:"victoria library, 160 buckingham palace road",
      cityName:"london",
      email:"",
      phone:"020 7641 1300"
    },
    {
      libraryName:"waterloo library",
      address:"114-118 lower marsh",
      cityName:"london",
      email:"waterloolibrary@lambeth.gov.uk",
      phone:"020 7926 8750"
    },
    {
      libraryName:"highgate library",
      address:"chester road",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"camden cityname library",
      address:"218 eversholt street",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"regents park library",
      address:"compton close",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"chalk farm library",
      address:"sharpleshall street",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"heath library",
      address:"keats grove",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"swiss cottage library",
      address:"88 avenue rd",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"belsize library",
      address:"antrim road",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"kentish cityname library",
      address:"262-266 kentish cityname road",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"queens crescent library",
      address:"165 queens crescent",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"west hampstead library",
      address:"dennington park road",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"kilburn library",
      address:"12-22  kilburn high road",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"st pancras library",
      address:"camden cityname hall extension",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"holborn library",
      address:"32-38 theobalds road",
      cityName:"london",
      email:"",
      phone:"020 7974 4001"
    },
    {
      libraryName:"grahame park library",
      address:"the concourse",
      cityName:"london",
      email:"grahame.park.library@barnet.gov.uk",
      phone:"020 8200 0470"
    },
    {
      libraryName:"st paul's cray library",
      address:"st pauls cray",
      cityName:"london",
      email:"stpaulscray.library@bromley.gov.uk",
      phone:"020 8300 5454"
    },
    {
      libraryName:"abbey wood library",
      address:"eynsham drive",
      cityName:"london",
      email:"abbeywood.library@greenwich.gov.uk",
      phone:"020 83104185"
    },
    {
      libraryName:"claude ramsey library",
      address:"thamesmere leisure centre",
      cityName:"london",
      email:"clauderamsey.library@greenwich.gov.uk",
      phone:"020 83104246"
    },
    {
      libraryName:"grove park community library",
      address:"somertrees avenue",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"manor house library",
      address:"34 old road",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"forest hill library",
      address:"82 dartmouth road",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"sydenham community library",
      address:"210 sydenham road",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"torridon road library",
      address:"103 torridon road",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"the library at deptford lounge",
      address:"9 giffin street",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"crofton park community library",
      address:"375 brockley road,",
      cityName:"london",
      email:"",
      phone:"020 8314 6399"
    },
    {
      libraryName:"new cross community library",
      address:"new cross road",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"blackheath village community library",
      address:"the reminiscence centre, 11 blackheath village",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8318 9105"
    },
    {
      libraryName:"southgate circus library",
      address:"high street",
      cityName:"london",
      email:"southgate.circus.library@enfield.gov.uk",
      phone:"020 83501124"
    },
    {
      libraryName:"stamford hill library",
      address:"portland avenue",
      cityName:"london",
      email:"info@hackney.gov.uk",
      phone:"020 8356 1700"
    },
    {
      libraryName:"west ealing library",
      address:"melbourne avenue",
      cityName:"london",
      email:"westlib@ealing.gov.uk",
      phone:"020 8567 2812"
    },
    {
      libraryName:"shepherds bush library",
      address:"6 wood lane",
      cityName:"london",
      email:"",
      phone:"020 8753 3842"
    },
    {
      libraryName:"sands end library",
      address:"the community centre",
      cityName:"london",
      email:"",
      phone:"020 8753 3885"
    },
    {
      libraryName:"eltham library",
      address:"archery road",
      cityName:"london",
      email:"eltham.library@greenwich.gov.uk",
      phone:"020 8850 2268"
    },
    {
      libraryName:"southfields library",
      address:"300 wimbledon park road",
      cityName:"london",
      email:"southfieldslibrary@wandsworth.gov.uk",
      phone:"020 8871 6388"
    },
    {
      libraryName:"earlsfield library",
      address:"magdalen road",
      cityName:"london",
      email:"earlsfieldlibrary@wandsworth.gov.uk",
      phone:"020 8871 6389"
    },
    {
      libraryName:"putney library",
      address:"5-7 disraeli road",
      cityName:"london",
      email:"putneylibrary@wandsworth.gov.uk",
      phone:"020 8871 7090"
    },
    {
      libraryName:"roehampton library",
      address:"2 danebury avenue",
      cityName:"london",
      email:"roehamptonlibrary@wandsworth.gov.uk",
      phone:"020 8871 7091"
    },
    {
      libraryName:"tooting library",
      address:"75 mitcham road",
      cityName:"london",
      email:"tootinglibrary@wandsworth.gov.uk",
      phone:"020 8871 7175"
    },
    {
      libraryName:"balham library",
      address:"16 ramdsen road",
      cityName:"london",
      email:"balhamlibrary@wandsworth.gov.uk",
      phone:"020 8871 7195"
    },
    {
      libraryName:"battersea library",
      address:"265 lavender hill",
      cityName:"london",
      email:"battersealibrary@wandsworth.gov.uk",
      phone:"020 8871 7466"
    },
    {
      libraryName:"battersea park library",
      address:"309 battersea park road",
      cityName:"london",
      email:"batterseaparklibrary@wandsworth.gov.uk",
      phone:"020 8871 7468"
    },
    {
      libraryName:"northcote library",
      address:"155e northcote  road",
      cityName:"london",
      email:"northcotelibrary@wandsworth.gov.uk",
      phone:"020 8871 7469"
    },
    {
      libraryName:"york gardens library",
      address:"34 lavender road",
      cityName:"london",
      email:"yorkgardenslibrary@wandsworth.gov.uk",
      phone:"020 8871 7471"
    },
    {
      libraryName:"bethnal green library",
      address:"cambridge heath rd",
      cityName:"london",
      email:"ideastore@towerhamlets.gov.uk",
      phone:"020 8980 3902"
    },
    {
      libraryName:"charing cross library",
      address:"2 charing cross road",
      cityName:"london",
      email:"charingcrosslibrary@westminster.gov.uk",
      phone:"0207 641 1300"
    },
    {
      libraryName:"notting hill gate library",
      address:"1 pembridge square",
      cityName:"london",
      email:"information.services@rbkc.gov.uk",
      phone:"0207229 8574"
    },
    {
      libraryName:"hackney archives rose lipman library",
      address:"43 de beauvoir road",
      cityName:"london",
      email:"archives@hackney.gov.uk",
      phone:"0207241 2886"
    },
    {
      libraryName:"kensington central library",
      address:"phillimore walk",
      cityName:"london",
      email:"information.services@rbkc.gov.uk",
      phone:"0207361 3010"
    },
    {
      libraryName:"idea store whitechapel",
      address:"321 whitechapel road",
      cityName:"london",
      email:"",
      phone:"0207364 4332"
    },
    {
      libraryName:"islington education library service,",
      address:"bellside house",
      cityName:"london",
      email:"els@islington.gov.uk",
      phone:"0207527 5827"
    },
    {
      libraryName:"lewis carroll children's library",
      address:"166 copenhagen street",
      cityName:"london",
      email:"lewiscarroll.library@islington.gov.uk",
      phone:"0207527 7936"
    },
    {
      libraryName:"north kensington library",
      address:"108 ladbroke grove",
      cityName:"london",
      email:"information.services@rbkc.gov.uk",
      phone:"0207727 6583"
    },
    {
      libraryName:"thamesmead library",
      address:"binsey walk",
      cityName:"london",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"catford library",
      address:"laurence house",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"0208314 6399"
    },
    {
      libraryName:"church end library",
      address:"24 hendon lane",
      cityName:"london",
      email:"church.end.library@barnet.gov.uk",
      phone:"0208346 5711"
    },
    {
      libraryName:"clapton library",
      address:"northwold road",
      cityName:"london",
      email:"info@hackney.gov.uk",
      phone:"0208356 1620"
    },
    {
      libraryName:"clr james library",
      address:"24-30 dalston lane",
      cityName:"london",
      email:"info@hackney.gov.uk",
      phone:"0208356 1665"
    },
    {
      libraryName:"homerton library",
      address:"homerton high street",
      cityName:"london",
      email:"info@hackney.gov.uk",
      phone:"0208356 1690"
    },
    {
      libraryName:"woodberry down library",
      address:"robin redmond centre",
      cityName:"london",
      email:"info@hackney.gov.uk",
      phone:"0208356 1791"
    },
    {
      libraryName:"hackney central library",
      address:"technology and learning centre",
      cityName:"london",
      email:"info@hackney.gov.uk",
      phone:"0208356 2542"
    },
    {
      libraryName:"shoreditch library",
      address:"80 hoxton street",
      cityName:"london",
      email:"info@hackney.gov.uk",
      phone:"0208356 4350"
    },
    {
      libraryName:"stoke newington library",
      address:"stoke newington church street",
      cityName:"london",
      email:"info@hackney.gov.uk",
      phone:"0208356 5231"
    },
    {
      libraryName:"golders green library",
      address:"156 golders green road",
      cityName:"london",
      email:"golders.green.library@barnet.gov.uk",
      phone:"0208359 2060"
    },
    {
      libraryName:"hendon library",
      address:"the burroughs",
      cityName:"london",
      email:"hendon.library@barnet.gov.uk",
      phone:"0208359 2628"
    },
    {
      libraryName:"friern barnet library",
      address:"friern barnet road",
      cityName:"london",
      email:"friern.barnet.library@barnet.gov.uk",
      phone:"0208359 3895"
    },
    {
      libraryName:"osidge library",
      address:"brunswick park road",
      cityName:"london",
      email:"osidge.library@barnet.gov.uk",
      phone:"0208368 0532"
    },
    {
      libraryName:"angel raynham library",
      address:"raynham primary school",
      cityName:"london",
      email:"angel.raynham.centre@raynham.enfield.sch.uk",
      phone:"0208379 1315"
    },
    {
      libraryName:"bowes road library",
      address:"bowes road",
      cityName:"london",
      email:"",
      phone:"0208379 1707"
    },
    {
      libraryName:"ridge avenue library",
      address:"ridge avenue",
      cityName:"london",
      email:"ridge.avenue.library@enfield.gov.uk",
      phone:"0208379 1714"
    },
    {
      libraryName:"edmonton green library",
      address:"36-44 south mall",
      cityName:"london",
      email:"edmonton.green.library@enfield.gov.uk",
      phone:"0208379 26002609"
    },
    {
      libraryName:"palmers green library",
      address:"broomfield lane",
      cityName:"london",
      email:"palmers.green.library@enfield.gov.uk",
      phone:"0208379 2711"
    },
    {
      libraryName:"north finchley library",
      address:"ravensdale avenue",
      cityName:"london",
      email:"north.finchley.library@barnet.gov.uk",
      phone:"0208445 4081"
    },
    {
      libraryName:"hampstead garden suburb library",
      address:"15 market place",
      cityName:"london",
      email:"hampstead.garden.library@barnet.gov.uk",
      phone:"0208455 1235"
    },
    {
      libraryName:"childs hill library",
      address:"320 cricklewood lane",
      cityName:"london",
      email:"childshill.library@barnet.gov.uk",
      phone:"0208455 5390"
    },
    {
      libraryName:"hornsey library",
      address:"haringey park",
      cityName:"london",
      email:"",
      phone:"0208489 1118"
    },
    {
      libraryName:"wood green central library",
      address:"high road",
      cityName:"london",
      email:"",
      phone:"0208489 2780"
    },
    {
      libraryName:"marcus garvey library",
      address:"tottenham green centre",
      cityName:"london",
      email:"",
      phone:"0208489 5309"
    },
    {
      libraryName:"alexandra park library",
      address:"alexandra park road",
      cityName:"london",
      email:"",
      phone:"0208489 8770"
    },
    {
      libraryName:"coombes croft library",
      address:"tottenham high road",
      cityName:"london",
      email:"",
      phone:"0208489 8771"
    },
    {
      libraryName:"highgate library",
      address:"shepherds hill",
      cityName:"london",
      email:"",
      phone:"0208489 8772"
    },
    {
      libraryName:"muswell hill library",
      address:"queens avenue",
      cityName:"london",
      email:"",
      phone:"0208489 8773"
    },
    {
      libraryName:"st  anns library",
      address:"cissbury road",
      cityName:"london",
      email:"",
      phone:"0208489 8775"
    },
    {
      libraryName:"stroud green library",
      address:"quernmore road",
      cityName:"london",
      email:"",
      phone:"0208489 8776"
    },
    {
      libraryName:"aldersbrook library",
      address:"2a park road",
      cityName:"london",
      email:"aldersbrook.library@redbridge.gov.uk",
      phone:"0208496 0006"
    },
    {
      libraryName:"hale end library",
      address:"castle avenue",
      cityName:"london",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1050"
    },
    {
      libraryName:"harrow green library and flexible learning centre",
      address:"cathall road",
      cityName:"london",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1063"
    },
    {
      libraryName:"leyton library",
      address:"high road",
      cityName:"london",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1090"
    },
    {
      libraryName:"walthamstow central library",
      address:"high street",
      cityName:"london",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1100"
    },
    {
      libraryName:"lea bridge library",
      address:"lea bridge road",
      cityName:"london",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1152"
    },
    {
      libraryName:"wood street library",
      address:"forest road",
      cityName:"london",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1156"
    },
    {
      libraryName:"higham hill library",
      address:"north countess road",
      cityName:"london",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1173"
    },
    {
      libraryName:"leytonstone library",
      address:"6 church lane",
      cityName:"london",
      email:"wf.libs@lbwf.gov.uk",
      phone:"0208496 1190"
    },
    {
      libraryName:"hanwell library",
      address:"cherington road",
      cityName:"london",
      email:"hanwlib@ealing.gov.uk",
      phone:"0208567 5041"
    },
    {
      libraryName:"northfields library",
      address:"northfield avenue",
      cityName:"london",
      email:"norflib@ealing.gov.uk",
      phone:"0208567 5700"
    },
    {
      libraryName:"crofton park library",
      address:"375 brockley road",
      cityName:"london",
      email:"croftonparklibrary@lewisham.gov.uk",
      phone:"0208692 1683"
    },
    {
      libraryName:"wanstead library",
      address:"spratt hall road",
      cityName:"london",
      email:"wanstead.library@redbridge.gov.uk",
      phone:"0208708 7400"
    },
    {
      libraryName:"south woodford library",
      address:"116 high road",
      cityName:"london",
      email:"southwoodford.library@xch.redbridge.gov.uk",
      phone:"0208708 9067"
    },
    {
      libraryName:"barking central library",
      address:"barking learning centre",
      cityName:"london",
      email:"barking.library@lbbd.gov.uk",
      phone:"0208724 8725"
    },
    {
      libraryName:"castelnau library",
      address:"75 castelnau",
      cityName:"london",
      email:"castelnau.library@richmond.gov.uk",
      phone:"0208748 3837"
    },
    {
      libraryName:"hammersmith library",
      address:"shepherds bush road",
      cityName:"london",
      email:"",
      phone:"0208753 3823"
    },
    {
      libraryName:"askew road library",
      address:"87/91 askew road",
      cityName:"london",
      email:"",
      phone:"0208753 3863"
    },
    {
      libraryName:"fulham reference library",
      address:"598 fulham road",
      cityName:"london",
      email:"libraries@lbhf.gov.uk",
      phone:"0208753 3876"
    },
    {
      libraryName:"barons court library",
      address:"north end crescent",
      cityName:"london",
      email:"",
      phone:"0208753 3888"
    },
    {
      libraryName:"wandsworth cityname library",
      address:"11 garratt lane",
      cityName:"london",
      email:"wandsworthcitynamelibrary@wandsworth.gov.uk",
      phone:"02088 715588"
    },
    {
      libraryName:"plumstead library",
      address:"plumstead high street",
      cityName:"london",
      email:"plumstead.library@greenwich.gov.uk",
      phone:"0208854 1728"
    },
    {
      libraryName:"slade library",
      address:"erindale",
      cityName:"london",
      email:"slade.library@greenwich.gov.uk",
      phone:"0208854 7900"
    },
    {
      libraryName:"ferrier library",
      address:"telemann square",
      cityName:"london",
      email:"ferrier.library@greenwich.gov.uk",
      phone:"0208856 5149"
    },
    {
      libraryName:"blackheath library",
      address:"old dover road",
      cityName:"london",
      email:"blackheath.library@greenwich.gov.uk",
      phone:"0208858 1131"
    },
    {
      libraryName:"west greenwich library",
      address:"greenwich high road",
      cityName:"london",
      email:"westgreenwich.library@greenwich.gov.uk",
      phone:"0208858 4289"
    },
    {
      libraryName:"east greenwich library",
      address:"203-207 woolwich road",
      cityName:"london",
      email:"eastgreenwich.library@greenwich.gov.uk",
      phone:"0208858 6656"
    },
    {
      libraryName:"east sheen library",
      address:"sheen lane centre",
      cityName:"london",
      email:"eastsheen.library@richmond.gov.uk",
      phone:"0208876 8801"
    },
    {
      libraryName:"east finchley library",
      address:"226 high road",
      cityName:"london",
      email:"east.finchley.library@barnet.gov.uk",
      phone:"0208883 2664"
    },
    {
      libraryName:"south friern library",
      address:"colney hatch lane",
      cityName:"london",
      email:"south.friern.library@barnet.gov.uk",
      phone:"0208883 6513"
    },
    {
      libraryName:"woolwich library",
      address:"calderwood street",
      cityName:"london",
      email:"woolwich.library@greenwich.gov.uk",
      phone:"0208921 5750"
    },
    {
      libraryName:"willesden green library",
      address:"95 high road",
      cityName:"london",
      email:"",
      phone:"0208937 3400"
    },
    {
      libraryName:"kingsbury library",
      address:"522 - 524 kingsbury road",
      cityName:"london",
      email:"kingsbury library",
      phone:"0208937 3520"
    },
    {
      libraryName:"harlesden learning zone - harlesden library",
      address:"craven park road",
      cityName:"london",
      email:"",
      phone:"0208937 3570"
    },
    {
      libraryName:"mill hill library",
      address:"hartley avenue",
      cityName:"london",
      email:"mill.hill.library@barnet.gov.uk",
      phone:"0208959 5066"
    },
    {
      libraryName:"kensal library",
      address:"20 golborne road",
      cityName:"london",
      email:"information.services@rbkc.gov.uk",
      phone:"0208969 7736"
    },
    {
      libraryName:"chiswick library",
      address:"dukes avenue",
      cityName:"london",
      email:"hounslowlibraries@cip.org.uk",
      phone:"0208994 1008"
    },
    {
      libraryName:"pitshanger library",
      address:"143/145 pitshanger lane",
      cityName:"london",
      email:"pitslib@ealing.gov.uk",
      phone:"0208997 0230"
    },
    {
      libraryName:"church street library",
      address:"church street",
      cityName:"london",
      email:"churchstreetlibrary@westminster.gov.uk",
      phone:"208 641 1300"
    },
    {
      libraryName:"maida vale library",
      address:"sutherland avenue",
      cityName:"london",
      email:"maidavalelibrary@westminster.gov.uk",
      phone:"209 641 1300"
    },
    {
      libraryName:"paddington library",
      address:"porchester road",
      cityName:"london",
      email:"paddingtonlibrary@westminster.gov.uk",
      phone:"211 641 1300"
    },
    {
      libraryName:"pimlico library",
      address:"lupus street",
      cityName:"london",
      email:"pimlicolibrary@westminster.gov.uk",
      phone:"212 641 1300"
    },
    {
      libraryName:"queens park library",
      address:"666 harrow road",
      cityName:"london",
      email:"queensparklibrary@westminster.gov.uk",
      phone:"213 641 1300"
    },
    {
      libraryName:"st james's library",
      address:"62 victoria street",
      cityName:"london",
      email:"",
      phone:"214 641 1300"
    },
    {
      libraryName:"st john's wood library",
      address:"20 circus road",
      cityName:"london",
      email:"stjohnswoodlibrary@westminster.gov.uk",
      phone:"215 641 1300"
    },
    {
      libraryName:"victoria library",
      address:"160 buckingham palace road",
      cityName:"london",
      email:"victorialibrary@westminster.gov.uk",
      phone:"216 641 1300"
    },
    {
      libraryName:"westminster reference library",
      address:"35 st martin's street",
      cityName:"london",
      email:"referencelibrarywc2@westminster.gov.uk",
      phone:"217 641 1300"
    },
    {
      libraryName:"marylebone library and information service",
      address:"109-117 marylebone road (entrance in gloucester place)",
      cityName:"london",
      email:"referencelibrarynw1@westminster.gov.uk",
      phone:"218 641 1300"
    },
    {
      libraryName:"fore street library",
      address:"109-111 fore street",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"winchmore hill library",
      address:"green lanes",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"kilburn library",
      address:"42 salisbury road",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"charlton library",
      address:"charlton house",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"new eltham library",
      address:"southwood road",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"chelsea library",
      address:"chelsea old cityname hall",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"little venice sports centre library",
      address:"10 crompton street",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"acton library",
      address:"high street",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"ealing central library",
      address:"103 ealing broadway",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"barnet archives and local studies centre library",
      address:"80 daws lane",
      cityName:"mill hill",
      email:"library.archives@barnet.gov.uk",
      phone:"0208359 3960"
    },
    {
      libraryName:"mottingham library",
      address:"31 mottingham road",
      cityName:"mottingham",
      email:"mottingham.library@bromley.gov.uk",
      phone:"020 8857 5406"
    },
    {
      libraryName:"west barnes library",
      address:"station road",
      cityName:"new malden",
      email:"westbarnes.library@merton.gov.uk",
      phone:"020 8274 5789"
    },
    {
      libraryName:"north harrow library",
      address:"429 - 433 pinner road",
      cityName:"north harrow",
      email:"northharrow.library@harrow.gov.uk",
      phone:"0208427 0611"
    },
    {
      libraryName:"northolt library",
      address:"church road",
      cityName:"northolt",
      email:"notlib@ealing.gov.uk",
      phone:"0208845 3380"
    },
    {
      libraryName:"northolt leisure centre library",
      address:"northolt leisure centre",
      cityName:"northolt",
      email:"",
      phone:""
    },
    {
      libraryName:"northwood hills library",
      address:"potter street",
      cityName:"northwood",
      email:"nwbranch@hillingdongrid.org",
      phone:"01923 824595"
    },
    {
      libraryName:"northwood library",
      address:"green lane",
      cityName:"northwood",
      email:"",
      phone:""
    },
    {
      libraryName:"orpington library",
      address:"the walnuts",
      cityName:"orpington",
      email:"orpington.library@bromley.gov.uk",
      phone:"01689 831 551"
    },
    {
      libraryName:"penge library",
      address:"186 maple road",
      cityName:"penge",
      email:"penge.library@bromley.gov.uk",
      phone:"020 8778 8772"
    },
    {
      libraryName:"petts wood library",
      address:"frankswood avenue",
      cityName:"petts wood",
      email:"pettswood.library@bromley.gov.uk",
      phone:"01689 821 607"
    },
    {
      libraryName:"hatch end library",
      address:"uxbridge road",
      cityName:"pinner",
      email:"hatchend.library@harrow.gov.uk",
      phone:"0208428 2636"
    },
    {
      libraryName:"pinner library",
      address:"marsh road",
      cityName:"pinner",
      email:"pinner.library@harrow.gov.uk",
      phone:"0208866 7827"
    },
    {
      libraryName:"rayners lane library",
      address:"226 imperial drive",
      cityName:"rayners lane",
      email:"raynerslane.library@harrow.gov.uk",
      phone:"0208866 9185"
    },
    {
      libraryName:"richmond lending library",
      address:"little green",
      cityName:"richmond-upon-thames",
      email:"richmond.library@richmond.gov.uk",
      phone:"020 89400981"
    },
    {
      libraryName:"richmond reference and local studies library",
      address:"old cityname hall",
      cityName:"richmond-upon-thames",
      email:"info@visitrichmond.co.uk",
      phone:"0208734 3360"
    },
    {
      libraryName:"marks gate library",
      address:"marks gate community centre",
      cityName:"romford",
      email:"marksgate.library@lbbd.gov.uk",
      phone:"020 8270 4165"
    },
    {
      libraryName:"robert jeyes library",
      address:"high road",
      cityName:"romford",
      email:"",
      phone:""
    },
    {
      libraryName:"manor farm library",
      address:"bury street",
      cityName:"ruislip",
      email:"mfbranch@hillingdongrid.org",
      phone:"01895 633651"
    },
    {
      libraryName:"ruislip manor library",
      address:"linden avenue",
      cityName:"ruislip manor",
      email:"rmbranch@hillingdongrid.org",
      phone:"01895 556262"
    },
    {
      libraryName:"sidcup library",
      address:"hadlow road",
      cityName:"sidcup",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"blackfen library",
      address:"7-9 blackfen parade",
      cityName:"sidcup",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"roxeth library",
      address:"northolt road",
      cityName:"south harrow",
      email:"roxeth.library@harrow.gov.uk",
      phone:"0208422 0809"
    },
    {
      libraryName:"south ruislip library",
      address:"hillingdon learning and development centre",
      cityName:"south ruislip",
      email:"srbranch@hillingdongrid.org",
      phone:"020 8845 0188"
    },
    {
      libraryName:"southall library",
      address:"osterley park road",
      cityName:"southall",
      email:"soutlib@ealing.gov.uk",
      phone:"0208574 3412"
    },
    {
      libraryName:"jubilee gardens library",
      address:"jubilee gardens health centre",
      cityName:"southall",
      email:"jubilib@ealing.gov.uk",
      phone:"0208578 1067"
    },
    {
      libraryName:"upper norwood joint library",
      address:"39-41 westow hill",
      cityName:"southwark",
      email:"info@uppernorwoodlibrary.org",
      phone:"0208 670 2551"
    },
    {
      libraryName:"stanmore library",
      address:"8 stanmore hill",
      cityName:"stanmore",
      email:"stanmore.library@harrow.gov.uk",
      phone:"0208954 9955"
    },
    {
      libraryName:"teddington library",
      address:"waldegrave road",
      cityName:"teddington",
      email:"teddington.library@richmond.gov.uk",
      phone:"0208977 12848264"
    },
    {
      libraryName:"idea store chrisp street",
      address:"1 vesey path",
      cityName:"tower hamlets",
      email:"ideastore@towerhamlets.gov.uk",
      phone:"020 7364 4332"
    },
    {
      libraryName:"idea store bow",
      address:"1 gladstone place",
      cityName:"tower hamlets",
      email:"ideastore@towerhamlets.gov.uk",
      phone:"020 7364 5754"
    },
    {
      libraryName:"watney market library",
      address:"30-32 watney market",
      cityName:"tower hamlets",
      email:"ideastore@towerhamlets.gov.uk",
      phone:"020 7790 4039"
    },
    {
      libraryName:"cubitt cityname library",
      address:"strattondale st",
      cityName:"tower hamlets",
      email:"ideastore@towerhamlets.gov.uk",
      phone:"020 7987 3152"
    },
    {
      libraryName:"tower hamlets local history and archives library",
      address:"277 bancroft road",
      cityName:"tower hamlets",
      email:"localhistory@towerhamlets.gov.uk",
      phone:"0207364 1290"
    },
    {
      libraryName:"twickenham library",
      address:"garfield road",
      cityName:"twickenham",
      email:"twickenham.library@richmond.gov.uk",
      phone:"0208892 8091"
    },
    {
      libraryName:"upper belvedere library",
      address:"woolwich road",
      cityName:"upper belvedere",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"uxbridge library",
      address:"14-15 high street",
      cityName:"uxbridge",
      email:"clibrary@hillingdongrid.org",
      phone:"01895 250702"
    },
    {
      libraryName:"wealdstone library",
      address:"@ the wealdstone centre",
      cityName:"wealdstone",
      email:"wealdstone.library@harrow.gov.uk",
      phone:"020 84209333"
    },
    {
      libraryName:"welling library",
      address:"bellegrove road",
      cityName:"welling",
      email:"",
      phone:"0208303 7777"
    },
    {
      libraryName:"cityname hall library,",
      address:"king's drive entrance",
      cityName:"wembley",
      email:"cityname hall library",
      phone:"020 8937 3500"
    },
    {
      libraryName:"ealing rd library",
      address:"coronet parade",
      cityName:"wembley",
      email:"ealing road library",
      phone:"0208 937 3560"
    },
    {
      libraryName:"brent library service",
      address:"4th floor, chesterfield house",
      cityName:"wembley",
      email:"raj.phull@brent.gov.uk",
      phone:"0208937 3144"
    },
    {
      libraryName:"west drayton library",
      address:"station road",
      cityName:"west drayton",
      email:"wdbranch@hillingdongrid.org",
      phone:"01895 443238"
    },
    {
      libraryName:"west wickham library",
      address:"glebe way",
      cityName:"west wickham",
      email:"westwickham.library@bromley.gov.uk",
      phone:"020 8777 4139"
    },
    {
      libraryName:"biggin hill library",
      address:"church road",
      cityName:"westerham",
      email:"bigginhill@bromley.gov.uk",
      phone:"01959 574468"
    },
    {
      libraryName:"whitton library",
      address:"141 nelson road",
      cityName:"whitton",
      email:"whitton.library@richmond.gov.uk",
      phone:"0208894 9828"
    },
    {
      libraryName:"woodford green library",
      address:"snakes lane",
      cityName:"woodford green",
      email:"woodfordgreen.library@redbridge.gov.uk",
      phone:"0208708 9055"
    },
    {
      libraryName:"yiewsley library",
      address:"high street",
      cityName:"yiewsley",
      email:"yibranch@hillingdongrid.org",
      phone:"01895 442539"
    },
    {
      libraryName:"tameside central library",
      address:"old street",
      cityName:"ashton-under-lyne",
      email:"",
      phone:""
    },
    {
      libraryName:"hurst library",
      address:"nook lane",
      cityName:"ashton-under-lyne",
      email:"",
      phone:""
    },
    {
      libraryName:"atherton library",
      address:"york street",
      cityName:"atherton",
      email:"",
      phone:""
    },
    {
      libraryName:"coronation road community centre and library",
      address:"westminster avenue",
      cityName:"bury",
      email:"coronation.lib@bury.gov.uk",
      phone:"0161 253 5443"
    },
    {
      libraryName:"castle leisure centre library",
      address:"castle leisure centre",
      cityName:"bury",
      email:"castle.lib@bury.gov.uk",
      phone:"0161 253 5560"
    },
    {
      libraryName:"bury central library",
      address:"manchester rd",
      cityName:"bury",
      email:"information@bury.gov.uk",
      phone:"0161 253 5871"
    },
    {
      libraryName:"south cross street library",
      address:"90 south cross street",
      cityName:"bury",
      email:"southcrossst@bury.gov.uk",
      phone:"0161 253 6079"
    },
    {
      libraryName:"topping fold library",
      address:"36 topping fold road",
      cityName:"bury",
      email:"topping.lib@bury.gov.uk",
      phone:"0161 253 6361"
    },
    {
      libraryName:"new kershaw centre library",
      address:"new kershaw centre",
      cityName:"bury",
      email:"kershaw.lib@bury.gov.uk",
      phone:"0161 253 6400"
    },
    {
      libraryName:"unsworth library",
      address:"sunnybank road",
      cityName:"bury",
      email:"unsworth.lib@bury.gov.uk",
      phone:"0161 253 7560"
    },
    {
      libraryName:"brandlesholme library",
      address:"brandlesholme community centre and library",
      cityName:"bury",
      email:"brandlesholme.lib@bury.gov.uk",
      phone:""
    },
    {
      libraryName:"dukinfield library",
      address:"concord way",
      cityName:"dukinfield",
      email:"",
      phone:""
    },
    {
      libraryName:"fitton hill library",
      address:"fir tree avenue",
      cityName:"fitton hill",
      email:"fittonhill.library@oldham.gov.uk",
      phone:"0161 770 5820"
    },
    {
      libraryName:"darnhill library",
      address:"argyle parade",
      cityName:"heywood",
      email:"darnhill.library@rochdale.gov.uk",
      phone:"01706 368142"
    },
    {
      libraryName:"hyde library",
      address:"union street",
      cityName:"hyde",
      email:"",
      phone:""
    },
    {
      libraryName:"hattersley library",
      address:"hattersley road east",
      cityName:"hyde",
      email:"",
      phone:""
    },
    {
      libraryName:"newton library",
      address:"talbot road",
      cityName:"hyde",
      email:"",
      phone:""
    },
    {
      libraryName:"leigh library",
      address:"turnpike centre",
      cityName:"leigh",
      email:"",
      phone:""
    },
    {
      libraryName:"littleborough library",
      address:"harehill park",
      cityName:"littleborough",
      email:"littleborough.library@rochdale.gov.uk",
      phone:"01706 378 219"
    },
    {
      libraryName:"smithybridge library",
      address:"121/3 smithybridge road",
      cityName:"littleborough",
      email:"smithybridge.library@rochdale.gov.uk",
      phone:"01706 378 281"
    },
    {
      libraryName:"new moston library",
      address:"nuthurst rd",
      cityName:"manchester",
      email:"newmostonlibrary@manchester.gov.uk",
      phone:"0161 219 6461"
    },
    {
      libraryName:"longsight library",
      address:"519 stockport rd",
      cityName:"manchester",
      email:"longsightlibrary@manchester.gov.uk",
      phone:"0161 227 3706"
    },
    {
      libraryName:"withington library",
      address:"410 wilmslow rd",
      cityName:"manchester",
      email:"withingtonlibrary@manchester.gov.uk",
      phone:"0161 227 3720"
    },
    {
      libraryName:"levenshulme library",
      address:"cromwell grove",
      cityName:"manchester",
      email:"levenshulmelibrary@manchester.gov.uk",
      phone:"0161 227 3725"
    },
    {
      libraryName:"gorton library",
      address:"garratt way",
      cityName:"manchester",
      email:"gortonlibrary@manchester.gov.uk",
      phone:"0161 227 3737"
    },
    {
      libraryName:"fallowfield library",
      address:"platt lane",
      cityName:"manchester",
      email:"fallowfieldlibrary@manchester.gov.uk",
      phone:"0161 227 3744"
    },
    {
      libraryName:"northenden library",
      address:"church rd",
      cityName:"manchester",
      email:"northendenlibrary@manchester.gov.uk",
      phone:"0161 227 3746"
    },
    {
      libraryName:"rackhouse library",
      address:"yarmouth drive",
      cityName:"manchester",
      email:"rackhouselibrary@manchester.gov.uk",
      phone:"0161 227 3750"
    },
    {
      libraryName:"didsbury library",
      address:"692 wilmslow rd",
      cityName:"manchester",
      email:"didsburylibrary@manchester.gov.uk",
      phone:"0161 227 3755"
    },
    {
      libraryName:"moss side powerhouse library",
      address:"140 raby street",
      cityName:"manchester",
      email:"powerhouselibrary@manchester.gov.uk",
      phone:"0161 227 3758"
    },
    {
      libraryName:"higher blackley library",
      address:"victoria ave",
      cityName:"manchester",
      email:"higherblackleylibrary@manchester.gov.uk",
      phone:"0161 227 3760"
    },
    {
      libraryName:"burnage library",
      address:"burnage lane",
      cityName:"manchester",
      email:"burnagelibrary@manchester.gov.uk",
      phone:"0161 227 3774"
    },
    {
      libraryName:"crumpsall library",
      address:"abraham moss centre",
      cityName:"manchester",
      email:"crumpsall.library@manchester.gov.uk",
      phone:"0161 227 3777"
    },
    {
      libraryName:"newton heath library",
      address:"old church st",
      cityName:"manchester",
      email:"newtonheathlibrary@manchester.gov.uk",
      phone:"0161 234 4474"
    },
    {
      libraryName:"whitefield library",
      address:"pinfold lane",
      cityName:"manchester",
      email:"whitefield.lib@bury.gov.uk",
      phone:"0161 253 7510"
    },
    {
      libraryName:"miles platting library",
      address:"varley st",
      cityName:"manchester",
      email:"milesplattinglibrary@manchester.gov.uk",
      phone:"0161 254 7021"
    },
    {
      libraryName:"west end library",
      address:"windsor road",
      cityName:"manchester",
      email:"",
      phone:"0161 336 2995"
    },
    {
      libraryName:"height library",
      address:"king street",
      cityName:"manchester",
      email:"height.library@salford.gov.uk",
      phone:"0161 736 1907"
    },
    {
      libraryName:"cadishead library",
      address:"126 liverpool road",
      cityName:"manchester",
      email:"",
      phone:"0161 775 3457"
    },
    {
      libraryName:"irlam library",
      address:"hurst fold",
      cityName:"manchester",
      email:"irlam.library@salford.gov.uk",
      phone:"0161 775 3566"
    },
    {
      libraryName:"little hulton library",
      address:"longshaw drive",
      cityName:"manchester",
      email:"littlehulton.library@salford.gov.uk",
      phone:"0161 790 4201"
    },
    {
      libraryName:"clifton library",
      address:"community centre",
      cityName:"manchester",
      email:"clifton.library@salford.gov.uk",
      phone:"0161 794 1591"
    },
    {
      libraryName:"worsley village library",
      address:"worsley road",
      cityName:"manchester",
      email:"worsleyvillage.library@salford.gov.uk",
      phone:"0161 794 8750"
    },
    {
      libraryName:"boothscityname library",
      address:"community centre",
      cityName:"manchester",
      email:"boothscityname.library@salford.gov.uk",
      phone:"0161 799 6549"
    },
    {
      libraryName:"chorlton library",
      address:"manchester road",
      cityName:"manchester",
      email:"chorltonlibrary@manchester.gov.uk",
      phone:"0161 8813179"
    },
    {
      libraryName:"walkden library",
      address:"walkden gateway, 2 smith street",
      cityName:"manchester",
      email:"",
      phone:"0161 909 6518"
    },
    {
      libraryName:"eccles library",
      address:"eccles gateway, 28 barton lane",
      cityName:"manchester",
      email:"",
      phone:"0161 909 6528"
    },
    {
      libraryName:"pendleton library",
      address:"pendleton gateway, 1 broadwalk",
      cityName:"manchester",
      email:"pendleton.library@salford.gov.uk",
      phone:"0161 909 6538"
    },
    {
      libraryName:"broughton library",
      address:"broughton community hub, 50 rigby street",
      cityName:"manchester",
      email:"",
      phone:"0161 909 6548"
    },
    {
      libraryName:"davyhulme library",
      address:"hayeswater road",
      cityName:"manchester",
      email:"davyhulme.library@trafford.gov.uk",
      phone:"0161 912 2880"
    },
    {
      libraryName:"woodsend library",
      address:"woodsend road",
      cityName:"manchester",
      email:"woodsend.library@trafford.gov.uk",
      phone:"0161 912 2919"
    },
    {
      libraryName:"bowfell library",
      address:"bowfell road",
      cityName:"manchester",
      email:"bowfell.library@trafford.gov.uk",
      phone:"0161 912 2939"
    },
    {
      libraryName:"sale library",
      address:"sale waterside",
      cityName:"manchester",
      email:"sale.library@trafford.gov.uk",
      phone:"0161 912 3008"
    },
    {
      libraryName:"coppice avenue library",
      address:"coppice avenue",
      cityName:"manchester",
      email:"coppice.library@trafford.gov.uk",
      phone:"0161 912 3560"
    },
    {
      libraryName:"stretford library",
      address:"kingsway",
      cityName:"manchester",
      email:"stretford.library@trafford.gov.uk",
      phone:"0161 912 5150"
    },
    {
      libraryName:"partington library",
      address:"central road",
      cityName:"manchester",
      email:"partington.library@trafford.gov.uk",
      phone:"0161 912 5450"
    },
    {
      libraryName:"hope library",
      address:"eccles old road",
      cityName:"manchester",
      email:"hope.library@salford.gov.uk",
      phone:"0161 921 2185"
    },
    {
      libraryName:"urmston library",
      address:"unit 34",
      cityName:"manchester",
      email:"",
      phone:"0161-748 0774"
    },
    {
      libraryName:"lostock library",
      address:"selby road",
      cityName:"manchester",
      email:"lostock-hall.library@lancashire.gov.uk",
      phone:"01772 339775"
    },
    {
      libraryName:"beswick library",
      address:"60 grey mare lane",
      cityName:"manchester",
      email:"beswicklibrary@manchester.gov.uk",
      phone:"160 245 7241"
    },
    {
      libraryName:"east city library",
      address:"whitworth house",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"hulme library",
      address:"stretford road",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"old trafford library",
      address:"shrewsbury street",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"barlow moor library",
      address:"40 merseybank avenue",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"wythenshawe library",
      address:"forum square",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"brooklands library",
      address:"brooklands library",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"greatstone library",
      address:"stretford leisure centre",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"denton library",
      address:"peel street",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"haughton green library",
      address:"mancunian road",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"droylsden library",
      address:"manchester road",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"north city library",
      address:"rochdale road",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"hale library",
      address:"leigh road",
      cityName:"manchester",
      email:"",
      phone:""
    },
    {
      libraryName:"langley library",
      address:"langley children's centre",
      cityName:"middleton",
      email:"langley.library@rochdale.gov.uk",
      phone:"0161 654 8911"
    },
    {
      libraryName:"middleton junction library",
      address:"jumbo social centre",
      cityName:"middleton",
      email:"junction.library@rochdale.gov.uk",
      phone:"0161 6548910"
    },
    {
      libraryName:"mottram library",
      address:"broadbottom road",
      cityName:"mottram",
      email:"",
      phone:""
    },
    {
      libraryName:"lees library",
      address:"thomas street",
      cityName:"olden",
      email:"lees.library@oldham.gov.uk",
      phone:"0161 633 5764"
    },
    {
      libraryName:"uppermill library",
      address:"st. chad's",
      cityName:"oldham",
      email:"uppermill.library@oldham.gov.uk",
      phone:"01457 872 777"
    },
    {
      libraryName:"greenfield library",
      address:"chew vale",
      cityName:"oldham",
      email:"greenfield.library@oldham.gov.uk",
      phone:"01457 872472"
    },
    {
      libraryName:"delph library",
      address:"millgate",
      cityName:"oldham",
      email:"delph.library@oldham.gov.uk",
      phone:"01457 874 381"
    },
    {
      libraryName:"limehurst library",
      address:"st. chad's centre",
      cityName:"oldham",
      email:"limehurst.library@oldham.gov.uk",
      phone:"0161 624 0351"
    },
    {
      libraryName:"northmoor library",
      address:"chadderton way",
      cityName:"oldham",
      email:"northmoor.library@oldham.gov.uk",
      phone:"0161 633 1168"
    },
    {
      libraryName:"failsworth library",
      address:"oldham road",
      cityName:"oldham",
      email:"failsworth.library@oldham.gov.uk",
      phone:"0161 770 5820"
    },
    {
      libraryName:"chadderton library",
      address:"chadderton wellbeing centre",
      cityName:"oldham",
      email:"chadderton.library@oldham.gov.uk",
      phone:"0161 7705656"
    },
    {
      libraryName:"royton library",
      address:"rochdale road",
      cityName:"oldham",
      email:"royton.library@oldham.gov.uk",
      phone:"0161 911 3087"
    },
    {
      libraryName:"oldham library",
      address:"greaves street",
      cityName:"oldham",
      email:"oldham.library@oldham.gov.uk",
      phone:"01617 708036"
    },
    {
      libraryName:"crompton library",
      address:"farrow street east",
      cityName:"oldham",
      email:"crompton.library@oldham.gov.uk",
      phone:"01706 842184"
    },
    {
      libraryName:"mossley library",
      address:"wyre street",
      cityName:"oldham",
      email:"",
      phone:""
    },
    {
      libraryName:"turf lane community book exchange library",
      address:"turf lane",
      cityName:"oldham",
      email:"",
      phone:""
    },
    {
      libraryName:"prestwich library",
      address:"longfield centre",
      cityName:"prestwich",
      email:"prestwich.lib@bury.gov.uk",
      phone:"0161 253 7214"
    },
    {
      libraryName:"sedgeley park community library",
      address:"st gabriels church community room",
      cityName:"prestwich",
      email:"",
      phone:""
    },
    {
      libraryName:"sedgeley park community library",
      address:"st gabriels church community room",
      cityName:"prestwich",
      email:"",
      phone:""
    },
    {
      libraryName:"dumer’s lane community centre and library",
      address:"245 dumers lane",
      cityName:"radcliffe",
      email:"dumers.lib@bury.gov.uk",
      phone:"0161 253 5503"
    },
    {
      libraryName:"radcliffe library",
      address:"stand lane",
      cityName:"radcliffe",
      email:"radcliffe.lib@bury.gov.uk",
      phone:"0161 253 7160"
    },
    {
      libraryName:"ramsbottom library",
      address:"carr st",
      cityName:"ramsbottom",
      email:"ramsbottom.lib@bury.gov.uk",
      phone:"0161 253 5352"
    },
    {
      libraryName:"middleton library",
      address:"long street",
      cityName:"rochdale",
      email:"library.service@rochdale.gov.uk",
      phone:"0161 643 5228"
    },
    {
      libraryName:"alkrington library",
      address:"kirkway",
      cityName:"rochdale",
      email:"alkrington.library@rochdale.gov.uk",
      phone:"0161 6437799"
    },
    {
      libraryName:"belfield library",
      address:"belfield community school",
      cityName:"rochdale",
      email:"belfield.library@rochdale.gov.uk",
      phone:"01706 341364"
    },
    {
      libraryName:"heywood library",
      address:"church street",
      cityName:"rochdale",
      email:"heywood.library@rochdale.gov.uk",
      phone:"01706 360947"
    },
    {
      libraryName:"wardle library",
      address:"448 birch road",
      cityName:"rochdale",
      email:"library.service@rochdale.gov.uk",
      phone:"01706 377 476"
    },
    {
      libraryName:"norden library",
      address:"norden community school",
      cityName:"rochdale",
      email:"norden.library@rochdale.gov.uk",
      phone:"01706 631 544"
    },
    {
      libraryName:"castleton library",
      address:"castleton community centre",
      cityName:"rochdale",
      email:"library.service@rochdale.gov.uk",
      phone:"01706 633 430"
    },
    {
      libraryName:"balderstone library",
      address:"balderstone park",
      cityName:"rochdale",
      email:"library.service@rochdale.gov.uk",
      phone:"01706 640 438"
    },
    {
      libraryName:"milnrow library",
      address:"newhey road",
      cityName:"rochdale",
      email:"library.service@rochdale.gov.uk",
      phone:"01706 641 563"
    },
    {
      libraryName:"spotland library",
      address:"ings lane",
      cityName:"rochdale",
      email:"library.service@rochdale.gov.uk",
      phone:"01706 648 505"
    },
    {
      libraryName:"smallbridge library",
      address:"stevenson square",
      cityName:"rochdale",
      email:"smallbridge.library@rochdale.gov.uk",
      phone:"01706 659978"
    },
    {
      libraryName:"wheatsheaf library",
      address:"wheatsheaf centre",
      cityName:"rochdale",
      email:"library.service@rochdale.gov.uk",
      phone:"01706 924989"
    },
    {
      libraryName:"norden library",
      address:"edenfield road",
      cityName:"rochdale",
      email:"norden.library@rochdale.gov.uk",
      phone:"0845 121 2976"
    },
    {
      libraryName:"winton library",
      address:"old parrin lane",
      cityName:"salford",
      email:"winton.library@salford.gov.uk",
      phone:"0161 921 2180"
    },
    {
      libraryName:"ordsall library",
      address:"ordsall neighbourhood office",
      cityName:"salford",
      email:"ordsall.library@salford.gov.uk",
      phone:"0161 603 4097"
    },
    {
      libraryName:"salford local history library",
      address:"peel park, the crescent\\\\nsalford museum and art gallery",
      cityName:"salford",
      email:"local.history@salford.gov.uk",
      phone:"0161 736 2649"
    },
    {
      libraryName:"little hulton library",
      address:"longshaw drive",
      cityName:"salford",
      email:"littlehulton.library@salford.gov.uk",
      phone:"0161 790 4201"
    },
    {
      libraryName:"lower kersal library",
      address:"salford sports village",
      cityName:"salford",
      email:"lowerkersal.library@salford.gov.uk",
      phone:"0161 921 1236"
    },
    {
      libraryName:"swinton library",
      address:"chorley road",
      cityName:"salford",
      email:"swinton.library@salford.gov.uk",
      phone:"0161 921 2360"
    },
    {
      libraryName:"stalybridge library",
      address:"trinity street",
      cityName:"stalybridge",
      email:"",
      phone:""
    },
    {
      libraryName:"stockport central library",
      address:"wellington road south",
      cityName:"stockport",
      email:"lending.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"dialstone library",
      address:"lisburne lane",
      cityName:"stockport",
      email:"dialstone.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"great moor library",
      address:"gladstone street",
      cityName:"stockport",
      email:"greatmoor.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"edgeley library",
      address:"edgeley road",
      cityName:"stockport",
      email:"edgeley.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"the heatons library",
      address:"thornfield road",
      cityName:"stockport",
      email:"heatons.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"reddish library",
      address:"gorton road",
      cityName:"stockport",
      email:"reddish.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"brinnington library and learning zone",
      address:"first house, 367 brinnington road",
      cityName:"stockport",
      email:"brinnington.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"bredbury library",
      address:"george lane",
      cityName:"stockport",
      email:"bredbury.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"marple library",
      address:"memorial park",
      cityName:"stockport",
      email:"marple.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"high lane library",
      address:"buxton road",
      cityName:"stockport",
      email:"highlane.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"bramhall library",
      address:"bramhall lane south",
      cityName:"stockport",
      email:"bramhall.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"hazel grove library",
      address:"beech avenue",
      cityName:"stockport",
      email:"hazelgrove.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"cheadle library",
      address:"ashfield road",
      cityName:"stockport",
      email:"cheadle.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"heald green library",
      address:"finney lane",
      cityName:"stockport",
      email:"healdgreen.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"cheadle hulme library",
      address:"mellor road",
      cityName:"stockport",
      email:"cheadlehulme.library@stockport.gov.uk",
      phone:"0161 217 6009"
    },
    {
      libraryName:"centre for the visually impaired, duckinfield library",
      address:"concord way",
      cityName:"tameside",
      email:"",
      phone:""
    },
    {
      libraryName:"timperley library",
      address:"405 stockport road",
      cityName:"timperley",
      email:"timperley.library@trafford.gov.uk",
      phone:"0161 912 5600"
    },
    {
      libraryName:"tottington library",
      address:"cityname hall",
      cityName:"tottington",
      email:"tottington.lib@bury.gov.uk",
      phone:"253 6652"
    },
    {
      libraryName:"tyldesley library",
      address:"stanley street",
      cityName:"tyldesley",
      email:"",
      phone:""
    },
    {
      libraryName:"shevington library",
      address:"gathurst lane",
      cityName:"wigan",
      email:"shevington.library@wlct.org",
      phone:"01257 252618"
    },
    {
      libraryName:"billinge library",
      address:"main street",
      cityName:"wigan",
      email:"",
      phone:"01744 677535"
    },
    {
      libraryName:"ince library",
      address:"smithy green",
      cityName:"wigan",
      email:"ince.library@wlct.org",
      phone:"01942 324423"
    },
    {
      libraryName:"golborne library",
      address:"tanners lane",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"wigan library",
      address:"college avenue",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"wigan childrens library",
      address:"the wiend centre",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"aspull library",
      address:"oakfield crescent",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"hindley library",
      address:"market street",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"abram library",
      address:"vicarage road",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"hope community library",
      address:"2 the grange community complex",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"ashton library",
      address:"wigan road",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"marsh green library",
      address:"harrow road",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"standish library",
      address:"cross street",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"beech hill library",
      address:"buckley street west",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"platt bridge community library",
      address:"platt bridge community first",
      cityName:"wigan",
      email:"",
      phone:""
    },
    {
      libraryName:"guernsey library",
      address:"market street",
      cityName:"st peter port",
      email:"gsylib@cionline.com",
      phone:"01481 720392"
    },
    {
      libraryName:"the priaulx library guernsey",
      address:"candie",
      cityName:"st peter port",
      email:"priaulx.likbrary@gov.gg",
      phone:"01481 721998"
    },
    {
      libraryName:"bangor library",
      address:"ffordd gwynedd",
      cityName:"bangor",
      email:"",
      phone:""
    },
    {
      libraryName:"barmouth library",
      address:"station road",
      cityName:"barmouth",
      email:"",
      phone:""
    },
    {
      libraryName:"bethesda library",
      address:"ffordd coetmor",
      cityName:"bethesda",
      email:"",
      phone:""
    },
    {
      libraryName:"blaenau ffestiniog library",
      address:"canolfan maenofferen",
      cityName:"blaenau ffestiniog",
      email:"",
      phone:""
    },
    {
      libraryName:"caernarfon library",
      address:"pavilion hill",
      cityName:"caernarfon",
      email:"llcaernarfon@gwynedd.gov.uk",
      phone:"01286 679463"
    },
    {
      libraryName:"cricieth library",
      address:"high street",
      cityName:"cricieth",
      email:"",
      phone:""
    },
    {
      libraryName:"deiniolen library",
      address:"ty elidir",
      cityName:"deiniolen",
      email:"",
      phone:""
    },
    {
      libraryName:"dolgellau library",
      address:"ffordd y bala",
      cityName:"dolgellau",
      email:"",
      phone:""
    },
    {
      libraryName:"harlech library",
      address:"old primary school",
      cityName:"harlech",
      email:"",
      phone:""
    },
    {
      libraryName:"llanberis library",
      address:"ffordd capel coch",
      cityName:"llanberis",
      email:"",
      phone:""
    },
    {
      libraryName:"nefyn library",
      address:"rhodfa'r môr",
      cityName:"nefyn",
      email:"",
      phone:""
    },
    {
      libraryName:"penrhyndeudraeth library",
      address:"llys deudraeth",
      cityName:"penrhyndeudraeth",
      email:"",
      phone:""
    },
    {
      libraryName:"penygroes library",
      address:"canolfan dechnoleg dyffryn nantlle",
      cityName:"penygroes",
      email:"",
      phone:""
    },
    {
      libraryName:"porthmadog library",
      address:"chapel street",
      cityName:"porthmadog",
      email:"",
      phone:""
    },
    {
      libraryName:"pwllheli library",
      address:"neuadd dwyfor",
      cityName:"pwllheli",
      email:"",
      phone:""
    },
    {
      libraryName:"tywyn library",
      address:"neptune road",
      cityName:"tywyn",
      email:"",
      phone:""
    },
    {
      libraryName:"bala library",
      address:"llyfrgell bro tegid",
      cityName:"y bala",
      email:"",
      phone:""
    },
    {
      libraryName:"aldershot library",
      address:"109 high street",
      cityName:"aldershot",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"alton library",
      address:"vicarage hill",
      cityName:"alton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"ludgershall library",
      address:"memorial hall",
      cityName:"andover",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01264 790350"
    },
    {
      libraryName:"andover library",
      address:"chantry centre",
      cityName:"andover",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"basingstoke library",
      address:"19/20 westminster house",
      cityName:"basingstoke",
      email:"",
      phone:"0845 603 5631"
    },
    {
      libraryName:"south ham library",
      address:"paddock road",
      cityName:"basingstoke",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"chineham library",
      address:"chineham district centre",
      cityName:"basingstoke",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"overton library",
      address:"high street",
      cityName:"basingstoke",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"bordon library",
      address:"forest centre",
      cityName:"bordon",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"eastleigh library",
      address:"swan centre",
      cityName:"eastleigh",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"fair oak library",
      address:"campbell way",
      cityName:"eastleigh",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"chandlers ford library",
      address:"oakmount road",
      cityName:"eastleigh",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"stubbington library",
      address:"stubbington lane",
      cityName:"fareham",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"fareham library",
      address:"osborn road",
      cityName:"fareham",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"farnborough library",
      address:"pinehurst",
      cityName:"farnborough",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"fleet library",
      address:"236 fleet road",
      cityName:"fleet",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"fordingbridge library",
      address:"roundhill",
      cityName:"fordingbridge",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"gosport discovery centre",
      address:"high street",
      cityName:"gosport",
      email:"",
      phone:"0845 603 5631"
    },
    {
      libraryName:"elson library",
      address:"136 chantry road",
      cityName:"gosport",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"bridgemary library",
      address:"74 brewers lane",
      cityName:"gosport",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"lee on the solent library",
      address:"high street",
      cityName:"gosport",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"grayshott library",
      address:"small village hall",
      cityName:"grayshott",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"havant library",
      address:"meridian centre",
      cityName:"havant",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"emsworth library",
      address:"23 high street",
      cityName:"havant",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"hayling island library",
      address:"elm grove",
      cityName:"hayling island",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"horndean library",
      address:"12 fiveheads road",
      cityName:"horndean",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"kingsclere library",
      address:"the village club",
      cityName:"kingsclere",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"leigh park library",
      address:"50 park parade",
      cityName:"leigh park",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"liphook library",
      address:"london road",
      cityName:"liphook",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"lymington library",
      address:"north close",
      cityName:"lymington",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"lyndhurst library",
      address:"community centre",
      cityName:"lyndhurst",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"milford on sea library",
      address:"village hall",
      cityName:"milford on sea",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"alresford library",
      address:"20 broad street",
      cityName:"new alresford",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"new milton library",
      address:"gore road",
      cityName:"new milton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"odiham library",
      address:"the bury",
      cityName:"odiham",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"petersfield library",
      address:"27 the square",
      cityName:"petersfield",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"portchester library",
      address:"west street",
      cityName:"portchester",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"portsea library",
      address:"john pounds community centre",
      cityName:"portsea",
      email:"johnpounds.library@portsmouthcc.gov.uk",
      phone:"023 9229 7072"
    },
    {
      libraryName:"portsmouth central library",
      address:"central library",
      cityName:"portsea",
      email:"johnpounds.library@portsmouthcc.gov.uk",
      phone:"023 9281 9311"
    },
    {
      libraryName:"cosham library",
      address:"spur road",
      cityName:"portsmouth",
      email:"cosham.library@portsmouthcc.gov.uk",
      phone:"023 9237 6023"
    },
    {
      libraryName:"paulsgrove library",
      address:"marsden road",
      cityName:"portsmouth",
      email:"paulsgrove.library@portsmouthcc.gov.uk",
      phone:"023 9237 7818"
    },
    {
      libraryName:"north end library",
      address:"gladys avenue",
      cityName:"portsmouth",
      email:"northend.library@portsmouthcc.gov.uk",
      phone:"023 9266 2651"
    },
    {
      libraryName:"beddow library",
      address:"milton road",
      cityName:"portsmouth",
      email:"beddow.library@portsmouthcc.gov.uk",
      phone:"023 9273 1848"
    },
    {
      libraryName:"carnegie library",
      address:"fratton road",
      cityName:"portsmouth",
      email:"carnegie.library@portsmouthcc.gov.uk",
      phone:"023 9282 2581"
    },
    {
      libraryName:"alderman lacy library",
      address:"tangier road",
      cityName:"portsmouth",
      email:"",
      phone:""
    },
    {
      libraryName:"ringwood library",
      address:"christchurch road",
      cityName:"ringwood",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"romsey library",
      address:"station road",
      cityName:"romsey",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"southampton central library",
      address:"civic centre",
      cityName:"southampton",
      email:"lending.library@southampton.gov.uk]\\\\nreference.library@southampton]",
      phone:"023 8083 2462"
    },
    {
      libraryName:"burgess road library",
      address:"burgess road",
      cityName:"southampton",
      email:"library@southampton.gov.uk",
      phone:"023 8083 3007"
    },
    {
      libraryName:"lordshill library",
      address:"lordshill district centre",
      cityName:"southampton",
      email:"library@southampton.gov.uk",
      phone:"023 8083 3007"
    },
    {
      libraryName:"millbrook library",
      address:"mansel park pavillion",
      cityName:"southampton",
      email:"library@southampton.gov.uk",
      phone:"023 8083 3007"
    },
    {
      libraryName:"portswood library",
      address:"portswood road",
      cityName:"southampton",
      email:"library@southampton.gov.uk",
      phone:"023 8083 3007"
    },
    {
      libraryName:"cobbett road library",
      address:"cobbett road",
      cityName:"southampton",
      email:"library@southampton.gov.uk",
      phone:"023 8083 3007"
    },
    {
      libraryName:"thornhill library",
      address:"380 hinkler road",
      cityName:"southampton",
      email:"library@southampton.gov.uk",
      phone:"023 8083 3007"
    },
    {
      libraryName:"hedge end library",
      address:"11 upper northam road",
      cityName:"southampton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"netley library",
      address:"station road",
      cityName:"southampton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"bishops waltham library",
      address:"free street",
      cityName:"southampton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"totton library",
      address:"library road",
      cityName:"southampton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"blackfield library",
      address:"167 hampton parade",
      cityName:"southampton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"north baddesley library",
      address:"28 willis avenue",
      cityName:"southampton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"hythe library",
      address:"pylewell road,",
      cityName:"southampton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"lockswood library",
      address:"lockswood centre locks heath district centre",
      cityName:"southampton",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"bitterne library",
      address:"bitterne road east",
      cityName:"southampton",
      email:"",
      phone:""
    },
    {
      libraryName:"weston library",
      address:"6 wallace road",
      cityName:"southampton",
      email:"",
      phone:""
    },
    {
      libraryName:"southsea library and customer service centre",
      address:"19-21 palmerston road",
      cityName:"southsea",
      email:"southsea.library@portsmouthcc.gov.uk",
      phone:"023 9268 8999"
    },
    {
      libraryName:"tadley library",
      address:"mulfords hill",
      cityName:"tadley",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"waterlooville library",
      address:"the precinct",
      cityName:"waterlooville",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"west end library",
      address:"parish centre, chapel road",
      cityName:"west end",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"whitchurch library",
      address:"gill nethercott centre, winchester road",
      cityName:"whitchurch",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"winchester reference library",
      address:"81 north walls",
      cityName:"winchester",
      email:"",
      phone:"01962 826 666"
    },
    {
      libraryName:"hampshire library and information service",
      address:"5/6 moorside place\\\\nmoorside road\\\\nhampshire library and information service headquarters",
      cityName:"winchester",
      email:"",
      phone:"01962 826688"
    },
    {
      libraryName:"winchester discovery centre",
      address:"jewry street",
      cityName:"winchester",
      email:"",
      phone:"0845 603 5631"
    },
    {
      libraryName:"stanmore library",
      address:"wavell way",
      cityName:"winchester",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"winchester lending library",
      address:"capital house",
      cityName:"winchester",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"yateley library",
      address:"school lane",
      cityName:"yateley",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"belmont library",
      address:"eastholme community centre",
      cityName:"belmont",
      email:"belmontlibrary@herefordshire.gov.uk",
      phone:"01432 342648"
    },
    {
      libraryName:"bromyard library",
      address:"the bromyard centre",
      cityName:"bromyard",
      email:"bromyardlibrary@herefordshire.gov.uk",
      phone:"01432 260280"
    },
    {
      libraryName:"hereford library",
      address:"broad street",
      cityName:"hereford",
      email:"herefordlibrary@herefordshire.gov.uk",
      phone:"01432 383600"
    },
    {
      libraryName:"kington library",
      address:"64 bridge street",
      cityName:"kington",
      email:"kingtonlibrary@herefordshire.gov.uk",
      phone:"01544 230427"
    },
    {
      libraryName:"ledbury library",
      address:"bye street",
      cityName:"ledbury",
      email:"ledburylibrary@herefordshire.gov.uk",
      phone:"01531 632133"
    },
    {
      libraryName:"leintwardine library",
      address:"leintwardine village hall",
      cityName:"leintwardine",
      email:"leintwardinelibrary@herefordshire.gov.uk",
      phone:"01547 540459"
    },
    {
      libraryName:"leominster library",
      address:"8 buttercross",
      cityName:"leominster",
      email:"leominsterlibrary@herefordshire.gov.uk",
      phone:"01432 383290"
    },
    {
      libraryName:"peterchurch library",
      address:"st. peter's church",
      cityName:"peterchurch",
      email:"",
      phone:""
    },
    {
      libraryName:"ross-on-wye library",
      address:"cantilupe road",
      cityName:"ross on wye",
      email:"rosslibrary@herefordshire.gov.uk",
      phone:"01432 383280"
    },
    {
      libraryName:"weobley library",
      address:"old police court",
      cityName:"weobley",
      email:"weobleylibrary@herefordshire.gov.uk",
      phone:"01544 318956"
    },
    {
      libraryName:"abbots langley library",
      address:"high street",
      cityName:"abbots langley",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"baldock library",
      address:"simpson drive",
      cityName:"baldock",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"berkhamsted library",
      address:"kings road",
      cityName:"berkhamsted",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"bishops stortford library",
      address:"6 the causeway",
      cityName:"bishops stortford",
      email:"",
      phone:""
    },
    {
      libraryName:"borehamwood library",
      address:"elstree way",
      cityName:"borehamwood",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"bovingdon library",
      address:"bovingdon high street",
      cityName:"bovingdon",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"brookmans park library",
      address:"bradmore green",
      cityName:"brookmans park",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"buntingford library",
      address:"77 high street",
      cityName:"buntingford",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"bushey library",
      address:"sparrows herne",
      cityName:"bushey",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"chorleywood library",
      address:"lower road",
      cityName:"chorleywood",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"croxley green library",
      address:"barton way",
      cityName:"croxley green",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"cuffley library",
      address:"maynard place",
      cityName:"cuffley",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"harpenden library",
      address:"vaughan road",
      cityName:"harpenden",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"hatfield library",
      address:"queensway",
      cityName:"hatfield",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"central resources library",
      address:"new barnfield centre",
      cityName:"hatfield",
      email:"",
      phone:""
    },
    {
      libraryName:"hemel hempstead library",
      address:"combe street",
      cityName:"hemel hempstead",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"adeyfield library",
      address:"1a queens square",
      cityName:"hemel hempstead",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"leverstock green library",
      address:"village centre",
      cityName:"hemel hempstead",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"hertford library",
      address:"dolphin yard, maidenhead street",
      cityName:"hertford",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"hitchin library",
      address:"paynes park",
      cityName:"hitchin",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"hoddesdon library",
      address:"98a high street",
      cityName:"hoddesdon",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"kings langley library",
      address:"the nap",
      cityName:"kings langley",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"knebworth library",
      address:"7 st martins road",
      cityName:"knebworth",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"letchworth library",
      address:"central library",
      cityName:"letchworth",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"london colney library",
      address:"community centre",
      cityName:"london colney",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"oakmere library",
      address:"high street",
      cityName:"potters bar",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"radlett library",
      address:"1 aldenham avenue",
      cityName:"radlett",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"redbourn library",
      address:"lamb lane",
      cityName:"redbourn",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"rickmansworth library",
      address:"high street",
      cityName:"rickmansworth",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"royston library",
      address:"market hill",
      cityName:"royston",
      email:"",
      phone:"01226 787222"
    },
    {
      libraryName:"sawbridgeworth library",
      address:"the forebury",
      cityName:"sawbridgeworth",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"oxhey library",
      address:"bridlington road",
      cityName:"south oxhey",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"marshalswick library",
      address:"the ridgeway",
      cityName:"st albans",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"st albans library",
      address:"the maltings",
      cityName:"st albans",
      email:"",
      phone:""
    },
    {
      libraryName:"stevenage old cityname library",
      address:"38 high street",
      cityName:"stevenage",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"stevenage library",
      address:"southgate",
      cityName:"stevenage",
      email:"",
      phone:""
    },
    {
      libraryName:"tring library",
      address:"high street",
      cityName:"tring",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"goffs oak library",
      address:"valley view",
      cityName:"goffs oak",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"waltham cross library",
      address:"123 high street",
      cityName:"waltham cross",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"cheshunt library",
      address:"turners hill",
      cityName:"cheshunt",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"ware library",
      address:"87 high street",
      cityName:"ware",
      email:"",
      phone:""
    },
    {
      libraryName:"north watford library",
      address:"st albans road",
      cityName:"watford",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"watford library",
      address:"hempstead road",
      cityName:"watford",
      email:"",
      phone:""
    },
    {
      libraryName:"welwyn library",
      address:"civic centre",
      cityName:"welwyn",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"woodhall library",
      address:"cole green lane",
      cityName:"welwyn garden city",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"welwyn garden city library",
      address:"campus west",
      cityName:"welwyn garden city",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"wheathampstead library",
      address:"memorial hall",
      cityName:"wheathamstead",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"caol library",
      address:"glenkingie street",
      cityName:"lochaber",
      email:"",
      phone:""
    },
    {
      libraryName:"ardnamurchan library",
      address:"sunart centre",
      cityName:"lochaber",
      email:"",
      phone:""
    },
    {
      libraryName:"bonar bridge library",
      address:"west end lairg road",
      cityName:"sutherland",
      email:"",
      phone:""
    },
    {
      libraryName:"dornoch library",
      address:"carnegie building",
      cityName:"sutherland",
      email:"",
      phone:""
    },
    {
      libraryName:"lairg library",
      address:"main street",
      cityName:"sutherland",
      email:"",
      phone:""
    },
    {
      libraryName:"bettyhill library",
      address:"naver teleservice centre",
      cityName:"sutherland",
      email:"",
      phone:""
    },
    {
      libraryName:"helmsdale library",
      address:"community centre",
      cityName:"sutherland",
      email:"",
      phone:""
    },
    {
      libraryName:"brora library",
      address:"gower street",
      cityName:"sutherland",
      email:"",
      phone:""
    },
    {
      libraryName:"ardersier library",
      address:"old school",
      cityName:"ardersier",
      email:"",
      phone:""
    },
    {
      libraryName:"beauly library",
      address:"phipps institute",
      cityName:"beauly",
      email:"",
      phone:""
    },
    {
      libraryName:"the highland council, library support unit,",
      address:"31a harbour road",
      cityName:"inverness",
      email:"libraries@highland.gov.uk",
      phone:"01463 235713"
    },
    {
      libraryName:"inverness library",
      address:"farraline park",
      cityName:"inverness",
      email:"",
      phone:""
    },
    {
      libraryName:"inshes library",
      address:"inshes road",
      cityName:"inverness",
      email:"",
      phone:""
    },
    {
      libraryName:"culloden library",
      address:"keppoch road",
      cityName:"inverness",
      email:"",
      phone:""
    },
    {
      libraryName:"castlebay library",
      address:"castlebay community school",
      cityName:"castlebay",
      email:"",
      phone:""
    },
    {
      libraryName:"sgoil lionacleit library",
      address:"sionacleit school",
      cityName:"liniclate",
      email:"",
      phone:""
    },
    {
      libraryName:"rothesay library",
      address:"stuart street",
      cityName:"rothesay",
      email:"",
      phone:""
    },
    {
      libraryName:"millport library",
      address:"garrison house",
      cityName:"millport",
      email:"",
      phone:""
    },
    {
      libraryName:"tarbert library",
      address:"sir e scott school",
      cityName:"tarbert",
      email:"",
      phone:""
    },
    {
      libraryName:"sgoil shiaboist library",
      address:"siaboist school",
      cityName:"shawbost",
      email:"",
      phone:""
    },
    {
      libraryName:"stornoway library",
      address:"19 cromwell street",
      cityName:"stornoway",
      email:"bobeaves@cne-siar.gov.uk",
      phone:"01851 708631"
    },
    {
      libraryName:"douglas public library",
      address:"10-12 victoria street",
      cityName:"douglas",
      email:"",
      phone:""
    },
    {
      libraryName:"onchan public library",
      address:"willow house",
      cityName:"onchan",
      email:"",
      phone:""
    },
    {
      libraryName:"ward library",
      address:"38 castle street",
      cityName:"peel",
      email:"",
      phone:""
    },
    {
      libraryName:"herdman library",
      address:"bridson road",
      cityName:"port erin",
      email:"",
      phone:""
    },
    {
      libraryName:"ramsey cityname library",
      address:"wall street",
      cityName:"ramsey",
      email:"",
      phone:""
    },
    {
      libraryName:"broadford library",
      address:"library/service point",
      cityName:"broadford",
      email:"",
      phone:""
    },
    {
      libraryName:"plockton library",
      address:"village hall",
      cityName:"plockton",
      email:"",
      phone:""
    },
    {
      libraryName:"portree library",
      address:"viewfield road",
      cityName:"portree",
      email:"",
      phone:""
    },
    {
      libraryName:"daliburgh library",
      address:"daliburgh school",
      cityName:"daliburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"bembridge library",
      address:"church road",
      cityName:"bembridge",
      email:"",
      phone:""
    },
    {
      libraryName:"home library service",
      address:"library hq",
      cityName:"cowes",
      email:"bournemouth@bournemouthlibraries.org.uk",
      phone:"01202 454848"
    },
    {
      libraryName:"cowes library",
      address:"beckford road",
      cityName:"cowes",
      email:"",
      phone:"01983 293341"
    },
    {
      libraryName:"east cowes library",
      address:"11 york avenue",
      cityName:"east cowes",
      email:"",
      phone:"01983 293019"
    },
    {
      libraryName:"freshwater library",
      address:"41 school green road",
      cityName:"freshwater",
      email:"",
      phone:"01983 752377"
    },
    {
      libraryName:"lord louis (newport) library",
      address:"orchard street",
      cityName:"newport",
      email:"",
      phone:"01983 527655"
    },
    {
      libraryName:"brighstone library",
      address:"new road",
      cityName:"newport",
      email:"",
      phone:"01983 740150"
    },
    {
      libraryName:"ryde library",
      address:"101 george street",
      cityName:"ryde",
      email:"",
      phone:"01983 562170"
    },
    {
      libraryName:"sandown library",
      address:"high street",
      cityName:"sandown",
      email:"",
      phone:"01983 402748"
    },
    {
      libraryName:"shanklin library",
      address:"victoria avenue",
      cityName:"shanklin",
      email:"",
      phone:"01983 863126"
    },
    {
      libraryName:"niton library",
      address:"high street",
      cityName:"ventnor",
      email:"",
      phone:"01983 730863"
    },
    {
      libraryName:"isle of wight library service, county music library",
      address:"high street",
      cityName:"ventnor",
      email:"",
      phone:"01983 852039"
    },
    {
      libraryName:"ventnor library",
      address:"high street",
      cityName:"ventnor",
      email:"",
      phone:"01983 852039"
    },
    {
      libraryName:"jersey library",
      address:"halkett place",
      cityName:"st helier",
      email:"",
      phone:"01534 759991"
    },
    {
      libraryName:"ashford library",
      address:"church road",
      cityName:"ashford",
      email:"ashfordlibrary@kent.gov.uk",
      phone:"01233 620649"
    },
    {
      libraryName:"ashford library",
      address:"church road",
      cityName:"ashford",
      email:"ashfordlibrary@kent.gov.uk",
      phone:"01233 620649"
    },
    {
      libraryName:"bockhanger library",
      address:"bockhanger community centre",
      cityName:"ashford",
      email:"bockhangerlibrary@kent.gov.uk",
      phone:"01233 624308"
    },
    {
      libraryName:"stanhope library",
      address:"the stanhope centre, 67a otterden close",
      cityName:"ashford",
      email:"stanhopelibrary@kent.gov.uk",
      phone:"01233 627591"
    },
    {
      libraryName:"birchington library",
      address:"alpha road",
      cityName:"birchington",
      email:"birchingtonlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"borough green library",
      address:"high street",
      cityName:"borough green",
      email:"boroughgreenlibrary@kent.gov.uk",
      phone:"01732 884404"
    },
    {
      libraryName:"canterbury library",
      address:"high street",
      cityName:"canterbury",
      email:"canterburylibrary@kent.gov.uk",
      phone:"01227 463608"
    },
    {
      libraryName:"sturry library",
      address:"chafy crescent",
      cityName:"canterbury",
      email:"sturrylibrary@kent.gov.uk",
      phone:"01227 711479"
    },
    {
      libraryName:"swalecliffe library",
      address:"78 herne bay road",
      cityName:"canterbury",
      email:"swalecliffelibrary@kent.gov.uk",
      phone:"01227 792 645"
    },
    {
      libraryName:"ash library",
      address:"ash village hall",
      cityName:"canterbury",
      email:"ashlibrary@kent.gov.uk",
      phone:"01304 812440"
    },
    {
      libraryName:"aylesham library",
      address:"aylesham community centre",
      cityName:"canterbury",
      email:"ayleshamlibrary@kent.gov.uk",
      phone:"01627 605218"
    },
    {
      libraryName:"canterbury library - temporary location",
      address:"35 pound lane",
      cityName:"canterbury",
      email:"canterburylibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"charing library",
      address:"market place",
      cityName:"charing",
      email:"charinglibrary@kent.gov.uk",
      phone:"01233 713177"
    },
    {
      libraryName:"chatham library",
      address:"gun wharf",
      cityName:"chatham",
      email:"chatham.library@medway.gov.uk",
      phone:"01634 337799"
    },
    {
      libraryName:"walderslade village library",
      address:"walderslade centre",
      cityName:"chatham",
      email:"",
      phone:"01634 686467"
    },
    {
      libraryName:"walderslade hook meadow library",
      address:"king george road",
      cityName:"chatham",
      email:"chatham.library@medway.gov.uk.",
      phone:"01634 861531"
    },
    {
      libraryName:"ashen drive library",
      address:"ashen drive",
      cityName:"dartford",
      email:"ashendrivelibrary@kent.gov.uk",
      phone:"01322 223556"
    },
    {
      libraryName:"fleetdown library",
      address:"swaledale road",
      cityName:"dartford",
      email:"fleetdownlibrary@kent.gov.uk",
      phone:"01322 225546"
    },
    {
      libraryName:"temple hill library",
      address:"temple hill square",
      cityName:"dartford",
      email:"templehilllibrary@kent.gov.uk",
      phone:"01322 226013"
    },
    {
      libraryName:"swanscombe library",
      address:"church road",
      cityName:"dartford",
      email:"",
      phone:"01322 382 234"
    },
    {
      libraryName:"greenhithe library",
      address:"london road",
      cityName:"dartford",
      email:"greenhithelibrary@kent.gov.uk",
      phone:"01322 382381"
    },
    {
      libraryName:"swan valley library",
      address:"discovery centre park southfleet",
      cityName:"dartford",
      email:"swanvalleylibrary@kent.gov.uk",
      phone:"01322 623115"
    },
    {
      libraryName:"sutton-at-hone library",
      address:"main road",
      cityName:"dartford",
      email:"suttonathonelibrary@kent.gov.uk",
      phone:"01322 863683"
    },
    {
      libraryName:"dartford library",
      address:"central park",
      cityName:"dartford",
      email:"dartfordlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"deal library",
      address:"broad street",
      cityName:"deal",
      email:"deallibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"whitfield library",
      address:"village hall",
      cityName:"dover",
      email:"whitfield.library@dundeecity.gov.uk",
      phone:"01304 820 039"
    },
    {
      libraryName:"st. margaret's-at-cliffe library",
      address:"community centre",
      cityName:"dover",
      email:"stmargaretsatcliffe@kent.gov.uk",
      phone:"01304 852865"
    },
    {
      libraryName:"dover library",
      address:"dover discovery centre",
      cityName:"dover",
      email:"doverlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"dymchurch library",
      address:"plater memorial hall",
      cityName:"dymchurch",
      email:"dymchurchlibrary@kent.gov.uk",
      phone:"01303 873 894"
    },
    {
      libraryName:"edenbridge library",
      address:"church street",
      cityName:"edenbridge",
      email:"edenbridgelibrary@kent.gov.uk",
      phone:"01732 862600"
    },
    {
      libraryName:"boughton-under-blean library",
      address:"village hall",
      cityName:"faversham",
      email:"boughtonlibrary@kent.gov.uk",
      phone:"01228 751860"
    },
    {
      libraryName:"faversham library",
      address:"newton road",
      cityName:"faversham",
      email:"favershamlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"sandgate library",
      address:"james morris court",
      cityName:"folkestone",
      email:"sandgatelibrary@kent.gov.uk",
      phone:"01303 248563"
    },
    {
      libraryName:"wood avenue library",
      address:"wood avenue",
      cityName:"folkestone",
      email:"woodavenuelibrary@kent.gov.uk",
      phone:"01303 254226"
    },
    {
      libraryName:"lyminge library",
      address:"7-9 station road",
      cityName:"folkestone",
      email:"lymingelibrary@kent.gov.uk",
      phone:"01303 862180"
    },
    {
      libraryName:"folkestone library",
      address:"2 grace hill",
      cityName:"folkestone",
      email:"folkestonelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"wigmore library",
      address:"208 fairview avenue",
      cityName:"gillingham",
      email:"",
      phone:"01634 235576"
    },
    {
      libraryName:"hempstead library",
      address:"hempstead road",
      cityName:"gillingham",
      email:"chatham.library@medway.gov.uk.",
      phone:"01634 361544"
    },
    {
      libraryName:"gillingham library",
      address:"high street",
      cityName:"gillingham",
      email:"",
      phone:"01634 337340"
    },
    {
      libraryName:"kings farm library",
      address:"sun lane",
      cityName:"gravesend",
      email:"kingsfarmlibrary@kent.gov.uk",
      phone:"01474 365491"
    },
    {
      libraryName:"coldharbour library",
      address:"coldharbour road",
      cityName:"gravesend",
      email:"coldharbourlibrary@kent.gov.uk",
      phone:"01474 534787"
    },
    {
      libraryName:"meopham library",
      address:"wrotham road",
      cityName:"gravesend",
      email:"meophamlibrary@kent.gov.uk",
      phone:"01474 814636"
    },
    {
      libraryName:"gravesend library",
      address:"windmill street",
      cityName:"gravesend",
      email:"gravesendlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"dashwood library",
      address:"dashwood road",
      cityName:"gravesham",
      email:"dashwoodlibrary@kent.gov.uk",
      phone:"01474 365489"
    },
    {
      libraryName:"riverview park library",
      address:"the alma",
      cityName:"gravesham",
      email:"riverviewparklibrary@kent.gov.uk",
      phone:"01474 564 181"
    },
    {
      libraryName:"marling cross library",
      address:"266 mackenzie way",
      cityName:"gravesham",
      email:"marlingcrosslibrary@kent.gov.uk",
      phone:"01474 568033"
    },
    {
      libraryName:"hadlow library",
      address:"school lane",
      cityName:"hadlow",
      email:"hadlowlibrary@kent.gov.uk",
      phone:"01732 851794"
    },
    {
      libraryName:"greenhill library",
      address:"greenhill road",
      cityName:"herne bay",
      email:"greenhilllibrary@kent.gov.uk",
      phone:"01227 374 288"
    },
    {
      libraryName:"herne bay library",
      address:"124 high street",
      cityName:"herne bay",
      email:"hernebaylibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"higham library",
      address:"villa road",
      cityName:"higham",
      email:"highamlibrary@kent.gov.uk",
      phone:"01474 823822"
    },
    {
      libraryName:"hythe library",
      address:"1 stade street",
      cityName:"hythe",
      email:"hythelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"longfield library",
      address:"49 main road",
      cityName:"longfield",
      email:"longfieldlibrary@kent.gov.uk",
      phone:"01474 706507"
    },
    {
      libraryName:"allington library",
      address:"castle road",
      cityName:"maidstone",
      email:"allingtonlibrary@kent.gov.uk",
      phone:"01622 683435"
    },
    {
      libraryName:"centre for kentish studies library",
      address:"sessions house",
      cityName:"maidstone",
      email:"archives@kent.gov.uk",
      phone:"01622 696501"
    },
    {
      libraryName:"county central library",
      address:"arts and libraries hq",
      cityName:"maidstone",
      email:"countycentrallibrary@kent.gov.uk",
      phone:"01622 696511"
    },
    {
      libraryName:"madginford library",
      address:"egremont road",
      cityName:"maidstone",
      email:"madginfordlibrary@kent.gov.uk",
      phone:"01622 730631"
    },
    {
      libraryName:"bearsted library",
      address:"the green",
      cityName:"maidstone",
      email:"bearstedlibrary@kent.gov.uk",
      phone:"01622 739774"
    },
    {
      libraryName:"coxheath library",
      address:"heath road",
      cityName:"maidstone",
      email:"coxheathlibrary@kent.gov.uk",
      phone:"01622 744130"
    },
    {
      libraryName:"shepway library",
      address:"17 northumberland court",
      cityName:"maidstone",
      email:"shepwaylibrary@kent.gov.uk",
      phone:"01622 751488"
    },
    {
      libraryName:"lenham library",
      address:"11 the limes",
      cityName:"maidstone",
      email:"lenhamlibrary@kent.gov.uk",
      phone:"01622 859140"
    },
    {
      libraryName:"headcorn library",
      address:"king's road",
      cityName:"maidstone",
      email:"headcornlibrary@kent.gov.uk",
      phone:"01622 890566"
    },
    {
      libraryName:"maidstone library",
      address:"st. faith's street",
      cityName:"maidstone",
      email:"maidstonelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"larkfield library",
      address:"martin square",
      cityName:"maidstone",
      email:"larkfieldlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"marden library",
      address:"high street",
      cityName:"marden",
      email:"mardenlibrary@kent.gov.uk",
      phone:"01622 831619"
    },
    {
      libraryName:"margate library",
      address:"thanet gateway plus",
      cityName:"margate",
      email:"margatelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"cliftonville library",
      address:"queen elizabeth avenue",
      cityName:"margate",
      email:"cliftonvillelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"twydall library",
      address:"14-15 twydall green",
      cityName:"medway",
      email:"",
      phone:"01634 232488"
    },
    {
      libraryName:"rainham library",
      address:"birling avenue",
      cityName:"medway",
      email:"",
      phone:"01634 333854"
    },
    {
      libraryName:"luton library",
      address:"2 nelson terrace",
      cityName:"medway",
      email:"",
      phone:"01634 406923"
    },
    {
      libraryName:"lordswood library",
      address:"kestrel road",
      cityName:"medway",
      email:"",
      phone:"01634 862096"
    },
    {
      libraryName:"minster-in-thanet library",
      address:"4a monkton road",
      cityName:"minster in thanet",
      email:"minsterthanetlibrary@kent.gov.uk",
      phone:"01843 821442"
    },
    {
      libraryName:"new ash green library",
      address:"new ash green",
      cityName:"new ash green",
      email:"newashgreenlibrary@kent.gov.uk",
      phone:"01474 872506"
    },
    {
      libraryName:"new romney library",
      address:"82 high street",
      cityName:"new romney",
      email:"newromneylibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"hive house library",
      address:"10-11 the hive",
      cityName:"northfleet",
      email:"hivehouselibrary@kent.gov.uk",
      phone:"01474 534681"
    },
    {
      libraryName:"paddock wood library",
      address:"9 commercial road",
      cityName:"paddock wood",
      email:"paddockwoodlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"ramsgate library",
      address:"guildford lawn",
      cityName:"ramsgate",
      email:"ramsgatelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"newington library",
      address:"newington library",
      cityName:"ramsgate",
      email:"newingtonlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"hoo library",
      address:"church street",
      cityName:"rochester",
      email:"",
      phone:"01634 250640"
    },
    {
      libraryName:"strood library",
      address:"32 bryant road",
      cityName:"rochester",
      email:"",
      phone:"01634 335890"
    },
    {
      libraryName:"rochester library",
      address:"eastgate",
      cityName:"rochester",
      email:"",
      phone:"01634 337411"
    },
    {
      libraryName:"grain library",
      address:"the chapel",
      cityName:"rochester",
      email:"chatham.library@medway.gov.uk",
      phone:"01634 338727"
    },
    {
      libraryName:"thomas aveling school and community library",
      address:"arethusa road",
      cityName:"rochester",
      email:"",
      phone:"01634 338728"
    },
    {
      libraryName:"cuxton library",
      address:"bush road",
      cityName:"rochester",
      email:"",
      phone:"01634 711391"
    },
    {
      libraryName:"sandwich library",
      address:"13 market street",
      cityName:"sandwich",
      email:"sandwichlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"hartley library",
      address:"ash road",
      cityName:"sevenoaks",
      email:"hartleylibrary@kent.gov.uk",
      phone:"01474 704403"
    },
    {
      libraryName:"st. john's library",
      address:"st. john's primary school",
      cityName:"sevenoaks",
      email:"stjohnslibrary@kent.gov.uk",
      phone:"01732 456623"
    },
    {
      libraryName:"riverhead library",
      address:"31 london road",
      cityName:"sevenoaks",
      email:"riverheadlibrary@kent.gov.uk",
      phone:"01732 459218"
    },
    {
      libraryName:"kemsing library",
      address:"dippers close",
      cityName:"sevenoaks",
      email:"kemsinglibrary@kent.gov.uk",
      phone:"01732 762 99"
    },
    {
      libraryName:"seal library",
      address:"high street",
      cityName:"sevenoaks",
      email:"seallibrary@kent.gov.uk",
      phone:"01732 762510"
    },
    {
      libraryName:"otford library",
      address:"high street",
      cityName:"sevenoaks",
      email:"otfordlibrary@kent.gov.uk",
      phone:"01959 522488"
    },
    {
      libraryName:"sevenoaks library",
      address:"buckhurst lane",
      cityName:"sevenoaks",
      email:"sevenoakslibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"sheerness library",
      address:"sheerness gateway, 38 high street",
      cityName:"sheerness",
      email:"",
      phone:"01795 662618"
    },
    {
      libraryName:"minster-in-sheppey library",
      address:"worcester close",
      cityName:"sheerness",
      email:"minstersheppeylibrary@kent.gov.uk",
      phone:"01795 872363"
    },
    {
      libraryName:"queenborough library",
      address:"railway terrace",
      cityName:"sheppey",
      email:"queenboroughlibrary@kent.gov.uk",
      phone:"01795 663 695"
    },
    {
      libraryName:"lydd library",
      address:"old school",
      cityName:"shepway",
      email:"lyddlibrary@kent.gov.uk",
      phone:"01797 320131"
    },
    {
      libraryName:"cheriton library",
      address:"cheriton high street",
      cityName:"shepway",
      email:"cheritonlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"teynham library",
      address:"131 london road",
      cityName:"sittingbourne",
      email:"teynhamlibrary@kent.gov.uk",
      phone:"01795 521674"
    },
    {
      libraryName:"sittingbourne library",
      address:"central avenue",
      cityName:"sittingbourne",
      email:"sittingbournelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"snodland library",
      address:"15/17 high street",
      cityName:"snodland",
      email:"snodlandlibrary@kent.gov.uk",
      phone:"01634 243776"
    },
    {
      libraryName:"staplehurst library",
      address:"the parade",
      cityName:"staplehurst",
      email:"staplehurstlibrary@kent.gov.uk",
      phone:"01580 891929"
    },
    {
      libraryName:"swanley library",
      address:"london road",
      cityName:"swanley",
      email:"swanleylibrary@kent.gov.uk",
      phone:"01322 662 570"
    },
    {
      libraryName:"tenterden library",
      address:"tenterden gateway",
      cityName:"tenterden",
      email:"tenterdenlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"broadstairs library",
      address:"the broadway",
      cityName:"thanet",
      email:"broadstairslibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"aylesford library",
      address:"community centre,  25 forstal road",
      cityName:"tonbridge",
      email:"",
      phone:"01622 710674"
    },
    {
      libraryName:"east peckham library",
      address:"3 pound road",
      cityName:"tonbridge",
      email:"eastpeckhamlibrary@kent.gov.uk",
      phone:"01622 871050"
    },
    {
      libraryName:"tonbridge north library",
      address:"5 york parade",
      cityName:"tonbridge",
      email:"tonbridgenorthlibrary@kent.gov.uk",
      phone:"01732 351918"
    },
    {
      libraryName:"hildenborough library",
      address:"3 riding lane",
      cityName:"tonbridge",
      email:"hildenboroughlibrary@kent.gov.uk",
      phone:"01732 838729"
    },
    {
      libraryName:"tonbridge library",
      address:"avebury avenue",
      cityName:"tonbridge",
      email:"tonbridgelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"hawkhurst library",
      address:"rye road, highgate",
      cityName:"tunbridge wells",
      email:"hawkhurstlibrary@kent.gov.uk",
      phone:"01580 752064"
    },
    {
      libraryName:"rusthall library",
      address:"high street",
      cityName:"tunbridge wells",
      email:"rusthalllibrary@kent.gov.uk",
      phone:"01892 521667"
    },
    {
      libraryName:"showfields library",
      address:"showfields road",
      cityName:"tunbridge wells",
      email:"showfieldslibrary@kent.gov.uk",
      phone:"01892 53262"
    },
    {
      libraryName:"sherwood library",
      address:"greggs wood road",
      cityName:"tunbridge wells",
      email:"sherwoodlibrary@kent.gov.uk",
      phone:"01892 537639"
    },
    {
      libraryName:"pembury library",
      address:"the hop house",
      cityName:"tunbridge wells",
      email:"pemburylibrary@kent.gov.uk",
      phone:"01892 822278"
    },
    {
      libraryName:"tunbridge wells library",
      address:"mount pleasant road",
      cityName:"tunbridge wells",
      email:"tunbridgewellslibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"cranbrook library",
      address:"carriers road",
      cityName:"tunbridge wells",
      email:"cranbrooklibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"southborough library",
      address:"yew tree road",
      cityName:"tunbridge wells",
      email:"southboroughlibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"vigo library",
      address:"the bay",
      cityName:"vigo",
      email:"vigolibrary@kent.gov.uk",
      phone:"01732 823908"
    },
    {
      libraryName:"west kingsdown library",
      address:"gamecock meadow",
      cityName:"west kingsdown",
      email:"westkingsdownlibrary@kent.gov.uk",
      phone:"01474 854623"
    },
    {
      libraryName:"west malling library",
      address:"22-24 high street",
      cityName:"west malling",
      email:"westmallinglibrary@kent.gov.uk",
      phone:"01732 842504"
    },
    {
      libraryName:"westgate library",
      address:"minster road",
      cityName:"west on sea",
      email:"westgatelibrary@kent.gov.uk",
      phone:"01843 831017"
    },
    {
      libraryName:"westerham library",
      address:"london road",
      cityName:"westerham",
      email:"westerhamlibrary@kent.gov.uk",
      phone:"01959 562326"
    },
    {
      libraryName:"whitstable library",
      address:"31-33 oxford street",
      cityName:"whitstable",
      email:"whitstablelibrary@kent.gov.uk",
      phone:"08458 247200"
    },
    {
      libraryName:"wye library",
      address:"6 upper bridge street",
      cityName:"wye",
      email:"wyelibrary@kent.gov.uk",
      phone:"01223 812699"
    },
    {
      libraryName:"yalding library",
      address:"adin coates house",
      cityName:"yalding",
      email:"yaldinglibrary@kent.gov.uk",
      phone:"01622 817735"
    },
    {
      libraryName:"airdrie library",
      address:"wellwynd",
      cityName:"airdrie",
      email:"",
      phone:""
    },
    {
      libraryName:"petersburn library",
      address:"varnsdorf way",
      cityName:"airdrie",
      email:"",
      phone:""
    },
    {
      libraryName:"chapelhall library",
      address:"2 honeywell crescent",
      cityName:"airdrie",
      email:"",
      phone:""
    },
    {
      libraryName:"bellshill cultural centre library",
      address:"john street",
      cityName:"bellshill",
      email:"",
      phone:""
    },
    {
      libraryName:"coatbridge library",
      address:"126 main street",
      cityName:"coatbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"whifflet library",
      address:"easton place",
      cityName:"coatbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"old monkland library",
      address:"cuparhead avenue",
      cityName:"coatbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"abronhill library",
      address:"17 pine road",
      cityName:"cumbernauld",
      email:"",
      phone:""
    },
    {
      libraryName:"motherwell library",
      address:"35 hamilton road",
      cityName:"motherwell",
      email:"",
      phone:""
    },
    {
      libraryName:"new stevenston library",
      address:"coronation road east",
      cityName:"motherwell",
      email:"",
      phone:""
    },
    {
      libraryName:"newarthill library",
      address:"kirkhall road",
      cityName:"motherwell",
      email:"",
      phone:""
    },
    {
      libraryName:"cleland library",
      address:"main street",
      cityName:"motherwell",
      email:"",
      phone:""
    },
    {
      libraryName:"shotts library",
      address:"benhar road",
      cityName:"shotts",
      email:"",
      phone:""
    },
    {
      libraryName:"wishaw library",
      address:"kenilworth avenue",
      cityName:"wishaw",
      email:"",
      phone:""
    },
    {
      libraryName:"craigneuk library",
      address:"shieldmuir street",
      cityName:"wishaw",
      email:"",
      phone:""
    },
    {
      libraryName:"newmains library",
      address:"manse road",
      cityName:"wishaw",
      email:"",
      phone:""
    },
    {
      libraryName:"oswaldtwistle  library",
      address:"union road",
      cityName:"accrington",
      email:"oswaldtwistle.library@lancashire.gov.uk",
      phone:"01254 233823"
    },
    {
      libraryName:"clayton-le-moors library",
      address:"pickup street",
      cityName:"accrington",
      email:"clayton-le-moors@lancashire.gov.uk",
      phone:"01254 236463"
    },
    {
      libraryName:"accrington library",
      address:"st james' street",
      cityName:"accrington",
      email:"accrington.library@lancashire.gov.uk",
      phone:"01254 872385"
    },
    {
      libraryName:"adlington library",
      address:"railway road",
      cityName:"adlington",
      email:"adlington.library@lancashire.gov.uk",
      phone:"01257 480525"
    },
    {
      libraryName:"bacup library",
      address:"st james square",
      cityName:"bacup",
      email:"bacup.library@lancashire.gov.uk",
      phone:"01706 873 324"
    },
    {
      libraryName:"bamber bridge library",
      address:"station road",
      cityName:"bamber bridge",
      email:"bamber.bridgelibrary@lancashire.gov.uk",
      phone:"01772 335402"
    },
    {
      libraryName:"livesey library",
      address:"cherry tree lane",
      cityName:"blackburn",
      email:"livesey.library@blackburn.gov.uk",
      phone:"01254 209442"
    },
    {
      libraryName:"mill hill library",
      address:"mill hill community centre",
      cityName:"blackburn",
      email:"",
      phone:"01254 266380"
    },
    {
      libraryName:"blackburn central library",
      address:"cityname hall street",
      cityName:"blackburn",
      email:"library@blackburn.gov.uk",
      phone:"01254 661221"
    },
    {
      libraryName:"roman road library",
      address:"fishmoor drive",
      cityName:"blackburn",
      email:"",
      phone:"01254 682347"
    },
    {
      libraryName:"great harwood  library",
      address:"queen street",
      cityName:"blackburn",
      email:"greatharwood.library@lancashire.gov.uk",
      phone:"01254 884 733"
    },
    {
      libraryName:"rishton  library",
      address:"high street",
      cityName:"blackburn",
      email:"rishton.library@lancashire.gov.uk",
      phone:"01254 885 314"
    },
    {
      libraryName:"whalley  library",
      address:"abbey road",
      cityName:"blackburne",
      email:"whalley.library@lancashire.gov.uk",
      phone:"01254 822446"
    },
    {
      libraryName:"thornton library",
      address:"victoria road east",
      cityName:"blackpool",
      email:"thornton.library@lancashire.gov.uk",
      phone:"01253 869136"
    },
    {
      libraryName:"poulton  library",
      address:"blackpool old road",
      cityName:"blackpool",
      email:"poulton.library@lancashire.gov.uk",
      phone:"01253 888 900"
    },
    {
      libraryName:"blackpool central library",
      address:"queen street",
      cityName:"blackpool",
      email:"",
      phone:""
    },
    {
      libraryName:"revoe library",
      address:"1 revoe street",
      cityName:"blackpool",
      email:"",
      phone:""
    },
    {
      libraryName:"bispham library",
      address:"devonshire road",
      cityName:"blackpool",
      email:"",
      phone:""
    },
    {
      libraryName:"layton library",
      address:"talbot road",
      cityName:"blackpool",
      email:"",
      phone:""
    },
    {
      libraryName:"boundary library",
      address:"city learning centre",
      cityName:"blackpool",
      email:"",
      phone:""
    },
    {
      libraryName:"palatine library",
      address:"st. annes road",
      cityName:"blackpool",
      email:"",
      phone:""
    },
    {
      libraryName:"mereside library",
      address:"6 langdale place",
      cityName:"blackpool",
      email:"",
      phone:""
    },
    {
      libraryName:"anchorsholme library",
      address:"luton road",
      cityName:"blackpool",
      email:"",
      phone:""
    },
    {
      libraryName:"highfield library",
      address:"orchards (lower site)",
      cityName:"bolton",
      email:"highfield.library@sheffield.gov.uk",
      phone:"0114 203 7204"
    },
    {
      libraryName:"farnworth library",
      address:"market street",
      cityName:"bolton",
      email:"",
      phone:"01204 332344"
    },
    {
      libraryName:"astley bridge library",
      address:"moss bank way",
      cityName:"bolton",
      email:"",
      phone:"01204 332350"
    },
    {
      libraryName:"high street library",
      address:"high street",
      cityName:"bolton",
      email:"",
      phone:"01204 332358"
    },
    {
      libraryName:"little lever library",
      address:"coronation square",
      cityName:"bolton",
      email:"",
      phone:"01204 332360"
    },
    {
      libraryName:"bolton central library",
      address:"le mans crescent",
      cityName:"bolton",
      email:"libraries@bolton.gov.uk",
      phone:"01204 333173"
    },
    {
      libraryName:"westhoughton library",
      address:"library street",
      cityName:"bolton",
      email:"westhoughton.library@bolton.gov.uk",
      phone:"01942 634643"
    },
    {
      libraryName:"breightmet library",
      address:"breightmet health centre",
      cityName:"bolton",
      email:"",
      phone:"1203 332352"
    },
    {
      libraryName:"oxford grove library",
      address:"105 shepherd cross street",
      cityName:"bolton",
      email:"",
      phone:""
    },
    {
      libraryName:"castle hill library",
      address:"castle hill centre",
      cityName:"bolton",
      email:"",
      phone:""
    },
    {
      libraryName:"harwood library",
      address:"gate fold",
      cityName:"bolton",
      email:"",
      phone:""
    },
    {
      libraryName:"withins library",
      address:"bolton st catherines academy",
      cityName:"bolton",
      email:"",
      phone:""
    },
    {
      libraryName:"blackrod library",
      address:"church street",
      cityName:"bolton",
      email:"",
      phone:""
    },
    {
      libraryName:"horwich library",
      address:"jones street",
      cityName:"bolton",
      email:"",
      phone:""
    },
    {
      libraryName:"bromley cross library",
      address:"the crescent",
      cityName:"bolton",
      email:"",
      phone:""
    },
    {
      libraryName:"rosegrove  library",
      address:"lowerhouse lane",
      cityName:"burnley",
      email:"rosegrove.library@lancashire.gov.uk",
      phone:"01282 423620"
    },
    {
      libraryName:"pike hill  library",
      address:"langwyth road",
      cityName:"burnley",
      email:"pikehill.library@lancashire.gov.uk",
      phone:"01282 428 828"
    },
    {
      libraryName:"briercliffe library",
      address:"jubilee street",
      cityName:"burnley",
      email:"briercliffe.library@lancashire.gov.uk",
      phone:"01282 433540"
    },
    {
      libraryName:"coal clough library",
      address:"coal clough lane",
      cityName:"burnley",
      email:"coalclough.library@lancashire.gov.uk",
      phone:"01282 435 573"
    },
    {
      libraryName:"burnley library",
      address:"grimshaw street",
      cityName:"burnley",
      email:"burnley.library@lancashire.gov.uk",
      phone:"01282 437115"
    },
    {
      libraryName:"burnley campus library",
      address:"community library",
      cityName:"burnley",
      email:"burnleycampuslibrary@lancashire.gov.uk",
      phone:"01282 682273"
    },
    {
      libraryName:"wheatley lane  library",
      address:"wheatley close",
      cityName:"burnley",
      email:"wheatleylane.library@lancashire.gov.uk",
      phone:"01282 693160"
    },
    {
      libraryName:"padiham  library",
      address:"cityname hall",
      cityName:"burnley",
      email:"padiham.library@lancashire.gov.uk",
      phone:"01282 771 640"
    },
    {
      libraryName:"read  library",
      address:"41 whalley road",
      cityName:"burnley",
      email:"read.library@lancashire.gov.uk",
      phone:"01282 773672"
    },
    {
      libraryName:"ainsworth library",
      address:"church street",
      cityName:"bury",
      email:"ainsworth.lib@bury.gov.uk",
      phone:"0161 253 5886"
    },
    {
      libraryName:"moorside community centre and library",
      address:"parkinson street",
      cityName:"bury",
      email:"",
      phone:"0161 253 6471"
    },
    {
      libraryName:"silverdale library",
      address:"25 emesgate lane",
      cityName:"carnforth",
      email:"silverdale.library@lancashire.gov.uk",
      phone:"01524 701156"
    },
    {
      libraryName:"warton library",
      address:"westover avenue",
      cityName:"carnforth",
      email:"warton-lancaster.library@lcl.lancscc.gov.uk",
      phone:"01524 732 947"
    },
    {
      libraryName:"carnforth library",
      address:"lancaster road",
      cityName:"carnforth",
      email:"carnforth.library@lancashire.gov.uk",
      phone:"01524 732815"
    },
    {
      libraryName:"bolton-le-sands library",
      address:"main road",
      cityName:"carnforth",
      email:"boltonlesands.library@lancashire.gov.uk",
      phone:"01524 823906"
    },
    {
      libraryName:"chatburn library",
      address:"sawley road",
      cityName:"chatburn",
      email:"chatburn.library@lancashire.gov.uk",
      phone:"01200 441 047"
    },
    {
      libraryName:"euxton  library",
      address:"st marys gate",
      cityName:"chorley",
      email:"euxton.library@lancashire.gov.uk",
      phone:"01257 265430"
    },
    {
      libraryName:"eccleston  library",
      address:"the green",
      cityName:"chorley",
      email:"eccleston.library@lancashire.gov.uk",
      phone:"01257 451825"
    },
    {
      libraryName:"coppull library",
      address:"spendmore lane",
      cityName:"chorley",
      email:"coppull.library@lancashire.gov.uk",
      phone:"01257 791 426"
    },
    {
      libraryName:"clayton green library",
      address:"library road",
      cityName:"chorley",
      email:"clayton-green.library@lancashire.gov.uk",
      phone:"01772 321820"
    },
    {
      libraryName:"clitheroe library",
      address:"church street",
      cityName:"clitheroe",
      email:"clitheroe.library@lancashire.gov.uk",
      phone:"01200 428 788"
    },
    {
      libraryName:"barnoldswick library",
      address:"fern lea avenue",
      cityName:"colne",
      email:"barnoldswick.library@lancashire.gov.uk",
      phone:"01282 812 147"
    },
    {
      libraryName:"trawden  library",
      address:"church street",
      cityName:"colne",
      email:"trawden.library@lancashire.gov.uk",
      phone:"01282 866806"
    },
    {
      libraryName:"colne library",
      address:"market street",
      cityName:"colne",
      email:"colne.library@lancashire.gov.uk",
      phone:"01282 871 155"
    },
    {
      libraryName:"darwen library",
      address:"knott street",
      cityName:"darwen",
      email:"darwen.library@blackburn.gov.uk",
      phone:"01254 706021"
    },
    {
      libraryName:"earby  library",
      address:"coronation hall",
      cityName:"earby",
      email:"earby.library@lancashire.gov.uk",
      phone:"01282 843470"
    },
    {
      libraryName:"chatsworth library",
      address:"chatsworth avenue",
      cityName:"fleetwood",
      email:"chatsworth.library@lancashire.gov.uk",
      phone:"01253 771 601"
    },
    {
      libraryName:"fleetwood  library",
      address:"north albert street",
      cityName:"fleetwood",
      email:"fleetwood.library@lancashire.gov.uk",
      phone:"01253 775 800"
    },
    {
      libraryName:"fulwood  library",
      address:"garstang road",
      cityName:"fulwood",
      email:"fulwood.library@lancashire.gov.uk",
      phone:"01772 719 082"
    },
    {
      libraryName:"lytham  library",
      address:"27 clifton street",
      cityName:"fylde",
      email:"lytham.library@lancashire.gov.uk",
      phone:"01253 736 745"
    },
    {
      libraryName:"ansdell library",
      address:"59 commonside",
      cityName:"fylde",
      email:"ansdell.library@lancashire.gov.uk",
      phone:"01253 738554"
    },
    {
      libraryName:"haslingden  library",
      address:"deardengate",
      cityName:"haslingden",
      email:"haslingden.library@lancashire.gov.uk",
      phone:"01706 215 690"
    },
    {
      libraryName:"knott end  library",
      address:"lancaster road",
      cityName:"knott end on sea",
      email:"knottend.library@lancashire.gov.uk",
      phone:"01253  810632"
    },
    {
      libraryName:"lancaster  library",
      address:"market square",
      cityName:"lancaster",
      email:"lancaster.library@lancashire.gov.uk",
      phone:"01524 580 710"
    },
    {
      libraryName:"halton  library",
      address:"pennystone road",
      cityName:"lancaster",
      email:"halton.library@lancashire.gov.uk",
      phone:"01524 811 265"
    },
    {
      libraryName:"chorley library",
      address:"union street",
      cityName:"lancs",
      email:"chorley.library@lancashire.gov.uk",
      phone:"01257 277 222"
    },
    {
      libraryName:"leyland  library",
      address:"lancastergate",
      cityName:"leyland",
      email:"leyland.library@lancashire.gov.uk",
      phone:"01772 432 804"
    },
    {
      libraryName:"morecambe library",
      address:"central drive",
      cityName:"morecambe",
      email:"morecambe.library@lancashire.gov.uk",
      phone:"01524 415 215"
    },
    {
      libraryName:"heysham library",
      address:"396-398 heysham road",
      cityName:"morecambe",
      email:"heysham.library@lancashire.gov.uk",
      phone:"01524 851530"
    },
    {
      libraryName:"barrowford library",
      address:"ann street",
      cityName:"nelson",
      email:"barrowford.library@lancashire.gov.uk",
      phone:"01282 613 038"
    },
    {
      libraryName:"brierfield library",
      address:"colne road",
      cityName:"nelson",
      email:"brierfield.library@lancashire.gov.uk",
      phone:"01282 615816"
    },
    {
      libraryName:"nelson  library",
      address:"market square",
      cityName:"nelson",
      email:"nelson.library@lancashire.gov.uk",
      phone:"01282 692511"
    },
    {
      libraryName:"ormskirk  library",
      address:"burscough street",
      cityName:"ormskirk",
      email:"ormskirk.library@lancashire.gov.uk",
      phone:"01695 573448"
    },
    {
      libraryName:"burscough library",
      address:"mill lane",
      cityName:"ormskirk",
      email:"burscough.library@lancashire.gov.uk",
      phone:"01704 892334"
    },
    {
      libraryName:"gregson lane trailer  library",
      address:"community centre car park",
      cityName:"preston",
      email:"claytongreen.library@lancashire.gov.uk",
      phone:"01772 321820"
    },
    {
      libraryName:"preston harris  library",
      address:"market square",
      cityName:"preston",
      email:"harris.library@lancashire.gov.uk",
      phone:"01772 532676"
    },
    {
      libraryName:"freckleton  library",
      address:"preston old road",
      cityName:"preston",
      email:"freckleton.library@lancashire.gov.uk",
      phone:"01772 635 321"
    },
    {
      libraryName:"kirkham  library",
      address:"station road",
      cityName:"preston",
      email:"kirkham.library@lancashire.gov.uk",
      phone:"01772 684479"
    },
    {
      libraryName:"sharoe green  library",
      address:"8 sharoe green lane",
      cityName:"preston",
      email:"sharoegreen.library@lancashire.gov.uk",
      phone:"01772 719071"
    },
    {
      libraryName:"ingol  library",
      address:"ventnor place",
      cityName:"preston",
      email:"ingol.library@lancashhire.gov.uk",
      phone:"01772 720483"
    },
    {
      libraryName:"savick  library",
      address:"west park avenue",
      cityName:"preston",
      email:"savick.library@lancashire.gov.uk",
      phone:"01772 729119"
    },
    {
      libraryName:"kingsfold  library",
      address:"hawksbury drive",
      cityName:"preston",
      email:"kingsfold.library@lcl.lancscc.gov.uk",
      phone:"01772 744 457"
    },
    {
      libraryName:"penwortham  library",
      address:"liverpool road",
      cityName:"preston",
      email:"penwortham.library@lancashire.gov.uk",
      phone:"01772 744331"
    },
    {
      libraryName:"longridge  library",
      address:"berry lane",
      cityName:"preston",
      email:"longridge.library@lancashire.gov.uk",
      phone:"01772 786 668"
    },
    {
      libraryName:"ribbleton  library",
      address:"ribbleton hall drive",
      cityName:"preston",
      email:"ribbleton.library@lancashire.gov.uk",
      phone:"01772 792 632"
    },
    {
      libraryName:"tarleton  library",
      address:"market square",
      cityName:"preston",
      email:"tarleton.library@lcl.lancscc.gov.uk",
      phone:"01772 815 179"
    },
    {
      libraryName:"garstang  library",
      address:"windsor road",
      cityName:"preston",
      email:"garstang.library@lancashire.gov.uk",
      phone:"01995 604 052"
    },
    {
      libraryName:"croston trailer library",
      address:"out lane",
      cityName:"preston",
      email:"",
      phone:""
    },
    {
      libraryName:"rawtenstall  library",
      address:"queen's square",
      cityName:"rawtenstall",
      email:"rawtenstall.library@lancashire.gov.uk",
      phone:"01706 227 911"
    },
    {
      libraryName:"mellor library",
      address:"st mary's gardens",
      cityName:"ribble valley",
      email:"mellor.library@lancashire.gov.uk",
      phone:"01254 812 821"
    },
    {
      libraryName:"whitworth library",
      address:"lloyd street",
      cityName:"rochdale",
      email:"whitworth.library@lancashire.gov.uk",
      phone:"01706 853 261"
    },
    {
      libraryName:"crawshawbooth  library",
      address:"adelaide street",
      cityName:"rossendale",
      email:"crawshawbooth.library@lancashire.gov.uk",
      phone:"01706 224269"
    },
    {
      libraryName:"upholland  library",
      address:"hall green",
      cityName:"skelmersdale",
      email:"upholland.library@lancashire.gov.uk",
      phone:"01695 622368"
    },
    {
      libraryName:"skelmersdale  library",
      address:"southway",
      cityName:"skelmersdale",
      email:"skelmersdale.library@lancashire.gov.uk",
      phone:"01695 720312"
    },
    {
      libraryName:"lostock hall  library",
      address:"watkin lane",
      cityName:"south ribble",
      email:"lostockhall.library@lancashire.gov.uk",
      phone:"01772 339 775"
    },
    {
      libraryName:"longton  library",
      address:"liverpool road",
      cityName:"south ribble",
      email:"longton.library@lancashire.gov.uk",
      phone:"01772 617 401"
    },
    {
      libraryName:"banks trailer library",
      address:"st stephens institute car park",
      cityName:"southport",
      email:"",
      phone:""
    },
    {
      libraryName:"st annes  library",
      address:"254 clifton drive south",
      cityName:"st annes",
      email:"st-annes.library@lancashire.gov.uk",
      phone:"01253 643900"
    },
    {
      libraryName:"cleveleys library",
      address:"rossall road",
      cityName:"thornton cleveleys",
      email:"cleveleys.library@lancashire.gov.uk",
      phone:"01253 852 114"
    },
    {
      libraryName:"parbold  library",
      address:"the common",
      cityName:"wigan",
      email:"parbold.library@lancashire.gov.uk",
      phone:"01257 463769"
    },
    {
      libraryName:"ashby-de-la-zouch library",
      address:"north street",
      cityName:"ashby de la zouch",
      email:"ashbydelazouchlibrary@leics.gov.uk",
      phone:"0116 305 5917"
    },
    {
      libraryName:"barwell library",
      address:"barwell library",
      cityName:"barwell",
      email:"barwelllibrary@leics.gov.uk",
      phone:"0116 3053547"
    },
    {
      libraryName:"birstall library",
      address:"wanlip lane",
      cityName:"birstall",
      email:"birstalllibrary@leics.gov.uk",
      phone:"0116 3058756"
    },
    {
      libraryName:"blaby library",
      address:"lutterworth road",
      cityName:"blaby",
      email:"blabylibrary@leics.gov.uk",
      phone:"0116 3053516"
    },
    {
      libraryName:"braunstone cityname library",
      address:"braunstone civic centre",
      cityName:"braunstone cityname",
      email:"braunstonecitynamelibrary@leics.gov.uk",
      phone:"0116 3055900"
    },
    {
      libraryName:"broughton astley library",
      address:"main street",
      cityName:"broughton astley",
      email:"broughtonastleylibrary@leics.gov.uk",
      phone:"0116 3053553"
    },
    {
      libraryName:"castle donington library",
      address:"delven lane",
      cityName:"castle donington",
      email:"castledoningtonlibrary@leics.gov.uk",
      phone:"0116 305 3561"
    },
    {
      libraryName:"loughborough library",
      address:"granby street",
      cityName:"charnwood",
      email:"loughboroughlibrary@leics.gov.uk",
      phone:"0116 3052420"
    },
    {
      libraryName:"coalville library",
      address:"3 high street",
      cityName:"coalville",
      email:"coalvillelibrary@leics.gov.uk",
      phone:"0116 3053565"
    },
    {
      libraryName:"cosby library",
      address:"park road",
      cityName:"cosby",
      email:"cosbylibrary@leics.gov.uk",
      phone:"0116 305 8764"
    },
    {
      libraryName:"desford library",
      address:"main street",
      cityName:"desford",
      email:"desfordlibrary@leics.gov.uk",
      phone:"0116 305 3581"
    },
    {
      libraryName:"earl shilton library",
      address:"wood street",
      cityName:"earl shilton",
      email:"earlshiltonlibrary@leics.gov.uk",
      phone:"0116 305 8392"
    },
    {
      libraryName:"enderby library",
      address:"citynamesend road",
      cityName:"enderby",
      email:"enderbylibrary@leics.gov.uk",
      phone:"0116 3053 523"
    },
    {
      libraryName:"fleckney library",
      address:"school street",
      cityName:"fleckney",
      email:"fleckneylibrary@leics.gov.uk",
      phone:"0116 3053585"
    },
    {
      libraryName:"glenfield library",
      address:"sandown court",
      cityName:"glenfield",
      email:"glenfieldlibrary@leics.gov.uk",
      phone:"0116 3053591"
    },
    {
      libraryName:"county hall library",
      address:"leicester road",
      cityName:"glenfield",
      email:"",
      phone:""
    },
    {
      libraryName:"great glen library",
      address:"rupert's way",
      cityName:"great glen",
      email:"greatglenlibrary@leics.gov.uk",
      phone:"0116 3053597"
    },
    {
      libraryName:"groby library",
      address:"leicester road",
      cityName:"groby",
      email:"grobylibrary@leics.gov.uk",
      phone:"0116 3053601"
    },
    {
      libraryName:"countesthorpe library",
      address:"station road",
      cityName:"harborough",
      email:"countesthorpelibrary@leics.gov.uk",
      phone:"0116 305 3527"
    },
    {
      libraryName:"hinckley library",
      address:"lancaster road",
      cityName:"hinckley",
      email:"hinckleylibrary@leics.gov.uk",
      phone:"0116 3052500"
    },
    {
      libraryName:"burbage library",
      address:"church street",
      cityName:"hinckley",
      email:"burbagelibrary@leics.gov.uk",
      phone:"0116 3053558"
    },
    {
      libraryName:"ibstock library",
      address:"community college",
      cityName:"ibstock",
      email:"ibstocklibrary@leics.gov.uk",
      phone:"0116 3053608"
    },
    {
      libraryName:"kibworth library",
      address:"paget street",
      cityName:"kibworth",
      email:"kibworthlibrary@leics.gov.uk",
      phone:"0116 3053612"
    },
    {
      libraryName:"kirby muxloe library",
      address:"station road",
      cityName:"kirby muxloe",
      email:"kirbymuxloelibrary@leics.gov.uk",
      phone:"0116 3053714"
    },
    {
      libraryName:"evington library",
      address:"200 evington lane",
      cityName:"leicester",
      email:"evington.lib@leicester.gov.uk",
      phone:"(0116) 221 1286"
    },
    {
      libraryName:"knighton library",
      address:"clarendon park road",
      cityName:"leicester",
      email:"knighton.lib@leicester.gov.uk",
      phone:"(0116) 299 5477"
    },
    {
      libraryName:"highfields library",
      address:"98 melbourne road",
      cityName:"leicester",
      email:"highfields.lib@leicester.gov.uk",
      phone:"(0116) 299 5494"
    },
    {
      libraryName:"belgrave library",
      address:"cossington street",
      cityName:"leicester",
      email:"libraries@leicester.gov.uk",
      phone:"(0116) 299 5500"
    },
    {
      libraryName:"hamilton library and learning centre",
      address:"maidenwell ave",
      cityName:"leicester",
      email:"hamilton.lib@leicester.gov.uk",
      phone:"0116 2212790"
    },
    {
      libraryName:"leicester city council, multicultural and re centre library",
      address:"eastern annex, county hall",
      cityName:"leicester",
      email:"",
      phone:"0116 222 2600"
    },
    {
      libraryName:"st matthews library",
      address:"st matthews centre",
      cityName:"leicester",
      email:"stmatthews.lib@leicester.gov.uk",
      phone:"0116 223 2085"
    },
    {
      libraryName:"fosse library",
      address:"mantle road",
      cityName:"leicester",
      email:"fosse.lib@leicester.gov.uk",
      phone:"0116 225 4995"
    },
    {
      libraryName:"new parks library",
      address:"321 aikman avenue",
      cityName:"leicester",
      email:"newparks.lib@leicester.gov.uk",
      phone:"0116 2298200"
    },
    {
      libraryName:"rushey mead library",
      address:"lockerbie walk",
      cityName:"leicester",
      email:"rusheymead.lib@leicester.gov.uk",
      phone:"0116 266 5112"
    },
    {
      libraryName:"aylestone library",
      address:"richmond road",
      cityName:"leicester",
      email:"aylestone.lib@leicester.gov.uk",
      phone:"0116 283 2540"
    },
    {
      libraryName:"thurnby lodge library",
      address:"thurncourt road",
      cityName:"leicester",
      email:"",
      phone:"0116 292 4550"
    },
    {
      libraryName:"st barnabas library",
      address:"french road",
      cityName:"leicester",
      email:"barnabas.lib@leicester.gov.uk",
      phone:"0116 299 5450"
    },
    {
      libraryName:"beaumont leys library",
      address:"beaumont way",
      cityName:"leicester",
      email:"beaumontleys.lib@leicester.gov.uk",
      phone:"0116 299 5460"
    },
    {
      libraryName:"braunstone library at the brite centre",
      address:"braunstone avenue",
      cityName:"leicester",
      email:"braunstone.lib@leicester.gov.uk",
      phone:"0116 299 5476"
    },
    {
      libraryName:"southfields library",
      address:"saffron lane",
      cityName:"leicester",
      email:"southfields.lib@leicester.gov.uk",
      phone:"0116 299 5480"
    },
    {
      libraryName:"westcotes library",
      address:"narborough road",
      cityName:"leicester",
      email:"westcotes.lib@leicester.gov.uk",
      phone:"0116 299 5510"
    },
    {
      libraryName:"stocking farm library",
      address:"stocking farm community centre",
      cityName:"leicester",
      email:"libraries@leicester.gov.uk",
      phone:"0116 299 5646"
    },
    {
      libraryName:"central lending library",
      address:"bishop street",
      cityName:"leicester",
      email:"librarylearningcentre@leicester.gov.uk",
      phone:"0116 2995401"
    },
    {
      libraryName:"glenhills library",
      address:"glen parva parish hall",
      cityName:"leicester",
      email:"glenhillslibrary@leics.gov.uk",
      phone:"0116 305 3530"
    },
    {
      libraryName:"anstey library",
      address:"paper mill close",
      cityName:"leicester",
      email:"ansteylibrary@leics.gov.uk",
      phone:"0116 305 3536"
    },
    {
      libraryName:"oadby library",
      address:"10 the parade",
      cityName:"leicester",
      email:"oadbylibrary@leics.gov.uk",
      phone:"0116 305 8763"
    },
    {
      libraryName:"leicester forest east library",
      address:"holmfield avenue west",
      cityName:"leicester",
      email:"leicesterforesteastlibrary@leics.gov.uk",
      phone:"0116 3053616"
    },
    {
      libraryName:"east goscote library",
      address:"20 ling dale",
      cityName:"leicester",
      email:"eastgoscotelibrary@leics.gov.uk",
      phone:"0116305 3510"
    },
    {
      libraryName:"humberstone library",
      address:"keyham close",
      cityName:"leicester",
      email:"",
      phone:""
    },
    {
      libraryName:"netherhall library",
      address:"117-119 netherhall road",
      cityName:"leicester",
      email:"",
      phone:""
    },
    {
      libraryName:"barrow upon soar library",
      address:"north street",
      cityName:"loughborough",
      email:"barrowuponsoarlibrary@leics.gov.uk",
      phone:"0116 3053543"
    },
    {
      libraryName:"hathern library",
      address:"greenhill",
      cityName:"loughborough",
      email:"hathernlibrary@leics.gov.uk",
      phone:"0116 3053605"
    },
    {
      libraryName:"sileby library",
      address:"cossington road",
      cityName:"loughborough",
      email:"silebylibrary@leics.gov.uk",
      phone:"0116 3053683"
    },
    {
      libraryName:"sutton bonington library",
      address:"village hall",
      cityName:"loughborough",
      email:"suttonbonington.library@nottscc.gov.uk",
      phone:"01509 674 472"
    },
    {
      libraryName:"east leake library",
      address:"gotham road",
      cityName:"loughborough",
      email:"eastleake.library@nottscc.gov.uk",
      phone:"01509 852 349"
    },
    {
      libraryName:"lutterworth library",
      address:"george street",
      cityName:"lutterworth",
      email:"lutterworthlibrary@leics.gov.uk",
      phone:"0116 3053619"
    },
    {
      libraryName:"market harborough library",
      address:"adam and eve street",
      cityName:"market harborough",
      email:"marketharboroughlibrary@leics.gov.uk",
      phone:"0116 3053627"
    },
    {
      libraryName:"hmp gartree library",
      address:"gallow field road",
      cityName:"market harborough",
      email:"",
      phone:""
    },
    {
      libraryName:"markfield library",
      address:"oakfield avenue",
      cityName:"markfield",
      email:"markfieldlibrary@leics.gov.uk",
      phone:"0116 3053642"
    },
    {
      libraryName:"asfordby ict centre, melton libraries",
      address:"asfordby village hall",
      cityName:"melton mowbray",
      email:"asfordbyictcentre@leics.gov.uk",
      phone:"0116 305 3540"
    },
    {
      libraryName:"melton mowbray library",
      address:"wilton road",
      cityName:"melton mowbray",
      email:"meltonmowbraylibrary@leics.gov.uk",
      phone:"0116 3053646"
    },
    {
      libraryName:"mountsorrel library",
      address:"church house",
      cityName:"mountsorrel",
      email:"mountsorrellibrary@leics.gov.uk",
      phone:"0116 305 5892"
    },
    {
      libraryName:"narborough library",
      address:"narborough library",
      cityName:"narborough",
      email:"narboroughlibrary@leics.gov.uk",
      phone:"0116 3053706"
    },
    {
      libraryName:"newbold verdon library",
      address:"sparkenhoe",
      cityName:"newbold verdon",
      email:"newboldverdonlibrary@leics.gov.uk",
      phone:"0116 3053661"
    },
    {
      libraryName:"market bosworth library",
      address:"station road",
      cityName:"nuneaton",
      email:"marketbosworthlibrary@leics.gov.uk",
      phone:"0116 305 3624"
    },
    {
      libraryName:"quorn library",
      address:"rawlins community college",
      cityName:"quorn",
      email:"quornlibrary@leics.gov.uk",
      phone:"0116 305 3665"
    },
    {
      libraryName:"ratby library",
      address:"main street",
      cityName:"ratby",
      email:"ratbylibrary@leics.gov.uk",
      phone:"0116 3053668"
    },
    {
      libraryName:"rothley library",
      address:"mountsorrel lane",
      cityName:"rothley",
      email:"rothleylibrary@leics.gov.uk",
      phone:"0116 3053671"
    },
    {
      libraryName:"leics. library services",
      address:"929-931 loughborough road",
      cityName:"rothley",
      email:"",
      phone:""
    },
    {
      libraryName:"sapcote library",
      address:"church street",
      cityName:"sapcote",
      email:"sapcotelibrary@leics.gov.uk",
      phone:"0116 305 3674"
    },
    {
      libraryName:"shepshed library",
      address:"hall croft",
      cityName:"shepshed",
      email:"shepshedlibrary@leics.gov.uk",
      phone:"0116 3053678"
    },
    {
      libraryName:"stoney stanton library",
      address:"st michaels court",
      cityName:"stoney stanton",
      email:"stoneystantonlibrary@leics.gov.uk",
      phone:"0116 305 3686"
    },
    {
      libraryName:"syston library",
      address:"upper church street",
      cityName:"syston",
      email:"systonlibrary@leics.gov.uk",
      phone:"0116 3053500"
    },
    {
      libraryName:"thurmaston library",
      address:"church hill road",
      cityName:"thurmaston",
      email:"thurmastonlibrary@leics.gov.uk",
      phone:"0116 305 3513"
    },
    {
      libraryName:"wigston magna library",
      address:"bull head street",
      cityName:"wigston",
      email:"wigstonlibrary@leics.gov.uk",
      phone:"0116 305 3689"
    },
    {
      libraryName:"south wigston library",
      address:"bassett street",
      cityName:"wigston",
      email:"southwigstonlibrary@leics.gov.uk",
      phone:"0116 3053533"
    },
    {
      libraryName:"hm yoc glen parva library",
      address:"hm yoc glen parva",
      cityName:"wigston",
      email:"",
      phone:""
    },
    {
      libraryName:"alford library",
      address:"6 south market place",
      cityName:"alford",
      email:"alford.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"goxhill library",
      address:"the parish room",
      cityName:"barton upon humber",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01469 531554"
    },
    {
      libraryName:"barton library",
      address:"providence house",
      cityName:"barton upon humber",
      email:"",
      phone:"0300 3008054"
    },
    {
      libraryName:"kirton library",
      address:"station road",
      cityName:"boston",
      email:"kirton.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"boston library",
      address:"county hall",
      cityName:"boston",
      email:"boston.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"bourne library",
      address:"10 south street",
      cityName:"bourne",
      email:"bourne.library@lincoln.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"branston community library",
      address:"branston community college",
      cityName:"branston",
      email:"branston.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"brigg library",
      address:"23 old courts road",
      cityName:"brigg",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01652 657006"
    },
    {
      libraryName:"caistor library",
      address:"caistor arts heritage centre",
      cityName:"caistor",
      email:"caistor.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"cleethorpes library",
      address:"alexandra road",
      cityName:"cleethorpes",
      email:"",
      phone:"01472 323648323650"
    },
    {
      libraryName:"haxey library",
      address:"the memorial hall",
      cityName:"doncaster",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01427 753239"
    },
    {
      libraryName:"epworth library",
      address:"chapel street",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"gainsborough library",
      address:"cobden street",
      cityName:"gainsborough",
      email:"gainsborough.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"scotter library",
      address:"eau community centre",
      cityName:"gainsborough",
      email:"scotter.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"kirton lindsey library",
      address:"20 king edward street",
      cityName:"gainsborough",
      email:"",
      phone:""
    },
    {
      libraryName:"grantham library",
      address:"isaac newton centre",
      cityName:"grantham",
      email:"grantham.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"grimsby central library",
      address:"cityname hall square",
      cityName:"grimsby",
      email:"customerrequests@nelincs.gov.uk",
      phone:"01472 323600"
    },
    {
      libraryName:"grant thorold library",
      address:"durban road",
      cityName:"grimsby",
      email:"",
      phone:""
    },
    {
      libraryName:"nunsthorpe library",
      address:"sutcliffe avenue",
      cityName:"grimsby",
      email:"",
      phone:""
    },
    {
      libraryName:"willows library",
      address:"binbrook way",
      cityName:"grimsby",
      email:"",
      phone:""
    },
    {
      libraryName:"horncastle library",
      address:"wharf road",
      cityName:"horncastle",
      email:"horncastle.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"humberston library",
      address:"church lane",
      cityName:"humberston",
      email:"",
      phone:""
    },
    {
      libraryName:"immingham library",
      address:"pelham road",
      cityName:"immingham",
      email:"",
      phone:"01469 51605"
    },
    {
      libraryName:"keelby library",
      address:"victoria road",
      cityName:"keelby",
      email:"keelby.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"laceby library",
      address:"cooper lane",
      cityName:"laceby",
      email:"",
      phone:""
    },
    {
      libraryName:"saxilby library",
      address:"highfield road",
      cityName:"lincoln",
      email:"saxilby.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"lincoln central library",
      address:"free school lane",
      cityName:"lincoln",
      email:"lincoln.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"ermine library",
      address:"ravendale drive",
      cityName:"lincoln",
      email:"ermine.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"nettleham library",
      address:"1 east street",
      cityName:"lincoln",
      email:"nettleham.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"welton library",
      address:"cliff road",
      cityName:"lincoln",
      email:"welton.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"cherry willingham library",
      address:"the parade",
      cityName:"lincoln",
      email:"cherry_willingham.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"bracebridge heath library",
      address:"london road",
      cityName:"lincoln",
      email:"bracebridge_heath.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"metheringham library",
      address:"high street",
      cityName:"lincoln",
      email:"metheringham.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"bracebridgelibrary",
      address:"newark road",
      cityName:"lincoln",
      email:"bracebridge.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"waddington library",
      address:"lower high street",
      cityName:"lincoln",
      email:"waddington.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"birchwood library",
      address:"jasmin road",
      cityName:"lincoln",
      email:"birchwood.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"skellingthorpe library",
      address:"church road",
      cityName:"lincoln",
      email:"skellingthorpe.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"boultham library",
      address:"boultham park road",
      cityName:"lincoln",
      email:"boultham.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"north hykeham library",
      address:"middle street",
      cityName:"lincoln",
      email:"north_hykeham.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"birchwood access and training centre library",
      address:"unit 2",
      cityName:"lincoln",
      email:"",
      phone:""
    },
    {
      libraryName:"louth library",
      address:"northgate",
      cityName:"louth",
      email:"louth.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"mablethorpe library",
      address:"community access point",
      cityName:"mablethorpe",
      email:"mablethorpe.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"sutton on sea library",
      address:"broadway",
      cityName:"mablethorpe",
      email:"sutton_on_sea.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"market rasen library",
      address:"mill road",
      cityName:"market rasen",
      email:"market_rasen.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"washinborough library",
      address:"school lane",
      cityName:"north kesteven",
      email:"washingborough.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"scartho learning centre and library",
      address:"st. giles avenue",
      cityName:"scartho",
      email:"",
      phone:"01472 323638"
    },
    {
      libraryName:"crowle library",
      address:"52-54 high street",
      cityName:"scunthorpe",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01724 296850"
    },
    {
      libraryName:"winterton library",
      address:"west street",
      cityName:"scunthorpe",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01724 734179"
    },
    {
      libraryName:"messingham library",
      address:"wendover road",
      cityName:"scunthorpe",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01724 763182"
    },
    {
      libraryName:"scunthorpe central library",
      address:"carlton street",
      cityName:"scunthorpe",
      email:"",
      phone:"01724 860161"
    },
    {
      libraryName:"westcliff library",
      address:"swinburne road",
      cityName:"scunthorpe",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01724 860605"
    },
    {
      libraryName:"riddings library",
      address:"willoughby road",
      cityName:"scunthorpe",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"01724 865412"
    },
    {
      libraryName:"ashby library",
      address:"107 high street",
      cityName:"scunthorpe",
      email:"library.enquiries@northlincs.gov.uk",
      phone:"1723 296832"
    },
    {
      libraryName:"park library",
      address:"avenue vivian",
      cityName:"scunthorpe",
      email:"",
      phone:""
    },
    {
      libraryName:"wainfleet library",
      address:"st john street",
      cityName:"skegness",
      email:"wainfleet.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"burgh le marsh library",
      address:"old school house",
      cityName:"skegness",
      email:"burghlemarsh.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"skegness library",
      address:"23 roman bank",
      cityName:"skegness",
      email:"skegness.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"sleaford library",
      address:"13-16 market place",
      cityName:"sleaford",
      email:"sleaford.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"ruskington library",
      address:"station road",
      cityName:"sleaford",
      email:"ruskington.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"spalding library",
      address:"victoria street",
      cityName:"spalding",
      email:"spalding.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"donington library",
      address:"25 high street",
      cityName:"spalding",
      email:"donington.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"holbeach library",
      address:"church street",
      cityName:"spalding",
      email:"holbeach.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"long sutton library",
      address:"trafalgar square",
      cityName:"spalding",
      email:"longsutton.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"pinchbeck library",
      address:"pinchbeck study centre, 48 knight street",
      cityName:"spalding",
      email:"spalding.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"sutton bridge library",
      address:"closed 2005",
      cityName:"spalding",
      email:"",
      phone:""
    },
    {
      libraryName:"spilsby library",
      address:"2 west end villas",
      cityName:"spilsby",
      email:"spilsby.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"stamford library",
      address:"high street",
      cityName:"stamford",
      email:"stamford.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"coningsby/tattershall library",
      address:"butt lane",
      cityName:"tattershall",
      email:"coningsby.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"waltham library",
      address:"high street",
      cityName:"waltham",
      email:"",
      phone:"01472 323656"
    },
    {
      libraryName:"woodhall spa library",
      address:"2 station road",
      cityName:"woodhall spa",
      email:"woodhall_spa.library@lincolnshire.gov.uk",
      phone:"01522 782010"
    },
    {
      libraryName:"fort william library",
      address:"airds crossing",
      cityName:"fort william",
      email:"",
      phone:""
    },
    {
      libraryName:"kinlochleven library",
      address:"riverside road",
      cityName:"kinlochleven",
      email:"",
      phone:""
    },
    {
      libraryName:"knoydart library",
      address:"the store",
      cityName:"knoydart",
      email:"",
      phone:""
    },
    {
      libraryName:"kyle or lochalsh library",
      address:"main street",
      cityName:"kyle",
      email:"",
      phone:""
    },
    {
      libraryName:"mallaig library",
      address:"mallaig and morar community centre",
      cityName:"mallaig",
      email:"",
      phone:""
    },
    {
      libraryName:"blue anchor library",
      address:"market place",
      cityName:"bermondsey",
      email:"blueanchor.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"john harvard library",
      address:"211 borough high street",
      cityName:"borough",
      email:"johnharvard.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"camberwell library",
      address:"17-21 camberwell church street",
      cityName:"camberwell",
      email:"camberwell.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"keith axon centre library",
      address:"160-170 grove road",
      cityName:"chadwell heath",
      email:"",
      phone:""
    },
    {
      libraryName:"grove vale library",
      address:"25-27 grove vale",
      cityName:"east dulwich",
      email:"grovevale.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"city of london libraries, city business library",
      address:"1 brewers' hall garden",
      cityName:"london",
      email:"cbl@cityoflondon.gov.uk",
      phone:"020 7332 1812, text phone 020 7332 3803"
    },
    {
      libraryName:"kingswood library",
      address:"seeley drive",
      cityName:"london",
      email:"kingswood.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"donald hope library",
      address:"cavendish house",
      cityName:"london",
      email:"donaldhope.library@merton.gov.uk",
      phone:"020 8274 5799"
    },
    {
      libraryName:"lewisham library",
      address:"199-201 lewisham high street",
      cityName:"london",
      email:"libraries@lewisham.gov.uk",
      phone:"020 8314 6399"
    },
    {
      libraryName:"east ham library",
      address:"high street south",
      cityName:"london",
      email:"",
      phone:"020 8430 3648"
    },
    {
      libraryName:"north woolwich library",
      address:"5 pier parade",
      cityName:"london",
      email:"",
      phone:"020 8430 5900"
    },
    {
      libraryName:"manor park library",
      address:"romford road",
      cityName:"london",
      email:"",
      phone:"020 84302207"
    },
    {
      libraryName:"the gate library",
      address:"4-20 woodgrange road",
      cityName:"london",
      email:"",
      phone:"020 84303838"
    },
    {
      libraryName:"stratford library",
      address:"3 the grove",
      cityName:"london",
      email:"",
      phone:"020 84306886"
    },
    {
      libraryName:"camomile street library",
      address:"12-20 camomile street",
      cityName:"london",
      email:"camomile@cityoflondon.gov.uk",
      phone:"0207247 8895"
    },
    {
      libraryName:"custom house library",
      address:"prince regent lane",
      cityName:"london",
      email:"",
      phone:"0207476 1565"
    },
    {
      libraryName:"canning cityname library",
      address:"barking road",
      cityName:"london",
      email:"",
      phone:"0207476 2696"
    },
    {
      libraryName:"shoe lane library",
      address:"hill house",
      cityName:"london",
      email:"shoelane@cityoflondon.gov.uk",
      phone:"0207583 7178"
    },
    {
      libraryName:"barbican library",
      address:"barbican centre",
      cityName:"london",
      email:"barbicanlib@cityoflondon.gov.uk",
      phone:"0207638 0569"
    },
    {
      libraryName:"dulwich library",
      address:"368 lordship lane",
      cityName:"london",
      email:"southwark.libraries@southwark.gov.uk",
      phone:"0208 693 5171"
    },
    {
      libraryName:"raynes park library",
      address:"approach road",
      cityName:"london",
      email:"raynespark.library@merton.gov.uk",
      phone:"0208274 5718"
    },
    {
      libraryName:"wimbledon library",
      address:"35 wimbledon hill road",
      cityName:"london",
      email:"wimbledon.library@merton.gov.uk",
      phone:"0208274 5757"
    },
    {
      libraryName:"plaistow library",
      address:"north street",
      cityName:"london",
      email:"",
      phone:"0208472 0420"
    },
    {
      libraryName:"green street library",
      address:"337-341 green street",
      cityName:"london",
      email:"",
      phone:"0208472 4101"
    },
    {
      libraryName:"beckton globe library",
      address:"1 kingsford way",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"guildhall library",
      address:"aldermanbury",
      cityName:"london",
      email:"",
      phone:""
    },
    {
      libraryName:"nunhead library",
      address:"gordon road",
      cityName:"nunhead",
      email:"nunhead.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"peckham library",
      address:"122 peckham hill street",
      cityName:"peckham",
      email:"peckham.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"east street library",
      address:"168-170 old kent road",
      cityName:"walworth",
      email:"david.watkins@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"newington library",
      address:"155-157 walworth road",
      cityName:"walworth",
      email:"newington.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"brandon library",
      address:"maddock way",
      cityName:"walworth",
      email:"brandon.library@southwark.gov.uk",
      phone:"020 7525 2000"
    },
    {
      libraryName:"bebington central library",
      address:"civic way",
      cityName:"bebington",
      email:"bebington@wirral-libraries.net",
      phone:"0151 643 7224"
    },
    {
      libraryName:"birkenhead central library",
      address:"borough road",
      cityName:"birkenhead",
      email:"birkenhead.ref@wirral-library.net",
      phone:"0151 652 6106"
    },
    {
      libraryName:"bootle library",
      address:"220 stanley road",
      cityName:"bootle",
      email:"bootle.library@sefton.gov.uk",
      phone:"0151 9345781"
    },
    {
      libraryName:"college road library",
      address:"college road",
      cityName:"crosby",
      email:"college-road.library@sefton.gov.uk",
      phone:"0151 9245287"
    },
    {
      libraryName:"formby library",
      address:"duke street",
      cityName:"formby",
      email:"formby.library@sefton.gov.uk",
      phone:"01704 874177"
    },
    {
      libraryName:"haydock east library",
      address:"church road",
      cityName:"haydock st. helens",
      email:"haydocklibrary@sthelens.gov.uk",
      phone:"01744 677801"
    },
    {
      libraryName:"higher bebington library",
      address:"higher bebington road",
      cityName:"higher bebington",
      email:"higher.bebington@wirral-libraries.net",
      phone:"0151 608 3430"
    },
    {
      libraryName:"huyton library",
      address:"civic way",
      cityName:"huyton",
      email:"huyton.library.dlcs@knowsley.gov.uk",
      phone:"0151 443 3734"
    },
    {
      libraryName:"kirkby library",
      address:"newcityname gardens",
      cityName:"kirkby",
      email:"",
      phone:""
    },
    {
      libraryName:"halewood library",
      address:"the halewood centre",
      cityName:"knowsley",
      email:"halewood.library.dlcs@knowsley.gov.uk",
      phone:"0151 443 2086"
    },
    {
      libraryName:"larkhill library",
      address:"queens drive",
      cityName:"larkhill",
      email:"larkhill.library@liverpool.gov.uk",
      phone:"0151 2262 057"
    },
    {
      libraryName:"lee valley library",
      address:"lee valley millennium centre",
      cityName:"liverpool",
      email:"leevalley.library@liverpool.gov.uk",
      phone:"0151 233 1950"
    },
    {
      libraryName:"parklands library",
      address:"conleach road",
      cityName:"liverpool",
      email:"speke.library@liverpool.gov.uk",
      phone:"0151 233 2265"
    },
    {
      libraryName:"fazakerley library",
      address:"formosa drive",
      cityName:"liverpool",
      email:"fazakerley.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"norris green library",
      address:"citynamesend avenue",
      cityName:"liverpool",
      email:"norrisgreen.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"old swan library",
      address:"prescot road",
      cityName:"liverpool",
      email:"oldswan.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"wavertree library",
      address:"picton road",
      cityName:"liverpool",
      email:"wavertree.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"childwall library",
      address:"childwall fiveways",
      cityName:"liverpool",
      email:"childwall.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"sefton park library",
      address:"aigburth road",
      cityName:"liverpool",
      email:"seftonpark.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"allerton library",
      address:"allerton road",
      cityName:"liverpool",
      email:"allerton.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"garston library",
      address:"bowden road",
      cityName:"liverpool",
      email:"garston.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"hunts cross library (closed)",
      address:"hunts cross school",
      cityName:"liverpool",
      email:"huntscross.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"woolton library",
      address:"allerton road",
      cityName:"liverpool",
      email:"woolton.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"spellow library",
      address:"county road",
      cityName:"liverpool",
      email:"spellow.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"great homer street  library",
      address:"great homer street",
      cityName:"liverpool",
      email:"ghomer.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"breck road library",
      address:"8-10 the mall",
      cityName:"liverpool",
      email:"breck.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"kensington library",
      address:"kensington",
      cityName:"liverpool",
      email:"kensington.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"edge hill library",
      address:"lodge lane",
      cityName:"liverpool",
      email:"edgehill.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"toxteth library",
      address:"windsor street",
      cityName:"liverpool",
      email:"toxteth.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"walton library",
      address:"evered avenue",
      cityName:"liverpool",
      email:"walton.library@liverpool.gov.uk",
      phone:"0151 233 3000"
    },
    {
      libraryName:"liverpool central library (temporary city service)",
      address:"horseshoe gallery",
      cityName:"liverpool",
      email:"libraries.enquiries@liverpool.gov.uk",
      phone:"0151 233 5835"
    },
    {
      libraryName:"dovecot library",
      address:"dovecot multi activity centre",
      cityName:"liverpool",
      email:"dovecotlibrary@liverpool.gov.uk",
      phone:"0151 233 6455"
    },
    {
      libraryName:"crosby library",
      address:"crosby road north",
      cityName:"liverpool",
      email:"crosby.library@sefton.gov.uk",
      phone:"0151 2576400"
    },
    {
      libraryName:"netherton library",
      address:"glover's lane",
      cityName:"liverpool",
      email:"netherton.library@sefton.gov.uk",
      phone:"0151 5250607"
    },
    {
      libraryName:"aintree library",
      address:"altway",
      cityName:"liverpool",
      email:"aintree.library@sefton.gov.uk",
      phone:"0151 5268503"
    },
    {
      libraryName:"orrell library",
      address:"linacre lane",
      cityName:"liverpool",
      email:"orrell.library@sefton.gov.uk",
      phone:"0151 922 3843"
    },
    {
      libraryName:"litherland library",
      address:"linacre road",
      cityName:"liverpool",
      email:"litherland.library@sefton.gov.uk",
      phone:"0151 9281357"
    },
    {
      libraryName:"croxteth library",
      address:"the communiversity",
      cityName:"liverpool",
      email:"",
      phone:"0151 233 2228"
    },
    {
      libraryName:"meadows library",
      address:"meadows leisure centre",
      cityName:"maghull",
      email:"maghull.library@sefton.gov.uk",
      phone:"0151 2886727"
    },
    {
      libraryName:"moreton library",
      address:"pasture road",
      cityName:"moreton",
      email:"moreton@wirral-libraries.net",
      phone:"0151 677 5165"
    },
    {
      libraryName:"newton-le-willows library",
      address:"crow lane east",
      cityName:"newton-le-willows",
      email:"newtonlewillowslibrary@sthelens.gov.uk",
      phone:"01744 677885"
    },
    {
      libraryName:"garswood library",
      address:"school lane",
      cityName:"north wigan",
      email:"garswoodlibrary@sthelens.gov.uk",
      phone:"01744 677797"
    },
    {
      libraryName:"page moss library",
      address:"stockbridge lane",
      cityName:"page moss",
      email:"page.moss.library.dlcs@knowsley.gov.uk",
      phone:"0151 489 9814"
    },
    {
      libraryName:"pensby library",
      address:"pensby road",
      cityName:"pensby",
      email:"pensby@wirral-libraries.net",
      phone:"0151 648 4537"
    },
    {
      libraryName:"prescot library",
      address:"high street",
      cityName:"prescot",
      email:"prescot.library.dlcs@knowsley.gov.uk",
      phone:"0151 426 6449"
    },
    {
      libraryName:"southport library",
      address:"tulketh street",
      cityName:"southport",
      email:"southport.library@sefton.gov.uk",
      phone:"0151 9342118"
    },
    {
      libraryName:"churchcityname library",
      address:"mill lane",
      cityName:"southport",
      email:"churchcityname.library@sefton.gov.uk",
      phone:"01704 228678"
    },
    {
      libraryName:"birkdale library",
      address:"240-242 liverpool road",
      cityName:"southport",
      email:"birkdale.library@sefton.gov.uk",
      phone:"01704 567380"
    },
    {
      libraryName:"ainsdale library",
      address:"liverpool avenue",
      cityName:"southport",
      email:"ainsdale.library@sefton.gov.uk",
      phone:"01704 577345"
    },
    {
      libraryName:"chester lane library",
      address:"four acre lane",
      cityName:"st helens",
      email:"",
      phone:"01744 677081"
    },
    {
      libraryName:"rainhill library",
      address:"view road",
      cityName:"st helens",
      email:"",
      phone:""
    },
    {
      libraryName:"st. helens central library",
      address:"victoria square",
      cityName:"st helens",
      email:"",
      phone:""
    },
    {
      libraryName:"peter street library",
      address:"peter street",
      cityName:"st helens",
      email:"",
      phone:""
    },
    {
      libraryName:"thatto heath library",
      address:"thatto heath road",
      cityName:"st helens",
      email:"",
      phone:""
    },
    {
      libraryName:"moss bank library",
      address:"bowness avenue",
      cityName:"st helens",
      email:"",
      phone:""
    },
    {
      libraryName:"rainford library",
      address:"church road",
      cityName:"st helens",
      email:"",
      phone:""
    },
    {
      libraryName:"parr library",
      address:"fleet lane",
      cityName:"st helens",
      email:"",
      phone:""
    },
    {
      libraryName:"stockbridge village library",
      address:"the witherns",
      cityName:"stockbridge village",
      email:"",
      phone:""
    },
    {
      libraryName:"whiston library",
      address:"dragon lane",
      cityName:"whiston",
      email:"whiston.library.dlcs@knowsley.gov.uk",
      phone:"0151 426 4757"
    },
    {
      libraryName:"eastham library",
      address:"mill park drive",
      cityName:"wirral",
      email:"eastham@wirral-libraries.net",
      phone:"0151 327 2289"
    },
    {
      libraryName:"heswall library",
      address:"telegraph road",
      cityName:"wirral",
      email:"heswall@wirral-libraries.net",
      phone:"0151 342 4552"
    },
    {
      libraryName:"hoylake library",
      address:"market street",
      cityName:"wirral",
      email:"hoylake@wirral-libraries.net",
      phone:"0151 632 2754"
    },
    {
      libraryName:"wallasey village library",
      address:"st. georges road",
      cityName:"wirral",
      email:"wallasey.village@wirral-libraries.net",
      phone:"0151 638 1024"
    },
    {
      libraryName:"leasowe library",
      address:"twickenham drive",
      cityName:"wirral",
      email:"leasowe@wirral-libraries.net",
      phone:"0151 638 4013"
    },
    {
      libraryName:"seacombe library",
      address:"liscard road",
      cityName:"wirral",
      email:"seacombe@wirral-libraries.net",
      phone:"0151 638 4475"
    },
    {
      libraryName:"wallasey central library",
      address:"earlston road",
      cityName:"wirral",
      email:"wallasey@wirral-libraries.net",
      phone:"0151 639 2334"
    },
    {
      libraryName:"rock ferry library",
      address:"259 old chester road",
      cityName:"wirral",
      email:"rock.ferry@wirral-libraries.net",
      phone:"0151 641 2858"
    },
    {
      libraryName:"new ferry library",
      address:"grove street junior school",
      cityName:"wirral",
      email:"new.ferry@wirral-libraries.net",
      phone:"0151 643 8465"
    },
    {
      libraryName:"irby library",
      address:"thurstaston road",
      cityName:"wirral",
      email:"irby@wirral-libraries.net",
      phone:"0151 648 1348"
    },
    {
      libraryName:"beechwood library",
      address:"8 beechwood drive",
      cityName:"wirral",
      email:"beechwood@wirral-libraries.net",
      phone:"0151 677 3360"
    },
    {
      libraryName:"woodchurch library",
      address:"ganneys meadow early years site",
      cityName:"wirral",
      email:"woodchurch@wirral-libraries.net",
      phone:"0151 677 8068"
    },
    {
      libraryName:"west kirby library",
      address:"the concourse",
      cityName:"wirral",
      email:"west.kirby@wirral-libraries.net",
      phone:"0151 929 7808"
    },
    {
      libraryName:"ridgeway library",
      address:"ridgeway high school",
      cityName:"wirral",
      email:"spotland.library@rochdale.gov.uk",
      phone:"0845 121 2976"
    },
    {
      libraryName:"st. james library",
      address:"laird street",
      cityName:"wirral",
      email:"",
      phone:""
    },
    {
      libraryName:"prenton library",
      address:"17/19 dickens avenue",
      cityName:"wirral",
      email:"",
      phone:""
    },
    {
      libraryName:"greasby library",
      address:"greasby road",
      cityName:"wirral",
      email:"",
      phone:""
    },
    {
      libraryName:"bromborough library",
      address:"allport lane",
      cityName:"wirral",
      email:"",
      phone:""
    },
    {
      libraryName:"merthyr central library",
      address:"high street",
      cityName:"merthyr tydfil",
      email:"library.services@merthyr.gov.uk",
      phone:"01685 723057"
    },
    {
      libraryName:"treharris library",
      address:"perrott street",
      cityName:"merthyr tydfil",
      email:"",
      phone:""
    },
    {
      libraryName:"dowlais library",
      address:"church street",
      cityName:"merthyr tydfil",
      email:"",
      phone:""
    },
    {
      libraryName:"bonnyrigg library",
      address:"polton street",
      cityName:"bonnyrigg",
      email:"",
      phone:""
    },
    {
      libraryName:"dalkeith library",
      address:"white hart street",
      cityName:"dalkeith",
      email:"",
      phone:""
    },
    {
      libraryName:"woodburn library",
      address:"6 woodburn road",
      cityName:"dalkeith",
      email:"",
      phone:""
    },
    {
      libraryName:"danderhall library",
      address:"1a campview",
      cityName:"danderhall",
      email:"",
      phone:""
    },
    {
      libraryName:"gorebridge library",
      address:"hunterfield road",
      cityName:"gorebridge",
      email:"",
      phone:""
    },
    {
      libraryName:"loanhead library",
      address:"george avenue",
      cityName:"loanhead",
      email:"",
      phone:""
    },
    {
      libraryName:"newtongrange library",
      address:"st davids",
      cityName:"newtongrange",
      email:"",
      phone:""
    },
    {
      libraryName:"penicuik library",
      address:"bellmans road",
      cityName:"penicuik",
      email:"",
      phone:""
    },
    {
      libraryName:"roslin library",
      address:"9 main street",
      cityName:"roslin",
      email:"",
      phone:""
    },
    {
      libraryName:"abergavenny library",
      address:"baker street",
      cityName:"abergavenny",
      email:"",
      phone:""
    },
    {
      libraryName:"caldicot library",
      address:"woodstock way",
      cityName:"caldicott",
      email:"",
      phone:""
    },
    {
      libraryName:"chepstow library",
      address:"manor way",
      cityName:"chepstow",
      email:"",
      phone:""
    },
    {
      libraryName:"gilwern library",
      address:"village hall",
      cityName:"gilwern",
      email:"",
      phone:""
    },
    {
      libraryName:"monmouth library",
      address:"the rolls hall",
      cityName:"monmouth",
      email:"monmouthlibrary@monmouthshire.gov.uk",
      phone:"01600 775215"
    },
    {
      libraryName:"newport central library",
      address:"john frost square",
      cityName:"newport",
      email:"central.library@newport.gov.uk",
      phone:"01633 656656"
    },
    {
      libraryName:"rogerstone library",
      address:"tregwilym road",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"caerleon library",
      address:"coldbath road",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"maindee library",
      address:"chepstow road",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"ringland library",
      address:"ringland centre",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"st julians community learning and library centre",
      address:"beaufort road",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"pillgwenlly library",
      address:"temple street",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"stow hill library",
      address:"226 stow hill",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"bettws library",
      address:"shopping centre",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"malpas library",
      address:"pillmawr road",
      cityName:"newport",
      email:"",
      phone:""
    },
    {
      libraryName:"usk library",
      address:"18a maryport street",
      cityName:"usk",
      email:"",
      phone:""
    },
    {
      libraryName:"aberlour library",
      address:"94 high street",
      cityName:"aberlour",
      email:"",
      phone:""
    },
    {
      libraryName:"buckie library",
      address:"cluny place",
      cityName:"buckie",
      email:"",
      phone:""
    },
    {
      libraryName:"burghead library",
      address:"16 grant street",
      cityName:"burghead",
      email:"",
      phone:""
    },
    {
      libraryName:"cullen library",
      address:"seafield road",
      cityName:"cullen",
      email:"",
      phone:""
    },
    {
      libraryName:"duffcityname library",
      address:"balvenie street",
      cityName:"duffcityname",
      email:"",
      phone:""
    },
    {
      libraryName:"findochty library",
      address:"findochty primary school",
      cityName:"findochty",
      email:"",
      phone:""
    },
    {
      libraryName:"fochabers library",
      address:"west street",
      cityName:"fochabers",
      email:"",
      phone:""
    },
    {
      libraryName:"forres library",
      address:"forres house",
      cityName:"forres",
      email:"",
      phone:""
    },
    {
      libraryName:"keith library",
      address:"union street",
      cityName:"keith",
      email:"",
      phone:""
    },
    {
      libraryName:"lossiemouth library",
      address:"cityname hall lane",
      cityName:"lossiemouth",
      email:"",
      phone:""
    },
    {
      libraryName:"elgin library",
      address:"cooper park",
      cityName:"moray",
      email:"",
      phone:""
    },
    {
      libraryName:"portknockie library",
      address:"portnockie primary school",
      cityName:"portnockie",
      email:"",
      phone:""
    },
    {
      libraryName:"rothes library",
      address:"rothes primary school",
      cityName:"rothes",
      email:"",
      phone:""
    },
    {
      libraryName:"hopeman library",
      address:"hopeman primary school",
      cityName:"school road",
      email:"",
      phone:""
    },
    {
      libraryName:"tomintoul library",
      address:"tomintoul school",
      cityName:"tomintoul",
      email:"",
      phone:""
    },
    {
      libraryName:"nairn library",
      address:"68 high street",
      cityName:"nairn",
      email:"",
      phone:""
    },
    {
      libraryName:"gwaun cae gurwen library",
      address:"new community hall",
      cityName:"ammanford",
      email:"",
      phone:""
    },
    {
      libraryName:"cwmllynfell library",
      address:"gwilym road",
      cityName:"cwmllynfell",
      email:"",
      phone:""
    },
    {
      libraryName:"neath library",
      address:"victoria gardens",
      cityName:"neath",
      email:"neath.library@neath-porttalbot.gov.uk",
      phone:"01639 644604635017"
    },
    {
      libraryName:"skewen library",
      address:"new road",
      cityName:"neath",
      email:"",
      phone:""
    },
    {
      libraryName:"crynant library",
      address:"community centre",
      cityName:"neath",
      email:"",
      phone:""
    },
    {
      libraryName:"briton ferry library",
      address:"neath road",
      cityName:"neath",
      email:"",
      phone:""
    },
    {
      libraryName:"resolven library",
      address:"neath road",
      cityName:"neath",
      email:"",
      phone:""
    },
    {
      libraryName:"glynneath library",
      address:"park avenue",
      cityName:"neath",
      email:"",
      phone:""
    },
    {
      libraryName:"pontardawe library",
      address:"holly street",
      cityName:"pontardawe",
      email:"",
      phone:""
    },
    {
      libraryName:"port talbot library",
      address:"1st floor",
      cityName:"port talbot",
      email:"port.ref.library@npt.gov.uk",
      phone:"01639 7634901"
    },
    {
      libraryName:"sandfields library",
      address:"morrison road",
      cityName:"port talbot",
      email:"",
      phone:""
    },
    {
      libraryName:"baglan library",
      address:"laurel avenue",
      cityName:"port talbot",
      email:"",
      phone:""
    },
    {
      libraryName:"cwmafan library",
      address:"depot road",
      cityName:"port talbot",
      email:"",
      phone:""
    },
    {
      libraryName:"cymmer afan library",
      address:"station road",
      cityName:"port talbot",
      email:"",
      phone:""
    },
    {
      libraryName:"blaengwynfi library",
      address:"welfare hall",
      cityName:"port talbot",
      email:"",
      phone:""
    },
    {
      libraryName:"acle library",
      address:"bridewell lane",
      cityName:"acle",
      email:"acle.lib@norfolk.gov.uk",
      phone:"01493 750 693"
    },
    {
      libraryName:"attleborough library",
      address:"31 connaught road",
      cityName:"attleborough",
      email:"attleborough.lib@norfolk.gov.uk",
      phone:"01953 452 319"
    },
    {
      libraryName:"aylsham library",
      address:"7 hungate street",
      cityName:"aylsham",
      email:"aylsham.lib@norfolk.gov.uk",
      phone:"01263 732 320"
    },
    {
      libraryName:"blofield library",
      address:"the reading room",
      cityName:"blofield",
      email:"blofield.lib@norfolk.gov.uk",
      phone:"01603 712 902"
    },
    {
      libraryName:"thetford library",
      address:"raymond street",
      cityName:"breckland",
      email:"thetford.lib@norfolk.gov.uk",
      phone:"01842 752 048"
    },
    {
      libraryName:"hingham library",
      address:"the fairland",
      cityName:"breckland",
      email:"hingham.lib@norfolk.gov.uk",
      phone:"01953 850 621"
    },
    {
      libraryName:"taverham library",
      address:"taverham library",
      cityName:"broadland",
      email:"taverham.lib@norfolk.gov.uk",
      phone:"01603 260 545"
    },
    {
      libraryName:"sprowston library",
      address:"recreation ground road",
      cityName:"broadland",
      email:"sprowston.lib@norfolk.gov.uk",
      phone:"01603 408 426"
    },
    {
      libraryName:"hellesdon library",
      address:"woodview road",
      cityName:"broadland",
      email:"hellesdon.lib@norfolk.gov.uk",
      phone:"01603 427 790"
    },
    {
      libraryName:"brundall library",
      address:"90 the street",
      cityName:"broadland",
      email:"brundall.lib@norfolk.gov.uk",
      phone:"01603 714 576"
    },
    {
      libraryName:"costessey library",
      address:"breckland road",
      cityName:"costessey",
      email:"costessey.lib@norfolk.gov.uk",
      phone:"01603 742 669"
    },
    {
      libraryName:"cromer library",
      address:"prince of wales road",
      cityName:"cromer",
      email:"cromer.lib@norfolk.gov.uk",
      phone:"01263 512 850"
    },
    {
      libraryName:"dereham library",
      address:"59 high street",
      cityName:"dereham",
      email:"dereham.lib@norfolk.gov.uk",
      phone:"01362 693 184"
    },
    {
      libraryName:"dersingham library",
      address:"chapel road",
      cityName:"dersingham",
      email:"dersingham.lib@norfolk.gov.uk",
      phone:"01485 540 181"
    },
    {
      libraryName:"diss library",
      address:"church street",
      cityName:"diss",
      email:"diss.lib@norfolk.gov.uk",
      phone:"01379 642 609"
    },
    {
      libraryName:"downham market library",
      address:"the priory centre",
      cityName:"downham market",
      email:"downham.lib@norfolk.gov.uk",
      phone:"01366 383 073"
    },
    {
      libraryName:"fakenham library",
      address:"oak street",
      cityName:"fakenham",
      email:"fakenham.lib@norfolk.gov.uk",
      phone:"01328 862 715"
    },
    {
      libraryName:"gorleston library",
      address:"lowestoft road",
      cityName:"great yarmouth",
      email:"gorleston.lib@norfolk.gov.uk",
      phone:"01493 662 156"
    },
    {
      libraryName:"caister-on-sea library",
      address:"beach road",
      cityName:"great yarmouth",
      email:"caister.lib@norfolk.gov.uk",
      phone:"01493 720 594"
    },
    {
      libraryName:"martham library",
      address:"black street",
      cityName:"great yarmouth",
      email:"martham.lib@norfolk.gov.uk",
      phone:"01493 740 212"
    },
    {
      libraryName:"great yarmouth library",
      address:"tolhouse street",
      cityName:"great yarmouth",
      email:"yarmouth.lib@norfolk.gov.uk",
      phone:"01493 844 551"
    },
    {
      libraryName:"harleston library",
      address:"swan lane",
      cityName:"harleston",
      email:"harleston.lib@norfolk.gov.uk",
      phone:"01379 852 549"
    },
    {
      libraryName:"holt library",
      address:"9 church street",
      cityName:"holt",
      email:"holt.lib@norfolk.gov.uk",
      phone:"01263 712 202"
    },
    {
      libraryName:"hunstanton library",
      address:"westgate",
      cityName:"king's lynn",
      email:"hunstanton.lib@norfolk.gov.uk",
      phone:"01485 532 280"
    },
    {
      libraryName:"gaywood library",
      address:"river lane",
      cityName:"king's lynn",
      email:"gaywood.lib@norfolk.gov.uk",
      phone:"01553 768498"
    },
    {
      libraryName:"kings lynn library",
      address:"london road",
      cityName:"king's lynn",
      email:"kings.lynn.lib@norfolk.gov.uk",
      phone:"01553 772 568"
    },
    {
      libraryName:"loddon library",
      address:"31 church plain",
      cityName:"loddon",
      email:"loddon.lib@norfolk.gov.uk",
      phone:"01508 520 678"
    },
    {
      libraryName:"north walsham library",
      address:"new road",
      cityName:"north walsham",
      email:"north.walsham.lib@norfolk.gov.uk",
      phone:"01692 402 482"
    },
    {
      libraryName:"mundesley library",
      address:"18 cromer road",
      cityName:"norwich",
      email:"mundesley.lib@norfolk.gov.uk",
      phone:"01263 720 702"
    },
    {
      libraryName:"poringland library",
      address:"overtons way",
      cityName:"norwich",
      email:"poringland.lib@norfolk.gov.uk",
      phone:"01508 494891"
    },
    {
      libraryName:"long stratton library",
      address:"the street",
      cityName:"norwich",
      email:"long.stratton.lib@norfolk.gov.uk",
      phone:"01508 530 797"
    },
    {
      libraryName:"mile cross library",
      address:"aylsham road",
      cityName:"norwich",
      email:"mile.cross.lib@norfolk.gov.uk",
      phone:"01603 425 906"
    },
    {
      libraryName:"plumstead road library",
      address:"plumstead road",
      cityName:"norwich",
      email:"plumstead.road.lib@norfolk.gov.uk",
      phone:"01603 433 455"
    },
    {
      libraryName:"st williams way library",
      address:"williams loke",
      cityName:"norwich",
      email:"st.williams.way.lib@norfolk.gov.uk",
      phone:"01603 434 123"
    },
    {
      libraryName:"west earlham library",
      address:"17 and 18 earlham west centre",
      cityName:"norwich",
      email:"west.earlham.lib@norfolk.gov.uk",
      phone:"01603 451 881"
    },
    {
      libraryName:"tuckswood library",
      address:"robin hood road",
      cityName:"norwich",
      email:"tuckswood.lib@norfolk.gov.uk",
      phone:"01603 452 038"
    },
    {
      libraryName:"earlham library",
      address:"colman road",
      cityName:"norwich",
      email:"earlham.lib@norfolk.gov.uk",
      phone:"01603 454 338"
    },
    {
      libraryName:"norfolk and norwich millennium library",
      address:"the forum",
      cityName:"norwich",
      email:"millennium.lib@norfolk.gov.uk",
      phone:"01603 774774"
    },
    {
      libraryName:"wroxham library",
      address:"norwich road",
      cityName:"norwich",
      email:"wroxham.lib@norfolk.gov.uk",
      phone:"01603 782 560"
    },
    {
      libraryName:"hethersett library",
      address:"queen's road",
      cityName:"norwich",
      email:"hethersett.lib@norfolk.gov.uk",
      phone:"01603 810 188"
    },
    {
      libraryName:"stalham library",
      address:"4 high street",
      cityName:"norwich",
      email:"lorna.payne@norfolk.gov.uk",
      phone:"01692 580 794"
    },
    {
      libraryName:"reepham library",
      address:"bircham institute",
      cityName:"reepham",
      email:"reepham.lib@norfolk.gov.uk",
      phone:"01603 870 474"
    },
    {
      libraryName:"sheringham library",
      address:"new road",
      cityName:"sheringham",
      email:"sheringham.lib@norfolk.gov.uk",
      phone:"01263 822 874"
    },
    {
      libraryName:"swaffham library",
      address:"the pightle",
      cityName:"swaffham",
      email:"swaffham.lib@norfolk.gov.uk",
      phone:"01760 721 513"
    },
    {
      libraryName:"watton library",
      address:"george trollope road",
      cityName:"thetford",
      email:"watton.lib@norfolk.gov.uk",
      phone:"01953 881671"
    },
    {
      libraryName:"wells library learning centre",
      address:"wells library",
      cityName:"wells next the sea",
      email:"wells.lib@norfolk.gov.uk",
      phone:"01328 710 467"
    },
    {
      libraryName:"wymondham library",
      address:"becket's chapel",
      cityName:"wymondham",
      email:"wymondham.lib@norfolk.gov.uk",
      phone:"01953 603 319"
    },
    {
      libraryName:"bedale library and information centre",
      address:"bedale hall",
      cityName:"bedale",
      email:"bedale.library@northyorks.gov.uk",
      phone:"0845 034 9500"
    },
    {
      libraryName:"boroughbridge library and community resource centre",
      address:"17 st james square",
      cityName:"boroughbridge",
      email:"boroughbridge.library@northyorks.gov.uk",
      phone:"0845 034 9519"
    },
    {
      libraryName:"brotton library",
      address:"freebrough academy",
      cityName:"brotton",
      email:"brotton_library@redcar-cleveland.gov.uk",
      phone:"01287 676342"
    },
    {
      libraryName:"ingleton library and information centre",
      address:"ingleborough community centre",
      cityName:"carnforth via lancaster",
      email:"ingleton.library@northyorks.gov.uk",
      phone:"0845 034 9536"
    },
    {
      libraryName:"colburn library",
      address:"the broadway",
      cityName:"catterick garrison",
      email:"colburn.library@northyorks.gov.uk",
      phone:"0845 034 9502"
    },
    {
      libraryName:"catterick library",
      address:"gough road",
      cityName:"catterick garrison",
      email:"",
      phone:""
    },
    {
      libraryName:"easingwold library and information centre",
      address:"market place",
      cityName:"easingwold",
      email:"",
      phone:""
    },
    {
      libraryName:"filey library and information centre",
      address:"station avenue",
      cityName:"filey",
      email:"filey.library@northyorks.gov.uk",
      phone:"0845 034 9513"
    },
    {
      libraryName:"hunmanby library and information centre",
      address:"34 stonegate",
      cityName:"filey",
      email:"hunmanby.library@northyorks.gov.uk",
      phone:"0845 034 9514"
    },
    {
      libraryName:"guisborough library",
      address:"90 westgate",
      cityName:"guisborough",
      email:"guisborough_library@redcar-cleveland.gov.uk",
      phone:"01287 632668"
    },
    {
      libraryName:"bilton library and information centre",
      address:"the old vicarage",
      cityName:"harrogate",
      email:"bilton.library@northyorks.gov.uk",
      phone:"0845 034 9518"
    },
    {
      libraryName:"harrogate library and information centre",
      address:"victoria avenue",
      cityName:"harrogate",
      email:"harrogate.library@northyorks.gov.uk",
      phone:"0845 034 9520"
    },
    {
      libraryName:"pateley bridge libraryand information centre",
      address:"28 high street",
      cityName:"harrogate",
      email:"pateleybridge.library@northyorks.gov.uk",
      phone:"0845 034 9523"
    },
    {
      libraryName:"starbeck library and information centre",
      address:"68a highstreet",
      cityName:"harrogate",
      email:"",
      phone:""
    },
    {
      libraryName:"hawes  library",
      address:"the neukin",
      cityName:"hawes",
      email:"",
      phone:""
    },
    {
      libraryName:"helmsley library and information centre",
      address:"cityname hall",
      cityName:"helmsley",
      email:"",
      phone:""
    },
    {
      libraryName:"kirkbymoorside library and information centre",
      address:"literary institute",
      cityName:"kirkbymoorside",
      email:"",
      phone:""
    },
    {
      libraryName:"knaresborough library and information centre",
      address:"market place",
      cityName:"knaresborough",
      email:"knaresborough.library@northyorks.gov.uk",
      phone:"0845 3005112"
    },
    {
      libraryName:"bentham library and information centre",
      address:"main street",
      cityName:"lancaster",
      email:"bentham.library@northyorks.gov.uk",
      phone:"0845 034 9532"
    },
    {
      libraryName:"leyburn library and information centre",
      address:"thornborough hall",
      cityName:"leyburn",
      email:"leyburn.library@northyorks.gov.uk",
      phone:"0845 034 9505"
    },
    {
      libraryName:"loftus library",
      address:"hall grounds",
      cityName:"loftus",
      email:"loftus_library@redcar-cleveland.gov.uk",
      phone:"01287 640582"
    },
    {
      libraryName:"malton library and information centre",
      address:"st michael street",
      cityName:"malton",
      email:"malton.library@northyorks.gov.uk",
      phone:"0845 034 9529"
    },
    {
      libraryName:"norton library and information centre",
      address:"commercial street",
      cityName:"malton",
      email:"",
      phone:""
    },
    {
      libraryName:"marske library",
      address:"windy hill lane",
      cityName:"marske-by-sea",
      email:"marske_library@redcar-cleveland.gov.uk",
      phone:"01642 485440"
    },
    {
      libraryName:"masham library and information centre",
      address:"hsbc bank",
      cityName:"masham",
      email:"masham.library@northyorks.gov.uk",
      phone:"0845 034 9522"
    },
    {
      libraryName:"great ayton library and information centre",
      address:"105b high street",
      cityName:"middlesborough",
      email:"greatayton.library@northyorks.gov.uk",
      phone:"0845 034 9503"
    },
    {
      libraryName:"thorntree library",
      address:"beresford crescent",
      cityName:"middlesbrough",
      email:"thorntree_library@middlesbrough.gov.uk",
      phone:"01642 242332"
    },
    {
      libraryName:"north ormesby library",
      address:"derwent street",
      cityName:"middlesbrough",
      email:"north_ormesby_library@middlesbrough.gov.uk",
      phone:"01642 247980"
    },
    {
      libraryName:"easterside library",
      address:"broughton avenue",
      cityName:"middlesbrough",
      email:"easterside_library@middlesbrough.gov.uk",
      phone:"01642 317535"
    },
    {
      libraryName:"grove hill library",
      address:"eastbourne road",
      cityName:"middlesbrough",
      email:"easterside_library@middlesbrough.gov.uk",
      phone:"01642 317535"
    },
    {
      libraryName:"grangecityname library",
      address:"birchington avenue",
      cityName:"middlesbrough",
      email:"grangecityname_library@redcar-cleveland.gov.uk",
      phone:"01642 454417"
    },
    {
      libraryName:"hemlington library",
      address:"crosscliffe",
      cityName:"middlesbrough",
      email:"hemlington_library@middlesbrough.gov.uk",
      phone:"01642 591918"
    },
    {
      libraryName:"rainbow library",
      address:"parkway centre",
      cityName:"middlesbrough",
      email:"rainbow_library@middlesbrough.gov.uk",
      phone:"01642 593696"
    },
    {
      libraryName:"middlesbrough central library",
      address:"victoria square",
      cityName:"middlesbrough",
      email:"lending_library@middlesbrough.gov.uk",
      phone:"01642 729001"
    },
    {
      libraryName:"newport library",
      address:"st. paul's road",
      cityName:"middlesbrough",
      email:"newport_library@middlesbrough.gov.uk",
      phone:"01642 802892"
    },
    {
      libraryName:"acklam library",
      address:"acklam road",
      cityName:"middlesbrough",
      email:"acklam_library@middlesbrough.gov.uk",
      phone:"01642 817810"
    },
    {
      libraryName:"berwick hills library",
      address:"crossfell road",
      cityName:"middlesbrough",
      email:"",
      phone:""
    },
    {
      libraryName:"south bank library",
      address:"low grange health village",
      cityName:"middlesbrough",
      email:"",
      phone:""
    },
    {
      libraryName:"marton library",
      address:"the willows",
      cityName:"middlesbrough",
      email:"",
      phone:""
    },
    {
      libraryName:"ormesby library",
      address:"sunnyfield",
      cityName:"middlesbrough",
      email:"",
      phone:""
    },
    {
      libraryName:"libraries, archives and arts headquarters",
      address:"21 grammar school lane",
      cityName:"northallerton",
      email:"libraries@northyorks.gov.uk",
      phone:"01609 767800"
    },
    {
      libraryName:"northallerton library",
      address:"1 thirsk road",
      cityName:"northallerton",
      email:"northallerton.library@northyorks.gov.uk",
      phone:"0845 034 9506"
    },
    {
      libraryName:"pickering  library and community resource centre",
      address:"the ropery",
      cityName:"pickering",
      email:"pickering.library@northyorks.gov.uk",
      phone:"0845 3005157"
    },
    {
      libraryName:"redcar library",
      address:"coatham road",
      cityName:"redcar",
      email:"redcar_library@redcar-cleveland.gov.uk",
      phone:"01642 472 162"
    },
    {
      libraryName:"laburnum road library",
      address:"338 laburnum road",
      cityName:"redcar",
      email:"",
      phone:""
    },
    {
      libraryName:"roseberry square library",
      address:"roseberry square",
      cityName:"redcar",
      email:"",
      phone:""
    },
    {
      libraryName:"dormanscityname library",
      address:"3 farndale square",
      cityName:"redcar",
      email:"",
      phone:""
    },
    {
      libraryName:"richmond library and information centre",
      address:"queens road",
      cityName:"richmond",
      email:"richmond.library@northyorks.gov.uk",
      phone:"0845 034 9508"
    },
    {
      libraryName:"ripon  library and community resource centre",
      address:"the arcade",
      cityName:"ripon",
      email:"ripon.library@northyorks.gov.uk",
      phone:"0845 034 9524"
    },
    {
      libraryName:"saltburn library",
      address:"windsor road",
      cityName:"saltburn-by-the-sea",
      email:"",
      phone:""
    },
    {
      libraryName:"eastfield library and community resource centre",
      address:"high street",
      cityName:"scarborough",
      email:"",
      phone:"01236 720032"
    },
    {
      libraryName:"scalby library and community resource centre",
      address:"450 scalby road",
      cityName:"scarborough",
      email:"scalby.library@northyorks.gov.uk",
      phone:"0845 034 9515"
    },
    {
      libraryName:"scarborough library and community resource centre",
      address:"vernon road",
      cityName:"scarborough",
      email:"scarborough.library@northyorks.gov.uk",
      phone:"0845 034 9516"
    },
    {
      libraryName:"ayton library and information centre",
      address:"3 pickering road",
      cityName:"scarborough",
      email:"",
      phone:""
    },
    {
      libraryName:"barlby library and information centre",
      address:"howden road",
      cityName:"selby",
      email:"barlby.library@northyorks.gov.uk",
      phone:"0845 034 9539"
    },
    {
      libraryName:"selby library and information centre",
      address:"52 micklegate",
      cityName:"selby",
      email:"selby.library@northyorks.gov.uk",
      phone:"0845 034 9540"
    },
    {
      libraryName:"settle library and information centre",
      address:"4 high street",
      cityName:"settle",
      email:"settle.library@northyorks.gov.uk",
      phone:"0845 034 9537"
    },
    {
      libraryName:"skelton library",
      address:"coniston road",
      cityName:"skelton",
      email:"skelton_library@redcar-cleveland.gov.uk",
      phone:"01287 650487"
    },
    {
      libraryName:"grassington library",
      address:"the library",
      cityName:"skipton",
      email:"",
      phone:"01756 753 050"
    },
    {
      libraryName:"embsay library and information centre",
      address:"the institute",
      cityName:"skipton",
      email:"embsay.library@northyorks.gov.uk",
      phone:"0845 034 9534"
    },
    {
      libraryName:"gargrave library and information centre",
      address:"gargrave village hall",
      cityName:"skipton",
      email:"gargrave.library@northyorks.gov.uk",
      phone:"0845 034 9535"
    },
    {
      libraryName:"skipton library and information centre",
      address:"high street",
      cityName:"skipton",
      email:"skipton.library@northyorks.gov.uk",
      phone:"0845 034 9538"
    },
    {
      libraryName:"grassington hub and community library",
      address:"garrs lane",
      cityName:"skipton",
      email:"",
      phone:""
    },
    {
      libraryName:"stokesley community library and resource centre",
      address:"cityname close",
      cityName:"stokesley",
      email:"",
      phone:""
    },
    {
      libraryName:"tadcaster library and information centre",
      address:"station road",
      cityName:"tadcaster",
      email:"tadcaster.library@northyorks.gov.uk",
      phone:"0845 034 9542"
    },
    {
      libraryName:"thirsk library and information centre",
      address:"finkle street",
      cityName:"thirsk",
      email:"",
      phone:""
    },
    {
      libraryName:"whitby library and information centre",
      address:"windsor terrace",
      cityName:"whitby",
      email:"whitby.library@northyorks.gov.uk",
      phone:"0845 3006687"
    },
    {
      libraryName:"explore new earswick library  learning centre",
      address:"new earswick primary school",
      cityName:"york",
      email:"newearswick.library@york.gov.uk",
      phone:"01904 552629"
    },
    {
      libraryName:"explore acomb library learning centre",
      address:"front street",
      cityName:"york",
      email:"acomb.library@york.gov.uk",
      phone:"01904 552651"
    },
    {
      libraryName:"tang hall library learning centre",
      address:"fifth avenue",
      cityName:"york",
      email:"tanghall.library@york.gov.uk",
      phone:"01904 552655"
    },
    {
      libraryName:"haxby library",
      address:"station road",
      cityName:"york",
      email:"haxby.library@york.gov.uk",
      phone:"01904 552660"
    },
    {
      libraryName:"clifton library and learning centre",
      address:"rawcliffe lane",
      cityName:"york",
      email:"clifton.library@york.gov.uk",
      phone:"01904 552662"
    },
    {
      libraryName:"dunnington library",
      address:"the reading room",
      cityName:"york",
      email:"dunnington.library@york.gov.uk",
      phone:"01904 552668"
    },
    {
      libraryName:"huntington library",
      address:"garth road",
      cityName:"york",
      email:"huntington.library@york.gov.uk",
      phone:"01904 552669"
    },
    {
      libraryName:"copmanthorpe library",
      address:"village centre",
      cityName:"york",
      email:"copmanthorpe.library@york.gov.uk",
      phone:"01904 552672"
    },
    {
      libraryName:"dringhouses library",
      address:"tadcaster road",
      cityName:"york",
      email:"dringhouses.library@york.gov.uk",
      phone:"01904 552674"
    },
    {
      libraryName:"strensall library",
      address:"19 the village",
      cityName:"york",
      email:"strensall.library@york.gov.uk",
      phone:"01904 552677"
    },
    {
      libraryName:"bishopthorpe library",
      address:"main street",
      cityName:"york",
      email:"bishopthorpe.library@york.gov.uk",
      phone:"01904 552678"
    },
    {
      libraryName:"poppleton library",
      address:"the village",
      cityName:"york",
      email:"poppleton.library@york.gov.uk",
      phone:"01904 552680"
    },
    {
      libraryName:"explore york library learning centre",
      address:"museum street",
      cityName:"york",
      email:"exploreyork@york.gov.uk",
      phone:"01904 552828"
    },
    {
      libraryName:"fulford library",
      address:"st oswald's ce school",
      cityName:"york",
      email:"fulford.library@york.gov.uk",
      phone:"01904 555444"
    },
    {
      libraryName:"corby library",
      address:"the library",
      cityName:"corby",
      email:"corlib@northamptonshire.gov.uk",
      phone:"01536 203304"
    },
    {
      libraryName:"brackley library",
      address:"manor road",
      cityName:"brackley",
      email:"braclib@northamptonshire.gov.uk",
      phone:"01280 703455"
    },
    {
      libraryName:"brixworth library",
      address:"spratton road",
      cityName:"brixworth",
      email:"braclib@northamptonshire.gov.uk",
      phone:"01280 703455"
    },
    {
      libraryName:"burton latimer library",
      address:"high street",
      cityName:"burton latimer",
      email:"burtlib@northamptonshire.gov.uk",
      phone:"01536 723357"
    },
    {
      libraryName:"danesholme library",
      address:"14 neighbourhood centre",
      cityName:"corby",
      email:"danelib@northamptonshire.gov.uk",
      phone:"01536 742862"
    },
    {
      libraryName:"woodford halse library",
      address:"village hall",
      cityName:"daventry",
      email:"woodlib@northamptonshire.gov.uk",
      phone:"01327 260101"
    },
    {
      libraryName:"daventry library",
      address:"north street",
      cityName:"daventry",
      email:"davlib@northamptonshire.gov.uk",
      phone:"01327 703130"
    },
    {
      libraryName:"deanshanger library",
      address:"little london",
      cityName:"deanshanger",
      email:"deanlib@northamptonshire.gov.uk",
      phone:"01908 562889"
    },
    {
      libraryName:"desborough library",
      address:"high street",
      cityName:"desborough",
      email:"deslib@northamptonshire.gov.uk",
      phone:"01536 761085"
    },
    {
      libraryName:"finedon library",
      address:"cityname hall",
      cityName:"finedon",
      email:"finlib@northamptonshire.gov.uk",
      phone:"01933 680208"
    },
    {
      libraryName:"higham ferrers library",
      address:"midlands rd",
      cityName:"higham ferrers",
      email:"highlib@northamptonshire.gov.uk",
      phone:"01933 314842"
    },
    {
      libraryName:"irchester library",
      address:"high street",
      cityName:"irchester",
      email:"irchlib@northamptonshire.gov.uk",
      phone:"01933 312539"
    },
    {
      libraryName:"irthlingborough library",
      address:"high street",
      cityName:"irthlingborough",
      email:"irthlib@northamptonshire.gov.uk",
      phone:"01933 650641"
    },
    {
      libraryName:"kettering library",
      address:"sheep street",
      cityName:"kettering",
      email:"ketlib@northamptonshire.gov.uk",
      phone:"01536 512315"
    },
    {
      libraryName:"middleton cheney library",
      address:"main road",
      cityName:"northampton",
      email:"midlib@northamptonshire.gov.uk",
      phone:"01295 710796"
    },
    {
      libraryName:"long buckby library",
      address:"station road",
      cityName:"northampton",
      email:"bucklib@northamptonshire.gov.uk",
      phone:"01327 842796"
    },
    {
      libraryName:"abington library",
      address:"lindsay avenue",
      cityName:"northampton",
      email:"ablib@northamptonshire.gov.uk",
      phone:"01604 401402"
    },
    {
      libraryName:"weston favell library",
      address:"weston favell centre",
      cityName:"northampton",
      email:"westlib@northamptonshire.gov.uk",
      phone:"01604 403100"
    },
    {
      libraryName:"northamptonshire central library",
      address:"abington street",
      cityName:"northampton",
      email:"centlib@northamptonshire.gov.uk",
      phone:"01604 462040"
    },
    {
      libraryName:"duston library",
      address:"pendle road",
      cityName:"northampton",
      email:"dustlib@northamptonshire.gov.uk",
      phone:"01604 585882"
    },
    {
      libraryName:"moulton library",
      address:"doves lane",
      cityName:"northampton",
      email:"moultlib@northamptonshire.gov.uk",
      phone:"01604 646796"
    },
    {
      libraryName:"hunsbury library",
      address:"overslade close",
      cityName:"northampton",
      email:"hunslib@northamptonshire.gov.uk",
      phone:"01604 702830"
    },
    {
      libraryName:"kingsthorpe library",
      address:"welford road",
      cityName:"northampton",
      email:"kinglib@northamptonshire.gov.uk",
      phone:"01604 714021"
    },
    {
      libraryName:"st james library",
      address:"138 st james road",
      cityName:"northampton",
      email:"jameslib@northamptonshire.gov.uk",
      phone:"01604 751037"
    },
    {
      libraryName:"far cotton library",
      address:"rec centre towcester road",
      cityName:"northampton",
      email:"cotlib@northamptonshire.gov.uk",
      phone:"01604 762192"
    },
    {
      libraryName:"earls barton library",
      address:"broad street",
      cityName:"northampton",
      email:"cbartlib@northamptonshire.gov.uk",
      phone:"01604 810726"
    },
    {
      libraryName:"roade library",
      address:"high street",
      cityName:"northampton",
      email:"roadlib@northamptonshire.gov.uk",
      phone:"01604 863783"
    },
    {
      libraryName:"wootton fields library",
      address:"wooldale centre for learning",
      cityName:"northampton",
      email:"",
      phone:""
    },
    {
      libraryName:"northamptonshire libraries and information service",
      address:"8-10 the lakes\\\\npo box 216\\\\njohn dryden house",
      cityName:"northampton",
      email:"",
      phone:""
    },
    {
      libraryName:"oundle library",
      address:"glapthorn road",
      cityName:"oundle",
      email:"oundlib@northamptonshire.gov.uk",
      phone:"01832 272584"
    },
    {
      libraryName:"rushden library",
      address:"newton road",
      cityName:"rushden",
      email:"rushlib@northamptonshire.gov.uk",
      phone:"01933 312754"
    },
    {
      libraryName:"thrapston library",
      address:"high street",
      cityName:"thrapston",
      email:"thraplib@northamptonshire.gov.uk",
      phone:"01832 733251"
    },
    {
      libraryName:"towcester library",
      address:"richmond road",
      cityName:"towcester",
      email:"towlib@northamptonshire.gov.uk",
      phone:"1326 350794"
    },
    {
      libraryName:"wellingborough library",
      address:"pebble lane",
      cityName:"wellingborough",
      email:"wellib@northamptonshire.gov.uk",
      phone:"01933 225365"
    },
    {
      libraryName:"raunds library",
      address:"high street",
      cityName:"wellingborough",
      email:"raunlib@northamptonshire.gov.uk",
      phone:"01933 623671"
    },
    {
      libraryName:"wollaston library",
      address:"newton road",
      cityName:"wollaston",
      email:"wollib@northamptonshire.gov.uk",
      phone:"01933 664805"
    },
    {
      libraryName:"alnwick library",
      address:"green batt",
      cityName:"alnwick",
      email:"",
      phone:"01665 602 689"
    },
    {
      libraryName:"amble library",
      address:"middleton street",
      cityName:"amble",
      email:"",
      phone:"01665 710419"
    },
    {
      libraryName:"ashington library",
      address:"kenilworth road",
      cityName:"ashington",
      email:"",
      phone:"01670813 245"
    },
    {
      libraryName:"hirst library",
      address:"lichfield close",
      cityName:"ashington",
      email:"",
      phone:"01670813 422"
    },
    {
      libraryName:"bedlington library",
      address:"glebe road",
      cityName:"bedlington",
      email:"",
      phone:"01670822 056"
    },
    {
      libraryName:"bedlington station library",
      address:"station road",
      cityName:"bedlington",
      email:"",
      phone:"01670822 211"
    },
    {
      libraryName:"bellingham library",
      address:"council offices",
      cityName:"bellingham",
      email:"",
      phone:"01434 220495"
    },
    {
      libraryName:"berwick library",
      address:"walkergate",
      cityName:"berwick upon tweed",
      email:"",
      phone:"01289 334 051"
    },
    {
      libraryName:"blyth library",
      address:"bridge street",
      cityName:"blyth",
      email:"",
      phone:"01670361 352"
    },
    {
      libraryName:"south beach library",
      address:"fulmar drive",
      cityName:"blyth",
      email:"",
      phone:"01670363 091"
    },
    {
      libraryName:"cowpen library",
      address:"blyth community college",
      cityName:"blyth",
      email:"",
      phone:""
    },
    {
      libraryName:"newsham library",
      address:"community association",
      cityName:"blyth",
      email:"",
      phone:""
    },
    {
      libraryName:"guidepost library",
      address:"1 the square",
      cityName:"choppington",
      email:"",
      phone:""
    },
    {
      libraryName:"corbridge library",
      address:"hill street",
      cityName:"corbridge",
      email:"",
      phone:"01434 632 815"
    },
    {
      libraryName:"cramlington library",
      address:"forum way",
      cityName:"cramlington",
      email:"",
      phone:"01670714 371"
    },
    {
      libraryName:"haltwhistle library",
      address:"mechanics institute",
      cityName:"haltwhistle",
      email:"",
      phone:"01434 321 863"
    },
    {
      libraryName:"hexham library",
      address:"queens hall arts centre",
      cityName:"hexham",
      email:"",
      phone:"01434 652 488"
    },
    {
      libraryName:"allendale library",
      address:"dawson place",
      cityName:"hexham",
      email:"",
      phone:"01434 683 550"
    },
    {
      libraryName:"haydon bridge library",
      address:"church street",
      cityName:"hexham",
      email:"",
      phone:""
    },
    {
      libraryName:"kielder library",
      address:"community centre",
      cityName:"kielder",
      email:"",
      phone:"01434 250262"
    },
    {
      libraryName:"lynemouth library",
      address:"lynemouth resource centre",
      cityName:"lynemouth",
      email:"",
      phone:"01670 860492"
    },
    {
      libraryName:"ellington library",
      address:"lynemouth road",
      cityName:"morpeth",
      email:"",
      phone:"0167 0860268"
    },
    {
      libraryName:"morpeth library",
      address:"gas house lane",
      cityName:"morpeth",
      email:"",
      phone:"01670534 518"
    },
    {
      libraryName:"hadston library",
      address:"druridge bay middle school",
      cityName:"morpeth",
      email:"",
      phone:"01670761 537"
    },
    {
      libraryName:"newbiggin library",
      address:"gibson street",
      cityName:"newbiggin by the sea",
      email:"newbigginhall.library@newcastle.gov.uk",
      phone:"0191 277 4284"
    },
    {
      libraryName:"heddon library",
      address:"the citynamee gate",
      cityName:"newcastle upon tyne",
      email:"",
      phone:""
    },
    {
      libraryName:"ponteland library",
      address:"thornhill road",
      cityName:"ponteland",
      email:"",
      phone:"01661 823 594"
    },
    {
      libraryName:"prudhoe library",
      address:"front street",
      cityName:"prudhoe",
      email:"",
      phone:"01661 832 540"
    },
    {
      libraryName:"rothbury library",
      address:"front street",
      cityName:"rothbury",
      email:"",
      phone:"01669 620428"
    },
    {
      libraryName:"seahouses library",
      address:"main street",
      cityName:"seahouses",
      email:"",
      phone:""
    },
    {
      libraryName:"seaton sluice library",
      address:"community centre",
      cityName:"seaton sluice",
      email:"",
      phone:"0191 237 1660"
    },
    {
      libraryName:"seaton valley community library",
      address:"elsdon avenue",
      cityName:"whitley bay",
      email:"",
      phone:""
    },
    {
      libraryName:"widdrington library",
      address:"grange road",
      cityName:"widdrington",
      email:"",
      phone:"01670791 548"
    },
    {
      libraryName:"wooler library",
      address:"55 high street",
      cityName:"wooler",
      email:"",
      phone:"01668 281 409"
    },
    {
      libraryName:"wylam library",
      address:"falcon terrace",
      cityName:"wylam",
      email:"",
      phone:"01661 852 174"
    },
    {
      libraryName:"hucknall library",
      address:"south street",
      cityName:"ashfield",
      email:"hucknall.library@nottscc.gov.uk",
      phone:"0115 963 2035"
    },
    {
      libraryName:"skegby library",
      address:"mansfield road",
      cityName:"ashfield",
      email:"skegby.library@nottscc.gov.uk",
      phone:"01623 554 890"
    },
    {
      libraryName:"selston library",
      address:"chapel road",
      cityName:"ashfield",
      email:"selston.library@nottscc.gov.uk",
      phone:"01773 810 093"
    },
    {
      libraryName:"misterton library",
      address:"wharf road",
      cityName:"bassetlaw",
      email:"misterton.library@nottscc.gov.uk",
      phone:"01427 890 646"
    },
    {
      libraryName:"worksop library",
      address:"memorial avenue",
      cityName:"bassetlaw",
      email:"worksop.library@nottscc.gov.uk",
      phone:"01909 535353"
    },
    {
      libraryName:"beeston library",
      address:"foster avenue",
      cityName:"beeston",
      email:"beeston.library@nottscc.gov.uk",
      phone:"0115 925 5168"
    },
    {
      libraryName:"bilborough library",
      address:"bracebridge drive",
      cityName:"bilborough",
      email:"",
      phone:""
    },
    {
      libraryName:"bingham library",
      address:"eaton place",
      cityName:"bingham",
      email:"bingham.library@nottscc.gov.uk",
      phone:"01949 837 905"
    },
    {
      libraryName:"bottesford library",
      address:"old primary school",
      cityName:"bottesford",
      email:"bottesfordlibrary@leics.gov.uk",
      phone:"0116 3053550"
    },
    {
      libraryName:"toton library",
      address:"stapleford lane",
      cityName:"broxtowe",
      email:"toton.library@nottscc.gov.uk",
      phone:"0115 972 6403"
    },
    {
      libraryName:"stapleford library",
      address:"church street",
      cityName:"broxtowe",
      email:"stapleford.library@nottscc.gov.uk",
      phone:"01159 399178"
    },
    {
      libraryName:"burton joyce library",
      address:"meadow lane",
      cityName:"burton joyce",
      email:"burtonjoyce.library@nottscc.gov.uk",
      phone:"0115 931 3360"
    },
    {
      libraryName:"calverton library",
      address:"st wilfrid's square",
      cityName:"calverton",
      email:"calverton.library@nottscc.gov.uk",
      phone:"0115 965 2580"
    },
    {
      libraryName:"carlton library",
      address:"manor road",
      cityName:"carlton",
      email:"carlton.library@nottscc.gov.uk",
      phone:"0115 987 0276"
    },
    {
      libraryName:"carlton hill library",
      address:"341 carlton hill",
      cityName:"carlton",
      email:"carltonhill.library@nottscc.gov.uk",
      phone:"0115 987 3050"
    },
    {
      libraryName:"gedling library",
      address:"wollaton avenue",
      cityName:"gedling",
      email:"gedling.library@nottscc.gov.uk",
      phone:"0115 987 6886"
    },
    {
      libraryName:"ravenshead library",
      address:"milton court",
      cityName:"gedling",
      email:"ravenshead.library@nottscc.gov.uk",
      phone:"01623 794 634"
    },
    {
      libraryName:"gotham library",
      address:"village hall",
      cityName:"gotham",
      email:"gotham.library@nottscc.gov.uk",
      phone:"0115 983 0832"
    },
    {
      libraryName:"keyworth library",
      address:"church drive",
      cityName:"keyworth",
      email:"keyworth.library@nottscc.gov.uk",
      phone:"0115 937 3509"
    },
    {
      libraryName:"annesley woodhouse library",
      address:"church hall, skegby road",
      cityName:"kirkby in ashfield",
      email:"annesleywoodhouse.library@nottscc.gov.uk",
      phone:"01623 750 518"
    },
    {
      libraryName:"mansfield woodhouse library",
      address:"church street",
      cityName:"mansfield",
      email:"mansfieldwoodhouse.library@nottscc.gov.uk",
      phone:"01623 621 781"
    },
    {
      libraryName:"ladybrook library",
      address:"ladybrook lane",
      cityName:"mansfield",
      email:"ladybrook.library@nottscc.gov.uk",
      phone:"01623 622 835"
    },
    {
      libraryName:"forest cityname library",
      address:"clipstone road west",
      cityName:"mansfield",
      email:"forestcityname.library@nottscc.gov.uk",
      phone:"01623 623 395"
    },
    {
      libraryName:"clipstone library",
      address:"first avenue",
      cityName:"mansfield",
      email:"clipstone.library@nottscc.gov.uk",
      phone:"01623 625 852"
    },
    {
      libraryName:"mansfield library - the learning centre",
      address:"four seasons shopping centre",
      cityName:"mansfield",
      email:"mansfield.library@nottscc.gov.uk",
      phone:"01623 627591"
    },
    {
      libraryName:"blidworth library",
      address:"new lane",
      cityName:"mansfield",
      email:"blidworth.library@nottscc.gov.uk",
      phone:"01623 793 775"
    },
    {
      libraryName:"rainworth library",
      address:"warsop lane",
      cityName:"mansfield",
      email:"rainworth.library@nottscc.gov.uk",
      phone:"01623 796 299"
    },
    {
      libraryName:"edwinstowe library",
      address:"high street",
      cityName:"mansfield",
      email:"edwinstowe.library@nottscc.gov.uk",
      phone:"01623 822 280"
    },
    {
      libraryName:"warsop library",
      address:"high street",
      cityName:"mansfield",
      email:"warsop.library@nottscc.gov.uk",
      phone:"01623 842 322"
    },
    {
      libraryName:"mapperley library",
      address:"454 westdale lane",
      cityName:"mapperley",
      email:"mapperley.library@nottscc.gov.uk",
      phone:"0115 962 1224"
    },
    {
      libraryName:"nottingham central library",
      address:"angel row",
      cityName:"nottingham",
      email:"enquiryline@nottinghamcity.gov.uk",
      phone:"0115 915 2828"
    },
    {
      libraryName:"meadows library",
      address:"wilford grove",
      cityName:"nottingham",
      email:"meadows.library@nottinghamcity.gov.uk",
      phone:"0115 915 9279"
    },
    {
      libraryName:"southglade park library",
      address:"southglade road",
      cityName:"nottingham",
      email:"southglade_park.library@nottinghamcity.gov.uk",
      phone:"0115 915 5799"
    },
    {
      libraryName:"ollerton library",
      address:"forest road",
      cityName:"newark",
      email:"ollerton.library@nottscc.gov.uk",
      phone:"01623 860 274"
    },
    {
      libraryName:"dukeries library",
      address:"whinney lane",
      cityName:"newark",
      email:"dukeries.library@nottscc.gov.uk",
      phone:"01623 862 363"
    },
    {
      libraryName:"bilsthorpe library",
      address:"the crescent",
      cityName:"newark",
      email:"bilsthorpe.library@nottscc.gov.uk",
      phone:"01623 870 216"
    },
    {
      libraryName:"farnsfield library",
      address:"new hill",
      cityName:"newark",
      email:"farnsfield.library@nottscc.gov.uk",
      phone:"01623 883 917"
    },
    {
      libraryName:"balderton library",
      address:"main street",
      cityName:"newark",
      email:"balderton.library@nottscc.gov.uk",
      phone:"01636 703930"
    },
    {
      libraryName:"newark library",
      address:"beaumond gardens",
      cityName:"newark",
      email:"newark.library@nottscc.gov.uk",
      phone:"01636 703966"
    },
    {
      libraryName:"sutton-on-trent library",
      address:"main street",
      cityName:"newark",
      email:"suttonontrent.library@nottscc.gov.uk",
      phone:"01636 821 045"
    },
    {
      libraryName:"collingham library",
      address:"high street",
      cityName:"newark",
      email:"collingham.library@nottscc.gov.uk",
      phone:"01636 892 083"
    },
    {
      libraryName:"tuxford library",
      address:"lincoln road",
      cityName:"newark",
      email:"tuxford.library@nottscc.gov.uk",
      phone:"01777 871221"
    },
    {
      libraryName:"clifton library",
      address:"southchurch drive",
      cityName:"nottingham",
      email:"clifton.library@nottinghamcity.gov.uk",
      phone:"0115 915 2945"
    },
    {
      libraryName:"arnold library",
      address:"front street",
      cityName:"nottingham",
      email:"arnold.library@nottscc.gov.uk",
      phone:"0115 920 2247"
    },
    {
      libraryName:"inham nook library",
      address:"barn croft",
      cityName:"nottingham",
      email:"inhamnook.library@nottscc.gov.uk",
      phone:"0115 922 3133"
    },
    {
      libraryName:"woodthorpe library",
      address:"wensley road",
      cityName:"nottingham",
      email:"woodthorpe.library@nottscc.gov.uk",
      phone:"0115 926 6900"
    },
    {
      libraryName:"kimberley library",
      address:"main street",
      cityName:"nottingham",
      email:"kimberley.library@nottscc.gov.uk",
      phone:"0115 938 2322"
    },
    {
      libraryName:"edgewood library",
      address:"christchurch road",
      cityName:"nottingham",
      email:"edgewood.library@nottscc.gov.uk",
      phone:"0115 964 0138"
    },
    {
      libraryName:"lowdham library",
      address:"main street",
      cityName:"nottingham",
      email:"lowdham.library@nottscc.gov.uk",
      phone:"0115 966 4348"
    },
    {
      libraryName:"west bridgford library",
      address:"bridgford road",
      cityName:"nottingham",
      email:"westbridgford.library@nottscc.gov.uk",
      phone:"0115 981 6506"
    },
    {
      libraryName:"cotgrave library",
      address:"cotgrave shopping centre",
      cityName:"nottingham",
      email:"cotgrave.library@nottscc.gov.uk",
      phone:"0115 989 2578"
    },
    {
      libraryName:"kirkby-in-ashfield library",
      address:"ashfield precinct",
      cityName:"nottingham",
      email:"kirkbyinashfield.library@nottscc.gov.uk",
      phone:"01623 753 236"
    },
    {
      libraryName:"jacksdale library",
      address:"selston road",
      cityName:"nottingham",
      email:"jacksdale.library@nottscc.gov.uk",
      phone:"01773 605 612"
    },
    {
      libraryName:"eastwood library",
      address:"wellington place",
      cityName:"nottingham",
      email:"eastwood.library@nottscc.gov.uk",
      phone:"01773 712 209"
    },
    {
      libraryName:"sherwood library",
      address:"spondon street",
      cityName:"nottingham",
      email:"sherwoodlibrary@kent.gov.uk",
      phone:"01892 537639"
    },
    {
      libraryName:"mansfield library",
      address:"16 regent street",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"sneinton library",
      address:"sneinton boulevard",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"st anns library",
      address:"robin hood chase",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"bakersfield library",
      address:"watson avenue",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"basford library",
      address:"vernon road",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"bulwell library",
      address:"highbury road",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"radford/lenton library",
      address:"lenton boulevard",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"hyson green library",
      address:"gregory boulevard",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"wollaton library",
      address:"bramcote lane",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"strelley road library",
      address:"strelley road",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"aspley library",
      address:"nuthall road",
      cityName:"nottingham",
      email:"",
      phone:""
    },
    {
      libraryName:"radcliffe-on-trent library",
      address:"new road",
      cityName:"radcliffe on trent",
      email:"radcliffeontrent.library@nottscc.gov.uk",
      phone:"0115 933 2312"
    },
    {
      libraryName:"retford library",
      address:"churchgate",
      cityName:"retford",
      email:"retford.library@nottscc.gov.uk",
      phone:"01777 708 724"
    },
    {
      libraryName:"ruddington library",
      address:"church street",
      cityName:"ruddington",
      email:"ruddington.library@nottscc.gov.uk",
      phone:"0115 921 2309"
    },
    {
      libraryName:"southwell library",
      address:"southwell library",
      cityName:"southwell",
      email:"southwell.library@nottscc.gov.uk",
      phone:"01636 812 148"
    },
    {
      libraryName:"huthwaite library",
      address:"sutton road",
      cityName:"sutton in ashfield",
      email:"huthwaite.library@nottscc.gov.uk",
      phone:"01623 554 051"
    },
    {
      libraryName:"sutton-in-ashfield library",
      address:"idlewells precinct",
      cityName:"sutton in ashfield",
      email:"sutton.library@nottscc.gov.uk",
      phone:"01623 556 296"
    },
    {
      libraryName:"balmoral library",
      address:"princess anne road",
      cityName:"worksop",
      email:"balmoral.library@nottscc.gov.uk",
      phone:"01909 475 405"
    },
    {
      libraryName:"langold library",
      address:"doncaster road",
      cityName:"worksop",
      email:"langold.library@nottscc.gov.uk",
      phone:"01909 730 363"
    },
    {
      libraryName:"carlton-in-lindrick library",
      address:"long lane",
      cityName:"worksop",
      email:"carltoninlindrick.library@nottscc.gov.uk",
      phone:"01909 732 275"
    },
    {
      libraryName:"oakdale library",
      address:"central buildings",
      cityName:"cwrt cwmderwen",
      email:"",
      phone:"01495 223545"
    },
    {
      libraryName:"orkney library",
      address:"44 junction road",
      cityName:"kirkwall",
      email:"",
      phone:"01856 873166"
    },
    {
      libraryName:"stromness library",
      address:"hellihole road",
      cityName:"stromness",
      email:"",
      phone:"01856 850907"
    },
    {
      libraryName:"abingdon library",
      address:"the charter",
      cityName:"abingdon",
      email:"abingdon.library@oxfordshire.gov.uk",
      phone:"01235 520374"
    },
    {
      libraryName:"adderbury library",
      address:"church house",
      cityName:"adderbury",
      email:"adderbury.library@oxfordshire.gov.uk",
      phone:"01295 810545"
    },
    {
      libraryName:"bampton library",
      address:"old grammar school",
      cityName:"bampton",
      email:"bampton.library@oxfordshire.gov.uk",
      phone:"01993 850076"
    },
    {
      libraryName:"banbury library",
      address:"marlborough road",
      cityName:"banbury",
      email:"banbury.library@oxfordshire.gov.uk",
      phone:"01295 262282"
    },
    {
      libraryName:"neithrop library",
      address:"community centre",
      cityName:"banbury",
      email:"neithrop.library@oxfordshire.gov.uk",
      phone:"01295 264 815"
    },
    {
      libraryName:"benson library",
      address:"castle square",
      cityName:"benson",
      email:"benson.library@oxfordshire.gov.uk",
      phone:"01491 838474"
    },
    {
      libraryName:"berinsfield library",
      address:"green furlong",
      cityName:"berinsfield",
      email:"berinsfield.library@oxfordshire.gov.uk",
      phone:"01865 340 771"
    },
    {
      libraryName:"bicester library",
      address:"old place yard",
      cityName:"bicester",
      email:"bicester.library@oxfordshire.gov.uk",
      phone:"01869 252181"
    },
    {
      libraryName:"burford library",
      address:"86 high street",
      cityName:"burford",
      email:"burford.library@oxfordshire.gov.uk",
      phone:"01993 823377"
    },
    {
      libraryName:"carterton library",
      address:"6 alvescot road",
      cityName:"carterton",
      email:"carterton.library@oxfordshire.gov.uk",
      phone:"01993 841492"
    },
    {
      libraryName:"charlbury library",
      address:"corner house",
      cityName:"charlbury",
      email:"charlbury.library@oxfordshire.gov.uk",
      phone:"01608 811104"
    },
    {
      libraryName:"chinnor library",
      address:"station road",
      cityName:"chinnor",
      email:"chinnor.library@oxfordshire.gov.uk",
      phone:"01844 351 721"
    },
    {
      libraryName:"chipping norton library",
      address:"goddards lane",
      cityName:"chipping norton",
      email:"chippingnorton.library@oxfordshire.gov.uk",
      phone:"01608 643 559"
    },
    {
      libraryName:"deddington library",
      address:"the old court house",
      cityName:"deddington",
      email:"deddington.library@oxfordshire.gov.uk",
      phone:"01869 338391"
    },
    {
      libraryName:"didcot library",
      address:"197 broadway",
      cityName:"didcot",
      email:"didcot.library@oxfordshire.gov.uk",
      phone:"01235 813103"
    },
    {
      libraryName:"eynsham library",
      address:"30 mill street",
      cityName:"eynsham",
      email:"eynsham.library@oxfordshire.gov.uk",
      phone:"01865 880525"
    },
    {
      libraryName:"faringdon library",
      address:"the elms",
      cityName:"faringdon",
      email:"faringdon.library@oxfordshire.gov.uk",
      phone:"01367 240 311"
    },
    {
      libraryName:"goring library",
      address:"station road",
      cityName:"goring",
      email:"goring.library@oxfordshire.gov.uk",
      phone:"01491 873028"
    },
    {
      libraryName:"henley library",
      address:"ravenscroft road",
      cityName:"henley on thames",
      email:"henley.library@oxfordshire.gov.uk",
      phone:"01491 575 278"
    },
    {
      libraryName:"hook norton library",
      address:"high street",
      cityName:"hook norton",
      email:"hooknorton.library@oxfordshire.gov.uk",
      phone:"01608 737 793"
    },
    {
      libraryName:"kidlington library",
      address:"ron groves house",
      cityName:"kidlington",
      email:"kidlington.library@oxfordshire.gov.uk",
      phone:"01865 373 067"
    },
    {
      libraryName:"littlemore library",
      address:"the oxford academy campus",
      cityName:"littlemore",
      email:"littlemore.library@oxfordshire.gov.uk",
      phone:"01865 714 309"
    },
    {
      libraryName:"wychwood library",
      address:"29 high street",
      cityName:"milton-under-wychwood",
      email:"wychwood.library@oxfordshire.gov.uk",
      phone:"01993 830281"
    },
    {
      libraryName:"north leigh library",
      address:"memorial hall",
      cityName:"north leigh",
      email:"northleigh.library@oxfordshire.gov.uk",
      phone:"01993 882 935"
    },
    {
      libraryName:"botley library",
      address:"elms court",
      cityName:"oxford",
      email:"botley.library@oxfordshire.gov.uk",
      phone:"01865 248142"
    },
    {
      libraryName:"summercityname library",
      address:"south parade",
      cityName:"oxford",
      email:"summercityname.library@oxfordshire.gov.uk",
      phone:"01865 558 290"
    },
    {
      libraryName:"old marston library",
      address:"mortimer hall",
      cityName:"oxford",
      email:"oldmarston.library@oxfordshire.gov.uk",
      phone:"01865 726 823"
    },
    {
      libraryName:"kennington library",
      address:"the village hall",
      cityName:"oxford",
      email:"kennington.library@oxfordshire.gov.uk",
      phone:"01865 730 763"
    },
    {
      libraryName:"headington library",
      address:"bury knowle park",
      cityName:"oxford",
      email:"headington.library@oxfordshire.gov.uk",
      phone:"01865 762 867"
    },
    {
      libraryName:"blackbird leys library",
      address:"blackbird leys road",
      cityName:"oxford",
      email:"blackbirdleys.library@oxfordshire.gov.uk",
      phone:"01865 770403"
    },
    {
      libraryName:"cowley library",
      address:"temple road",
      cityName:"oxford",
      email:"cowley.library@oxfordshire.gov.uk",
      phone:"01865 777 494"
    },
    {
      libraryName:"oxford central library",
      address:"westgate",
      cityName:"oxford",
      email:"oxfordcentral.library@oxfordshire.gov.uk",
      phone:"01865 815509"
    },
    {
      libraryName:"sonning common library",
      address:"grove road",
      cityName:"reading",
      email:"sonningcommon.library@oxfordshire.gov.uk",
      phone:"01189 722 448"
    },
    {
      libraryName:"woodcote library",
      address:"reading road",
      cityName:"reading",
      email:"woodcote.library@oxfordshire.gov.uk",
      phone:"01491 682323"
    },
    {
      libraryName:"stonesfield library",
      address:"village hall",
      cityName:"stonesfield",
      email:"stonesfield.library@oxfordshire.gov.uk",
      phone:"01993 898 187"
    },
    {
      libraryName:"thame library",
      address:"thame library",
      cityName:"thame",
      email:"thame.library@oxfordshire.gov.uk",
      phone:"01844 212 288"
    },
    {
      libraryName:"wallingford library",
      address:"high street",
      cityName:"wallingford",
      email:"wallingford.library@oxfordshire.gov.uk",
      phone:"01491 837 395"
    },
    {
      libraryName:"wantage library",
      address:"stirlings road",
      cityName:"wantage",
      email:"wantage.library@oxfordshire.gov.uk",
      phone:"01235 762 291"
    },
    {
      libraryName:"grove library",
      address:"millbrook",
      cityName:"wantage",
      email:"grove.library@oxfordshire.gov.uk",
      phone:"01235 763 841"
    },
    {
      libraryName:"watlington library",
      address:"greengates",
      cityName:"watlington",
      email:"watlington.library@oxfordshire.gov.uk",
      phone:"01491 612241"
    },
    {
      libraryName:"wheatley library",
      address:"the merry bells",
      cityName:"wheatley",
      email:"wheatley.library@oxfordshire.gov.uk",
      phone:"01865 875267"
    },
    {
      libraryName:"witney library",
      address:"welch way",
      cityName:"witney",
      email:"witney.library@oxfordshire.gov.uk",
      phone:"01993 703659"
    },
    {
      libraryName:"woodstock library",
      address:"hensington road",
      cityName:"woodstock",
      email:"woodstock.library@oxfordshire.gov.uk",
      phone:"01993 812 832"
    },
    {
      libraryName:"crymych library",
      address:"preseli school",
      cityName:"crymych",
      email:"",
      phone:""
    },
    {
      libraryName:"fishguard library",
      address:"high street",
      cityName:"fishguard",
      email:"",
      phone:""
    },
    {
      libraryName:"haverfordwest library",
      address:"dew street",
      cityName:"haverfordwest",
      email:"sandra.matthews@pembrokeshire.gov.uk",
      phone:"01437 775248"
    },
    {
      libraryName:"milford haven library",
      address:"hamilton terrace",
      cityName:"milford haven",
      email:"",
      phone:""
    },
    {
      libraryName:"narberth library",
      address:"st james street",
      cityName:"narberth",
      email:"",
      phone:""
    },
    {
      libraryName:"neyland library",
      address:"st clements road",
      cityName:"neyland",
      email:"",
      phone:""
    },
    {
      libraryName:"pembroke library",
      address:"38 main street",
      cityName:"pembroke",
      email:"",
      phone:""
    },
    {
      libraryName:"pembroke dock library",
      address:"water street",
      cityName:"pembroke",
      email:"",
      phone:""
    },
    {
      libraryName:"saundersfoot library",
      address:"regency hall",
      cityName:"saundersfoot",
      email:"",
      phone:""
    },
    {
      libraryName:"st davids library",
      address:"city hall",
      cityName:"st davids",
      email:"",
      phone:""
    },
    {
      libraryName:"tenby library",
      address:"greenhill house",
      cityName:"tenby",
      email:"",
      phone:""
    },
    {
      libraryName:"aberfeldy library",
      address:"bank street",
      cityName:"aberfeldy",
      email:"",
      phone:""
    },
    {
      libraryName:"alyth library",
      address:"airlie street",
      cityName:"alyth",
      email:"",
      phone:""
    },
    {
      libraryName:"auchterarder library",
      address:"chapel wynd",
      cityName:"auchterarder",
      email:"",
      phone:""
    },
    {
      libraryName:"birnam library",
      address:"station road",
      cityName:"birnam",
      email:"",
      phone:""
    },
    {
      libraryName:"blairgowrie library",
      address:"46a leslie street",
      cityName:"blairgowrie",
      email:"",
      phone:""
    },
    {
      libraryName:"comrie library",
      address:"drummond street",
      cityName:"comrie",
      email:"",
      phone:""
    },
    {
      libraryName:"coupar angus library",
      address:"cityname hall",
      cityName:"coupar angus",
      email:"",
      phone:""
    },
    {
      libraryName:"strathearn library",
      address:"pittenzie road",
      cityName:"crieff",
      email:"",
      phone:""
    },
    {
      libraryName:"crieff library",
      address:"6 comrie street",
      cityName:"crieff",
      email:"",
      phone:""
    },
    {
      libraryName:"kinross library",
      address:"27 high street",
      cityName:"kinross",
      email:"",
      phone:""
    },
    {
      libraryName:"loch leven library",
      address:"muirs",
      cityName:"kinross",
      email:"",
      phone:""
    },
    {
      libraryName:"perth a k bell library",
      address:"york place",
      cityName:"perth",
      email:"library@pkc.gov.uk",
      phone:"01738 444949"
    },
    {
      libraryName:"north inch library",
      address:"gowans terrace",
      cityName:"perth",
      email:"",
      phone:""
    },
    {
      libraryName:"west mill street library",
      address:"west mill street",
      cityName:"perth",
      email:"",
      phone:""
    },
    {
      libraryName:"pitlochry library",
      address:"26 atholl road",
      cityName:"pitlochry",
      email:"",
      phone:""
    },
    {
      libraryName:"scone library",
      address:"sandy road",
      cityName:"scone",
      email:"",
      phone:""
    },
    {
      libraryName:"brecon library",
      address:"ship street",
      cityName:"brecon",
      email:"brecon.library@powys.gov.uk",
      phone:"01874 623346"
    },
    {
      libraryName:"builth wells library",
      address:"20 high street",
      cityName:"builth wells",
      email:"",
      phone:""
    },
    {
      libraryName:"crickhowell library",
      address:"silver street",
      cityName:"crickhowell",
      email:"",
      phone:""
    },
    {
      libraryName:"hay-on-wye library",
      address:"chancery lane",
      cityName:"hay-on-wye",
      email:"",
      phone:""
    },
    {
      libraryName:"llandrindod library",
      address:"cefnllys road",
      cityName:"llandrindod wells",
      email:"llandrindod.library@powys.gov.uk",
      phone:"01597 826870"
    },
    {
      libraryName:"llanfair caereinion library",
      address:"the institute",
      cityName:"llanfair caereinion",
      email:"",
      phone:""
    },
    {
      libraryName:"llanfyllin library",
      address:"old county school",
      cityName:"llanfyllin",
      email:"",
      phone:""
    },
    {
      libraryName:"llanidloes library",
      address:"mount street",
      cityName:"llanidloes",
      email:"",
      phone:""
    },
    {
      libraryName:"llanwrtyd wells library",
      address:"county primary school",
      cityName:"llanwrtyd wells",
      email:"",
      phone:""
    },
    {
      libraryName:"machynlleth library",
      address:"maengwyn street",
      cityName:"machynlleth",
      email:"",
      phone:""
    },
    {
      libraryName:"montgomery library",
      address:"arthur street",
      cityName:"montgomery",
      email:"",
      phone:""
    },
    {
      libraryName:"newcityname library",
      address:"park lane",
      cityName:"newcityname",
      email:"newcityname.library@powys.gov.uk",
      phone:"01686 626934"
    },
    {
      libraryName:"presteigne library",
      address:"market hall",
      cityName:"presteigne",
      email:"",
      phone:""
    },
    {
      libraryName:"rhayader library",
      address:"west street",
      cityName:"rhayader",
      email:"",
      phone:""
    },
    {
      libraryName:"talgarth library",
      address:"new street",
      cityName:"talgarth",
      email:"",
      phone:""
    },
    {
      libraryName:"welshpool library",
      address:"brook street",
      cityName:"welshpool",
      email:"",
      phone:""
    },
    {
      libraryName:"ystradgynlais library",
      address:"temperance street",
      cityName:"ystradgynlais",
      email:"",
      phone:""
    },
    {
      libraryName:"bishopton library",
      address:"11 greenock road",
      cityName:"bishopton",
      email:"",
      phone:""
    },
    {
      libraryName:"bridge of weir library",
      address:"main street",
      cityName:"bridge of weir",
      email:"",
      phone:""
    },
    {
      libraryName:"erskine library",
      address:"bridgewater place",
      cityName:"erskine",
      email:"",
      phone:""
    },
    {
      libraryName:"gourock library",
      address:"kempock place",
      cityName:"gourock",
      email:"",
      phone:""
    },
    {
      libraryName:"watt library",
      address:"9 union street",
      cityName:"greenock",
      email:"library.watt@inverclyde.gov.uk",
      phone:"01475 715628"
    },
    {
      libraryName:"south west library",
      address:"barr's cottage",
      cityName:"greenock",
      email:"",
      phone:""
    },
    {
      libraryName:"inverkip library",
      address:"inverkip school",
      cityName:"inverkip",
      email:"",
      phone:""
    },
    {
      libraryName:"johnstone library",
      address:"houston court",
      cityName:"johnstone",
      email:"",
      phone:""
    },
    {
      libraryName:"kilmacolm library",
      address:"kilmacolm community centre",
      cityName:"killmacolm",
      email:"",
      phone:""
    },
    {
      libraryName:"linwood library",
      address:"ardlamont square",
      cityName:"linwood",
      email:"",
      phone:""
    },
    {
      libraryName:"lochwinnoch library",
      address:"old school",
      cityName:"lochwinnoch",
      email:"",
      phone:""
    },
    {
      libraryName:"paisley central library",
      address:"68 high street",
      cityName:"paisley",
      email:"",
      phone:""
    },
    {
      libraryName:"ralston library",
      address:"community centre",
      cityName:"paisley",
      email:"",
      phone:""
    },
    {
      libraryName:"foxbar library",
      address:"ivanhoe road",
      cityName:"paisley",
      email:"",
      phone:""
    },
    {
      libraryName:"glenburn library",
      address:"fairway avenue",
      cityName:"paisley",
      email:"",
      phone:""
    },
    {
      libraryName:"ferguslie library",
      address:"tannahill centre",
      cityName:"paisley",
      email:"",
      phone:""
    },
    {
      libraryName:"port glasgow library",
      address:"fore street",
      cityName:"port glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"renfrew library",
      address:"paisley road",
      cityName:"renfrew",
      email:"",
      phone:""
    },
    {
      libraryName:"abercynon library",
      address:"ynysmeurig road",
      cityName:"abercynon",
      email:"",
      phone:""
    },
    {
      libraryName:"aberdare library",
      address:"green street",
      cityName:"aberdare",
      email:"aberdare.library@rhondda-cynon-taff.gov.uk",
      phone:"01685 880050"
    },
    {
      libraryName:"cwmbach library",
      address:"philip row",
      cityName:"aberdare",
      email:"",
      phone:""
    },
    {
      libraryName:"beddau library",
      address:"parish road",
      cityName:"beddau",
      email:"",
      phone:""
    },
    {
      libraryName:"cilfynydd library",
      address:"cilfynydd primary school",
      cityName:"cilfynydd",
      email:"",
      phone:""
    },
    {
      libraryName:"ferndale library",
      address:"high street",
      cityName:"ferndale",
      email:"",
      phone:""
    },
    {
      libraryName:"glyncoch library",
      address:"craig-yr-hesg school",
      cityName:"glyncoch",
      email:"",
      phone:""
    },
    {
      libraryName:"hirwaun library",
      address:"high street",
      cityName:"hirwaun",
      email:"",
      phone:""
    },
    {
      libraryName:"llantrisant library",
      address:"model house",
      cityName:"llantrisant",
      email:"",
      phone:""
    },
    {
      libraryName:"maerdy library",
      address:"north terrace",
      cityName:"maerdy",
      email:"",
      phone:""
    },
    {
      libraryName:"mountain ash library",
      address:"knight street",
      cityName:"mountain ash",
      email:"",
      phone:""
    },
    {
      libraryName:"penrhiwceiber library",
      address:"rheola street",
      cityName:"mountain ash",
      email:"",
      phone:""
    },
    {
      libraryName:"penygraig library",
      address:"tylacelyn road",
      cityName:"penygraig",
      email:"",
      phone:""
    },
    {
      libraryName:"pontyclun library",
      address:"heol-y-felin",
      cityName:"pontyclun",
      email:"",
      phone:""
    },
    {
      libraryName:"llanharry community library",
      address:"ysgol gyfun llanhari",
      cityName:"pontyclun",
      email:"",
      phone:""
    },
    {
      libraryName:"pontypridd library",
      address:"library road",
      cityName:"pontypridd",
      email:"pontypridd.library@rhondda-cynon-taff.gov.uk",
      phone:"01443 486850"
    },
    {
      libraryName:"church village library",
      address:"main road",
      cityName:"pontypridd",
      email:"",
      phone:""
    },
    {
      libraryName:"porth library",
      address:"pontypridd road",
      cityName:"porth",
      email:"",
      phone:""
    },
    {
      libraryName:"rhydyfelin library",
      address:"poplar road",
      cityName:"rhydyfelin",
      email:"",
      phone:""
    },
    {
      libraryName:"taffs well library",
      address:"cardiff road",
      cityName:"taffs well",
      email:"",
      phone:""
    },
    {
      libraryName:"talbot green library",
      address:"3 heol y gyfraith",
      cityName:"talbot green",
      email:"",
      phone:""
    },
    {
      libraryName:"ton pentre library",
      address:"church road",
      cityName:"ton pentre",
      email:"",
      phone:""
    },
    {
      libraryName:"tonypandy library",
      address:"de winton street",
      cityName:"tonypandy",
      email:"",
      phone:""
    },
    {
      libraryName:"tonyrefail library",
      address:"high street",
      cityName:"tonyrefail",
      email:"",
      phone:""
    },
    {
      libraryName:"treherbert library",
      address:"bute square",
      cityName:"treherbert",
      email:"",
      phone:""
    },
    {
      libraryName:"treorchy library",
      address:"station road",
      cityName:"treorchy",
      email:"",
      phone:""
    },
    {
      libraryName:"tylorscityname library",
      address:"edmund street",
      cityName:"tylorscityname",
      email:"",
      phone:""
    },
    {
      libraryName:"ynyshir library",
      address:"ynyshir road",
      cityName:"ynyshir",
      email:"",
      phone:""
    },
    {
      libraryName:"ynysbwl library",
      address:"42 robert street",
      cityName:"ynysybwl",
      email:"",
      phone:""
    },
    {
      libraryName:"invergordon library",
      address:"high street",
      cityName:"invergordon",
      email:"",
      phone:""
    },
    {
      libraryName:"alness library",
      address:"averon centre",
      cityName:"alness",
      email:"",
      phone:""
    },
    {
      libraryName:"cromarty library",
      address:"hugh miller institute",
      cityName:"cromarty",
      email:"",
      phone:""
    },
    {
      libraryName:"dingwall library",
      address:"dingwell academy",
      cityName:"dingwall",
      email:"",
      phone:""
    },
    {
      libraryName:"fortrose community library",
      address:"fortrose academy",
      cityName:"fortrose",
      email:"",
      phone:""
    },
    {
      libraryName:"gairloch community library",
      address:"auchtercairn",
      cityName:"gairloch",
      email:"",
      phone:""
    },
    {
      libraryName:"lochcarron library",
      address:"howard doris centre",
      cityName:"lochcarron",
      email:"",
      phone:""
    },
    {
      libraryName:"muir of ord library",
      address:"tarradale school",
      cityName:"muir of ord",
      email:"",
      phone:""
    },
    {
      libraryName:"tain library",
      address:"stafford street",
      cityName:"tain",
      email:"",
      phone:""
    },
    {
      libraryName:"ullapool library",
      address:"community high school",
      cityName:"ullapool",
      email:"",
      phone:""
    },
    {
      libraryName:"achiltibuie library",
      address:"coigach community hall",
      cityName:"ullapool",
      email:"",
      phone:""
    },
    {
      libraryName:"ketton library",
      address:"high street",
      cityName:"ketton",
      email:"",
      phone:""
    },
    {
      libraryName:"oakham library",
      address:"catmose street",
      cityName:"oakham",
      email:"oakhamlibrary@rutland.gov.uk",
      phone:"01572 722918"
    },
    {
      libraryName:"ryhall library",
      address:"coppice road",
      cityName:"ryhall",
      email:"",
      phone:""
    },
    {
      libraryName:"uppingham library",
      address:"queen street",
      cityName:"uppingham",
      email:"",
      phone:""
    },
    {
      libraryName:"coldstream library",
      address:"gateway centre",
      cityName:"coldstream",
      email:"",
      phone:""
    },
    {
      libraryName:"duns library",
      address:"49 newcityname street",
      cityName:"duns",
      email:"",
      phone:""
    },
    {
      libraryName:"earlston library",
      address:"earlston high school",
      cityName:"earlston",
      email:"",
      phone:""
    },
    {
      libraryName:"eyemouth library",
      address:"manse road",
      cityName:"eyemouth",
      email:"",
      phone:""
    },
    {
      libraryName:"galashiels library",
      address:"lawyers brae",
      cityName:"galashiels",
      email:"",
      phone:""
    },
    {
      libraryName:"hawick library",
      address:"north bridge street",
      cityName:"hawick",
      email:"",
      phone:""
    },
    {
      libraryName:"innerleithen library",
      address:"buccleuch street",
      cityName:"innerleithen",
      email:"",
      phone:""
    },
    {
      libraryName:"jedburgh library",
      address:"castlegate",
      cityName:"jedburgh",
      email:"",
      phone:""
    },
    {
      libraryName:"kelso library",
      address:"bowmont street",
      cityName:"kelso",
      email:"",
      phone:""
    },
    {
      libraryName:"melrose library",
      address:"18 market square",
      cityName:"melrose",
      email:"",
      phone:""
    },
    {
      libraryName:"peebles library",
      address:"chambers institute",
      cityName:"peebles",
      email:"",
      phone:""
    },
    {
      libraryName:"selkirk library",
      address:"ettrick terrace",
      cityName:"selkirk",
      email:"",
      phone:""
    },
    {
      libraryName:"library service hq",
      address:"st marys mill",
      cityName:"selkirk",
      email:"",
      phone:""
    },
    {
      libraryName:"shetland library",
      address:"lower hillhead",
      cityName:"lerwick",
      email:"shetlandlibrary@shetland.gov.uk",
      phone:"01595 743868"
    },
    {
      libraryName:"bishops castle library",
      address:"station street",
      cityName:"bishops castle",
      email:"bishopscastle.library@shropshire.gov.uk",
      phone:"01588 638215"
    },
    {
      libraryName:"bridgnorth library",
      address:"listley street",
      cityName:"bridgnorth",
      email:"bridgnorth.library@shropshire.gov.uk",
      phone:"01746 763358"
    },
    {
      libraryName:"highley library",
      address:"severn centre",
      cityName:"bridgnorth",
      email:"highley.library@shropshire.gov.uk",
      phone:"01746 860396"
    },
    {
      libraryName:"broseley library",
      address:"the old school",
      cityName:"broseley",
      email:"broseley.library@shropshire.gov.uk",
      phone:"01952 884119"
    },
    {
      libraryName:"church stretton library and information centre",
      address:"church street",
      cityName:"church stretton",
      email:"churchstretton.library@shropshire.gov.uk",
      phone:"01694 722535"
    },
    {
      libraryName:"craven arms library",
      address:"shropshire hills discovery centre",
      cityName:"craven arms",
      email:"cravenarms.library@shropshire.gov.uk",
      phone:"01588 676060"
    },
    {
      libraryName:"ellesmere library",
      address:"fullwood house",
      cityName:"ellesmere",
      email:"ellesmere.library@shropshire.gov.uk",
      phone:"01691 622611"
    },
    {
      libraryName:"ludlow library",
      address:"7/9 the parkway",
      cityName:"ludlow",
      email:"ludlow.library@shropshire.gov.uk",
      phone:"01584 813600"
    },
    {
      libraryName:"market drayton library",
      address:"51 cheshire street",
      cityName:"market drayton",
      email:"marketdrayton.library@shropshire.gov.uk",
      phone:"01630 652105"
    },
    {
      libraryName:"much wenlock library",
      address:"the corn exchange",
      cityName:"much wenlock",
      email:"muchwenlock.library@shropshire.gov.uk",
      phone:"01952 728293"
    },
    {
      libraryName:"newport library",
      address:"53-55 high street",
      cityName:"newport",
      email:"newport.library@telford.gov",
      phone:"01952 382965"
    },
    {
      libraryName:"gobowen library",
      address:"st martins road",
      cityName:"oswestry",
      email:"gobowen.library@shropshire.gov.uk",
      phone:"01691 653388"
    },
    {
      libraryName:"oswestry library",
      address:"arthur st",
      cityName:"oswestry",
      email:"oswestry.library@shropshire.gov.uk",
      phone:"01691 677388"
    },
    {
      libraryName:"shifnal library",
      address:"broadway",
      cityName:"shifnal",
      email:"shifnal.library@shropshire.gov.uk",
      phone:"01952 461018"
    },
    {
      libraryName:"harlescott library",
      address:"meadow farm drive",
      cityName:"shrewsbury",
      email:"harlescott.library@shropshire.gov.uk",
      phone:"01743 210810"
    },
    {
      libraryName:"shrewsbury library",
      address:"castle gates",
      cityName:"shrewsbury",
      email:"shrewsbury.library@shropshire.gov.uk",
      phone:"01743 255300"
    },
    {
      libraryName:"shrewsbury library",
      address:"castle gates",
      cityName:"shrewsbury",
      email:"shrewsbury.library@shropshire-cc.gov.uk",
      phone:"01743 255300"
    },
    {
      libraryName:"pontesbury library",
      address:"bogey lane",
      cityName:"shrewsbury",
      email:"pontesbury.library@shropshire.gov.uk",
      phone:"01743 791171"
    },
    {
      libraryName:"bayston hill library",
      address:"lythwood road",
      cityName:"shrewsbury",
      email:"baystonhill.library@shropshire.gov.uk",
      phone:"01743 872412"
    },
    {
      libraryName:"wem library",
      address:"talbot house",
      cityName:"shrewsbury",
      email:"wem.library@shropshire.gov.uk",
      phone:"01939 236993"
    },
    {
      libraryName:"shawbury library",
      address:"parish hall",
      cityName:"shrewsbury",
      email:"shawbury.library@shropshire.gov.uk",
      phone:"01939 250021"
    },
    {
      libraryName:"wellington library",
      address:"23 walker street",
      cityName:"telford",
      email:"wellington.library@telford.gov.uk",
      phone:"01952 2382990"
    },
    {
      libraryName:"oakengates library",
      address:"426 limes walk",
      cityName:"telford",
      email:"oakengates.library@telford.gov.uk",
      phone:"01952 382390"
    },
    {
      libraryName:"dawley library",
      address:"king street",
      cityName:"telford",
      email:"dawley.library@telford.gov.uk",
      phone:"01952 382901"
    },
    {
      libraryName:"donnington library",
      address:"turreff avenue",
      cityName:"telford",
      email:"donnington.library@telford.gov.uk",
      phone:"01952 382905"
    },
    {
      libraryName:"telford library",
      address:"st quentin gate",
      cityName:"telford",
      email:"telford.library@telford.gov.uk",
      phone:"01952 382915"
    },
    {
      libraryName:"madeley library",
      address:"russell square",
      cityName:"telford",
      email:"madeley.library@telford.gov.uk",
      phone:"01952 382950"
    },
    {
      libraryName:"stirchley library",
      address:"stirchley centre",
      cityName:"telford",
      email:"stirchley.library@telford.gov.uk",
      phone:"01952 382980"
    },
    {
      libraryName:"hadley library",
      address:"crescent road",
      cityName:"telford",
      email:"hadley.library@telford.gov.uk",
      phone:"01952 388475"
    },
    {
      libraryName:"whitchurch library",
      address:"high street",
      cityName:"whitchurch",
      email:"whitchurch.library@shropshire.gov.uk",
      phone:"01948 662238"
    },
    {
      libraryName:"banwell library",
      address:"40 west street",
      cityName:"banwell",
      email:"banwell.library@n-somerset.gov.uk",
      phone:"01934 426 160"
    },
    {
      libraryName:"bath central library",
      address:"the podium centre",
      cityName:"bath",
      email:"bath_library@bathnes.gov.uk",
      phone:"01225 39 4041"
    },
    {
      libraryName:"radstock library",
      address:"the street",
      cityName:"bath",
      email:"councilconnect@bathnes.gov.uk",
      phone:"01225 39 4041"
    },
    {
      libraryName:"weston library",
      address:"15 church street",
      cityName:"bath",
      email:"",
      phone:"816 640 2874"
    },
    {
      libraryName:"moorland road library",
      address:"moorland road",
      cityName:"bath",
      email:"",
      phone:""
    },
    {
      libraryName:"midsomer norton library",
      address:"119 high street",
      cityName:"bath",
      email:"",
      phone:""
    },
    {
      libraryName:"bishops lydeard library",
      address:"church street",
      cityName:"bishops lydeard",
      email:"bldlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"bridgwater library",
      address:"binford place",
      cityName:"bridgwater",
      email:"brwlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"nailsea library",
      address:"somerset square",
      cityName:"bristol",
      email:"nailsea.library@n-somerset.gov.uk",
      phone:"01934 426 030"
    },
    {
      libraryName:"long ashton library",
      address:"lovelinch gardens",
      cityName:"bristol",
      email:"longashton.library@n-somerset.gov.uk",
      phone:"01934 426 060"
    },
    {
      libraryName:"pill library",
      address:"crockerne house",
      cityName:"bristol",
      email:"pill.library@n-somerset.gov.uk",
      phone:"01934 426 070"
    },
    {
      libraryName:"yatton library",
      address:"48 high street",
      cityName:"bristol",
      email:"yatton.library@n-somerset.gov.uk",
      phone:"01934 426 100"
    },
    {
      libraryName:"congresbury library",
      address:"station road",
      cityName:"bristol",
      email:"congresbury.library@n-somerset.gov.uk",
      phone:"01934 426 200"
    },
    {
      libraryName:"backwell library",
      address:"farleigh road",
      cityName:"bristol",
      email:"backwell@parkwood-leisure.co.uk",
      phone:"1933 426 080"
    },
    {
      libraryName:"bruton library",
      address:"high street",
      cityName:"bruton",
      email:"",
      phone:""
    },
    {
      libraryName:"burnham-on-sea library",
      address:"princess street",
      cityName:"burhham",
      email:"",
      phone:""
    },
    {
      libraryName:"castle cary library",
      address:"bailey hill",
      cityName:"castle cary",
      email:"ccylib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"chard library",
      address:"holyrood lace mill",
      cityName:"chard",
      email:"chalib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"cheddar library",
      address:"union street",
      cityName:"cheddar",
      email:"chelib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"clevedon library",
      address:"37 old church road",
      cityName:"clevedon",
      email:"clevedon.library@n-somerset.gov.uk",
      phone:"01934 426 020"
    },
    {
      libraryName:"crewkerne library",
      address:"falkland square",
      cityName:"crewkerne",
      email:"crwlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"dulverton library",
      address:"7-9 fore street",
      cityName:"dulverton",
      email:"dullib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"frome library",
      address:"justice lane",
      cityName:"frome",
      email:"frolib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"glastonbury library",
      address:"1 orchard court",
      cityName:"glastonbury",
      email:"glalib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"highbridge library",
      address:"alpha house",
      cityName:"highbridge",
      email:"higlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"ilminster library",
      address:"ditton street",
      cityName:"ilminster",
      email:"ilmlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"keynsham library",
      address:"the centre",
      cityName:"keynsham",
      email:"",
      phone:""
    },
    {
      libraryName:"langport library",
      address:"whatley",
      cityName:"langport",
      email:"lanlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"martock library",
      address:"shopping centre",
      cityName:"martock",
      email:"marlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"milborne port library",
      address:"cross cottage",
      cityName:"milborne port",
      email:"mptlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"minehead library",
      address:"bancks street",
      cityName:"minehead",
      email:"minlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"nether stowey library",
      address:"castle street",
      cityName:"nether stowey",
      email:"neslib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"north petherton library",
      address:"quantock house",
      cityName:"north  petherton",
      email:"npnlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"paulton library",
      address:"central methodist church",
      cityName:"paulton",
      email:"",
      phone:""
    },
    {
      libraryName:"porlock library",
      address:"the old school centre",
      cityName:"porlock",
      email:"porlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"portishead new library",
      address:"horatio house, 24 harbour road",
      cityName:"portishead",
      email:"portishead.library@n-somerset.gov.uk",
      phone:"01934 426 040"
    },
    {
      libraryName:"saltford library",
      address:"478a bath road",
      cityName:"saltford",
      email:"councilconnect@bathnes.gov.uk",
      phone:"01225 39 4041"
    },
    {
      libraryName:"shepton mallet library",
      address:"2 market place",
      cityName:"shepton mallet",
      email:"shmlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"somerton library",
      address:"coxs yard",
      cityName:"somerton",
      email:"somlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"south petherton library",
      address:"st. james corner",
      cityName:"south petherton",
      email:"spnlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"street library",
      address:"1 leigh road",
      cityName:"street",
      email:"",
      phone:""
    },
    {
      libraryName:"taunton library",
      address:"paul street",
      cityName:"taunton",
      email:"taulib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"priorswood library",
      address:"eastwick road",
      cityName:"taunton",
      email:"prwlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"somerset heritage centre and libraries",
      address:"brunel way",
      cityName:"taunton",
      email:"",
      phone:""
    },
    {
      libraryName:"watchet library",
      address:"11 the esplanade",
      cityName:"watchet",
      email:"watlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"wells library",
      address:"union street",
      cityName:"wells",
      email:"wlslib@somerset.gov.uk",
      phone:"01328 710467"
    },
    {
      libraryName:"weston-super-mare library",
      address:"the boulevard",
      cityName:"weston super mare",
      email:"weston.library@n-somerset.gov.uk",
      phone:"01934 426 010"
    },
    {
      libraryName:"worle library",
      address:"the maltings",
      cityName:"weston super mare",
      email:"worle.library@n-somerset.gov.uk",
      phone:"01934 426 090"
    },
    {
      libraryName:"campus library",
      address:"highlands lane",
      cityName:"weston super mare",
      email:"",
      phone:""
    },
    {
      libraryName:"healthy living centre",
      address:"68 lonsdale avenue",
      cityName:"weston-super-mare",
      email:"hlc.library@n-somerset.gov.uk",
      phone:"01934 426 111"
    },
    {
      libraryName:"williton library",
      address:"killick way",
      cityName:"williton",
      email:"willib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"wincanton library",
      address:"carrington way",
      cityName:"wincanton",
      email:"winlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"winscombe library",
      address:"23 woodborough road",
      cityName:"winscombe",
      email:"winscombe.library@n-somerset.gov.uk",
      phone:"01934 426 050"
    },
    {
      libraryName:"wiveliscombe library",
      address:"9 the square",
      cityName:"wiveliscombe",
      email:"wivlib@somerset.gov.uk",
      phone:"0845 345 9177"
    },
    {
      libraryName:"yeovil library",
      address:"king george street",
      cityName:"yeovil",
      email:"",
      phone:""
    },
    {
      libraryName:"sunningdale library",
      address:"monmouth hall",
      cityName:"yeovil",
      email:"",
      phone:""
    },
    {
      libraryName:"whitchurch library",
      address:"park road",
      cityName:"cardiff",
      email:"whitchurch.library@bristol.gov.uk",
      phone:"0117 9031185"
    },
    {
      libraryName:"grangecityname library",
      address:"redlaver street",
      cityName:"cardiff",
      email:"grangecityname_library@redcar-cleveland.gov.uk",
      phone:"01642 454417"
    },
    {
      libraryName:"cardiff central library",
      address:"the hayes",
      cityName:"cardiff",
      email:"centrallibrary@cardiff.gov.uk",
      phone:"029 2038 2116"
    },
    {
      libraryName:"llandaff north library",
      address:"gabalfa avenue",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"llanishen library",
      address:"31 kimberely terrace",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"rhiwbina library",
      address:"pen-y-dre",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"tongwynlais library",
      address:"tanyard day centre",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"radyr library",
      address:"park road",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"splott library",
      address:"star centre",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"penylan library",
      address:"penylan road",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"rhydypennau library",
      address:"llandennis road",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"llanedeyrn library",
      address:"74 the maelfa",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"roath library",
      address:"newport road",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"cathays library",
      address:"fairoak road",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"trowbridge/st mellons library",
      address:"crickhowell road",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"rumney library",
      address:"brachdy road",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"llanrumney library",
      address:"countisbury avenue",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"canton library",
      address:"library street",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"fairwater library",
      address:"doyle avenue",
      cityName:"cardiff",
      email:"",
      phone:""
    },
    {
      libraryName:"emersons green library",
      address:"emersons way",
      cityName:"emersons green",
      email:"emersonsgreen.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"hanham library",
      address:"high street",
      cityName:"hanham",
      email:"hanham.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"kingswood library",
      address:"high street",
      cityName:"kingswood",
      email:"kingswood.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"patchway library",
      address:"casson centre, rodway road",
      cityName:"patchway",
      email:"patchway.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"staple hill library",
      address:"broad street",
      cityName:"stapel hill",
      email:"staplehill.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"thornbury library",
      address:"st mary street",
      cityName:"thornbury",
      email:"thornbury.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"winterbourne library",
      address:"flax pits lane",
      cityName:"winterbourne",
      email:"winterbourne.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"yate library",
      address:"44 west walk",
      cityName:"yate",
      email:"yate.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"downend library",
      address:"buckingham gardens",
      cityName:"bristol",
      email:"downend.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"filton library",
      address:"the shield retail park",
      cityName:"filton",
      email:"filton.library@southglos.gov.uk",
      phone:"01454 868006"
    },
    {
      libraryName:"biggar library",
      address:"market road",
      cityName:"biggar",
      email:"",
      phone:""
    },
    {
      libraryName:"blantyre library",
      address:"1a clydeview shopping centre",
      cityName:"blantyre",
      email:"",
      phone:""
    },
    {
      libraryName:"bothwell library",
      address:"the donald institute",
      cityName:"bothwell",
      email:"",
      phone:""
    },
    {
      libraryName:"cambuslang library",
      address:"27 main street",
      cityName:"cambuslang",
      email:"",
      phone:""
    },
    {
      libraryName:"carluke library",
      address:"carnwath road",
      cityName:"carluke",
      email:"",
      phone:""
    },
    {
      libraryName:"east kilbride central library",
      address:"olympia centre",
      cityName:"east kilbride",
      email:"ibek@library.s-lanark.org",
      phone:"01355 220046"
    },
    {
      libraryName:"st.leonards library",
      address:"st. leonards square",
      cityName:"east kilbride",
      email:"",
      phone:""
    },
    {
      libraryName:"westwood library",
      address:"121 westwood square",
      cityName:"east kilbride",
      email:"",
      phone:""
    },
    {
      libraryName:"greenhills library",
      address:"greenhills square",
      cityName:"east kilbride",
      email:"",
      phone:""
    },
    {
      libraryName:"forth library",
      address:"forth primary school",
      cityName:"forth",
      email:"",
      phone:""
    },
    {
      libraryName:"kings park library",
      address:"275 castlemilk road",
      cityName:"glasgow",
      email:"",
      phone:""
    },
    {
      libraryName:"halfway library",
      address:"211 hamilton road",
      cityName:"halfway",
      email:"",
      phone:""
    },
    {
      libraryName:"whitehill library",
      address:"whitehill community centre",
      cityName:"hamilton",
      email:"",
      phone:""
    },
    {
      libraryName:"hamilton cityname house library",
      address:"102 cadzow street",
      cityName:"hamilton",
      email:"",
      phone:""
    },
    {
      libraryName:"fairhill library",
      address:"south lanarkshire lifestyles",
      cityName:"hamilton",
      email:"",
      phone:""
    },
    {
      libraryName:"hillhouse library",
      address:"hillhouse road",
      cityName:"hamilton",
      email:"",
      phone:""
    },
    {
      libraryName:"burnbank library",
      address:"burnbank centre",
      cityName:"hamilton",
      email:"",
      phone:""
    },
    {
      libraryName:"lanark library",
      address:"16 hope street",
      cityName:"lanark",
      email:"",
      phone:""
    },
    {
      libraryName:"larkhall library",
      address:"muir street",
      cityName:"larkhall",
      email:"",
      phone:""
    },
    {
      libraryName:"lesmahagow library",
      address:"48 abbeygreen",
      cityName:"lesmahagow",
      email:"",
      phone:""
    },
    {
      libraryName:"rutherglen library",
      address:"163 main street",
      cityName:"rutherglen",
      email:"",
      phone:""
    },
    {
      libraryName:"cathkin library",
      address:"21 lovat place",
      cityName:"rutherglen",
      email:"",
      phone:""
    },
    {
      libraryName:"stonehouse library",
      address:"4/5 the cross",
      cityName:"stonehouse",
      email:"",
      phone:""
    },
    {
      libraryName:"strathaven library",
      address:"glasgow road",
      cityName:"strathaven",
      email:"",
      phone:""
    },
    {
      libraryName:"uddingston library",
      address:"51 bellshill road",
      cityName:"uddingston",
      email:"",
      phone:""
    },
    {
      libraryName:"codsall library",
      address:"south staffordshire district council offices",
      cityName:"codsall",
      email:"",
      phone:""
    },
    {
      libraryName:"worsbrough library",
      address:"elm house estate",
      cityName:"barnsley",
      email:"",
      phone:"01226 203372"
    },
    {
      libraryName:"monk bretton library",
      address:"lamb lane",
      cityName:"barnsley",
      email:"",
      phone:"01226 206714"
    },
    {
      libraryName:"roundhouse library and lifelong learning centre",
      address:"laithes crescent",
      cityName:"barnsley",
      email:"",
      phone:"01226 244528"
    },
    {
      libraryName:"dodworth library",
      address:"high street",
      cityName:"barnsley",
      email:"",
      phone:"01226 281395"
    },
    {
      libraryName:"kendray library",
      address:"kendray resource centre, thornton road",
      cityName:"barnsley",
      email:"",
      phone:"01226 284581"
    },
    {
      libraryName:"mapplewell and staincross library",
      address:"mapplewell and staincross village hall, darton lane",
      cityName:"barnsley",
      email:"",
      phone:"01226 382309"
    },
    {
      libraryName:"grimethorpe library",
      address:"acorn centre",
      cityName:"barnsley",
      email:"",
      phone:"01226 712575"
    },
    {
      libraryName:"cudworth library",
      address:"roberts street",
      cityName:"barnsley",
      email:"",
      phone:"01226 717531"
    },
    {
      libraryName:"hoyland nether library",
      address:"high croft",
      cityName:"barnsley",
      email:"",
      phone:"01226 743434"
    },
    {
      libraryName:"darfield library",
      address:"church street",
      cityName:"barnsley",
      email:"",
      phone:"01226 752548"
    },
    {
      libraryName:"wombwell library",
      address:"station road",
      cityName:"barnsley",
      email:"",
      phone:"01226 753846"
    },
    {
      libraryName:"priory information and resource centre library",
      address:"priory campus",
      cityName:"barnsley",
      email:"",
      phone:"01226 770610"
    },
    {
      libraryName:"barnsley central library",
      address:"shambles street",
      cityName:"barnsley",
      email:"barnsleylibraryenquiries@barnsley.gov.uk",
      phone:"01226 773930"
    },
    {
      libraryName:"royston library and lifelong learning centre",
      address:"station road",
      cityName:"barnsley",
      email:"",
      phone:"01226 787222"
    },
    {
      libraryName:"sunnybank early years library",
      address:"sunnybank children's centre",
      cityName:"barnsley",
      email:"",
      phone:""
    },
    {
      libraryName:"conisbrough library",
      address:"old road",
      cityName:"conisbrough",
      email:"",
      phone:""
    },
    {
      libraryName:"intake library",
      address:"montrose avenue",
      cityName:"doncaster",
      email:"intstaff@doncaster.gov.uk",
      phone:"01302 367225"
    },
    {
      libraryName:"bessacarr library",
      address:"alston road",
      cityName:"doncaster",
      email:"bessacarr.library@doncaster.gov.uk",
      phone:"01302 530708"
    },
    {
      libraryName:"cantley library",
      address:"goodison boulevard",
      cityName:"doncaster",
      email:"cantley.library@doncaster.gov.uk",
      phone:"01302 535614"
    },
    {
      libraryName:"carcroft library headquarters",
      address:"skellow road",
      cityName:"doncaster",
      email:"bibliographical.services@doncaster.gov.uk",
      phone:"01302 573080"
    },
    {
      libraryName:"edlington library",
      address:"martinwells centre",
      cityName:"doncaster",
      email:"edlington.library1@doncaster.gov.uk",
      phone:"01302 736471"
    },
    {
      libraryName:"bircotes library",
      address:"scrooby road",
      cityName:"doncaster",
      email:"bircotes.library@nottscc.gov.uk",
      phone:"01302 742384"
    },
    {
      libraryName:"tickhill library",
      address:"castlegate",
      cityName:"doncaster",
      email:"tickhill.library@doncaster.gov.uk",
      phone:"01302 742871"
    },
    {
      libraryName:"scawthorpe library",
      address:"amersall road",
      cityName:"doncaster",
      email:"scawthorpe.library@doncaster.gov.uk",
      phone:"01302 781786"
    },
    {
      libraryName:"sprotbrough library",
      address:"sprotbrough road",
      cityName:"doncaster",
      email:"sprotbrough.libraries@doncaster.gov.uk",
      phone:"01302 782436"
    },
    {
      libraryName:"stainforth library",
      address:"church road",
      cityName:"doncaster",
      email:"stainforth.library@doncaster.gov.uk",
      phone:"01302 841239"
    },
    {
      libraryName:"rossington library",
      address:"mcconnell crescent",
      cityName:"doncaster",
      email:"rossington.library@doncaster.gov.uk",
      phone:"01302 868295"
    },
    {
      libraryName:"edenthorpe library",
      address:"thorne road",
      cityName:"doncaster",
      email:"edenthorpe.library@doncaster.gov.uk",
      phone:"01302 884580"
    },
    {
      libraryName:"moorends library",
      address:"the surestart building",
      cityName:"doncaster",
      email:"moorends.library@doncaster.gov.uk",
      phone:"01405 812758"
    },
    {
      libraryName:"mexborough library",
      address:"john street",
      cityName:"doncaster",
      email:"mexborough.library@doncaster.gov.uk",
      phone:"01709 582037"
    },
    {
      libraryName:"hatfield library",
      address:"high street",
      cityName:"doncaster",
      email:"",
      phone:"0300123 4049"
    },
    {
      libraryName:"balby library",
      address:"high road",
      cityName:"doncaster",
      email:"balby.library@doncaster.gov.uk",
      phone:"1301 853656"
    },
    {
      libraryName:"doncaster central library",
      address:"waterdale",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"bawtry library",
      address:"doncaster road",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"armthorpe library",
      address:"church street",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"warmsworth library",
      address:"edlington lane",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"bentley library learn direct centre",
      address:"chapel street",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"askern library",
      address:"station road",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"woodlands library",
      address:"windmill balk lane",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"thorne library",
      address:"the vermuyden centre",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"denaby main library",
      address:"springwell centre",
      cityName:"doncaster",
      email:"",
      phone:""
    },
    {
      libraryName:"swinton library",
      address:"station street",
      cityName:"mexborough",
      email:"swinton.library@rotherham.gov.uk",
      phone:"01709 583116"
    },
    {
      libraryName:"thorpe hesley community library",
      address:"sough hall avenue",
      cityName:"rotherham",
      email:"thorpehesley.library@rotherham.gov.uk",
      phone:"0114 245 7027"
    },
    {
      libraryName:"mowbray gardens library",
      address:"herringthorpe valley road",
      cityName:"rotherham",
      email:"mowbraygardens.library@rotherham.gov.uk",
      phone:"01709 370038"
    },
    {
      libraryName:"brinsworth library",
      address:"ellis street",
      cityName:"rotherham",
      email:"brinsworth.library@rotherham.gov.uk",
      phone:"01709 373 028"
    },
    {
      libraryName:"rawmarsh library",
      address:"rawmarsh hill",
      cityName:"rotherham",
      email:"rawmarsh.library@rotherham.gov.uk",
      phone:"01709 522588"
    },
    {
      libraryName:"wickersley library",
      address:"286 bawtry road",
      cityName:"rotherham",
      email:"wickersley.library@rotherham.gov.uk",
      phone:"01709 544134"
    },
    {
      libraryName:"thurcroft library",
      address:"school road",
      cityName:"rotherham",
      email:"thurcroft.library@rotherham.gov.uk",
      phone:"01709 546150"
    },
    {
      libraryName:"greasbrough library",
      address:"coach road",
      cityName:"rotherham",
      email:"greasbrough.library@rotherham.gov.uk",
      phone:"01709 551477"
    },
    {
      libraryName:"kimberworth library",
      address:"church street",
      cityName:"rotherham",
      email:"kimberworth.library@rotherham.gov.uk",
      phone:"01709 558581"
    },
    {
      libraryName:"maltby library",
      address:"high street",
      cityName:"rotherham",
      email:"maltby.library@rotherham.gov.uk",
      phone:"01709 812150"
    },
    {
      libraryName:"rotherham library",
      address:"walker place",
      cityName:"rotherham",
      email:"central-library-services@rotherham.gov.uk",
      phone:"01709 823672"
    },
    {
      libraryName:"wath library",
      address:"montgomery road",
      cityName:"rotherham",
      email:"wath.library@rotherham.gov.uk",
      phone:"01709 873542"
    },
    {
      libraryName:"thurnscoe library",
      address:"2 shepherd lane",
      cityName:"rotherham",
      email:"",
      phone:"01709 890001"
    },
    {
      libraryName:"goldthorpe library",
      address:"barnsley road",
      cityName:"rotherham",
      email:"",
      phone:"01709 893278"
    },
    {
      libraryName:"chapelcityname library",
      address:"nether ley avenue",
      cityName:"sheffield",
      email:"chapelcityname.library@sheffield.gov.uk",
      phone:"0114 203 7000/1"
    },
    {
      libraryName:"highfield library",
      address:"london road",
      cityName:"sheffield",
      email:"highfield.library@sheffield.gov.uk",
      phone:"0114 203 7204"
    },
    {
      libraryName:"ecclesall library",
      address:"120 eccleshall road south",
      cityName:"sheffield",
      email:"ecclesall.library@sheffield.gov.uk",
      phone:"0114 203 7222"
    },
    {
      libraryName:"darnall library",
      address:"britannia road",
      cityName:"sheffield",
      email:"darnall.library@sheffield.gov.uk",
      phone:"0114 203 7429"
    },
    {
      libraryName:"tinsley library",
      address:"tinsley shopping centre",
      cityName:"sheffield",
      email:"tinsley.library@sheffield.gov.uk",
      phone:"0114 203 7432"
    },
    {
      libraryName:"firth park library",
      address:"443 firth park road",
      cityName:"sheffield",
      email:"firthpark.library@sheffield.gov.uk",
      phone:"0114 203 7433"
    },
    {
      libraryName:"greenhill library",
      address:"hemper lane",
      cityName:"sheffield",
      email:"",
      phone:"0114 203 7700"
    },
    {
      libraryName:"jordanthorpe library",
      address:"15 jordanthorpe centre",
      cityName:"sheffield",
      email:"jordanthorpe.library@sheffield.gov.uk",
      phone:"0114 203 7701"
    },
    {
      libraryName:"manor library",
      address:"ridgeway road",
      cityName:"sheffield",
      email:"manor.library@sheffield.gov.uk",
      phone:"0114 203 7805"
    },
    {
      libraryName:"frecheville library",
      address:"smalldale road",
      cityName:"sheffield",
      email:"frecheville.library@sheffield.gov.uk",
      phone:"0114 203 7817"
    },
    {
      libraryName:"burngreave library",
      address:"179 spital hill",
      cityName:"sheffield",
      email:"burngreave.library@sheffield.gov.uk",
      phone:"0114 203 9002"
    },
    {
      libraryName:"hillsborough library",
      address:"middlewood road",
      cityName:"sheffield",
      email:"hillsborough.library@sheffield.gov.uk",
      phone:"0114 203 9529"
    },
    {
      libraryName:"southey library",
      address:"moonshine lane",
      cityName:"sheffield",
      email:"southey.library@sheffield.gov.uk",
      phone:"0114 203 9531"
    },
    {
      libraryName:"walkley library",
      address:"south road",
      cityName:"sheffield",
      email:"walkley.library@sheffield.gov.uk",
      phone:"0114 231 2947"
    },
    {
      libraryName:"gleadless library",
      address:"white lane",
      cityName:"sheffield",
      email:"gleadless.library@sheffield.gov.uk",
      phone:"0114 239 4630"
    },
    {
      libraryName:"newfield green library",
      address:"gleadless road",
      cityName:"sheffield",
      email:"newfieldgreen.library@sheffield.gov.uk",
      phone:"0114 239 7468"
    },
    {
      libraryName:"ecclesfield library",
      address:"high street",
      cityName:"sheffield",
      email:"ecclesfield.library@sheffield.gov.uk",
      phone:"0114 257 6663"
    },
    {
      libraryName:"limpsfield library",
      address:"limpsfield middle school",
      cityName:"sheffield",
      email:"libraries@sheffield.gov.uk",
      phone:"0114 261 0595"
    },
    {
      libraryName:"woodhouse library",
      address:"tannery street",
      cityName:"sheffield",
      email:"woodhouse.library@sheffield.gov.uk",
      phone:"0114 269 2607"
    },
    {
      libraryName:"upperthorpe library",
      address:"upperthorpe healthy living centre",
      cityName:"sheffield",
      email:"upperthorpe.library@sheffield.gov.uk",
      phone:"0114 270 2048"
    },
    {
      libraryName:"stocksbridge library",
      address:"manchester road",
      cityName:"sheffield",
      email:"stocksbridge.library@sheffield.gov.uk",
      phone:"0114 273 4205"
    },
    {
      libraryName:"broomhill library",
      address:"10 taptonville road",
      cityName:"sheffield",
      email:"broomhill.library@sheffield.gov.uk",
      phone:"0114 273 4276"
    },
    {
      libraryName:"sheffield central library",
      address:"surrey street",
      cityName:"sheffield",
      email:"centrallending.library@sheffield.gov.uk",
      phone:"0114 273 4727/9"
    },
    {
      libraryName:"park library",
      address:"duke street",
      cityName:"sheffield",
      email:"park.library@sheffield.gov.uk",
      phone:"0114 275 7497"
    },
    {
      libraryName:"totley library",
      address:"205 baslow road",
      cityName:"sheffield",
      email:"totley.library@sheffield.gov.uk",
      phone:"0114 293 0406"
    },
    {
      libraryName:"woodseats library",
      address:"chesterfield road",
      cityName:"sheffield",
      email:"woodseats.library@sheffield.gov.uk",
      phone:"0114 293 0411"
    },
    {
      libraryName:"stannington library",
      address:"uppergate road",
      cityName:"sheffield",
      email:"libraries@sheffield.gov.uk",
      phone:"0114 293 0489"
    },
    {
      libraryName:"crystal peaks library",
      address:"3 peak square",
      cityName:"sheffield",
      email:"crystalpeaks.library@sheffield.gov.uk",
      phone:"0114 293 0612"
    },
    {
      libraryName:"penistone library",
      address:"high street",
      cityName:"sheffield",
      email:"",
      phone:"01226 762313"
    },
    {
      libraryName:"aston library",
      address:"worksop road",
      cityName:"sheffield",
      email:"aston.library@rotherham.gov.uk",
      phone:"01709 254134"
    },
    {
      libraryName:"dinnington community library",
      address:"laughton road",
      cityName:"sheffield",
      email:"dinnington.library@rotherham.gov.uk",
      phone:"01909 562329"
    },
    {
      libraryName:"kiveton park library",
      address:"wales road",
      cityName:"sheffield",
      email:"kivetonpark.library@rotherham.gov.uk",
      phone:"01909 771823"
    },
    {
      libraryName:"parson cross library",
      address:"320 wordsworth avenue",
      cityName:"sheffield",
      email:"parsoncross.library@sheffield.gov.uk",
      phone:"0114 203 9533"
    },
    {
      libraryName:"audley library",
      address:"hall street",
      cityName:"audley",
      email:"",
      phone:""
    },
    {
      libraryName:"barlaston travelling library",
      address:"the plume of feathers",
      cityName:"barlaston",
      email:"",
      phone:""
    },
    {
      libraryName:"barton-under-needwood library",
      address:"dunstall road",
      cityName:"barton-under-needwood",
      email:"",
      phone:""
    },
    {
      libraryName:"brewood library",
      address:"newport street",
      cityName:"brewood",
      email:"brewood.library@staffordshire.gov.uk",
      phone:"01902 850087"
    },
    {
      libraryName:"burntwood library",
      address:"sankeys corner",
      cityName:"burntwood",
      email:"burntwood.library@staffordshire.gov.uk",
      phone:"01543 682447"
    },
    {
      libraryName:"burton-on-trent library",
      address:"riverside",
      cityName:"burton on trent",
      email:"",
      phone:""
    },
    {
      libraryName:"heath hayes library",
      address:"hednesford road",
      cityName:"cannock",
      email:"heathhayes.library@staffordshire.gov.uk",
      phone:"01543 279675"
    },
    {
      libraryName:"cannock library",
      address:"manor avenue",
      cityName:"cannock",
      email:"cannock.library@staffordshire.gov.uk",
      phone:"01543 510365"
    },
    {
      libraryName:"hednesford library",
      address:"market street",
      cityName:"cannock",
      email:"",
      phone:""
    },
    {
      libraryName:"norton canes library",
      address:"burntwood road",
      cityName:"cannock chase",
      email:"nortoncanes.library@staffordshire.gov.uk",
      phone:"01543 279592"
    },
    {
      libraryName:"eccleshall library",
      address:"20 high street",
      cityName:"eccleshall",
      email:"eccleshall.library@staffordshire.gov.uk",
      phone:"01785 850452"
    },
    {
      libraryName:"great wyrley library",
      address:"quinton court",
      cityName:"great wyrley",
      email:"",
      phone:""
    },
    {
      libraryName:"knutton library",
      address:"knutton community project",
      cityName:"knutton",
      email:"",
      phone:""
    },
    {
      libraryName:"leek library nicholson institute",
      address:"stockwell street",
      cityName:"leek",
      email:"",
      phone:""
    },
    {
      libraryName:"lichfield library",
      address:"the friary",
      cityName:"lichfield",
      email:"",
      phone:""
    },
    {
      libraryName:"loggerheads library",
      address:"7 eccleshall road",
      cityName:"loggerheads",
      email:"",
      phone:""
    },
    {
      libraryName:"newcastle library",
      address:"30 ironmarket",
      cityName:"newcastle-under-lyme",
      email:"",
      phone:""
    },
    {
      libraryName:"pendeford library",
      address:"whitburn close",
      cityName:"pendeford",
      email:"pendeford.library@dial.pipex.com",
      phone:"01902 556250"
    },
    {
      libraryName:"penkridge library",
      address:"bellbrook",
      cityName:"penkridge",
      email:"penkridge.library@staffordshire.gov.uk",
      phone:"01785 712916"
    },
    {
      libraryName:"brereton library",
      address:"talbot road",
      cityName:"rugeley",
      email:"",
      phone:""
    },
    {
      libraryName:"rugeley library",
      address:"anson street",
      cityName:"rugeley",
      email:"",
      phone:""
    },
    {
      libraryName:"shenstone library",
      address:"main street",
      cityName:"shenstone",
      email:"",
      phone:""
    },
    {
      libraryName:"rising brook library",
      address:"merrey road",
      cityName:"stafford",
      email:"risingbrook.library@staffordshire.gov.uk",
      phone:"01785 242155"
    },
    {
      libraryName:"stafford library",
      address:"shire hall",
      cityName:"stafford",
      email:"stafford.library@staffordshire.gov.uk",
      phone:"01785 278585"
    },
    {
      libraryName:"holmcroft library",
      address:"holmcroft road",
      cityName:"stafford",
      email:"",
      phone:""
    },
    {
      libraryName:"baswich library",
      address:"lynton avenue",
      cityName:"stafford",
      email:"",
      phone:""
    },
    {
      libraryName:"bentilee library",
      address:"bentilee neighbourhood centre",
      cityName:"stoke - on - trent",
      email:"bentliee.library@stoke.gov.uk",
      phone:"0178 223 1315"
    },
    {
      libraryName:"stoke library",
      address:"stoke local centre",
      cityName:"stoke on trent",
      email:"stoke.library@stoke.gov.uk",
      phone:"0178 223 8446"
    },
    {
      libraryName:"stoke on trent city central library",
      address:"bethesda street",
      cityName:"stoke on trent",
      email:"central.library@stoke.gov.uk",
      phone:"0178 223 8455"
    },
    {
      libraryName:"tunstall library",
      address:"victoria institute",
      cityName:"stoke on trent",
      email:"tunstall.library@stoke.gov.uk",
      phone:"0178 223 8471"
    },
    {
      libraryName:"meir library",
      address:"sandon road",
      cityName:"stoke on trent",
      email:"meir.library@stoke.gov.uk",
      phone:"01782 237559"
    },
    {
      libraryName:"longton library",
      address:"sutherland institute",
      cityName:"stoke on trent",
      email:"longton.library@stoke.gov.uk",
      phone:"01782 238 424"
    },
    {
      libraryName:"blythe bridge library",
      address:"uttoxeter road",
      cityName:"stoke on trent",
      email:"",
      phone:""
    },
    {
      libraryName:"werrington library",
      address:"ash bank road",
      cityName:"stoke-on-trent",
      email:"werringtonlibrary@vivacity-peterborough.com",
      phone:"01733 864282"
    },
    {
      libraryName:"trentham library",
      address:"trentley road",
      cityName:"stoke-on-trent",
      email:"trentham.library@stoke.gov.uk",
      phone:"0178 223 8465"
    },
    {
      libraryName:"kidsgrove library",
      address:"meadows road",
      cityName:"stoke-on-trent",
      email:"kidsgrove.library@staffordshire.gov.uk",
      phone:"01782 782445"
    },
    {
      libraryName:"biddulph library",
      address:"tunstall road",
      cityName:"stoke-on-trent",
      email:"",
      phone:""
    },
    {
      libraryName:"stone library",
      address:"high street",
      cityName:"stone",
      email:"",
      phone:""
    },
    {
      libraryName:"talke library",
      address:"springhead primary school,",
      cityName:"talke pits",
      email:"talke.library@staffordshire.gov.uk",
      phone:"01782 296840"
    },
    {
      libraryName:"wilnecote library",
      address:"wilnecote high school",
      cityName:"tamworth",
      email:"wilnecote.library@staffordshire.gov.uk",
      phone:"01827 475147"
    },
    {
      libraryName:"glascote library",
      address:"caledonian",
      cityName:"tamworth",
      email:"glascote.library@staffordshire.gov.uk",
      phone:"01827 475235"
    },
    {
      libraryName:"dordon library",
      address:"roman way",
      cityName:"tamworth",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01827 892 519"
    },
    {
      libraryName:"polesworth library",
      address:"bridge street",
      cityName:"tamworth",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01827 892 587"
    },
    {
      libraryName:"kingsbury library",
      address:"bromage avenue",
      cityName:"tamworth",
      email:"",
      phone:"0208937 3520"
    },
    {
      libraryName:"tamworth library",
      address:"corporation street",
      cityName:"tamworth",
      email:"",
      phone:""
    },
    {
      libraryName:"uttoxeter library",
      address:"high street",
      cityName:"uttoxeter",
      email:"",
      phone:""
    },
    {
      libraryName:"warstones library",
      address:"pinfold grove",
      cityName:"wolverhampton",
      email:"",
      phone:""
    },
    {
      libraryName:"wombourne library",
      address:"wombourne community centre",
      cityName:"wombourne",
      email:"wombourne.library@staffordshire.gov.uk",
      phone:"01902 892032"
    },
    {
      libraryName:"gnosall library",
      address:"st. lawrence ce(vc) primary school, lowfield lane",
      cityName:"stafford",
      email:"",
      phone:"01785 824989"
    },
    {
      libraryName:"balfron library",
      address:"buchanan street",
      cityName:"balfron",
      email:"",
      phone:""
    },
    {
      libraryName:"bannockburn library",
      address:"greenacre place",
      cityName:"bannockburn",
      email:"",
      phone:""
    },
    {
      libraryName:"bridge of allan library",
      address:"fountain road",
      cityName:"bridge of allan",
      email:"",
      phone:""
    },
    {
      libraryName:"callander library",
      address:"south church street",
      cityName:"callander",
      email:"",
      phone:""
    },
    {
      libraryName:"cowie library",
      address:"burns terrace",
      cityName:"cowie",
      email:"",
      phone:""
    },
    {
      libraryName:"doune library",
      address:"main street",
      cityName:"doune",
      email:"",
      phone:""
    },
    {
      libraryName:"drymen library",
      address:"the square",
      cityName:"drymen",
      email:"",
      phone:""
    },
    {
      libraryName:"dunblane library",
      address:"the institute",
      cityName:"dunblane",
      email:"",
      phone:""
    },
    {
      libraryName:"fallin library",
      address:"stirling road",
      cityName:"fallin",
      email:"",
      phone:""
    },
    {
      libraryName:"killin library",
      address:"primary school",
      cityName:"killin",
      email:"",
      phone:""
    },
    {
      libraryName:"plean library",
      address:"main street",
      cityName:"plean",
      email:"",
      phone:""
    },
    {
      libraryName:"cambusbarron library",
      address:"community centre",
      cityName:"stirling",
      email:"",
      phone:""
    },
    {
      libraryName:"st. ninians library",
      address:"mayfield centre",
      cityName:"stirling",
      email:"",
      phone:""
    },
    {
      libraryName:"strathblane library",
      address:"kirkburn road",
      cityName:"strathblane",
      email:"",
      phone:""
    },
    {
      libraryName:"billingham library",
      address:"bedale avenue",
      cityName:"billingham",
      email:"",
      phone:"01642 527895"
    },
    {
      libraryName:"roseberry library",
      address:"the causeway",
      cityName:"billingham",
      email:"roseberry.library@stockton.gov.uk",
      phone:"01642 528084"
    },
    {
      libraryName:"norton library",
      address:"87 high street",
      cityName:"norton",
      email:"",
      phone:"01642 528019"
    },
    {
      libraryName:"ragworth library",
      address:"st johns way",
      cityName:"ragworth",
      email:"",
      phone:""
    },
    {
      libraryName:"roseworth library",
      address:"redhill road",
      cityName:"roseworth",
      email:"roseworth.library@stockton.gov.uk",
      phone:"01642 528098"
    },
    {
      libraryName:"stockton central library",
      address:"church road",
      cityName:"stockton-on-tees",
      email:"reference.library@stockton.gov.uk",
      phone:"01642 526521"
    },
    {
      libraryName:"thornaby central library",
      address:"new cityname centre",
      cityName:"thornaby",
      email:"thornaby.central.library @stockton.gov.uk",
      phone:"01642 528117"
    },
    {
      libraryName:"thornaby library, westbury street",
      address:"westbury street,",
      cityName:"thornaby",
      email:"thornaby.library @stockton.gov.uk",
      phone:"01642 528150"
    },
    {
      libraryName:"thornaby westbury library",
      address:"westbury street",
      cityName:"thornaby",
      email:"",
      phone:""
    },
    {
      libraryName:"yarm library",
      address:"41 high street",
      cityName:"yarm",
      email:"yarm.library@stockton.gov.uk",
      phone:"1643 528152"
    },
    {
      libraryName:"aldeburgh library",
      address:"victoria road",
      cityName:"aldeburgh",
      email:"help@suffolklibraries.co.uk",
      phone:"01728 452502"
    },
    {
      libraryName:"beccles library",
      address:"blyburgate",
      cityName:"beccles",
      email:"help@suffolklibraries.co.uk",
      phone:"01502 714073"
    },
    {
      libraryName:"bungay library",
      address:"wharton street",
      cityName:"bungay",
      email:"help@suffolklibraries.co.uk",
      phone:"01986 892748"
    },
    {
      libraryName:"thurston library",
      address:"thurston community college",
      cityName:"bury st edmunds",
      email:"help@suffolklibraries.co.uk",
      phone:"01359 235048"
    },
    {
      libraryName:"bury st edmunds central library",
      address:"sergeants walk",
      cityName:"bury st edmunds",
      email:"",
      phone:""
    },
    {
      libraryName:"west suffolk house library",
      address:"western way",
      cityName:"bury st edmunds",
      email:"",
      phone:""
    },
    {
      libraryName:"capel st mary library",
      address:"village hall",
      cityName:"capel st mary",
      email:"help@suffolklibraries.co.uk",
      phone:"01473 311699"
    },
    {
      libraryName:"clare library",
      address:"the guildhall",
      cityName:"clare",
      email:"help@suffolklibraries.co.uk",
      phone:"01787 277702"
    },
    {
      libraryName:"elmswell library",
      address:"memorial library",
      cityName:"elmswell",
      email:"help@suffolklibraries.co.uk",
      phone:"01359 240974"
    },
    {
      libraryName:"eye library",
      address:"buckshorn lane",
      cityName:"eye",
      email:"help@suffolklibraries.co.uk",
      phone:"01379 870515"
    },
    {
      libraryName:"felixstowe library",
      address:"crescent road",
      cityName:"felixstowe",
      email:"help@suffolklibraries.co.uk",
      phone:"01394 625766"
    },
    {
      libraryName:"framlingham library",
      address:"the old court house",
      cityName:"framlingham",
      email:"help@suffolklibraries.co.uk",
      phone:"01728 723735"
    },
    {
      libraryName:"glemsford library",
      address:"village hall",
      cityName:"glemsford",
      email:"help@suffolklibraries.co.uk",
      phone:"01787 281803"
    },
    {
      libraryName:"great cornard library",
      address:"upper school",
      cityName:"great cornard",
      email:"help@suffolklibraries.co.uk",
      phone:"01787 315195"
    },
    {
      libraryName:"hadleigh library",
      address:"29 high street",
      cityName:"hadleigh",
      email:"help@suffolklibraries.co.uk",
      phone:"01473 823778"
    },
    {
      libraryName:"halesworth library",
      address:"bridge street",
      cityName:"halesworth",
      email:"help@suffolklibraries.co.uk",
      phone:"01986 875095"
    },
    {
      libraryName:"haverhill library",
      address:"camps road",
      cityName:"haverhill",
      email:"help@suffolklibraries.co.uk",
      phone:"01440 702638"
    },
    {
      libraryName:"ipswich chantry library",
      address:"hawthorn drive",
      cityName:"ipswich",
      email:"help@suffolklibraries.co.uk",
      phone:"01473 260880"
    },
    {
      libraryName:"suffolk music and drama library",
      address:"county library ipswich",
      cityName:"ipswich",
      email:"lynda.george@libher.suffolkcc.gov.uk",
      phone:"01473 583503"
    },
    {
      libraryName:"ipswich county library",
      address:"northgate street",
      cityName:"ipswich",
      email:"ipswich.library@libher.suffolkcc.gov.uk",
      phone:"01473 583715"
    },
    {
      libraryName:"ipswich westbourne library",
      address:"sherrington road",
      cityName:"ipswich",
      email:"",
      phone:""
    },
    {
      libraryName:"ipswich gainsborough library",
      address:"clapgate lane",
      cityName:"ipswich",
      email:"",
      phone:""
    },
    {
      libraryName:"ipswich rosehill library",
      address:"tomline road",
      cityName:"ipswich",
      email:"",
      phone:""
    },
    {
      libraryName:"ixworth library",
      address:"village hall",
      cityName:"ixworth",
      email:"",
      phone:""
    },
    {
      libraryName:"kedington library",
      address:"community centre",
      cityName:"kedington",
      email:"help@suffolklibraries.co.uk",
      phone:"01440 703449"
    },
    {
      libraryName:"kesgrave library",
      address:"kinsey house",
      cityName:"kesgrave",
      email:"help@suffolklibraries.co.uk",
      phone:"01473 581500"
    },
    {
      libraryName:"kessingland library",
      address:"marram green",
      cityName:"kessingland",
      email:"help@suffolklibraries.co.uk",
      phone:"01502 741212"
    },
    {
      libraryName:"lakenheath library",
      address:"65 high street",
      cityName:"lakenheath",
      email:"help@suffolklibraries.co.uk",
      phone:"01842 860723"
    },
    {
      libraryName:"leiston library",
      address:"old post office square",
      cityName:"leiston",
      email:"help@suffolklibraries.co.uk",
      phone:"01728 831252"
    },
    {
      libraryName:"long melford library",
      address:"united reform church room",
      cityName:"long melford",
      email:"help@suffolklibraries.co.uk",
      phone:"01787 377525"
    },
    {
      libraryName:"lowestoft library learning centre",
      address:"clapham road south",
      cityName:"lowestoft",
      email:"help@suffolklibraries.co.uk",
      phone:"01502 405342"
    },
    {
      libraryName:"mildenhall library",
      address:"chestnut close",
      cityName:"mildenhall",
      email:"help@suffolklibraries.co.uk",
      phone:"01638 713558"
    },
    {
      libraryName:"needham market library",
      address:"school street",
      cityName:"needham market",
      email:"help@suffolklibraries.co.uk",
      phone:"01449 720780"
    },
    {
      libraryName:"newmarket library",
      address:"1a the guineas",
      cityName:"newmarket",
      email:"newmarket.library@suffolklibraries.co.uk",
      phone:"01638 661 216"
    },
    {
      libraryName:"oulton broad library",
      address:"council offices",
      cityName:"oulton broad",
      email:"help@suffolklibraries.co.uk",
      phone:"01502 405522"
    },
    {
      libraryName:"saxmundham library",
      address:"county offices",
      cityName:"saxmundham",
      email:"help@suffolklibraries.co.uk",
      phone:"01728 403094"
    },
    {
      libraryName:"southwold library",
      address:"north green",
      cityName:"southwold",
      email:"help@suffolklibraries.co.uk",
      phone:"01502 722519"
    },
    {
      libraryName:"stowmarket library",
      address:"milton road",
      cityName:"stowmarket",
      email:"help@suffolklibraries.co.uk",
      phone:"01449 613143"
    },
    {
      libraryName:"debenham resource centre library",
      address:"22 cross green",
      cityName:"stowmarket",
      email:"",
      phone:""
    },
    {
      libraryName:"stradbroke library",
      address:"court house",
      cityName:"stradbroke",
      email:"help@suffolklibraries.co.uk",
      phone:"01379 384768"
    },
    {
      libraryName:"lavenham library",
      address:"lavenham village hall",
      cityName:"sudbury",
      email:"help@suffolklibraries.co.uk",
      phone:"01787 247729"
    },
    {
      libraryName:"sudbury library",
      address:"market hill",
      cityName:"sudbury",
      email:"help@suffolklibraries.co.uk",
      phone:"01787 296000"
    },
    {
      libraryName:"wickham market library",
      address:"resource centre",
      cityName:"wickham market",
      email:"help@suffolklibraries.co.uk",
      phone:"01728 747216"
    },
    {
      libraryName:"woodbridge library",
      address:"new street",
      cityName:"woodbridge",
      email:"woodbridge. library@suffolklibraries.co.uk",
      phone:"01394 625095"
    },
    {
      libraryName:"addlestone library",
      address:"runnymede civic centre",
      cityName:"addlestone",
      email:"",
      phone:""
    },
    {
      libraryName:"ash library",
      address:"ash library",
      cityName:"ash",
      email:"",
      phone:"0300 200 1001"
    },
    {
      libraryName:"ashtead library",
      address:"woodfield lane",
      cityName:"ashtead",
      email:"",
      phone:"0300 200 1001"
    },
    {
      libraryName:"bagshot library",
      address:"high street",
      cityName:"bagshot",
      email:"",
      phone:""
    },
    {
      libraryName:"banstead library",
      address:"the horseshoe",
      cityName:"banstead",
      email:"",
      phone:"01737 351271"
    },
    {
      libraryName:"beddington library",
      address:"the broadway",
      cityName:"beddington",
      email:"beddington.library@sutton.gov.uk",
      phone:"0208688 5093"
    },
    {
      libraryName:"frimley green library",
      address:"beech road",
      cityName:"camberley",
      email:"",
      phone:"0300 200 1001"
    },
    {
      libraryName:"camberley library",
      address:"knoll road",
      cityName:"camberley",
      email:"",
      phone:""
    },
    {
      libraryName:"carshalton library",
      address:"the square",
      cityName:"carshalton",
      email:"carshalton.library@sutton.gov.uk",
      phone:"0208647 1151"
    },
    {
      libraryName:"the circle library",
      address:"green wrythe lane",
      cityName:"carshalton",
      email:"circle.library@sutton.gov.uk",
      phone:"0208648 6608"
    },
    {
      libraryName:"caterham valley library",
      address:"stafford road",
      cityName:"caterham",
      email:"",
      phone:"01883 343580"
    },
    {
      libraryName:"caterham hill library",
      address:"westway",
      cityName:"caterham",
      email:"",
      phone:""
    },
    {
      libraryName:"cheam library",
      address:"church road",
      cityName:"cheam",
      email:"cheam.library@sutton.gov.uk",
      phone:"0208644 9377"
    },
    {
      libraryName:"chertsey library",
      address:"guildford street",
      cityName:"chertsey",
      email:"",
      phone:""
    },
    {
      libraryName:"hook and chessington library",
      address:"the hook centre",
      cityName:"chessington",
      email:"hook.library@rbk.kingston.gov.uk",
      phone:"0208547 6480"
    },
    {
      libraryName:"cobham library",
      address:"cedar road",
      cityName:"cobham",
      email:"",
      phone:""
    },
    {
      libraryName:"cranleigh library",
      address:"high street",
      cityName:"cranleigh",
      email:"",
      phone:"01483 272413"
    },
    {
      libraryName:"surrey performing arts library",
      address:"denbies wine estate",
      cityName:"dorking",
      email:"performing.arts@surreycc.gov.uk",
      phone:"01306 887509"
    },
    {
      libraryName:"dorking library",
      address:"st martins walk",
      cityName:"dorking",
      email:"",
      phone:"0300 200 1001"
    },
    {
      libraryName:"horsley library",
      address:"parade court",
      cityName:"east horsley",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"egham library",
      address:"high street",
      cityName:"egham",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"ewell library",
      address:"bourne hall",
      cityName:"epsom",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"ewell court library",
      address:"ewell court house",
      cityName:"epsom",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"epsom library",
      address:"the ebbisham centre",
      cityName:"epsom",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"stoneleigh library",
      address:"1 stoneleigh broadway",
      cityName:"epsom",
      email:"",
      phone:""
    },
    {
      libraryName:"tattenhams library",
      address:"tattenham crescent",
      cityName:"epsom",
      email:"",
      phone:""
    },
    {
      libraryName:"esher library",
      address:"old church path",
      cityName:"esher",
      email:"",
      phone:""
    },
    {
      libraryName:"farnham library",
      address:"vernon house",
      cityName:"farnham",
      email:"",
      phone:""
    },
    {
      libraryName:"godalming library",
      address:"bridge street",
      cityName:"godalming",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"guildford library",
      address:"77 north street",
      cityName:"guildford",
      email:"",
      phone:""
    },
    {
      libraryName:"haslemere library",
      address:"91 wey hill",
      cityName:"haslemere",
      email:"",
      phone:""
    },
    {
      libraryName:"hersham library",
      address:"molesey road",
      cityName:"hersham",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"horley library",
      address:"victoria road",
      cityName:"horley",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"kingston library",
      address:"fairfield road",
      cityName:"kinston-upon-thames",
      email:"kingston.library@rbk.kingston.gov.uk",
      phone:"0208547 6400"
    },
    {
      libraryName:"tudor drive library",
      address:"tudor drive",
      cityName:"kinston-upon-thames",
      email:"tudordrive.library@rbk.kingston.gov.uk",
      phone:"0208547 6456"
    },
    {
      libraryName:"leatherhead library",
      address:"the mansion",
      cityName:"leatherhead",
      email:"",
      phone:""
    },
    {
      libraryName:"lightwater library",
      address:"83a guildford road",
      cityName:"lightwater",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"lingfield library",
      address:"the guest house",
      cityName:"lingfield",
      email:"",
      phone:"01342 832058"
    },
    {
      libraryName:"merstham library",
      address:"weldon way",
      cityName:"merstham",
      email:"",
      phone:""
    },
    {
      libraryName:"mitcham library",
      address:"157 london road",
      cityName:"mitcham",
      email:"mitcham.library@merton.gov.uk",
      phone:"020 8274 5745"
    },
    {
      libraryName:"pollards hill library",
      address:"new horizons centre",
      cityName:"mitcham",
      email:"pollardshill.library@merton.gov.uk",
      phone:"020 8274 5741"
    },
    {
      libraryName:"bookham library",
      address:"citynameshott close",
      cityName:"mole valley",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"morden library",
      address:"merton civic centre",
      cityName:"morden",
      email:"morden.library@merton.gov.uk",
      phone:"0208545 4040"
    },
    {
      libraryName:"aragon library",
      address:"aragon road",
      cityName:"morden",
      email:"aragon.library@merton.gov.uk",
      phone:""
    },
    {
      libraryName:"new haw library",
      address:"the broadway",
      cityName:"new haw",
      email:"",
      phone:""
    },
    {
      libraryName:"new malden library",
      address:"48 kingston road",
      cityName:"new malden",
      email:"newmalden.library@rbk.kingston.gov.uk",
      phone:"0208547 6490"
    },
    {
      libraryName:"oxted library",
      address:"12 gresham road",
      cityName:"oxted",
      email:"",
      phone:""
    },
    {
      libraryName:"redhill library",
      address:"warwick quadrant",
      cityName:"redhill",
      email:"",
      phone:"01737 763332"
    },
    {
      libraryName:"reigate library",
      address:"bancroft house",
      cityName:"reigate",
      email:"",
      phone:""
    },
    {
      libraryName:"shepperton library",
      address:"high street",
      cityName:"shepperton",
      email:"",
      phone:""
    },
    {
      libraryName:"staines library",
      address:"friends walk",
      cityName:"staines",
      email:"",
      phone:""
    },
    {
      libraryName:"stanwell library",
      address:"the stanwell centre",
      cityName:"stanwell",
      email:"",
      phone:""
    },
    {
      libraryName:"sunbury library",
      address:"the parade",
      cityName:"sunbury on thames",
      email:"",
      phone:""
    },
    {
      libraryName:"surbiton library",
      address:"ewell road",
      cityName:"surbiton",
      email:"surbiton.library@rbk.kingston.gov.uk",
      phone:"0208547 6444"
    },
    {
      libraryName:"sutton central library",
      address:"st. nicholas way",
      cityName:"sutton",
      email:"sutton.library@sutton.gov.uk",
      phone:"020 8770 4777"
    },
    {
      libraryName:"the library @ the life centre",
      address:"sutton life centre, alcorn road",
      cityName:"sutton",
      email:"lifecentre.library@sutton.gov.uk",
      phone:"0208644 9696"
    },
    {
      libraryName:"dittons library",
      address:"mercer close",
      cityName:"thames ditton",
      email:"",
      phone:""
    },
    {
      libraryName:"tolworth library",
      address:"37-39 the broadway",
      cityName:"tolworth",
      email:"tolworth.library@rbk.kingston.gov.uk",
      phone:"0208547 6470"
    },
    {
      libraryName:"virginia water library",
      address:"station parade",
      cityName:"virginia water",
      email:"",
      phone:""
    },
    {
      libraryName:"wallington library",
      address:"shotfield",
      cityName:"wallington",
      email:"wallington.library@sutton.gov.uk",
      phone:"020 8770 4886"
    },
    {
      libraryName:"the library @ the phoenix centre",
      address:"mollison drive",
      cityName:"wallington",
      email:"roundshaw.library@sutton.gov.uk",
      phone:"0208 7704901"
    },
    {
      libraryName:"walton library",
      address:"54 the heart (off hepworth way)",
      cityName:"walton on thames",
      email:"",
      phone:"0300 200 1001"
    },
    {
      libraryName:"warlingham library",
      address:"shelton avenue",
      cityName:"warlingham",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"west byfleet library",
      address:"the corner",
      cityName:"west byfleet",
      email:"",
      phone:""
    },
    {
      libraryName:"molesey library",
      address:"the forum",
      cityName:"west molesey",
      email:"",
      phone:""
    },
    {
      libraryName:"weybridge library",
      address:"church street",
      cityName:"weybridge",
      email:"",
      phone:""
    },
    {
      libraryName:"surrey history centre",
      address:"130 goldsworth road",
      cityName:"woking",
      email:"shs@surreycc.gov.uk",
      phone:"+44 (0)1483 518737"
    },
    {
      libraryName:"knaphill library",
      address:"4 anchor crescent",
      cityName:"woking",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"woking library",
      address:"gloucester walk",
      cityName:"woking",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"byfleet library",
      address:"high road",
      cityName:"woking",
      email:"",
      phone:"0300 2001001"
    },
    {
      libraryName:"worcester park library",
      address:"stone place, windsor road",
      cityName:"worcester park",
      email:"worcester.library@sutton.gov.uk",
      phone:"020 8401 0835"
    },
    {
      libraryName:"old malden library",
      address:"church road",
      cityName:"worcester park",
      email:"oldmalden.library@rbk.kingston.gov.uk",
      phone:"0208547 6467"
    },
    {
      libraryName:"golspie library",
      address:"community centre",
      cityName:"gospie",
      email:"",
      phone:""
    },
    {
      libraryName:"bonymaen library",
      address:"bonymaen community centre",
      cityName:"bonymaen",
      email:"",
      phone:""
    },
    {
      libraryName:"pennard library",
      address:"pennard road",
      cityName:"pennard",
      email:"",
      phone:""
    },
    {
      libraryName:"swansea central library",
      address:"alexandra road",
      cityName:"swansea",
      email:"central.library@swansea.gov.uk",
      phone:"01792 516753"
    },
    {
      libraryName:"brynmill library",
      address:"bernard street",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"sketty library",
      address:"vivian road",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"killay library",
      address:"st hillary's church hall",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"oystermouth library",
      address:"dunns lane",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"pontarddulais library",
      address:"st michaels avenue",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"gowerton library",
      address:"mansel street",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"gorseinon library",
      address:"15 west street",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"penlan library",
      address:"heol frank",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"fforestfach library",
      address:"kings head road",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"brynhyfryd library",
      address:"llangyfelach road",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"clydach library",
      address:"high street",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"morriston library",
      address:"treharne road",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"llansamlet library",
      address:"242 peniel green road",
      cityName:"swansea",
      email:"",
      phone:""
    },
    {
      libraryName:"citynamehill library",
      address:"phoenix centre",
      cityName:"citynamehill",
      email:"",
      phone:""
    },
    {
      libraryName:"tandragee library",
      address:"market street",
      cityName:"tandragee",
      email:"",
      phone:""
    },
    {
      libraryName:"teesside university library",
      address:"teesside university, library and information services, southfield road",
      cityName:"middlesbrough",
      email:"libraryhelp@tees.ac.uk.",
      phone:"01642 342100"
    },
    {
      libraryName:"brixham library",
      address:"market street",
      cityName:"brixham",
      email:"",
      phone:""
    },
    {
      libraryName:"churston library",
      address:"broadsands road",
      cityName:"churston",
      email:"",
      phone:""
    },
    {
      libraryName:"paignton library",
      address:"courtland road",
      cityName:"paignton",
      email:"",
      phone:""
    },
    {
      libraryName:"torquay central library",
      address:"lymington road",
      cityName:"torquay",
      email:"tqadminlib@torbay.gov.uk",
      phone:"01803 208311"
    },
    {
      libraryName:"blaenavon library",
      address:"lion street",
      cityName:"blaenavon",
      email:"blaenavon.library@torfaen.gov.uk",
      phone:"01495 791637"
    },
    {
      libraryName:"cwmbran library",
      address:"gwent house",
      cityName:"cwmbran",
      email:"cwmbran.library@torfaen.gov.uk",
      phone:"01633 647676"
    },
    {
      libraryName:"pontypool library",
      address:"hanbury road",
      cityName:"pontypool",
      email:"pontypool.library@torfaen.gov.uk",
      phone:"01495 766160"
    },
    {
      libraryName:"east boldon library",
      address:"boker lane",
      cityName:"east boldon",
      email:"library.support@southtyneside.gov.uk",
      phone:"0191 427 1717"
    },
    {
      libraryName:"felling library",
      address:"tarlton crescent",
      cityName:"felling",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6402"
    },
    {
      libraryName:"fence houses library",
      address:"britannia terrace",
      cityName:"fence houses",
      email:"fencehouses.library@sunderland.gov.uk",
      phone:"0191 561 3040"
    },
    {
      libraryName:"chopwell library",
      address:"derwent street",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"01207 561379"
    },
    {
      libraryName:"crawcrook library",
      address:"main street",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 413 8164"
    },
    {
      libraryName:"gateshead central library",
      address:"prince consort road",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 3000"
    },
    {
      libraryName:"dunston library",
      address:"ellison road",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 5690"
    },
    {
      libraryName:"birtley library",
      address:"durham road",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6101"
    },
    {
      libraryName:"blaydon library",
      address:"wesley court",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6201"
    },
    {
      libraryName:"lobley hill library",
      address:"lobley hill road",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6405"
    },
    {
      libraryName:"low fell library",
      address:"710 durham road",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6408"
    },
    {
      libraryName:"pelaw library",
      address:"joicey street",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6409"
    },
    {
      libraryName:"sunderland road library",
      address:"herbert street",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6415"
    },
    {
      libraryName:"wrekenton library",
      address:"ebchester avenue",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6421"
    },
    {
      libraryName:"leam lane library",
      address:"cotemede",
      cityName:"gateshead",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6428"
    },
    {
      libraryName:"hartlepool central library",
      address:"124 york road",
      cityName:"hartlepool",
      email:"infodesk@hartlepool.gov.uk",
      phone:"01429 242909"
    },
    {
      libraryName:"throston grange library",
      address:"glamorgan grove",
      cityName:"hartlepool",
      email:"throstongrange.library@hartlepool.gov.uk",
      phone:"01429 263 199"
    },
    {
      libraryName:"headland library",
      address:"borough buildings",
      cityName:"hartlepool",
      email:"headland.library@hartlepool.gov.uk",
      phone:"01429 268 169"
    },
    {
      libraryName:"west view library",
      address:"miers avenue",
      cityName:"hartlepool",
      email:"westview.library@hartlepool.gov.uk",
      phone:"01429 268 288"
    },
    {
      libraryName:"seaton carew library",
      address:"station lane",
      cityName:"hartlepool",
      email:"seatoncarew.library@hartlepool.gov.uk",
      phone:"01429 269 808"
    },
    {
      libraryName:"owton manor library",
      address:"wynyard road",
      cityName:"hartlepool",
      email:"owtonmanor.library@hartlepool.gov.uk",
      phone:"01429 272 835"
    },
    {
      libraryName:"hartlepool arts and museums service",
      address:"sir william gray house\\nclarence road",
      cityName:"hartlepool",
      email:"",
      phone:""
    },
    {
      libraryName:"hebburn library",
      address:"station road",
      cityName:"hebburn",
      email:"",
      phone:"0191 483 2088"
    },
    {
      libraryName:"hetton centre library",
      address:"welfare road",
      cityName:"hetton",
      email:"hetton.library@sunderland.gov.uk",
      phone:"0191 561 6616"
    },
    {
      libraryName:"jarrow library",
      address:"monkton road",
      cityName:"jarrow",
      email:"",
      phone:"tel. 0191 489 7786 minicom. 0191 483 4049"
    },
    {
      libraryName:"primrose library",
      address:"glasgow road",
      cityName:"jarrow",
      email:"",
      phone:""
    },
    {
      libraryName:"killingworth library",
      address:"white swan centre",
      cityName:"killingworth",
      email:"",
      phone:"0191 643 2036"
    },
    {
      libraryName:"walker library",
      address:"welbeck road",
      cityName:"newcastel upon tyne",
      email:"",
      phone:"0191 278 4225"
    },
    {
      libraryName:"newcastle city library",
      address:"33 new bridge street west",
      cityName:"newcastle upon tyne",
      email:"information@newcastle.gov.uk",
      phone:"+44 (0)191 277 4100"
    },
    {
      libraryName:"dinnington library",
      address:"main rd",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"01661 825079"
    },
    {
      libraryName:"longbenton library",
      address:"oxford centre",
      cityName:"newcastle upon tyne",
      email:"longbenton.library@northtyneside.gov.uk",
      phone:"0191 2007865"
    },
    {
      libraryName:"walkerville library",
      address:"appletree gardens",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 262 6871"
    },
    {
      libraryName:"newburn library",
      address:"high street",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 267 4833"
    },
    {
      libraryName:"moorside library",
      address:"beaconsfield st",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 272 4312"
    },
    {
      libraryName:"newcastle city library",
      address:"charles avison building",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 277 4154"
    },
    {
      libraryName:"gosforth library",
      address:"regent farm road",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 277 4240"
    },
    {
      libraryName:"fawdon library",
      address:"fawdon park road",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 277 4255"
    },
    {
      libraryName:"fenham library",
      address:"fenham hall drive",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 277 4270"
    },
    {
      libraryName:"denton burn library",
      address:"west road",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 277 4277"
    },
    {
      libraryName:"cruddas park library",
      address:"park rd",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 277 4280"
    },
    {
      libraryName:"newbiggin hall library",
      address:"shopping centre",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 277 4284"
    },
    {
      libraryName:"outer west library",
      address:"west denton way",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 277 7970"
    },
    {
      libraryName:"west end library",
      address:"condercum road",
      cityName:"newcastle upon tyne",
      email:"westend.library@newcastle.gov.uk",
      phone:"0191 2771500"
    },
    {
      libraryName:"jesmond library",
      address:"st. george's terrace",
      cityName:"newcastle upon tyne",
      email:"0191 278 4217",
      phone:"0191 278 4215"
    },
    {
      libraryName:"high heaton library",
      address:"newton road",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 278 4233"
    },
    {
      libraryName:"east end library",
      address:"corbridge road",
      cityName:"newcastle upon tyne",
      email:"eastend.library@newcastle.gov.uk",
      phone:"0191 278 8400"
    },
    {
      libraryName:"blakelaw library",
      address:"binswood avenue",
      cityName:"newcastle upon tyne",
      email:"",
      phone:"0191 286 9674"
    },
    {
      libraryName:"whickham library",
      address:"st mary's green",
      cityName:"newcastle upon tyne",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6424"
    },
    {
      libraryName:"shiremoor library",
      address:"earsdon road",
      cityName:"newcastle upon tyne",
      email:"shiremoor.library@northtyneside.gov.uk",
      phone:"0191 643 2036"
    },
    {
      libraryName:"wideopen library",
      address:"canterbury way",
      cityName:"newcastle upon tyne",
      email:"wideopen.library@northtyneside.gov.uk",
      phone:"0191 643 2071"
    },
    {
      libraryName:"forest hall library",
      address:"whitfield road",
      cityName:"newcastle upon tyne",
      email:"",
      phone:""
    },
    {
      libraryName:"kenton library,",
      address:"kenton centre",
      cityName:"newcastle upon tyne",
      email:"",
      phone:""
    },
    {
      libraryName:"cullercoats library",
      address:"st georges road",
      cityName:"north shields",
      email:"cullercoats.library@northtyneside.gov.uk",
      phone:"0191 643 2073"
    },
    {
      libraryName:"coast road library",
      address:"27 coast road",
      cityName:"north shields",
      email:"coastroad.library@northtyneside.gov.uk",
      phone:"0191 643 2074"
    },
    {
      libraryName:"tynemouth library",
      address:"front street",
      cityName:"north shields",
      email:"tynemouth.library@northtyneside.gov.uk",
      phone:"0191 643 2087"
    },
    {
      libraryName:"rowlands gill library",
      address:"norman road",
      cityName:"rowlands gill",
      email:"libraries@gateshead.gov.uk",
      phone:"01207 542372"
    },
    {
      libraryName:"ryton community library",
      address:"grange road",
      cityName:"ryton",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 413 1890"
    },
    {
      libraryName:"silksworth library",
      address:"beckwith mews",
      cityName:"silksworth",
      email:"silksworth.library@sunderland.gov.uk",
      phone:"0191 561 6247"
    },
    {
      libraryName:"cleadon park library",
      address:"prince edward road",
      cityName:"south shields",
      email:"library.support@southtyneside.gov.uk",
      phone:"0191 427 1717"
    },
    {
      libraryName:"south shields central library",
      address:"prince georg square",
      cityName:"south shields",
      email:"library.support@southtyneside.gov.uk",
      phone:"0191 427 1717"
    },
    {
      libraryName:"boldon lane library",
      address:"boldon lane",
      cityName:"south shields",
      email:"library.support@southtyneside.gov.uk",
      phone:"0191 456 2852"
    },
    {
      libraryName:"doxford park library",
      address:"mill hill road",
      cityName:"sunderland",
      email:"doxfordpark.library@sunderland.gov.uk",
      phone:"0191 553 5738"
    },
    {
      libraryName:"easington lane library",
      address:"high street",
      cityName:"sunderland",
      email:"easingtonlane.library@sunderland.gov.uk",
      phone:"0191 553 6695"
    },
    {
      libraryName:"city library and arts centre",
      address:"fawcett street",
      cityName:"sunderland",
      email:"enquiry.desk@sunderland.gov.uk",
      phone:"0191 561 1235"
    },
    {
      libraryName:"hendon library",
      address:"toward road",
      cityName:"sunderland",
      email:"hendon.library@sunderland.gov.uk",
      phone:"0191 561 2750"
    },
    {
      libraryName:"monkwearmouth library",
      address:"church street north",
      cityName:"sunderland",
      email:"monkwearmouth.library@sunderland.gov.uk",
      phone:"0191 561 2755"
    },
    {
      libraryName:"kayll road library",
      address:"kayll road",
      cityName:"sunderland",
      email:"kayllroad.library@sunderland.gov.uk",
      phone:"0191 561 2760"
    },
    {
      libraryName:"shiney row library",
      address:"chester road",
      cityName:"sunderland",
      email:"shineyrow.library@sunderland.gov.uk",
      phone:"0191 561 3031"
    },
    {
      libraryName:"ryhope library",
      address:"black road",
      cityName:"sunderland",
      email:"ryhope.library@sunderland.gov.uk",
      phone:"0191 561 4444"
    },
    {
      libraryName:"fulwell library",
      address:"dene lane",
      cityName:"sunderland",
      email:"fulwell.library@sunderland.gov.uk",
      phone:"0191 561 5260"
    },
    {
      libraryName:"southwick library",
      address:"beaumont street",
      cityName:"sunderland",
      email:"southwick.library@sunderland.gov.uk",
      phone:"0191 561 5270"
    },
    {
      libraryName:"sandhill view library and customer service centre",
      address:"grindon lane",
      cityName:"sunderland",
      email:"sandhillview.library@sunderland.gov.uk",
      phone:"0191 561 5800"
    },
    {
      libraryName:"east herrington library",
      address:"atlantis road",
      cityName:"sunderland",
      email:"eastherrington.library@sunderland.gov.uk",
      phone:"0191 561 5885"
    },
    {
      libraryName:"houghton library",
      address:"74 newbottle street",
      cityName:"sunderland",
      email:"houghton.library@sunderland.gov.uk",
      phone:"0191 561 6383"
    },
    {
      libraryName:"bunny hill library",
      address:"hylton lane",
      cityName:"sunderland",
      email:"bunnyhill.library@sunderland.gov.uk",
      phone:"0191 561 8103"
    },
    {
      libraryName:"hylton castle library",
      address:"cranleigh road",
      cityName:"sunderland",
      email:"",
      phone:""
    },
    {
      libraryName:"howdon library",
      address:"churchill street",
      cityName:"wallsend",
      email:"howdon.library@northtyneside.gov.uk",
      phone:"0191 643 2070"
    },
    {
      libraryName:"battle hill library",
      address:"coastwick shopping forum",
      cityName:"wallsend",
      email:"battlehill.library@northtyneside.gov.uk",
      phone:"190 643 2255"
    },
    {
      libraryName:"wallsend library",
      address:"ferndale avenue",
      cityName:"wallsend",
      email:"",
      phone:""
    },
    {
      libraryName:"washington green library",
      address:"the green",
      cityName:"washington",
      email:"washgreen.library@sunderland.gov.uk",
      phone:"0191 561 3435"
    },
    {
      libraryName:"washington library",
      address:"independence square",
      cityName:"washington",
      email:"washcityname.library@sunderland.gov.uk",
      phone:"0191 561 3441"
    },
    {
      libraryName:"washington millennium centre library",
      address:"the oval",
      cityName:"washington",
      email:"washmill.library@sunderland.gov.uk",
      phone:"0191 561 3878"
    },
    {
      libraryName:"whitburn library",
      address:"mill lane",
      cityName:"whitburn",
      email:"library.support@southtyneside.gov.uk",
      phone:"0191 427 1717"
    },
    {
      libraryName:"whitley bay library",
      address:"park road",
      cityName:"whitley bay",
      email:"whitleybay.library@northtyneside.gov.uk",
      phone:"0191 2008500"
    },
    {
      libraryName:"monkseaton library",
      address:"woodleigh avenue",
      cityName:"whitley bay",
      email:"monkseaton.library@northtyneside.gov.uk",
      phone:"0191 2008538"
    },
    {
      libraryName:"winlaton library",
      address:"church street",
      cityName:"winlaton",
      email:"libraries@gateshead.gov.uk",
      phone:"0191 433 6418"
    },
    {
      libraryName:"barry library",
      address:"the county library,",
      cityName:"barry",
      email:"barrylibrary@valeofglamorgan.gov.uk.",
      phone:"01446 709737"
    },
    {
      libraryName:"cowbridge library",
      address:"old hall",
      cityName:"cowbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"dinas powys library",
      address:"fairoaks",
      cityName:"dinas powys",
      email:"",
      phone:""
    },
    {
      libraryName:"llantwit major library",
      address:"boverton road",
      cityName:"llantwit major",
      email:"",
      phone:""
    },
    {
      libraryName:"penarth library",
      address:"stanwell road",
      cityName:"penarth",
      email:"penarthlibrary@valeofglamorgan.gov.uk",
      phone:"029 20708438"
    },
    {
      libraryName:"sully library",
      address:"bp sports and social club",
      cityName:"penarth",
      email:"",
      phone:""
    },
    {
      libraryName:"rhoose library",
      address:"fontygary road",
      cityName:"rhoose",
      email:"rhooselibrary@valeofglamorgan.gov.uk",
      phone:"01446 710220"
    },
    {
      libraryName:"st athan library",
      address:"old primary school",
      cityName:"st athan",
      email:"stathanlibrary@valeofglamorgan.gov.uk",
      phone:"01446 751497"
    },
    {
      libraryName:"wenvoe library",
      address:"terrapin builiding",
      cityName:"wenvoe",
      email:"",
      phone:""
    },
    {
      libraryName:"llantwit major library",
      address:"boverton rd",
      cityName:"llantwit major",
      email:"",
      phone:"01446 792700"
    },
    {
      libraryName:"alcester library",
      address:"priory road",
      cityName:"alcester",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01789 762 430"
    },
    {
      libraryName:"bedworth heath honesty library",
      address:"181 smorrall lane",
      cityName:"bedworth",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"02476 362512"
    },
    {
      libraryName:"bidford library",
      address:"bramley way",
      cityName:"bidford on avon",
      email:"",
      phone:"01789 773239"
    },
    {
      libraryName:"bulkington community library",
      address:"school road",
      cityName:"bulkington",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"024 7631 4189"
    },
    {
      libraryName:"binley woods library and information centre",
      address:"monks road",
      cityName:"coventry",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"02476 542908"
    },
    {
      libraryName:"keresley newland library",
      address:"bennetts road",
      cityName:"coventry",
      email:"",
      phone:""
    },
    {
      libraryName:"harbury library",
      address:"high street",
      cityName:"harbury",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01926 613 297"
    },
    {
      libraryName:"hartshill library and information centre",
      address:"holy trinity church (entrance via white gate to left of building)",
      cityName:"hartshill",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"02476 384027"
    },
    {
      libraryName:"kenilworth library",
      address:"smalley place",
      cityName:"kenilworth",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01926 748 902"
    },
    {
      libraryName:"kineton community library",
      address:"kineton village hall",
      cityName:"kineton",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01926 641774"
    },
    {
      libraryName:"whitnash library",
      address:"franklin road",
      cityName:"leamington spa",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01926 421 464"
    },
    {
      libraryName:"leamington spa library",
      address:"royal pump rooms",
      cityName:"leamington spa",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01926 742 721"
    },
    {
      libraryName:"southam library",
      address:"high street",
      cityName:"leamington spa",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01926 812 523"
    },
    {
      libraryName:"nuneaton library",
      address:"church street",
      cityName:"nuneaton",
      email:"nuneatonlibrary@warwickshire.gov.uk",
      phone:"024 7638 4027 or 024 7634 7006"
    },
    {
      libraryName:"bedworth library",
      address:"18 high street",
      cityName:"nuneaton",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"02476 312267"
    },
    {
      libraryName:"stockingford library",
      address:"st pauls road",
      cityName:"nuneaton",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"02476 345 608"
    },
    {
      libraryName:"camp hill library and information centre",
      address:"camp hill education, sport and social (c.h.e.s.s.), cedar road",
      cityName:"nuneaton",
      email:"",
      phone:"02476 757108"
    },
    {
      libraryName:"rugby library",
      address:"little elborow street",
      cityName:"rugby",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01788 533 250"
    },
    {
      libraryName:"dunchurch library",
      address:"the green",
      cityName:"rugby",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01788 811 355"
    },
    {
      libraryName:"shipston on stour library",
      address:"church street",
      cityName:"shipston on stour",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01608 661255"
    },
    {
      libraryName:"stratford upon avon library",
      address:"12 henley street",
      cityName:"stratford on avon",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01789 292 209"
    },
    {
      libraryName:"studley library",
      address:"high street",
      cityName:"studley",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01527 852 929"
    },
    {
      libraryName:"wellesbourne library",
      address:"kineton road",
      cityName:"warwick",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01789 840528"
    },
    {
      libraryName:"warwick library",
      address:"shire hall",
      cityName:"warwick",
      email:"warwicklibrary@warwickshire.gov.uk",
      phone:"01926 412 189"
    },
    {
      libraryName:"lillington library",
      address:"valley road",
      cityName:"warwick",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01926 422 875"
    },
    {
      libraryName:"wash common library",
      address:"glendale avenue",
      cityName:"newbury",
      email:"",
      phone:""
    },
    {
      libraryName:"alexandria library",
      address:"gilmour street",
      cityName:"alexandria",
      email:"",
      phone:""
    },
    {
      libraryName:"balloch library",
      address:"carrochan road",
      cityName:"balloch",
      email:"",
      phone:""
    },
    {
      libraryName:"clydebank library",
      address:"dumbarton road",
      cityName:"clydebank",
      email:"",
      phone:""
    },
    {
      libraryName:"parkhall library",
      address:"hawthorn street",
      cityName:"clydebank",
      email:"",
      phone:""
    },
    {
      libraryName:"dalmuir library",
      address:"3 lennox place",
      cityName:"clydebank",
      email:"",
      phone:""
    },
    {
      libraryName:"duntocher library",
      address:"glenhead community education centre",
      cityName:"clydebank",
      email:"",
      phone:""
    },
    {
      libraryName:"dumbarton library",
      address:"strathleven place",
      cityName:"dumbarton",
      email:"dumbarton.library@west-dunbarton.gov.uk",
      phone:"01389 763129"
    },
    {
      libraryName:"armadale library",
      address:"north street",
      cityName:"armadale",
      email:"",
      phone:""
    },
    {
      libraryName:"bathgate library",
      address:"66 hopetoun street",
      cityName:"bathgate",
      email:"",
      phone:""
    },
    {
      libraryName:"blackburn library",
      address:"mill centre",
      cityName:"blackburn",
      email:"",
      phone:""
    },
    {
      libraryName:"blackridge library",
      address:"craig inn centre",
      cityName:"blackridge",
      email:"",
      phone:""
    },
    {
      libraryName:"broxburn library",
      address:"west main street",
      cityName:"broxburn",
      email:"",
      phone:""
    },
    {
      libraryName:"east calder library",
      address:"main street",
      cityName:"east calder",
      email:"",
      phone:""
    },
    {
      libraryName:"fauldhouse library",
      address:"lanrigg road",
      cityName:"fauldhouse",
      email:"",
      phone:""
    },
    {
      libraryName:"local history library",
      address:"heritage and information centre",
      cityName:"linlithgow",
      email:"sybil.cavanagh@westlothian.gov.uk",
      phone:"01506 776331"
    },
    {
      libraryName:"linlithgow library",
      address:"the vennel",
      cityName:"linlithgow",
      email:"",
      phone:""
    },
    {
      libraryName:"almondbank library",
      address:"the mall",
      cityName:"livingston",
      email:"",
      phone:""
    },
    {
      libraryName:"lanthorn library",
      address:"lanthorn community centre",
      cityName:"livingston",
      email:"",
      phone:""
    },
    {
      libraryName:"carmondean library",
      address:"carmondean centre",
      cityName:"livingston",
      email:"",
      phone:""
    },
    {
      libraryName:"pumpherston library",
      address:"18 uphall station road",
      cityName:"pumpherston",
      email:"",
      phone:""
    },
    {
      libraryName:"west calder library",
      address:"main street",
      cityName:"west calder",
      email:"",
      phone:""
    },
    {
      libraryName:"whitburn library",
      address:"union road",
      cityName:"whitburn",
      email:"library.support@southtyneside.gov.uk",
      phone:"0191 427 1717"
    },
    {
      libraryName:"baddesley grendon library",
      address:"little brum",
      cityName:"atherstone",
      email:"",
      phone:""
    },
    {
      libraryName:"coseley library",
      address:"castle street",
      cityName:"bilston",
      email:"coseley.library@dudley.gov.uk",
      phone:"01384 812 775"
    },
    {
      libraryName:"bilston library",
      address:"mount pleasant",
      cityName:"bilston",
      email:"bilston.library@dial.pipex.com",
      phone:"01902 556253"
    },
    {
      libraryName:"farm road neighbourhood library",
      address:"31 farm road",
      cityName:"birmingham",
      email:"",
      phone:"0121 303 0732"
    },
    {
      libraryName:"sparkhill library",
      address:"641 stratford road",
      cityName:"birmingham",
      email:"sparkhill.library@birmingham.gov.uk",
      phone:"0121 303 0732"
    },
    {
      libraryName:"birmingham central library",
      address:"chamberlain square",
      cityName:"birmingham",
      email:"central.library@birmingham.gov.uk",
      phone:"0121 303 4511"
    },
    {
      libraryName:"druids heath library",
      address:"idmiston croft",
      cityName:"birmingham",
      email:"druids.heath.library@birmingham.gov.uk",
      phone:"0121 303 7171"
    },
    {
      libraryName:"wylde green library",
      address:"emscote drive",
      cityName:"birmingham",
      email:"wylde.green.library@birmingham.gov.uk",
      phone:"0121 386 5492"
    },
    {
      libraryName:"cofton hackett library",
      address:"barnt green road",
      cityName:"birmingham",
      email:"coftonhackettlib@worcestershire.gov.uk",
      phone:"0121 453 5693"
    },
    {
      libraryName:"ward end library",
      address:"washwood heath road",
      cityName:"birmingham",
      email:"ward.end.library@birmingham.gov.uk",
      phone:"0121 464 0366"
    },
    {
      libraryName:"selly oak library",
      address:"669 bristol road",
      cityName:"birmingham",
      email:"selly.oak.library@birmingham.gov.uk",
      phone:"0121 464 0403"
    },
    {
      libraryName:"perry common library",
      address:"college road",
      cityName:"birmingham",
      email:"perry.common.library@birmingham.gov.uk",
      phone:"0121 464 0481"
    },
    {
      libraryName:"aston library",
      address:"99 whitehead road",
      cityName:"birmingham",
      email:"aston.library@birmingham.gov.uk",
      phone:"0121 464 0656"
    },
    {
      libraryName:"kingsbury neighbourhood library",
      address:"kingsbury school / leisure centre, kingsbury rd",
      cityName:"birmingham",
      email:"kingsbury.library@birmingham.gov.uk",
      phone:"0121 464 0798"
    },
    {
      libraryName:"erdington library",
      address:"orphanage road",
      cityName:"birmingham",
      email:"erdington.library@birmingham.gov.uk",
      phone:"0121 464 0798"
    },
    {
      libraryName:"northfield library",
      address:"77 church road",
      cityName:"birmingham",
      email:"northfield.library@birmingham.gov.uk",
      phone:"0121 464 1007"
    },
    {
      libraryName:"boldmere library",
      address:"119 boldmere road",
      cityName:"birmingham",
      email:"boldmere.library@birmingham.gov.uk",
      phone:"0121 464 1048"
    },
    {
      libraryName:"handsworth library",
      address:"soho road",
      cityName:"birmingham",
      email:"handsworth.library@birmingham.gov.uk",
      phone:"0121 464 1185"
    },
    {
      libraryName:"kings heath library",
      address:"high street",
      cityName:"birmingham",
      email:"kings.heath.library@birmingham.gov.uk",
      phone:"0121 464 1515"
    },
    {
      libraryName:"kings norton library",
      address:"pershore road south",
      cityName:"birmingham",
      email:"kings.norton.library@birmingham.gov.uk",
      phone:"0121 464 1532"
    },
    {
      libraryName:"hawkesley neighbourhood library",
      address:"hawkseley community centre, 51 edgewood road",
      cityName:"birmingham",
      email:"hawkesley.library@birmingham.gov.uk",
      phone:"0121 464 1532"
    },
    {
      libraryName:"harborne library",
      address:"high street",
      cityName:"birmingham",
      email:"harborne.library@birmingham.gov.uk",
      phone:"0121 464 1596"
    },
    {
      libraryName:"weoley castle library",
      address:"76 beckbury road",
      cityName:"birmingham",
      email:"weoley.castle.library@birmingham.gov.uk",
      phone:"0121 464 1664"
    },
    {
      libraryName:"acocks green library",
      address:"shirley road",
      cityName:"birmingham",
      email:"acocks.green.library@birmingham.gov.uk",
      phone:"0121 464 1738"
    },
    {
      libraryName:"south yardley library",
      address:"yardley road",
      cityName:"birmingham",
      email:"south.yardley.library@birmingham.gov.uk",
      phone:"0121 464 1944"
    },
    {
      libraryName:"tower hill library",
      address:"tower hill",
      cityName:"birmingham",
      email:"tower.hill.library@birmingham.gov.uk",
      phone:"0121 464 1948"
    },
    {
      libraryName:"balsall heath library",
      address:"moseley road",
      cityName:"birmingham",
      email:"balsall.heath.library@birmingham.gov.uk",
      phone:"0121 464 1962"
    },
    {
      libraryName:"yardley wood library",
      address:"highfield road",
      cityName:"birmingham",
      email:"yardley.wood.library@birmingham.gov.uk",
      phone:"0121 464 2110"
    },
    {
      libraryName:"bloomsbury library",
      address:"nechells parkway",
      cityName:"birmingham",
      email:"bloomsbury.library@birmingham.gov.uk",
      phone:"0121 464 3466"
    },
    {
      libraryName:"sheldon library",
      address:"brays road",
      cityName:"birmingham",
      email:"sheldon.library@birmingham.gov.uk",
      phone:"0121 464 3512"
    },
    {
      libraryName:"glebe farm library",
      address:"glebe farm road",
      cityName:"birmingham",
      email:"glebe.farm.library@birmingham.gov.uk",
      phone:"0121 464 4210"
    },
    {
      libraryName:"bartley green library",
      address:"adams hill",
      cityName:"birmingham",
      email:"bartley.green.library@birmingham.gov.uk",
      phone:"0121 464 4473"
    },
    {
      libraryName:"mere green library",
      address:"30a mere green road",
      cityName:"birmingham",
      email:"mere.green.library@birmingham.gov.uk",
      phone:"0121 464 4592"
    },
    {
      libraryName:"kingstanding library",
      address:"kingstanding road",
      cityName:"birmingham",
      email:"kingstanding.library@birmingham.gov.uk",
      phone:"0121 464 5193"
    },
    {
      libraryName:"kents moat library",
      address:"55-57 pool way",
      cityName:"birmingham",
      email:"kents.moat.library@birmingham.gov.uk",
      phone:"0121 464 5755"
    },
    {
      libraryName:"hall green library",
      address:"1221 stratford road",
      cityName:"birmingham",
      email:"hall.green.library@birmingham.gov.uk",
      phone:"0121 464 6633"
    },
    {
      libraryName:"st michael's neighbourhood library",
      address:"17 redstone farm",
      cityName:"birmingham",
      email:"st.michaels.library@birmingham.gov.uk",
      phone:"0121 464 6633"
    },
    {
      libraryName:"shard end library",
      address:"shustoke road",
      cityName:"birmingham",
      email:"shard.end.library@birmingham.gov.uk",
      phone:"0121 464 6779"
    },
    {
      libraryName:"quinton library",
      address:"ridgacre road",
      cityName:"birmingham",
      email:"quinton.library@birmingham.gov.uk",
      phone:"0121 464 7400"
    },
    {
      libraryName:"summerfield neighbourhood library",
      address:"summerfield community centre, winson green road",
      cityName:"birmingham",
      email:"",
      phone:"0121 464 7422"
    },
    {
      libraryName:"spring hill library",
      address:"spring hill",
      cityName:"birmingham",
      email:"spring.hill.library@birmingham.gov.uk",
      phone:"0121 464 7422"
    },
    {
      libraryName:"west heath library",
      address:"the fordrough",
      cityName:"birmingham",
      email:"west.heath.library@birmingham.gov.uk",
      phone:"0121 464 7548"
    },
    {
      libraryName:"frankley library",
      address:"frankley community high school",
      cityName:"birmingham",
      email:"frankley.library@birmingham.gov.uk",
      phone:"0121 464 7676"
    },
    {
      libraryName:"ladywood library",
      address:"community and health centre",
      cityName:"birmingham",
      email:"ladywood.library@birmingham.gov.uk",
      phone:"0121 464 8639"
    },
    {
      libraryName:"cocks moors woods neighbourhood library",
      address:"alcester road south",
      cityName:"birmingham",
      email:"",
      phone:"0121 675 1208"
    },
    {
      libraryName:"water orton library",
      address:"mickle meadow",
      cityName:"birmingham",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"0121 747 7460"
    },
    {
      libraryName:"coleshill library",
      address:"19a parkfield road",
      cityName:"birmingham",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01675 463 307"
    },
    {
      libraryName:"rubery library",
      address:"7 library way",
      cityName:"birmingham",
      email:"ruberylib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"wythall library",
      address:"may lane",
      cityName:"birmingham",
      email:"wythalllib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"small heath library",
      address:"muntz street",
      cityName:"birmingham",
      email:"small.heath.library@birmingham.gov.uk",
      phone:""
    },
    {
      libraryName:"newcityname neighbourhood library",
      address:"57 newbury road",
      cityName:"birmingham",
      email:"",
      phone:""
    },
    {
      libraryName:"castle vale library",
      address:"10 high street",
      cityName:"birmingham",
      email:"castle.vale.library@birmingham.gov.uk",
      phone:""
    },
    {
      libraryName:"hamstead library",
      address:"tanhouse centre",
      cityName:"birmingham",
      email:"",
      phone:""
    },
    {
      libraryName:"great barr library",
      address:"birmingham road",
      cityName:"birmingham",
      email:"",
      phone:""
    },
    {
      libraryName:"stockland green neighbourhood library",
      address:"stockland green leisure centre, slade road",
      cityName:"birmingham",
      email:"",
      phone:"0121 464 0798"
    },
    {
      libraryName:"birchfield library",
      address:"trinity road",
      cityName:"birmingham",
      email:"birchfield.library@birmingham.gov.uk",
      phone:"0121 464 4202"
    },
    {
      libraryName:"atherstone library and information centre",
      address:"long street",
      cityName:"coventry",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"01827 712 395"
    },
    {
      libraryName:"allesley park library",
      address:"st john's primary school",
      cityName:"coventry",
      email:"whoberley.library@coventry.gov.uk",
      phone:"024 7641 4050"
    },
    {
      libraryName:"cheylesmore library",
      address:"poitiers road",
      cityName:"coventry",
      email:"cheylesmore.library@coventry.gov.uk",
      phone:"024 76502106"
    },
    {
      libraryName:"tile hill library and information service",
      address:"jardine crescent",
      cityName:"coventry",
      email:"tilehill.library@coventry.gov.uk",
      phone:"024 7678 6785"
    },
    {
      libraryName:"canley library",
      address:"prior deram walk",
      cityName:"coventry",
      email:"canley.library@coventry.gov.uk",
      phone:"024 7678 6963"
    },
    {
      libraryName:"coundon library",
      address:"moseley avenue",
      cityName:"coventry",
      email:"coundon.library@coventry.gov.uk",
      phone:"024 7678 6969"
    },
    {
      libraryName:"earlsdon library",
      address:"earlsdon avenue north",
      cityName:"coventry",
      email:"earlsdon.library@coventry.gov.uk",
      phone:"024 7678 6971"
    },
    {
      libraryName:"finham library",
      address:"finham green road",
      cityName:"coventry",
      email:"finham.library@coventry.gov.uk",
      phone:"024 7678 6974"
    },
    {
      libraryName:"hillfields community library",
      address:"st. peters centre",
      cityName:"coventry",
      email:"hillfields.library@coventry.gov.uk",
      phone:"024 7678 6980"
    },
    {
      libraryName:"jubilee crescent library",
      address:"jubilee crescent",
      cityName:"coventry",
      email:"jubileecrescent.library@coventry.gov.uk",
      phone:"024 7678 6981"
    },
    {
      libraryName:"stoke library",
      address:"kingsway",
      cityName:"coventry",
      email:"stoke.library@coventry.gov.uk",
      phone:"024 7678 6990"
    },
    {
      libraryName:"willenhall library",
      address:"106 remembrance road",
      cityName:"coventry",
      email:"willenhall.library@coventry.gov.uk",
      phone:"024 7678 6991"
    },
    {
      libraryName:"aldermoor community library",
      address:"acorn street",
      cityName:"coventry",
      email:"aldermoor.library@coventry.gov.uk",
      phone:"024 7678 8438"
    },
    {
      libraryName:"arena park library",
      address:"arena park shopping centre",
      cityName:"coventry",
      email:"arenapark.library@coventry.gov.uk",
      phone:"0247 678 5181"
    },
    {
      libraryName:"bell green library and learning centre",
      address:"17-23 riley square",
      cityName:"coventry",
      email:"bellgreen.library@coventry.gov.uk",
      phone:"0247 678 5819"
    },
    {
      libraryName:"wolston library",
      address:"warwick road",
      cityName:"coventry",
      email:"libraryenquiryteam@warwickshire.gov.uk",
      phone:"02476 542 513"
    },
    {
      libraryName:"foleshill community library",
      address:"broad street",
      cityName:"coventry",
      email:"foleshill.library@coventry.gov.uk",
      phone:"02476 687 562"
    },
    {
      libraryName:"caludon castle school",
      address:"axholme road",
      cityName:"coventry",
      email:"caludon.library@coventry.gov.uk",
      phone:"02476 788 300"
    },
    {
      libraryName:"coventry central library",
      address:"smithford way",
      cityName:"coventry",
      email:"central.libray@coventry.gov.uk",
      phone:"02476 832 583"
    },
    {
      libraryName:"cradley heath library",
      address:"upper high street",
      cityName:"cradley heath",
      email:"cradleyheath_library@sandwell.gov.uk",
      phone:"01384 569316"
    },
    {
      libraryName:"gornal library",
      address:"abbey road",
      cityName:"dudley",
      email:"gornal.library@dudley.gov.uk",
      phone:"01384 812 755"
    },
    {
      libraryName:"wordsley library",
      address:"wordsley green",
      cityName:"dudley",
      email:"wordsley.library@dudley.gov.uk",
      phone:"01384 812 765"
    },
    {
      libraryName:"sedgley library",
      address:"ladies walk",
      cityName:"dudley",
      email:"sedgley.library@dudley.gov.uk",
      phone:"01384 812 790"
    },
    {
      libraryName:"netherton library",
      address:"halesowen road",
      cityName:"dudley",
      email:"netherton.library@dudley.gov.uk",
      phone:"01384 812 845"
    },
    {
      libraryName:"brierley hill library",
      address:"122 high street",
      cityName:"dudley",
      email:"brierleyhill.library@dudley.gov.uk",
      phone:"01384 812865"
    },
    {
      libraryName:"dudley library",
      address:"st. james's road",
      cityName:"dudley",
      email:"dudley.library@dudley.gov.uk",
      phone:"01384 815 560"
    },
    {
      libraryName:"dudley wood library link",
      address:"pavilion gardens",
      cityName:"dudley",
      email:"",
      phone:"0191 643 2035"
    },
    {
      libraryName:"woodside library link",
      address:"woodside primary school",
      cityName:"dudley",
      email:"dudley.library@dudley.gov.uk",
      phone:""
    },
    {
      libraryName:"quarry bank library link",
      address:"sheffield street",
      cityName:"dudley",
      email:"",
      phone:""
    },
    {
      libraryName:"finchfield library",
      address:"white oak drive",
      cityName:"finchfield",
      email:"finchfield.library@dial.pipex.com",
      phone:"01902 556260"
    },
    {
      libraryName:"long lane library",
      address:"long lane",
      cityName:"halesowen",
      email:"longlane.library@dudley.gov.uk",
      phone:"01384 812 880"
    },
    {
      libraryName:"cradley library",
      address:"colley lane",
      cityName:"halesowen",
      email:"cradley.library@dudley.gov.uk",
      phone:"01384 812 885"
    },
    {
      libraryName:"halesowen library",
      address:"hagley mall",
      cityName:"halesowen",
      email:"halesowen.library@dudley.gov.uk",
      phone:"01384 812 980"
    },
    {
      libraryName:"kingswinford library",
      address:"market street",
      cityName:"kingswinford",
      email:"kingswinford.library@dudley.gov.uk",
      phone:"01384 812740"
    },
    {
      libraryName:"bleakhouse library",
      address:"bleakhouse road",
      cityName:"oldbury",
      email:"bleakhouse_library@sandwell.gov.uk",
      phone:"0121 422 2798"
    },
    {
      libraryName:"brandhall library",
      address:"tame road",
      cityName:"oldbury",
      email:"brandhall_library@sandwell.gov.uk",
      phone:"0121 422 5270"
    },
    {
      libraryName:"langley library",
      address:"barrs street",
      cityName:"oldbury",
      email:"",
      phone:""
    },
    {
      libraryName:"rounds green library",
      address:"martley road",
      cityName:"oldbury",
      email:"",
      phone:""
    },
    {
      libraryName:"oakham library",
      address:"poplar rise",
      cityName:"oldbury",
      email:"",
      phone:""
    },
    {
      libraryName:"oldbury library",
      address:"church street",
      cityName:"oldbury",
      email:"",
      phone:""
    },
    {
      libraryName:"pensnett library link",
      address:"high oak surgery, 120 high street",
      cityName:"pensnett",
      email:"",
      phone:""
    },
    {
      libraryName:"blackheath library",
      address:"carnegie road",
      cityName:"rowley regis",
      email:"",
      phone:""
    },
    {
      libraryName:"thimblemill library",
      address:"thimblemill road",
      cityName:"smethwick",
      email:"thimblemill_library@sandwell.gov.uk",
      phone:"0121 429 2039"
    },
    {
      libraryName:"smethwick library",
      address:"high street",
      cityName:"smethwick",
      email:"smethwick_library@sandwell.gov.uk",
      phone:"0121 558 0497"
    },
    {
      libraryName:"galton valley express library",
      address:"great arthur street",
      cityName:"smethwick",
      email:"",
      phone:""
    },
    {
      libraryName:"solihull library",
      address:"homer road",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 704 6965"
    },
    {
      libraryName:"olton library",
      address:"169a warwick road",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 706 3038"
    },
    {
      libraryName:"hobs moat library",
      address:"ulleries road",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 743 4592"
    },
    {
      libraryName:"shirley library",
      address:"church road",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 744 1076"
    },
    {
      libraryName:"dickens heath library",
      address:"old dickens heath road",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 744 6078"
    },
    {
      libraryName:"castle bromwich library",
      address:"hurst lane north",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 747 3708"
    },
    {
      libraryName:"kingshurst library",
      address:"marston drive",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 770 3451"
    },
    {
      libraryName:"marston green library",
      address:"land lane",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 779 2131"
    },
    {
      libraryName:"chelmsley wood library",
      address:"10 west mall",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"0121 788 4380"
    },
    {
      libraryName:"knowle library",
      address:"chester house",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"01564 775840"
    },
    {
      libraryName:"hampton in arden library",
      address:"39 fentham road",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"01675 442 629"
    },
    {
      libraryName:"meriden library",
      address:"arden cottage",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"01676 522717"
    },
    {
      libraryName:"balsall common library",
      address:"283 kenilworth road",
      cityName:"solihull",
      email:"libraryarts@solihull.gov.uk",
      phone:"01676 532590"
    },
    {
      libraryName:"henley in arden library",
      address:"guild hall",
      cityName:"solihull",
      email:"",
      phone:""
    },
    {
      libraryName:"aldermoor farm community library",
      address:"aldermoor farm school",
      cityName:"stoke aldermoor",
      email:"aldermoorfarm.library@coventry.gov.uk",
      phone:"024 7644 2840"
    },
    {
      libraryName:"stourbridge library",
      address:"crown centre",
      cityName:"stourbridge",
      email:"stourbridge.library@dudley.gov.uk",
      phone:"01384 812 949"
    },
    {
      libraryName:"lye library",
      address:"chapel street",
      cityName:"stourbridge",
      email:"lye.library@dudley.gov.uk",
      phone:"01384 812835"
    },
    {
      libraryName:"hagley library",
      address:"worcester road",
      cityName:"stourbridge",
      email:"hagleylib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"kinver library",
      address:"vicarage drive",
      cityName:"stourbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"walmley library",
      address:"walmley road",
      cityName:"sutton coldfield",
      email:"walmley.library@birmingham.gov.uk",
      phone:"0121 464 1842"
    },
    {
      libraryName:"tettenhall library",
      address:"upper street",
      cityName:"tettenhall",
      email:"tettenhall.library@dial.pipex.com",
      phone:"01902 556318"
    },
    {
      libraryName:"glebefields library",
      address:"st. marks road",
      cityName:"tipton",
      email:"glebefields_library@sandwell.gov.uk",
      phone:"0121 557 8641"
    },
    {
      libraryName:"great bridge library",
      address:"sheepwash lane",
      cityName:"tipton",
      email:"",
      phone:""
    },
    {
      libraryName:"tipton library",
      address:"owen house",
      cityName:"tipton",
      email:"",
      phone:""
    },
    {
      libraryName:"streetly library",
      address:"blackwood road",
      cityName:"walsall",
      email:"streetlylibrary@walsall.gov.uk",
      phone:"01922 65 4864"
    },
    {
      libraryName:"darlaston library",
      address:"1 king street",
      cityName:"walsall",
      email:"darlastonlibrary@walsall.gov.uk",
      phone:"0121 526 4530"
    },
    {
      libraryName:"cheslyn hay library",
      address:"village hall, pinfold lane",
      cityName:"walsall",
      email:"cheslynhay.library@staffordshire.gov.uk",
      phone:"01922 413956"
    },
    {
      libraryName:"brownhills library",
      address:"park view centre, chester road north",
      cityName:"walsall",
      email:"brownhillslibrary@walsall.gov.uk",
      phone:"01922 65 0730"
    },
    {
      libraryName:"walsall central library",
      address:"lichfield street",
      cityName:"walsall",
      email:"centrallendinglibrary@walsall.gov.uk",
      phone:"01922 653121"
    },
    {
      libraryName:"pheasey library",
      address:"collingwood centre, collingwood drive, great barr",
      cityName:"walsall",
      email:"pheaseylibrary@walsall.gov.uk",
      phone:"01922 654865"
    },
    {
      libraryName:"aldridge library",
      address:"rookery lane",
      cityName:"walsall",
      email:"aldridgelibrary@walsall.gov.uk",
      phone:"01922 655569"
    },
    {
      libraryName:"walsall wood library",
      address:"lichfield road",
      cityName:"walsall",
      email:"walsallwoodlibrary@walsall.gov.uk",
      phone:"01922 655572"
    },
    {
      libraryName:"beechdale library",
      address:"stephenson square",
      cityName:"walsall",
      email:"beechdalelibrary@walsall.gov.uk",
      phone:"01922 655890"
    },
    {
      libraryName:"pelsall library",
      address:"17/18 norton road",
      cityName:"walsall",
      email:"pelsalllibrary@walsall.gov.uk",
      phone:"01922 65 0455"
    },
    {
      libraryName:"bloxwich library",
      address:"elmore row",
      cityName:"walsall",
      email:"bloxwichlibrary@walsall.gov.uk",
      phone:"01922 655900"
    },
    {
      libraryName:"blakenall library",
      address:"blakenall village centre, thames road",
      cityName:"walsall",
      email:"blakenalllibrary@walsall.gov.uk",
      phone:"01922 714967"
    },
    {
      libraryName:"walsall local history centre library",
      address:"essex street",
      cityName:"walsall",
      email:"localhistorycentre@walsall.gov.uk",
      phone:"01922 721305"
    },
    {
      libraryName:"pleck library",
      address:"darlaston road",
      cityName:"walsall",
      email:"plecklibrary@walsall.gov.uk",
      phone:"01922 65 4860"
    },
    {
      libraryName:"rushall library",
      address:"pelsall lane",
      cityName:"walsall",
      email:"rushalllibrary@walsall.gov.uk",
      phone:"01922 721310"
    },
    {
      libraryName:"south walsall library",
      address:"west bromwich road",
      cityName:"walsall",
      email:"southwalsalllibrary@walsall.gov.uk",
      phone:"01922 721347"
    },
    {
      libraryName:"wednesbury library",
      address:"walsall street",
      cityName:"wednesbury",
      email:"",
      phone:""
    },
    {
      libraryName:"wednesfield library",
      address:"well lane",
      cityName:"wednesfield",
      email:"",
      phone:""
    },
    {
      libraryName:"sandwell central library",
      address:"high street",
      cityName:"west bromwich",
      email:"central.library@sandwell.gov.uk",
      phone:"0121 569 4904"
    },
    {
      libraryName:"stone cross library",
      address:"beverley road",
      cityName:"west bromwich",
      email:"stonecross_library@sandwell.gov.uk",
      phone:"0121 588 2367"
    },
    {
      libraryName:"hill top community library",
      address:"park buildings",
      cityName:"west bromwich",
      email:"",
      phone:""
    },
    {
      libraryName:"bright futures express library",
      address:"huntingdon road",
      cityName:"west bromwich",
      email:"",
      phone:""
    },
    {
      libraryName:"walsall libraries, new invention library",
      address:"28 the square\\\\nlichfield road",
      cityName:"willenhall",
      email:"newinventionlibrary@walsall.gov.uk",
      phone:"01922 655570"
    },
    {
      libraryName:"furzebank library",
      address:"furzebank way",
      cityName:"willenhall",
      email:"",
      phone:""
    },
    {
      libraryName:"forest gate library",
      address:"new invention",
      cityName:"willenhall",
      email:"",
      phone:""
    },
    {
      libraryName:"east park library",
      address:"hurstbourne crescent",
      cityName:"wolverhampton",
      email:"",
      phone:"01236 720032"
    },
    {
      libraryName:"albrighton library",
      address:"station rd",
      cityName:"wolverhampton",
      email:"albrighton.library@shropshire.gov.uk",
      phone:"01902 372226"
    },
    {
      libraryName:"wolverhampton central library",
      address:"snow hill",
      cityName:"wolverhampton",
      email:"wolverhampton.libraries@dial.pipex.com",
      phone:"01902 552025"
    },
    {
      libraryName:"scotlands and underhill library",
      address:"masefield road",
      cityName:"wolverhampton",
      email:"scotlands.library@dial.pipex.com",
      phone:"01902 552198"
    },
    {
      libraryName:"wolverhampton libraries and information services, mary pointon library",
      address:"woodcross community centre",
      cityName:"wolverhampton",
      email:"marypointon.library@dial.pipex.com",
      phone:"01902 556263"
    },
    {
      libraryName:"wolverhampton libraries and information services, heath cityname community library",
      address:"tudor road",
      cityName:"wolverhampton",
      email:"heathcityname.library@dial.pipex.com",
      phone:"01902 556266"
    },
    {
      libraryName:"whitmore reans library",
      address:"bargate drive",
      cityName:"wolverhampton",
      email:"whitmorereans.library@dial.pipex.com",
      phone:"01902 556269"
    },
    {
      libraryName:"wolverhampton libraries and information services, warstones library",
      address:"pinfold grove",
      cityName:"wolverhampton",
      email:"warstones.library@dial.pipex.com",
      phone:"01902 556275"
    },
    {
      libraryName:"wolverhampton libraries and information services, wednesfield library",
      address:"church street",
      cityName:"wolverhampton",
      email:"wednesfield.library@dial.pipex.com",
      phone:"01902 556278"
    },
    {
      libraryName:"penn library",
      address:"coalway avenue",
      cityName:"wolverhampton",
      email:"penn.library@dial.pipex.com",
      phone:"01902 556281"
    },
    {
      libraryName:"spring vale library",
      address:"bevan avenue",
      cityName:"wolverhampton",
      email:"springvale.library@dial.pipex.com",
      phone:"01902 556284"
    },
    {
      libraryName:"wolverhampton libraries and information services, oxley library",
      address:"probert road",
      cityName:"wolverhampton",
      email:"oxley.library@dial.pipex.com",
      phone:"01902 556287"
    },
    {
      libraryName:"long knowle library",
      address:"wood end road",
      cityName:"wolverhampton",
      email:"longknowle.library@dial.pipex.com",
      phone:"01902 556290"
    },
    {
      libraryName:"low hill library",
      address:"showell circus",
      cityName:"wolverhampton",
      email:"lowhill.library@wolverhampton.gov.uk",
      phone:"01902 556293"
    },
    {
      libraryName:"ashmore park library",
      address:"griffiths drive",
      cityName:"wolverhampton",
      email:"ashmorepark.library@wolverhampton.gov.uk",
      phone:"01902 556296"
    },
    {
      libraryName:"bradmore library",
      address:"bantock house",
      cityName:"wolverhampton",
      email:"bradmore.library@dial.pipex.com",
      phone:"01902 556299"
    },
    {
      libraryName:"collingwood library",
      address:"24 the broadway",
      cityName:"wolverhampton",
      email:"collingwood.library@dial.pipex.com",
      phone:"01902 556302"
    },
    {
      libraryName:"perton library",
      address:"severn drive",
      cityName:"wolverhampton",
      email:"perton.library@staffordshire.gov.uk",
      phone:"01902 755794"
    },
    {
      libraryName:"daisy bank library",
      address:"ash street",
      cityName:"wolverhampton",
      email:"",
      phone:""
    },
    {
      libraryName:"angmering library",
      address:"arundel road",
      cityName:"angmering",
      email:"angmering.library@westsussex.gov.uk",
      phone:"01903 772682"
    },
    {
      libraryName:"arundel library",
      address:"surrey street",
      cityName:"arundel",
      email:"arundel.library@westsussex.gov.uk",
      phone:"01903 883188"
    },
    {
      libraryName:"billingshurst library",
      address:"mill lane",
      cityName:"billingshurst",
      email:"billingshurst.library@westsussex.gov.uk",
      phone:"01403 783145"
    },
    {
      libraryName:"willowhale library",
      address:"pryors lane",
      cityName:"bognor regis",
      email:"willowhale.library@westsussex.gov.uk",
      phone:"01243 265712"
    },
    {
      libraryName:"bognor regis library",
      address:"london road",
      cityName:"bognor regis",
      email:"bognor.regis.library@westsussex.gov.uk",
      phone:"01243 642110"
    },
    {
      libraryName:"hurstpierpoint library",
      address:"trinity road",
      cityName:"burgess hill",
      email:"hurstpierpoint.library@westsussex.gov.uk",
      phone:"01273 832609"
    },
    {
      libraryName:"burgess hill library",
      address:"the martlets",
      cityName:"burgess hill",
      email:"burgess.hill.library@westsussex.gov.uk",
      phone:"01444 235549"
    },
    {
      libraryName:"southbourne library",
      address:"first avenue",
      cityName:"chichester",
      email:"southbourne.library@westsussex.gov.uk",
      phone:"01243 375924"
    },
    {
      libraryName:"witterings library",
      address:"oakfield avenue",
      cityName:"chichester",
      email:"witterings.library@westsussex.gov.uk",
      phone:"01243 673484"
    },
    {
      libraryName:"chichester library",
      address:"tower street",
      cityName:"chichester",
      email:"chichester.library@westsussex.gov.uk",
      phone:"01243 777351"
    },
    {
      libraryName:"broadfield library",
      address:"46 broadfield barton",
      cityName:"crawley",
      email:"broadfield.library@westsussex.gov.uk",
      phone:"01293 543298"
    },
    {
      libraryName:"crawley library",
      address:"southgate avenue",
      cityName:"crawley",
      email:"crawley.library@westsussex.gov.uk",
      phone:"01293 651751"
    },
    {
      libraryName:"east grinstead library",
      address:"32 - 40 west street",
      cityName:"east grinstead",
      email:"eastgrinstead.library@westsussex.gov.uk",
      phone:"01342 410050"
    },
    {
      libraryName:"ferring library",
      address:"ferring street",
      cityName:"ferring, nr worthing",
      email:"ferring.library@westsussex.gov.uk",
      phone:"01903 241811"
    },
    {
      libraryName:"hassocks library",
      address:"stafford house",
      cityName:"hassocks",
      email:"hassocks.library@westsussex.gov.uk",
      phone:"01273 842779"
    },
    {
      libraryName:"haywards heath library",
      address:"34 boltro road",
      cityName:"haywards heath",
      email:"haywards.heath.library@westsussex.gov.uk",
      phone:"01444 255444"
    },
    {
      libraryName:"henfield library",
      address:"off high street",
      cityName:"henfield",
      email:"henfield.library@westsussex.gov.uk",
      phone:"01273 493587"
    },
    {
      libraryName:"horsham library",
      address:"lower tanbridge way",
      cityName:"horsham",
      email:"horsham.library@westsussex.gov.uk",
      phone:"01403 224353"
    },
    {
      libraryName:"lancing library",
      address:"penstone park",
      cityName:"lancing",
      email:"lancing.library@westsussex.gov.uk",
      phone:"01903 753592"
    },
    {
      libraryName:"east preston library",
      address:"the street",
      cityName:"littlehampton",
      email:"east.preston.library@westsussex.gov.uk",
      phone:"01243 642110"
    },
    {
      libraryName:"littlehampton library",
      address:"maltravers road",
      cityName:"littlehampton",
      email:"littlehampton.library@westsussex.gov.uk",
      phone:"01903 716450"
    },
    {
      libraryName:"midhurst library",
      address:"knockhundred row",
      cityName:"midhurst",
      email:"midhurst.library@westsussex.gov.uk",
      phone:"01730 813564"
    },
    {
      libraryName:"petworth library",
      address:"high street",
      cityName:"petworth",
      email:"petworth.library@westsussex.gov.uk",
      phone:"01243 642110"
    },
    {
      libraryName:"pulborough library",
      address:"brooks way",
      cityName:"pulborough",
      email:"pulborough.library@westsussex.gov.uk",
      phone:"01798 872891"
    },
    {
      libraryName:"storrington library",
      address:"ryecroft lane",
      cityName:"pulborough",
      email:"storrington.library@westsussex.gov.uk",
      phone:"01903 743075"
    },
    {
      libraryName:"rustington library",
      address:"claigmar road",
      cityName:"rustington",
      email:"rustington.library@westsussex.gov.uk",
      phone:"01903 785857"
    },
    {
      libraryName:"selsey library",
      address:"school lane",
      cityName:"selsey, nr chichester",
      email:"selsey.library@westsussex.gov.uk",
      phone:"01243 602096"
    },
    {
      libraryName:"shoreham library",
      address:"st marys road",
      cityName:"shoreham",
      email:"shoreham.library@westsussex.gov.uk",
      phone:"01273 454438"
    },
    {
      libraryName:"steyning library",
      address:"church street",
      cityName:"steyning",
      email:"steyning.library@westsussex.gov.uk",
      phone:"01903 812751"
    },
    {
      libraryName:"broadwater library",
      address:"dominion road",
      cityName:"worthing",
      email:"broadwater.library@westsussex.gov.uk",
      phone:"01903 233244"
    },
    {
      libraryName:"durrington library",
      address:"salvington road",
      cityName:"worthing",
      email:"durrington.library@westsussex.gov.uk",
      phone:"01903 260439"
    },
    {
      libraryName:"findon valley library",
      address:"lime tree avenue",
      cityName:"worthing",
      email:"findon.valley.library@westsussex.gov.uk",
      phone:"01903 872213"
    },
    {
      libraryName:"worthing library",
      address:"richmond road",
      cityName:"worthing",
      email:"worthing.library@westsussex.gov.uk",
      phone:"general enquiries 01903 704809. reference enquiries, 01903 704824"
    },
    {
      libraryName:"ackworth library",
      address:"bell lane",
      cityName:"ackworth",
      email:"ackworthlibrary@wakefield.gov.uk",
      phone:"01977 722 220"
    },
    {
      libraryName:"birstall library and information centre",
      address:"market place",
      cityName:"batley",
      email:"birstalllibrary@leics.gov.uk",
      phone:"0116 305 8756"
    },
    {
      libraryName:"batley library",
      address:"market place",
      cityName:"batley",
      email:"batley.lic@kirklees.gov.uk",
      phone:"01924 326021"
    },
    {
      libraryName:"beeston library",
      address:"cityname street",
      cityName:"beeston",
      email:"beestonlibrary@leedslearning.net",
      phone:"0113 214 1766"
    },
    {
      libraryName:"bingley library",
      address:"myrtle walk",
      cityName:"bingley",
      email:"bingley.library@bradford.gov.uk",
      phone:"01274 438780"
    },
    {
      libraryName:"eccleshill library",
      address:"bolton road",
      cityName:"bradford",
      email:"eccleshill.library@bradford.gov.uk",
      phone:"01274 431544"
    },
    {
      libraryName:"girlington library",
      address:"willow street",
      cityName:"bradford",
      email:"girlington.library@bradford.gov.uk",
      phone:"01274 431551"
    },
    {
      libraryName:"great horton library",
      address:"cross lane",
      cityName:"bradford",
      email:"greathorton.library@bradford.gov.uk",
      phone:"01274 431583"
    },
    {
      libraryName:"east bowling library",
      address:"flockton house",
      cityName:"bradford",
      email:"eastbowling.library@bradford.gov.uk",
      phone:"01274 431989"
    },
    {
      libraryName:"bradford central library",
      address:"prince's  way",
      cityName:"bradford",
      email:"dawn.greenwood@bradford.gov.uk",
      phone:"01274 433600"
    },
    {
      libraryName:"laisterdyke library",
      address:"manse street",
      cityName:"bradford",
      email:"laisterdyke.library@bradford.gov.uk",
      phone:"01274 434724"
    },
    {
      libraryName:"manningham library",
      address:"carlisle road",
      cityName:"bradford",
      email:"manningham.library@bradford.gov.uk",
      phone:"01274 435353"
    },
    {
      libraryName:"allerton library",
      address:"avenel road",
      cityName:"bradford",
      email:"allerton.library@bradford.gov.uk",
      phone:"01274 437222"
    },
    {
      libraryName:"haworth road library",
      address:"haworth road",
      cityName:"bradford",
      email:"haworth.library@bradford.gov.uk",
      phone:"01274 494808"
    },
    {
      libraryName:"heaton library",
      address:"st. barnabas village hall",
      cityName:"bradford",
      email:"heaton.library@bradford.gov.uk",
      phone:"01274 547303"
    },
    {
      libraryName:"baildon library",
      address:"hallcliffe",
      cityName:"bradford",
      email:"baildon.library@bradford.gov.uk",
      phone:"01274 581425"
    },
    {
      libraryName:"wrose library",
      address:"wrose road",
      cityName:"bradford",
      email:"wrose.library@bradford.gov.uk",
      phone:"01274 592570"
    },
    {
      libraryName:"idle library",
      address:"20 albion road",
      cityName:"bradford",
      email:"idle.library@bradford.gov.uk",
      phone:"01274 614169"
    },
    {
      libraryName:"thornbury library",
      address:"thornbury centre",
      cityName:"bradford",
      email:"thornbury.library@bradford.gov.uk",
      phone:"01274 666984"
    },
    {
      libraryName:"wyke library",
      address:"huddersfield road",
      cityName:"bradford",
      email:"wyke.library@bradford.gov.uk",
      phone:"01274 676830"
    },
    {
      libraryName:"wibsey library",
      address:"north road",
      cityName:"bradford",
      email:"wibsey.library@bradford.gov.uk",
      phone:"01274 679043"
    },
    {
      libraryName:"holme wood library",
      address:"broadstone way",
      cityName:"bradford",
      email:"holmewood.library@bradford.gov.uk",
      phone:"01274 684012"
    },
    {
      libraryName:"st. augustines library",
      address:"st. augustine's centre",
      cityName:"bradford",
      email:"staugustines.library@bradford.gov.uk",
      phone:"01274 721064"
    },
    {
      libraryName:"thornton library",
      address:"community centre",
      cityName:"bradford",
      email:"thornton.library@bradford.gov.uk",
      phone:"01274 833442"
    },
    {
      libraryName:"clayton library",
      address:"old school house",
      cityName:"bradford",
      email:"clayton.library@bradford.gov.uk",
      phone:"01274 880689"
    },
    {
      libraryName:"queensbury library",
      address:"victoria hall",
      cityName:"bradford",
      email:"queensbury.library@bradford.gov.uk",
      phone:"01274 882261"
    },
    {
      libraryName:"silsden library",
      address:"memorial gardens",
      cityName:"bradford",
      email:"silsden.library@bradford.gov.uk",
      phone:"01535 652480"
    },
    {
      libraryName:"ilkley library",
      address:"station road",
      cityName:"bradford",
      email:"ilkley.library@bradford.gov.uk",
      phone:"01943 436225"
    },
    {
      libraryName:"wilsden library",
      address:"wilsden village hall",
      cityName:"bradford",
      email:"wilsden.library@bradford.gov.uk",
      phone:"07582 100168"
    },
    {
      libraryName:"denholme library",
      address:"mechanics institute",
      cityName:"bradford",
      email:"denholme.library@bradford.gov.uk",
      phone:"07852 107507"
    },
    {
      libraryName:"rastrick library",
      address:"crowtrees lane",
      cityName:"brighouse",
      email:"rastrick.library@calderdale.gov.uk",
      phone:"01484 714858"
    },
    {
      libraryName:"bailiff bridge library",
      address:"devon way",
      cityName:"brighouse",
      email:"bailiff_bridge.library@calderdale.gov.uk",
      phone:"01484 719164"
    },
    {
      libraryName:"brighouse library",
      address:"halifax road",
      cityName:"brighouse",
      email:"brighouse.library@calderdale.gov.uk",
      phone:"1421 288060"
    },
    {
      libraryName:"castleford library",
      address:"2 sagar street (temporary address)",
      cityName:"castleford",
      email:"castlefordlibrary@wakefield.gov.uk",
      phone:"01977 722085"
    },
    {
      libraryName:"airedale library",
      address:"the square",
      cityName:"castleford",
      email:"airedalelibrary@wakefield.gov.uk",
      phone:"01977 724040"
    },
    {
      libraryName:"cleckheaton library",
      address:"whitcliffe road",
      cityName:"cleckheaton",
      email:"cleckheaton.lic@kirklees.gov.uk",
      phone:"01274 335170"
    },
    {
      libraryName:"denby dale library",
      address:"wakefield road",
      cityName:"denby dale",
      email:"denbydale.lic@kirklees.gov.uk",
      phone:"01484 222904"
    },
    {
      libraryName:"greenwood centre library",
      address:"huddersfield road",
      cityName:"dewsbury",
      email:"greenwoodcentre.lic@kirklees.gov.uk",
      phone:"01924 325040"
    },
    {
      libraryName:"dewsbury library",
      address:"dewsbury road",
      cityName:"dewsbury",
      email:"",
      phone:""
    },
    {
      libraryName:"thornhill lees library",
      address:"53 brewery lane",
      cityName:"dewsbury",
      email:"",
      phone:""
    },
    {
      libraryName:"elland library",
      address:"coronation street",
      cityName:"elland",
      email:"elland.library@calderdale.gov.uk",
      phone:"01422 374472"
    },
    {
      libraryName:"featherstone library",
      address:"victoria street",
      cityName:"featherstone",
      email:"featherstonelibrary@wakefield.gov.uk",
      phone:"01977 722 745"
    },
    {
      libraryName:"hipperholme library",
      address:"council offices",
      cityName:"halifax",
      email:"hipperholme.library@calderdale.gov.uk",
      phone:"01422 202257"
    },
    {
      libraryName:"northowram library",
      address:"lydgate",
      cityName:"halifax",
      email:"northowram.library@calderdale.gov.uk",
      phone:"01422 202997"
    },
    {
      libraryName:"beechwood road library",
      address:"beechwood road",
      cityName:"halifax",
      email:"beechwood_road.library@calderdale.gov.uk",
      phone:"01422 244161"
    },
    {
      libraryName:"mixenden library",
      address:"mixenden road",
      cityName:"halifax",
      email:"mixenden.library@calderdale.gov.uk",
      phone:"01422 244694"
    },
    {
      libraryName:"shelf library",
      address:"shelf village hall",
      cityName:"halifax",
      email:"shelf.library@calderdale.gov.uk",
      phone:"01422 288090"
    },
    {
      libraryName:"akroyd library",
      address:"akroyd park",
      cityName:"halifax",
      email:"akroyd.library@calderdale.gov.uk",
      phone:"01422 352277"
    },
    {
      libraryName:"skircoat library",
      address:"skircoat green road",
      cityName:"halifax",
      email:"skircoat.library@calderdale.gov.uk",
      phone:"01422 354828"
    },
    {
      libraryName:"southowram library",
      address:"law lane",
      cityName:"halifax",
      email:"southowram.library@calderdale.gov.uk",
      phone:"01422 367061"
    },
    {
      libraryName:"stainland library",
      address:"stainland road",
      cityName:"halifax",
      email:"stainland.library@calderdale.gov.uk",
      phone:"01422 374896"
    },
    {
      libraryName:"greetland library",
      address:"rochdale road",
      cityName:"halifax",
      email:"greetland.library@calderdale.gov.uk",
      phone:"01422 376068"
    },
    {
      libraryName:"halifax central library",
      address:"northgate",
      cityName:"halifax",
      email:"libraries@calderdale.gov.uk",
      phone:"01422 392630"
    },
    {
      libraryName:"king cross library",
      address:"151 haugh shaw road",
      cityName:"halifax",
      email:"",
      phone:""
    },
    {
      libraryName:"mytholmroyd library",
      address:"cragg road",
      cityName:"hebden bridge",
      email:"mytholmroyd.library@calderdale.gov.uk",
      phone:"01422 883933"
    },
    {
      libraryName:"hebden bridge library",
      address:"cheetham street",
      cityName:"hebden bridge",
      email:"",
      phone:""
    },
    {
      libraryName:"heckmondwike library",
      address:"walkley lane",
      cityName:"heckmondwike",
      email:"heckmondwike.lic@kirklees.gov.uk",
      phone:"01924 325637"
    },
    {
      libraryName:"honley library",
      address:"west avenue",
      cityName:"holmfirth",
      email:"honley.lic@kirklees.gov.uk",
      phone:"01484 222340"
    },
    {
      libraryName:"holmfirth library",
      address:"47 huddersfield road",
      cityName:"holmfirth",
      email:"holmfirth.lic@kirklees.gov.uk",
      phone:"01484 222430"
    },
    {
      libraryName:"golcar library",
      address:"12 cityname end",
      cityName:"huddersfield",
      email:"golcar.lic@kirklees.gov.uk",
      phone:"01484 222138"
    },
    {
      libraryName:"lindley library",
      address:"lidget street",
      cityName:"huddersfield",
      email:"lindley.lic@kirklees.gov.uk",
      phone:"01484 222172"
    },
    {
      libraryName:"kirkburton library",
      address:"17 turnshaw road",
      cityName:"huddersfield",
      email:"kinfo@kirklees.gov.uk",
      phone:"01484 222710"
    },
    {
      libraryName:"shepley library",
      address:"st pauls church hall",
      cityName:"huddersfield",
      email:"shepley.lic@kirklees.gov.uk",
      phone:"01484 222712"
    },
    {
      libraryName:"almondbury library",
      address:"stocks walk",
      cityName:"huddersfield",
      email:"almondbury.lic@kirklees.gov.uk",
      phone:"01484 223183"
    },
    {
      libraryName:"birkby farcityname library",
      address:"wasp nest road",
      cityName:"huddersfield",
      email:"",
      phone:""
    },
    {
      libraryName:"chestnut centre library",
      address:"2a chestnut street",
      cityName:"huddersfield",
      email:"",
      phone:""
    },
    {
      libraryName:"kirkheaton library",
      address:"fields rise",
      cityName:"huddersfield",
      email:"",
      phone:""
    },
    {
      libraryName:"lepton library",
      address:"56 highgate lane",
      cityName:"huddersfield",
      email:"",
      phone:""
    },
    {
      libraryName:"addingham library",
      address:"main street",
      cityName:"ilkley",
      email:"addingham.library@bradford.gov.uk",
      phone:"01943 830061"
    },
    {
      libraryName:"burley library",
      address:"grange road",
      cityName:"ilkley",
      email:"burley.library@bradford.gov.uk",
      phone:"01943 863714"
    },
    {
      libraryName:"menston library",
      address:"main street",
      cityName:"ilkley",
      email:"menston.library@bradford.gov.uk",
      phone:"01943 876539"
    },
    {
      libraryName:"crosshills library and information centre",
      address:"main street",
      cityName:"keighley",
      email:"crosshills.library@northyorks.gov.uk",
      phone:"0845 034 9533"
    },
    {
      libraryName:"huddersfield library",
      address:"princess alexandra walk",
      cityName:"kirklees",
      email:"",
      phone:"01484 221961"
    },
    {
      libraryName:"knottingley library",
      address:"hill top",
      cityName:"knottingley",
      email:"knottingleylibrary@wakefield.gov.uk",
      phone:"01977 722 450"
    },
    {
      libraryName:"scholes library",
      address:"3 station road",
      cityName:"leeds",
      email:"scholeslibrary@leedslearning.net",
      phone:"0113 214 1319"
    },
    {
      libraryName:"halton library",
      address:"273 selby road",
      cityName:"leeds",
      email:"haltonlibrary@leedslearning.net",
      phone:"0113 214 1320"
    },
    {
      libraryName:"hunslet library",
      address:"waterloo road",
      cityName:"leeds",
      email:"hunsletlibrary@leedslearning.net",
      phone:"0113 214 1764"
    },
    {
      libraryName:"cow close library",
      address:"4 whincover drive",
      cityName:"leeds",
      email:"cowcloselibrary@leedslearning.net",
      phone:"0113 214 3548"
    },
    {
      libraryName:"whinmoor library",
      address:"naburn approach",
      cityName:"leeds",
      email:"whinmoorlibrary@leedslearning.net",
      phone:"0113 214 4159"
    },
    {
      libraryName:"seacroft library",
      address:"seacroft crescent",
      cityName:"leeds",
      email:"seacroftlibrary@leedslearning.net",
      phone:"0113 214 4171"
    },
    {
      libraryName:"shadwell library",
      address:"99 main street",
      cityName:"leeds",
      email:"shadwelllibrary@leedslearning.net",
      phone:"0113 214 4191"
    },
    {
      libraryName:"oakwood library",
      address:"1 oakwood lane",
      cityName:"leeds",
      email:"oakwoodlibrary@leedslearning.net",
      phone:"0113 214 4192"
    },
    {
      libraryName:"headingley library",
      address:"north lane",
      cityName:"leeds",
      email:"headinglylibrary@leedslearning.net",
      phone:"0113 214 4525"
    },
    {
      libraryName:"burley library",
      address:"cardigan road",
      cityName:"leeds",
      email:"burleylibrary@leedslearning.net",
      phone:"0113 214 4528"
    },
    {
      libraryName:"horsforth library",
      address:"cityname street",
      cityName:"leeds",
      email:"horsforthlibrary@leedslearning.net",
      phone:"0113 214 4801"
    },
    {
      libraryName:"morley library",
      address:"commercial street",
      cityName:"leeds",
      email:"morleylibrary@leedslearning.net",
      phone:"0113 214 5418"
    },
    {
      libraryName:"gildersome library",
      address:"meeting hall",
      cityName:"leeds",
      email:"gildersomelibrary@leedslearning.net",
      phone:"0113 214 5422"
    },
    {
      libraryName:"moor allerton library",
      address:"moor allerton centre",
      cityName:"leeds",
      email:"moorallertonlibrary@leedslearning.net",
      phone:"0113 214 5624"
    },
    {
      libraryName:"chapel allerton library",
      address:"106 harrogate road",
      cityName:"leeds",
      email:"chapelallertonlibrary@leedslearning.net",
      phone:"0113 214 5812"
    },
    {
      libraryName:"pudsey library",
      address:"church lane",
      cityName:"leeds",
      email:"pudseylibrary@leedslearning.net",
      phone:"0113 214 6035"
    },
    {
      libraryName:"farsley library",
      address:"old road",
      cityName:"leeds",
      email:"farsleylibrary@leedslearning.net",
      phone:"0113 214 6038"
    },
    {
      libraryName:"bramley library",
      address:"hough lane",
      cityName:"leeds",
      email:"bramleylibrary@leedslearning.net",
      phone:"0113 214 6040"
    },
    {
      libraryName:"calverley library",
      address:"thornhill street",
      cityName:"leeds",
      email:"calverleylibrary@leedslearning.net",
      phone:"0113 214 6043"
    },
    {
      libraryName:"yeadon library",
      address:"cityname hall square",
      cityName:"leeds",
      email:"yeadonlibrary@leedslearning.net",
      phone:"0113 214 6501"
    },
    {
      libraryName:"kippax library",
      address:"westfield lane",
      cityName:"leeds",
      email:"kippaxlibrary@leedslearning.net",
      phone:"0113 214 6802"
    },
    {
      libraryName:"middleton library",
      address:"st georges centre",
      cityName:"leeds",
      email:"middletonlibrary@leedslearning.net",
      phone:"0113 224 3119"
    },
    {
      libraryName:"rothwell library",
      address:"marsh street",
      cityName:"leeds",
      email:"rothwelllibrary@leedslearning.net",
      phone:"0113 224 3288"
    },
    {
      libraryName:"garforth library",
      address:"lidgett lane",
      cityName:"leeds",
      email:"garforthlibrary@leedslearning.net",
      phone:"0113 224 3291"
    },
    {
      libraryName:"crossgates library",
      address:"farm road",
      cityName:"leeds",
      email:"crossgateslibrary@leedslearning.net",
      phone:"0113 224 3328"
    },
    {
      libraryName:"leeds central library",
      address:"municipal buildings",
      cityName:"leeds",
      email:"enquiry.express@leeds.gov.uk",
      phone:"0113 247 6016"
    },
    {
      libraryName:"rawdon library",
      address:"micklefield park",
      cityName:"leeds",
      email:"rawdonlibrary@leedslearning.net",
      phone:"0113 247 7621"
    },
    {
      libraryName:"drighlington library",
      address:"moorland road",
      cityName:"leeds",
      email:"drighlingtonlibrary@leedslearning.net",
      phone:"0113 285 3740"
    },
    {
      libraryName:"chapelcityname library",
      address:"263 chapelcityname road",
      cityName:"leeds",
      email:"chapelcitynamelibrary@leedslearning.net",
      phone:"0113 336 7683"
    },
    {
      libraryName:"compton road library",
      address:"harehills lane",
      cityName:"leeds",
      email:"comptonroadlibrary@leedslearning.net",
      phone:"0113 336 7790"
    },
    {
      libraryName:"holt park library",
      address:"ralph thoresby high school",
      cityName:"leeds",
      email:"holtparklibrary@leedslearning.net",
      phone:"0113 336 8188"
    },
    {
      libraryName:"armley library",
      address:"2 stocks hill",
      cityName:"leeds",
      email:"armleylibrary@leedslearning.net",
      phone:"0113 395 1010"
    },
    {
      libraryName:"dewsbury road library",
      address:"190 dewsbury road",
      cityName:"leeds",
      email:"dewsburyroadlibrary@leedslearning.net",
      phone:"0113 395 1581"
    },
    {
      libraryName:"wetherby library",
      address:"17 westgate",
      cityName:"leeds",
      email:"wetherbylibrary@leedslearning.net",
      phone:"01937 583 144"
    },
    {
      libraryName:"boston spa library",
      address:"high street",
      cityName:"leeds",
      email:"bostonspalibrary@leedslearning.net",
      phone:"01937 845 239"
    },
    {
      libraryName:"otley library",
      address:"nelson street",
      cityName:"leeds",
      email:"otleylibrary@leedslearning.net",
      phone:"01943 466572"
    },
    {
      libraryName:"guiseley library",
      address:"otley road",
      cityName:"leeds",
      email:"guiseleylibrary@leedslearning.net",
      phone:"01943 872 675"
    },
    {
      libraryName:"methley library",
      address:"savile road",
      cityName:"leeds",
      email:"methleylibrary@leedslearning.net",
      phone:"01977 515 558"
    },
    {
      libraryName:"sherburn-in-elmet library and community resource centre",
      address:"finkle hill",
      cityName:"leeds",
      email:"sherburn.library@northyorks.gov.uk",
      phone:"0845 034 9443"
    },
    {
      libraryName:"marsden library",
      address:"marsden mechanics hall",
      cityName:"marsden",
      email:"marsden.lic@kirklees.gov.uk",
      phone:"01484 222555"
    },
    {
      libraryName:"meltham library",
      address:"carlisle institute",
      cityName:"meltham",
      email:"",
      phone:""
    },
    {
      libraryName:"mirfield library",
      address:"easthorpe lodge",
      cityName:"mirfield",
      email:"",
      phone:""
    },
    {
      libraryName:"altofts library",
      address:"church road",
      cityName:"normanton",
      email:"altoftslibrary@wakefield.gov.uk",
      phone:"01924 302 470"
    },
    {
      libraryName:"normanton library",
      address:"martin frobisher library and environment centre",
      cityName:"normanton",
      email:"normantonlibrary@wakefield.gov.uk",
      phone:"01924 302 525"
    },
    {
      libraryName:"ossett library",
      address:"station road",
      cityName:"ossett",
      email:"ossettlibrary@wakefield.gov.uk",
      phone:"01924 303 040"
    },
    {
      libraryName:"kinsley and fitzwilliam library and community centre",
      address:"wakefield road",
      cityName:"pontefract",
      email:"tcarrington@kinsley-fitzwilliam.org.uk",
      phone:"01977 610 931"
    },
    {
      libraryName:"south pontefract library",
      address:"st. mary's community centre",
      cityName:"pontefract",
      email:"southpontefractlibrary@wakefield.gov.uk",
      phone:"01977 705341"
    },
    {
      libraryName:"hemsworth library",
      address:"market street",
      cityName:"pontefract",
      email:"hemsworthlibrary@wakefield.gov.uk",
      phone:"01977 722 270"
    },
    {
      libraryName:"south elmsall library",
      address:"barnsley road",
      cityName:"pontefract",
      email:"southelmsalllibrary@wakefield.gov.uk",
      phone:"01977 723 220"
    },
    {
      libraryName:"upton library",
      address:"waggon lane",
      cityName:"pontefract",
      email:"uptonlibrary@wakefield.gov.uk",
      phone:"01977 723 285"
    },
    {
      libraryName:"south kirkby library",
      address:"white apron street",
      cityName:"pontefract",
      email:"southkirkbylibrary@wakefield.gov.uk",
      phone:"01977 723 370"
    },
    {
      libraryName:"pontefract library",
      address:"shoemarket",
      cityName:"pontefract",
      email:"pontefractlibrary@wakefield.gov.uk",
      phone:"01977 727692"
    },
    {
      libraryName:"shipley library",
      address:"2 well croft",
      cityName:"shipley",
      email:"shipley.library@bradford.gov.uk",
      phone:"01274 437150"
    },
    {
      libraryName:"skelmanthorpe library and information centre",
      address:"kirklees information point",
      cityName:"skelmanthorpe",
      email:"skelmanthorpe.library@kirklees.gov.uk",
      phone:"01484 222905"
    },
    {
      libraryName:"slaithwaite library",
      address:"8 britannia road",
      cityName:"slaithwaite",
      email:"slaithwaite.lic@kirklees.gov.uk",
      phone:"01484 222500"
    },
    {
      libraryName:"ripponden library",
      address:"brig royd",
      cityName:"sowerby bridge",
      email:"ripponden.library@calderdale.gov.uk",
      phone:"01422 822357"
    },
    {
      libraryName:"sowerby bridge library",
      address:"hollins mill lane",
      cityName:"sowerby bridge",
      email:"sowerby_bridge.library@calderdale.gov.uk",
      phone:"01422 831627"
    },
    {
      libraryName:"todmorden library",
      address:"the strand",
      cityName:"todmorden",
      email:"todmorden.library@calderdale.gov.uk",
      phone:"01706 815600"
    },
    {
      libraryName:"walsden library",
      address:"inchfield road",
      cityName:"todmorden",
      email:"",
      phone:""
    },
    {
      libraryName:"havercroft library",
      address:"cow lane",
      cityName:"wakefield",
      email:"havercroftlibrary@wakefield.gov.uk",
      phone:"01226 722 152"
    },
    {
      libraryName:"wakefield learning and local studies library",
      address:"balne lane",
      cityName:"wakefield",
      email:"lib.learningandlocalstudies@wakefield.gov.uk",
      phone:"01924 302 230"
    },
    {
      libraryName:"horbury library",
      address:"westfield road",
      cityName:"wakefield",
      email:"horburylibrary@wakefield.gov.uk",
      phone:"01924 303 060"
    },
    {
      libraryName:"outwood library",
      address:"victoria street",
      cityName:"wakefield",
      email:"outwoodlibrary@wakefield.gov.uk",
      phone:"01924 303 115"
    },
    {
      libraryName:"stanley library",
      address:"lake lock road",
      cityName:"wakefield",
      email:"stanleylibrary@wakefield.gov.uk",
      phone:"01924 303 130"
    },
    {
      libraryName:"walton library",
      address:"the grove, shay lane",
      cityName:"wakefield",
      email:"waltonlibrary@wakefield.gov.uk",
      phone:"01924 303 340"
    },
    {
      libraryName:"sandal library",
      address:"sparable lane",
      cityName:"wakefield",
      email:"sandallibrary@wakefield.gov.uk",
      phone:"01924 303 355"
    },
    {
      libraryName:"kettlethorpe library",
      address:"community centre",
      cityName:"wakefield",
      email:"kettlethorpelibrary@wakefield.gov.uk",
      phone:"01924 303 375"
    },
    {
      libraryName:"crofton library",
      address:"high street",
      cityName:"wakefield",
      email:"croftonlibrary@wakefield.gov.uk",
      phone:"01924 303 960"
    },
    {
      libraryName:"wakefield drury lane library",
      address:"drury lane",
      cityName:"wakefield",
      email:"drurylanelibrary@wakefield.gov.uk",
      phone:"01924 305 376"
    },
    {
      libraryName:"balne lane community centre library",
      address:"balne lane community centre",
      cityName:"wakefield",
      email:"",
      phone:"01924 305376"
    },
    {
      libraryName:"ardsley and tingley library",
      address:"213a bradford road",
      cityName:"tingley",
      email:"ardsleytingley@leedslearning.net",
      phone:"0113 253 9025"
    },
    {
      libraryName:"amesbury library",
      address:"smithfield street",
      cityName:"amesbury",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"019 80623491"
    },
    {
      libraryName:"box library",
      address:"selwyn hall",
      cityName:"box",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01225 742256"
    },
    {
      libraryName:"bradford-on-avon library",
      address:"bridge street",
      cityName:"bradford on avon",
      email:"",
      phone:""
    },
    {
      libraryName:"calne library",
      address:"the strand",
      cityName:"calne",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01249 813128"
    },
    {
      libraryName:"chippenham library",
      address:"timber street",
      cityName:"chippenham",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01249 650536"
    },
    {
      libraryName:"lyneham library",
      address:"memorial hall",
      cityName:"chippenham",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01249 890230"
    },
    {
      libraryName:"corsham library",
      address:"pickwick road",
      cityName:"corsham",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01249 713159"
    },
    {
      libraryName:"devizes library",
      address:"sheep street",
      cityName:"devizes",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01380 726878"
    },
    {
      libraryName:"market lavington library",
      address:"high street",
      cityName:"devizes",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01380 818358"
    },
    {
      libraryName:"malmesbury library",
      address:"cross hayes",
      cityName:"malmesbury",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01666 823611"
    },
    {
      libraryName:"marlborough library",
      address:"91 high street",
      cityName:"marlborough",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01672 512663"
    },
    {
      libraryName:"ramsbury library",
      address:"chapel house",
      cityName:"marlborough",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01672 520364"
    },
    {
      libraryName:"aldbourne library",
      address:"south street",
      cityName:"marlborough",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01672 540632"
    },
    {
      libraryName:"melksham library",
      address:"lowbourne",
      cityName:"melksham",
      email:"",
      phone:"01225 702039"
    },
    {
      libraryName:"pewsey library",
      address:"aston close",
      cityName:"pewsey",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01672 562265"
    },
    {
      libraryName:"wootton bassett library",
      address:"borough fields",
      cityName:"royal wootton bassett, swindon",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01793 853249"
    },
    {
      libraryName:"salisbury library",
      address:"market place",
      cityName:"salisbury",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01722 324145"
    },
    {
      libraryName:"tisbury library",
      address:"high street",
      cityName:"salisbury",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01747 870469"
    },
    {
      libraryName:"durrington library",
      address:"75 bulford road",
      cityName:"salisbury",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01980 652672"
    },
    {
      libraryName:"netheravon library",
      address:"high street",
      cityName:"salisbury",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01980 670018"
    },
    {
      libraryName:"wilton library",
      address:"south street",
      cityName:"salisbury",
      email:"",
      phone:""
    },
    {
      libraryName:"downton library",
      address:"church leat",
      cityName:"salisbury",
      email:"",
      phone:""
    },
    {
      libraryName:"walcot library",
      address:"somerville road",
      cityName:"swindon",
      email:"walcot.library@swindon.gov.uk",
      phone:"01793 463238"
    },
    {
      libraryName:"highworth library",
      address:"brewery street",
      cityName:"swindon",
      email:"highworth.library@swindon.gov.uk",
      phone:"01793 463500"
    },
    {
      libraryName:"liden library",
      address:"barrington close",
      cityName:"swindon",
      email:"liden.library@swindon.gov.uk",
      phone:"01793 463504"
    },
    {
      libraryName:"moredon and rodbourne cheney library",
      address:"church walk north",
      cityName:"swindon",
      email:"moredon.library@swindon.gov.uk",
      phone:"01793 464490"
    },
    {
      libraryName:"upper stratton library",
      address:"beechcroft road",
      cityName:"swindon",
      email:"upperstratton.library@swindon.gov.uk",
      phone:"01793 464495"
    },
    {
      libraryName:"wroughton library",
      address:"ellendune centre",
      cityName:"swindon",
      email:"wroughton.library@swindon.gov.uk",
      phone:"01793 464496"
    },
    {
      libraryName:"west swindon library",
      address:"the link centre",
      cityName:"swindon",
      email:"westswindon.library@swindon.gov.uk",
      phone:"01793 465555"
    },
    {
      libraryName:"even swindon library",
      address:"jennings street",
      cityName:"swindon",
      email:"evenswindon.library@swindon.gov.uk",
      phone:"01793 486103"
    },
    {
      libraryName:"covingham library",
      address:"st pauls drive",
      cityName:"swindon",
      email:"covingham.library@swindon.gov.uk",
      phone:"01793 520185"
    },
    {
      libraryName:"pinehurst library",
      address:"the circle",
      cityName:"swindon",
      email:"pinehurst.library@swindon.gov.uk",
      phone:"01793 616271"
    },
    {
      libraryName:"penhill library",
      address:"penhill drive",
      cityName:"swindon",
      email:"penhill.library@swindon.gov.uk",
      phone:"01793 726943"
    },
    {
      libraryName:"cricklade library",
      address:"113 high street",
      cityName:"swindon",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01793 750694"
    },
    {
      libraryName:"purton library",
      address:"1 high street",
      cityName:"swindon",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01793 770870"
    },
    {
      libraryName:"swindon central library",
      address:"regent circus",
      cityName:"swindon",
      email:"",
      phone:""
    },
    {
      libraryName:"old cityname library",
      address:"arts centre",
      cityName:"swindon",
      email:"",
      phone:""
    },
    {
      libraryName:"gorse hill library",
      address:"community centre",
      cityName:"swindon",
      email:"",
      phone:""
    },
    {
      libraryName:"north swindon library",
      address:"thamesdown drive",
      cityName:"swindon",
      email:"",
      phone:""
    },
    {
      libraryName:"park library",
      address:"cavendish square",
      cityName:"swindon",
      email:"",
      phone:""
    },
    {
      libraryName:"tidworth library",
      address:"tidworth leisure centre",
      cityName:"tidworth",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01980 843460"
    },
    {
      libraryName:"libraries and heritage headquarters",
      address:"bythesea road",
      cityName:"trowbridge",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01225 713727713732"
    },
    {
      libraryName:"trowbridge library",
      address:"cradle bridge",
      cityName:"trowbridge",
      email:"",
      phone:""
    },
    {
      libraryName:"mere library",
      address:"barton lane",
      cityName:"warminster",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01747 860546"
    },
    {
      libraryName:"warminster library",
      address:"three horseshoes walk",
      cityName:"warminster",
      email:"libraryenquiries@wiltshire.gov.uk",
      phone:"01985 216022"
    },
    {
      libraryName:"westbury library",
      address:"westbury house",
      cityName:"westbury",
      email:"westbury.library@bristol.gov.uk",
      phone:"0117 9038552"
    },
    {
      libraryName:"alvechurch library",
      address:"birmingham road",
      cityName:"alvechurch",
      email:"alvechurchlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"bromsgrove library",
      address:"stratford road",
      cityName:"bromsgrove",
      email:"bromsgrovelib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"catshill library",
      address:"barleymow lane",
      cityName:"bromsgrove",
      email:"catshilllib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"evesham library",
      address:"oat street",
      cityName:"evesham",
      email:"eveshamlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"cleobury mortimer library",
      address:"love lane,",
      cityName:"kidderminster",
      email:"",
      phone:"01299 272301"
    },
    {
      libraryName:"kidderminster library",
      address:"market street",
      cityName:"kidderminster",
      email:"kidderminsterlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"colwall library",
      address:"walwyn road",
      cityName:"malvern",
      email:"colwalllibrary@herefordshire.gov.uk",
      phone:"01684 540642"
    },
    {
      libraryName:"malvern library",
      address:"graham road",
      cityName:"malvern",
      email:"malvernlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"welland library",
      address:"welland village hall",
      cityName:"malvern",
      email:"",
      phone:""
    },
    {
      libraryName:"martley library",
      address:"martley village hall",
      cityName:"martley",
      email:"",
      phone:""
    },
    {
      libraryName:"pershore library",
      address:"church street",
      cityName:"pershore",
      email:"pershorelib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"woodrow library",
      address:"25 local centre",
      cityName:"redditch",
      email:"woodrowlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"redditch library",
      address:"15 market place",
      cityName:"redditch",
      email:"mlake@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"st john's library",
      address:"glebe close",
      cityName:"st johns",
      email:"stjohnslib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"stourport library",
      address:"county buildings",
      cityName:"stourport on severn",
      email:"stourportlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"tenbury wells library",
      address:"24 teme street",
      cityName:"tenbury wells",
      email:"tenburylib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"upton library",
      address:"school lane",
      cityName:"upton upon severn",
      email:"uptonlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"worcester library",
      address:"foregate street",
      cityName:"worcester",
      email:"worcesterlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"worcester library and history centre",
      address:"trinity street",
      cityName:"worcester",
      email:"wlhc@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"warndon library",
      address:"fairfield centre",
      cityName:"worcester",
      email:"warndonlib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"droitwich library",
      address:"victoria square",
      cityName:"worcester",
      email:"tbroomfield@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"broadway library",
      address:"leamington road",
      cityName:"wychavon",
      email:"broadwaylib@worcestershire.gov.uk",
      phone:"01905 822722"
    },
    {
      libraryName:"bewdley library",
      address:"load street",
      cityName:"wyre forest",
      email:"bewdleylib@worcestershire.gov.uk",
      phone:"0190 5822 722"
    },
    {
      libraryName:"wrexham library",
      address:"rhosddu road",
      cityName:"wrexham",
      email:"library@wrexham.gov.uk",
      phone:"01978 292091"
    },
    {
      libraryName:"overton library",
      address:"cocoa rooms",
      cityName:"wrexham",
      email:"",
      phone:"0845 6035631"
    },
    {
      libraryName:"coedpoeth library",
      address:"plas pentwyn",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"gwersyllt library",
      address:"gwersyllt community resource centre",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"brymbo library",
      address:"offa street",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"brynteg library",
      address:"the memorial centre",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"llay park library and resource centre",
      address:"market square",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"gresford library",
      address:"vicarage lane",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"rhos library",
      address:"princes road",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"cefn mawr library",
      address:"plas kynaston",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"chirk library",
      address:"chapel lane",
      cityName:"wrexham",
      email:"",
      phone:""
    },
    {
      libraryName:"ruabon library",
      address:"high street",
      cityName:"wrexham",
      email:"",
      phone:""
    }

];

//======================================================================================================
//TODO: Replace these text strings to edit the welcome and help messages
//======================================================================================================

var skillName = "Alexa Team Lookup";

//This is the welcome message for when a user starts the skill without a specific intent.
// var WELCOME_MESSAGE = "Welcome to  " + skillName + "! I can help you find Alexa Evangelists and Solutions Architects. " + getGenericHelpMessage(data);

var WELCOME_MESSAGE = "Find libraries in the United Kingdom. For example, " + getGenericHelpMessage(data)

//This is the message a user will hear when they ask Alexa for help in your skill.
var HELP_MESSAGE = "I can help you find libraries in the United Kingdom. "

//This is the message a user will hear when they begin a new search
var NEW_SEARCH_MESSAGE = getGenericHelpMessage(data);

//This is the message a user will hear when they ask Alexa for help while in the SEARCH state
var SEARCH_STATE_HELP_MESSAGE = getGenericHelpMessage(data);

var DESCRIPTION_STATE_HELP_MESSAGE = "Here are some things you can say: Tell me more, or give me contact info";

var MULTIPLE_RESULTS_STATE_HELP_MESSAGE = "Sorry, please say the name of the library you'd like to learn more about";

// This is the message use when the decides to end the search
var SHUTDOWN_MESSAGE = "Ok.";

//This is the message a user will hear when they try to cancel or stop the skill.
var EXIT_SKILL_MESSAGE = "Ok.";

// =====================================================================================================
// ------------------------------ Section 2. Skill Code - Intent Handlers  -----------------------------
// =====================================================================================================
// CAUTION: Editing anything below this line might break your skill.
//======================================================================================================

var states = {
    SEARCHMODE: "_SEARCHMODE",
    DESCRIPTION: "_DESCRIPTION",
    MULTIPLE_RESULTS: "_MULTIPLE_RESULTS"
};

const newSessionHandlers = {
    "LaunchRequest": function() {
        this.handler.state = states.SEARCHMODE;
        this.emit(":ask", WELCOME_MESSAGE, getGenericHelpMessage(data));
    },
    "SearchByNameIntent": function() {
        console.log("SEARCH INTENT");
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    },
    "TellMeMoreIntent": function() {
        this.handler.state = states.SEARCHMODE;
        // this.emitWithState("SearchByNameIntent");
        this.emit(":ask", WELCOME_MESSAGE, getGenericHelpMessage(data));
    },
    "TellMeThisIntent": function() {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    },
    "SearchByInfoTypeIntent": function() {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByInfoTypeIntent");
    },
    "AMAZON.YesIntent": function() {
        this.emit(":ask", getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function() {
        this.emit(":ask", HELP_MESSAGE, getGenericHelpMessage(data));
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = states.SEARCHMODE;
        var output = "Ok, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", HELP_MESSAGE + getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "SessionEndedRequest": function() {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function() {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    }
};
var startSearchHandlers = Alexa.CreateStateHandler(states.SEARCHMODE, {
    "AMAZON.YesIntent": function() {
        this.emit(":ask", NEW_SEARCH_MESSAGE, NEW_SEARCH_MESSAGE);
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function() {
      var output;
      if(this.attributes.lastSearch){
        output = this.attributes.lastSearch.lastSpeech;
        console.log("repeating last speech");
      }
      else{
        output = getGenericHelpMessage(data);
        console.log("no last speech availble. outputting standard help message.");
      }
      this.emit(":ask",output, output);
    },
    "SearchByNameIntent": function() {
      searchByNameIntentHandler.call(this);
    },
    "SearchByCityIntent": function() {
      searchByCityIntentHandler.call(this);
    },
    "SearchByInfoTypeIntent": function() {
      searchByInfoTypeIntentHandler.call(this);
    },
    "TellMeThisIntent": function() {
        this.handler.state = states.DESCRIPTION;
        this.emitWithState("TellMeThisIntent");
    },
    "TellMeMoreIntent": function() {
        this.handler.state = states.DESCRIPTION;
        this.emitWithState("TellMeMoreIntent");
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = states.SEARCHMODE;
        var output = "Ok, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "SessionEndedRequest": function() {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function() {
        console.log("Unhandled intent in startSearchHandlers");
        this.emit(":ask", SEARCH_STATE_HELP_MESSAGE, SEARCH_STATE_HELP_MESSAGE);
    }
});
var multipleSearchResultsHandlers = Alexa.CreateStateHandler(states.MULTIPLE_RESULTS, {

    "AMAZON.StartOverIntent": function() {
        this.handler.state = states.SEARCHMODE;
        var output = "Ok, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "AMAZON.YesIntent": function() {
        var output = "Hmm. I think you said - yes, but can you please say the name of the library you'd like to learn more about?";
        this.emit(":ask", output, output);
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function() {
        this.emit(":ask",this.attributes.lastSearch.lastSpeech, this.attributes.lastSearch.lastSpeech);
    },
    "SearchByNameIntent": function() {
        var slots = this.event.request.intent.slots;
        var libraryName = isSlotValid(this.event.request, "libraryName");
        var cityName = isSlotValid(this.event.request, "cityName");
        var infoType = isSlotValid(this.event.request, "infoType");

        console.log("libraryName:" + libraryName);
        console.log("libraryName:" + cityName);
        console.log("libraryName:" + infoType);
        console.log("Intent Name:" + this.event.request.intent.name);

        var canSearch = figureOutWhichSlotToSearchBy(libraryName,cityName);
        console.log("Multiple results found. canSearch is set to = " + canSearch);
        var speechOutput;

        if (canSearch)
            var searchQuery = slots[canSearch].value;
            var searchResults = searchDatabase(this.attributes.lastSearch.results, searchQuery, canSearch);
            var lastSearch;
            var output;

            if (searchResults.count > 1) { //multiple results found again
                console.log("multiple results were found again");
                this.handler.state = states.MULTIPLE_RESULTS;
                output = this.attributes.lastSearch.lastSpeech;
                this.emit(":ask",output);
            } else if (searchResults.count == 1) { //one result found
                this.attributes.lastSearch = searchResults;
                lastSearch = this.attributes.lastSearch;
                this.handler.state = states.DESCRIPTION;
                output = generateSearchResultsMessage(searchQuery,searchResults.results)
                this.attributes.lastSearch.lastSpeech = output;
                // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
                this.emit(":ask", output);

            } else { //no match found
                lastSearch = this.attributes.lastSearch;
                var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
                speechOutput = MULTIPLE_RESULTS_STATE_HELP_MESSAGE + ", " + listOfPeopleFound;
                this.emit(":ask", speechOutput);
            }
    },
    "SearchByCityIntent": function() {
      this.handler.state = states.SEARCHMODE;
      this.emitWithState("SearchByCityIntent");
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", MULTIPLE_RESULTS_STATE_HELP_MESSAGE, MULTIPLE_RESULTS_STATE_HELP_MESSAGE);
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "SessionEndedRequest": function() {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function() {
        console.log("Unhandled intent in multipleSearchResultsHandlers");
        this.emit(":ask", MULTIPLE_RESULTS_STATE_HELP_MESSAGE, MULTIPLE_RESULTS_STATE_HELP_MESSAGE);
    }
});
var descriptionHandlers = Alexa.CreateStateHandler(states.DESCRIPTION, {
    "TellMeMoreIntent": function() {
      var person;
      var speechOutput;
      var repromptSpeech;
      var cardContent;

      if(this.attributes.lastSearch){
        person = this.attributes.lastSearch.results[0];
        cardContent = generateCard(person); //calling the helper function to generate the card content that will be sent to the Alexa app.
        speechOutput = generateTellMeMoreMessage(person);
        repromptSpeech = "Would you like to find another library? Say yes or no";

        console.log("the contact you're trying to find more info about is " + person.libraryName);
        this.handler.state = states.SEARCHMODE;
        this.attributes.lastSearch.lastSpeech = speechOutput;
        this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body);
      }
      else{
        speechOutput = getGenericHelpMessage(data);
        repromptSpeech = getGenericHelpMessage(data);
        this.handler.state = states.SEARCHMODE;
        this.emit(":ask", speechOutput, repromptSpeech);
      }
    },
    "TellMeThisIntent": function() {
        var slots = this.event.request.intent.slots;
        var person = this.attributes.lastSearch.results[0];
        var infoType = isSlotValid(this.event.request, "infoType");
        var speechOutput;
        var repromptSpeech;
        var cardContent;

        console.log(isInfoTypeValid("address"));

          if(this.attributes.lastSearch && isInfoTypeValid(infoType)){
              person =  this.attributes.lastSearch.results[0];
              cardContent = generateCard(person);
              speechOutput = generateSpecificInfoMessage(slots,person);
              repromptSpeech = "Would you like to find another library? Say yes or no";
              this.handler.state = states.SEARCHMODE;
              this.attributes.lastSearch.lastSpeech = speechOutput;
              this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body);
            } else {
              //not a valid slot. no card needs to be set up. respond with simply a voice response.
              speechOutput = generateSearchHelpMessage();
              repromptSpeech = "You can ask me - what's the phone number, or give me the address";
              this.attributes.lastSearch.lastSpeech = speechOutput;
              this.handler.state = states.SEARCHMODE;
              this.emit(":ask", speechOutput, repromptSpeech);
            }
    },
    "SearchByNameIntent": function() {
        searchByNameIntentHandler.call(this);
    },
    "SearchByCityIntent": function() {
      searchByCityIntentHandler.call(this);
    },
    "AMAZON.HelpIntent": function() {
        var slots = this.event.request.intent.slots;
        var person = this.attributes.lastSearch.results[0];
        this.emit(":ask", generateNextPromptMessage(person,"current"), generateNextPromptMessage(person,"current"));
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.YesIntent": function() {
        this.emit("TellMeMoreIntent");
    },
    "AMAZON.RepeatIntent": function() {
        this.emit(":ask",this.attributes.lastSearch.lastSpeech, this.attributes.lastSearch.lastSpeech);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = states.SEARCHMODE;
        var output = "Ok, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "SessionEndedRequest": function() {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function() {
        var slots = this.event.request.intent.slots;
        var person = this.attributes.lastSearch.results[0];

        console.log("Unhandled intent in DESCRIPTION state handler");
        this.emit(":ask", "Sorry, I don't know that" + generateNextPromptMessage(person,"general"), "Sorry, I don't know that" + generateNextPromptMessage(person,"general"));
    }
});

// ------------------------- END of Intent Handlers  ---------------------------------

function searchDatabase(dataset, searchQuery, searchType) {
    var matchFound = false;
    var results = [];

    //beginning search
    for (var i = 0; i < dataset.length; i++) {
        if (sanitizeSearchQuery(searchQuery) == dataset[i][searchType]) {
            results.push(dataset[i]);
            matchFound = true;
        }
        if ((i == dataset.length - 1) && (matchFound == false)) {
        //this means that we are on the last record, and no match was found
            matchFound = false;
            console.log("no match was found using " + searchType);
        //if more than searchable items were provided, set searchType to the next item, and set i=0
        //ideally you want to start search with  then libraryName, and then cityName
        }
    }
    return {
        count: results.length,
        results: results
    };
}

function figureOutWhichSlotToSearchBy(libraryName,cityName) {
  if (libraryName){
    console.log("search by libraryName");
    return "libraryName";
  }
  else if (!libraryName && cityName){
    console.log("search by cityName")
    return "cityName";
  }
  else{
    return false;
    console.log("no valid slot provided. can't search.")
  }
}

function searchByNameIntentHandler(){
  var libraryName = isSlotValid(this.event.request, "libraryName");
  var cityName = isSlotValid(this.event.request, "cityName");
  var infoType = isSlotValid(this.event.request, "infoType");
  var testingThis = testingThisFunction.call(this,"hello");

  var canSearch = figureOutWhichSlotToSearchBy(libraryName,cityName);
  console.log("canSearch is set to = " + canSearch);

      if (canSearch){
        var searchQuery = this.event.request.intent.slots[canSearch].value;
        var searchResults = searchDatabase(data, searchQuery, canSearch);

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("Search complete. Multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Which library would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            this.handler.state = states.DESCRIPTION; // change state to description
            console.log("one match was found");
            if (infoType) {
                //if a specific infoType was requested, redirect to specificInfoIntent
                console.log("infoType was provided as well")
                this.emitWithState("TellMeThisIntent");
            }
            else{
                console.log("no infoType was provided.")
                output = generateSearchResultsMessage(searchQuery,searchResults.results)
                this.attributes.lastSearch.lastSpeech = output;
                this.emit(":ask", output);
            }
        }
        else{//no match found
          console.log("no match found");
          console.log("searchQuery was  = " + searchQuery);
          console.log("searchResults.results was  = " + searchResults);
          output = generateSearchResultsMessage(searchQuery,searchResults.results)
          this.attributes.lastSearch.lastSpeech = output;
          // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
          this.emit(":ask", output);
        }
      }
        else {
            console.log("no searchable slot was provided");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);

            this.emit(":ask", generateSearchResultsMessage(searchQuery,false));
        }
}

function searchByCityIntentHandler(){
  var slots = this.event.request.intent.slots;
  var cityName = isSlotValid(this.event.request, "cityName");

      if (cityName){
        var searchQuery = slots.cityName.value;
        console.log("will begin search with  " + slots.cityName.value + " in cityName");
        var searchResults = searchDatabase(data, searchQuery, "cityName");

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("Search completed by city. Multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Which library would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            console.log("one match found");
            this.handler.state = states.DESCRIPTION; // change state to description
            output = generateSearchResultsMessage(searchQuery,searchResults.results)
            this.attributes.lastSearch.lastSpeech = output;
            // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
            this.emit(":ask", output);

        }
        else{//no match found
          console.log("no match found");
          console.log("searchQuery was  = " + searchQuery);
          console.log("searchResults.results was  = " + searchResults);
          output = generateSearchResultsMessage(searchQuery,searchResults.results)
          this.attributes.lastSearch.lastSpeech = output;
          // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
          this.emit(":ask", output);

        }
      }
        else {
            console.log("no searchable slot was provided");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);

            this.emit(":ask", generateSearchResultsMessage(searchQuery,false));
        }
}

function searchByInfoTypeIntentHandler(){
  var slots = this.event.request.intent.slots;
  var libraryName = isSlotValid(this.event.request, "libraryName");
  var cityName = isSlotValid(this.event.request, "cityName");
  var infoType = isSlotValid(this.event.request, "infoType");

  var canSearch = figureOutWhichSlotToSearchBy(libraryName,cityName);
  console.log("canSearch is set to = " + canSearch);

      if (canSearch){
        var searchQuery = slots[canSearch].value;
        var searchResults = searchDatabase(data, searchQuery, canSearch);

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Which library would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            this.handler.state = states.DESCRIPTION; // change state to description
            console.log("one match was found");
            if (infoType) {
                //if a specific infoType was requested, redirect to specificInfoIntent
                console.log("infoType was provided as well")
                var person = this.attributes.lastSearch.results[0];
                var cardContent = generateCard(person);
                var speechOutput = generateSpecificInfoMessage(slots,person);
                var repromptSpeech = "Would you like to find another library? Say yes or no";
                this.attributes.lastSearch.lastSpeech = speechOutput;
                this.handler.state = states.SEARCHMODE;
                this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body);
                // this.emitWithState("TellMeThisIntent");
            }
            else{
                console.log("no infoType was provided.")
                output = generateSearchResultsMessage(searchQuery,searchResults.results)
                this.attributes.lastSearch.lastSpeech = output;
                // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
                this.emit(":ask", output);
            }
        }
        else{//no match found
          console.log("no match found");
          console.log("searchQuery was  = " + searchQuery);
          console.log("searchResults.results was  = " + searchResults);
          output = generateSearchResultsMessage(searchQuery,searchResults.results)
          this.attributes.lastSearch.lastSpeech = output;
          // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
          this.emit(":ask", output);
        }
      }
        else {
            console.log("no searchable slot was provided");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);

            this.emit(":ask", generateSearchResultsMessage(searchQuery,false));
        }
}
// =====================================================================================================
// ------------------------------- Section 3. Generating Speech Messages -------------------------------
// =====================================================================================================

function generateNextPromptMessage(person,mode){
  var infoTypes = ["address","phone number","email"]
  var prompt;

  if (mode == "current"){
    // if the mode is current, we should give more informaiton about the current contact
    prompt = ". You can say - tell me more, or  tell me the" +  " " + infoTypes[getRandom(0,infoTypes.length-1)];
  }
  //if the mode is general, we should provide general help information
  else if (mode == "general"){
    prompt = ". " + getGenericHelpMessage(data);
  }
  return prompt;
}

function generateSendingCardToAlexaAppMessage(person,mode){
    var sentence = "I have sent " + person.libraryName + "'s contact info to your Alexa app" + generateNextPromptMessage(person,mode);
    return sentence;
}

function generateSearchResultsMessage(searchQuery,results){
    var sentence;
    var details;
    var prompt;

    if (results){
      switch (true) {
      case (results.length == 0):
          sentence = "Hmm. I couldn't find " + searchQuery + ". " + getGenericHelpMessage(data);
          break;
      case (results.length == 1):
          var person = results[0];
          details = person.libraryName + " " + " is located in " + person.cityName + " in the " + person.address
          prompt = generateNextPromptMessage(person,"current");
          sentence = details + prompt
          console.log(sentence);
          break;
      case (results.length > 1):
          sentence = "I found " + results.length + " matching libraries";
          break;
      }
    }
    else{
      sentence = "Sorry, I didn't quite get that. " + getGenericHelpMessage(data);
    }
    return sentence;
}

function getGenericHelpMessage(data){
  var sentences = ["ask - who is " + getRandomName(data),"say - find an library in " + getRandomCity(data)];
  return "You can " + sentences[getRandom(0,sentences.length-1)]
}

function generateSearchHelpMessage(){
    var sentence = "Sorry, I don't know that. You can ask me - what's the phone number, or give me the address";
    return sentence;
}

function generateTellMeMoreMessage(person){
    var sentence = person.libraryName + "'s phone number is: " + person.phone + " , the email address is: " + person.email + ". " + generateSendingCardToAlexaAppMessage(person,"general");
    return sentence;
}
function generateSpecificInfoMessage(slots,person){
    var infoTypeValue;
    var sentence;

//TODO delete github stuff
    if (slots.infoType.value == "git hub"){
      infoTypeValue = "address";
      console.log("resetting gith hub to address");
    }
    else{
      console.log("no reset required for address");
      infoTypeValue = slots.infoType.value;
    }

    sentence = person.libraryName + "'s " + infoTypeValue.toLowerCase() + " is : " + person[infoTypeValue.toLowerCase()] + " . Would you like to find another library? " + getGenericHelpMessage(data);
    return optimizeForSpeech(sentence);
}

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(newSessionHandlers, startSearchHandlers, descriptionHandlers, multipleSearchResultsHandlers);
    alexa.execute();
};

// =====================================================================================================
// ------------------------------------ Section 4. Helper Functions  -----------------------------------
// =====================================================================================================
// For more helper functions, visit the Alexa cookbook at https://github.com/alexa/alexa-cookbook
//======================================================================================================

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomCity(arrayOfStrings) {
    return arrayOfStrings[getRandom(0, data.length - 1)].cityName;
}

function getRandomName(arrayOfStrings) {
    var randomNumber = getRandom(0, data.length - 1)
    return arrayOfStrings[randomNumber].libraryName;
}

function titleCase(str) {
    return str.replace(str[0], str[0].toUpperCase());
}

function slowSpell(str) {
    return "That's spelled - " + str.split("").join("<break time=\"0.05s\"/>");
}

function generateCard(person) {
    var cardTitle = "Contact Info for " + titleCase(person.libraryName);
    var cardBody = "phone: " + person.phone + " \n" + "address: " + person.address + " \n" + "email: " + person.email;
    return {
        "title": cardTitle,
        "body": cardBody,
    };
}

function loopThroughArrayOfObjects(arrayOfStrings) {
    var joinedResult = "";
    // Looping through the each object in the array
    for (var i = 0; i < arrayOfStrings.length; i++) {
    //concatenating names (libraryName ) for each item
        joinedResult = joinedResult + ", " + arrayOfStrings[i].libraryName;
    }
    return joinedResult;
}


function sanitizeSearchQuery(searchQuery){
    searchQuery = searchQuery.replace(/’s/g, "").toLowerCase();
    searchQuery = searchQuery.replace(/'s/g, "").toLowerCase();
    return searchQuery;
}

function optimizeForSpeech(str){
    var optimizedString = str.replace("address","address");
    return optimizedString;
}

function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}



function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function isInfoTypeValid(infoType){
  var validTypes = ["address","phone","email"]
  return isInArray(infoType,validTypes);
}

function testingThisFunction(str){
  console.log("printing " + str);
}

var explosion = new Array();
for(var i = 1; i <= 10; i++){
  explosion[i-1] = new Image();
  explosion[i-1].src = "image/ex" + i + ".png";
}

/*베이스 함선*/
var cr90 = new Image();
cr90.src = "image/CR90.png";

/*사운드*/
var fireSOUND = [];
var st=0;
var emFireSOUND = [];
var et=0;
var exSOUND = [];
var xt=0;
var themeSOUND;
themeSOUND = new Audio("sound/music/star wars battlefront2.mp3");
var planeExplodeSOUND = new Audio("sound/effect/TIE fighter explode.mp3");
for(var i = 0; i < 10; i++){
  fireSOUND[i] = new Audio("sound/effect/XWing fire.mp3");
  emFireSOUND[i] = new Audio("sound/effect/TIE fighter fire 1.mp3");
  exSOUND[i] = new Audio("sound/effect/XWing explode.mp3");
}

/**/
function sleep(delay){
  var start = new Date().getTime();
  while(new Date().getTime()<start+delay);
}

/*아이템*/
var coinItem = new Image();
coinItem.src = "image/coin.png";
var weaponItem1 = new Image();
var weaponItem2 = new Image();
var weaponItem3 = new Image();
weaponItem1.src = "image/weapon1.png";
weaponItem2.src = "image/weapon2.png";
weaponItem3.src = "image/weapon3.png";

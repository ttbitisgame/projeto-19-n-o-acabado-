var PLAY = 0;
var END = -1;

var gameState = PLAY;

var cleitinho,cleitinhoAnimation;

var avião,aviãoAnimation;
var pedra,pedraAnimation; 
var carro,carroAnimatiom;
var sirigueijo,sirigueijoAnimatiom;
var gaviota,gaviotaAnimatiom;

var faseAgora
var fase1;
var fase2;
var fase3;
var faseSecreta

var score = 0;
var gameOver,gameOverAnimation,restat,restatAnimation;
function preload(){
  cleitinhoAnimation = loadImage("cleitinho.png");

  aviãoAnimation = loadImage("avião.png");
  carroAnimatiom = loadImage("carro.png");

   pedraAnimation = loadImage("pedr.png");

   gaviotaAnimatiom = loadImage ("gaivota.png");
   sirigueijoAnimatiom =loadImage("siri.png");

   fase1 = loadImage("fase1.jpg");
   fase2 = loadImage("fase2.jpg");
   fase3 = loadImage("fase3(2).jpg");
   faseSecreta = loadImage("espaço.jpg");

   gameOverAnimation = loadImage("game_over.png");
   restat = loadImage("restart.png");
}

function setup() {
 createCanvas(600,200);
  cleitinho = createSprite(50,180,20,20);

  cleitinho.addImage("vai_filhão",cleitinhoAnimation);

  faseAgora = createSprite(300,100,100,100);
  faseAgora.addImage("vai_muda",fase1);
  faseAgora.x = faseAgora.width /2;
  faseAgora.velocityX = 3;

  gameOver = createSprite(300,50,20,20);
  gameOver = loadImage("fim",gameOverAnimation);

  restat = createSprite(300,100,20,20);
  restat = loadImage("denovo",restatAnimation);

  gameOver.scale = 0.5;
  restat.scale = 0.5;
}

function draw() {
  background(255);
  drawSprites();
}
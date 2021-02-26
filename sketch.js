var boy,boy_running;
var boyImg;

var PLAY = 1;
var END = 0;
var gamestate = PLAY;

var road,roadImage,invisibleRoad;

var gameOver, restart;

score = 0;
function preload(){
  roadImage=loadImage("road.png");
  boy_running=loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
 canvas = createCanvas(displayWidth - 20, displayHeight-100);

 boy=createSprite(200,200);
 boy.addAnimation("running",boy_running);

 road = createSprite(displayWidth/2,displayHeight/2);
 road.addImage("road",roadImage);
 road.scale=1.75;
 
 invisibleRoad = createSprite(displayWidth/2, displayHeight/2);
 invisibleRoad.scale=1.75;
 invisibleRoad.visible=false;

}
function draw (){
    background(204,153,102);
    text("Score: "+ score,500,50);
    boy.scale=0.8;  

    if(keyDown(RIGHT_ARROW)){
        boy.velocityX=3;
        boy.velocitY=0;
    }

    if(keyDown(LEFT_ARROW)){
        boy.velocityX=-3;
        boy.velocityY=0;
    }

    if(keyDown(UP_ARROW)){
        boy.velocityX=0;
        boy.velocityY=-12;
    }
    boy.velocityY = boy.velocityY + 0.8
    boy.collide(invisibleRoad);
drawSprites();
}
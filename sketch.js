var sea , sea1;
var ship, ship1;

function preload(){
sea = loadImage("sea.png");
shipimg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  var sea = createSprite(700,400);
  var ship = createSprite(30,40,10,20)
  
  
  sea .addImage=("running",sea1)
  ship1 = addAnimation(ships);
  sea.scale=0.5;
  ship.scale=0.25
  sea.velocityX=-2
  ship.x =90;
  edes=createEdgeSprite();
}

function draw() {
  background("blue");
  if(sea.x< 0){
    sea.x=sea.width/2
  }
 
}
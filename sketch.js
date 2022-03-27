var ship;sea;
var shipANM;seaIMG;



function preload(){
  
  seaIMG = loadImage("sea.png");
  shipANM = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
   
  sea = createSprite(400,200);
  sea.addImage(seaIMG);
  sea.scale=0.3;
  

  ship = createSprite(130,200,30,30);
  ship.addAnimation("navio",shipANM);
   ship.scale=0.25;
  
  
}

function draw() {
  
  background("blue");
  
  sea.velocityX=-1;
  if(sea.x<0){
    sea.x = sea.widht/2;
  }
  
   
  
    drawSprites();

 
}

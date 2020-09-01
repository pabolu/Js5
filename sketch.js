var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloudImage;
var plant1, plant2, plant3, plant4, plant5, plant6;
var cloud,plant;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  plant1 = loadImage("obstacle1.png");
  plant2 = loadImage("obstacle2.png");
  plant3 = loadImage("obstacle3.png");
  plant4 = loadImage("obstacle4.png");
  plant5 = loadImage("obstacle5.png");
  plant6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(180);
  console.log(frameCount)
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  clouds();
  plants();
  drawSprites();
}
function clouds(){
  if(frameCount %80 === 0){
  cloud = createSprite(580,50,30,30);
  cloud.y = random(50,120);
  cloud.addImage(cloudImage);
  cloud.scale = 0.7;
  cloud.lifetime = 116  ;
  cloud.velocityX = -5;
  }
}
function plants(){
  if(frameCount %90 === 0){
   plant = createSprite(580,170,30,30);
   var x = Math.round(random(1,6));
   switch(x){
     case 1:plant.addImage(plant1);
      break;
      case 2:plant.addImage(plant2);
       break;
       case 3:plant.addImage(plant3);
       break;
       case 4:plant.addImage(plant4);
       break;
       case 5:plant.addImage(plant5);
       break;
       case 6:plant.addImage(plant6);
       break;
       default:break;
   }
   plant.scale = 0.4 ;
   plant.lifetime = 116  ;
   plant.velocityX = -5;
  }
}
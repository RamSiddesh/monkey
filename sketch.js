var monkey , monkey_running, monkey1;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;

function preload(){
  
  
     monkey_running =                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png" ,"sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
     bananaImage = loadImage("banana.png");
     obstacleImage = loadImage("obstacle.png");
 
  
}


function setup() {
createCanvas(600,400);

  
     //monkey
     monkey=createSprite (70,345,100,100);
     monkey.addAnimation("running",monkey_running);
     monkey.scale=0.15;
     //ground
     ground = createSprite(200,401,800,20);
     //invisibleGround
     invisibleGround = createSprite(200,400,400,10);
     invisibleGround.visible = false;
     //group
     foodGroup = createGroup();
     obstacleGroup = createGroup();
     //score
     score = 0;
  
  
}


function draw() {
background("lightgreen");

   
      //score
      fill("black");
      textSize(30);
      text("SURVIVING TIME: "+ score, 50,50);
      score = score+Math.round(getFrameRate()/60);
      //spacekey
      if(keyDown("space")&& monkey.y >= 100) {
          monkey.velocityY = -19;
      }
      //monkeyvelocity
      monkey.velocityY = monkey.velocityY +0.88 ;
      monkey.collide(invisibleGround);
      //spawn
      spawnobstacle();
      spawnfood();
       
  
drawSprites();
}


function spawnobstacle() {
   
   
       //obstacles
       if (frameCount % 140 === 0){
       obstacle = createSprite(600,366,10,10);
       obstacle.velocityX = -5;
       obstacle.lifetime = 200;
       obstacle.scale = 0.15;
       var rand= Math.round(random(1,2))
       switch (rand){
       case 1: obstacle.addImage( obstacleImage );
       break;
       case 2: obstacle.addImage( obstacleImage );
       break;
       default:break;
  
  
}
}
}

function spawnfood() {

  
       //food banana
       if (frameCount % 120 === 0) {
       banana = createSprite(600,300,40,10);
       banana.addImage(bananaImage)
       banana.y = Math.round(random(50,360))
       banana.scale = 0.16;
       banana.velocityX = -3;
       //assigning lifetime to the variable
       banana.lifetime =200;
          
}
}
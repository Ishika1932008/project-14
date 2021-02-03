var PLAY = 1;
var END = 0;
var gameState = 1;

var sword,fruit ,monster,fruitGroup,enemyGroup, score,r,randomFruit;
var swordImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage;

var knifeSound,gameoverSound;


function preload(){
 swordImage = loadImage("sword.png");
  monsterImage = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png");
   knifeSound = loadSound("knifeSwooshSound.mp3");
   gameoverSound = loadSound("gameover.mp3");
  
}


function setup(){
  
    createCanvas(600, 600);
 
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  

  sword.setCollider("rectangle",0,0,40,40);

  score = 0;
   fruitGroup = createGroup();
  enemyGroup = createGroup();
}
function draw(){
background("lightblue");
  
  
  
  
  if(gameState === PLAY){
    

    
    fruits();
    enemy();
        
 sword.x = World.mouseX;
 sword.y = World.mouseY;
  
   
  if(score>0 && score % 10 === 0){
    fruit.velocityX = -15;
    enemy.velocityX = -15;
  }
 
   
   if(sword.isTouching(fruitGroup)){
     fruitGroup.destroyEach()
    score=score+1;
     knifeSound.play();
     }
   
   else{
     
     {
   if(sword.isTouching(enemyGroup)){
     enemyGroup.destroyEach();
     gameoverSound.play();
     
    gameState = END;
     
     fruitGroup.destroyEach();
     enemyGroup.destroyEach();
     enemyGroup.setVelocityXEach(0);
     fruitGroup.setVelocityXEach(0);
     
     sword.addImage(gameOverImage);
     sword.x=300;
     sword.y=200;
     
     }
   } 
}


 drawSprites();
  }
 text("score :" +score,250,50);
}
  
 

function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,340));
   
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}
  
  
function enemy(){
  
 if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }
}



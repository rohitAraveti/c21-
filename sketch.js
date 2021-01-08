var wall,thickness;

var bullet,speed, weight; 

function setup() {
 createCanvas(1600, 400);

 speed=random(223,321)
 weight=random(30,52)
 thickness=random(22,23)

 bullet=createSprite(50, 200, 50,10); 

 bullet.velocityX = speed;

 bullet.shapeColor=color(255);


 wall=createSprite(1200,200, thickness, height/2)
 wall.shapeColor=color(80,80,80)
}

function hascollided(Lbullet,Lwall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false;
}

function draw() {
 background(0);

 if(hascollided(wall,bullet))
 {
 bullet.velocityX=0;
 var damage=0.5 * weight * speed* speed/thickness*thickness*thickness;
 if(damage>12.4)
 {
 bullet.shapeColor=color(255,0,0);
 text("danger",200,100);
 }

 if(damage<3.6)
 {
 bullet.shapeColor=color(0,255,0);
 text("safe",200,300);
 }
 } 

 drawSprites();

} 
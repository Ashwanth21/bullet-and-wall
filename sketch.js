var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83);  
  wall=createSprite(1500,200,thickness,200/2)
  bullet.velocityX =speed;
}

function draw() {
  background("black");
  console.log(bullet.x)
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
    bullet.shapeColor="red";
    }
    
    if(damage<10){
      bullet.shapeColor="green";
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
}
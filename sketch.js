var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,200,50,50);
  car.shapeColor="blue"
  wall=createSprite(1000,200,20,100);
  wall.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
car.velocityX=8;
  if(isTouching(car,wall)){
   car.shapeColor="pink"
   car.velocityX=0;
   wall.shapeColor="red"
   wall.velocityY=-2;
  }
  drawSprites();
}
function isTouching(O1,O2){
  if (O1.x - O2.x < O2.width/2 + O1.width/2
    && O2.x - O1.x < O2.width/2 + O1.width/2
    && O1.y - O2.y < O2.height/2 + O1.height/2
    && O2.y - O1.y < O2.height/2 + O1.height/2) {
  return true 
}
else {
return false   
}
}
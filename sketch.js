
var fixedRect, movingRect
function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0);  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;


  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    movingRect.velocityX = movingRect.velocityY * (-1);
    fixedRect.velocityX = fixedRect.velocityY * (-1);

  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  console.log (movingRect.y - fixedRect.y)
  drawSprites();
}
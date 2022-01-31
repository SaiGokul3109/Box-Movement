var sprite;

function setup() {
  createCanvas(600,600);
  sprite=createSprite(300,300, 10,15);
}

function draw() 
{
  background("red");
  if(keyIsDown(RIGHT_ARROW)){
    sprite.position.x=sprite.position.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
    sprite.position.x=sprite.position.x-5;
  }
  if(keyIsDown(UP_ARROW)){
    sprite.position.y=sprite.position.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    sprite.position.y=sprite.position.y+5;
  }
  drawSprites();

}





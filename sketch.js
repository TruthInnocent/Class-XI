var trex, treximage
var ground, groundimage
var invisibleground

function preload(){
 treximage = loadAnimation("trex1.png","trex3.png","trex4.png")
 groundimage=loadImage("ground2.png")
}

function setup() 
{
  createCanvas(400,400);

  trex=createSprite(50,165,20,50)
  trex.addAnimation("running",treximage)
  trex.scale = 0.5

  ground=createSprite(200,180,400,20)
  ground.addImage(groundimage)
  
  invisibleground=createSprite(200,190,400,20)
  invisibleground.visible=false
}

function draw() 
{
  background("white"); 
  ground.velocityX=-2
  if (ground.x<0) {
   ground.x=ground.width/2 
  }
   if (keyDown("space")&& trex.y>=100) {
   trex.velocityY=-10
  }

 trex.velocityY=trex.velocityY+0.5
 trex.collide(invisibleground)
 drawSprites()

}
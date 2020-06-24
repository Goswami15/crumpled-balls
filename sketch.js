var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var ground1;
var bin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	
ball1=new Ball();
ground1=new Ground();
bin=new Bin();
	
  
}


function draw() {
	Engine.update(engine);
 
  background(0);
  ball1.display();
  ground1.display();
  bin.display();


  drawSprites();
 
}

function keyPressed(){
	
if (keyDown("up")){


	Matter.Body.applyForce(body,body.pos,{x:85,y:-85});
}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,side0,side1,side2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	 
	
	//Create the Bodies Here.
    paper = new Paper(100, 600, 10);
	ground = new Ground(400, 680, 800, 20);
     
	 side0 = new Bin(550, 620, 20, 100);
     side1 = new Bin(635, 660, 150, 20);
     side2 = new Bin(720, 620, 20, 100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  keyPressed()
  paper.display();
  ground.display()
 
  side0.display();
  side1.display();
  side2.display();
  drawSprites();
 
}
 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce( paper.body, paper.body.position,{x:85,y:-85})
	}

}



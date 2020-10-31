const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper , dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper=new Paper(100,100,20);
   ground=new Ground(50,690,800,10);
   fill("blue");
  dustbin1=new Dustbin(790,550,20,200);
	dustbin2=new Dustbin(600,550,20,200);
	dustbin3=new Dustbin(700,650,200,20);
	//Create a Ground
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine); 
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}


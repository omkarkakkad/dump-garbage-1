const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(700,650,1400,20);
  
  paper = new Paper(100,100,80);
  
	dustbin1 = new Dustbin(1100,627,200,25);
	dustbin2 = new Dustbin(1200,550,25,150);
	dustbin3 = new Dustbin(1000,550,25,150);

	//Create the Bodies Here.

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW){
   
  Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-300})
  }
}
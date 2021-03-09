
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, ground2;
var circle1,circle2,circle3,circle4,circle5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	//Create the Bodies Here.
	ground = new Ground(400,200,450,50);
	ground2 = new Ground(400,700,800,20);
	circle1 = new Circle(400,400,55);
	circle2 = new Circle(400,400,55);
	chain1 = new Chain(circle1.body,ground.body,0,0);
	chain2 = new Chain(circle2.body,ground.body,220,0);
	circle4 = new Circle(400,400,55);
	circle3 = new Circle(400,400,55);
	chain4= new Chain(circle4.body,ground.body,-220,0);
	chain3 = new Chain(circle3.body,ground.body,110,0);
	circle5 = new Circle(400,400,55);
	chain5= new Chain(circle5.body,ground.body,-110,0);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  ground2.display();
  circle1.display();
  chain1.display();
  circle2.display();
  chain2.display();
  circle3.display();
  chain3.display();
  circle4.display();
  chain4.display();
  circle5.display();
  chain5.display();
 
}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(circle4.body,circle4.body.position,{x:-200,y:0})
	}
}



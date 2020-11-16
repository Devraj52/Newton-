
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hanger=new Hanger(500,100,350,20);
	bob1=new Bob(350,540,40);
	bob2=new Bob(370,540,40);
	bob3=new Bob(390,540,40);
	bob4=new Bob(410,540,40);
	bob5=new Bob(430,540,40);
	rope=new Rope(bob1.body,hanger.body,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hanger.display();
  rope.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob4.display();
  drawSprites();
 
}




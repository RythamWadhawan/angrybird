const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,log1 ;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,50,50);
    box2 = new Box(920,350,50,50);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig (800,350)
    log1 = new Log (800,260,300,PI/2)
    box3 = new Box(700,270,50,50);
    box4 = new Box(920,270,50,50);
    pig2 = new Pig (800,270)
    log2 = new Log (800,270,300,PI/2)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
}
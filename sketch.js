const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bgImage;
var engine, world;
var ground;
var box1,box2, pig1,log1, bird;

function preload(){
    bgImage = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    
    box1 = new Box(1000,350,70,70);
    box2 = new Box(800,350,70,70);
    pig1 = new Pig(900,320);
    log1 = new Log(900,300,300,PI/2);
    
    box3 = new Box(1000,280,70,70);
    box4 = new Box(800,280,70,70);
    pig2 = new Pig(900,250);
    log2 = new Log(900,220,300,PI/2);

    box5 = new Box(900,200,70,70);
    log3 = new Log(800,180,150,PI/7);
    log4 = new Log(1000,180,150,-PI/7);

    bird = new Bird(200,200)

}

function draw(){
    background(bgImage);
    Engine.update(engine);
    
    ground.display();
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}
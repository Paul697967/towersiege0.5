
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground


function setup(){

    createCanvas(900,400)
    engine=Engine.create();
    world=engine.world;

    Engine.run(engine)
    ground=new Ground();
    
}

function draw(){

    ground.display();
}
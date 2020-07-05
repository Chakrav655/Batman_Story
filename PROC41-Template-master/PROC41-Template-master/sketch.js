const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var drops=[];
var umbrella;
var maxDrops=100;

function preload(){
  bg=loadImage("bg.jpg");  
}

function setup(){
   createCanvas(400,800);
   

   engine = Engine.create();
   world = engine.world;

   
//drops= new Drop(random(0,400),10);
   umbrella= new Umbrella(250,600,250,250);
    
}

function draw(){
    background(bg);


    Engine.update(engine);
    //calling the drops 
   for (var i=0; i<maxDrops; i++){
      drops.push(new Drop(random(0,400),random(0,400)));
      drops[i].display();
      drops[i].update();
  }
   
   umbrella.display();

   
   //
}   




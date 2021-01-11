const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var myEngine,myWorld;
var ball,ground,ball1;

function setup() {
  createCanvas(400,400);
  myEngine =Engine.create();
  myWorld = myEngine.world;

ball =Bodies.rectangle(100,50,50,50);
World.add(myWorld,ball);
var options ={
  isStatic:true
}
ground =Bodies.rectangle(200,380,400,20,options);
World.add(myWorld,ground);
var options ={
  restitution:2
}
ball1 =Bodies.circle(300,50,25,options);
World.add(myWorld,ball1);

console.log(ball);
}

function draw() {
  background("blue"); 
  Engine.update(myEngine);
  rectMode(CENTER);
 rect(200,200,50,50)
 rect(ball.position.x,ball.position.y,50,50);
 rect(ground.position.x,ground.position.y,400,20);
 
 circle(ball1.position.x,ball1.position.y,50)
}
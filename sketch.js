const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var snowfall=100;
var bg;
var ground;
maxsnow = 10;
var pushSnow=[];
var image_image;
var Snowball1;
var Slingshot1;
var snowimage;
var snowman;
var snowmanvar

function preload(){
  bg=loadImage("snow2.jpg");
  image_image=loadImage("Rodo-Puppy.png");
  snowimage=loadImage("snowball.png");
  snowman=loadImage("snowman image.png");
}

function setup() {
  createCanvas(1200, 625);
  engine = Engine.create();
  world = engine.world;
  snowfall=new snow(100,100,100,100);
  ground=new Ground(600,530,1200,20);
  this.Snowball1=Bodies.circle(20,20,20);
  World.add(world,this.Snowball1)
  this.snowmanvar=Bodies.rectangle(700,300,300,300);
  World.add(world,this.snowmanvar);
  this.snowmanvar.isStatic = true;
  this.snowmanvar.restitution = 1

  if(frameCount % 20 === 0){
    for(var i=0; i<maxsnow; i++){
        pushSnow.push(new snow(random(0,1200), 0));
    }
}
 
this.Slingshot1=new Slingshot2(this.Snowball1, {x:270,y:450});
}


function draw() {
  background(bg);
  textSize(20)
  Engine.update(engine);
   snowfall.display();     
   Slingshot1.display();    
   image(image_image,30,350,300,300);
   image(snowman,this.snowmanvar.position.x,this.snowmanvar.position.y,300,300);
   image(snowimage,this.Snowball1.position.x,this.Snowball1.position.y,45,45);
                  

    for(var i = 0; i<maxsnow; i++){
      pushSnow[i].display();
      pushSnow[i].updateY();
  }
  createSnow();
}

function mouseDragged() {
  //set the position of hero when mouse is dragged
  Matter.Body.setPosition(this.Snowball1, { x:mouseX ,y: mouseY});
}

function mouseReleased(){
  Slingshot1.fly();

}

function keyPressed(){
  if(keyCode==32){
    Slingshot1.attach(this.Snowball1);
    Matter.Body.setPosition(this.Snowball1 , {x:400 , y: 800});
  }
}

function createSnow(){
  if(World.frameCount % 75 === 0 ){
    var snow=createSprite(math.round(random(70,1000),80,50,5));
    snow.addImage("snow5.webp");
    snow.scale=0.04;
    snow.velocityY=20;
    snow.lifetime=33;
  }
}
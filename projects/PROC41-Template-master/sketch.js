const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var img
var raindrops=[]

var thunder1,thunder2,thunder3,thunderimg1,thunderimg2,thunderimg3

function preload(){
 thunderimg1 = loadImage("1.png")
 thunderimg2 = loadImage("2.png")
 thunderimg3 = loadImage("3.png")
}

function setup(){
   var createCanvas(displayWidth-20,displayHeight-30)
   engine=Engine.create();
   world=engine.world;
   //making thunder sprites
   thunder1=createSprite(displayWidth/2,5,10,40)
   thunder2=createSprite(200,10,5,40);
   thunder3=createSprite(1100,5,10,40);
   
   img = new Umbrella(displayWidth/2,500);
}

function draw(){
background("black")
Engine.update(engine)

if(frameCount % 1 === 0){
   var raindrop = new Drop(random(0, windowWidth), -100,10);
   raindrops.push(raindrop);
 }
// display umbrella img
img.display();
// display raindrops
    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 
// add random img to the thunder images 1
  // By Using Switch case method
    if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        default: break;
      }
    }   
  // add random img to the thunder images 2
  // By Using Switch case method
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          default: break;
        }
      }   
  // add random img to the thunder images 3
  // By Using Switch case method
      if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:thunderImg3.addImage(thunder1);
                    break;
            case 2: thunderImg3.addImage(thunder2);
                    break;
            default: break;
          }
        } 
  // for drawing the sprites write drawSprites at the end 
    drawSprites();
}   


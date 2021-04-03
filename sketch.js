var bullet,wall;
var speed,weight;
var thickness;
var bg;
thickness = random(22, 83);
function setup() {
  createCanvas(1600,400);
  bullet= createSprite(400, 200, 100, 20);
  bullet.shapeColor = "white";
  wall= createSprite(1200,300,thickness, height/2);
  wall.shapeColor = "#f76a6a";
}

function draw() {
  background('#4287f5');  
  speed = random(223,321);
  weight = random(30,52);
  fill("black");
  textSize(30);
  text("Made by Anadya Nair", 800, 350);
 

  bullet.velocityX = speed;

if(wall.x - bullet.x <= wall.width/2 + bullet.width/2) {
  bullet.velocityX = 0;
  deformation = (0.5 *weight *speed *speed)/22500;
   
  if (deformation < 100) {
    bullet.shapeColor = "green";
  } else if (deformation >100 && deformation <180) {
    bullet.shapeColor = "yellow";
  } else {
    bullet.shapeColor = "red";
  }
}

  drawSprites();
}
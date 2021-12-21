const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let ground, right, left;


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
	rectMode(CENTER);
	ellipseMode(RADIUS);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(100, 0, 20, ball_options);
	World.add(world, ball)

	ground = new Ground(width/2, 670, width, 20);
	left = new Ground(1100, 600, 20, 120);
	right = new Ground(1300, 600, 20, 120);
}


function draw() {
  background(51);
  Engine.update(engine);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  if(keyCode == UP_ARROW) {
	  hForce();
	  vForce();
  }

  if(ball.position.x >= 1101 && ball.position.x  <= 1299 && ball.position.y <= 719) {
	  ball_options =  {
		  isStatic: true
	  }
  }

  ground.render();
  right.render();
  left.render();
  
  drawSprites();
  // keyPressed();
}

/* function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: 3})
		Body.applyForce(ball, {x: 0, y: 0}, {x: 3, y: 0})
	}
} */
function hForce() {
	Body.applyForce(ball, {x: 0, y: 0}, {x: 3, y: 0})
}
function vForce() {
	Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: 3})
}





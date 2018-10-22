let canvas = null;
let display = null;
let initiated = false;


let snake= null;
let direction = null;


function setup() {

	createCanvas(window.innerWidth, window.innerHeight);
	display = new Display(window.innerWidth, window.innerHeight);
	snake  = new Snake(5,5);
	//canvas = display.canvas;
}

function draw() {
	if (!initiated) {
		display.init();
		initiated = true;
	}

	snake.update(direction);
	snake.draw(display);
	display.draw();
	// background(178,220,2);
	// fill(0);
	// rectMode(CENTER);
	// rect(width/2, height/2, 10,10);
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		direction = DIRECTION.LEFT;
	} else if (keyCode === RIGHT_ARROW) {
		direction = DIRECTION.RIGHT;
	} else if (keyCode === UP_ARROW) {
		direction = DIRECTION.UP;
	} else if (keyCode === DOWN_ARROW) {
		direction = DIRECTION.DOWN;
	}
}
let canvas = null;
let display = null;
let initiated = false;


let snake= null;
let direction = null;
let running = false;

function setup() {
	frameRate(5);
	createCanvas(window.innerWidth, window.innerHeight);
	display = new Display(window.innerWidth, window.innerHeight);
	let centre = display.getCentre();
	snake   = new Snake(centre.x, centre.y);
	noLoop();
	//canvas = display.canvas;
}

function draw() {
	if (!initiated) {
		display.init();
		initiated = true;
	}
	//background(255);

	//display.clearBoard();
	display.loadBoardPixels();
	snake.clear(display);
	snake.update(direction);
	snake.draw(display);
	display.updateBoardPixels();

	display.draw();
	// background(178,220,2);
	// fill(0);
	// rectMode(CENTER);
	// rect(width/2, height/2, 10,10);
}

function keyPressed() {
	if (!running) {
		loop();
		running = true;
	}

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

function mousePressed() {
	if (running) {
		noLoop();
		running = false;
	} else {
		loop();
		running = true;
	}
}
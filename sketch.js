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
	snake   = new Snake(floor(centre.x/2), floor(centre.y/2)-0.5);
}

function draw() {
	if (!initiated) {
		display.init();

		display.loadBoardPixels();
		snake.draw(display);
		display.updateBoardPixels();
		display.draw();
		
		initiated = true;
		noLoop();
	} else {
		display.loadBoardPixels();
		snake.draw(display, true);
		snake.update(direction);
		snake.draw(display);
		display.updateBoardPixels();

		display.draw();
	}
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
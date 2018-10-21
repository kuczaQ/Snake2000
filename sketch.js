let canvas = null;
let display = null;
let initiated = false;


let snake= null;

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

	snake.draw(display);
	display.draw();
	// background(178,220,2);
	// fill(0);
	// rectMode(CENTER);
	// rect(width/2, height/2, 10,10);
}
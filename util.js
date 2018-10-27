function setPixel(x, y, image, clear = false) {
	let color;

	if (clear)
		color = Display.BACKGROUND_COLOR;
	else
		color = BLACK;

	let d = pixelDensity();
	for (let i = 0; i < d; i++) {
		for (let j = 0; j < d; j++) {
			let idx = 4 * ((y * d + j) * image.width * d + (x * d + i));
			image.pixels[idx] = color.r;
			image.pixels[idx+1] = color.g;
			image.pixels[idx+2] = color.b;
			image.pixels[idx+3] = color.a;
		}
	}
}

function drawSquare(x, y, canvas, clear = false) {
	setPixel(x    , y - 1, canvas, clear);
	setPixel(x    , y    , canvas, clear);
	setPixel(x + 1, y    , canvas, clear);
	setPixel(x + 1, y - 1, canvas, clear);
}

var DIRECTION = Object.freeze({UP: 0, DOWN: 1, LEFT: 2, RIGHT: 3});
var BLACK     = Object.freeze({r: 0, g: 0, b: 0, a: 255});
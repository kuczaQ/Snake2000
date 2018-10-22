function setPixel(x, y, r, g, b, image) {
	let d = pixelDensity();
	for (let i = 0; i < d; i++) {
		for (let j = 0; j < d; j++) {
			let idx = 4 * ((y * d + j) * image.width * d + (x * d + i));
			image.pixels[idx] = r;
			image.pixels[idx+1] = g;
			image.pixels[idx+2] = b;
			image.pixels[idx+3] = 255;
		}
	}
}

var DIRECTION = Object.freeze({UP: 0, DOWN: 1, LEFT: 2, RIGHT: 3});
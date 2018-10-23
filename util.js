function setPixel(x, y, color, image) {
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

var DIRECTION = Object.freeze({UP: 0, DOWN: 1, LEFT: 2, RIGHT: 3});
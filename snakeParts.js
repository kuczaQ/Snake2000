function drawVerticalSwivel(x, y, canvas, clear = false) {
	setPixel(x, y, canvas, clear);
	setPixel(x + 1, y - 1, canvas, clear);
}

function drawHorizontalSwivel(x, y, canvas, clear = false) {
	setPixel(x, y - 1, canvas, clear);
	setPixel(x + 1, y, canvas, clear);
}
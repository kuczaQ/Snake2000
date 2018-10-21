class SnakeBody {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	drawHead(canvas) {
		let x = this.x,
			y = this.y;

		setPixel(x, y+1, 0, 0, 0, canvas);
		setPixel(x+1, y+1, 0, 0, 0, canvas);
		setPixel(x+2, y+1, 0, 0, 0, canvas);
		setPixel(x+3, y+1, 0, 0, 0, canvas);
		setPixel(x+4, y+1, 0, 0, 0, canvas);
		setPixel(x+1, y, 0, 0, 0, canvas);
		setPixel(x+3, y, 0, 0, 0, canvas);
		setPixel(x+4, y, 0, 0, 0, canvas);
		setPixel(x+2, y-1, 0, 0, 0, canvas);
	}
}
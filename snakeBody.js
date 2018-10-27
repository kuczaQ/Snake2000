class SnakeBody {
	constructor(x, y, direction) {
		this.x = x;
		this.y = y;
		this.direction = direction;
	}

	drawHead(canvas, clear = false) {
		setPixel(this.x, this.y+1, canvas, clear);
		setPixel(this.x+1, this.y+1, canvas, clear);
		setPixel(this.x+2, this.y+1, canvas, clear);
		setPixel(this.x+3, this.y+1, canvas, clear);
		setPixel(this.x+4, this.y+1, canvas, clear);
		setPixel(this.x+1, this.y, canvas, clear);
		setPixel(this.x+3, this.y, canvas, clear);
		setPixel(this.x+4, this.y, canvas, clear);
		setPixel(this.x+2, this.y-1, canvas, clear);
	}

	drawBody(canvas, clear = false) {
		switch (this.direction) {
			case DIRECTION.UP: {
				drawSquare(this.x, this.y + 2, canvas, clear);
				drawHorizontalSwivel(this.x, this.y + 4, canvas, clear);
			} break;
			
			case DIRECTION.DOWN: {
				drawSquare(this.x, this.y, canvas, clear);
				drawHorizontalSwivel(this.x, this.y - 2, canvas, clear);
			} break;
			
			case DIRECTION.LEFT: {
				drawSquare(this.x, this.y, canvas, clear);
				drawVerticalSwivel(this.x + 2, this.y, canvas, clear);
			} break;

			case DIRECTION.RIGHT: {
				drawSquare(this.x - 2, this.y, canvas, clear);
				drawVerticalSwivel(this.x - 4, this.y, canvas, clear);
			} break;
		}
	}

	getNew(vector, direction) {
		return new SnakeBody(this.x + vector.x, this.y + vector.y, direction);
	}
}
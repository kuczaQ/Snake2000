/**
 * Jesus fukn Christ..., if you have to read, let alone understand this, I pity you.
 */
class SnakeBody {
	constructor(x, y, direction, lastDirection) {
		this.x = x;
		this.y = y;
		this.direction = direction;
		this.lastDirection = lastDirection;
	}

	drawHead(canvas, clear = false) {
		let posScaled = {x: this.x * Display.GRID_SIZE, y: this.y * Display.GRID_SIZE};

		drawSquare(posScaled.x, posScaled.y, canvas, clear);

		switch (this.direction) {
			case DIRECTION.UP: {
				drawVerticalSwivel(posScaled.x, posScaled.y + Display.GRID_SIZE, canvas, clear);
				switch (this.lastDirection) {
					case DIRECTION.RIGHT:
					case DIRECTION.UP: {
						drawVerticalSwivel(posScaled.x, posScaled.y + Display.GRID_SIZE * 2, canvas, clear);
					} break;
				
					default: {
						drawHorizontalSwivel(posScaled.x, posScaled.y + Display.GRID_SIZE * 2, canvas, clear);
					}
				}
				setPixel(posScaled.x - 1, posScaled.y + 2, canvas, clear);
				setPixel(posScaled.x + 1, posScaled.y + 3, canvas, clear);	
			} break;
			
			case DIRECTION.DOWN: {
				drawVerticalSwivel(posScaled.x, posScaled.y - Display.GRID_SIZE, canvas, clear);
				switch (this.lastDirection) {
					case DIRECTION.LEFT: {
						drawVerticalSwivel(posScaled.x, posScaled.y - Display.GRID_SIZE * 2, canvas, clear);
						
					} break;
				
					default: {
						drawHorizontalSwivel(posScaled.x, posScaled.y - Display.GRID_SIZE * 2, canvas, clear);
					}
				}
				setPixel(posScaled.x + 2, posScaled.y - 1, canvas, clear);
				setPixel(posScaled.x, posScaled.y - 2, canvas, clear);	
			} break;
			
			case DIRECTION.RIGHT: {
				drawHorizontalSwivel(posScaled.x - Display.GRID_SIZE, posScaled.y, canvas, clear);
				switch (this.lastDirection) {
					case DIRECTION.RIGHT:
					case DIRECTION.DOWN: {
						drawHorizontalSwivel(posScaled.x - Display.GRID_SIZE * 2, posScaled.y, canvas, clear);
					} break;
				
					default: {
						drawVerticalSwivel(posScaled.x - Display.GRID_SIZE * 2, posScaled.y, canvas, clear);
					}
				}
				setPixel(posScaled.x - 1, posScaled.y - 1, canvas, clear);
				setPixel(posScaled.x - 2, posScaled.y + 1, canvas, clear);
			} break;

			case DIRECTION.LEFT: {
				drawVerticalSwivel(posScaled.x + Display.GRID_SIZE, posScaled.y, canvas, clear);
				switch (this.lastDirection) {
					case DIRECTION.UP: {
						drawHorizontalSwivel(posScaled.x + Display.GRID_SIZE * 2, posScaled.y, canvas, clear);
					} break;
				
					default: {
						drawVerticalSwivel(posScaled.x + Display.GRID_SIZE * 2, posScaled.y, canvas, clear);
					}
				}
				setPixel(posScaled.x + 2, posScaled.y - 1, canvas, clear);
				setPixel(posScaled.x + 3, posScaled.y + 1, canvas, clear);	
			} break;
		}
	}

	drawBody(canvas, clear = false) {
		let posScaled = {x: this.x * Display.GRID_SIZE, y: this.y * Display.GRID_SIZE};

		drawSquare(posScaled.x, posScaled.y, canvas, clear);

		switch (this.direction) {
			case DIRECTION.UP: {
				switch (this.lastDirection) {
					case DIRECTION.RIGHT:
					case DIRECTION.UP: {
						drawVerticalSwivel(posScaled.x, posScaled.y + Display.GRID_SIZE, canvas, clear);
					} break;

					default: {
						drawHorizontalSwivel(posScaled.x, posScaled.y + Display.GRID_SIZE, canvas, clear);
					}
				}
				
			} break;
			
			case DIRECTION.DOWN: {
				switch (this.lastDirection) {
					case DIRECTION.LEFT: {
						drawVerticalSwivel(posScaled.x, posScaled.y - Display.GRID_SIZE, canvas, clear);
						
					} break;
				
					default: {
						drawHorizontalSwivel(posScaled.x, posScaled.y - Display.GRID_SIZE, canvas, clear);
					}
				}
			} break;
			
			case DIRECTION.LEFT: {
				switch (this.lastDirection) {
					case DIRECTION.UP: {
						drawHorizontalSwivel(posScaled.x + Display.GRID_SIZE, posScaled.y, canvas, clear);
					} break;

					default: {
						drawVerticalSwivel(posScaled.x + Display.GRID_SIZE, posScaled.y, canvas, clear);
					}
				}
				
			} break;

			case DIRECTION.RIGHT: {
				switch (this.lastDirection) {
					case DIRECTION.RIGHT:
					case DIRECTION.DOWN: {
						drawHorizontalSwivel(posScaled.x - Display.GRID_SIZE, posScaled.y, canvas, clear);
					} break;

					default: {
						drawVerticalSwivel(posScaled.x - Display.GRID_SIZE, posScaled.y, canvas, clear);
					}
				}
				
			} break;
		}
	}

	getNew(vector, direction, lastDirection) {
		return new SnakeBody(this.x + vector.x, this.y + vector.y, direction, lastDirection);
	}
}
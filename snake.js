class Snake {
	constructor(startX, startY) {
		this.body = [
						new SnakeBody(startX, startY, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 3, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 5, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 7, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 9, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 11, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 13, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 15, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 17, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 19, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 21, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 23, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 25, DIRECTION.UP, DIRECTION.UP),
						new SnakeBody(startX, startY + 27, DIRECTION.UP, DIRECTION.UP)
					];
		this.lastDirection = DIRECTION.UP;
	}

	update(direction) {
		let vector = {x: 0, y: 0};
		let step = Snake.STEP_LENGHT;
		let lastHead = this.body[0];

		switch (direction) {
			case DIRECTION.UP: {
				vector.y = -step;
			} break;
			
			case DIRECTION.DOWN: {
				vector.y = step;
			} break;
			
			case DIRECTION.LEFT: {
				vector.x = -step;
			} break;

			case DIRECTION.RIGHT: {
				vector.x = step;
			} break;
		}

		let newBody = lastHead.getNew(vector, direction, this.lastDirection);
		
		switch (this.lastDirection) {
			case DIRECTION.UP: {
				lastHead.y++;
			} break;
			
			case DIRECTION.DOWN: {
				lastHead.y--;
			} break;
			
			case DIRECTION.LEFT: {
				lastHead.x++;
			} break;

			case DIRECTION.RIGHT: {
				lastHead.x--;
			} break;
		}

		this.body.unshift(newBody);
		this.body.pop();
		this.lastDirection = direction;
	}

	draw(display, clear = false) {
		let head = true;
		
		this.body.forEach(pos => {
			if (head) {
				pos.drawHead(display.getBoard(), clear);
				head = false;
			} else
				pos.drawBody(display.getBoard(), clear);
		});
	}
}

Snake.STEP_LENGHT = 2;
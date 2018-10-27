class Snake {
	constructor(startX, startY) {
		this.length = 4;
		this.body = [
						new SnakeBody(startX, startY, DIRECTION.UP),
						new SnakeBody(startX, startY + 4, DIRECTION.UP),
						new SnakeBody(startX, startY + 8, DIRECTION.UP),
						new SnakeBody(startX, startY + 12, DIRECTION.UP)
					];
		this.lastDirection = DIRECTION.UP;
	}

	update(direction) {
		let vector = {x: 0, y: 0};
		let step = Snake.STEP_LENGHT;


		switch (direction) {
			case DIRECTION.UP: {
				// switch (this.lastDirection) {
				// 	case DIRECTION.LEFT:
				// 	case DIRECTION.RIGHT:
				// 		step = 2;
				// }
				vector.y = -step;
			} break;
			
			case DIRECTION.DOWN: {
				switch (this.lastDirection) {
					case DIRECTION.RIGHT: {
						//step = 2;
						vector.x = -2;
					} break;

				}
				vector.y = step;;

			} break;
			
			case DIRECTION.LEFT: {
				
				vector.x = -step;
			} break;

			case DIRECTION.RIGHT: {
				vector.x = step;
			} break;
		}

		let newBody = this.body[0].getNew(vector, direction);

		this.body.unshift(newBody);
		this.lastDeleted = this.body.pop();
		this.lastDirection = direction;
	}

	draw(display) {
		let head = true;
		
		this.body.forEach(pos => {
			if (head) {
				pos.drawHead(display.getBoard());
				head = false;
			}
			pos.drawBody(display.getBoard());
			//this.prepareHead(pos.x, pos.y, display.getBoard());  // TODO use this convetion
		});
			

	}
	
	clear(display) {
		let color = Display.backgroundColor;
		let head = true;
		this.body.forEach(pos => {
			if (head) {
				pos.drawHead(display.getBoard(), true);
				head = false;
			}
			pos.drawBody(display.getBoard(), true);
			//this.prepareHead(pos.x, pos.y, display.getBoard(), true);
		});
	}
}

Snake.STEP_LENGHT = 4;
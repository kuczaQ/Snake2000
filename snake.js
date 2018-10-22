class Snake {
	constructor(startX, startY) {
		this.length = 4;
		this.body = [
						{x: startX, y: startY},
						{x: startX, y: startY+4},
						{x: startX, y: startY+8},
						{x: startX, y: startY+12}
					]
	}

	update(direction) {
		let vector = {x: 0, y: 0};

		switch (direction) {
			case DIRECTION.UP: {
				vector.y = -1;
			} break;
			
			case DIRECTION.DOWN: {
				vector.y = 1;
			} break;
			
			case DIRECTION.LEFT: {
				vector.x = -1;
			} break;

			case DIRECTION.RIGHT: {
				vector.x = 1;
			} break;
		}

		let newBody = {x: this.body[0].x + vector.x, y: this.body[0].y + vector.y};

		this.body.unshift(newBody);
		this.body.pop();
	}

	draw(display) {
		display.loadBoardPixels();
		this.body.forEach(pos => {
			display.prepareHead(pos.x, pos.y);
		});
			
		display.updateBoardPixels();
	}
	
	clear(display) {
		display.loadBoardPixels();
		this.body.forEach(pos => {
			display.clearHead(pos.x, pos.y);
		});
			
		display.updateBoardPixels();
	}
}
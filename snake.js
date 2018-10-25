class Snake {
	constructor(startX, startY) {
		this.length = 4;
		this.body = [
						{x: startX, y: startY},
						{x: startX, y: startY+4},
						{x: startX, y: startY+8},
						{x: startX, y: startY+12}
					];
		this.lastDeleted = null;
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
		this.lastDeleted = this.body.pop();
	}

	draw(display) {

		let color = {r: 0, g: 0, b: 0, a: 255};
		this.body.forEach(pos => {
			this.prepareHead(pos.x, pos.y, color, display.getBoard());  // TODO use this convetion
		});
			

	}
	
	clear(display) {
		//display.loadBoardPixels();
		let color = Display.backgroundColor;
		this.body.forEach(pos => {
			this.prepareHead(pos.x, pos.y, color, display.getBoard());
		});

		// if (this.lastDeleted != null)
		// 	this.prepareHead(this.lastDeleted.x, this.lastDeleted.y, color, display.getBoard());
			
		//display.updateBoardPixels();
	}

	prepareHead(x, y, color, canvas) {
		setPixel(x, y+1, color, canvas);
		setPixel(x+1, y+1, color, canvas);
		setPixel(x+2, y+1, color, canvas);
		setPixel(x+3, y+1, color, canvas);
		setPixel(x+4, y+1, color, canvas);
		setPixel(x+1, y, color, canvas);
		setPixel(x+3, y, color, canvas);
		setPixel(x+4, y, color, canvas);
		setPixel(x+2, y-1, color, canvas);
	}
}
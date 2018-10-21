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

	draw(display) {
		display.loadBoardPixels();
		this.body.forEach(pos => {
			display.prepareHead(pos.x, pos.y);
		});
			
		display.updateBoardPixels();
	}
}
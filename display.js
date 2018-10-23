class Display {
	constructor(width, height) {
		this.width  = width;
		this.height = height;
		
		this.pixelWidth  = (int) (width/Display.pixelSize);
		this.pixelHeight = (int) (height/Display.pixelSize);

		this.boardX      = 6;
		this.boardY      = 12;
		this.boardWidth  = this.pixelWidth  - 11;
		this.boardHeight = this.pixelHeight - 17;
		this.board       = createImage(this.boardWidth, this.boardHeight);

		this.background  = createImage(this.pixelWidth, this.pixelHeight);
	}

	getBoard() {
		return this.board;
	}

	init() {
		push();
			noStroke();
			fill(Display.backgroundColor.r, Display.backgroundColor.g, Display.backgroundColor.b);
			rect(0, 0, this.width, this.height);
		pop();

		this.initBoard();
	}

	initBoard() {
		let color = {r: 0, g: 0, b: 0, a: 255};

		this.background.loadPixels();
		for (let x = 5; x < this.pixelWidth - 4; x++) {
			for (let y = 11; y < this.pixelHeight - 4; y++) {
				if (x == 5
					|| x == this.pixelWidth - 5
					|| y == 11
					|| y == this.pixelHeight - 5) {

					setPixel(x, y, color, this.background);
				}
			}
		}
		this.background.updatePixels();

		let h = 0;
		this.board.loadPixels();
		for (let x = 0; x < this.boardWidth; x++) {
			for (let y = 0; y < this.boardHeight; y++) {
				//setPixel(x, y, 255, h++ % 2 == 0? 0 : 255, 127, this.board);
			}
		}

		// let x = 5, y = 5;

		// setPixel(x, y+1, 0, 0, 0, this.board);
		// setPixel(x+1, y+1, 0, 0, 0, this.board);
		// setPixel(x+2, y+1, 0, 0, 0, this.board);
		// setPixel(x+3, y+1, 0, 0, 0, this.board);
		// setPixel(x+4, y+1, 0, 0, 0, this.board);
		// setPixel(x+1, y, 0, 0, 0, this.board);
		// setPixel(x+3, y, 0, 0, 0, this.board);
		// setPixel(x+4, y, 0, 0, 0, this.board);
		// setPixel(x+2, y-1, 0, 0, 0, this.board);

		this.board.updatePixels();
	}


	draw() {
		push();

			noSmooth();
			scale(Display.pixelSize);
			image(this.background, 0, 0);
			image(this.board, this.boardX, this.boardY);
		pop();
	}

	loadBoardPixels() {
		this.board.loadPixels();
	}

	updateBoardPixels() {
		this.board.updatePixels();
	}

	prepareHead(x, y) {
		let color = {r: 0, g: 0, b: 0, a: 255};

		setPixel(x, y+1, color, this.board);
		setPixel(x+1, y+1, color, this.board);
		setPixel(x+2, y+1, color, this.board);
		setPixel(x+3, y+1, color, this.board);
		setPixel(x+4, y+1, color, this.board);
		setPixel(x+1, y, color, this.board);
		setPixel(x+3, y, color, this.board);
		setPixel(x+4, y, color, this.board);
		setPixel(x+2, y-1, color, this.board);
	}
}

Display.backgroundColor = {
							r: 178,
							g: 220,
							b: 2
						  };
Display.pixelSize = 10;
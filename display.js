class Display {
	constructor(width, height) {
		this.width  = width;
		this.height = height;
		
		this.pixelWidth  = floor(width/Display.pixelSize);
		this.pixelHeight = floor(height/Display.pixelSize);

		this.boardX      = 6;
		this.boardY      = 12;
		this.boardWidth  = this.pixelWidth  - 11;
		this.boardHeight = this.pixelHeight - 17;

		if (this.boardWidth % 2 != 0)
			this.boardWidth--;
			
		if (this.boardHeight % 2 != 0)
			this.boardHeight--;

		this.board       = createImage(this.boardWidth, this.boardHeight);

		this.background  = createImage(this.pixelWidth, this.pixelHeight);
		this.boardClear  = createImage(this.boardWidth, this.boardHeight);
	}

	getCentre() {
		return {x: floor(this.boardWidth/2), y: floor(this.boardHeight/2)};
	}

	getBoard() {
		return this.board;
	}

	init() {
		push();
			noStroke();
			fill(Display.BACKGROUND_COLOR.r, Display.BACKGROUND_COLOR.g, Display.BACKGROUND_COLOR.b);
			rect(0, 0, this.width, this.height);
		pop();

		this.initBoard();
	}

	initBoard() {
		this.background.loadPixels();
		for (let x = 5; x < this.pixelWidth - 4; x++) {
			for (let y = 11; y < this.pixelHeight - 4; y++) {
				if (x == 5
					|| x == this.pixelWidth - 5
					|| y == 11
					|| y == this.pixelHeight - 5) {

					setPixel(x, y, this.background);
				}
			}
		}
		this.background.updatePixels();
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
}

Display.BACKGROUND_COLOR = {
							r: 178,
							g: 220,
							b: 2,
							a: 255
						  };
Display.pixelSize = 10;
Display.GRID_SIZE = 2;


function setup() {
	cnv = createCanvas(800, 800);
	main = loadImage("Xoom.png");
	ccoin = loadImage("carloscoin.png");
	chat = loadImage("chat.png");
	loc = loadImage("loc.png");
	story = loadImage("story.png");
	screenRecord = createVideo("screenRecord.mov");
	screenRecord.hide();
	cnv.mousePressed(logic);
	scr = 0;
}

function draw() {
	background(245);
	if (scr == 0) {
		image(main, 10, 10, 750, 500);
		// rect(490, 475, 40, 40);
	} else if (scr == 1) {
		image(ccoin, 10, 10, 750, 500);
	} else if (scr == 2) {
		image(loc, 10, 10, 360, 623);
	} else if (scr == 3) {
		image(story, 10, 10, 360, 623);
	} else if (scr == 4) {
		image(screenRecord, 10, 10);
		screenRecord.size(360, 623);
		screenRecord.loop();
		image(nobg, 10, 10, 360, 623);
	}
}

function logic() {
	centerX = 490;
	centerY = 475;
	src2x = 700;
	src2y = 50;
	if (
		mouseX > centerX &&
		mouseX < centerX + 40 &&
		mouseY < centerY + 40 &&
		mouseY > centerY
	) {
		scr = 1;
	
	} else if (
		mouseX > centerX &&
		mouseX < centerX + 100 &&
		mouseY < centerY + 100 &&
		mouseY > centerY
	) {
		scr = 0;
	} else if (
		mouseX > centerX + 210 &&
		mouseX < centerX + 100 &&
		mouseY < centerY + 100 &&
		mouseY > centerY
	) {
		scr = 2;
	} else if (
		mouseX > centerX + 70 &&
		mouseX < centerX + 70 + 40 &&
		mouseY < centerY + 40 &&
		mouseY > centerY
	) {
		scr = 3;
	} else if (scr == 0 && mouseX > 330 && mouseX < 365 && mouseY < 270 && mouseY > 220) {
		scr = 4;
	}
}



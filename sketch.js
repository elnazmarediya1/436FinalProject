

function setup() {
	cnv = createCanvas(3000, 2000);
	main = loadImage("Xoom.png");
	ccoin = loadImage("carloscoin.png");
	wboard = loadImage("WhiteBoardEdit.png");
	coined = loadImage("coined.png");
	chat = loadImage("chatedit.png");
	hearted = loadImage("hearted.png");
	gray = loadImage("grayheart.png");
	screenRecord = createVideo("screenRecord.mov");
	screenRecord.hide();
	cnv.mousePressed(logic);
	scr = 0;
}

function draw() {
	background(245);
	if (scr == 0) {
		image(main, 10, 10, 1200, 769);
		//rect(1180, 10, 35, 30);
		//rect(790, 735, 35, 30);

		//rect(600, 735, 35, 30);
	} 
	else if (scr == 1) {
		image(ccoin, 10, 10, 1200, 769);
		//rect(1135, 75, 35, 30);
	} 
	else if (scr == 2) {
		image(wboard, 10, 10, 1200, 769);
	} 
	else if (scr == 3){
		image(chat, 10, 10, 1200, 769);
		//rect(1160, 55, 35, 30);
	} 
	else if (scr == 6) {
		image(coined, 10, 10, 1200, 769);
	} 
	else if (scr == 7) {
		image(hearted, 10, 10, 1200, 769);
	} 
	else if (scr == 8) {
		image(gray, 10, 10, 1200, 769);
	} 
}

function logic() {
	centerX = 790;
	centerY = 735;
	src2x = 1130;
	src2y = 75;
	closex =1180;
	closey = 10;
	chatx = 600;
	heartx = 1160;
	hearty = 50;
	if (
		mouseX > centerX &&
		mouseX < centerX + 50 &&
		mouseY < centerY + 50 &&
		mouseY > centerY
	) {
		scr = 1;
	} 
	else if (
		mouseX > src2x &&
		mouseX < src2x + 50 &&
		mouseY < src2y + 50 &&
		mouseY > src2y
	) {
		scr = 6;
	} 
	else if (
		mouseX > closex &&
		mouseX < closex + 50  &&
		mouseY < closey + 50 &&
		mouseY > closey
	) {
		scr = 0;
	} 
	else if (
		mouseX > centerX &&
		mouseX < centerX + 100 &&
		mouseY < centerY + 100 &&
		mouseY > centerY
	) {
		scr = 2;
	} 
	else if (
		mouseX > chatx &&
		mouseX < chatx + 50 &&
		mouseY < centerY + 50 &&
		mouseY > centerY
	) {
		scr = 3; //change to scr = 8 for carlos' view
	} 
	else if (
		mouseX > heartx &&
		mouseX < heartx + 50 &&
		mouseY < hearty + 50 &&
		mouseY > hearty
	) {
		scr = 7;
	} 

}



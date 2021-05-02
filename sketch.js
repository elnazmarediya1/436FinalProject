

function setup() {
	cnv = createCanvas(3000, 2000);
	main = loadImage("Xoom1.png"); //change to Xoom1 when playing or keep as Xoom
	ccoin = loadImage("carloscoin.png");
	wboard = loadImage("WhiteBoardEdit.png");
	coined = loadImage("coined.png");
	chat = loadImage("chatedit.png");
	hearted = loadImage("hearted.png");
	gray = loadImage("grayheart.png");
	game = loadImage("startgame.png");
	q1 = loadImage("q1.png");
	q2 = loadImage("q2.png");
	correct = loadImage("correct.png");
	startscreen = loadImage("startscreen.png");
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
		//rect(445, 735, 35, 30);
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
	else if (scr == 9) {
		image(game, 10, 10, 1200, 769);
		//rect(350, 300, 35, 30);
	} 
	else if (scr == 10) {
		image(startscreen, 10, 10, 1200, 769);
	} 
	else if (scr == 11) {
		image(q1, 10, 10, 1200, 769);
		//rect(625, 600, 35, 30);
	} 
	else if (scr == 12) {
		image(q2, 10, 10, 1200, 769);
		//rect(300, 425, 35, 30);
	} 
	else if (scr == 13) {
		image(correct, 10, 10, 1200, 769);
		//rect(450, 425, 35, 30);
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
	gamex = 440;
	sscreenx = 350;
	sscreeny = 300;
	binaryx = 625;
	binaryy = 600;
	q2x = 450;
	q2y = 425;
	bux = 300;
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
		scr = 3; //change to scr = 8 for carlos' view and 3 for no likes
	} 
	else if (
		mouseX > heartx &&
		mouseX < heartx + 50 &&
		mouseY < hearty + 50 &&
		mouseY > hearty
	) {
		scr = 7;
	} 
	else if (
		mouseX > gamex &&
		mouseX < gamex + 50 &&
		mouseY < centerY + 50 &&
		mouseY > centerY
	) {
		scr = 11;   //9 is for prof/host and 11 is for players
	} 
	else if (
		mouseX > sscreenx &&
		mouseX < sscreenx + 50 &&
		mouseY < sscreeny + 50 &&
		mouseY > sscreeny
	) {
		scr = 10;
	} 
	else if (
		mouseX > binaryx &&
		mouseX < binaryx+ 50 &&
		mouseY < binaryy + 50 &&
		mouseY > binaryy
	) {
		scr = 13;
	} 

	else if (
		mouseX > q2x &&
		mouseX < q2x + 50 &&
		mouseY < q2y + 50 &&
		mouseY > q2y
	) {
		scr = 12;
	} 
	else if (
		mouseX > bux &&
		mouseX < bux + 50 &&
		mouseY < q2y + 50 &&
		mouseY > q2y
	) {
		scr = 13;
	} 
}



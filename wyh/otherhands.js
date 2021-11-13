let speed = 10;
class gameHand {
	constructor() {
		this.x = width + sizeunit;
		this.y;
		this.passed = false;
	}

	show() {
 		image(otherhandimg, this.x + shrink, this.y + shrink, r, r);
	}

	move() {
		this.x -= speed;
	}
}
class Drop {
	constructor() {
		this.x = random(350,450);
		this.y = random(-200, -100);
		this.dropSpeed = random(4,10) + 5;
		this.dropColor = color(0, random(50), 255 - random(50));
	}

	fall() {
		this.y += this.dropSpeed;

		if (this.y >= height)
			this.y = random(-200, -100);
	}

	show() {
		fill(this.dropColor);
		rect(this.x-5, this.y-5, 5, random(2, 10));
	}
}
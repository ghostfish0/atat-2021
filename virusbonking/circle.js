let img;

class Circle {
	constructor(x_, y_,timeout_) {
		this.x = x_;
		this.y = y_;
		this.fillcolor = random(24, 255);
		this.golden = (timeout_ == 1000);
		this.r = random(20, 50);
	}

	show(timeout_) {
		textSize(this.r);
		fill(this.fillcolor);
		if (this.golden)
		{
			fill(255,215,0);
			text('*honk*', this.x, this.y);
		}			
		else
			text('*bonk*',this.x, this.y);

	}

}
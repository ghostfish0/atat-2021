class VaccineBeam {
	constructor(x_, y_,angle_) {
		this.x = x_ + sizeunit/2;
		this.y = y_ + sizeunit/2;
		this.vx = -sin(angle_);
		this.vy = cos(angle_);
	}

	move() {
		this.x += 10*this.vx;
		this.y += 10*this.vy;
	}

	show() {
		push();
		stroke(0, 255, 255);
		strokeWeight(4);
		line(this.x, this.y, this.x + 25*this.vx, this.y + 25*this.vy);
		pop();
	}

	hits(virus) {
		return (dist(this.x, this.y, virus.x, virus.y) <= virus.r)
	}
}
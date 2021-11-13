class Virus {
	constructor() {
		this.r = random(0.2*sizeunit, 0.6*sizeunit);
		this.vel = p5.Vector.random2D();
		this.x = random(this.r, width - this.r);
		this.y = random(this.r, height - this.r);
		this.total = floor(random(15, 30));
		this.offset = [];
		this.died = false;
		this.alphabg = 0;
		this.ringr = 0;
		for(let i = 0; i < this.total; i++)
			if (i % 2 == 0)
				this.offset.push(random(-7, 0));
			else 
				this.offset.push(random(0.2*this.r, 0.6*this.r));
	}
	showring() {
		push();
		noFill();
		stroke(322, 87, 56);
		ellipse(this.x, this.y, this.ringr*2);
		this.ringr += 0.5;
		if (this.ringr > 2*this.r)
			this.ringr = 0;
		pop();
	}
	show() {
		this.showring();
		push();
		translate(this.x, this.y);
		colorMode(RGB);
		fill(color(240, 46, 170, this.alphabg));
		stroke(color(240, 46, 170, this.alphabg));
		// beginShape();
			for(let i = 0; i < this.total; i++){
				var angle = map(i, 0, this.total, 0, TWO_PI)
				var x = (this.r + this.offset[i]) * cos(angle);
				var y = (this.r  + this.offset[i]) * sin(angle);
				line(0, 0, x, y);
			}
		// endShape(CLOSE);
		ellipse(0, 0, 2*this.r);
		pop();
		if (this.died) {
			this.alphabg -= 5;
		}
		else if (!this.died && this.alphabg < 250)
		 	this.alphabg += 5;
	}

	move() {
		this.x += this.vel.x;
		this.y += this.vel.y;
	}

	edges() {
		if (this.x > width)
			this.vel.x = -this.vel.x;
		else if (this.x < 0)
			this.vel.x = -this.vel.x;
	
		if (this.y > height - this.r)
			this.vel.y = -this.vel.y;
		else if (this.y < 0)
			this.vel.y = -this.vel.y;

	}

	hit(volunteer) {
		if (dist(this.x,this.y,volunteer.x + sizeunit/2, volunteer.y + sizeunit/2) < 1.25* sizeunit && volunteer.hurtcooldown <= 0)
		{
			volunteer.hp -= 0.1;
			volunteer.hurtcooldown = 1;
		}
	}

}
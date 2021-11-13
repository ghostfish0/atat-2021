let sizeunit = 60;
let gravity = 2.5;
let movex = false;

class Volunteer {
	constructor() {
		this.x = 20;
		this.y = height - sizeunit;
		this.vy = 0;
		this.vx = 0;
		this.hp = 1;
		this.SyringeAngle = 1.25*PI;
		this.hurtcooldown = 0;
		this.facingLeft = false;
	}

	rotateSyringe(angle) {
		this.SyringeAngle += angle;
		this.SyringeAngle = constrain(this.SyringeAngle, 0.5*PI , 1.5*PI);
	}
	showSyringe() {
		push();
		fill('#ffae00');
		noStroke();
		rectMode(CENTER);
		translate(this.x + sizeunit/2, this.y + sizeunit/2);
		rotate(this.SyringeAngle);
		rect(0, 0, 20 , -2*sizeunit);
		rotate(PI/2);
		rect(-sizeunit, 0, 20, 40);
		pop();

		push(); 
		noStroke();
		fill('#ffae00');
		rectMode(CENTER);
		translate(this.x + sizeunit/2, this.y + sizeunit/2);
		rotate(this.SyringeAngle);
		translate(0, sizeunit);
		rect(0, -sizeunit/4, sizeunit / 2, 1*sizeunit);
		rect(0, 0, 3, 2*sizeunit);
		pop();
	}
	moveup() {
		if (this.y == height - sizeunit)
			this.vy = -25;
		this.hp -= 0.0001;
	}
	movedown() {
		this.y = height - sizeunit;
		this.hp -= 0.0001;
	}
	moveleft() {
			this.vx = -10;
		this.hp -= 0.0001;
	}
	moveright() {
		this.vx = 10;
		this.hp -= 0.0001;
	}
	move() {
		this.x += this.vx;
		this.y += this.vy;
		this.y = constrain(this.y, 0, height - sizeunit);
		this.x = constrain(this.x, 0, width - sizeunit);
		if (!movex) {
			if (this.vx < 0)
				this.vx += gravity;
			else if (this.vx > 0)
				this.vx -= gravity;
		}
		this.vy += gravity;
	}
	show() {
		this.showSyringe();
		push();
		fill(120 * this.hp, 100, 50);
		if (this.hurtcooldown > 0)
			fill('red');
		rect(this.x, this.y - 20, sizeunit * this.hp, 10);
		pop();
		push();
		if (this.hurtcooldown > 0) {
			if (frameCount % 10 < 5)
				fill('red');
			else 
				fill(6);
		}
		rect(this.x, this.y, sizeunit, sizeunit);
		pop();
		push();
		// if (this.facingLeft)
		fill(16);
		pop();
		if (this.hurtcooldown > 0)
			this.hurtcooldown -= 0.01;
	}
}
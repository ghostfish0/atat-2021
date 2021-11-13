let sizeunit = 100;
let shrink = 10;
let r = sizeunit - 2*shrink;
class playerHand {
	constructor() {
		this.x = 20;
		this.y = sizeunit*2;
	}

	show() {
		fill(240, 46, 170);
 		image(handimg, this.x + shrink, this.y + shrink, r, r);
 	}

 	moveup() {
 		if (this.y !== 0)
		this.y -= sizeunit;
 	}
 	movedown() {
 		if (this.y !== height - sizeunit)
	 	this.y += sizeunit;
 	}
 	moveleft() {
 		if (this.x >= 20 + sizeunit)
 		this.x -= sizeunit;
 	}
 	moveright() {
 		if (this.x <= width - sizeunit)
 		this.x += sizeunit;
 	}

 	hits(gamehand) {
 		return collideRectRect(this.x + shrink, this.y + shrink, r, r, 
 							gamehand.x + shrink, gamehand.y, r, r);
 	}
}

const scroll = {
	y: null,
	speed: null
}
let stars = [];
function setup()
{
	var canvas =createCanvas(document.body.clientWidth, document.body.clientHeight);
	canvas.parent('background_canvas');
	for(let i = 0; i < 100; i++)
		stars.push(new Star());
	fill('white');
	stroke('white');
}

function draw() {
	scroll.y -= scroll.speed;
	scroll.speed /= 1.9;

	background(6);

	stars.forEach(star => {
		fill(random(200, 255));
		ellipse(star.x, (scroll.y)*star.speed + star.y, star.r + random(3));
	})

}

class Star {
	constructor() {
		this.z = random(-height/2, height/2);
		this.r = map(this.z, -height/2, height/2, 1, 0.5);
		this.speed = map(this.z, -height/2, height/2, 2, 0.5);

		this.x = random(width);
		this.y = random(-100, height + 100);
	}
}

function mouseWheel(event) {
	if (!(event.delta < 0 && document.documentElement.scrollTop == 0) && !(event.delta > 0 && (window.innerHeight + window.scrollY) >= document.body.offsetHeight))
		scroll.speed = event.delta;
}

function windowResized() {
  resizeCanvas(document.body.clientWidth, document.body.clientHeight);
}

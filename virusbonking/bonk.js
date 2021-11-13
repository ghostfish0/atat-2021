myimg1 = document.getElementById("img1");
myimg2 = document.getElementById("img2");
myimg1.addEventListener("click", handleClick);
var bonksounds = document.querySelectorAll('audio')
var honksound = document.getElementById('honkaudio');
var currSound = 0;
let bonkCount = 0;
var circles = [];
let timeout_;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('bonkstage');
  canvas.style.position = "absolute";
  textAlign(CENTER);
  noStroke();
}

function playBonk() {
  if (bonksounds[currSound].currentTime == 0 || bonksounds[currSound].ended) {
    bonksounds[currSound].play();
  }
  currSound = (currSound + 1) % 5;
}

function handleClick(event) {
	myimg2.style.visibility = "visible";
  myimg1.style.visibility = "hidden";
  timeout_ = 250;
  if (random() < 0.05)
  {
    honksound.play();
    timeout_ = 1000;
  }
  else
    playBonk();
  let x_ = random(width);
  let y_ = random(height);
  circles.push(new Circle(x_,y_,timeout_));
  setTimeout(bonkthevirus, timeout_);
}
function bonkthevirus() {
	myimg2.style.visibility = "hidden";
  myimg1.style.visibility = "visible";
}

function draw() {
  circles.forEach(circle => {
    circle.show();
  })
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let zoomratio = -1500;

function preload() {
  starimg = loadImage('./star.png');
  flagimg = loadImage('../images/redflag.png');
  flagimg1 = loadImage('../images/redflag1.png');
  flagimg2 = loadImage('../images/redflag2.png');
  flagimg3 = loadImage('../images/redflag3.png');
  flagimg4 = loadImage('../images/redflag4.png');
}
function setup()
{
	var canvas =createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('background_canvas');
   imageMode(CENTER);
   rectMode(CENTER);
   fill('red');
}

function draw() {
	 background(0);

   var eyeX = width / 2.0 + map(mouseX, 0, width, 5000, -5000);
   var eyeY = height / 2.0 + map(mouseY, 0, height, 5000, -5000);
   var eyeZ = (height / 2.0) / tan(PI / 6.0) - zoomratio;
   var centerX = 0;
   var centerY = 100;
   var centerZ = 0;
   var upX = 0;
   var upY = 1;
   var upZ = 0;
   camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);
   perspective(PI / 3.0, width / height, 0.1, 500000);
   background(12);
   
   translate(0, 0, 256);
   image(flagimg2, -500, 0);
   translate(0, 0, 256);
   image(flagimg1, -1000, -256);
   translate(0, 0, -200);
   image(flagimg3, 100, 256);
   translate(0, 0, -256);
   image(flagimg4, 750, 100);
   translate(0, 0, 384);
   image(flagimg1, 1100, 512);

   translate(0, 0, 256);
   push();
   image(starimg, 0, 0);
}

function mouseWheel(event) {
  zoomratio -= 0.75*event.delta;
}

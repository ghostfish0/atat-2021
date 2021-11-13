function setup() {
   var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
   canvas.parent('stage');
}

function draw() {
   var eyeX = width / 2.0 + map(mouseX, 0, width, 5000, -5000);
   var eyeY = height / 2.0 + map(mouseY, 0, height, 5000, -5000);
   var eyeZ = (height / 2.0) / tan(PI / 6.0) - pos;
   var centerX = width / 2.0;
   var centerY = height / 2.0;
   var centerZ = 0;
   var upX = 0;
   var upY = 1;
   var upZ = 0;
   camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);
   perspective(PI / 3.0, width / height, 0.1, 500000);
   background(34);
   
   fill('red');
   translate(0,0,-1024);
   rect(-1024, -1024, 1024, 1024);
   translate(0,0,-512);
   rect(-1024, 1024, 1024, 1024);
   translate(0,0,0);
   rect(1024, -1024, 1024, 1024);
   translate(0,0,512);
   rect(1024, 1024, 1024, 1024);
}
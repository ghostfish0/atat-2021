let score = 0;
var highscore = 0;
let gotHighScore = false;
let volunteer;
var state;
var bgalpha = 0;
var syringeangle = 0;
let viruses = [];
let vaccinebeams = [];
let spawnrate = 5;
function preload() {
  mF = loadFont('SVN-Determination Sans.otf');
}
function setup() {
  var canvas = createCanvas(800, 500);
  canvas.parent('stage');
  resetGame();
  state = 'start'
  colorMode(HSL);
  textFont(mF);
  noStroke();
}

function resetViruses() {
  viruses = [];
  while (viruses.length < spawnrate)
    viruses.push(new Virus());
}
function resetGame() {
  state = 'play';
  score = 0;
  textAlign(LEFT);
  textSize(20);
  gotHighScore = false;
  bgalpha = 0;
  volunteer = new Volunteer();
  vaccinebeams = [];
  resetViruses();
}

function keyReleased() {
  if (!keyIsPressed)
    movex = false;
  syringeangle = 0;
}
function keyPressed() {
  if (state == 'replay' || state == 'start') {
    if (key == ' ')
      resetGame();
  }
  else {
    if (keyCode == UP_ARROW)
    {
      volunteer.moveup();
    }
    else if (keyCode == DOWN_ARROW) 
      volunteer.movedown();
    else if (keyCode == LEFT_ARROW) {
      volunteer.moveleft();
      movex = true;
    }
    else if (keyCode == RIGHT_ARROW) {
      volunteer.moveright();
      movex = true;
    }
    else if (key == 'a' || key == 'A')
      syringeangle = -0.1;
    else if (key == 'd' || key == 'D')
      syringeangle = 0.1;
    else if (key == ' ') {
      volunteer.hp -= 0.001;
      vaccinebeams.push(new VaccineBeam(volunteer.x, volunteer.y, volunteer.SyringeAngle));
    }
  }
}
function mouseWheel(event) {
  volunteer.rotateSyringe(event.delta / 500);
  return false;
}

function draw() {
  if (viruses.length == 0){
    if (volunteer.hp <= 0)
      state = 'replay';
    else {
      spawnrate *= 1.5;
      resetViruses();
    }

  }

  if (state == 'replay')
  {
    if (score > highscore)
    {
      highscore = score;
      gotHighScore = true;
    }
    textAlign(CENTER, CENTER);   
    background(color(0, bgalpha));
    fill(322, 87, 56);
    textSize(40);
    text('CẢM ƠN BẠN ĐÃ BẢO VỆ SỰ AN TOÀN CỦA MỌI NGƯỜI :D', sizeunit, 120, width-2*sizeunit)
    textSize(30);
    text('NHẤN [SPACE] ĐỂ TIẾP TỤC LẠI', width/2, 400);
    textSize(50);
    text(score, width/2, height/2 + 25);
    if (gotHighScore)
    {
      textSize(20);
      text('HIGH SCORE!', width/2, height/2 + 75);
    }
    bgalpha++;
  }
  else if (state == 'start')
  {
    background(6);
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(180, 100, 50);
    text('NHẤN [SPACE] ĐỂ BẮT ĐẦU', width/2, height/2);
  }
  else {
    background(6);
    vaccinebeams.forEach(vaccinebeam => {
      vaccinebeam.move();
      viruses.forEach(virus => {
        if (vaccinebeam.hits(virus)) {
          vaccinebeams.splice(vaccinebeam.index, 1);
            if (!virus.died) {
              virus.died = true;
              score += 10;
            }          
        }
      })
      vaccinebeam.show();
    })
    for(let i = 0; i < viruses.length; i++) {
      viruses[i].edges();
      viruses[i].move();
      viruses[i].show();
      if (!viruses[i].died) 
        viruses[i].hit(volunteer);
      if (viruses[i].alphabg <= 0)
      {
        viruses.splice(i,1);
      }
    }
    volunteer.move();
    volunteer.rotateSyringe(syringeangle);
    volunteer.show();

  }

  if (volunteer.hp <= 0) {
    viruses.forEach(virus => {
      virus.died = true;
    });  
  }
  textSize(25);
  text(score, 20, 30);
}
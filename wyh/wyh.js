let playerhand;
let gamehands = [];
let drops = [];
let cooldowns = [0, 0, 0, 0, 0];
let spawnrate = 0.003;
let score = 0;
var bgalpha = 0;
var state;
var x = 0;
var highscore = 0;
let gotHighScore = false;

function setup() {
  var canvas = createCanvas(800, 500);
  canvas.parent('stage');
  for (let i = 0; i < 100; i++)
    drops.push(new Drop());
  noStroke();
  textFont(mF);
  resetGame();
  state = 'start'
}
function resetGame() {
  state = 'play';
  score = 0;
  bgalpha = 0;
  spawnrate = 0.003;
  speed = 10;
  gamehands = [];
  textAlign(LEFT);
  textSize(20);
  playerhand = new playerHand();
  gotHighScore = false;
  
  otherhandimg.play();
  handimg.play();
  washhandimg.play();
}

function keyPressed() {
  if (state == 'replay' || state == 'start') {
    if (key == ' ')
      resetGame();
  }
  else {
    if (key == 'w' || key == 'W' || keyCode == UP_ARROW)
      playerhand.moveup();
    else if (key == 's' || key == 'S' || keyCode == DOWN_ARROW)
      playerhand.movedown();
    else if (key == 'a' || key == 'A' || keyCode == LEFT_ARROW)
      playerhand.moveleft();
    else if (key == 's' || key == 'D' || keyCode == RIGHT_ARROW)
      playerhand.moveright();
  }
}

function draw() {
  if (state == 'replay')
  {
    if (score > highscore)
    {
      highscore = score;
      gotHighScore = true;
    }
    textAlign(CENTER, CENTER);   
    background(color(12, bgalpha));
      if (bgalpha <= 255)
        bgalpha++;
      if (bgalpha >= 50)
        image(washhandimg, playerhand.x, playerhand.y, r + 2*shrink, r + 2*shrink);
    drops.forEach(drop => {
    drop.show();
    drop.fall();
    });
    fill(0, 255, 255);
    textSize(50);
    text('GAME OVER', width/2, 100);
    textSize(30);
    text('NHẤN [SPACE] ĐỂ CHƠI LẠI', width/2, 400);
    text(score, width/2-5, 150);
    textSize(20);
    if (gotHighScore)
    {
      text('HIGH SCORE!', width/2, 180);
    }
    text('*RỬA TAY*', width/2, 350);
  }
  else if (state == 'start')
  {
    background(12);
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(0, 255, 255);
    text('NHẤN [SPACE] ĐỂ BẮT ĐẦU', width/2, height/2);
  }
  else {
    for (let i = 0; i < 5; i++) {
      if (random() < spawnrate)
      {
        if (cooldowns[i] <= 0)
        {
          cooldowns[i] = 10;
          gamehands.push(new gameHand());
          gamehands[gamehands.length-1].y = i*sizeunit;
        }
      }
    }
    for (let i = 0; i < 5; i++)
      cooldowns[i]--;

    background(12);
    playerhand.show();
    fill(0, 222, 222);
    gamehands.forEach(gamehand => {
      gamehand.show();
      gamehand.move();
      if (!gamehand.passed && gamehand.x + sizeunit <= 0)
      {
        score+=10;
        gamehand.passed = true;
      }

      if (playerhand.hits(gamehand))
      {
        state = 'replay';
        playerhand.x = (width - sizeunit)/2;
        playerhand.y = (height - sizeunit)/2;
      }
    })
    spawnrate += 0.000004;
    speed += 0.001;
    if (frameCount % 15 == 0)
      score++;
    text(score, 15, 20);
  }
}

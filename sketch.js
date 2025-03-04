let clicks = 0;
let currentState = 'start';
let song;

var active = 0;

function preload(){
  img1 =loadImage("img/gacha1.png");
  img2 =loadImage("img/gacha2.png");
  img3 =loadImage("img/gacha3.png");
  img4 =loadImage("img/prize.png");
  mySound =loadSound("gachapon.mp3");
}

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  if (currentState == 'start'){
    background('#F3B9D2');
    image(img1,0,0,500,500);
  }

  if (currentState == 'turning'){
    if(active === 0) 
      {image(img1,0,0,500,500);
      }
    else if(active === 1) 
      {image(img2,0,0,500,500);
      }
    else if(active === 2) 
      {image(img3,0,0,500,500);
      }
    else if(active === 3) 
      {active = 0;
      }

    if (clicks>5){
      currentState = 'gacha';
    }
  }

  else if (currentState == 'gacha'){
    fill('#CCDEFD');
    rect(0, 0, width, height);
    image(img4,0,0,500,500);

    fill('#29285C');
		textSize(27);
		text("Congratulations on your pull!", 70, 90);
    text("Press 'enter' to start over.", 80, 120)
  }
}

function mousePressed(){
	if(dist(251, 343, mouseX, mouseY) < 73 && mouseIsPressed) { 
    currentState = 'turning';

    active++;
    clicks++;
	}

  if (mySound.isPlaying()) {
    mySound.stop();
  } else {
    mySound.play();
  }
}

function keyPressed(){
  if (keyCode === ENTER) {
    currentState = 'start';
    clicks = 0;
  }
}
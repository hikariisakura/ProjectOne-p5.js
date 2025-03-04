let clicks = 0;
let currentState = 'start';
let song;

var active = 0;


function preload(){
  //preload images and sound to have program ready
  img1 =loadImage("img/gacha1.png");
  img2 =loadImage("img/gacha2.png");
  img3 =loadImage("img/gacha3.png");
  img4 =loadImage("img/prize.png");

  mySound =loadSound("Gachapon.mp3");
}

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {

  //where the program starts
  if (currentState == 'start'){
    background('#F3B9D2');
    image(img1,0,0,500,500);
  }

  //This is where the user clicks the handle on the machine
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

  //After 5 clicks it moves onto a new state where it shows the output of the loop
    if (clicks>5){
      currentState = 'gacha';
    }
  }

  //the output of the loop from above
  else if (currentState == 'gacha'){
    fill('#CCDEFD');
    rect(0, 0, width, height);
    image(img4,0,0,500,500);

    fill('#29285C');
		textSize(27);
		text("Congratulations on your pull!", 70, 90);
    text("Press 'enter' to start over.", 80, 120);
  }
}


function mousePressed(){
  //This specify where on the canvas where the user click actually works, which is in the placement of the handle on the image
	if(dist(251, 343, mouseX, mouseY) < 73 && mouseIsPressed) { 
    currentState = 'turning';

    active++;
    clicks++;
	}

  //This makes it so the sound doesn't continuously loop
  if (mySound.isPlaying()) {
    mySound.stop();
  } else {
    mySound.play();
  }
}


function keyPressed(){
  //the input will loop back to the beginning
  if (keyCode === ENTER) {
    currentState = 'start';
    clicks = 0;
  }
}
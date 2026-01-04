let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 256;
canvas.height = 512;

let back = new Image();
let bird = new Image();
let road = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

back.src = "img/back.png";
bird.src = "img/bird.png";
road.src = "img/road.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

let fly_audio = new Audio();
let score_audio = new Audio();

fly_audio.src = "audio/fly_audio.mp3";
score_audio.src = "audio/score_audio.mp3";

let velY = 0;
let graviti = 0.2;

let xPos = 10;
let yPos = 150

function draw(){
    context.drawImage(back, 0, 0);
    context.drawImage(bird, xPos, yPos++);
    if(yPos>=canvas.height) {
    location.reload();
    }
    velY += graviti;
    yPos += velY
}

canvas.addEventListener("mousedown", moveUp);
function moveUp() {
    velY = -10;
    fly_audio.play();
}


setInterval(draw, 20);

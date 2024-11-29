let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

const BALL_SIZE = 5;
let ballposition = { x: 20, y: 30 };

ctx.fillStyle = "white";
ctx.fillRect(ballposition.x, ballposition.y, BALL_SIZE, BALL_SIZE);

/* initialize two new variables, xSpeed andySpeed.*/
let xSpeed = 4;
let ySpeed = 2;

const PADDLE_WIDTH = 5;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 10;
let leftPaddleTop = 10;
let rightPaddleTop = 30;

function draw() {
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
ctx.fillStyle = "white";
ctx.fillRect(ballposition.x, ballposition.y, BALL_SIZE, BALL_SIZE);
/*use these two variables to update the position of the ball.4 pixels to the right and 2 pixels down.*/
/*The ball will move 4 pixels to the right and 2 pixels down every time the draw function is called. */

// Draw the paddles
 ctx.fillRect(
    PADDLE_OFFSET,
    leftPaddleTop,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
    );
 ctx.fillRect(
    width - PADDLE_WIDTH - PADDLE_OFFSET,
    
    rightPaddleTop,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
    );
 }
function update() {
    ballposition.x += xSpeed;
    ballposition.y += ySpeed;
}

function checkCollision() {
    let ball = {
    left: ballposition.x,
    right: ballposition.x + BALL_SIZE,
    top: ballposition.y,
    bottom: ballposition.y + BALL_SIZE
    }
    if (ball.left < 0 || ball.right > width) {
    xSpeed = -xSpeed;
    }
    if (ball.top < 0 || ball.bottom > height) {
    ySpeed = -ySpeed;
    } 
    }
function gameLoop() {
    draw();
    update();
    checkCollision();
    // Call this function again after a timeout
    setTimeout(gameLoop, 30);
}

gameLoop();
/*setTimeout calls its function only once after the timeout, while
setInterval calls its function repeatedly. We’re using setTimeout here so
we have more control over whether or not to keep looping*/



        



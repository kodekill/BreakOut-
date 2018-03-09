var paddleHeight = 10;
var paddleWidth = 75;

var paddleSpeed = 6;

var paddleStartX = 450;
var paddleStartY = 575;

var paddleLocationX = paddleStartX; 								//X Starting location for the paddle
var paddleLocationY = paddleStartY;

var paddleColor = "#a5a5a5"; 

function drawPaddle(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	if (shrink == false){
		ctx.beginPath();
		ctx.strokeStyle = "#000000";
		ctx.strokeRect(paddleLocationX, paddleLocationY, paddleWidth, paddleHeight);
		ctx.rect(paddleLocationX, paddleLocationY, paddleWidth, paddleHeight);
		ctx.fillStyle = paddleColor;
		ctx.fill();
		ctx.closePath();
	}

	if (shrink == true){
		ctx.beginPath();
		ctx.strokeStyle = "#000000";
		ctx.strokeRect(paddleLocationX, paddleLocationY, paddleWidth-38, paddleHeight);
		ctx.rect(paddleLocationX, paddleLocationY, paddleWidth-38, paddleHeight);
		ctx.fillStyle = paddleColor;
		ctx.fill();
		ctx.closePath();

	}
}
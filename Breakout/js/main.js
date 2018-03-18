//Websites I used in developing this project:
//https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

var pointsExtraBall = 100; //should be 100
var numberOfLives = 3; 
var countDownValue = 3;
var savedNumber = localStorage['numberOfScores'];

var getReady = false;
var flag = false;
var ballNum = 1; 

var myBall;
var myBall2;
var myBall3; 


function loadNewGame(){
	getReady = true;
	requestAnimationFrame(gameLoop);
}


function update(){
	checkStart();
}


function gameLoop(time){
	update();
	render();
	requestAnimationFrame(gameLoop);
}


function render(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	if(getReady == false){
		ctx.clearRect(0, 0, canvas.width, canvas.height); //Clears the canvas each frame so objects don't blur
		if(roundScore >= pointsExtraBall){ 
			flag = true;
			newBall(flag); 
		}

		if(myBall.status == 1){
			myBall.drawBall();
			myBall.ballPath();
			myBall.collisionDetection();
			myBall.getSpeed();
			//console.log("ballX = ", myBall.x);
			//console.log("ballY = ", myBall.y);
		}

		if(myBall2){
			myBall2.drawBall();
			myBall2.ballPath();
			myBall2.collisionDetection();
			myBall2.getSpeed();
		}

		if(myBall3){
			myBall3.drawBall();
			myBall3.ballPath();
			myBall3.collisionDetection();
			myBall3.getSpeed();
		}

		drawLives();
		drawBricks();
		drawPaddle();
		drawScore();
		drawExplosion();
	}
}


function checkStart(){
	if(getReady == true){
		countDown();
	}
	if(getReady == false){
		countDownValue = 3;
	} 
}


function reloadGame(){
	document.location.reload();
}


function newBall(flag){
	if(flag && ballNum == 1){
		if(!myBall2){
			//console.log("New Ball!");
			myBall2 = new makeBall();
			myBall2.dx = 2;
			myBall2.dy = -2;
			ballNum++;
			roundScore = 0;
			flag = false; 
		}
	}

	if(flag && ballNum == 2){
		//console.log("New Ball!");
		if(!myBall3){
			myBall3 = new makeBall();
			myBall3.dx = -2;
			myBall3.dy = -2;
			ballNum++;
			roundScore = 0;
			flag = false;
		} 
	}
}
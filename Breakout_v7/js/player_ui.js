var iconColor = "#a5a5a5"; 
var iconWidth = 18;
var iconHeight = 6;
var iconOffsetLeft = 10;
var iconPadding = 3;

var roundScore = 0; 
var playerScore = 0; 
var win = 0; 



function drawScore() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
       
    ctx.font = "14px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Score: " + playerScore, 30, canvas.height-2);
}


function drawLives(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    for(col = 0; col < numberOfLives; col++){
        var iconX = (col*(iconWidth+iconPadding))+iconOffsetLeft;
        ctx.rect((iconX + canvas.width-75), canvas.height-10, iconWidth, iconHeight);
        ctx.fillStyle = iconColor;
        ctx.fill();
        ctx.closePath();
	}
}


function countDown(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	if(getReady == true){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = "60px Arial";
		ctx.textAlign = "center";
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Get Ready!", canvas.width/2, canvas.height/2 -60);
		ctx.fillText(countDownValue, canvas.width/2, canvas.height/2);
		sleep(1000);
		countDownValue--; 

		myBall = new makeBall();
		myBall.dx = 2;
		myBall.dy = -2;
		ballNum = 1; 

		if(countDownValue == -1){
			getReady = false;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			console.log(getReady);
		}
	}
}

function loadOptions(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//console.log("loadCredits");
	ctx.font = "30px Arial";
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "center";
	ctx.fillText("Options", canvas.width/2, 50);

	ctx.font = "25px Arial";
	ctx.textAlign = "left";
	ctx.fillText("Input:", 50, 150);
	ctx.fillText("Left: A and Left Arrow", 100, 200);
	ctx.fillText("Right: D and Right Arrow", 100, 250);
	ctx.fillText("Menu: esc", 100, 300);
}


function loadCredits(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//console.log("loadCredits");
	ctx.font = "30px Arial";
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "center";
	ctx.fillText("Game by Brian Falor", canvas.width/2, 50);

	ctx.font = "25px Arial";
	ctx.textAlign = "left";
	ctx.fillText("HTML Background Image From Megaman 2", 50, 150);
	ctx.fillText("Canvas Background Image From Gyruss", 50, 200);
	ctx.fillText("Special Thanks to W3Schools", 50, 250);
	ctx.fillText("And to MDN WebDocs", 50, 300);
}


function loadScores(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//console.log("loadScores");	
	ctx.font = "30px Arial";
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "center";
	ctx.fillText("High Scores", canvas.width/2, 50);

	ctx.font = "20px Arial";
	ctx.textAlign = "left";
	var stored = localStorage['highScore'];
	if(stored){ 
		myVar = JSON.parse(stored);
	}
	else{
		myVar = "No Recorded Scores";
	}
	ctx.fillText(myVar, 20, 100);
}


function sleep(delay) {
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay);
}


function saveScore(win){
	if(win){
		var player = prompt("You Win! \n Please Enter Your Name");
	}
	else{
		var player = prompt(" Game Over! \n Please Enter Your Name");
	}
	localStorage['highScore'] = JSON.stringify(player + " : " + playerScore);
}
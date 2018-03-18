//start for ball
var ballStartX = 488;
var ballStartY = 568;

var slow = 2.0;
var medium = 2.75;
var fast = 3.5;
var ultra = 4;


function makeBall() {
	this.x = paddleLocationX+38;
	this.y = paddleLocationY;
	this.dx = 0;
	this.dy = 0;
	this.radius = 5;
	this.speed = slow;
	this.color = "#f0f3f4";
	this.status = 1;


	 this.drawBall = function(){
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		
		if(this.status == 1){
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.closePath();
		}
	};


	this.ballPath = function(){
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
	
		//Bounce off top of screen
		if( this.y + this.dy < this.radius){
			this.dy = -this.dy;															 
		}
	
		if(this.y + this.dy < this.radius){
			this.dy = -this.dy;															 
		}
		else if(this.y + this.dy > canvas.height-this.radius-20){					//Collision with Paddle 


			if(this.x > paddleLocationX && this.x < paddleLocationX + (paddleWidth/5)){ //Left side of paddle
				this.dy = -this.dy;
				this.dx = -2;
			}

			if(this.x > paddleLocationX + (paddleWidth/5) && this.x < paddleLocationX + (2*paddleWidth/5)){ //Middle Left of paddle
				this.dy = -this.dy;
				this.dx = -1; 
			}

			if(this.x > paddleLocationX + (2*paddleWidth/5) && this.x < paddleLocationX + (3*paddleWidth/5)){ //Center of paddle
				this.dy = -this.dy;
				this.dx = 0.2; 
			}

			if(this.x > paddleLocationX + (3*paddleWidth/5) && this.x < paddleLocationX + (4*paddleWidth/5)){ //Middle Right of paddle
				this.dy = -this.dy;
				this.dx = 1; 
			}

			if(this.x > paddleLocationX + (4*paddleWidth/5) && this.x < paddleLocationX + paddleWidth){ //Right side of paddle
				this.dy = -this.dy;
				this.dx = 2; 
			}

			//Ball falls through floor
			 if (this.y + this.dy > canvas.height+(this.radius*2)){
				ballNum--;
				this.status = 0;
				this.x = 450;
				this.y = 450;
				this.dy = 0;
				this.dx = 0;

				if(ballNum == 0){	
					died();
				}
			}
		}
	
		//Bounce off left and right walls
		if(this.x + this.dx > canvas.width-this.radius || this.x + this.dx < this.radius){
			this.dx = -this.dx;														//reverse x direction
		}
	
		//Controlls for paddle movement
		if(rightKey && paddleLocationX < canvas.width-paddleWidth){
			paddleLocationX += paddleSpeed;
			//console.log(paddleSpeed);
		}
		else if(leftKey && paddleLocationX > 0){
			paddleLocationX -= paddleSpeed;
			//console.log(paddleSpeed);
		}
	
		this.x += (this.dx*this.speed);
		this.y += (this.dy*this.speed);
	};


	this.getSpeed = function(){
		if(brickCount > 3){
			this.speed = slow; 
			paddleSpeed = 7;
		}
		
		if(brickCount > 12){
			this.speed = medium; 
			paddleSpeed = 8; 
		}
	
		if(brickCount > 36){
			this.speed = fast; 
			paddleSpeed = 8.5;
		}
	
		if(brickCount > 62){
			this.speed = ultra; 
			paddleSpeed = 9; 
		}
	
		//console.log(brickCount);
		return this.speed;
	}

	this.collisionDetection = function(){
		for(col = 0; col < brickColumnCount; col++){
			for(row = 0; row < brickRowCount; row++){
				var b = bricks[col][row];
				if(b.status == 1){
					if(this.x > b.x && this.x < b.x+brickWidth && this.y > b.y && this.y < b.y+brickHeight && this.status == 1){
						this.dy = -this.dy;
						b.status = 0; //Turn status off so it doesn't get drawn again
						b.explode = 1;
						totalBricks--;
						brickCount++;

						switch(row){
							case 0: //green
								playerScore += 5;
								roundScore += 5; 
								row_0++;
								if(row_0 == 13){
									playerScore += 25;
									roundScore += 25;
								}
	
								if(shrink == false){    //shrink paddle if top green block is broke.
									shrink = true;
								}
							break;
	
							case 1:
								playerScore += 5; 
								roundScore += 5; 
								row_1++;
								if(row_1 == 13){
									playerScore += 25;
									roundScore += 25;
								}
							break;
	
							case 2: //blue
								playerScore += 3;
								roundScore += 3;
								row_2++;
								if(row_2 == 13){
									playerScore += 25;
									roundScore += 25;
								}
							break;
	
	
							case 3: //blue
								playerScore += 3;
								roundScore += 3;
								row_3++;
								if(row_3 == 13){
									playerScore += 25;
									roundScore += 25;
								}
							break;
	
	
							case 4: //orange
								playerScore += 2;
								roundScore += 2;
								row_4++;
								if(row_4 == 13){
									playerScore += 25;
									roundScore += 25;
								}
							break;
	
	
							case 5: //orange
								playerScore += 2;
								roundScore += 2;
								row_5++;
								if(row_5 == 13){
									playerScore += 25;
									roundScore += 25;
								}
							break;
	
	
							case 6: //yellow
								playerScore += 1;
								roundScore += 1;
								row_6++;
								if(row_6 == 13){ 
									playerScore += 25;
									roundScore += 25;
								}
							break;
	
	
							case 7: //yellow
								playerScore += 1;
								roundScore += 1;
								row_7++;
								if(row_7 == 13){ 
									playerScore += 25;
									roundScore += 25;
								}
							break;
						}
	
						if(totalBricks == 0){
							saveScore(1); 
							document.location.reload();
						}
					}
				}
			}
		}
	}
};


function died(){
	//console.log("died called");
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	if(myBall){
		myBall.x = 300;
		myBall.y = 300;
		myBall.dy = 0;
		myBall.dx = 0;
		myBall.status = 0;
		delete myBall;
	}
	if(myBall2){
		myBall2.x = 300;
		myBall2.y = 300;
		myBall2.dy = 0;
		myBall2.dx = 0;
		myBall2.status = 0;
		delete myBall2;
	}
	if(myBall3){
		myBall3.x = 300;
		myBall3.y = 300;
		myBall3.dy = 0;
		myBall3.dx = 0;
		myBall3.status = 0;
		delete myBall3;
	}

	shrink = false; 
	getReady = true;
	paddleWidth = 115; 
	numberOfLives--;
	brickCount = 0;
	roundScore = 0;
	ballNum = 1;
	
	paddleLocationX = paddleStartX;
	paddleLocationY = paddleStartY;
	paddleSpeed = 6;

	if(numberOfLives < 1){
		saveScore(0); //send 0 because of loose
		reloadGame();
	}
}
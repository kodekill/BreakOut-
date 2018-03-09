var brickPadding = 3;

var brickRowCount = 8;
var brickColumnCount = 14;

var brickWidth = 60;
var brickHeight = 15;

var brickOffsetTop = 100;
var brickOffsetLeft = 10;

var totalBricks = brickRowCount * brickColumnCount;
var brickCount = 0;
var bricks = [];
var shrink = false;

//Brick Colors
var color;
var yellow = "#cccc00"; 
var orange = "#cc7a00";
var blue   = "#000099"; 
var green  = "#006600";

var row_0 = 0;
var row_1 = 0;
var row_2 = 0;
var row_3 = 0;
var row_4 = 0;
var row_5 = 0;
var row_6 = 0;
var row_7 = 0; 


for(col = 0; col < brickColumnCount; col++){
    bricks[col] = [];
    for(row = 0; row < brickRowCount; row++){
        bricks[col][row] = { x: 0, y: 0, status: 1, explode: 0, exTime: 100};
    }
}


function drawBricks(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

    for(col = 0; col < brickColumnCount; col++){
        for(row = 0; row < brickRowCount; row++){
            if(bricks[col][row].status == 1){
                var brickX = (col*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (row*(brickHeight+brickPadding))+brickOffsetTop;

                bricks[col][row].x = brickX;
                bricks[col][row].y = brickY;

                ctx.beginPath();
                ctx.strokeStyle = "#000000";
                ctx.strokeRect(brickX, brickY, brickWidth, brickHeight);

                switch(row){
                    case 0:
                    case 1:
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = green;
                    ctx.fill();
                    ctx.closePath();
                    break;

                    case 2:
                    case 3:
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = blue;
                    ctx.fill();
                    ctx.closePath();
                    break;

                    case 4:
                    case 5:
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = orange;
                    ctx.fill();
                    ctx.closePath();
                    break;

                    case 6:
                    case 7:
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = yellow;
                    ctx.fill();
                    ctx.closePath();
                    break;
                }
            }
        }
    }
}


function drawExplosion(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var o;
    
    for(col = 0; col < brickColumnCount; col++){
        for(row = 0; row < brickRowCount; row++){
            var b = bricks[col][row];
            if(b.explode == 1 && b.exTime > 0){
                b.exTime--;
                o = b.exTime * 0.01;
                //console.log(o);

                var brickX = (col*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (row*(brickHeight+brickPadding))+brickOffsetTop + 25 -(b.exTime/4);

                bricks[col][row].x = brickX;
                bricks[col][row].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = 'rgba(255, 255, 255, ' + o + ')';
                ctx.fill();
                ctx.closePath();
            }

            if(b.exTime == 0){
                b.status = 0; 
            }
        }
    }
}

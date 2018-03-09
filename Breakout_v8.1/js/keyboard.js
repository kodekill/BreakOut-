//Keyboard codes
//https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

var leftKey = false;
var rightKey = false;
var spaceKey = false; 
var escKey = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e){
    if(e.keyCode == 39 || e.keyCode == 68){                  //Right
        //console.log("Right pressed");
        rightKey = true;
    }
    else if(e.keyCode == 37 || e.keyCode == 65){              //Left
        //console.log("Left pressed");
        leftKey = true;
    }
    else if(e.keyCode == 32){                                //Space
        //console.log("Space pressed");
        spaceKey = true;
    }
    else if(e.keyCode == 27){                                //Escape
        //console.log("Esc pressed");
        openNav();
        reloadGame();
        escKey = true;
    }

    
}

function keyUpHandler(e){
    if(e.keyCode == 39 || e.keyCode == 68){                 //Right release
        rightKey = false;
    }
    else if(e.keyCode == 37 || e.keyCode == 65){            //Left release
        leftKey = false;
    }
    else if(e.keyCode == 32){                               //Space release
        spaceKey = false; 
    }
    else if(e.keyCode == 27){                                //Escape
        escKey = false;
    }
}




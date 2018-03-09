var num; 
var myVar; 

function loadNewGame(){
    write();
    load();
}







function write(){
    var name = prompt("enter your name");

    saveState();
    localStorage.setItem(JSON.stringify(num), JSON.stringify(name));
                            //key                   //value
}




function saveState(){
    var attempts = localStorage.getItem(JSON.stringify(num));
    //console.log("attempts = " + attempts);

    if(attempts == null){
        //console.log("here");
        num = 0; 
    }

    else{
        myVar = JSON.parse(attempts);
        //console.log("myVar = " + myVar);
    }
    num++; 
    //console.log("num = " + num);
}





function load(){
    var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
    var space = 1;

    for(var i = 1; i < localStorage.length; i++){

        var stored = localStorage[i];

        if(stored){ 
    		myVar = JSON.parse(stored);
    	}

        ctx.font = "10px Arial";
        ctx.fillText(myVar, 0, (20*space));
        space++;
    }
}
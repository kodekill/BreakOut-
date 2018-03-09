//Default Scores if none exist in browser history
var person = {
    name: "Jeremy",
    score: 23
};

var person2 = {
    name: "Dustin",
    score: 19
};

var person3 = {
    name: "Gage",
    score: 25
};

var person4 = {
    name: "Kevin",
    score: 22
};

var person5 = {
    name: "Morgan",
    score: 25
};

var objArray = [];


function sortScores(){
    objArray.sort(function(a,b){
        var scoreA = a.score;
        var scoreB = b.score;
        if(scoreA < scoreB){
            return 1;
        }
        if(scoreA > scoreB){
            return -1;
        }
        return 0;
    });
}



function loadLocalStorage(){
    var p1 = JSON.parse(localStorage.getItem("0"));
        if(p1 == null){
            p1 = person; 
        }

    var p2 = JSON.parse(localStorage.getItem("1"));
        if(p2 == null){
            p2 = person2; 
        } 

    var p3 = JSON.parse(localStorage.getItem("2"));
        if(p3 == null){
            p3 = person3; 
        }

    var p4 = JSON.parse(localStorage.getItem("3"));
        if(p4 == null){
            p4 = person4; 
        }

    var p5 = JSON.parse(localStorage.getItem("4"));
        if(p5 == null){
            p5 = person5; 
        }
    objArray = [p1, p2, p3, p4, p5];
    sortScores();  
}



function resetScores(){
    //console.log("resetScores");
    p1 = {
        name: " ",
        score: 0
    };

    p2 = {
        name: " ",
        score: 0
    };

    p3 = {
        name: " ",
        score: 0
    };

    p4 = {
        name: " ",
        score: 0
    };

    p5 = {
        name: " ",
        score: 0
    };
    objArray = [p1, p2, p3, p4, p5];
    writeLocalStorage();
    loadScores();
}



function writeLocalStorage(){
   localStorage.setItem("0", JSON.stringify(objArray[0]));  
   localStorage.setItem("1", JSON.stringify(objArray[1]));
   localStorage.setItem("2", JSON.stringify(objArray[2]));
   localStorage.setItem("3", JSON.stringify(objArray[3]));
   localStorage.setItem("4", JSON.stringify(objArray[4]));
}



function display(){
    var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
    var space = 1;
    loadLocalStorage(); 

    for(var i = 0; i < 5; i++){
        ctx.font = "20px Arial";
        ctx.textAlign = "left"; 
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(i+1, 10, (80*space));
        ctx.fillText(":", 23, (80*space));
        ctx.fillText(objArray[i].name, 40, (80*space));
        ctx.fillText(objArray[i].score, 200, (80*space));
        space++;
    }
}
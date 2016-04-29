var welcomeBtn = document.getElementById('btnFront');

var welcomeScreen = document.getElementById('welcomeScreen');

var endLoading = document.getElementById('endLoading');

var x =  Math.floor(Math.random() * 360);
//var y =  Math.floor(Math.random() * 360);
//var z =  Math.floor(Math.random() * 360);

var textColor = [x, 0, 0];


//Creating Canvas
function setup(){
	var myCanvas = createCanvas(1000,500);
	myCanvas.parent('endLoading');


}

function draw(){
	textSize(150);
	textAlign(CENTER, CENTER);
	textFont("Helevetic");
	var welcome = "WELCOME";
	fill(textColor);
	text(welcome, canvas.width/2,  canvas.height/2);
	
}

//Function to make loading screen go away


function endingLoading (){
	endLoading.style.zIndex = "-100";
}



function entering(){
	welcomeScreen.className = 'enter';	
}


//event listeners

welcomeBtn.addEventListener('click', entering);

endLoading.addEventListener("animationend", endingLoading)



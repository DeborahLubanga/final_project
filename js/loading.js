var welcomeBtn = document.getElementById('btnFront');

var welcomeScreen = document.getElementById('welcomeScreen');

var endLoading = document.getElementById('endLoading');

var swoosh; 


var x =  Math.floor(Math.random() * 360);
//var y =  Math.floor(Math.random() * 360);
//var z =  Math.floor(Math.random() * 360);

var textColor = [x, 0, 0];

function preload(){
	swoosh = loadSound('sounds/draw_opening.mp3');
	
	//Sound Source: http://soundbible.com/613-Drawer-Opening.html
}


//Function to make loading screen go away


function endingLoading (){
	endLoading.style.zIndex = "-100";
}


function entering(){
	welcomeScreen.className = 'enter';	
	swoosh.play();
	}


	
//event listeners

endLoading.addEventListener("animationend", endingLoading);

welcomeBtn.addEventListener('click', entering);





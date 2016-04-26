var welcomeBtn = document.getElementById('welcomebutton');

var welcomeScreen = document.getElementById('welcomeScreen');

//Function to make it go away

function entering(){
	welcomeScreen.className = 'enter';	
}


//event listener

welcomeBtn.addEventListener('click', entering);



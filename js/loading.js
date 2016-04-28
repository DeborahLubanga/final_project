var welcomeBtn = document.getElementById('btnFront');

var welcomeScreen = document.getElementById('welcomeScreen');

var endLoading = document.getElementById('endLoading');

//Function to make it go away

function entering(){
	welcomeScreen.className = 'enter';	
}

function endingLoading (){
	endLoading.style.zIndex = "-100";
}


//event listener

welcomeBtn.addEventListener('click', entering);

endLoading.addEventListener("animationend", endingLoading)



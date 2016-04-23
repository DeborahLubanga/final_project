var welcomeBtn = document.getElementById('welcomeScreen');

//Function to make it go away

function entering(){
	welcomeBtn.className = 'enter';	
}


//event listener

welcomeBtn.addEventListener('click', entering);



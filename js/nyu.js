var nyuDiv = document.getElementById("topmiddle");

var nyuText = document.getElementById("N2016");

function colorChange(){
	var textColor = Math.floor(Math.random() * 360);
	
	nyuText.style.color = "hsl(" + textColor + ", 100%, 50%)";
}

nyuDiv.addEventListener('click', colorChange);
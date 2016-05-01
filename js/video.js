var clouds; 

function setup(){
	var myCanvas = createCanvas(430, 200);
	myCanvas.parent('bottommiddle2');
	
	clouds = createVideo('video/clouds2.mp4');
	clouds.loop();
	clouds.hide();
	
}

function draw(){
	background(255);
	image(clouds, 0, 0, 430, 200);
	
	if (mouseIsPressed){filter (OPAQUE);}
	else {filter(GRAY)};

		
	}

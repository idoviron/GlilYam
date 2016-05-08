function videoEnded() {
	//alert ('video ended');
	showAerialBG();
}

function buttonClicked() {
	//alert ('button clicked');
	showAerialBG();
}

function showAerialBG() {
	document.getElementById('splash_video').pause(); 
	document.getElementById('background_image').src = "images/aerialBG.jpg";
	document.getElementById('background_image').className = "animated fadeIn";
	setTimeout(function(){ document.getElementById('splash_video').innerHTML = ""}, 1000);
}

//setTimeout(function(){ document.getElementById('splash_video').play(); document.getElementById('background_image').className = "animated fadeOut";}, 3000);
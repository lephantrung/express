console.log("CONNECTED!");
var container = document.querySelector("#container");
var cell = document.querySelectorAll(".square_cell");
var newcolorbutton = document.querySelector("#newcolor");
var banner = document.querySelector(".jumbotron");
var notify = document.querySelector("#notify");
var level = document.querySelectorAll("#level");
var cellcolor = [];
var pickedColor;
var numCell = cell.length;

// Creat a pick aa random RGB color
newcolorbutton.addEventListener("click", newcolor);

for (i =0; i < level.length; i++) {
level[i].addEventListener("click", chooselevel);
}

newcolor();

// Add cell addEventListener
for (var i = 0; i < numCell; i++) {
	cell[i].addEventListener("click",guesscolor);
}

function chooselevel () {
	this.style.backgroundColor = "rgb(0, 255, 255)";
	if (this.innerText == "EASY") {
			console.log ("EASY");
			numCell = 3;
			cell[3].hidden = true;
			cell[4].hidden = true;
			cell[5].hidden = true;
			newcolor();
			level[1].style.backgroundColor = "white";
			level[1].style.hover = "rgb(0, 255, 255)";

		} else {
			console.log ("HARD");
			numCell = 6;
			cell[3].hidden = false;
			cell[4].hidden = false;
			cell[5].hidden = false;
			newcolor();
			level[0].style.backgroundColor = "white";
	}
}

function guesscolor () {
	console.log (this.textContent);
	if (this.style.backgroundColor == pickedColor) {
			// this.style.textContent = "You ar right! Congrate";
			this.style.backgroundColor = pickedColor;
			banner.style.backgroundColor = pickedColor;
			notify.innerText = "You win!";
			newcolorbutton.innerText = "Try again?"
			for (var i =0; i< cell.length; i++) {
				cell[i].style.backgroundColor = pickedColor;
			}
	}else {
		this.style.backgroundColor = "#232323";
		notify.innerText = "Try again!";
		this.style.color = "White";
	}

}

function newcolor() {
	console.clear();
	newcolorbutton.innerText = "New Color"  
	banner.style.backgroundColor = "rgb(0,150,150)";
	notify.innerText = "";
	for (var i = 0; i < numCell; i++) {
		cellcolor[i] = randomRgb();
		cell[i].style.backgroundColor = cellcolor[i];
		console.log ("cell" + i +": " + cellcolor[i]);
		}
	// Pick a color from cellcolor[] to guess
	pickedColor = cellcolor[Math.floor(Math.random() * numCell)];
	console.log ("to gues:" +pickedColor);
	document.querySelector("#guessColor").textContent = pickedColor;
	return pickedColor;
}

// Creat a random RGB color
function randomRgb () {
	var rgb =[0,0,0];
	rgb[0]=Math.floor(Math.random() * Math.floor(255));
	rgb[1]=Math.floor(Math.random() * Math.floor(255));
	rgb[2]=Math.floor(Math.random() * Math.floor(255));
	var rgbstring = "rgb" + "(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")"
return rgbstring;
}




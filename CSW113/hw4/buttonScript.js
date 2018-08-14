function start() {
	test();
	draw();
}


function test() {
		document.getElementById("jsInfo").innerHTML = "using buttonScript.js";
}

var jim = new Person("Java Jimmy", 104, 100, 100);
var sally = new Person("Sally Simpson", 89, 20, 86);

function Person(name, age, over, down) {
	this.name = name;
	this.age = age;
	this.over = over;
	this.down = down;

	this.isAtGoal = function isAtGoal() {
			if (this.over >= 100)
				return true;
			else
				return false;
		}

	this.draw = function draw(context) {
			context.fillStyle = "rgba(0, 200, 0, 0.5)";
			context.fillRect (this.over, this.down, 30, 30);
			context.fillText(this.name, this.over, this.down);

			context.beginPath();
			//Torso
			context.moveTo(this.over + 15, this.down + 25);
			context.lineTo(this.over + 15, this.down + 60);
			//Left Arm
			context.moveTo(this.over + 15, this.down + 40);
			context.lineTo(this.over + 5, this.down + 50);
			//Right Arm
			context.moveTo(this.over + 15, this.down + 40);
			context.lineTo(this.over + 25, this.down + 50);
			//Left Leg
			context.moveTo(this.over + 15, this.down + 60);
			context.lineTo(this.over + 5, this.down + 75);
			//Right Leg
			context.moveTo(this.over + 15, this.down + 60);
			context.lineTo(this.over + 25, this.down + 75);

			context.lineWidth = 2;
			context.stroke();
		}
}




function draw() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	//clear the entire canvas
	context.fillStyle = "rgb(222,222,222)";
	context.fillRect (0, 0, 1000, 1000);

	//draw a filled red rectangle
	context.fillStyle = "rgb(200,0,0)";
	context.fillRect (10, 10, 55, 50);

	sally.draw(context);
	jim.draw(context);
}

//**********Sally*********

function moveLeftS() {
	sally.over -= 10;
	document.getElementById("locationInfoXSally").innerHTML = "moveLeft to " + sally.over;
	draw();
}

function moveRightS() {
	sally.over += 10;
	document.getElementById("locationInfoXSally").innerHTML = "moveRight to " + sally.over;
	draw();
}

function moveUpS() {
	sally.down -= 10;
	document.getElementById("locationInfoYSally").innerHTML = "moveUp to " + sally.down;
	draw();
}

function moveDownS() {
	sally.down += 10;
	document.getElementById("locationInfoYSally").innerHTML = "moveDown to " + sally.down;
	draw();
}


//***********Jim***********

function moveLeftJ() {
	jim.over -= 10;
	document.getElementById("locationInfoXJim").innerHTML = "moveLeft to " + jim.over;
	draw();
}

function moveRightJ() {
	jim.over += 10;
	document.getElementById("locationInfoXJim").innerHTML = "moveRight to " + jim.over;
	draw();
}

function moveUpJ() {
	jim.down -= 10;
	document.getElementById("locationInfoYJim").innerHTML = "moveUp to " + jim.down;
	draw();
}

function moveDownJ() {
	jim.down += 10;
	document.getElementById("locationInfoYJim").innerHTML = "moveDown to " + jim.down;
	draw();
}

var redBtn = document.querySelector('button');
var blueBtn = document.querySelector('button');
var greenBtn = document.querySelector('button');

function drawRedBox()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

		context.beginPath();
		context.rect(20, 50, 60, 30);
		context.fillStyle = "#f00";
		context.fill();
	}
}

function drawBlueBox()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

		context.beginPath();
		context.rect(80, 100, 50, 20);
		context.fillStyle = "#00f";
		context.fill();
	}
}

function drawGreenBox()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

		context.beginPath();
		context.rect(10, 40, 30, 80);
		context.fillStyle = "#0f0";
		context.fill();
	}
}

function start()
{
	alert("Ready to have some fun?");
}
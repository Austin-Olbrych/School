

function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

		context.beginPath();
		context.rect(20, 50, 200, 100);
		context.fillStyle = "#00ff00";
		context.fill();
		context.lineWidth = 7;
		context.strokeStyle = "#882299";
		context.stroke();
	}
}


function test()
{
	document.getElementById("demo").innerHTML = "Welcome to Example 4";
	alert("We will now draw a nice green box");
	draw();
	document.getElementById("demo").innerHTML += "   --- and there is that nice green box";
}

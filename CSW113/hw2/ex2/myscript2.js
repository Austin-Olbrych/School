

function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

		context.beginPath();
		context.moveTo(20,20);
		context.lineTo(100,180);
		context.lineWidth = 10;
		context.strokeStyle = "#559295"
		context.stroke();
	}
}

function test()
{
	document.getElementById("demo").innerHTML = "Welcome to Example 2!";
	alert("We will now draw a nice teal line");
	draw();
	document.getElementById("demo").innerHTML += "   --- and there is that nice teal line!";
}

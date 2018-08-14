

function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

		context.beginPath();
      context.moveTo(50, 130);
      context.bezierCurveTo(140, 10, 388, 10, 388, 170);
      context.lineWidth = 10;

      context.strokeStyle = 'green';
      context.stroke();
	}
}


function test()
{
	document.getElementById("demo").innerHTML = "Welcome to Example 1!";
	alert("We will now draw a nice green curve.");
	draw();
	document.getElementById("demo").innerHTML += "   --- and there is that nice green curve!";
}

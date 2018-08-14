

function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");
		var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'red';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
	}
}


function test()
{
	document.getElementById("demo").innerHTML = "Welcome to Example 3";
	alert("We will now draw a nice red circle.");
	draw();
	document.getElementById("demo").innerHTML += "   --- and there is that nice red circle";
}

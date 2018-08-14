function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

			context.fillStyle = "rgb(90,90,90)";
			context.fillRect(5, 5, 500, 500);

		  context.fillStyle = "rgb(150,30,100)";
			context.fillRect(50, 200, 350, 100);
			context.fillRect(100, 125, 225, 100);

			context.beginPath();
				context.moveTo(325, 125);
				context.lineTo(325, 200);
				context.lineTo(400, 200);
				context.closePath();

				context.fillStyle = "rgb(80,229,229)";
				context.fillRect(250, 135, 60, 70);
				context.fillRect(150, 135, 60, 70);

				context.fillStyle = "#50e5e5";
				context.fill();

			context.beginPath();
				context.moveTo(100, 125);
				context.lineTo(100, 200);
				context.lineTo(50, 200);
				context.closePath();

				context.fillStyle = "#50e5e5";
				context.fill();

			context.beginPath();
				context.arc(125, 300, 30, 0, 2 * Math.PI, false);
				context.arc(325, 300, 30, 0, 2 * Math.PI, false);
				context.fillStyle = 'rgb(0,0,0)';
				context.fill();

				context.fillStyle = "rgb(0,0,0)";
				context.fillRect(400, 250, 10, 30);

			context.beginPath();
				context.moveTo(410, 250);
				context.lineTo(500, 150);
				context.lineTo(500, 300);
				context.lineTo(410, 280);
				context.closePath();

				context.fillStyle = "#ffffff";
				context.fill();
	}
}

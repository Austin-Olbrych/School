function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

			context.fillStyle = "rgb(90,90,90)";
			context.fillRect(5, 5, 500, 500);

			context.fillStyle = 'rgb(0,0,200)';
			context.arc(250, 350, 90, 0, 2 * Math.PI, false);
			context.fill();

			context.fillStyle = "rgb(98,54,17)";
			context.fillRect(100, 200, 50, 300);
			context.fillRect(400, 200, 50, 300);

		context.beginPath();
			context.fillStyle = 'rgb(54,117,24)';
			context.arc(90, 180, 40, 0, 2 * Math.PI, false);

			context.arc(125, 130, 40, 0, 2 * Math.PI, false);

			context.arc(160, 180, 40, 0, 2 * Math.PI, false);
			context.fill();

			context.beginPath();
				context.fillStyle = 'rgb(54,117,24)';
				context.arc(390, 180, 40, 0, 2 * Math.PI, false);

				context.arc(425, 130, 40, 0, 2 * Math.PI, false);

				context.arc(460, 180, 40, 0, 2 * Math.PI, false);
				context.fill();

			context.beginPath();
				context.fillStyle = "rgb(250,250,0)";
				context.arc(250, 350, 20, 0, 2 * Math.PI, false);
				context.moveTo(265, 350);
				context.lineTo(295, 325);
				context.lineTo(295, 375);
				context.fill();
	}
}

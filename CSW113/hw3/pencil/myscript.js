function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

			context.fillStyle = "rgb(90,90,90)";
			context.fillRect(5, 5, 500, 500);

			context.fillStyle = "rgb(250,250,90)";
			context.fillRect(200, 50, 50, 300);

      context.fillStyle = "rgb(250, 0, 90)";
			context.fillRect(200, 50, 50, 50);

			context.fillStyle = "rgb(154, 154, 154)";
			context.fillRect(200, 85, 50, 15);

			context.beginPath();
				context.moveTo(200, 350);
				context.lineTo(250, 350);
				context.lineTo(226, 400);
				context.closePath();

				context.fillStyle = "#d6ac70";
				context.fill();

			context.beginPath();
				context.moveTo(222, 393);
				context.lineTo(230, 393);
				context.lineTo(226, 400);
				context.closePath();

				context.fillStyle = "#000000";
				context.fill();

			context.beginPath();
				context.moveTo(215, 100);
				context.lineTo(215, 350);
				context.lineWidth = 2;
				context.strokeStyle = '#000000';
				context.stroke();

			context.beginPath();
				context.moveTo(235, 100);
				context.lineTo(235, 350);
				context.lineWidth = 2;
				context.strokeStyle = '#000000';
				context.stroke();
	}
}

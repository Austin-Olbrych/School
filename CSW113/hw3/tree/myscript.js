function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");

			context.fillStyle = "rgb(90,90,90)";
			context.fillRect(5, 5, 500, 500);

      context.fillStyle = "rgb(98,54,17)";
			context.fillRect(200, 200, 50, 300);

			context.fillStyle = 'rgb(54,117,24)';
			context.arc(190, 180, 40, 0, 2 * Math.PI, false);

			context.arc(225, 130, 40, 0, 2 * Math.PI, false);

			context.arc(260, 180, 40, 0, 2 * Math.PI, false);
			context.fill();
	}
}

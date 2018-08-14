function draw()
{
	var canvas = document.getElementById("canvas");
	if (canvas.getContext)
	{
		var context = canvas.getContext("2d");


      context.fillStyle = "rgb(90,90,90)";
			context.fillRect(5, 5, 500, 500);

			context.fillStyle = "rgb(0,30,200)";
			context.fillRect(100, 300, 300, 200);

			context.fillStyle = "rgb(200,30,30)";
			context.fillRect(150, 350, 50, 50);
			context.fillRect(300, 400, 50, 100);

			context.beginPath();
			context.moveTo(90,300);
			context.lineTo(410,300);
			context.lineTo(250,200);
			context.closePath();

			context.lineWidth = 10;
			context.strokeStyle = '#000000';
			context.stroke();
			
			context.fillStyle = '#00ff00';
			context.fill();

			context.beginPath();
			context.fillStyle = 'rgb(250,250,0)';
			context.arc(50, 50, 40, 0, 2 * Math.PI, false);
			context.fill();
	}
}

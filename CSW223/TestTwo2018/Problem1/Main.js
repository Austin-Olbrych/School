var _g_canvas;
var _g_context;

var _g_hat;

	function myInit()
	{
		_g_canvas = document.getElementById('myCanvas');
		_g_context = _g_canvas.getContext("2d");

		_g_hat = new TopHat(200, 100);

		draw();
	}

	function draw()
	{
		_g_context.fillStyle = "#555";
		_g_context.fillRect(0,0,1000,1000);

		_g_hat.draw();
	}

	function showRabbit()
	{
		_g_hat.showRabbit();
		draw();
	}

	function hideRabbit()
	{
		_g_hat.hideRabbit();
		draw();
	}

function TopHat( theOver, theDown )
{
	var _over = theOver;
	var _down = theDown;
	var _showRabbit = false;

	this.draw = function draw()
	{
		if ( _showRabbit == true)
		{
			_g_context.fillStyle = "#000";
			_g_context.fillRect(_over-5,_down+10,40,50);
			_g_context.fillRect(_over-15,_down,60,10);


			_g_context.fillStyle = "#fff";
			_g_context.beginPath();
			_g_context.arc(_over+15,_down-20,20,0,2*Math.PI,true);
			_g_context.closePath();
			_g_context.fill();

			_g_context.beginPath();
			_g_context.arc(_over,_down-40,8,0,2*Math.PI,true);
			_g_context.closePath();
			_g_context.fill();
			_g_context.beginPath();
			_g_context.arc(_over+30,_down-40,8,0,2*Math.PI,true);
			_g_context.closePath();
			_g_context.fill();
		}else{
			_g_context.fillStyle = "#000";
			_g_context.fillRect(_over-5,_down+10,40,50);
			_g_context.fillRect(_over-15,_down,60,10);
		}


	}

	this.showRabbit = function showRabbit()
	{
		_showRabbit = true;
	}

	this.hideRabbit = function hideRabbit()
	{
		_showRabbit = false;
	}

}

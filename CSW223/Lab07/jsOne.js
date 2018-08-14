//global variables
var _g_canvas;
var _g_context;

var _g_ballTest;
var _g_count;

var _g_showOtherBall;
var _g_otherBall;


	function jsOneInit()
	{
		_g_canvas = document.getElementById('myCanvas');
		_g_context = _g_canvas.getContext("2d");
		
		
		_g_ballTest = new Ball("Ball 1",0,100,50);
		//alert("_g_ballTest.toString()   "+_g_ballTest.toString());
		
		_g_showOtherBall = false;
		_g_otherBall = new Ball("other",0,50,200);
		
		
		_g_count = 1;
		draw();
		//alert("end jsOneInit()");
		
		displayInfo("just testing scriptInfo display");
	}
	


	function displayInfo(theInfo)
	{
		//alert("testing");
		document.getElementById("scriptInfo").innerHTML =  theInfo;

	}
	
	function randomMove()
	{
		//alert("randomMove in jsOne");
		_g_ballTest.randomMove();
		draw();
	}
	
	function showOtherBall(booleanValue)
	{
	    _g_showOtherBall = booleanValue;
	    draw();
	}
	
	function draw()
	{
		_g_context.fillStyle = "rgb(100, 100, 255)";
		_g_context.fillRect(0,0,1000,1000);
	
		//_g_context.fillStyle = "rgb(255, 0, 0)";
		_g_context.fillStyle = "rgb(240, 240, 255)";
			
		
		_g_context.font="30px Arial";
		var message = "draw()  _g_count "+_g_count;
			
		_g_context.fillText(message, 50, 150);
			
		//_g_ballTest.over = _g_count;
		//alert("this.toString()   "+this.toString());
		
		_g_ballTest.draw(_g_context);
		//alert("draw() ");
		
		var countInfo = "draw()  _g_count "+_g_count;
		_g_count++;
		
		
		if (_g_showOtherBall)
		{
			_g_otherBall.draw(_g_context);
		}
		
		
	}
	
	function getLocationsOut()
	{
		//alert('getLocationsOut()');
		alert('_g_ballTest = ' + _g_ballTest.over + ' , ' + _g_ballTest.down);
		alert('_g_otherBall = ' + _g_otherBall.over + ' , ' + _g_otherBall.down);
	}
	
  
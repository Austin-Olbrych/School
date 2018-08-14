//global variables
var _g_canvas;
var _g_context;



var _g_cat1;
var _g_cat2;
var _g_cat3;


	function init()
	{
		_g_canvas = document.getElementById('myCanvas');
		_g_context = _g_canvas.getContext("2d");
		
		
		_g_cat1 = new Cat("Cat 1",0,20,20);
		_g_cat2 = new Cat("Cat 2",0,200,70);
		_g_cat3 = new Cat("Cat 3",0,200,200);
		draw();
	}
	
	function draw()
	{
		_g_context.fillStyle = "rgb(100, 100, 255)";
		_g_context.fillRect(0,0,1000,1000);
	
		_g_cat1.draw(_g_context);
		_g_cat2.draw(_g_context);
		_g_cat3.draw(_g_context);
	}
	

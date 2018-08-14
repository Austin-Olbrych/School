
//Show three MyBox objets and be able to click and drag them.
//When a Balloon is dropped in the red area it will
//grow taller by 10 pixels.

//Jim Klayder -- spring 2018


//global variables
var _g_canvas;
var _g_context;

var _g_thing_1, _g_thing_2, _g_thing_3;

var _g_currentThing;

var _g_redOver , _g_redDown , _g_redWidth , _g_redHeight;
var _g_blueOver , _g_blueDown , _g_blueWidth , _g_blueHeight;


	function myInit()
	{
		_g_canvas = document.getElementById('myCanvas');
		_g_context = _g_canvas.getContext("2d");
		
		_g_canvas.addEventListener("mousedown",doMouseDown,false);
		_g_canvas.addEventListener("mouseup",doMouseUp,false);
		_g_canvas.addEventListener("mousemove",doMouseMove,false);
		
		_g_thing_1 = new MyBox(50,20,"red");
		_g_thing_2 = new MyBox(150,20,"yellow");
		_g_thing_3 = new MyBox(250,20,"orange");
		
		_g_currentThing = null;
		
		_g_redOver = 50; _g_redDown = 100; _g_redWidth = 100; _g_redHeight = 200;
		_g_blueOver = 250; _g_blueDown = 100; _g_blueWidth = 100; _g_blueHeight = 200;
		
		draw();
		
		//alert("end myInit()");
	}
	
	
	function draw()
	{
		_g_context.fillStyle = "rgb(200, 200, 255)";
		_g_context.fillRect(0,0,1000,1000);
		
		
		//this is the green area that will cause objects to "grow"
		_g_context.fillStyle = "rgb(200, 255, 200)";
		_g_context.fillRect(_g_redOver , _g_redDown , _g_redWidth , _g_redHeight);
		
		//this is the red area that will cause objects to "shrink"
		_g_context.fillStyle = "rgb(255, 200, 200)";
		_g_context.fillRect(_g_blueOver , _g_blueDown , _g_blueWidth , _g_blueHeight);
		
		_g_thing_1.draw(_g_context);
		_g_thing_2.draw(_g_context);
	    _g_thing_3.draw(_g_context);
		
		//make sure that currentThing is drawn last
		if ( _g_currentThing != null )
		{
			_g_currentThing.draw(_g_context);
		}
	}
	
	
	//get mouse position within the _g_canvas
	//no matter where the _g_canvas is on the web page
	//http://stackoverflow.com/questions/17130395/_g_canvas-html5-real-mouse-position
	//Klayder added "Math.round"
	function getMousePos(_g_canvas, evt) {
		var rect = _g_canvas.getBoundingClientRect();
		return {
		    x: Math.round((evt.clientX - rect.left) / (rect.right - rect.left) * _g_canvas.width),
		    y: Math.round((evt.clientY - rect.top) / (rect.bottom - rect.top) * _g_canvas.height)
		};
	}
	
	function doMouseUp(event)
	{
		//alert("doMouseUp");
		if ( _g_currentThing != null )
		{
			//alert("_g_currentThing != null "+currentThing.over);
			
			//check to see if _g_currentThing should "grow"
			if (_g_currentThing.over > _g_redOver && _g_currentThing.over < _g_redOver + _g_redWidth
			&&  _g_currentThing.down > _g_redDown && _g_currentThing.down < _g_redDown + _g_redHeight)
			{
				//alert("hit to grow");
				_g_currentThing.grow();
			}else
			{
				//alert("no hit");
			}
			
			//check to see if _g_currentThing should "shrink"
			if (_g_currentThing.over > _g_blueOver && _g_currentThing.over < _g_blueOver + _g_blueWidth
			&&  _g_currentThing.down > _g_blueDown && _g_currentThing.down < _g_blueDown + _g_blueHeight)
			{
				//alert("hit to shrink");
				_g_currentThing.shrink();
			}else
			{
				//alert("no hit");
			}
		}
		
		_g_currentThing = null;
		draw();
	}
		
	function doMouseMove(event)
	{
		//alert("doMouseMove");
		if ( _g_currentThing != null )
		{
			var pos = getMousePos(_g_canvas, event);
			_g_currentThing.setLocation(pos);
			draw();
		}
	}
	
	function doMouseDown(event)
	{
		var pos = getMousePos(_g_canvas, event);
		//alert("doMouseDown    pos ---  "+pos.x+", "+pos.y);
		
		var isHit = _g_thing_1.hitTest(pos);
		
		if (isHit)
		{
			_g_currentThing = _g_thing_1;
		}
		
		isHit = _g_thing_2.hitTest(pos);
		
		if (isHit)
		{
			_g_currentThing = _g_thing_2;
		}
		
		isHit = _g_thing_3.hitTest(pos);
		
		if (isHit)
		{
			_g_currentThing = _g_thing_3;
		}
		draw();	
		
	}



  
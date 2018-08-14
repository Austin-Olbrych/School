//global variables
var _g_canvas;
var _g_context;

var _g_ballTest;
var _g_count;

var _g_showOtherBall;
var _g_showOpenHouse;
var _g_otherBall;

var _g_houseTest;
var _g_openHouse;

var _g_testBulb;
var _g_testOn;
var _g_testBulbOn;
var _g_testBulb2;
var _g_testOn2;
var _g_testBulbOn2;
var _g_testBulb3;
var _g_testOn3;
var _g_testBulbOn3;


	function jsOneInit()
	{
		_g_canvas = document.getElementById('myCanvas');
		_g_context = _g_canvas.getContext("2d");
		
		_g_canvas.addEventListener("mousedown",doMouseDown,false);
		_g_canvas.addEventListener("mousemove",doMouseMove,false);
		_g_canvas.addEventListener("mouseup",doMouseUp,false);
		_g_canvas.addEventListener("mouseover",doMouseOver,false);
		_g_canvas.addEventListener("mouseout",doMouseOut,false);
		
		_g_ballTest = new Ball("Ball 1",0,100,50);
		//alert("_g_ballTest.toString()   "+_g_ballTest.toString());
		_g_houseTest = new House(0, 200, 200, false);//New houseTest
		
		//Light bulbs ***************
		_g_testBulb = new LightBulb(0, 200, 50, false);//New LightBulb off
		_g_testOn = false;
		_g_testBulbOn = new LightBulb(0, 200, 50, true);//New LightBulb on
		_g_testBulb2 = new LightBulb(0, 250, 60, false);//New LightBulb2 off
		_g_testOn2 = false;
		_g_testBulbOn2 = new LightBulb(0, 250, 60, true);//New LightBulb2 on
		_g_testBulb3 = new LightBulb(0, 300, 70, false);//New LightBulb3 off
		_g_testOn3 = false;
		_g_testBulbOn3 = new LightBulb(0, 300, 70, true);//New LightBulb3 on
		// *****************************
		_g_showOtherBall = false;
		_g_showOpenHouse = false;
		
		_g_otherBall = new Ball("other",0,50,200);
		_g_openHouse = new House (0, 200, 200, true);
		
		displayInfo("using external <a href='lab_files/jsOne.js'>jsOne.js</a>,  <a href='lab_files/Ball.js'>Ball.js</a>, and  <a href='lab_files/MyClickArea.js'>MyClickArea.js</a>");	
		
		_g_count = 1;
		draw();
		//alert("end jsOneInit()");
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
		
		_g_ballTest.draw();
		_g_houseTest.draw(); //Draw House
		//*********************
		_g_testBulb.draw(); //Draw Test Bulb
		_g_testBulb2.draw(); //Draw Test Bulb
		_g_testBulb3.draw(); //Draw Test Bulb
		//alert("draw() ");
		
		var countInfo = "draw()  _g_count "+_g_count;
		_g_count++;
		
		document.getElementById("countInfo").innerHTML =  countInfo;
		
		if (_g_showOtherBall)
		{
			_g_otherBall.draw();
		}
		if ( _g_showOpenHouse){
			_g_openHouse.draw();
		}
		if ( _g_testOn){
			_g_testBulbOn.draw();
		}
		if ( _g_testOn2){
			_g_testBulbOn2.draw();
		}
		if ( _g_testOn3){
			_g_testBulbOn3.draw();
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
	
	function doMouseDown(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var ballIsHit = _g_ballTest.hitTest(pos);
		
		var pos1 = getMousePos(_g_canvas, event);
		var houseIsHit = _g_houseTest.hitTest(pos1);
		
		var posBulb1 = getMousePos(_g_canvas, event);
		var bulb1Hit = _g_testBulb.hitTest(posBulb1);
		
		var posBulb2 = getMousePos(_g_canvas, event);
		var bulb2Hit = _g_testBulb2.hitTest(posBulb2);
		
		var posBulb3 = getMousePos(_g_canvas, event);
		var bulb3Hit = _g_testBulb3.hitTest(posBulb3);
		
		var mouseDownInfo = "mouseDownInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseDownInfo").innerHTML =  mouseDownInfo;		
		
		var mouseDownInfoBall = "mouseDownInfoBall    ballIsHit "+ballIsHit;
		document.getElementById("mouseDownInfoBall").innerHTML =  mouseDownInfoBall;	

		var mouseDownInfo = "mouseDownInfo pos1.x "+pos1.x+"     pos1.y "+pos1.y;
		document.getElementById("mouseDownInfo").innerHTML =  mouseDownInfo;		
		
		var mouseDownInfoBall = "mouseDownInfoBall    houseIsHit "+houseIsHit;
		document.getElementById("mouseDownInfoBall").innerHTML =  mouseDownInfoBall;		
		
		
		
		if (ballIsHit)
		{
			//alert("ballIsHit");
			
			
			//toggle _g_showOtherBall
			if (_g_showOtherBall == true)
			{	
				_g_showOtherBall = false;
			}else
			{
				_g_showOtherBall = true;
			}
			
			
			//  _g_showOtherBall = !_g_showOtherBall;  //alternative way to toggle _g_showOtherBall
		}
		
		if (houseIsHit){
			if (_g_showOpenHouse == true)
			{	
				_g_showOpenHouse = false;
			}else
			{
				_g_showOpenHouse = true;
			}
		}
		
		if (bulb1Hit){
			//alert('Bulb1Hit if statement');
			if (_g_testOn == true){
				_g_testOn = false
			} else{
				_g_testOn = true;
			}
		}
		
		if (bulb2Hit){
			//alert('Bulb2Hit if statement');
			if (_g_testOn2 == true){
				_g_testOn2 = false
			} else{
				_g_testOn2 = true;
			}
		}
		
		if (bulb3Hit){
			//alert('Bulb3Hit if statement');
			if (_g_testOn3 == true){
				_g_testOn3 = false
			} else{
				_g_testOn3 = true;
			}
		}
		
		draw();	
		
	}

	function doMouseMove(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var ballIsHit = _g_ballTest.hitTest(pos);
	
		var mouseMoveInfo = "mouseMoveInfo pos.x "+pos.x+"     pos.y "+pos.y+"     ballIsHit "+ballIsHit;
		document.getElementById("mouseMoveInfo").innerHTML =  mouseMoveInfo;	
		
		var mouseMoveInfoBall = "mouseMoveInfoBall     ballIsHit "+ballIsHit;
		document.getElementById("mouseMoveInfoBall").innerHTML =  mouseMoveInfoBall;	
	
	
		draw();	
			
	}

	function doMouseUp(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var ballIsHit = _g_ballTest.hitTest(pos);
		
		var mouseUpInfo = "mouseUpInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseUpInfo").innerHTML =  mouseUpInfo;
		
		var mouseUpInfoBall = "mouseUpInfoBall    ballIsHit "+ballIsHit;
		document.getElementById("mouseUpInfoBall").innerHTML =  mouseUpInfoBall;	
		
		//_g_draggingState = "none";
		//document.getElementById("mouseDraggingInfo").innerHTML =  _g_draggingState;
	}

	function doMouseOver(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var info = "mouseOverInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseOverInfo").innerHTML =  info;		
	}

	function doMouseOut(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var info = "mouseOutInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseOutInfo").innerHTML =  info;		
	}

	function displayInfo(theInfo)
	{
		//alert("testing");
		document.getElementById("scriptInfo").innerHTML =  theInfo;

	}

  
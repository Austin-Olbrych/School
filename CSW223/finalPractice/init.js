
//a Moon that can either be full or crescent

//Jim Klayder -- spring 2018


//global variables
var _g_canvas;
var _g_context;

var planes = [];

var over = 10;
var down = 20;


	function init()
	{
		//alert("myInit()");
		_g_canvas = document.getElementById('myCanvas');
		_g_context = _g_canvas.getContext("2d");

		planes.push(new Airplane("1", 0, over, down));
		over += 30;
		down += 20;

		planes.push(new Airplane("1", 0, over, down));
		over += 30;
		down += 20;

		planes.push(new Airplane("1", 0, over, down));
		over += 30;
		down += 20;

		draw();
	}

	function draw()
	{
		_g_context.fillStyle = "#000";
		_g_context.fillRect(0, 0, 1000, 1000);

		for (var i=0; i<planes.length; i++) {
			planes[i].draw(_g_context);
		}

	}

	function addNewPlane() {
		planes.push(new Airplane("1", 0, over, down));
		over += 30;
		down += 30;
		draw();
	}

	function doShowFlame() {
		for (var i=0; i<planes.length; i++) {
			//planes[i].doShowFlame();
			planes[i].showFlame = true;
		}
		draw();
	}

	function doNotShowFlame() {
		for (var i=0; i<planes.length; i++) {
			planes[i].doNotShowFlame();
		}
		draw();
	}

	function move() {
		for (var i=0; i<planes.length; i++) {
			planes[i].move();
		}
		draw();
		over += 10;
	}

	function changeColor() {
		for (var i=0; i<planes.length; i++) {
			planes[i].changeColor();
		}
		draw();
	}
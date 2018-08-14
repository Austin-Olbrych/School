function quiz1_init(){
	var _g_canvas;
	var _g_context;
	alert("Austin");
}

function quiz1button2(){
	alert("quiz1button2 function started");
	
	_g_canvas = document.getElementById("myCanvas");
    _g_context = _g_canvas.getContext("2d");
	
	_g_context.beginPath();
	_g_context.rect(0, 0, 1000, 1000);
	_g_context.fillStyle = "#0f0";
	_g_context.fill();
	
	_g_context.beginPath();
	_g_context.rect(190, 190, 20, 20);
	_g_context.fillStyle = "#f00";
	_g_context.fill();
}

function quiz1button3(int num){
	alert("quiz1button3 function started");
	
	_g_canvas = document.getElementById("myCanvas");
    _g_context = _g_canvas.getContext("2d");
	
	var i;
	for (i = 0, i < num, i ++){
		_g_context.beginPath();
		_g_context.rect(11 * i, 10, 10, 10);
		_g_context.fillStyle = "#00f";
		_g_context.fill();
	}
}
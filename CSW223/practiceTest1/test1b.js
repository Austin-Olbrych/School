var _g_canvas;
var _g_context;

function init(){
	_g_canvas = document.getElementById("theCanvas");
	_g_context = _g_canvas.getContext("2d");
	
	_g_context.fillStyle = '#f00';
	_g_context.fillRect(0,0,500,500);

	_g_context.fillStyle = '#00f';
	_g_context.fillRect(330,300,100,100);
}			
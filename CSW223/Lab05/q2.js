var _g_canvas;
var _g_context;

function init()
{
	_g_canvas = document.getElementById("canvas2");
	_g_context = _g_canvas.getContext("2d");
	
	_g_context.fillStyle = "#afa"
	_g_context.fillRect(0,0,400,200);
	
	alert("computer");
}

function doButton2()
{
	_g_context.fillStyle = "#0f0";
	_g_context.fillRect(0,0,1000,1000);
	
	_g_context.fillStyle = "#00f";
	_g_context.fillRect(0,0,20,20);
}

function showBox(x,y)
{
	_g_context.fillStyle = "#f00";
	_g_context.fillRect(0,0,1000,1000);
	
	_g_context.fillStyle = "#00f";
	_g_context.fillRect(x,y,20,20);	
}	

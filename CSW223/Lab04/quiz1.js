var _g_canvas;
var _g_context;

function init()
{
	alert("foot");
	
	_g_canvas = document.getElementById("theCanvas");
	_g_context = _g_canvas.getContext("2d");
}

function doButton2()
{
	_g_context.fillStyle = "#f00";
	_g_context.fillRect(0,0,1000,1000);
	
	_g_context.fillStyle = "#0f0";
	_g_context.fillRect(0,0,20,20);
}

function showBox(x,y)
{
	_g_context.fillStyle = "#0f0";
	_g_context.fillRect(0,0,1000,1000);
	
	_g_context.fillStyle = "#00f";
	_g_context.fillRect(x,y,20,20);	
}	

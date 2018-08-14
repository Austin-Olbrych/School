var _g_canvas;
var _g_context;

var over;
var down;

function init(over,down)
{
	this.over = over;
	this.down = down;
	
	_g_canvas = document.getElementById("myCanvas");
	_g_context = _g_canvas.getContext("2d");
	
	_g_context.fillStyle = '#0f0';
	_g_context.fillRect(0,0,400,300);

	_g_context.fillStyle = '#500';
	_g_context.fillRect(over,down,50,50);
}			

function moveLeft()
{
	_g_context.fillStyle = '#0f0';
	_g_context.fillRect(0,0,400,300);
	
	_g_context.fillStyle = '#500';
	_g_context.fillRect(over -= 10,down,50,50);
}

function moveRight()
{
	_g_context.fillStyle = '#0f0';
	_g_context.fillRect(0,0,400,300);
	
	_g_context.fillStyle = '#500';
	_g_context.fillRect(over += 10,down,50,50);
}

function moveDown()
{
	_g_context.fillStyle = '#0f0';
	_g_context.fillRect(0,0,400,300);
	
	_g_context.fillStyle = '#500';
	_g_context.fillRect(over,down += 10,50,50);
}

function moveUp()
{
	_g_context.fillStyle = '#0f0';
	_g_context.fillRect(0,0,400,300);
	
	_g_context.fillStyle = '#500';
	_g_context.fillRect(over,down -= 10,50,50);
}
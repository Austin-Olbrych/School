var _g_canvas;
var _g_context;
var _g_shapeColor;
var _g_backgroundColor;
var _g_drawnItem;

function init()
{
	_g_backgroundColor = "#a0a";
	_g_shapeColor = "#eee";
	
	_g_canvas = document.getElementById("theCanvas");
	_g_context = _g_canvas.getContext("2d");

	_g_context.fillStyle = _g_backgroundColor;
	_g_context.fillRect(0,0,500,500);

	document.getElementById("myShape").innerHTML = _g_drawnItem;
	document.getElementById("myShapeColor").innerHTML = _g_shapeColor;
	document.getElementById("myBackgroundColor").innerHTML = _g_backgroundColor;
}

function drawCircle()
{
	_g_context.fillStyle = _g_backgroundColor;
	_g_context.fillRect(0,0,500,500);
	
	_g_context.fillStyle = _g_shapeColor;
	_g_context.beginPath();
	_g_context.arc(100,75,50,0,2*Math.PI);
	_g_context.stroke();
	_g_context.fill();
	
	_g_drawnItem = 'Circle';
	document.getElementById("myShape").innerHTML = _g_drawnItem;
}

function drawSquare()
{
	_g_context.fillStyle = _g_backgroundColor;
	_g_context.fillRect(0,0,500,500);
	
	_g_context.fillStyle = _g_shapeColor;
	_g_context.fillRect(330,300,100,100);
	
	_g_drawnItem = 'Square';
	document.getElementById("myShape").innerHTML = _g_drawnItem;
}	

function drawRectangle()
{
	_g_context.fillStyle = _g_backgroundColor;
	_g_context.fillRect(0,0,500,500);
	
	_g_context.fillStyle = _g_shapeColor;
	_g_context.fillRect(50,200,50,150);
	
	_g_drawnItem = 'Rectangle';
	document.getElementById("myShape").innerHTML = _g_drawnItem;
}

function drawHeart()
{
	_g_context.fillStyle = _g_backgroundColor;
	_g_context.fillRect(0,0,500,500);
	
	_g_context.fillStyle = _g_shapeColor;
	_g_context.beginPath();
    _g_context.moveTo(75, 40);
    _g_context.bezierCurveTo(75, 37, 70, 25, 50, 25);
    _g_context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    _g_context.bezierCurveTo(20, 80, 40, 102, 75, 120);
    _g_context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    _g_context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    _g_context.bezierCurveTo(85, 25, 75, 37, 75, 40);
	_g_context.stroke();
    _g_context.fill();

	_g_drawnItem = 'Heart';
	document.getElementById("myShape").innerHTML = _g_drawnItem;
}

function drawGhost()
{
	_g_context.fillStyle = _g_backgroundColor;
	_g_context.fillRect(0,0,500,500);
	
	_g_context.fillStyle = _g_shapeColor;
	_g_context.beginPath();
	_g_context.arc(250,250,50,1*Math.PI,0);
	_g_context.fillRect(200,250,100,50);
	_g_context.moveTo(200,300);
	_g_context.lineTo(200,325);
	_g_context.lineTo(225,300);
	_g_context.stroke();
	_g_context.moveTo(225,300);
	_g_context.lineTo(250,325);
	_g_context.lineTo(250,300);
	_g_context.stroke();
	_g_context.moveTo(250,300);
	_g_context.lineTo(250,325);
	_g_context.lineTo(275,300);
	_g_context.stroke();
	_g_context.moveTo(275,300);
	_g_context.lineTo(300,325);
	_g_context.lineTo(300,300);
	_g_context.stroke();
	_g_context.fill();
	_g_context.fillStyle = '#f00';
	_g_context.beginPath();
	_g_context.arc(235,230,5,0,2*Math.PI);
	_g_context.stroke();
	_g_context.fill();
	_g_context.beginPath();
	_g_context.arc(265,230,5,0,2*Math.PI);
	_g_context.stroke();
	_g_context.fill();
	
	_g_drawnItem = 'Ghost';
	document.getElementById("myShape").innerHTML = _g_drawnItem;
}

function drawHouse()
{
	_g_context.fillStyle = _g_backgroundColor;
	_g_context.fillRect(0,0,500,500);
	
	_g_context.fillStyle = _g_shapeColor;
	_g_context.beginPath();
	_g_context.moveTo(350,100);
	_g_context.lineTo(400,50);
	_g_context.lineTo(450,100);
	_g_context.closePath();
	_g_context.stroke();
	_g_context.fill();
	_g_context.fillRect(355,100,90,50);
	_g_context.fillStyle = '#000';
	_g_context.fillRect(370,110,10,15);
	_g_context.fillRect(400,125,15,25);
	
	_g_drawnItem = 'House';
	document.getElementById("myShape").innerHTML = _g_drawnItem;	
}

function drawnItem()
{
	if (_g_drawnItem == 'Circle')
	{
		drawCircle();
	} else if (_g_drawnItem == 'Square')
	{
		drawSquare();
	} else if (_g_drawnItem == 'Rectangle')
	{
		drawRectangle();
	}else if (_g_drawnItem == 'Heart')
	{
		drawHeart();
	}else if (_g_drawnItem == 'Ghost')
	{
		drawGhost();
	}else if (_g_drawnItem == 'House')
	{
		drawHouse();
	}
}

function backgroundRed()
{
	_g_context.fillStyle = "#f00";
	_g_context.fillRect(0,0,500,500);
	_g_backgroundColor = "#f00";
	
	drawnItem();
	document.getElementById("myBackgroundColor").innerHTML = _g_backgroundColor;
}

function backgroundGreen()
{
	_g_context.fillStyle = "#0f0";
	_g_context.fillRect(0,0,500,500);
	_g_backgroundColor = "#0f0";
	
	drawnItem();
	document.getElementById("myBackgroundColor").innerHTML = _g_backgroundColor;
}

function backgroundBlue()
{
	_g_context.fillStyle = "#00f";
	_g_context.fillRect(0,0,500,500);
	_g_backgroundColor = "#00f";
	
	drawnItem();
	document.getElementById("myBackgroundColor").innerHTML = _g_backgroundColor;
}

function shapeBlack()
{
	_g_shapeColor = '#000';
	
	if (_g_drawnItem == 'Circle')
	{
		drawCircle();
	} else if (_g_drawnItem == 'Square')
	{
		drawSquare();
	} else if (_g_drawnItem == 'Rectangle')
	{
		drawRectangle();
	}else if (_g_drawnItem == 'Heart')
	{
		drawHeart();
	}else if (_g_drawnItem == 'Ghost')
	{
		drawGhost();
	}else if (_g_drawnItem == 'House')
	{
		drawHouse();
	}
	
	document.getElementById("myShapeColor").innerHTML = _g_shapeColor;
}

function shapeLightBlue()
{
	_g_shapeColor = '#add8e6';
	
	if (_g_drawnItem == 'Circle')
	{
		drawCircle();
	} else if (_g_drawnItem == 'Square')
	{
		drawSquare();
	} else if (_g_drawnItem == 'Rectangle')
	{
		drawRectangle();
	}else if (_g_drawnItem == 'Heart')
	{
		drawHeart();
	}else if (_g_drawnItem == 'Ghost')
	{
		drawGhost();
	}else if (_g_drawnItem == 'House')
	{
		drawHouse();
	}

	document.getElementById("myShapeColor").innerHTML = _g_shapeColor;
}

function shapeYellow()
{
	_g_shapeColor = '#ff0';
	
	if (_g_drawnItem == 'Circle')
	{
		drawCircle();
	} else if (_g_drawnItem == 'Square')
	{
		drawSquare();
	} else if (_g_drawnItem == 'Rectangle')
	{
		drawRectangle();
	}else if (_g_drawnItem == 'Heart')
	{
		drawHeart();
	}else if (_g_drawnItem == 'Ghost')
	{
		drawGhost();
	}else if (_g_drawnItem == 'House')
	{
		drawHouse();
	}
	
	document.getElementById("myShapeColor").innerHTML = _g_shapeColor;
}


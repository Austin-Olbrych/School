//Austin Olbrych
var _g_canvas;
var _g_context;

var person = [];

var over = 10;
var down = 20;


	function init()
	{
		_g_canvas = document.getElementById("myCanvas");
		_g_context = _g_canvas.getContext("2d");
		
		_g_context.fillStyle = "#aff";
		_g_context.fillRect(0,0,1000,1000);
		
		startWithThreePeople();
		drawEverything();
	}

function startWithThreePeople()
	{
		_g_newPersonOver = 0 + 70 * 3;
		_g_newPersonDown = 50;
		
		_g_person = [];
		
		_g_person.push(new Person("person_1",0,70,50));
		_g_person.push(new Person("person_2",0,140,50));
		_g_person.push(new Person("person_3",0,210,50));
	}

function startThree()
	{
		startWithThreePeople();
		drawEverything();
	}

function randomColors()
	{
		var i;
		for (i=0;i< _g_person.length;i++)
		{
			tempObject = _g_person[i];	
			tempObject.changeColor();
		}
		drawEverything();
	}

function showHair()
	{
		var i;
		for (i=0;i< _g_person.length;i++)
		{
			tempObject = _g_person[i];
			tempObject.showHair = true;
		}
		drawEverything();
	}

function hideHair()
	{
		var i;
		for (i=0;i< _g_person.length;i++)
		{
			tempObject = _g_person[i];
			tempObject.showHair = false;
		}
		drawEverything();
	}

function sayHello()
	{
		var i;
		for (i=0;i< _g_person.length;i++)
		{
			tempObject = _g_person[i];	
			tempObject.showHello = true;
		}
		drawEverything();
	}

function sayNothing()
	{
		var i;
		for (i=0;i< _g_person.length;i++)
		{
			tempObject = _g_person[i];
			tempObject.showHello = false;
		}
		drawEverything();
	}

function moveLeft(distance)
	{
		_g_newPersonOver += distance;
		
		var i;
		for (i=0;i< _g_person.length;i++)
		{
			tempObject = _g_person[i];
			tempObject.move(distance);
		}
		drawEverything();
	}

function moveRight(distance)
	{
		_g_newPersonOver += distance;
		
		var i;
		for (i=0;i< _g_person.length;i++)
		{
			tempObject = _g_person[i];
			tempObject.move(distance);
		}
		drawEverything();
	}

function newPerson()
	{
		_g_newPersonOver += 70;
		if (_g_newPersonOver > 730)
		{
			_g_newPersonOver = 70;
			_g_newPersonDown += 120;
		}
		_g_person.push(new Person("person",0,_g_newPersonOver,_g_newPersonDown));
		
		drawEverything();
	}

function personInsert()
	{
		var howMany = document.getElementById("numField").value;
		
		if (howMany > 25)
		{
			alert("The maximum number of people is 25, not "+howMany+".");
			alert("Setting number of people to 25.");
			howMany = 25;
			document.getElementById("numField").value = "25";
		}
		drawEverything();
	}

function drawEverything()
	{	
		_g_context.fillStyle = "#aff";
		_g_context.fillRect(0,0,1000,1000);

		
		var i;
		for (i=0;i< _g_person.length;i++)
		{
			tempObject = _g_person[i];	
			tempObject.draw();
		}
	}	

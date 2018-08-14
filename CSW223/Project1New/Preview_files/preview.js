// Jim Klayder -- February 2017 -- main js control functions

/* to make your own page:

1. create a new function modeled after the individual pages below
2. add an appropriate 'else if' to the drawPage function
3. add a button with a call to drawPage in your html file
    example:
          <button type="button" onclick="drawPage('summaryPage');">Synopsis</button>

*/

var _g_canvas;  //see init()
var _g_context;  //see init()

var _g_Animator;


function init()
{

	//initialize the global variables
	_g_canvas = document.getElementById("myCanvas");
	_g_context = _g_canvas.getContext("2d");
	
	//drawPage("blankPage");
	//drawPage("welcomePage");
	drawPage("titlePage");
	
	
	//drawPage("justTesting");
	
	_g_Animator = new Animator("Animator One");
	
	 
	_g_Animator.startAnimateLoop();   //start the animation loop,
	_g_Animator = null;               //but don't draw anything yet
	
	
}

function drawPage(whichPage)
{
	_g_Animator = null;
	
	if (whichPage === "instructionsPage")
		drawInstructionsPage();
	else if (whichPage === "titlePage")
		drawTitlePage();
	else if (whichPage === "summaryPage")
		drawSummaryPage();
	else if (whichPage === "blankPage")
		drawBlankPage();
	else if (whichPage === "welcomePage")
		drawWelcomePage();
	else if (whichPage === "challengesPage")
		drawChallengesPage();
	else if (whichPage === "turkeyAnimation")
		drawTurkeyAnimationPage();
	else if (whichPage === "shortAnimation")
		drawShortAnimationPage();
	else if (whichPage === "longAnimation")
		drawLongAnimationPage();
	else 
		drawErrorPage(whichPage);
		
		
} 

///////////////
/////////////// individual pages follow
///////////////

function drawBlankPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Blank Page", 50, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText('this is a blank page',
		50,200);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawWelcomePage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Welcome Page", 50, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText('this is a welcome page',
		50,200);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawInstructionsPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Instructions", 90, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText('basic instructions go here',
		50,200);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawTurkeyAnimationPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");


	
	_g_Animator = new Animator("Animator One");
	_g_Animator.animateAddObject(new Turkey("Turkey", 0, 50, 0));
     
	
}

function drawShortAnimationPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");


	_g_Animator = new Animator("Animator One");
	_g_Animator.animateAddObject(new MyMovingTitle("Marty the Zebra", 0, -340, 80));
	_g_Animator.animateAddObject(new Marty("Marty", 0, 50, 0));
   
}


function drawLongAnimationPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	
	_g_Animator = new Animator("Animator One");
	_g_Animator.animateAddObject(new MyTitle("Escape To Madagascar", 0, 70, 80));
    _g_Animator.animateAddObject(new Madagascar("Madagascar", 0, 50, 0));
    _g_Animator.animateAddObject(new MartyRunning("MartyRunning", 0, 50, 100));
	
}


function drawTitlePage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Escape to Madagascar", 20, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText('The story of how Marty got his freedom.',
		40,150);
		
	
		
	//the drawTugBoat function is in MyDrawingLibrary.js
	//drawTugBoat(_g_context, 300, 220);
	
}


function drawSummaryPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Synopsis", 120, 80);
		
	setTextStyle(_g_context, "normalPlain");
	var textOver = 60;
	var textDown = 160;
	var textDownAdvance = 30;
	
	_g_context.fillText('Marty is a Zebra at the New York zoo and he',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('wishes to be in the wild. He will be faced',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('with difficult challenges as he navigates through',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('New York and safely to Madagascar.',
		textOver,textDown);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawChallengesPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Challenges", 80, 80);
		
	setTextStyle(_g_context, "normalPlain");
	var textOver = 20;
	var textDown = 160;
	var textDownAdvance = 30;
	
	_g_context.fillText('1. Navigate through a maze to get out of New York.',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('2. Enter in plane ticket number to board.',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('3. Outsmart the penguins that are after you.',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('4. Collect items to safely reach Madagascar.',
		textOver,textDown);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawErrorPage(whichPage) 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Error Page", 50, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText("Sorry. The page '"+whichPage+"'",
		50,200);
		
	_g_context.fillText("does not exist.",
		50,230);
	
	
}




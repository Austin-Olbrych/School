// Jim Klayder -- February 2017 -- simple moving title class that can be used in Animator11

/////////////////////////////////////////////////////////////////////
//start class
function MyMovingTitle(name, age, over, down)
{

	var _name = name; 
	var _age = age;
	var _over = over;
	var _down = down;
	
	this.restart = function restart()
		{
			//MyTitle does not need to restart
		}
		
	this.draw = function draw(context)
		{
			
		    //setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "bigWithShadow");
	
		    //var message = _name+" age is "+_age;
		    var message = _name;
			context.fillText(message, _over, _down);
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "normalPlain");
		    context.fillText("by Austin Olbrych", _over + 200, _down + 60);
	
			//drawTugBoat is a function in MyDrawingLibrary.js
			//drawTugBoat(context, _over + 170, _down + 120);
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "smallGrey");
		    //message = _name+" age is "+_age;
		    //context.fillText(message, 370, 290);
		}
	
	this.move = function move()
		{
			_age++;
			
			if (_age < 80)  //only move while _age is small
			{
				_over += 5;
			}
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////

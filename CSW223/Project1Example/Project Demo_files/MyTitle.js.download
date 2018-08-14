// Jim Klayder -- February 2017 -- this class show how to make a plain 
//                                 drawing function with no movement in Animator11
/////////////////////////////////////////////////////////////////////
//   naming conventions
//   http://raider.mountunion.edu/csw/CSW223/Spring2017/labs/animateLab2/conventionForVariableNames.html

/////////////////////////////////////////////////////////////////////
//start class
function MyTitle(name, age, over, down)
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
		    context.fillText("by James Reuben", _over + 200, _down + 60);
	
			
		}
	
	this.move = function move()
		{
			_age++;
			//MyTitle does not need to move
			
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////

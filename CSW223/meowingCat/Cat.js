

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function Cat(name, age, theOver, theDown)
{
    //private data member names all start with '_'
    //public data names use 'this.'
    
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = theOver;
	var _originalDown = theDown;

	var _name = name; 
	var _age = age;
	
	this.over = theOver;  //public data
	this.down = theDown;  //public data
	
	var catColor = '#ff0';

	this.draw = function draw(context)
		{
			context.fillStyle = 'red';
		    context.fillRect(this.over,this.down,50,50);
			context.fillRect(this.over + 40,this.down + 40, 100, 50);
		}
		
	function changeColor()
		{
			context.fillStyle = catColor;
		    context.fillRect(this.over,this.down,50,50);
			context.fillRect(this.over + 40,this.down + 40, 100, 50);
		}
		
    function meow()
		{
			context.fillStyle = catColor;
		    context.fillRect(this.over,this.down,50,50);
			context.fillRect(this.over + 40,this.down + 40, 100, 50);
			context.fillStyle = '#FFF';
			context.fillRect(this.over - 20,this.down, 10, 10);
			var message = 'meow';
			context.fillText(message, this.over - 20, this.down);
		}
}

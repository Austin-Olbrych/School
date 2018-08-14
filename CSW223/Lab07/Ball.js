

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function Ball(name, age, theOver, theDown)
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
	
	var _size = 50;
	
	
	this.toString = function toString()
	{
		return _name+"  "+this.over+"  "+this.down;
	}
	
	this.restart = function restart()
		{
			_age = _originalAge;
			this.over = _originalOver;
			this.down = _originalDown;
		
		
		}

	this.draw = function draw(context)
		{
			
			context.fillStyle = "rgb(255, 200, 255)";
					
		    
		    context.fillRect(this.over,this.down,_size,_size);
		    
	
		   
			context.font="16px Arial";
			context.fillStyle = "rgb(255, 0, 0)";
		    var message = _name;
		    //var message = "ball draw test";   //_name;
			
			context.fillText(message, this.over+6, this.down+25);
			
		
		
		}
	

	this.randomMove = function randomMove()
    {
		//alert("randomMove in Ball");
        this.over =  Math.floor((Math.random() * 200) + 1);
        this.down =  Math.floor((Math.random() * 100) + 1); 
    }
	
	this.getLocationsIn = function getLocationsIn()
	{
		//alert('getLocationsIn()');
		alert('_g_ballTest = ' + this.over + ' , ' + this.down);
		//alert('_g_otherBall = ' + _g_otherBall.over + ' , ' + _g_otherBall.down);
	}
	
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	

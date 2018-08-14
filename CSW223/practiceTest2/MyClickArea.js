

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function MyClickArea(theOver, theDown, theWidth, theHeight)
{
	var _over = theOver;  
	var _down = theDown;  
	var _width = theWidth;  
	var _height = theHeight;  
	
	
	this.toString = function toString()
	{
		return "MyClickArea  "+_over+"  "+_down+"   "+_width+"  "+_height;
	}
	
	this.setArea = function setArea(theOver, theDown, theWidth, theHeight)
	{
		_over = theOver;  
		_down = theDown;  
		_width = theWidth;  
		_height = theHeight;
	}
	
	this.hitTest = function hitTest(point)
	{
		//return true iff point is inside this object
		if (point.x > _over && point.x < _over + _width
		&&  point.y > _down && point.y < _down + _height)
			return true;
		else
			return false;
	}
		
	this.draw = function draw(context)
	{
		context.fillStyle = "rgb(200, 200, 200)";
		    
		context.fillRect(_over,_down,_width,_height);
	}
	
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	

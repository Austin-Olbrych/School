

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function MyBox(theOver, theDown, theColor)
{

	this.over = theOver;  //public data
	this.down = theDown;  //public data
	
	var _width = 40;  //private data
	var _height = 60;  //private data
	
	var _lightColor = theColor;  //private data
	
	var myClickArea = new MyClickArea(this.over, this.down, _width, _height);
	
	var _explode = false;

	this.hitTest = function hitTest(point)
	{
		return myClickArea.hitTest(point);
	}
	
	this.setLocation = function setLocation(pos)
	{
		//adjust location so that mouse pointer is in the middle 
		//of the object
		this.over = pos.x - _width/2; 
		this.down = pos.y - _height/2; 
	}
	
	this.draw = function draw(context)
	{
		//can click on this area
		myClickArea = new MyClickArea(this.over, this.down, _width, _height);	
		
		
		//draw border
		context.fillStyle = '#0033ff';
		context.fillRect(this.over,this.down,_width,_height);
		
		//draw inside the border
		context.fillStyle = _lightColor;
		context.fillRect(this.over+5,this.down+5,_width-10,_height-10);
		
		 
		//myClickArea.draw(context);  //for debugging
		
	}
	
	this.grow = function grow()
	{
		_height += 10;
	}
	
	this.shrink = function shrink()
	{
		if (_height > 20)
			_height -= 10;
	}
		
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	

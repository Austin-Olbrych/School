function WordBox(theOver, theDown, theColor)
{

	this.over = theOver; 
	this.down = theDown;

	var _width = 40;
	var _height = 60;

	var _lightColor = theColor;

	var myClickArea = new MyClickArea(this.over, this.down, _width, _height);

	this.hitTest = function hitTest(point)
	{
		return myClickArea.hitTest(point);
	}

	this.setLocation = function setLocation(pos)
	{
		this.over = pos.x - _width/2;
		this.down = pos.y - _height/2;
	}

	this.draw = function draw(context)
	{
		myClickArea = new MyClickArea(this.over, this.down, _width, _height);
		context.fillStyle = '#0033ff';
		context.fillRect(this.over,this.down,_width,_height);
		context.fillStyle = _lightColor;
		context.fillRect(this.over+5,this.down+5,_width-10,_height-10);
	}
	this.explode = function explode()
	{
		alert("Explode");
		_lightColor = "#fff";
	}
}

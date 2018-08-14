//Austin Olbrych
function Person(name, age, over, down)
{
	var _originalAge = age;
	var _originalOver = over;
	var _originalDown = down;

	var _name = name; 
	var _age = age;
	
	var _over = over;
	var _down = down;
	
	this.showHair = true;
	this.showHello = false;
	this.color = "#55a";
	
	
	this.restart = function restart()
		{
			_age = _originalAge;
			_over = _originalOver;
			_down = _originalDown;
		}
		
	this.getName = function getName()
		{
			return _name;
		}
		
	this.draw = function draw()
		{
		
		
			if (this.showHello)
				{
					_g_context.fillStyle = "#fff";
					_g_context.fillRect (_over, _down - 40, 60, 30);
					
					_g_context.fillStyle = "#000";
					_g_context.font="20px Georgia";
					_g_context.fillText("Hello",_over+4, _down - 20);
				}
			
			if (this.showHair)
				{
					_g_context.fillStyle = "#a73";
					_g_context.fillRect (_over - 6, _down - 6, 52, 25);
				}
			
			// draw head
			_g_context.fillStyle = "rgb(255, 255, 0)";
			_g_context.fillRect(_over, _down, 40, 45);
			
			//draw eyes
			_g_context.fillStyle = this.color;
			_g_context.fillRect(_over+6, _down+10, 8, 8);
			_g_context.fillRect(_over+26, _down+10, 8, 8);
			
			//draw mouth
			_g_context.fillStyle = "rgb(255, 0, 0)";
			_g_context.fillRect(_over+6, _down+30, 28, 8);
		  
		}
	
	this.move = function move(distance)
		{
			_age++;
			_over += distance;	
		}
	
	function randomIntFromInterval(min,max)
		{
			return Math.floor(Math.random()*(max-min+1)+min);
		}

	this.changeColor = function changeColor()
		{
			this.color = "#f00";
			
			r = randomIntFromInterval(0,255);
			g = randomIntFromInterval(0,255);
			b = randomIntFromInterval(0,255);
			
			colorString = "rgb("+r+","+g+","+b+")";
			
			this.color = colorString;	
		}
	
}
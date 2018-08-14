
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function House(age, theOver, theDown, isOpen)
{
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = theOver;
	var _originalDown = theDown; 
	var _age = age;
	
	this.over = theOver;  //public data
	this.down = theDown;  //public data
	
	var _size = 100; //Make house larger here
	var _clickAreaSize = 50; //Edit click area
	
	
	var myClickArea = new MyClickArea(theOver, theDown, _clickAreaSize, _clickAreaSize);
	
	var _pixelSpeed = 7; //number of pixels to move each time function move() is called
	
	
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
	
	
	this.hitTest = function hitTest(point)
	{
		//alert('House Hit!');
		return myClickArea.hitTest(point);
	}
		
	this.draw = function draw()
		{
	
			//now draw a filled circle
			var centerX = this.over + _size / 2;
			var centerY = this.down + _size / 2;
			var length = _size;
			var height = _size / 2;
			
			myClickArea.setArea(centerX + 10, centerY + 20, length/4, height);
			_g_context.fillStyle = "rgb(255, 200, 255)";
			_g_context.fillRect(centerX,centerY,length,height);
			
			//Draw House
			_g_context.fillStyle = 'red';
			_g_context.fillRect(centerX, centerY, length, height);
			
			//Draw Roof
			_g_context.beginPath();
			_g_context.moveTo(centerX, centerY);
			_g_context.lineTo(centerX + 100,centerY);
			_g_context.lineTo(centerX + 50,centerY - 50);
			_g_context.closePath();
			_g_context.stroke();
			_g_context.fill();
			
			if (isOpen){
				//Draw Door Open
				_g_context.fillStyle = 'blue';
				_g_context.fillRect(centerX + 10, centerY + 20, length/4, height);
			}	else{
				//Draw Door Closed
				_g_context.fillStyle = 'yellow';
				_g_context.fillRect(centerX + 10, centerY + 20, length/4, height);
			}
			
			
			
			
			//alert("Ball.draw() --- this.toString()   "+this.toString());
			//alert(message);
			
			myClickArea.draw();  //for debugging
			
		
		}
	
	this.move = function move()
		{
			_age++;
			this.over += _pixelSpeed;
			//this.down++;
			
		}
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	

function test()
{
	alert("testing");
	document.getElementById("demo").innerHTML = "Hello JavaScript!";

}

function clearCanvas(context, backGroundColor)
{
	//clear the entire canvas
	context.fillStyle = backGroundColor;
	context.fillRect (0, 0, 1000, 1000);
}


function setTextStyle(context, theStyle)
{
	if (theStyle === "bigWithShadow")
	{
		//bigWithShadow
		context.shadowColor = "grey";
		context.shadowOffsetX = 5; 
		context.shadowOffsetY = 5; 
		context.shadowBlur = 7;
		context.font = "60px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "red";
		
	}else if (theStyle === "giantWithShadow")
	{
		//giantWithShadow
		context.shadowColor = "grey";
		context.shadowOffsetX = 5; 
		context.shadowOffsetY = 5; 
		context.shadowBlur = 5;
		context.font = "140px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "red";
		
	}else if (theStyle === "normalPlain")
	{
		//normalPlain
		context.shadowColor = "grey";
		context.shadowOffsetX = 0; 
		context.shadowOffsetY = 0; 
		context.shadowBlur = 0;
		context.font = "20px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "black";
		
	}else if (theStyle === "smallGrey")
	{
		//smallGrey
		context.shadowColor = "grey";
		context.shadowOffsetX = 0; 
		context.shadowOffsetY = 0; 
		context.shadowBlur = 0;
		context.font = "10px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "grey";
		
	}else
	{
		alert("setTextStyle called with '"+theStyle+"'");
	}
}

function drawTriangle(context, over, down)
	{
		var hullWidth = 70;
		var hullHeight = 30;
		
    	context.beginPath();
    	context.moveTo(over + hullWidth, down + 30);
    	context.lineTo(over + hullWidth + 20, down + 30);
    	context.lineTo(over + hullWidth, down + hullHeight + 30);
    	context.fill();
  
	}
	
function drawTugBoat(context, over, down)
{	
	context.fillStyle = "rgb(220, 0, 0)";
	context.fillRect (over, down+30, 70, 30);
		    
	//for the bow of the boat
	drawTriangle(context,over, down);
		   
	//draw the mast
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect (over + 20, down, 6, 40);
	
	//draw the flag
	context.fillStyle = "rgb(0, 220, 0)";
	context.fillRect (over, down, 20, 20);
		    	
	//setTextStyle is a function in MyDrawingLibrary.js
	setTextStyle(context, "smallGrey");
	context.fillStyle = "rgb(0, 0, 0)";
				
	context.fillText("Tug Boat Tim", over+ 10, down +50);	
}

function drawZapper(context, over, down)
{	
	//draw the main body of the Zapper
	context.fillStyle = "rgb(220, 0, 0)";
	context.fillRect (over-20, down, 40, 30);
		   
	//draw the barrel
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect (over-3, down-20, 6, 40);
		    	
	
}




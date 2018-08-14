

function draw()
{
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var imageObj = new Image();

      imageObj.onload = function() {
        context.drawImage(imageObj, 5, 5);
      };
      imageObj.src = "http://static.giantbomb.com/uploads/original/0/26/9894-yoda.jpg";
}


function test()
{
	document.getElementById("demo").innerHTML = "Welcome to Example 5";
	alert("We will now draw a picture of Yoda.");
	draw();
	document.getElementById("demo").innerHTML += "   --- and there is the picture of Yoda ";
}

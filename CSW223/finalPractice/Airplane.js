//Austin Olbrych
function Airplane(name, age, over, down )
{
  var _name = name;
  var _age = age;
	var _over = over;
	var _down = down;

  this.showFlame = false;
  this.planeColor;

  function randomIntFromInterval (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  this.changeColor = function changeColor() {
    var r = randomIntFromInterval(0,255);
    var g = randomIntFromInterval(0,255);
    var b = randomIntFromInterval(0,255);

    this.planeColor = "rgb(" + r + "," + g + "," + b + ")";
  }

	this.draw = function draw()
	{
		_g_context.fillStyle = this.planeColor;
    _g_context.fillRect(_over, _down, 40, 10);
    _g_context.fillRect(_over + 20, _down + 10, 10, 10);
    _g_context.fillRect(_over + 20, _down - 10, 10, 10);

    if (this.showFlame == true) {
      _g_context.fillStyle = "#f50";
      _g_context.fillRect(_over - 10, _down, 10, 10);
    }
	}

  this.doShowFlame = function doShowFlame(){
    this.showFlame = true;
  }

  this.doNotShowFlame = function doNotShowFlame(){
    this.showFlame = false;
  }

  this.move = function move()
  {
    _over += 10;
  }


}
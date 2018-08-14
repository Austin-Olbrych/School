var animator = new Animator("Animator One",1,2,3);

var theCourt = new Court("Court", "green", 0, 0);
var fan1 = new Fan("Fan1", "red", 50, 125);
var fan2 = new Fan("Fan2", "green", 150, 155);
var fan3 = new Fan("Fan3", "blue", 300, 160);
var fan4 = new Fan("Fan4", "black", 500, 125);
var fan5 = new Fan("Fan5", "white", 600, 175);
var mainPlayer = new Player("player", "black", 150, 450);

function init()
{
		animator.animateAddObject(theCourt);
		animator.animateAddObject(fan1);
		animator.animateAddObject(fan2);
		animator.animateAddObject(fan3);
		animator.animateAddObject(fan4);
		animator.animateAddObject(fan5);
		animator.animateAddObject(mainPlayer);

		startAnimateLoop();
}

function resetPlayer()
{
	mainPlayer.over = 150;
}

var animator = new Animator("Animator One",1,2,3);

var car1 = new Car("Austin","green", 20, 20);
var car2 = new Car("Zak", "red", 20, 80);
var car3 = new Car("Zach", "blue", 20, 140);

function init()
{

		animator.animateAddObject(car1);
		animator.animateAddObject(car2);
		animator.animateAddObject(car3);

		startAnimateLoop();
}

function resetCar1()
{
	car1.over = 20;
}

function resetCar2()
{
	car2.over = 20;
}

function resetCar3()
{
	car3.over = 20;
}

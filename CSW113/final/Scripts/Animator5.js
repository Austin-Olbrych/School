



function animateTest()
{
    alert("animateTest");
    //document.getElementById("scriptInfo").innerHTML = 
    //"using Animator4.js";

}

//var animator;


function startAnimateLoop()
{
      //last parameter is the number of milliseconds to pause between
      //calls to the first parameter
      //for example:
      ////        var myVar = setInterval(animator.animateLoop3, 50);
      ////        would call animator.animateLoop3 once every 50 ms
      ////      ( which means 20 times every second)
      
      var myVar = setInterval(animator.animateLoop3, 50);

}




//the Thing class can be used for testing the Animator class
//it has name, draw, and move

//start Thing class
function Thing(name, age, over, down)
{
    this.name = name;
    this.age = age;
    this.over = over;
    this.down = down;

    this.changeOver = 2;
    this.changeDown = 2;

    this.isAtGoal = function isAtGoal()
    {
        if (this.over >= 100)
            return true;
        else
            return false;
    }
    this.draw = function draw(context)
    {
        context.fillStyle = "rgba(255, 100, 255, 0.8)";
        context.fillRect (this.over, this.down, 10, 30);
        context.fillText(this.name, this.over, this.down);

    }
    this.move = function move()
    {
        //this.over += this.changeOver;
        //this.down += this.changeDown;

        //stop moving if we reach the
        //imaginary borders
        if (this.over < 0 || this.over > 300)
        {
            this.changeOver = 0;
        }
        if (this.down < 0 || this.down > 300)
        {
            this.changeDown = 0;
        }


        //move back and forth
        if (this.age < 30)
        {
            this.age++;
            this.over += 3;
        }else if (this.age < 60)
        {
            this.age++;
            this.over -= 3;
        }else
        {
            this.age = 0;
        }


    }
}//end Thing class


/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
	
function Animator(name,age,over,down) //start Animator class
{

    //Private Members in JavaScript
    //  http://javascript.crockford.com/private.html
    // is found in a larger JavaScript discussion at:
    //   http://javascript.crockford.com/


    this.publicData = 123;
    var privateData = 456;

    //animatorRunning used in checkObjectForms() and loop()
    var animatorRunning = true; //private

    //users of this class will put Objects in this
    //animateList to be animated by calling 
    //the animateAddObject function

    var animateList = []; //private 


    //start of constructor code
    this.name = name;
    this.age = age;
    this.over = over;
    this.down = down;


    //NOTE: if you want to call a function in this
    //      init code, you must define the function
    //      BEFORE you call it



    //end of constructor code 

    this.test = function test()
    {
        alert("Animator.test() here. name: "+name);
        //alert("Animator.test() here. publicData: "+publicData);
        //alert("Animator.test() here. privateData: "+privateData);
    }

    //the following line of code does NOT work
    //because it is BEFORE the test2() definition
    //this.test2("hello # 1");  

    this.test2 = function test2(info)
    {
        alert("Animator.test2() here: "+info);
        //alert("Animator.test() here. publicData: "+publicData);
        //alert("Animator.test() here. privateData: "+privateData);
    }

    //the following line of code DOES work
    //because it is AFTER the test2() definition	
    //this.test2("hello # 2");



    this.animateAddObject = function animateAddObject(theObject)
    {
        //alert("Animator.animateAddObject with "+theObject.name);

        //animateList.push(theObject);

        if (animateHasCorrectForm(theObject))
        {
                animateList.push(theObject);
        }else
        {
                alert(theObject.name+" was not added to the animation loop.");
        }

    }

    //this function checks to make certain that theObject
    // hasName, hasDraw and hasMove
    //
    function animateHasCorrectForm(theObject)
    {
        hasName = (typeof theObject.name);

        if (hasName == 'undefined')
        {
                alert("There is an object in the animator that does not have a 'name'.");
                        return false;
        }

        hasDraw = (typeof theObject.draw);

        if (hasDraw == 'undefined')
        {
                alert(theObject.name+" does not have a 'draw' function.");
                        return false;
        }

        hasMove = (typeof theObject.move);

        if (hasMove == 'undefined')
        {
                alert(theObject.name+" does not have a 'move' function...");
                        return false;
        }

        //all checks have been passed
        //so . . .
        return true;	
    }



    this.move = function move() 
    {
        for (index = 0; index < animateList.length; index++) 
        {
            temp = animateList[index];

            temp.move();
        }
    }

    this.draw = function draw() 
    {

        //alert("Animator.draw()");


        var canvas = document.getElementById("myCanvas");
        if (canvas.getContext) 
        {
            var context = canvas.getContext("2d");

            //clear the entire canvas
            context.fillStyle = "rgb(255,255,255)";  //white
            context.fillStyle = "rgb(240,240,240)";  //light gray
            context.fillStyle = "rgb(210,210,210)";  //gray
            //context.fillStyle = "rgba(210,210,210, 0.3)";  //gray with blur
            context.fillRect (0, 0, 1500, 1000);


            //any background drawing goes here

			
			//var img = document.getElementById("leaves");
			
			//context.drawImage(img, 300, 50);
			
			

            //finally we draw all of the objects in
            //the animateList
            for	(index = 0; index < animateList.length; index++) 
            {
            temp = animateList[index];

            temp.draw(context);
            }//end for index

			

        }//end if (canvas.getContext) 

    }//end function draw() 



    this.animateLoop3 = function animateLoop3()
    {
        animator.move();
        animator.draw();
    }

	
}

/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////

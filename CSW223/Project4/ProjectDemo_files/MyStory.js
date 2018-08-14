var _g_pathMainLabel = "*";  //  "*" will show the path  // "" will not show the path
var _g_pathSideLabel = "**";  //  "**" will show the side path  // "" will not show the side path

/* use as a second parameter in optionList.push */

/* 
	Austin Olbrych
	CSW 223
	5/1/2018
	http://raider.mountunion.edu/~olbrycag/CSW223/Project3/StoryDemo.html
	I have enjoyed the challenges that have come from this project but find it very redundant
	having to keep creating such a large amount of pages the are all very alike. It is very cool
	to have a project like this I can show people but it has come with its challenges.
*/

/////////////////////////////////////////////////////////////////////
//start class
function MyStory()
{

    this.getStoryPages = function getStoryPages(name)  //public function
    {
        //alert("MyStory.getStoryPages()  "+name);

        if (name === "testStoryBasicPageNumbers")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return getStoryBasicPageNumbers();
        }else if (name === "testZero")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return getStoryPagesTestZero();
        }else if (name === "testOne")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return getStoryPagesTestOne();
        }else if (name === "orangeStory")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return  getStoryOranges();
        }else if (name === "zapperStory")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return  getStoryZapper();
        }



        //in all other cases
        return getStoryPagesNotFound(name);
    }

    function getStoryPagesNotFound(name)   //private function
    {

        var _storyPage = [];

        var animationList = [];
        animationList.push(new MyTitle("Story Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));

        var theText = "Your story named '"+name+"' was not found in the MyStory.js file. If '"+name+"' is the name of your story, then check the MyStory.js file to make certain that the story name is listed in the 'getStoryPages' function. If '"+name+"' is not the name of your story, then check the .html file to correct the spelling of the name.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////

        return _storyPage;

	}


    function getStoryBasicPageNumbers()   //private function
    {

    	//alert("start getBasicPageNumbers()");

        _storyPage = [];


        var animationList = [];
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));

        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
		
        ////////// Page 1 Starts Here
        ////////// Challenge 1
		
		
		//alert('Escape the cage by finding a key that is hidden behind other objects. Click and drag different items and once you do place it in the door to unlock it.');
        animationList = [];
		
        
		animationList.push(new MyCageBackground( "Cage",0, 0, 0));
		animationList.push(new Door( "Door",0, 460, 260));
        animationList.push(new Key( "Key",0, 190, 160));
        animationList.push(new Bail( "Bail1",0, 60, 150));
		animationList.push(new Bail( "Bail2",0, 120, 150));
		animationList.push(new Bail( "Bail3",0, 180, 150));
		animationList.push(new Bail( "Bail4",0, 145, 100));
		animationList.push(new Ball( "Ball1",0, 275, 190));
		

        optionList = [];
        optionList.push(new PageOption("Guard Room",
        _g_pathMainLabel+"Sneak to the guard room",
        "page2"));

        optionList.push(new PageOption("Friends",
        _g_pathSideLabel+"Go help you friends escape from their pens",
        "page3"));

        //_storyPage.push(new PageBasic("pageOne",animationList,optionList));
		_storyPage.push(new PageUnlockDoor("pageOne",animationList,optionList));
		
		
		
        ////////// Page 2 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("Don't get spotted", 0, 30, 80));
		animationList.push(new imgZebra("Garbage", 0, 30, 150));

        optionList = [];
        optionList.push(new PageOption("Distract",
        "Distract the guard and sneak past",
        "page4"));

        optionList.push(new PageOption("Wait",
        _g_pathMainLabel+"Wait for him to fall asleep",
        "page5"));

        _storyPage.push(new PageBasic("page2",animationList,optionList));
		
        ////////// Page 3 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("Red Alert!", 0, 50, 80));
		animationList.push(new imgAlarm("Alarm", 0, 30, 150));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Hide",
        "You hear the alarm and try to hide in another pen",
        "page6"));

        optionList.push(new PageOption("Run",
        _g_pathSideLabel+"Try and make a break for the main gate of the Zoo",
        "page7"));



        _storyPage.push(new PageBasic("page3",animationList,optionList));

		////////// Page 4 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 4", 0, 150, 80));
		animationList.push(new imgZebra("Garbage", 0, 30, 150));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page8",
        "page8 coming up",
        "page8"));

        optionList.push(new PageOption("go page9",
        "page9 here",
        "page9"));



        _storyPage.push(new PageBasic("page4",animationList,optionList));

		////////// Page 5 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("Plan your escape", 0, 30, 80));
        animationList.push(new imgZebra("Garbage", 0, 30, 150));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Take Badge",
        _g_pathMainLabel+"You decide to that the guards ID badge to maybe use later",
        "page10"));

        optionList.push(new PageOption("Disable Alarm",
        "Use the computer to turn off the alarm system",
        "page11"));

        _storyPage.push(new PageBasic("page5",animationList,optionList));

		////////// Page 6 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 6", 0, 150, 80));
        animationList.push(new imgZebra("Garbage", 0, 30, 150));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page12",
        "page12 coming up",
        "page12"));

        optionList.push(new PageOption("go page13",
        "page13 here",
        "page13"));



        _storyPage.push(new PageBasic("page6",animationList,optionList));

		////////// Page 7 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("The Gate", 0, 150, 80));
        animationList.push(new imgZebra("Garbage", 0, 30, 150));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Jump",
        _g_pathSideLabel+"Try to jump over the gate to escape",
        "page14"));

        optionList.push(new PageOption("Find",
        "Find another exit that may be easier",
        "page15"));



        _storyPage.push(new PageBasic("page7",animationList,optionList));

		////////// Page 8 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 8", 0, 150, 80));
        animationList.push(new imgZebra("Garbage", 0, 30, 150));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page16",
        "page16 coming up",
        "page16"));

        optionList.push(new PageOption("go page17",
        "page17 here",
        "page17"));



        _storyPage.push(new PageBasic("page8",animationList,optionList));

		////////// Page 9 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 9", 0, 150, 80));
        animationList.push(new imgZebra("Garbage", 0, 30, 150));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page18",
        "page18 coming up",
        "page18"));

        optionList.push(new PageOption("go page19",
        "page19 here",
        "page19"));



        _storyPage.push(new PageBasic("page9",animationList,optionList));

		////////// Page 10 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("Sneak Out", 0, 30, 80));
        animationList.push(new imgZebra("Garbage", 0, 30, 150));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Use Back Door",
        _g_pathMainLabel+"Go through the Zoo's maintenance building to find an exit",
        "page20"));

        optionList.push(new PageOption("Use Main Gate",
        "Go to the main gate of the Zoo to escape",
        "page21"));



        _storyPage.push(new PageBasic("page10",animationList,optionList));

		////////// Page 11 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 11", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page22",
        "page22 coming up",
        "page22"));

        optionList.push(new PageOption("go page23",
        "page23 here",
        "page23"));



        _storyPage.push(new PageBasic("page11",animationList,optionList));

		////////// Page 12 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 12", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page24",
        "page24 coming up",
        "page24"));

        optionList.push(new PageOption("go page25",
        "page25 here",
        "page25"));



        _storyPage.push(new PageBasic("page12",animationList,optionList));

		////////// Page 13 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 13", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page26",
        "page26 coming up",
        "page26"));

        optionList.push(new PageOption("go page27",
        "page27 here",
        "page27"));



        _storyPage.push(new PageBasic("page13",animationList,optionList));

		////////// Page 14 Starts Here
        //////////


        animationList = [];
        animationList.push(new MyTitle("Your foot is stuck", 0, 20, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Give Up",
        _g_pathSideLabel+"You decide to let the guards help you done",
        "pageOne"));

        optionList.push(new PageOption("Fight it out",
        _g_pathSideLabel+"Struggle to get your foot free",
        "pageOne"));


        _storyPage.push(new PageBasic("page14",animationList,optionList));

		////////// Page 15
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 15", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page30",
        "page30 coming up",
        "page30"));

        optionList.push(new PageOption("go page31",
        "page31 here",
        "page31"));



        _storyPage.push(new PageBasic("page15",animationList,optionList));

		////////// Page 16
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 16", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page32",
        "page32 coming up",
        "page32"));

        optionList.push(new PageOption("go page33",
        "page33 here",
        "page33"));



        _storyPage.push(new PageBasic("page16",animationList,optionList));

		////////// Page 17
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 17", 0, 150, 80));
        animationList.push(new imgZebra("Garbage", 0, 30, 150));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page34",
        "page42 coming up",
        "page34"));

        optionList.push(new PageOption("go page35",
        "page35 here",
        "page35"));



        _storyPage.push(new PageBasic("page17",animationList,optionList));

        ////////// Page 20
            //////////


            animationList = [];
            animationList.push(new MyTitle("Freedom", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Garbage Truck",
            _g_pathMainLabel+"You see the city garbage truck collecting the Zoo trash and you jump in",
            "page40"));

            optionList.push(new PageOption("Follow Signs",
            _g_pathSideLabel+"You try to make it to down town so you can maybe get a ride from someone",
            "page41"));



            _storyPage.push(new PageBasic("page20",animationList,optionList));

            ////////// Page 40
                //////////


            animationList = [];
            animationList.push(new MyTitle("Trash Rolling Out", 0, 30, 80));
			animationList.push(new imgGarbage("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Get Food",
            "You smell delicious food and want to get out to grab something to eat",
            "page80"));

            optionList.push(new PageOption("Stay In",
            _g_pathMainLabel+"Fight the smell of the garbage and stay in the truck",
            "page81"));



            _storyPage.push(new PageBasic("page40",animationList,optionList));
			
			////////// Page 41
            //////////


            animationList = [];
            animationList.push(new MyTitle("Lost and Confused", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Play it cool",
            "People notice you got out, just play it cool",
            "page82"));

            optionList.push(new PageOption("Run",
            _g_pathSideLabel+"You are spotted by the citizens and must run",
            "page83"));



            _storyPage.push(new PageBasic("page41",animationList,optionList));
			
			////////// Page 81
                //////////


            animationList = [];
            animationList.push(new MyTitle("What to do", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Take the coins",
            _g_pathMainLabel+"You see a bag of coins in the garbage and take them for yourself",
            "page162"));

            optionList.push(new PageOption("Leave them",
            "You see the coins and aren't worried about having a bag of coins to carry around",
            "page163"));



            _storyPage.push(new PageBasic("page81",animationList,optionList));
			
			////////// Page 83
            //////////


            animationList = [];
            animationList.push(new MyTitle("It's the Fuzz", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Parking Garage",
            _g_pathSideLabel+"You come across a parking garage where maybe you can lose them",
            "page166"));

            optionList.push(new PageOption("Climb a Tree",
            "You see some bug trees to climb up",
            "page167"));



            _storyPage.push(new PageBasic("page83",animationList,optionList));
			
			////////// Page 162
                //////////


            animationList = [];
            animationList.push(new MyTitle("The truck stopped", 0, 10, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Hide in the Trash",
            _g_pathSideLabel+"You hear the truck stopping and think to hide in all the trash",
            "page324"));

            optionList.push(new PageOption("Jump out",
            _g_pathMainLabel+"Once you  hear the truck start to slow down you think it would be better to get out",
            "page325"));



            _storyPage.push(new PageBasic("page162",animationList,optionList));
			
			////////// Page 166
            //////////


            animationList = [];
            animationList.push(new MyTitle("In the Garage", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Take Bridge",
            _g_pathSideLabel+"Take the bridge that connects to a building being built",
            "page332"));

            optionList.push(new PageOption("Hide",
            _g_pathSideLabel+"Use old service elevator to hide in",
            "page333"));



            _storyPage.push(new PageBasic("page166",animationList,optionList));
			
			////////// Page 324
                //////////


            animationList = [];
            animationList.push(new MyTitle("At the dump", 0, 10, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Investigate",
            _g_pathSideLabel+"You see a warehouse in the distance you want to investigate",
            "page648"));

            optionList.push(new PageOption("Fort",
            "Build a fort in the trash",
            "page649"));



            _storyPage.push(new PageBasic("page324",animationList,optionList));
			
			////////// Page 325
                //////////


            animationList = [];
            animationList.push(new MyTitle("You're Lost", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Ask for Directions",
            "You see some people walking around the street and you think to ask them for help on where to go",
            "page650"));

            optionList.push(new PageOption("Search the Park",
            _g_pathMainLabel+"You see Central park and think to hide in their but also find a map of the surrounding area",
            "page651"));



            _storyPage.push(new PageBasic("page325",animationList,optionList));
			
			////////// Page 332
            //////////


            animationList = [];
            animationList.push(new MyTitle("Caught in cement", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Start Over",
            "You are stuck in the cement and must start over",
            "pageOne"));

            optionList.push(new PageOption("Start Over",
            "You are stuck in the cement and must start over",
            "pageOne"));
			
			 _storyPage.push(new PageBasic("page332",animationList,optionList));
			 
			 ////////// Page 333
            //////////


            animationList = [];
            animationList.push(new MyTitle("Caught in elevator", 0, 0, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Start Over",
            "You are stuck in the elevator and must start over",
            "pageOne"));

            optionList.push(new PageOption("Start Over",
            "You are stuck in the elevator and must start over",
            "pageOne"));
			
			 _storyPage.push(new PageBasic("page333",animationList,optionList));
			 
			 ////////// Page 648
                //////////


            animationList = [];
            animationList.push(new MyTitle("So many options", 0, 10, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Ask Directions",
            "Ask one of the nice workers if they could point you in the direction on a boat to Africa",
            "page1296"));

            optionList.push(new PageOption("Steal a truck",
            _g_pathSideLabel+"You see a bunch of garabage trucks running that you could take",
            "page1297"));



            _storyPage.push(new PageBasic("page648",animationList,optionList));
			
			////////// Page 651
                //////////


            animationList = [];
            animationList.push(new MyTitle("Search the Park", 0, 10, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Enjoy the Park",
            "You find the park peaceful and want to enjoy running around instead of being stuck in a cage",
            "page1302"));

            optionList.push(new PageOption("Use the Map",
            _g_pathMainLabel+"You see an interactive map that may be able to help you search places around the area",
            "page1302"));



            _storyPage.push(new PageBasic("page651",animationList,optionList));
			
			////////// Page 1297
                //////////


            animationList = [];
            animationList.push(new MyTitle("It's the cops!", 0, 10, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Race 'em",
            "Try to out run them",
            "page2592"));

            optionList.push(new PageOption("Pull Over",
            _g_pathSideLabel+"Take the lose and pull over ",
            "page2593"));



            _storyPage.push(new PageBasic("page1297",animationList,optionList));
			
			////////// Page 1302
                //////////


            animationList = [];
            animationList.push(new MyTitle("Best Option", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Marina",
            "You know a marina will have boats but you don't know how to drive a boat",
            "page2604"));

            optionList.push(new PageOption("Port",
            _g_pathMainLabel+"A port has cargo ships but also has a lot of workers that could spot you.",
            "page2605"));



            _storyPage.push(new PageBasic("page1302",animationList,optionList));
			
			////////// Page 2593
                //////////


            animationList = [];
            animationList.push(new MyTitle("Under Arrest", 0, 10, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Star Over",
            _g_pathSideLabel+"The police take you back to the Zoo",
            "pageOne"));

            optionList.push(new PageOption("Start Over",
            _g_pathSideLabel+"The police take you back to the Zoo ",
            "pageOne"));



            _storyPage.push(new PageBasic("page2593",animationList,optionList));
			
			////////// Page 2605
                ////////// Page 12 Main


            animationList = [];
            animationList.push(new MyTitle("How to get there", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Try your luck",
            "You've made it this far, try to see if no one will notice a zebra walking around",
            "page5208"));

            optionList.push(new PageOption("Disguise",
            _g_pathMainLabel+"Try and cover yourself with white paint from the artist painting in the park",
            "page5209"));



            _storyPage.push(new PageBasic("page2605",animationList,optionList));
			
			////////// Page 5209
                ////////// Page 13 Main
				////////// Challenge 2


            animationList = [];
		
			animationList.push(new MyCityBackground( "City",0, 0, 0));
			animationList.push(new Zebra("zebra", 0, 400, 100));
			animationList.push(new Paint("red", 0, 60, 250));
			animationList.push(new Paint("green", 0, 120, 250));
			animationList.push(new Paint("blue", 0, 170, 250));
			animationList.push(new Paint("white", 0, 230, 250));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Give Rides",
            _g_pathMainLabel+"Steal a carriage and give people rides around town",
            "page10418"));

            optionList.push(new PageOption("Trot",
            "Trot around like the noble stead you are",
            "page10419"));



            //_storyPage.push(new PageBasic("page5209",animationList,optionList));
			_storyPage.push(new PagePaintZebra("page5209",animationList,optionList));
			
			////////// Page 10418
                ////////// Page 14 Main


            animationList = [];
            animationList.push(new MyTitle("Perfect Disguise", 0, 30, 80));
            animationList.push(new imgZebra("Garbage", 0, 30, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("To the Port",
            _g_pathMainLabel+"Now that you have a perfect disguise, head towards the port",
            "page20836"));

            optionList.push(new PageOption("Earn Money",
            "Give people rides for money",
            "page20837"));



            _storyPage.push(new PageBasic("page10418",animationList,optionList));
			
			////////// Page 20836
                ////////// Page 15 Main


            animationList = [];
            animationList.push(new MyTitle("Reached the Port", 0, 30, 80));
			animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Asia",
            "Get on the boat listed to take crates to Asia",
            "page41672"));

            optionList.push(new PageOption("Africa",
            _g_pathMainLabel+"Get on the boat listed to take crates to Africa",
            "page41673"));



            _storyPage.push(new PageBasic("page20836",animationList,optionList));
			
			////////// Page 41673
                ////////// Page 16 Main


            animationList = [];
            animationList.push(new MyTitle("Where to hide?", 0, 30, 80));
			animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Below Deck",
            _g_pathMainLabel+"Hide below deck in the cargo hold",
            "page83344"));

            optionList.push(new PageOption("Above Deck",
            "Hide above deck with all the crew",
            "page83345"));



            _storyPage.push(new PageBasic("page41673",animationList,optionList));
			
			////////// Page 83344
                ////////// Page 17 Main


            animationList = [];
            animationList.push(new MyTitle("Feeling Hungry", 0, 30, 80));
			animationList.push(new imgZebra("Garbage", 0, 30, 150));
			
            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Mess Hall",
            "Sneak into the mess hall to grab some food",
            "page166688"));

            optionList.push(new PageOption("Catch Fish",
            _g_pathMainLabel+"Catch fish out the port hole to eat",
            "page166689"));



            _storyPage.push(new PageBasic("page83344",animationList,optionList));
			
			////////// Page 166689
                ////////// Page 18 Main
				////////// Challenge 3


            animationList = [];
            //animationList.push(new MyTitle("Eating the Fish", 0, 30, 80));
			
			animationList.push(new MyWaterBackground( "Water",0, 0, 0));
			animationList.push(new Bucket("bucket", 0, 450, 250));
			animationList.push(new Fish("fish", 0, 800, 150));
			animationList.push(new Fish("fish", 0, 950, 150));
			animationList.push(new Fish("fish", 0, 550, 150));
			animationList.push(new Fish("fish", 0, 700, 150));

            optionList = [];
            //Option(displayName, displayText, nextPageName)
            optionList.push(new PageOption("Cook Fish",
            _g_pathMainLabel+"Cook the fish in the furnace",
            "page333376"));

            optionList.push(new PageOption("Eat Raw",
            "Try you luck and eat the fish raw",
            "page333377"));


			_storyPage.push(new PageCatchFish("page166689",animationList,optionList));
            //_storyPage.push(new PageBasic("page166689",animationList,optionList));
        ////////////////////////////////////////////////////////////  *************
        //////////


        //////////
        //////////


        //////////
        //////////


        //////////
        //////////


        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("The End", 0, 50, 80));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("restart story",
        "end of story",
        "pageOne"));

        optionList.push(new PageOption("restart story",
        "end of story",
        "pageOne"));



        _storyPage.push(new PageSimpleEnd("pageEnd",animationList,optionList));

        //alert("emd getStoryPagesTestZero()");

        return _storyPage;

    }

    ////////////////////////////////
    ////////////////////////////////

    function getStoryPagesTestZero()   //private function
    {

    	//alert("start getStoryPagesTestZero()");

        _storyPage = [];


        var animationList = [];
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));

        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////

        animationList = [];
        //animationList.push(new MyMovingTitle("Hello There", 0, 150, 80));
        animationList.push(new MyMovingTitle("Page One", 20, -250, 80));
        //animationList.push(new MyMovingTitle("Page One", -200, -450, 180));


        optionList = [];
        optionList.push(new PageOption("go pageFour",
        "You decide to try pageFour.",
        "pageFour"));

        optionList.push(new PageOption("go pageFive",
        "You decide to try pageFive.",
        "pageFive"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageOne",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("pageFive", 0, 150, 80));

        optionList = [];
        optionList.push(new PageOption("end story",
        "You decide to end the story.",
        "pageEnd"));

        optionList.push(new PageOption("restart story",
        "You decide to restart the story.",
        "pageOne"));

        _storyPage.push(new PageBasic("pageFive",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("pageFour", 0, 150, 80));
        animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("try again",
        "You decide to restart this page.",
        "pageFour"));

        optionList.push(new PageOption("restart story",
        "You decide to restart the story.",
        "pageOne"));



        _storyPage.push(new PageBasic("pageFour",animationList,optionList));


        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("The End", 0, 50, 80));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("restart story",
        "end of story",
        "pageOne"));

        optionList.push(new PageOption("restart story",
        "end of story",
        "pageOne"));



        _storyPage.push(new PageSimpleEnd("pageEnd",animationList,optionList));

        //alert("emd getStoryPagesTestZero()");

        return _storyPage;

    }

    ////////////////////////////////
    ////////////////////////////////
    function getStoryPagesTestOne()   //private function
    {

        _storyPage = [];


        var animationList = [];
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));

        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////

        animationList = [];
        animationList.push(new MyMovingTitle("1 1", 0, -250, 80));
        animationList.push(new MyMovingTitle("one  one", 0, -250, 180));


        optionList = [];
        optionList.push(new PageOption("go pageFour",
        "You decide to do pageFour.",
        "pageFour"));

        optionList.push(new PageOption("go pageFive",
        "You decide to do pageFive.",
        "pageFive"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("one",animationList,optionList));
        //////////
        //////////

        animationList = [];
        animationList.push(new MyMovingTitle("22222", 0, -250, 80));
        animationList.push(new MyMovingTitle("two 22 two", 0, -250, 180));


        optionList = [];
        optionList.push(new PageOption("go pageFour",
        "You decide to do pageFour.",
        "pageFour"));

        optionList.push(new PageOption("go pageFive",
        "You decide to do pageFive.",
        "pageFive"));
        _storyPage.push(new PageBasic("two",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyMovingTitle("22222", 0, -250, 80));
        animationList.push(new Ball("Ball1", 0, 50, 180));
        animationList.push(new Ball("Ball2", 0, 250, 280));


        optionList = [];
        optionList.push(new PageOption("one",
        "'one' looks exciting.",
        "one"));

        optionList.push(new PageOption("two",
        "Your favorite number is 'two'.",
        "two"));


        _storyPage.push(new PageBasic("three",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyMovingTitle("pageFive", 0, -250, 80));
        animationList.push(new MyMovingTitle("---- pageFive ----", 0, -250, 180));

        optionList = [];
        optionList.push(new PageOption("tres",
        "You decide to do three.",
        "three"));

        optionList.push(new PageOption("cuatro",
        "You decide to do pageFour.",
        "pageFour"));

        _storyPage.push(new PageBasic("pageFive",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyMovingTitle("FOUR  FOUR", 0, -250, 80));
        animationList.push(new MyMovingTitle("---- page FOUR ----", 0, -250, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go one",
        "You decide to do one.",
        "one"));

        optionList.push(new PageOption("go two",
        "You decide to do two.",
        "two"));



        _storyPage.push(new PageBasic("pageFour",animationList,optionList));

        return _storyPage;

    }

    ////////////////////////////////
    ////////////////////////////////
    function getStoryOranges()   //private function
    {

		//alert("found getStoryOranges() !!!");

        _storyPage = [];

        var animationList = [];
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));

        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your page was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your page was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////
        //alert("getStoryOranges() 1");

        animationList = [];
        animationList.push(new MyMovingOrangeTitle("Oranges", 0, -250, 80));
        //animationList.push(new MyMovingTitle("(with the Orange Game)", 0, -250, 180));


        optionList = [];
        optionList.push(new PageOption("head for the orange grove",
        "You decide to walk down the path towards the orange grove.",
        "pageHeadForOranges"));

        optionList.push(new PageOption("take a little nap",
        "You are feeling sleepy, so a short nap seems ideal to you. There is a very comfortable rocking chair nearby.",
        "pageNapTime"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("start",animationList,optionList));
        //////////
        //////////
        //alert("getStoryOranges() 2");

        animationList = [];
        //animationList.push(new MyMovingTitle("Oranges", 0, -250, 80));
        animationList.push(new Goal_1("goal one", 0, 50, 80));

        animationList.push(new MyParagraph( 0, 50, 180,
        	"You are walking down a pleasant road",
        	"lined with beautiful flowers.",
        	"And you arrive at a fork in the road.",
        	"Should you go left or right?"));


        optionList = [];
        optionList.push(new PageOption("take the left path",
        "The left path looks fun and exciting.",
        "start"));

        optionList.push(new PageOption("take the right path",
        "The right path smells like oranges.",
        "pageOrangeTree"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageHeadForOranges",animationList,optionList));
        //////////
        //////////
        //alert("getStoryOranges() 3");

        animationList = [];
        animationList.push(new MyTitle("Orange Tree", 0, 50, 80));

        animationList.push(new MyParagraph( 0, 50, 180,
        	"Move the oranges just for fun.",
        	"Then move on to the next",
        	"orange tree.",
        	"  "));

        animationList.push(new Ball( "Ball1",0, 350, 180));
        animationList.push(new Ball( "Ball2",0, 370, 250));
        animationList.push(new Ball( "Ball3",0, 450, 230));





        optionList = [];
        optionList.push(new PageOption("try the next tree",
        "There is another tree nearby that looks very interesting.",
        "pageOrangeTree2"));

        optionList.push(new PageOption("take the right path",
        "The right path looks a little dangerous.",
        "start"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageOrangeTree",animationList,optionList));
        //_storyPage.push(new PageDropObjectInBasket("pageOrangeTree",animationList,optionList));


        //////////
        //////////
        //alert("getStoryOranges() 4");

        animationList = [];
        animationList.push(new MyTitle("Orange Tree 2", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"Move the oranges to the Basket.",
        	"Then move on to the next",
        	"orange tree.",
        	"  "));

    	animationList.push(new Ball( "Ball1",0, 35, 270));
        animationList.push(new Ball( "Ball2",0, 135, 270));
        animationList.push(new Ball( "Ball3",0, 235, 270));

		animationList.push(new Basket( "Basket",0, 400, 280));


		//alert("animationList.length  "+animationList.length);

        optionList = [];
        optionList.push(new PageOption("try the next tree",
        "There is another tree nearby that looks very interesting.",
        "pageOrangeTree3"));

        optionList.push(new PageOption("take the right path",
        "The right path looks a little dangerous.",
        "start"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageOrangeTree2",animationList,optionList));
        //_storyPage.push(new PageDropObjectInBasket("pageOrangeTree2",animationList,optionList));


        //////////
        //////////
        //alert("getStoryOranges() 5");

        animationList = [];
        animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"This is the last page.",
        	"You can start over by",
        	"clicking one of the 'start'",
        	"buttons."));


        animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("start",
        "You've had fun and would like to start again.",
        "start"));

        optionList.push(new PageOption("start",
        "You enjoy being in and endless loop, and would really like to start again.",
        "start"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageOrangeTree3",animationList,optionList));


        //////////
        //////////

        //alert("end of getStoryOranges() !!!");

        return _storyPage;


    }
    ////////////////////////////////
    ////////////////////////////////

    function getStoryZapper()   //private function
    {

        _storyPage = [];


        var animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));

        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////

        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyMovingTitle("1 1", 0, -250, 80));
        animationList.push(new MyMovingOrangeTitle("Zapper Game Day", 0, -394, 140));


        optionList = [];
        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You feel like sleeping a little longer.",
        "pageSleep"));

        optionList.push(new PageOption("begin the day",
        _g_pathMainLabel+"You are ready to begin your day.",
        "pageBeginDay"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageTitle",animationList,optionList));


        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"After getting dressed you ask Mom if it's ok to",
        	"play your your favorite computer game, Zapper. ",
        	"She says that you have to do your ",
        	"homework and clean your room first."));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("do homework",
        _g_pathMainLabel+"You go to the living room to work on your homework.",
        "pageDoHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageBeginDay",animationList,optionList));


		 //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));



        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("do homework",
        _g_pathMainLabel+"Now you start working on your math homework.",
        "pageDoMathHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageQuiz1("pageDoHomework",animationList,optionList));

        //PageQuiz1

        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"Solve three math problems.",
        	" ",
        	"Number correct so far:",
        	" "));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("do homework",
        "The homework was fun, so you decide to do some more.",
        "pageDoHomework"));

        optionList.push(new PageOption("clean your room",
        _g_pathMainLabel+"You are eager to clean your room, because then you can play Zapper.",
        "pageCleanRoom"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageMathProblems("pageDoMathHomework",animationList,optionList));

        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackgroundForCleanRoom("MyBackgroundForCleanRoom", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 40,
        	"Clean your room by putting your ",
        	"clothes in the basket. ",
        	" ",
        	" "));



        animationList.push(new MyImage( "shirt",0, 60+35, 127));
        animationList.push(new MyImage( "shoes",0, 60+135, 127));
        animationList.push(new MyImage( "pants",0, 60+235, 127));

        animationList.push(new Ball( "shirt",0, 35, 270));
        animationList.push(new Ball( "shoe",0, 135, 270));
        animationList.push(new Ball( "pants",0, 235, 270));

		animationList.push(new Basket( "Basket",0, 400, 280));

        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("do homework",
        "The homework was so fun that you decide to do a little more.",
        "pageDoHomework"));

        optionList.push(new PageOption("read Zapper instructions",
        _g_pathMainLabel+"You decide to read the Zapper instructions before playing.",
        "pageReadZapperInstructions"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageCleanRoom("pageCleanRoom",animationList,optionList));

        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        animationList.push(new MyTitle("Zapper", 0, 140, 60));
        animationList.push(new MyTitle("Instructions", 0, 80, 140));


        animationList.push(new MyParagraph( 0, 50, 170,
        	"    ",
        	"You need to Zap the aliens.",
        	"(Use keys a, s, d, and w to move the ship.) ",
        	"(Use the space bar to shoot.) "));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("new day",
        "Start another day.",
        "pageSleep"));

        optionList.push(new PageOption("play Zapper",
        _g_pathMainLabel+"You decide to play Zapper now.",
        "pagePlayZapper"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageReadZapperInstructions",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));



        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("new day",
        _g_pathMainLabel+"Start another day.",
        "pageBeginDay2"));

        optionList.push(new PageOption("play Zapper",
        "You decide to play Zapper again.",
        "pagePlayZapper"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PagePlayZapper("pagePlayZapper",animationList,optionList));

        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"Sleeping is wonderful.",
        	"  ",
        	" ",
        	" "));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("sleep",
        "You go into a deep sleep.",
        "pageSleep"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You start dreaming.",
        "pageDream1"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageSleep",animationList,optionList));

        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"You dream of playing Zapper.",
        	"  ",
        	"  ",
        	" "));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("strange turn",
        _g_pathSideLabel+"Your dream takes a strange turn.",
        "pageDream2"));

        optionList.push(new PageOption("sleep",
        "The Zapper dream continues.",
        "pageDream1"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageDream1",animationList,optionList));

        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"Strange little boxes start ",
        	"flying around your head. ",
        	"  ",
        	" "));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("sleep",
        "The dream fades and you drift back into a peaceful sleep.",
        "pageSleep"));

        optionList.push(new PageOption("begin a new day",
        _g_pathSideLabel+"You are ready to begin your day.",
        "pageBeginDay"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageDream2",animationList,optionList));

        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"After getting dressed you ask Mom if it's ok to",
        	"play your your favorite computer game, Zapper. ",
        	"She says that you have to do your ",
        	"homework and clean your room first."));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("do homework",
        "*You go to the living room to work on your homework.",
        "pageDoHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("dddd",animationList,optionList));

        //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"After getting dressed you ask Mom if it's ok to",
        	"play your your favorite computer game, Zapper. ",
        	"She says that you have to do your ",
        	"homework and clean your room first."));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("do homework",
        "*You go to the living room to work on your homework.",
        "pageDoHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("fffff",animationList,optionList));

         //////////
        //////////


        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));

        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));


        animationList.push(new MyParagraph( 0, 50, 180,
        	"After a good night's sleep you ask Mom if it's ok to",
        	"play your your favorite computer game, Zapper. ",
        	"She says that you have to do your ",
        	"homework and clean your room first."));


        //animationList.push(new Ball( "Ball1",0, 70, 60));


        optionList = [];
        optionList.push(new PageOption("do homework",
        _g_pathMainLabel+"You go to the living room to work on your homework.",
        "pageDoHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageBeginDay2",animationList,optionList));




		return _storyPage;
 	}


}//end class
/////////////////////////////////////////////////////////////////////

var _g_pathMainLabel = "*";  //  "*" will show the path  // "" will not show the path
var _g_pathSideLabel = "**";  //  "**" will show the side path  // "" will not show the side path

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
        //////////
        //////////

        animationList = [];
        //animationList.push(new MyMovingTitle("Hello There", 0, 150, 80));
        animationList.push(new MyMovingTitle("Page 1 here", 20, -250, 80));
        //animationList.push(new MyMovingTitle("Page One", -200, -450, 180));


        optionList = [];
        optionList.push(new PageOption("go page2",
        "You decide to try page2.",
        "page2"));

        optionList.push(new PageOption("go page3",
        "You decide to try page3.",
        "page3"));

        //alert("optionList[0].value   "+optionList[0].value);

		
        _storyPage.push(new PageBasic("pageOne",animationList,optionList));
		//so this page has the name "pageOne"
        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitleRotate("page 2", 0, 150, 80));

        optionList = [];
        optionList.push(new PageOption("go page4",
        "You decide to try page4.",
        "page4"));

        optionList.push(new PageOption("go page5",
        "page5 will be next",
        "page5"));

        _storyPage.push(new PageBasic("page2",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 3", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page6",
        "page6 coming up",
        "page6"));

        optionList.push(new PageOption("go page7",
        "page7 might be interesting",
        "page7"));



        _storyPage.push(new PageBasic("page3",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 4", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page8",
        "page8 coming up",
        "page8"));

        optionList.push(new PageOption("go page9",
        "page9 here",
        "page9"));



        _storyPage.push(new PageBasic("page4",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 5", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page10",
        "page10 coming up",
        "page10"));

        optionList.push(new PageOption("go page11",
        "page11 here",
        "page11"));
        
        _storyPage.push(new PageBasic("page5",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 6", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page12",
        "page12 coming up",
        "page12"));

        optionList.push(new PageOption("go page13",
        "page13 here",
        "page13"));



        _storyPage.push(new PageBasic("page6",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 7", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page14",
        "page14 coming up",
        "page14"));

        optionList.push(new PageOption("go page15",
        "page15 here",
        "page15"));



        _storyPage.push(new PageBasic("page7",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 8", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page16",
        "page16 coming up",
        "page16"));

        optionList.push(new PageOption("go page17",
        "page17 here",
        "page17"));



        _storyPage.push(new PageBasic("page8",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 9", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page18",
        "page18 coming up",
        "page18"));

        optionList.push(new PageOption("go page19",
        "page19 here",
        "page19"));



        _storyPage.push(new PageBasic("page9",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 10", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page20",
        "page20 coming up",
        "page20"));

        optionList.push(new PageOption("go page21",
        "page21 here",
        "page21"));



        _storyPage.push(new PageBasic("page10",animationList,optionList));

		//////////
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

		//////////
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

		//////////
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

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("page 14", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go page28",
        "page28 coming up",
        "page28"));

        optionList.push(new PageOption("go page29",
        "page29 here",
        "page29"));



        _storyPage.push(new PageBasic("page14",animationList,optionList));

		//////////
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

		//////////
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

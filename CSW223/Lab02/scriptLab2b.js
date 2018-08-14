function displayInfo(html_id, theInfo){
	//alert("DisplayInfo called");
	document.getElementById(html_id).innerHTML = theInfo;
}

function displayTextBox(){
	//alert("DisplayTextBox called");
	var theInput = document.getElementById("textBox");
	var theValue = theInput.value;
	//alert("theValue " + theValue);
	displayInfo("displayTextHere",theValue)
}

function insertCode(){
	displayInfo("textParagraph", "Hello, testing <b>Bold</b> words.");
}

function randomNumber(){
	//alert("randomNumber()");
	var x = Math.floor((Math.random() * 10) + 1);
	var note = "x = " + x;
	displayInfo("displayNumbers", note);
	//alert("At end of randomNumber()");
}

function moveRedBox(){
	redBoxOver = Math.floor((Math.random() * 300) + 1);
	redBoxDown = Math.floor((Math.random() * 300) + 1);
	drawRedBox();
}

function add(){
	//alert("add() called");
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	
	var num1Value = num1.value;
	var num2Value = num2.value;
	
	//alert("num1Value = " + num1Value + " num2Value = " + num2Value);
	
	var intNum1 = parseInt(num1Value);
	var intNum2 = parseInt(num2Value);
	var sum = parseInt(intNum1 + intNum2);
	
	//alert("Sum is " + sum);
	displayInfo("total",sum);
}
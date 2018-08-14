var _g_canvas;
var _g_context;
var xOver, yDown, gWidth, gStart, gStop;


function init(){
  alert("init() running");

  _g_canvas = document.getElementById("theCanvas");
  _g_context = _g_canvas.getContext("2d");
}
function drawCirlce(){
  alert("drawCircle running!");

  _g_context.beginPath();
  _g_context.arc(xOver,yDown,gWidth,gStart,gStop*Math.PI);
  _g_context.stroke();
}

function inputInfo(form){
  alert("Values Submitted")
  xOver = form.varOver.value;
  yDown = form.varOver.value;
  gWidth = form.varWidth.value;
  gStart = form.varStartDegree.value;
  gStop = form.varStopDegree.value;
}

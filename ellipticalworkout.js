
var rad = 0;
var cycleCounter = 0;
function cycle(goal){
	if (cycleCounter != goal){
		pedal();
		cycleCounter++;
		cycleCounter = cycleCounter%4;
		cycle(goal);
	}
}
function pedal() {
  var woDurationDiv = document.getElementById("woDurationDiv");
  var woStyleDiv = document.getElementById("woStyleDiv");
  var woPaceDiv = document.getElementById("woPaceDiv");
  var planButton = document.getElementById("planButton");
  
  var id = setInterval(frame, 3);
  function frame() {
    if (rad % Math.round(Math.PI * 50) == 0) {
      clearInterval(id);
    } else {
       
      woDurationDiv.style.top = 50 * Math.sin(.01*rad) + 50 + 'px'; 
      woDurationDiv.style.left = 100 * Math.cos(.01*rad) + 300 + 'px'; 
      woStyleDiv.style.top = 50 * Math.sin(.01*rad + Math.PI) + 50 + 'px'; 
      woStyleDiv.style.left = 100 * Math.cos(.01*rad + Math.PI) + 300 + 'px';
      woPaceDiv.style.top = 50 * Math.sin(.01*rad + Math.PI * .5) + 50 + 'px'; 
      woPaceDiv.style.left = 100 * Math.cos(.01*rad + Math.PI * .5) + 300 + 'px'; 
      planButton.style.top = 50 * Math.sin(.01*rad - Math.PI * .5) + 50 + 'px'; 
      planButton.style.left = 100 * Math.cos(.01*rad - Math.PI * .5) + 300 + 'px'; 
    }
    rad++;
  }
}
function styleFocus(){
	woStyleDiv.blur();
	cycle(2);
	woStyleDiv.blur();
	woStyleDiv.focus();
}
let circularcursor = document.getElementById("circularcursor");
let links = document.getElementsByTagName("a");
let canvas = document.getElementById("canvas");

document.onmousemove = function(e){
  circularcursor.style.top = e.clientY + "px";
  circularcursor.style.left = e.clientX + "px";
  canvas.style.background = "hsl(0,0%," + map(e.clientY, 0, window.innerHeight, 25, 100) + "%)";
};

document.onmousedown = function(){
  circularcursor.style.transform = "scale(1.2)";
};

document.onmouseup = function(){
  circularcursor.style.transform = "scale(0.8)";
};

function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};
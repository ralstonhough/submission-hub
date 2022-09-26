let circularcursor = document.getElementById("circularcursor");
let links = document.getElementsByTagName("a");

document.onmousemove = function(){
  circularcursor.style.top = event.clientY + "px";
  circularcursor.style.left = event.clientX + "px";
};
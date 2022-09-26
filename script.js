let circularcursor = document.getElementById("circularcursor");

document.onmousemove = function(){
  circularcursor.style.top = event.clientY + "px";
  circularcursor.style.left = event.clientX + "px";
};
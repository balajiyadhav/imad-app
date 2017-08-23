console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = 'HI I am balaji aka 7r0nr007';
var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft+"px";
}
img.onclick = function(){
    console.log('clicked')
    var interval = setInterval(moveRight,50);
    
}
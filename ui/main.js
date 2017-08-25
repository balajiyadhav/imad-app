//counter
console.log('Loaded!');
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function(){
    //Make a req to counter endpoint
    //get response in variable
    //render in correct span
    var span = document.getElementById('count');
    counter = counter+1;
    span.innerHTML = counter.toString()
}
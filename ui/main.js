//counter
console.log('Loaded!');
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function(){
    console.log('button clicked');
    //Make a req to counter endpoint
    var request = new XMLHttpRequest();
    //get response in variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            console.log('1st if');
            if(request.status == 200){
                //console.log('2nd if');
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                console.log(request.responseText.toString());
            }
        }
    }
    //render in correct span
   request.open('GET','/counter',true);
   request.send(null);
}
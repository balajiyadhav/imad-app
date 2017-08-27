//counter
console.log('Loaded!');
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function(){
    
    //Make a req to counter endpoint
    var request = new XMLHttpRequest();
    //get response in variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                //console.log('2nd if');
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
    //render in correct span
   request.open('GET','/counter',true);
   request.send(null);
};
// for name list
var nameInput = document.getElementById('name');
var name1 = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //displaying name list
     //Make a req to counter endpoint
    var request = new XMLHttpRequest();
    //get response in variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                //console.log('2nd if');
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                console.log(names.length);
                for(var i =0; i < names.length; i++){
                    list += '<li>'+names[i]+'</li><hr/>';
                }
                console.log(list);
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
                
            }
        }
    }
    //render in correct span
    var nameInput = document.getElementById('name');
    var name1 = nameInput.value;
   request.open('GET','/submit-name?name='+name1,true);
   request.send(null);
   
}
// for article one comments

var a1submit = document.getElementById('a1submit_btn');
a1submit.onclick = function(){
    //displaying name list
     //Make a req to counter endpoint
     console.log('submit clicked');
  
    //render in correct span
   
}

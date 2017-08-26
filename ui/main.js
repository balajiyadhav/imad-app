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
}
// for name list
var nameInput = document.getElementById('name');
var name1 = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //displaying name list
    var names = ['name1','name2','name3','name4'];
    var list = '';
    console.log(names.length);
    for(var i =0; i < names.length; i++){
        list += '<li>'+names[i]+'</li>';
    }
    console.log(list);
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
}

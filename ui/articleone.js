console.log("articleone js loaded");
var submit = document.getElementById('a1submit_btn');
submit.onclick = function(){
    console.log('Submit clicked');
        //displaying name list
     //Make a req to counter endpoint
    var request = new XMLHttpRequest();
    //get response in variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            console.log('1st if');
            console.log(request.status);
            if(request.status == 200){
                console.log('2nd if');
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var list = '';
                console.log(comments.length);
                for(var i =0; i < comments.length; i++){
                    list += '<li>'+comments[i]+'</li><hr/>';
                }
                console.log(list);
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
                
            }
        }
    }
    //render in correct span
    var nameInput = document.getElementById('a1name');
    var name1 = nameInput.value;
   request.open('GET','/commenta1?comment='+name1,true);
   request.send(null);
}
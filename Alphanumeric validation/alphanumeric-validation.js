function checkvalidate(){

    var inputalphabet=document.getElementById('alphanumeric').value;

    var letters =/^([a-zA-z0-9]+)([a-zA-z0-9]+)([a-zA-z0-9]+)([a-zA-z0-9]+)$/;

    if(inputalphabet.match(letters)){
            alert("true");
    }
    else{
        alert("false");
    }

}
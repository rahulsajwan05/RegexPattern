function checkvalidate(){

    var inputalphabet=document.getElementById('alphabet').value;

    var letters = /^[a-z A-Z]+$/;

    if(inputalphabet.match(letters)){
            alert("true");
    }
    else{
        alert("false");
    }

}
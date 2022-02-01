
function checkvalidate(){

    var inputalphabet=document.getElementById('url').value;

    var letters = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    if(inputalphabet.match(letters))
    {
            alert("true");
    }
    
    else{
        alert("false");
    }
}
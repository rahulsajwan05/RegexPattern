function checkvalidate(){

    var inputemail=document.getElementById('email').value;

    console.log(inputemail);

    var mailformat =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,20})$/;

    if(inputemail.match(mailformat)){
            alert("true");
    }
    else{
        alert("false");
    }

}
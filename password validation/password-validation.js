function checkvalidate(){

    var inputphone=document.getElementById('pass').value;

    // var phoneno = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;

    var phoneno = /^([a-zA-z0-9]+)([a-zA-z0-9]+)([$&+,:;=?@#]+)$/;

    if(inputphone.match(phoneno)){
            alert("true");
    }
    else{
        alert("false");
    }

}
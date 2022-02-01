function checkvalidate(){

    var inputphone=document.getElementById('phone').value;

    var phoneno = /^[6-9]\d{9}$/;

    if(inputphone.match(phoneno)){
            alert("true");
    }
    else{
        alert("false");
    }

}
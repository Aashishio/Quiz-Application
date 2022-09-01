function shower(){
    var x = document.getElementById("password_input");
    var y = document.getElementById("shower");
    var z = document.getElementById("hider");

    if (x.type === 'password'){
        y.style.display = "none";
        z.style.display = "block";
        x.type = "text";
    }
    else if(x.type === 'text'){
        y.style.display = "block";
        z.style.display = "none";
        x.type = "password";
    }
}

function login(){
    window.location = "2index.html"
}
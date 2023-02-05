function errormessage() {
    document.getElementById("errormsg").style.visibility = "visible";
}

var response = document.getElementById("response");


function conf1(){
    if (response.value == "Shakespeare") {
        window.location.href = "html/lvls/a.html"
    }
    else{
        errormessage();
    }
}

function conf2(){
    if (response.value == "Cenoura") {
        window.location.href = "../lvls/ρ.html"
    }
    else{
        errormessage();
    }
}

function conf3(){
    if (response.value == "Shaco") {
        window.location.href = "../lvls/ο.html"
    }
    else{
        errormessage();
    }
}

function conf4(){
    if (response.value == "Chuva") {
        window.location.href = "../lvls/ύ.html"
    }
    else{
        errormessage();
    }
}

function conf5(){
    if (response.value == "Feliz Aniversário"){
        window.location.href = "../lvls/parabens.html"
    }
    else{
        errormessage();
    }
}
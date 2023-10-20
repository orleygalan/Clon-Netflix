const name1 = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const registro = document.querySelector(".registro");
const proseguir = document.querySelector (".proseguir");    

const myPopup = new Popup({
    id: "my-popup",
    title: "My First Popup",
    content: `
        An example popup.
        Supports multiple lines.`,
});

proseguir.addEventListener("click", function () {
    //  myPopup.show();
});

registro.addEventListener("click", function () {
    if (
        email.value == null ||
        email.value == "" ||
        name1.value == null ||
        name1.value == ""||
        password.value == null ||
        password.value == ""
        
    ){
        document.querySelector(".comprobacion").innerHTML = "porfa llene todas las areas";
    }
    else{
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("name", name1.value);
        document.querySelector(".comprobacion").innerHTML = "";
        window.location.href="sublimacion.html"
    
    }
});



 // presentacion de netflix//

 window.onload = function(){
     $('#final').fadeOut();
 }

//  xammp
// JavaScript Obfuscator Tool
 
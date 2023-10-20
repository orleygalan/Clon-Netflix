

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const registro = document.querySelector(".iniciar");


registro.addEventListener("click", function() {
    if(
        email.value == null ||
        email.value == "" ||
        password.value == null ||
        password.value == "" 
    ){
        document.querySelector(".alerta").innerHTML = "porfa llene todos campos";
    }

    else {
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        console.log("se a guardado correctamente");
        document.querySelector(".alerta").innerHTML = "";
        window.location.href = "continue.html"
    }
});

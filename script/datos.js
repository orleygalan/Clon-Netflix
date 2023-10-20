const email = document.querySelector(".input1");
const password = document.querySelector(".input2");
const boton = document.querySelector(".reguistar");
const alzar = document.querySelector(".alzar")

const myPopup = new Popup({
    id: "my-popup",
    title: "My First Popup",
    content: `
    <input class="login p-[48px]" type="email">
    <h1>ya esta</h1>vamonos</button>

    `,
});

boton.addEventListener("click", function () {
    if (
        input1.value == null ||
        input1.value == "" ||
        input2.value == null ||
        input2.value == ""
    ) {
        // alert("Llene todos los campos");
        document.querySelector("h6").innerHTML = "Debe llenar todos los campos.";
    } else {
        localStorage.setItem("email", input1.value);
        localStorage.setItem("password", input2.value);
        alert("Se guardo el usuario")
    }
});



ancla.addEventListener("click", function () {
    // myPopup.show();

    window.location.href = "vect.html";
});|
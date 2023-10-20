const extremo = document.querySelectorAll(".extremo");

        extremo.forEach((elemento)=>{
        elemento.onclick =()=>{
            localStorage.url =elemento.src;
            window.location.href ="sublimacion.html";
        }
        })
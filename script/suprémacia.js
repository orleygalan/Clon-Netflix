// let swiper = new Swiper  (".mySwiper", {
//   slidesPerView: 4,
//   centeredSlides: true,
//   spaceBetween: 10,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });



class Descripcion {
  constructor (nombre, año, introduccion, actores) {
    this.nombre = nombre;
    this.año = año;
    this.introduccion = introduccion;
    this.actores = actores;
  }
  datos() {
    document.querySelector(".entra").innerHTML =`${this.nombre}`;
    document.querySelector(".bien").innerHTML =`${this.año} ${this.introduccion}`;
  }datos

}

const peli2 = new Descripcion ("los vengadores", 2000 , " violencia total");  
const peli1 = new Descripcion("los torturadores", 2012, "un pobre anciano en la afueras de la ciudadd se encontraba en una finca", "jhonny depp , robert gonzale",);

// let informacion = document.querySelector(".ver1");

function informacion (){
  // console.log("estoy funcionando");
 peli1.datos();
}

document.querySelector(".ver1").addEventListener("click", informacion);


// <h1 class="fixed entra text-white bg-black h-100"></h1>

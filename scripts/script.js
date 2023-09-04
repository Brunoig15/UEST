//Icono del menu
let activo = false;
boton = document.querySelector(".boton-nav");
boton.addEventListener("click", (e) => {
  boton = e.target;
  activo == true
    ? ((boton.className = "bx bx-menu bg-transparent text-black"),
      (activo = false))
    : ((boton.className = "bx bx-menu-alt-left bg-transparent text-black"),
      (activo = true));
});

//Scroll nav
console.log();

window.onscroll = () => {
  const nav = document.querySelector(".navbar");
  scroll = window.scrollY;
  ancho = document.documentElement.clientWidth;
  scroll > 100 && ancho > 768
    ? (nav.style.background = "white")
    : (nav.style.background = "white");
};


//Transiciones
window.sr = ScrollReveal();

//Hero
//subtitulo
sr.reveal('.subtitulo-hero', {
    duration:3000,
    origin: 'left',
    opacity: 0.1,
    
});


//Contenedor
//H2
sr.reveal('.contenedor h2', {
  duration: 1000,
  opacity: 0.1,
  scale: 0.5,
  origin: "left",
  reset:true
});


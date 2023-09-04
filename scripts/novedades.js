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

//Transiciones
window.sr = ScrollReveal();

//Propuestas
//H2
sr.reveal('.contenedor h2', {
  duration: 2000,
  opacity: 0.1,
  scale: 0.5,
  origin: "left",
  reset:true
});
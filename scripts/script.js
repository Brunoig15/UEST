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
    ? (nav.style.borderBottom = ".2rem var(--color-primario) solid", nav.style.background = "white")
    : (nav.style.borderBottom = "none", nav.style.background = "white");
};
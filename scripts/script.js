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
    ? (nav.style.borderBottom = ".8rem rgb(82, 80, 204) solid")
    : (nav.style.borderBottom = "none");
};
const flecha = document.getElementById("flecha");
const texto = document.getElementById("text");
const grid = document.getElementById("grid");
const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu-movile");
const link1 = document.getElementById("link-menu1");
const link2 = document.getElementById("link-menu2");
const link3 = document.getElementById("link-menu3");



flecha.addEventListener("click",()=>{
    grid.classList.toggle("grid-none");
    flecha.classList.toggle("flecha");
});

texto.addEventListener("click",()=>{
    grid.classList.toggle("grid-none");
    flecha.classList.toggle("flecha");
});

hamburguer.addEventListener("click",()=>{
    menu.classList.toggle("menu-none");
});



link1.addEventListener("click",()=>{
    menu.classList.toggle("menu-none");
});

link2.addEventListener("click",()=>{
    menu.classList.toggle("menu-none");
});

link3.addEventListener("click",()=>{
    menu.classList.toggle("menu-none");
});
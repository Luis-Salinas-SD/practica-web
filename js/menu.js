const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread") /* <--- aparece el menu */
})

window.addEventListener('click', (e)=>{

if (menu.classList.contains('spread') && e.target != menu && e.target != hamburger) {
    menu.classList.toggle("spread") /* <---- muestro menu  */
}else{
    /* console.log("no tengo la clase .nav menu, .hamburger-icon o spread"); */
}
})

const imagenes = document.querySelectorAll('.img-gallery');
const imagenesLightbox = document.querySelector('.add-img');
const contenedorImg = document.querySelector('.imagen-light');
const hamburger1 = document.querySelector('.hamburger-icon');

console.log(imagenes);
console.log(imagenesLightbox);
console.log(contenedorImg);

imagenes.forEach((imagen) =>{
    imagen.addEventListener('click',()=>{
        aparecerimg(imagen.getAttribute('src'))
    })
})

contenedorImg.addEventListener('click', (e)=>{
    if(e.target !== imagenesLightbox){
        contenedorImg.classList.toggle('show');
        imagenesLightbox.classList.toggle('show-img');
        hamburger1.style.opacity = '1';
    }
})

const aparecerimg = (imagen)=>{
    imagenesLightbox.src = imagen;
    contenedorImg.classList.toggle('show');
    imagenesLightbox.classList.toggle('show-img');
    hamburger1.style.opacity = '0';
}

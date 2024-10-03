// Seleccionamos los elementos
const menuHamburguesa = document.getElementById('menu-hamburguesa');
const menuBotones = document.querySelector('.menu-botones');

// Añadimos el evento para abrir y cerrar el menú
menuHamburguesa.addEventListener('click', () => {
    menuBotones.classList.toggle('menu-botones-desplegado');
});

const menuHamburguesa = document.getElementById('menu-hamburguesa');
const menuBotones = document.querySelector('.menu-botones');
const header = document.querySelector('.menu');

menuHamburguesa.addEventListener('click', () => {
    menuBotones.classList.toggle('menu-botones-desplegado');
    
    if (menuBotones.classList.contains('menu-botones-desplegado')) {
        const headerHeight = header.offsetHeight;
        menuBotones.style.top = `${headerHeight}px`;
    } else {
        menuBotones.style.top = '';
    }
});

window.addEventListener('resize', () => {
    if (menuBotones.classList.contains('menu-botones-desplegado')) {
        const headerHeight = header.offsetHeight;
        menuBotones.style.top = `${headerHeight}px`;
    }
});
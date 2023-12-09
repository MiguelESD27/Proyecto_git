function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

let currentIndex = 0;
const carruselItems = document.querySelectorAll('.carrusel-item');

function mostrarCarrusel(index) {
    carruselItems.forEach(item => item.classList.remove('show'));
    carruselItems[index].classList.add('show');
}

function avanzarCarrusel() {
    currentIndex = (currentIndex + 1) % carruselItems.length;
    mostrarCarrusel(currentIndex);
}

mostrarCarrusel(currentIndex);

setInterval(avanzarCarrusel, 5000);

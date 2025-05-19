//MENU DESPLEGABLE EN VISTAS PEQUEÑAS

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    toggle.addEventListener("mouseover", function () {
        navbar.classList.add("active");
    });


    navbar.addEventListener("mouseover", function () {
        navbar.classList.add("active");
    });

 
    navbar.addEventListener("mouseout", function () {
        navbar.classList.remove("active");
    });


});

//SLIDERS IMAGENES

document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = [
        { src: "imagenes/fotoinicio.jpeg" },
        { src: "imagenes/Slider1.png", link: "menu.html" },
        { src: "imagenes/Slider2.png", link: "history.html" },
        { src: "imagenes/Slider3.png", link: "rules.html" },
        { src: "imagenes/Slider4.png", link: "dishes.html" },
        { src: "imagenes/Slider5.png", link: "world.html" },
        { src: "imagenes/Slider6.png", link: "biography.html" }
    ];

    let currentIndex = 0;
    const sliderImg = document.getElementById("slider-image");
    const sliderLink = document.getElementById("slider-link");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function updateSlider() {
        sliderImg.src = sliderImages[currentIndex].src;
        sliderLink.href = sliderImages[currentIndex].link;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        updateSlider();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        updateSlider();
    }

    // Avance automático
    setInterval(showNextImage, 5000);

    // Navegación manual
    nextBtn.addEventListener("click", showNextImage);
    prevBtn.addEventListener("click", showPrevImage);
});


function mostrarFechaYHora() {
    const ahora = new Date();
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaFormateada = ahora.toLocaleDateString('es-ES', opciones);
    const hora = ahora.toLocaleTimeString('es-ES');

    const fechaHoraElement = document.getElementById('fechaHora');
    const yearElement = document.getElementById('year');

    if (fechaHoraElement && yearElement) {
        fechaHoraElement.textContent = `Hoy es ${fechaFormateada} - ${hora}`;
        yearElement.textContent = ahora.getFullYear();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarFechaYHora();
    setInterval(mostrarFechaYHora, 1000);
});


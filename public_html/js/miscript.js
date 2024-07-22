// Validación del Formulario
// Validación del Formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre !== '' && correo !== '' && telefono !== '' && mensaje !== '') {
        // Cambiar el mensaje a "Solicitud procesada"
        const mensajeEnviadoDiv = document.getElementById('mensajeEnviado');
        mensajeEnviadoDiv.textContent = 'Solicitud procesada';
        mensajeEnviadoDiv.style.display = 'block';

        // Limpiar el formulario después de mostrar el mensaje
        this.reset();

        // Prevenir el envío del formulario por defecto
        event.preventDefault();
    } else {
        alert('Rellene todos los campos por favor');
        event.preventDefault();
    }
});

// Mostrar información del producto al hacer clic en la imagen
document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        const productInfoDiv = document.getElementById('product-info');
        productInfoDiv.innerHTML = `<h3>${this.alt}</h3><p>${info}</p>`;
        productInfoDiv.style.display = 'block';
    });
});


// Efectos de Animación al Hacer Scroll
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animatable');

    function checkPosition() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
});

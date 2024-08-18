// Manejador de eventos para el botón
document.querySelector('button').addEventListener('click', function (event) {
    alert('Hola!');
    event.stopPropagation(); // Evita que el evento click se propague al div
});

// Manejador de eventos para el div
document.querySelector('div').addEventListener('click', function () {
    alert('Hola! Soy el div');
});

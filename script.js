// Seleccionar el slider y el valor dinámico
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

// Actualizar el valor del slider dinámicamente
slider.addEventListener('input', () => {
  const value = slider.value;
  const max = slider.max;
  const percentage = (value / max) * 100;

  // Actualizar el valor mostrado
  sliderValue.textContent = value;

  // Cambiar el fondo del slider para que refleje el progreso
  slider.style.background = `linear-gradient(to right, rgba(0, 43, 255, 1) ${percentage}%, #FFFFFF ${percentage}%)`;
});


// Animación para las imágenes de calificación al hacer hover
document.querySelectorAll('.rating').forEach((rating) => {
    rating.addEventListener('mouseover', () => {
        const img = rating.querySelector('.rating-img');
        img.style.transform = 'translateY(-5px)';
    });

    rating.addEventListener('mouseout', () => {
        const img = rating.querySelector('.rating-img');
        img.style.transform = 'translateY(0)';
    });
});

// Ajustar el ancho de la barra cargada en el slider
slider.addEventListener('input', () => {
    const percentage = (slider.value / slider.max) * 100;
    slider.style.setProperty('--slider-progress', `${percentage}%`);
});

// Obtener el textarea
const textarea = document.getElementById('textarea');

// Escuchar el evento 'input' para ajustar dinámicamente la altura
textarea.addEventListener('input', function () {
  // Restablecer la altura para calcular correctamente el scrollHeight
  this.style.height = 'auto';

  const newHeight = this.scrollHeight;

  if (newHeight <= 600) {
    // Ajustar la altura hasta un máximo de 200px
    this.style.height = `${newHeight}px`;
  } else {
    // Si supera 200px, habilitar el scroll
    this.classList.add('md-textarea-scroll');
  }
});


// Seleccionar todas las opciones de calificación
const ratings = document.querySelectorAll('.rating');

// Añadir evento click a cada opción
ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    // Remover la clase 'selected' de todas las opciones
    ratings.forEach((r) => r.classList.remove('selected'));

    // Añadir la clase 'selected' a la opción clickeada
    rating.classList.add('selected');

    // Obtener el valor seleccionado (opcional para otras funcionalidades)
    const selectedValue = rating.getAttribute('data-rating');
    console.log('Selección:', selectedValue); // Mostrar en la consola
  });
});


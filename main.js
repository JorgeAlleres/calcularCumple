import './style.css'

document.addEventListener("DOMContentLoaded", function() {
  const inputFecha = document.querySelector('input[type="date"]');
  const output = document.querySelector('p'); // Cambia por el elemento donde quieres mostrar el resultado

  inputFecha.addEventListener("change", function() {
      const fechaSeleccionada = new Date(inputFecha.value);
      const hoy = new Date();

      fechaSeleccionada.setFullYear(hoy.getFullYear());

      if (fechaSeleccionada < hoy) {
          fechaSeleccionada.setFullYear(hoy.getFullYear() + 1);
      }

      const diferenciaDias = Math.ceil( fechaSeleccionada - hoy / (1000 * 60 * 60 * 24));

      output.textContent = `Faltan ${diferenciaDias} días para tu cumple`;
  });
});
import { validarOpciones } from "./validarOpciones.js";
import { validarTextArea, editarMensaje } from "./validarTextArea.js";

/**
 * Captura el elemento abierto seleccionado
 * @param {Element} elemento - El elemento a capturar.
 * @return {boolean|object} - Devuelve falso si no se selecciona ningún valor, de lo contrario, devuelve un objeto con el valor capturado.
 */

export const capturarAbierto = (elemento) => {
  const cajaPregunta = elemento.closest(".cajaPregunta");
  const radios = cajaPregunta.querySelectorAll('input[type="radio"]');
  const mensaje = cajaPregunta.querySelector(".mensaje");
  const textArea = cajaPregunta.querySelector(".textoArea");
  let control = true;

  let valorSeleccionado = null;

  radios.forEach((radio) => {
    if (radio.checked) {
      if (radio.dataset.input === "respuesta abierto") {
        const textoArea = textArea.value;
        valorSeleccionado = {
          respuestaAbierta: radio.value,
          texto: textoArea,
        };
        control = validarTextArea(textArea, mensaje);
      } else {
        valorSeleccionado = radio.value;
      }
    }
  });
  if (valorSeleccionado === null) {
    validarOpciones(mensaje);
    return false;
  } else {
    if (control) {
      let respueta = {
        preguntaNumero: cajaPregunta.id,
        respuesta: valorSeleccionado,
      };

      return respueta;
    } else {
      editarMensaje(textArea, mensaje);
      return false;
    }
  }
};

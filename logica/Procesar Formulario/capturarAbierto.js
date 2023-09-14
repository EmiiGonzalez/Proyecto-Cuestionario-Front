import { validarDato } from "./validarOpciones.js";
import { validarTextArea } from "./validarTextArea.js";
import { editarMensaje } from "./editarMensaje.js";

export const capturarAbierto = (elemento) => {
  const cajaPregunta = elemento.closest(".cajaPregunta");
  const radios = Array.from(cajaPregunta.querySelectorAll('input[type="radio"]'));
  const mensaje = cajaPregunta.querySelector(".mensaje");
  const textArea = cajaPregunta.querySelector(".textoArea");
  const idPregunta = cajaPregunta.id;
  const tipo = "abierto";

  let valorSeleccionado = null;
  let control = true;

  radios.forEach((radio) => {
    if (radio.checked) {
      if (radio.dataset.input === "respuesta abierto") {
        const textoArea = textArea.value.trim();
        valorSeleccionado = {
          respuestaAbierta: radio.value,
          texto: textoArea,
        };
        control = validarTextArea(textArea, mensaje);
      } else {
        valorSeleccionado = radio.value;
      }
      return;
    }
  });

  const controlInput = validarDato(valorSeleccionado, idPregunta, tipo);

  if (valorSeleccionado === null) {
    editarMensaje(mensaje, 1);
    return false;
  } else if (!controlInput) {
    editarMensaje(mensaje, 2);
    return false;
  } else {
    if (control) {
      const respuesta = {
        preguntaNumero: cajaPregunta.id,
        respuesta: valorSeleccionado,
      };
      return respuesta;
    } else {
      editarMensaje(mensaje, 3);
      return false;
    }
  }
};

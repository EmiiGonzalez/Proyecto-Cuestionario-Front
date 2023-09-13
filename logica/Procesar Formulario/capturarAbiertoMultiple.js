import { validarDato } from "./validarOpciones.js";
import { validarTextArea } from "./validarTextArea.js";
import { editarMensaje } from "./editarMensaje.js";

export const capturarAbiertoMultiple = (elemento) => {
  const cajaPregunta = elemento.closest(".cajaPregunta");
  const checkbox = cajaPregunta.querySelectorAll(
    "[data-checkbox='checkbox abierto multiple']"
  );
  const mensaje = cajaPregunta.querySelector(".mensaje");
  const textArea = cajaPregunta.querySelector(".textoArea");
  let control = true;

  let valorSeleccionado = [];
  checkbox.forEach((check) => {
    if (check.checked) {
      if (check.dataset.input === "respuesta abierto multiple") {
        const textoArea = textArea.value;
        const valorAbierto = {
          respuestaAbierta: check.value,
          texto: textoArea,
        };
        control = validarTextArea(textArea, mensaje);

        valorSeleccionado.push(valorAbierto);
      }
      if (check.dataset.input === "checkbox cerrado") {
        valorSeleccionado.push(check.value);
      }
    }
  });

  let controlInput = validarDato(checkbox, valorSeleccionado, cajaPregunta.id);
  if (valorSeleccionado.length <= 0) {
    editarMensaje(mensaje, 1);
    return false;
  } else {
    if (!controlInput) {
      editarMensaje(mensaje, 2);
      return false;
    } else {
      if (control) {
        let respueta = {
          preguntaNumero: cajaPregunta.id,
          respuesta: valorSeleccionado,
        };

        return respueta;
      } else {
        editarMensaje(mensaje, 3);
        return false;
      }
    }
  }
};

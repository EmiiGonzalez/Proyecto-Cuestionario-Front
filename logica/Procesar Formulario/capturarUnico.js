import { validarDato } from "./validarOpciones.js";
import { validarTextArea } from "./validarTextArea.js";
import { editarMensaje } from "./editarMensaje.js";

export const capturarUnico = (elemento) => {
  const cajaPregunta = elemento.closest(".cajaPregunta");
  const radios = cajaPregunta.querySelectorAll(
    'input[type="radio"][name="unico"]'
  );
  const mensaje = cajaPregunta.querySelector(".mensaje");
  const idPregunta = cajaPregunta.id;
  const tipo = "unico";

  let valorSeleccionado = null;

  radios.forEach((radio) => {
    if (radio.checked) {
      valorSeleccionado = radio.value;
    }
  });

  const controlInput = validarDato(valorSeleccionado, idPregunta, tipo);

  if (valorSeleccionado === null) {
    editarMensaje(mensaje, 1);
    return false;
  }
  if (!controlInput) {
    editarMensaje(mensaje, 2);
    return false;
  } else {
    let respueta = {
      preguntaNumero: cajaPregunta.id,
      respuesta: valorSeleccionado,
    };
    return respueta;
  }
};

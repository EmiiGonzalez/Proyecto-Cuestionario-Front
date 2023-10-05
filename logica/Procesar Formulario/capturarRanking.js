import { validarDato } from "./validarOpciones.js";
import { validarCheckRanking, validarRanking } from "./validarRanking.js";
import { validarTextArea } from "./validarTextArea.js";
import { editarMensaje } from "./editarMensaje.js";

export const capturarRanking = (elemento) => {
  const cajaPregunta = elemento.closest(".cajaPregunta");

  const radios1 = document
    .querySelector(".box1")
    .querySelectorAll('input[type="radio"]');
  const radios2 = document
    .querySelector(".box2")
    .querySelectorAll('input[type="radio"]');

  const mensaje = cajaPregunta.querySelector(".mensaje");
  const textArea = cajaPregunta.querySelector(".textoArea");
  const idPregunta = cajaPregunta.id;
  const tipo = "ranking";

  let valorSeleccionado = {
    respValues: "",
    respText: "",
  };
  let control = true;

  radios1.forEach((radio) => {
    if (radio.checked) {
      if (radio.dataset.input === "respuesta ranking") {
        const textoArea = textArea.value.trim();
        valorSeleccionado.respValues += String(radio.value);
        valorSeleccionado.respText = textoArea;
        control = validarTextArea(textArea, mensaje);
      } else {
        valorSeleccionado.respValues += String(radio.value);
      }
    }
  });

  radios2.forEach((radio) => {
    if (radio.checked) {
      if (radio.dataset.input === "respuesta ranking") {
        const textoArea = textArea.value.trim();
        valorSeleccionado.respValues += String(radio.value);
        valorSeleccionado.respText = textoArea;
        control = validarTextArea(textArea, mensaje);
      } else {
        valorSeleccionado.respValues += String(radio.value);
      }
    }
  });

  const controlInput = validarDato(
    valorSeleccionado.respValues.split(""),
    idPregunta,
    tipo
  );
  const controlRanking = validarRanking(valorSeleccionado.respValues);
  const controlCheckRanking = validarCheckRanking(valorSeleccionado.respValues);

  if (controlCheckRanking.ninguno) {
    editarMensaje(mensaje, 1);
    return false;
  }
  if (controlCheckRanking.unosolo) {
    editarMensaje(mensaje, 7);
    return false;
  }
  if (controlRanking) {
    editarMensaje(mensaje, 8);
    return false;
  }
  if (!controlInput) {
    editarMensaje(mensaje, 2);
    return false;
  }
  if (control) {
    const respuesta = {
      preguntaNumero: cajaPregunta.id,
      respuesta: valorSeleccionado.respValues,
      respText: valorSeleccionado.respText,
    };
    return respuesta;
  } else {
    editarMensaje(mensaje, 3);
    return false;
  }
};

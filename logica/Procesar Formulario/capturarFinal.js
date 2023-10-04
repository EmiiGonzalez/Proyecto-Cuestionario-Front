import { validarDato } from "./validarOpciones.js";
import { validarTextArea } from "./validarTextArea.js";
import { editarMensaje } from "./editarMensaje.js";

export const capturarFinal = (elemento) => {
  const mensaje = elemento.querySelector(".mensaje");
  const textArea = elemento.querySelector(".textoArea");
  const idPregunta = elemento.id;
  const tipo = "final";

  let valorSeleccionado = "";
  let control = false;

  const controlInput = validarDato(valorSeleccionado, idPregunta, tipo);

  let cantidadCaracteres = textArea.value.trim().length;
  if (cantidadCaracteres > 180) {
    editarMensaje(mensaje, 5);
    control = false;
  }
  if (cantidadCaracteres >= 4 && cantidadCaracteres <= 150) {
    valorSeleccionado = textArea.value.trim();
    control = true;
  }
  if (cantidadCaracteres === 0) {
    editarMensaje(mensaje, 3);
    control = false;
  }

  if (control && controlInput) {
    return valorSeleccionado;
  }
};

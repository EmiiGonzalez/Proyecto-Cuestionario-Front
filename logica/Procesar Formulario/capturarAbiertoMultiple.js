import { validarDato } from "./validarOpciones.js";
import { validarTextArea } from "./validarTextArea.js";
import { editarMensaje } from "./editarMensaje.js";
import { validarMultiple, mensajeMultilple } from "./validarMultiple.js";

export const capturarAbiertoMultiple = (elemento) => {
  const cajaPregunta = elemento.closest(".cajaPregunta");
  const checkbox = cajaPregunta.querySelectorAll(
    "[data-checkbox='checkbox abierto multiple']"
  );
  const mensaje = cajaPregunta.querySelector(".mensaje");
  const textArea = cajaPregunta.querySelector(".textoArea");
  let control = true;
  const tipo = "abiertoMultiple";

  let valorSeleccionado = [];
  checkbox.forEach((check) => {
    if (check.checked) {
      if (check.dataset.input === "respuesta abierto multiple") {
        const textoArea = textArea.value.trim();
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

  //esto es para validar que no se hayan cambiado los valores desde el inspector de elementos
  let controlInput = validarDato(valorSeleccionado, cajaPregunta.id, tipo);
  //valido que haya entre 1 y 3 opciones seleccionadas
  let cantRespOk = validarMultiple(valorSeleccionado)

  if (!cantRespOk){
    editarMensaje(mensaje, 6);
    return false
  }
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
          tipoR: "multiple",
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

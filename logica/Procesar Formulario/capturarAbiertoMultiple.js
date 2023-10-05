import { validarDato } from "./validarOpciones.js";
import { validarTextArea } from "./validarTextArea.js";
import { editarMensaje } from "./editarMensaje.js";
import { validarMultiple } from "./validarMultiple.js";

export const capturarAbiertoMultiple = (elemento) => {
  const cajaPregunta = elemento.closest(".cajaPregunta");
  const checkbox = cajaPregunta.querySelectorAll(
    "[data-checkbox='checkbox abierto multiple']"
  );
  const mensaje = cajaPregunta.querySelector(".mensaje");
  const textArea = cajaPregunta.querySelector(".textoArea");
  let control = true;
  const tipo = "abiertoMultiple";

  let valorSeleccionado = {
    respValues: "",
    respText: ""
  };
  checkbox.forEach((check) => {
    if (check.checked) {
      if (check.dataset.input === "respuesta abierto multiple") {
        const textoArea = textArea.value.trim();

        valorSeleccionado.respText = textoArea;
        valorSeleccionado.respValues += check.value;
        
        control = validarTextArea(textArea, mensaje);

      }
      if (check.dataset.input === "checkbox cerrado") {
        valorSeleccionado.respValues += check.value;
      }
    }
  });

  //esto es para validar que no se hayan cambiado los valores desde el inspector de elementos
  let controlInput = validarDato(valorSeleccionado.respValues.split(""), cajaPregunta.id, tipo);
  //valido que haya entre 1 y 3 opciones seleccionadas
  let cantRespOk = validarMultiple(valorSeleccionado.respValues, cajaPregunta.id);

  if (!cantRespOk){
    editarMensaje(mensaje, 6);
    return false
  }
  if (valorSeleccionado.respValues.length <= 0) {
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
          respuesta: valorSeleccionado.respValues,
          respText: valorSeleccionado.respText
        };
        return respueta;
      } else {
        editarMensaje(mensaje, 3);
        return false;
      }
    }
  }
};

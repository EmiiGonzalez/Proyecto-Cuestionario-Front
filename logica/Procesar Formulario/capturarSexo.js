import { validarDato } from "./validarOpciones.js";
import { editarMensaje } from "./editarMensaje.js";
export const capturarSexo = (cajaPregunta) => {
   const radios = Array.from(cajaPregunta.querySelectorAll('input[type="radio"][name="sexo"]'));
   const mensaje = cajaPregunta.querySelector('.mensaje');
   const idPregunta = cajaPregunta.id;
   let valorSeleccionado = null;
   const tipo = "sexo";
   for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
         valorSeleccionado = radios[i].value;
         break;
      }
   };

   let controlInput = validarDato(valorSeleccionado, idPregunta, tipo);

   if (valorSeleccionado === null) {
      editarMensaje(mensaje, 1);
      return false;
   } else if (!controlInput) {
      editarMensaje(mensaje, 2);
      return false;
   }
   else {
    let respuesta = {
        preguntaNumero: idPregunta,
        respuesta: valorSeleccionado
    };
    return respuesta;
   }
}

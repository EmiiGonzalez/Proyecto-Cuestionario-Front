import { valoresPreguntas } from "../Cuestionario.js";
import { editarMensaje } from "./editarMensaje.js";

export const capturarEdad = (elemento) => {
    const mensaje = elemento.querySelector('.mensaje');
    const input = elemento.querySelector('.inputEdad');

    const control = (input.dataset.valid === 'true' && (valoresPreguntas.includes(elemento.id)) === true) ? true : false
    
    if (!control) {
        editarMensaje(mensaje, 4);
        return false
    }
    if (control) {
        let respueta = {
            preguntaNumero: elemento.id,
            respuesta: input.value
        }
        return respueta
    }
}

import { cantRespuestasAceptadas } from "../Cuestionario.js";
 
export const validarMultiple = (array, id) => {

    const longitud = array.length;
    let control = true;
    const maxRespuestas = cantRespuestasAceptadas[id];

    longitud > maxRespuestas ? control = false : control = true;

    return control;
}

import { validarOpciones } from "./validarOpciones.js";

export const capturarUnico = (elemento) => {
    const cajaPregunta = elemento.closest('.cajaPregunta');
    const radios = cajaPregunta.querySelectorAll('input[type="radio"][name="unico"]');
    const mensaje = cajaPregunta.querySelector('.mensaje');

    let valorSeleccionado = null;
    

    radios.forEach((radio) => {
        if (radio.checked) {
            valorSeleccionado = radio.value;
        } 
    })

    if (valorSeleccionado === null) {
        validarOpciones(mensaje);
        return false

    } else {
        let respueta = {
            preguntaNumero : cajaPregunta.id,
            respuesta : valorSeleccionado,
        }
        return respueta
    }

    

    //console.log(respueta);
}

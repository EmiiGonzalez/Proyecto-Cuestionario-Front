import { validarOpciones } from "./validarOpciones.js";
export const capturarEscala = (cajaPregunta) => {

    const radios = cajaPregunta.querySelectorAll('input[type="radio"][name="escala"]');
    const mensaje = cajaPregunta.querySelector('.mensaje');

    let valorSeleccionado = null;
    let esNumero = true;
    
    radios.forEach((radio) => {
        if (radio.checked) {
            valorSeleccionado = radio.value;
            esNumero = !isNaN(valorSeleccionado);
        } 
    })
    

    if (valorSeleccionado === null || 
        !esNumero ||
        valorSeleccionado > 0 ||
        valorSeleccionado <= 10) {
        validarOpciones(mensaje);
        return false

    } else {
        let respueta = {
            preguntaNumero : cajaPregunta.id,
            respuesta : valorSeleccionado,
        }
        return respueta
    }
}




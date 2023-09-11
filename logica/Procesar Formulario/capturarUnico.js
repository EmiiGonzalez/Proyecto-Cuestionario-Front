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
        mensaje.classList.remove('disabled');
        mensaje.innerText = "Debe seleccionar una opción";

        setTimeout (() => {
            mensaje.classList.add('disabled');
            mensaje.innerText = "";
        }, 5000); // 5000 milisegundos = 5 segundos

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

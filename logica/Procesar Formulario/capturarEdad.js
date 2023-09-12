export const capturarEdad = (elemento) => {
    const mensaje = elemento.querySelector('.mensaje');
    const input = elemento.querySelector('.inputEdad');

    if (input.dataset.valid === 'false') {
        mensaje.classList.remove('disabled');
        input.classList.add('error-elemento');
        mensaje.innerText = "Por favor ingrese su edad";
        input.dataset.valid = false;
        setTimeout(() => {
            input.classList.remove('error-elemento');
            mensaje.classList.add('disabled');
            mensaje.innerText = "";
        }, 3500);
        return false
    }
    if (input.dataset.valid === 'true') {
        let respueta = {
            preguntaNumero: elemento.id,
            respuesta: input.value
        }
        return respueta
    }
}

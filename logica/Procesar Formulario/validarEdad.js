export const validarEdad = (elemento) => {
    const input = elemento.querySelector('.inputEdad');
    const mensaje = elemento.querySelector('.mensaje');

    input.addEventListener('keyup', (e) => {
        if (input.value < 1 || input.value > 99) {
            mensaje.classList.remove('disabled');
            mensaje.innerText = "Debe ingresar un número entre 1 y 99";
            input.dataset.valid = false;
            setTimeout(() => {
                mensaje.classList.add('disabled');
                mensaje.innerText = "";
            }, 5000); // 5000 milisegundos = 5 segundos
        } else {
            input.dataset.valid = true;
        }
    })
}
export const procesarFormulario = (formulario) => {
    const btnsSiguiente = formulario.querySelectorAll('.btnSiguiente');
        formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnsSiguiente.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const divPadre = e.target.parentElement;
            const idPregunta = divPadre.id;
            const radioSeleccionado = divPadre.querySelector('input[type="radio"]:checked');
            let valorRadio;
            if (radioSeleccionado) {
                 //valorRadio = radioSeleccionado.value;
            }
            
            })
    })
}


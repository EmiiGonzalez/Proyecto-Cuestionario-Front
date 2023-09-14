import { cuestionario } from "./logica/Cuestionario.js";
import { tiposFormulario } from "./logica/generarFormulario.js";
import  {procesarFormulario}  from "./logica/procesarPreguntas.js";


const formulario = document.getElementById('form');

for (const preguntaNumero in cuestionario) {
    let tipo = cuestionario[preguntaNumero].tipo;
    const divGenerar = tiposFormulario[tipo](cuestionario[preguntaNumero]);
    divGenerar.id = preguntaNumero;
    divGenerar.setAttribute('data-preguntatipo', tipo);
    formulario.appendChild(divGenerar);

    if (tipo != 'edad') {
        divGenerar.classList.add('disabled');
    }
}

procesarFormulario(formulario);
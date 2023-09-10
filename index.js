import { cuestionario } from "./logica/Cuestionario.js";
import { tiposFormulario } from "./logica/generarFormulario.js";


const formulario = document.getElementById('form');

for (const preguntaNumero in cuestionario) {
    let tipo = cuestionario[preguntaNumero].tipo;
    const divGenerar = tiposFormulario[tipo](cuestionario[preguntaNumero]);
    formulario.appendChild(divGenerar);
}
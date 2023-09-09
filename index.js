import { generarUnicaOpcion } from "./logica/generarFormulario.js";
import { cuestionario } from "./logica/Cuestionario.js";

const formulario = document.getElementById('form');

for (const pregunta in cuestionario) {
    if (cuestionario[pregunta].tipo === "unico"){
        let div = generarUnicaOpcion(cuestionario[pregunta], pregunta);
        div.id = pregunta;
        formulario.appendChild(div);
    }
    
}
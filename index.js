import { generarUnicaOpcion } from "./logica/generarFormulario.js";
import { cuestionario } from "./logica/Cuestionario.js";
import { generarEscala } from "./logica/generarFormulario.js";
import { generarAbierto } from "./logica/generarFormulario.js";
import { generarMultiple } from "./logica/generarFormulario.js";

const formulario = document.getElementById('form');

for (const pregunta in cuestionario) {
    /*
    if (cuestionario[pregunta].tipo === "unico"){
        let div = generarUnicaOpcion(cuestionario[pregunta], pregunta);
        div.id = pregunta;
        formulario.appendChild(div);
    }

    if (cuestionario[pregunta].tipo === "escala"){
        let div = generarEscala(cuestionario[pregunta]);
        div.id = pregunta;
        formulario.appendChild(div);
    }
    

    if (cuestionario[pregunta].tipo === "abierto"){
        let div = generarAbierto(cuestionario[pregunta]);
        div.id = pregunta;
        formulario.appendChild(div);
        
    }*/

    if (cuestionario[pregunta].tipo === "multiple"){
        let div = generarMultiple(cuestionario[pregunta]);
        div.id = pregunta;
        formulario.appendChild(div);
    }
}
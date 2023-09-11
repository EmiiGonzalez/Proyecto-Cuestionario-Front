import { capturarAbierto } from "./Procesar Formulario/capturarAbierto.js";
import { capturarAbiertoMultiple } from "./Procesar Formulario/capturarAbiertoMultiple.js";
import { capturarEscala } from "./Procesar Formulario/capturarEscala.js";
import { capturarFinal } from "./Procesar Formulario/capturarFinal.js";
import { capturarMultiple } from "./Procesar Formulario/capturarMultiple.js";
import { capturarSexo } from "./Procesar Formulario/capturarSexo.js";
import { capturarUnico } from "./Procesar Formulario/capturarUnico.js";
import { capturarEdad } from "./Procesar Formulario/capturarEdad.js";

export const resultados = [];

export const procesarFormulario = (formulario) => {
    const btnsSiguiente = formulario.querySelectorAll('.btnSiguiente');
        formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    btnsSiguiente.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const divPadre = btn.parentNode;
            const tipo = divPadre.getAttribute('data-preguntatipo');
            
            const respueta = capturarRespuesta[tipo](divPadre)
            
            if (respueta) {
                resultados.push(respueta);
                console.log(resultados);
            }
            
            })
    })

    
}


const capturarRespuesta = {
    unico: capturarUnico ,
    escala: capturarEscala,
    abierto: capturarAbierto,
    multiple: capturarMultiple,
    final: capturarFinal,
    "abierto multiple": capturarAbiertoMultiple,
    edad: capturarEdad,
    sexo: capturarSexo
  }


export const generarUnicaOpcion = ( { texto, tipo, opciones}) => {
    const div = document.createElement('div');
    const text = document.createElement('p');
    text.innerText = texto;
    div.appendChild(text);

    for (const opcion in opciones){
        const label = document.createElement('label');
        const radio = document.createElement('input');
        label.innerText = opciones[opcion];

        radio.type = 'radio';
        radio.name = `${tipo}`;
        radio.value = opcion;
        
        label.appendChild(radio);

        div.appendChild(label);
    }
    return div;
}
 const generarUnicaOpcion = ({ texto, tipo, opciones }) => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  const div2 = document.createElement("div");
  text.innerText = texto;

  div.appendChild(text);
  div.appendChild(div2);

  for (const opcion in opciones) {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    label.innerText = opciones[opcion];

    radio.type = "radio";
    radio.name = `${tipo}`;
    radio.value = Number(opcion);

    label.appendChild(radio);
    div2.appendChild(label);
  }
  return div;
};

 const generarEscala = ({ texto, tipo, opciones }) => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  text.innerText = texto;
  div.appendChild(text);
  for (const opcion in opciones) {
    const div2 = document.createElement("div");
    const label = document.createElement("label");
    label.innerText = opciones[opcion];
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `${tipo}`;
    radio.value = Number(opcion) + 1;

    label.appendChild(radio);

    div2.appendChild(label);
    div.appendChild(div2);
  }

  return div;
};

 const generarAbierto = ({ texto, tipo, opciones }) => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  const div2 = document.createElement("div");

  div.appendChild(text);
  div.appendChild(div2);

  text.innerText = texto;

  for (const opcion in opciones) {
    const div3 = document.createElement("div");
    div2.appendChild(div3);
    if (opciones[opcion].texto) {
      for (const pregunta in opciones[opcion].texto) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        label.innerText = opciones[opcion].texto[pregunta];

        radio.type = "radio";
        radio.name = `${tipo}`;
        radio.value = Number(pregunta);

        label.appendChild(radio);
        div3.appendChild(label);
      }
    }
    if (opciones[opcion].otraForma) {
      const clave = Object.keys(opciones[opcion].otraForma);

      clave.forEach((clave) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        label.innerText = opciones[opcion].otraForma[clave];

        radio.type = "radio";
        radio.name = `${tipo}`;
        radio.value = Number(clave);
        radio.classList.add("otra");

        label.appendChild(radio);
        div3.appendChild(label);
      });
    }
  }
  return div;
};

 const generarMultiple = ({ texto, opciones }) => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  const div2 = document.createElement("div");

  div.appendChild(text);
  div.appendChild(div2);

  text.innerText = texto;
  
  for (const opcion in opciones) {
    const div3 = document.createElement("div");
    div2.appendChild(div3);
    if (opciones[opcion].texto) {
      for (const pregunta in opciones[opcion].texto) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        label.innerText = opciones[opcion].texto[pregunta];

        radio.type = "radio";
        radio.value = Number(pregunta);

        label.appendChild(radio);
        div3.appendChild(label);
      }
    }
    if (opciones[opcion].otraForma) {
      const clave = Object.keys(opciones[opcion].otraForma);

      clave.forEach((clave) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        label.innerText = opciones[opcion].otraForma[clave];

        radio.type = "radio";
        radio.value = Number(clave);
        radio.classList.add("otra");

        label.appendChild(radio);
        div3.appendChild(label);
      });
    }
  }
  return div;
}

 const generarAbiertoMultiple = ({ texto, opciones }) => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  const div2 = document.createElement("div");

  div.appendChild(text);
  div.appendChild(div2);
  
  text.innerText = texto;
  for (const opcion in opciones) {
    const div3 = document.createElement("div");
    div2.appendChild(div3);
    if (opciones[opcion].texto) {
      for (const pregunta in opciones[opcion].texto) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        label.innerText = opciones[opcion].texto[pregunta];

        radio.type = "radio";
        radio.value = Number(pregunta);

        label.appendChild(radio);
        div3.appendChild(label);

      }
    }
    if (opciones[opcion].otraForma) {
      const clave = Object.keys(opciones[opcion].otraForma);

      clave.forEach((clave) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        label.innerText = opciones[opcion].otraForma[clave];

        radio.type = "radio";
        radio.value = Number(clave);
        radio.classList.add("otra");

        label.appendChild(radio);
        div3.appendChild(label);

      })
    }
  }
  return div;
}

 const generarFinal = ({texto}) => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  const textArea = document.createElement("textarea");

  textArea.required = true;
  textArea.classList.add("cuadroTexto");
  text.innerText = texto;

  div.appendChild(text);
  div.appendChild(textArea);


  return div;
}

 const generarEdad = ({texto}) => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  const input = document.createElement("input");

  input.type = "number";
  input.classList.add("inputEdad");
  input.required = true;
  input.placeholder = "Inserte su edad";
  input.name = "edad";
  input.max = 99;
  input.min = 1;

  text.innerText = texto;

  div.appendChild(text);
  div.appendChild(input);

  return div;
 }

 const generarSexo = ({texto, opciones}) => {
  const div = document.createElement("div");
  const text = document.createElement("p");

  text.innerText = texto;

  div.appendChild(text);

  for (const opcion in opciones) {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    label.innerText = opciones[opcion];

    radio.type = "radio";
    radio.name = "sexo";
    radio.value = Number(opcion);

    label.appendChild(radio);
    div.appendChild(label);
  }

  return div;
 }

export const tiposFormulario = {
  unico: generarUnicaOpcion ,
  escala: generarEscala,
  abierto: generarAbierto,
  multiple: generarMultiple,
  final: generarFinal,
  "abierto multiple": generarAbiertoMultiple,
  edad: generarEdad,
  sexo: generarSexo
}
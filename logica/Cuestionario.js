export const cuestionario = {
    edad: {
        texto: '¿Cuál es su edad?',
        tipo: 'edad',
    },
    sexo: {
        texto: '¿Cuál es su sexo?',
        tipo: 'sexo',
        opciones: {
            1: 'Masculino',
            2: 'Femenino'
        }
    },
    p1:{
        texto: '¿Tenía ud. Conocimiento sobre lo que es la Ciber Seguridad o toma recién conocimiento de lo que es la Ciber Seguridad?',
        tipo: 'unico',
        opciones: {
            1: 'Tenia Conocimiento',
            2: 'Recién tomo conocimiento'
        }
    },
    p2:{
        texto: 'Al momento de Conectarse con su dispositivo electrónico ya sea en internet o a Wi Fi Ud. Diría que....',
        tipo: 'unico',
        opciones: {
            1: 'Nunca Tiene en cuenta si el sitio es seguro o no',
            2:'A veces tiene en cuenta si el sitio es seguro o no',
            3: 'Siempre Tengo en cuenta si el Sitio es Seguro o No'
        }
    },
    p3:{
        texto: 'Ahora le voy a pedir que evalue que tan importante es para ud. La ciber seguridad y le voy a pedir que lo haga como en el colegio donde 1 es nada importante y 10 totalmente importante. ¿Que puntaje le asigna ud?',
        tipo: 'escala',
        opciones: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    p4:{
        texto: 'Respecto al uso del contraseñas ud. Diría que…',
        tipo: 'abierto',
        opciones: [{
            texto: {
                1: 'Utiliza siempre la misma contraseña para todas las aplicaciones y/o accesos',
                2: 'Utiliza siempre distintas contraseñas para los accesos y aplicaciones'},
            otraForma: {3: 'Otra forma que no mencione: '}
        }]
    },
    p5:{
        texto: 'Respecto a como acostumbra ud. A generar contraseñas. Ud. Diría que…',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'Que sea Facil de recordar sin tener en cuenta la seguridad ',
            2: 'Que sea compleja teniendo en cuenta la Seguridad ',
            3: 'Que la genere una aplicación' },
            otraForma: {4: 'Otra(Especificar): '}
        }]
    },
    p6:{
        texto: '¿Como acostumbra ud. a guardar sus contraseñas para recordarlas?',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'En forma Digital (incluye gestores, archivos, mensajes en redes sociales)',
            2: 'Fisica (en papel)',
            3: 'Las recuerdo todas de memoria',
            4: 'Uso Siempre la misma para todo',},
            otraForma: {5: 'Otra(Especificar): '}
        }]
    },
    p7:{
        texto: 'Además del uso de contraseñas, ¿Que otros métodos utiliza para acceder a distintas aplicaciones en el uso cotidiano de dispositivos electrónicos?',
        tipo: 'abierto multiple',
        opciones: [{
            texto: {
            1: 'Teléfonos (recepción de código por sms, código por wpp, códigos por email)',
            2: 'Huella digital - Biometrico',
            3: 'Reconocimiento Facial',
           },
            otraForma: {4: 'Otra(Especificar): '}
        }]
    },
    p8:{
        texto: 'Hablemos ahora del uso de redes sociales: de las siguientes situaciones que le voy a mencionar digame cual es la que ud. acostumbra',
        tipo: 'unico',
        opciones: {
            1: 'Siempre utilizo Dispositivos que sean de mi propiedad',
            2: 'A veces utilizo Dispositivos Ajenos',
            3: 'Siempre utilizo dispositivos que no son de mi propiedad'
        }
    },
    p9:{
        texto: 'Respecto a Tu dispositivo Celular me podrías decir según el tipo de abono si es….',
        tipo: 'unico',
        opciones: {
            1: 'Prepago',
            2:'Pago con abono',
            3: 'Solo lo uso con wifi'
        }
    },
    p10:{
        texto: 'En cuanto al uso del celular me gustaría que me dijera ¿con que frecuencia ud. está pendiente del Celular o cada cuanto lo mira para ver si tiene notificaciones o para usar redes sociales y/o aplicaciones?',
        tipo: 'unico',
        opciones: {
            1: 'Estoy pendiente todo el tiempo',
            2: 'Cada 5 minutos',
            3: 'Entre 10 y 15 minutos',
            4: 'Entre 15 y 20 minutos',
            5: 'Entre 20 y 30 minutos',
            6: 'Entre 30 y 45 minutos',
            7: 'Entre 45 y 60 minutos',
            8: 'Menor Frecuencia',
        }
    },
    p11:{
        texto: '¿Cuales es la red social que mas utiliza?',
        tipo: 'ranking',
        rank: 2,
        texto2:'Seleccione la primer red social a la izquierda y la segunda red social a la derecha',
        opciones: [{
            texto: {
            1: 'Facebook',
            2: 'Instagram',
            3: 'Twitter',
            4: 'Tik Tok',
            },
            otraForma: {5: 'Otra(Especificar): '}
        }]
    },
    p12:{
        texto: 'De la siguiente lista de Dispositivos electrónicos me podría decir ud. ¿cual o cuales tiene?',
        tipo: 'abierto multiple',
        opciones: [{
            texto: {
            1: 'Celular',
            2: 'PC',
            3: 'iPad',
            4: 'NetBook del Estado',
            },
            otraForma: {5: 'Otra(Especificar): '}
        }]
    },
    p13:{
        texto: 'Cuando ud. instala Programas o aplicaciones ¿lee los términos y condiciones, No los lee o no sabia que existen los términos y condiciones?',
        tipo: 'unico',
        opciones: {
            1: 'Lee los términos y condiciones',
            2: 'NO lee los términos y condiciones',
            3: 'No sabe de la existencia de Terminos y Condiciones'
        }
    },
    p14:{
        texto: 'Cuando ud. instala programas nuevos a su dispositivo electrónico. ¿Que busca?',
        tipo: 'abierto',
        opciones: [{
            texto: {
            1: 'Busca usar programas con licencia abierta',
            2: 'Busca programas con licencia paga',
            3: 'Busca utilizar con licencia paga pero crackeadas o Piratas'
            },
            otraForma: {4: 'Otra(Especificar): '}
        }]
    },
    p15:{
        texto: 'Cuando ud. instala programas nuevos a su dispositivo electrónico. ¿Que busca?',
        tipo: 'unico',
        opciones: {
            1: 'Utiliza Software de Antivirus Pagos',
            2: 'Utiliza Software de Antivirus Gratuitos',
            3: 'No utiliza software antivirus'
        }
    },
    p16:{
        texto: '¿Utiliza servicios donde ingrese datos bancarios como billeteras virtuales o sitios de Compra?',
        tipo: 'unico',
        opciones: {
            1: 'Si Utiliza',
            2: 'No utiliza',
        }
    },
    p17:{
        texto: 'Para finalizar, me podría comentar ud. ¿cuales son las cosas debe cambiar para ser un usuario ciber seguro o aprovechar al máximo posible la Ciber Seguridad?',
        tipo: 'final'
    }
}

export const valores = {
    sexo: [1, 2],
    p1: [1, 2],
    p2: [1, 2, 3],
    p3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    p4: [1, 2, 3],
    p5: [1, 2, 3, 4],
    p6: [1, 2, 3, 4, 5],
    p7: [1, 2, 3, 4],
    p8: [1, 2, 3],
    p9: [1, 2, 3],
    p10: [1, 2, 3, 4, 5, 6, 7, 8],
    p11: [1, 2, 3, 4, 5],
    p12: [1, 2, 3, 4, 5],
    p13: [1, 2, 3, 4, 5],
    p14: [1, 2, 3, 4],
    p15: [1, 2, 3, 4],
    p16: [1, 2, 3],
    p17: [1, 2],
  };

export const valoresPreguntas = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "sexo", "edad"];

export const cantRespuestasAceptadas = {
    p7: 3,
    p12: 5,
}
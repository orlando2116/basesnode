const { crearArchivo } = require('./multiplicar');



//recibe parametros de consola. con comando node app 'parametro'
let argv = process.argv;

let parametro = argv[2];


let base = parametro.split('=')[1];
crearArchivo(base)
    .then(res => {
            console.log(`archivo ${res} creado`);
        },
        err => {
            console.log(err);
        });
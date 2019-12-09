const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv;
            


let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
console.log(argv.limite);

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(`el archivo ${archivo} fue creado`))
        .catch(err =>{
            console.log(err);
        });
        break;

    default:
        console.log();
}




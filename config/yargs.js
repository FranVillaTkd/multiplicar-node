const opciones = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        default: 10,
        alias: 'l'

    },
}

const argv = require('yargs')
            .command('listar','imprimis la tabla to libre',opciones)
            .command('crear','crear el archivo con el limite y base que quieras',opciones)
            .help()
            .argv;



module.exports = {
    argv
}            
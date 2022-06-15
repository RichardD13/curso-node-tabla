const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('t',{
                    alias: 'tope',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es el tope hasta donde llegará la tabla'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número'
                    }else if( isNaN(argv.t) ){
                        throw 'El tope debe de ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;
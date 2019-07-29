const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    demand: false,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o como pendiente la tarea'
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de múltiplicar')
    .command('crear', 'Crear una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Crear una nueva tarea por hacer', {
        descripcion,
        completado
    })
    .command('eliminar', 'Eliminamos una tarea', {
        descripcion
    })
    .help()
    .argv;



module.exports = argv
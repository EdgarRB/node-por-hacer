const argv = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


/* console.log(argv); */

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('crear tarea');
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        listado.forEach(element => {
            console.log('======Por Hacer======'.green);
            console.log(element.descripcion);
            console.log('Estado: ', element.completado);
            console.log('====================='.green);
        });
        break;
    case 'actualizar':
        let actu = porHacer.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actu);
        break;
    case 'eliminar':
        let eliminar = porHacer.eliminar(argv.descripcion);
        console.log(eliminar);
        break;
    default:
        console.log('No se ha enviado un comando correcto');

}
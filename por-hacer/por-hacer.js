const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            console.log(err);
        else
            console.log('tarea guardada correctamente');
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};


const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();

    return listadoPorHacer;
}

const actualizarTarea = (descripcion, completado = true) => {
    cargarDB();

    let i = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (i >= 0) {
        listadoPorHacer[i].completado = completado;
        guardarDB();
        console.log('La tarea ha sido actualizada');
        return true;
    } else {
        console.log('No se ha encontrado la descripción');
        return false;

    }

}

const eliminar = (descripcion) => {
    cargarDB();

    let i = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (i >= 0) {
        listadoPorHacer.splice(i, 1);
        guardarDB();
        console.log('La tarea ha sido eliminada');
        return true;
    } else {
        console.log('No se ha encontrado la descripción');
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizarTarea,
    eliminar
}
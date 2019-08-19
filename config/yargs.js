const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente el estado de una tarea'
};



const argv = require('yargs')

.command('crear', 'Crear un elemento por hacer', {
    descripcion
})

.command('actualizar', 'Actualizar el estado completado de una tarea', {
    descripcion,
    completado
})


.command('borrar', 'Borra una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}
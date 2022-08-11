const process = require('process');
const funcionesDeTareas = require('./funcionesDeTareas');
//const {leerJson, agregarTarea, deshacer, escribirJson, filtrarPorEstado} = require('./funcionesDeTareas')//desestructuracion
let argument = process.argv[2];

switch(argument){
    case 'listar':
        let listaDeTareas = funcionesDeTareas.leerJson()
        for(let i = 0; i < listaDeTareas.length; i++){
            console.log(`tarea: ${listaDeTareas[i].titulo} \nEstado: ${listaDeTareas[i].estado}`);
            console.log("----------------------------------------------------------------------");
        }
        break;

    case 'agregar':
        let titulo = process.argv[3];
        let estado = process.argv[4];
        funcionesDeTareas.agregarTarea(titulo, estado);
        break;
        
    case 'deshacer': 
        funcionesDeTareas.deshacer();
        console.log('Tarea eliminada.');
        break;
    
    case 'filtrar':
        let filtro = process.argv[3];
        let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(filtro);
        console.log(`tareas filtradas por: ${filtro}`);
        console.log('-------------------------------')
        tareasFiltradas.forEach((e) => {
            console.log(`Tarea: ${e.titulo}`)
            console.log("----------------------")
        });
        break;


    case undefined:
        console.log('Atencion - Tenes que pasar una accion');
        break;
        
    default:
        console.log('No entiendo que queres hacer.')
} 

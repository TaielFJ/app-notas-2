const fs = require('fs');

let funcionesDeTareas = {
    leerJson: function () {
        let tareasJson = fs.readFileSync('./tareas.JSON', 'utf-8');
        let tareasJs = JSON.parse(tareasJson);
        return tareasJs
    },

    escribirJson: function (data) {
        let nuevoJson = JSON.stringify(data);
        fs.writeFileSync('./tareas.JSON', nuevoJson, 'utf-8');
    },

    agregarTarea: function (titulo, estado) {
        let nuevaTarea = {
            titulo: titulo,
            estado: estado
        }

        let tareasAnteriores = this.leerJson();
        tareasAnteriores.push(nuevaTarea);

        this.escribirJson(tareasAnteriores);

       
    },


    deshacer: function () {
        let tareas = this.leerJson();
        tareas.pop();
        this.escribirJson(tareas);
    },

    filtrarPorEstado: function (estado) {
        let tareas = this.leerJson();
        let tareasFiltradasPorEstado = tareas.filter(tarea => tarea.estado == estado);
        return tareasFiltradasPorEstado;
    },


}

module.exports = funcionesDeTareas
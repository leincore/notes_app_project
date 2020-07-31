const fs = require("fs")
const chalk = require("chalk")
const yargs = require("yargs")
yargs.version('1.1.0')

//comandos: add, remove, read, list.

//creando comando add.
yargs.command({
    command: "add",
    describe: "Agregar nueva nota",
    handler: function(){
        console.log("Agregando nota")
    }
})

//creando comando remove.
yargs.command({
    command: "remove",
    describe: "Eliminar nota",
    handler: function(){
        console.log("Eliminando nota")
    }
})


//creando comando read.
yargs.command({
    command: "read",
    describe: "Leer nota",
    handler: function(){
        console.log("Leyendo nota")
    }
})


//creando comando list.
yargs.command({
    command: "list",
    describe: "Listar notas",
    handler: function(){
        console.log("Enlistando notas")
    }
})

console.log(yargs.argv)
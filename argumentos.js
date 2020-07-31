const fs = require("fs")
const chalk = require("chalk")
/*
yargs es un módulo npm que nos permite acceder a los argumentos
de la linea de comandos, más fácilmente.
*/
const yargs = require("yargs")
//Personalizar visibilidad de versión.
yargs.version('1.1.0')
const argumento0 = yargs.argv
/*
process.argv[] captura el argumento que se le de en la linea de comandos.
por defecto es una matriz ["/rutaDeEjecución","rutaDelPrograma","Argumento dado"]
*/
const argumento1 = process.argv[2]
const argumento2 = process.argv[3]

console.log("Comando elegido: ("+ argumento1+") y ("+argumento0+")")
console.log(yargs.argv)

if (argumento1 === "add"){
    console.log("entrando a la linea de comando add")
    console.log("El segundo argumento es: ("+argumento2+")")
}
else if(argumento1 === "remove"){
    console.log("entrando a la linea de comando remove")
    console.log("El segundo argumento es: ("+argumento2+")")
}
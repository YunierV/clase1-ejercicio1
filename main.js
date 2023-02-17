let vacante = require("./moduloVacantes.js")
let aspirante = require("./moduloAspirantes")

// elecion de objecto aleatoriamente
let vacanteR = vacante[Math.floor(Math.random()*3)]
let aspirantesR = aspirante[Math.floor(Math.random()*3)]

//Object.values() : convierte objectos en arrays(listas)
let arrayV = Object.values(vacanteR)
//-let array1 = Object.values(vacante.vacante1);
let arrayA = Object.values(aspirantesR)
//-let array2 = Object.values(aspirantes.persona1);

//array1.concat(array2) : une dos arrays
let arrayR = arrayA.concat(arrayV)
//-let arrays = array1.concat(array2);

//Object.assign() : une dos objectos o mas objectos
let objectoR = Object.assign(aspirantesR,vacanteR)
//-let objectos = Object.assign(vacante.vacante1,aspirantes.persona1)

//impresion en consola

console.log(arrayR) 

console.log(objectoR)
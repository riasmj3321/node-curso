// require("dotenv").config();
// const process = require("node:process");

// if (process.argv[2] === "dev") {
//     console.log("Estás en modo desarrollo");
//   }
  
//   console.log(process.env.NOMBRE);
//   console.log(process.env.EDAD);
//   console.log(process.env.MY_SECRET);
  
//   if(process.env.NODE_ENV === "Fabian") {
//     console.log("Hola Fabian");
//   } else if(process.env.NOMBRE === "Angelo") {
//     console.log("Hola Angelo");
//   } else {
//     console.log("No te conozco");
//   }
  
//   process.on("beforeExit", () => {
//     console.log("El proceso va a terminar");
//   });
  
//   process.on("exit", () => {
//     console.log("El proceso acabó");
//   });
  
//   process.exit(0); // Termina el proceso bien
//   process.exit(1); // Termina el proceso mal



/*
Módulo process (Gestión de procesos):

1 Argumentos de línea de comandos:
Utiliza los argumentos de línea de comandos para mostrar por consola el mensaje "Hola {nombre}" donde {nombre} es el argumento que se pasa al ejecutar el script desde la terminal.

2 Salir del proceso:
Muestra un mensaje de despedida cuando el proceso haya finalizado.

3 Entorno del proceso:
Muestra por consola el valor de una variable de entorno específica para mostrar el mensaje "Estamos en desarrollo" cuando el valor de NODE_ENV sea "development" y "Estamos en producción" cuando sea "production".

4 Utiliza la sintaxis de commonJS.

5 Finalmente crea un script en el package.json que ejecute el código utilizando node (npm run saludar)

Ejemplo de ejecución:
$ npm run saludar "Fabian Gomez"
Hola Fabian Gomez
Estamos en desarrollo
Adios el proceso ha terminado!
*/
require('dotenv').config();


if (process.argv[2]) {
  console.log("Hola " + process.argv[2])
} else {
  console.log("Escriba Algo como argumento en la consola")
  process.exit(1)
}

process.on("exit", () => {
  console.log("hemos finalizado el proceso")
})

if (process.env.NODE_ENV === "development") {
  console.log("Estamos en desarrollo");
} else if (process.env.NODE_ENV === "production") {
  console.log("Estamos en producción");
} else {
  console.log("No hay ninguna variable de entorno");
}

process.exit(0);
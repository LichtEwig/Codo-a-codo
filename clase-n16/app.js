/// Objetos  
const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2021,
    color: 'azul'

  };
  console.log(auto.marca);
  console.log(auto.modelo);
  console.log(auto.año);
  console.log(auto.color);


  console.log(auto['año']);
  console.log(auto['modelo']);


// Creamos un objeto de persona

// const persona = {
//     nombre: 'Juan',
//     edad: 25,
//     ciudad: 'Madrid',
//   };

//   // Agregamos una nueva propiedad usando la sintaxis de punto
//    persona.profesion = 'Programador';

//    console.log(persona);
//    console.log(persona.nombre);
//    console.log(persona['ciudad']);

//   // Agregamos otra propiedad usando la sintaxis de corchetes
//  persona['hobbies'] = ['leer', 'correr', 'viajar'];


//   // Imprimimos el objeto actualizado en la consola

//  console.log(persona);
  // { nombre: 'Juan', edad: 25, ciudad: 'Madrid', profesion: 'Programador', hobbies: ['leer', 'correr', 'viajar'] }


//FOR IN 
//   for (variable in objeto) {
//     // Código a ejecutar en cada iteración
//   } Recorrer el objeto
  // Iteramos sobre el objeto usando el bucle for...in
// for (let propiedad in persona) {
//     console.log(`${propiedad}: ${persona[propiedad]}`);
//  }

// //   // Iteramos sobre el objeto usando el bucle for...in
// //   //con document.white
// for (let propiedad in persona) {
//   document.write(`<p>${propiedad}: ${persona[propiedad]}</p>`);
//   }


  // metodos
  const alumnos = {
    nombre: 'Luciana',
    edad: 25,
    ciudad: 'California',
    presentarse() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  };

 alumnos.presentarse(); // Hola, mi nombre es Juan y tengo 25 años.


 // Object.keys(): devuelve un array de las claves del objeto.
  const persona = { nombre: 'Juan', edad: 25, ciudad: 'Madrid',profesion:'programador' };
  const claves = Object.keys(persona);
  console.log(claves); // ['nombre', 'edad', 'ciudad']

//Object.values(): devuelve un array de los valores del objeto.
const personas = { nombre: 'Talia', edad: 30, ciudad: 'Buenos Aires' };
const valores = Object.values(personas);
console.log(valores); // ['Talia', 30, 'Buenos Aires']


//metodos -  reduce  Array.prototype.reduce(): aplica una función acumulativa a cada elemento del array para reducirlo a un único valor.
  const numeros = [1, 2, 3, 4];
 const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
 console.log(suma); // 10

//*Otros Objectos
// function Persona(nombre, edad, ciudad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
//     this.presentarse = function() {
//       console.log(`Hola, mi nombre es ${this.nombre} , tengo ${this.edad} años y vivo en ${this.ciudad} `);
//     };
//   }

//   const juan = new Persona('Juan', 25, 'Madrid');
//   juan.presentarse();
//   const Julieta = new Persona('Julieta', 13, 'Chascomus');
//   Julieta.presentarse();
//   const messi = new Persona('Lionel',35, 'Paris');
//   messi.presentarse(); //los datos de mi console Hola, mi nombre es Lionel y tengo 35 años
  
  // Hola, mi nombre es Juan y tengo 25 años.
// 'this' se utiliza para acceder al objeto actual en el que se está ejecutando el código y puede ser muy útil para acceder a las propiedades y métodos de un objeto en JavaScript.


//Objetos Funcion!!

// function Persona(nombre, edad, ciudad) {
//     let persona = {};

//     persona.nombre = nombre;
//     persona.edad = edad;
//     persona.ciudad = ciudad;

//     persona.presentarse = function() {
//       console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
//     };

//     return persona;
//   }

//   const juan = Persona('Juana', 25, 'Madrid');
//   juan.presentarse(); // Hola, mi nombre es Juan y tengo 25 años.

/// Obejtos de Clase

  class Persona {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }

    presentarse() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }

 const juan = new Persona('Juan', 25, 'Madrid');
 juan.presentarse(); // Hola, mi nombre es Juan y tengo 25 años.

let tasks = [
  {
    id:1,
    day:'Lunes',
    task:'Leer un libro',
    state:'Pendiente'
  },
  {
    id:2,
    day:'Miercoles',
    task:'Sacar al perro',
    state:'Pendiente'
  },
  {
    id:3,
    day:'Viernes',
    task:'Jugar Videojuegos',
    state:'Pendiente'
    
  }  
];











 /// Ejemplos para practicar con Libro
//   const libro = {
//     titulo: 'Cien años de soledad',
//     autor: 'Gabriel García Márquez',
//     publicado: 1967,
//     paginas: 432,
//     genero: 'Realismo mágico',
//     descripción: function() {
//       console.log(`"${this.titulo}" es un libro de ${this.genero} escrito por ${this.autor}, publicado en ${this.publicado} con ${this.paginas} páginas`);
//     }
//   };

//   console.log(libro['titulo']);
//   console.log(libro['autor']);


//El objetivo de la clase  de sus obejtos con funcion

//   const persona = {
//     nombre: 'Juan',
//     edad: 25,
//     ciudad: 'Madrid',
//     hobbies: ['leer', 'correr', 'viajar'],
//     saludar: function() {
//       console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
//     }
//   };
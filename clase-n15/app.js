/// Arrays 

/// Son colecciones de datos en formato de matriz o vector.


const frutas = ['Manzana para tarta','Frutilla','Naranja','Melon' ];
const fruta = [ 'tomate', 'mandarina'];
console.log(frutas);


console.log(frutas[2]);

console.log(frutas.at(3));

// const datos = ["Jose",23 , true, "Calle False 123"];

// console.log(datos);

// console.log(datos.length);


frutas.push('Anana');
console.log(frutas);

frutas.unshift('Pera');
console.log(frutas);

 frutas.pop();
frutas.pop();
console.log(frutas);
// frutas.pop();

frutas.shift();
console.log(frutas);

 const precioRemeras = [100, 350, 600 ];
 const precioMedias = [ 50, 60 ,90];

const precio = precioRemeras.concat(precioMedias);

console.log(precio);


const elements = ['Aire', 'Agua', 'Tierra','Fuego'];
console.log(elements.join());
console.log(elements.join(' '));
console.log(elements.join('-'));


const nombres = 'Matias, Lucas, Marta, Lorena, Luz';
// // una posicion de su indice 

console.log(nombres);

console.log(nombres.split(','));


const animales = [ 'Pato', 'Perro', 'Gato', 'Loro', 'Puma'];

console.log(animales);
//no va a mutar mi array original
//console.log(animales.slice(2,5)); 

///splice - va a mutar mi array original
//console.log(aniamles.splice(3));

console.log(animales.sort());

precio.sort((a,b) => a - b);
console.log(precio); // 1 . 2 .3


const aray =[1 , 2 , 3, 4, 5,6];

aray.forEach(x => {
  console.log(x);
 });

const pasarVal = aray.every(num => num > 4);
console.log(pasarVal); //false

// //some 

const somme = aray.some(num => num > 4); 
console.log(somme); //true


const summArray= aray.reduce((total,valor) => total + valor,0);
console.log((summArray)); // LA suma de todos los valores que tenga mi array


// //transformador 


const sumaMas = aray.map(num => num + 2);
console.log(sumaMas);
console.log(aray);

//Tranforma cada numero, multiplicando por 2
let multiplicar = [1, 2 , 3].map(numero => numero * 2);
console.log(multiplicar);


// //Filtro 

const filtro = aray.filter(num => num >= 3);
console.log(filtro);

// //buscar 

const numer = [200, 45,351, 1000];

const numeros  = numer.find((numer) => numer > 350);
console.log(numeros);
console.log(numer);
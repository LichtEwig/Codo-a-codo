/// 
//let entrada = prompt ('Ingresa tu nombre: ');

//alert(entrada);  // ventana de alerta de mi 

variable
let a= '23'; //es un string 
ac = 'abc';
const al= 'tercer';
console.log(ac);
console.log(al);
let b= '50';
//console.log(entrada);

let cadenas= 'Hola Mundo';  // String de texto 
let palabras = 'Estudiamos los metodos'; //22 letras con length
let numero=23;     //numerico Num
let booleano =true;  
let nulo =null;
let indefinido = undefined; // no definido
let symbol = Symbol();  
let objeto = {
    propiedad: 'valor 5',
    propie:'valor 3'
}

alert(cadenas);
console.log(numero);
console.log(booleano);
console.log(nulo);
console.log(indefinido);
console.log(symbol);
console.log(objeto);

console.log( cadenas.toUpperCase());
console.log(cadenas.toLowerCase());
console.log(palabras.length + ' contar mis caracteres');
console.log(palabras.repeat(3));
console.log(cadenas.replace(cadenas,palabras));
document.write(cadenas.toUpperCase());


parseInt(a);
console.log(a);

parseFloat(b); //se queda el numero  1  + 2 + 3 
console.log(b);

let suma= a + b;
console.log(suma);

let lolo= 5;    //el dato es de tipo numerico 
let num= '20';  //dato de tipo string 
let num2= '8'; //valor string  -- a el numero con ParseInt 
let blu = false  || true ; 
var numer = 23;

var resultado = num + num2;
console.log(parseInt(num) + parseInt(num2));  //va a cambiar su variable
var resultado= num - num2;
console.log(resultado);
var resultado= num / num2;
console.log(resultado);
var resultado= num * num2;
console.log(resultado);
var resultado= num % num2;
console.log(resultado);

console.log(numer +=10); 
console.log(numer-= 1);
console.log(numer);
numer **=10;
console.log(numer);
numer *=2;
console.log(numer);
numer /=2;
console.log(numer);
numer %=2;
console.log(numer);


// if
const edad = 18;
if(edad >=18){
    console.log('Es mayor de edad');
}else if{
    console.log('Es menos de edad');
}

//if else   - 

const edades = 18;
if(edad <18){
    console.log('Es menor de edad');
}else if (edades >=18 && edades <=21){
    console.log('Tiene entre 18 y 21 años');
}else {
    console.log('Tiene mas de 21 años');
}

//switch 
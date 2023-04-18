var num = 50;
var num2 = 5; 
var num3= 22; //variable global 
// var num = prompt('Ingrese su primer numero');
//var num2 = prompt('Ingrese un segundo numero');
let numeros = 15.6;

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


// var num = 50;
// var num2 = 5; 
// var num3= 22;
//Tabla de la verdad logica 
var loand =(num < 12) && (num3 > 20);
console.log(loand);

var logicaor =(num < 12 ) || (num3 >=20);
console.log(logicaor);

console.log(!loand);
console.log(!logicaor);


// if
// const edad = 21;

// if(edad >=18){
//     console.log('Es mayor de edad');
// }else {
//     console.log('Es menos de edad');
// }



const edades = 18;
let ingresa = prompt('Ingrese su edad: '); 
if(ingresa < 18){
    console.log('Es menor de edad');
}else if (ingresa >=18 && ingresa <=21){
    console.log('Tiene entre 18 y 21 años');
}else {
    console.log('Tiene mas de 21 años');
}


let mascota  = 'perro';
let respuestas = prompt ('Decime que mascota tiene? , en minuscula');
switch (respuestas){
    case 'gato':
        console.log('Tengo un gato');
        break;
    case 'perro':
        console.log('Tengoo un perro');
        break;
    case 'loro':
        console.log('Tengo un loro');
        break;
    default:
        console.log('No tengo esas mascota');
        break;

}

 



for (let a =0; a < 12; a++){
    console.log('El valor de a es : ' + a );
}

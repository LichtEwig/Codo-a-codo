#Arrays 
## Son colecciones de datos en formato de matriz o vector.

let frutas = ["Manzana","Frutilla","Uva","Melon","Sandia" ];
console.log(frutas);

#" Array Methods 

//Agregar al final de mi array .push ("") Lo agrega al final

 frutas.push("Cereza");
console.log(frutas);


//Agregar un elemento al princioo d ela lista
 frutas.unshift("Banana");
console.log(frutas);

//Elimna ultimo elemento de mi array de mi lista de array .pop 
frutas.pop();
console.log(frutas);

//Eliminar el primer elemento del array .shift 
frutas.shift();
console.log(frutas);


// var frutass = ["Banana","Manzana","FRutilla","UVA","Melon"];
// console.log(frutass);
// //iterar
//  for (i = 0; i < frutass.length; i++){
//    console.log(frutass[i]);
//  }

//Voy a forEach voy a recorrer cada una de mis valores (value) y su pocion (index)
// const array1 = ['a', 'b', 'c'];
// array1.forEach(function(value, index){
// console.log(value,index);
// console.log(index);
// })
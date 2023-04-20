// clase N° 14 - Funciones y Callback  es una funcion que se utiliza como parametro

//Estructura de Function 
///Funcion declarada  
///function sumar(){}

/// Funcion Expresada
///const sumar = function(){};

// let i = 10;

// while (i <= 10) {
// 	document.write("El valor del bucle es: " + i + "<br>");
// 	i++;
// }
    

// do while 
// let y = 1;
// do{
//     document.write(y + "<br>");
//      y = y + 1;
// }
// while(y<=9);




function saludar(){
    //todo lo que necesite que realice esta funcion
    console.log('Hola mundo!! ');

}

saludar();



function sumar(){
    let resultado = 33 + 18;
    return resultado;
}

let suma = sumar(); // declaro suma e inicializo con el valor que contenga sumar, que se encuentra en resultado
console.log(suma + 7); //58

function sumaa(x , y){
    return x + y;
}

console.log(sumaa(30,8));

function resta (x , y){
    return x - y;
}

console.log(resta(60,80));


function divivir (x , y){
    if (y == 0){
        console.log("No se puede divir por cero");
    }else {
        return x / y;
    }
}

console.log(divivir(60, 6));


const sumarr = (a,b) => a + b;

console.log(sumarr);


const sumo = (a , b , callback) => {
    let resultado = a + b;
    callback (resultado);
};

sumo(10 , 7, function(suma){
    console.log('El Valor retornado es: ', suma); //por console.log puedo serapar mi texto de la variable con coma ,
});

sumo(8, 4 , function(suma){
    alert('El valor que aparece es: ' + suma); //utilizo alert o document.write = voy escribir mi mensaje '+' mi variable ${variable}
});

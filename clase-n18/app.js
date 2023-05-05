
const h1 =document.querySelector('h1')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular'); // boton 
const pRespuesta = document.querySelector('#resultado'); // boton 


//escuchar los eventos  click 
//Una de las formas  
// function btnFuncion(){
//     console.log(input1.value + input2.value);
//     const imprimir = pRespuesta;
//     imprimir.innerHTML =  `${input1.value + input2.value}`
//     console.log(imprimir)
// }


// const imprimir = pRespuesta
// imprimir.innerHTML =  `${input1.value + input2.value}`?
// console.log(imprimir)

// function btnOnClick(){
//     const sumaImputs = input1.value + input2.value;
//     pRespuesta.innerHTML = "Resultado:   " +  sumaImputs;
// }

// function btnFuncion() {
//     console.log(`${Number(input1.value) + Number(input2.value)}`);
//     console.log(typeof(input1.value));
//     console.log(typeof(input2.value));
// }


const body = document.querySelector('body');
const val1 = document.querySelector('#valor1');
const val2 = document.querySelector('#valor2');
const cal = document.querySelector('#calculador');
const sum = document.querySelector('#sum');
const rest = document.querySelector('#rest');
const mul = document.querySelector('#mul');
const divi = document.querySelector('#divi');

const respuestaFinal = document.querySelector('#respuesta');

function calculador(){
    let value1 = Number(val1.value);
    let value2 = Number(val2.value);
    let resValue = 0; // initialize the result value
    
    if(sum.checked){
        resValue = value1 + value2;
    }else if(rest.checked){
        resValue = value1 - value2;
    }else if (mul.checked){
        resValue = value1 * value2;
    }else if(divi.checked){ // fixed typo here
        resValue = value1 / value2;
    }else{
        respuestaFinal.innerHTML = 'Por favor seleccione una operación'; // added error message
        return; // return early if no operation is selected
    }

    respuestaFinal.innerHTML = 'El valor calculado es: ' + resValue;
}



// //poder hacer con addEventListener(evento,funcion)
// // btnOnClick en html lo llamamos con parectesis () - ya que llabamos  la funcion
// //PEro con addEventListener, sobre que elemento va hacer va funcionar, luego que evento va a escuchar y cual es la funcion que debe mandar a llamar. 
// //Solo de decimos el nombre de la funcion que deseamos ejecutar
// //devo retiar el Onclick de HTML 

// // btn.addEventListener('click',btnOnClick)
// // function btnOnClick(){
// //     const sumaImputs = input1.value + input2.value;
// //     pRespuesta.innerHTML = "Resultado:   " +  sumaImputs;
// // }



// const input1 = document.querySelector("#calculo3"); 
// const form = document.querySelector("#form"); 
// const input2 = document.querySelector("#calculo4"); 
// const btn = document.querySelector("#btnCalcular3"); 
// const suma = document.querySelector("#sumaid");

// //addEventListener

// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e){
//     e.preventDefault();

//     alert("virus")
// }
// console.log("Hello world!");

// //creacion de variable  
// const URL='https://api.thecatapi.com/v1/images/search';


// fetch(URL)
// //PRomesas
// .then(res => res.json())
// .then(datos =>{
//     console.log('datos');
//     //manipulacion del dom 
//     const img = document.querySelector('img');
//     img.src = datos[0].url;


// });

const API_URL ='https://api.thecatapi.com/v1/images/search?limit=10';

//funcion que se va a activar para 
async function reload(){
    const res =  await fetch(API_URL);
    const data =await res.json();
    console.log(data);

    //manipulacion del dom 
    const img1 = document.getElementById('imagen1');
    const img2 = document.getElementById('imagen2');
    const img3 = document.getElementById('imagen3');
    const img4 = document.getElementById('imagen4');
    const img5 = document.getElementById('imagen5');
    const img6 = document.getElementById('imagen6');
    const img7 = document.getElementById('imagen7');
    const img8 = document.getElementById('imagen8');
    const img9 = document.getElementById('imagen9');
    
    imagen1.src = data[0].url;
    imagen2.src = data[1].url;
    imagen3.src = data[2].url;
    imagen4.src = data[3].url;
    imagen5.src = data[4].url;
    imagen6.src = data[5].url;
    imagen7.src = data[6].url;
    imagen8.src = data[7].url;
    imagen9.src = data[8].url;
    
}
//me permite recargar la imagen sin tener la imagen dañada
reload();




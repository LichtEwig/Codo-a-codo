// llamar a todos los personajes que visualizar 

import { getCharacters } from "./services/getData.js";


//romamos el main de container  


const container = document.querySelector('#characters');
const loader = document.getElementById('lds-ring');


// llamar a todos los personajes  

const charactersList = async (page = 1) =>{  //por defecto page es 1 puede cambiar y jugar con este numero

    //mostrar el loader
    loader.style.display = 'grid';

    //pedimos todos los personajes 
    const {results} = await getCharacters(page);

      //ocultar el loader
      loader.style.display = 'none';

    results.forEach(character => {
        const article =document.createElement('article');
        article.setAttribute('class','character');
        article.innerHTML =  `
                <img src="${character.image}" alt="" > 
                <h2>${character.name}</h2>
                <div> 
                    <p>${character.species}</p> 
                    <p class="${character.status.toLowerCase()}"></p>
                </div>
                 <a href="/#/${character.id}"> Ver detalle</a>  
                
                
                `;
                container.appendChild(article);
        
    });


}


charactersList();

window.addEventListener('haschange', () =>{
    const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    localStorage.setItem('charID', id);
    window.location.replace('/characters');
});

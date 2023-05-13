/// Conexion de la La API  


const baseURL = 'https://rickandmortyapi.com/api';


/** 
 * Funcion asicona que realizar una peticion a la PI 
 * con el fin de taer la data de un personaje en particular
 * @param id  - numero de character que necesitamos 
 * 
 * 
 */

const getCharacter = async (id) =>{
    const res = await fetch(`${baseURL}/character/${id}`);
    const data = await res.json();

    return data;
}



/** 
 * 
 * Funcion de asincrona que realiza una peticion a la aPI con el fin de traer la pagina
 * de personajes solictada 
 * 
 * 
 * @param page
 * 
 */

const getCharacters = async (page) =>{
    //https://rickandmortyapi.com/api/character/?page=19
    const res = await fetch(` ${baseURL}/character/?page=${page}`);
    const data = await res.json();

    return data; 
}


export { getCharacters, getCharacter };
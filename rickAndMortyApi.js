const fetch = require('node-fetch');

const getCharacter = async(id) => {
    const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const newData =  await result.json();
    const charObj = { 
        name: newData.name, 
        status: newData.status,  
        species: newData.species 
    }
    return charObj
};

const getManyCharacters = async(ids) => {
    const result = await Promise.all(ids.map(item =>
        getCharacter(item)
    )); 
    return result
}


module.exports = {
    getCharacter,
    getManyCharacters
}
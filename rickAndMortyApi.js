const fetch = require('node-fetch');

const getCharacter = id => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(data => {
        return data.json();
    }) 
    .then(data => {
        return {
            name: data.name,
            status: data.status,
            species: data.species
        }
    })
}


module.exports = {
    getCharacter
}
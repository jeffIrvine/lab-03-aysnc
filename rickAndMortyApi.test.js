const fetch = require('node-fetch');
const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');


describe('fetches some character or characters from the rick and morty api', () => {

    it('returns one character given that id', async() => {
        const result = await getCharacter(1)

        expect(result).toEqual({
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human'
        })
    })


    it('returns many characters', async() => {
        const result = await getManyCharacters([2, 3, 4])

        expect(result).toEqual([
        {
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human'
        }, 
        {
            name: 'Summer Smith',
            status: 'Alive',
            species: "Human"
        }, 
        {
            name: 'Beth Smith',
            status: 'Alive',
            species: 'Human'
        }])
    })
}); 
const fetch = require('node-fetch');
const { getCharacter } = require('./rickAndMortyApi');


describe('fetches an Id from the api', () => {

    it('', async() => {
        const result = await getCharacter(1)

        expect(result).toEqual({
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human'
        })
    })
}); 
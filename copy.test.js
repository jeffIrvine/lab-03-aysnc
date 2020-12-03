const fs = require('fs').promises;
const { copyAFile } = require ('./copy')

describe('creates and exports a copy of a file', () => {
    afterEach(() => {
        return fs.rm('./scratch2.txt')
    });

    it('', async() => {
        return copyAFile('./scratch.txt', './scratch2.txt')
        .then(() => {
            return fs.readFile('./scratch2.txt', 'utf-8')
        })
        .then((data) => {
            expect(data).toEqual('Test Test Test')
        })
    })
});

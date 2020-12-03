const fs = require('fs').promises;
const { transform } = require('./transform')

describe('takes string removes the caps then caps and reverses the strings', () => {
    it('', () => {
        return transform('./random.txt')
        .then(data => {
            expect(data).toEqual('HAL HAL HAL')
        })
    })
})
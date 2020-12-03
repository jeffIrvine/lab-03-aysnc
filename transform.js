const fsPromises = require('fs').promises;

const transform = (source) => {
    return fsPromises.readFile(source, 'utf-8')
    .then(data => {
        return data.replace(/[^a-z\s]/g, '');
    })
    .then(data => {
        return data.toUpperCase()
    })
    .then(data => {
        return data.split('').reverse().join('')
    })
}

module.exports = {
    transform
}
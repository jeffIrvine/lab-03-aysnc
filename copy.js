const fs = require('fs').promises;

const copyAFile = (file, destination) => {
    return fs.readFile(file, 'utf-8')
    .then(data => {
       fs.writeFile(destination, data)
    })
    .then(() => {
        console.log('done!')
    })
    .catch(err => {
        console.log(err);
    });
}


module.exports = {
    copyAFile
}
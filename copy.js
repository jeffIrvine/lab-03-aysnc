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

// async function copyAFile(source, destination) {
//     try {
//         const readData = await fs.readFile(source, 'utf-8' )
//         await fs.writeFile(readData, destination)

//     } catch(err) {
//         console.log(err);
//     }
// }
copyAFile('./README.md', './README3.md')

module.exports = {
    copyAFile
}
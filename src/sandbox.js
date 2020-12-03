// const fsPromises = require('fs').promises;

fsPromises.readFile('./README.md', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

// fsPromises.writeFile('./README.md', 'hello there!')
//     .then(data => {
//         console.log('done!');
//     })
//     .catch(err => {
//         console.log(err);
//     })

// fsPromises.readFile('./README.md', 'utf-8')
//     .then(data => {fsPromises.writeFile('./README2.md', data)
//     })

//     .catch(err => {
//         console.log(err);
//     })
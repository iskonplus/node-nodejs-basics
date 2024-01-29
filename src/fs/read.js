import fs from 'fs';
const errorCopy = new TypeError('FS operation failed');

const read = async () => {
    fs.readFile('./src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
        err ? console.error(errorCopy.message) : console.log(data);
    });
};

await read();
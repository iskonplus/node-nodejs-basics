import fs from 'fs';
const errorlist = new TypeError('FS operation failed');

const list = async () => {
    fs.readdir('./src/fs/files', (err, files) => {
        err ? console.error(errorlist.message) : console.log(files);
    });
};

await list();
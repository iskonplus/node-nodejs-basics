import fs from 'fs';
const errorCopy = new TypeError('FS operation failed');

const copy = async () => {
    fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true, force: false, errorOnExist: true }, err => {
        err && console.error(errorCopy.message);
    });
};

await copy();

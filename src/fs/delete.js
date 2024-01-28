import fs from 'fs';
const errorDelete = new TypeError('FS operation failed');

const remove = async () => {
    fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
        err && console.error(errorDelete.message);
    });
};

await remove();
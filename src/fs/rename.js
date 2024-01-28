import fs from 'fs';
const errorRename = new TypeError('FS operation failed');

const rename = async () => {
    fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
        err && console.error(errorRename.message);
    });
};

await rename();
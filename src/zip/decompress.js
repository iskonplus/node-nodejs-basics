import fs from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const readFileStream = fs.createReadStream('./src/zip/files/archive.gz');
    const writeFileStream = fs.createWriteStream('./src/zip/files/fileToCompress.txt');

    readFileStream.pipe(createGunzip()).pipe(writeFileStream);
};

await decompress();
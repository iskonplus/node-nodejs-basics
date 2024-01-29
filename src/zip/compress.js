import fs from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const readFileStream = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    const writeFileStream = fs.createWriteStream('./src/zip/files/archive.gz');

    readFileStream.pipe(createGzip()).pipe(writeFileStream);

};

await compress();

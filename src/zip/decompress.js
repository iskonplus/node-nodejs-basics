import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'archive.gz');
const unzipFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const uncompress = createGunzip();


const decompress = async () => {

  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(unzipFilePath);

  readStream
    .pipe(uncompress)
    .pipe(writeStream)
    .on('error', err => console.error(err))

};

await decompress();
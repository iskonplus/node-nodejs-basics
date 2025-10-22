import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archiveFilePath = path.join(__dirname, 'files', 'archive.gz');

const compressFile = createGzip();

const compress = async () => {
  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(archiveFilePath);

  readStream
    .pipe(compressFile)
    .pipe(writeStream)
    .on('error', err => console.error(err))

};

await compress();

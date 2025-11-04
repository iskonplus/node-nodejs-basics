import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {

  const stream = createReadStream(filePath);

  stream.pipe(process.stdout);
  stream.on('error', err => console.error(err));

};

await read();

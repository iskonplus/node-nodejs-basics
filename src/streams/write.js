import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {

  const writeStream = createWriteStream(filePath);

  writeStream.on('error', err => console.error(err));
  process.stdin.pipe(writeStream);

};

await write();

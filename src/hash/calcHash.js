import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', chunk => hash.update(chunk));
  stream.on('end', _ => console.log(hash.digest('hex')));
  stream.on('error', err => console.error(err));

};

await calculateHash();

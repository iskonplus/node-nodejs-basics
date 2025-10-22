import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  readFile(filePath, 'utf8')
    .then(data => console.log(createHash('sha256').update(data).digest('hex')))
    .catch(err => console.log(err));
};

await calculateHash();

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir } from 'fs/promises';

const error = new TypeError('FS operation failed');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files');

const list = async () => {
  readdir(filePath)
    .then(data => console.log(data))
    .catch(err => {
      err && console.error(error.message);
  })
};

await list();

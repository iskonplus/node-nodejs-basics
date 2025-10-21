import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { rename as fsRename } from 'fs/promises';

const error = new TypeError('FS operation failed');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  fsRename(filePath, newFilePath)
    .catch(err => {
      err && console.error(error.message);
    })
};

await rename();

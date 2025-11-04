import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cp } from 'fs/promises';

const error = new TypeError('FS operation failed');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files');
const copyFilePath = path.join(__dirname, 'files_copy');

const copy = async () => {

  cp(filePath, copyFilePath, { recursive: true, force: false, errorOnExist: true })
    .catch(err => {
      err && console.error(error.message);
    })
};

await copy();

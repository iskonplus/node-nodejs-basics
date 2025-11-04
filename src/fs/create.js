import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { writeFile } from 'fs/promises';

const error = new TypeError('FS operation failed');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "files", "fresh.txt");
const fileContent = 'I am fresh and young';

const create = async () => {

  writeFile(filePath, fileContent, { flag: 'wx' })
    .catch(err => {
      err && console.error(error.message);
    });
};

await create();

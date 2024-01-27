import path from 'path';
import { fileURLToPath } from 'url';
import { join } from 'path';
import { writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const newFilePath = join(__dirname, 'files', 'fresh.txt');

    writeFile(newFilePath, 'I am fresh and young', { flag: 'wx' })
        .catch(() => {
            throw new TypeError('FS operation failed');
    });
};

await create();
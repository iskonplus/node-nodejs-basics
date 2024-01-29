import { createWriteStream } from 'fs';

const write = async () => {
    const writeFileStream = createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(writeFileStream);
};

await write();

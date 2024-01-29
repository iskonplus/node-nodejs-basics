import { createReadStream } from 'fs';

const read = async () => {
    const readFileStream = createReadStream('./src/streams/files/fileToRead.txt');
    readFileStream.pipe(process.stdout);
};

await read();
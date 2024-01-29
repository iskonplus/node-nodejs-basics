import  fs from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {

    fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        console.log(createHash('sha256').update(data).digest('hex'));
    });
};

await calculateHash();
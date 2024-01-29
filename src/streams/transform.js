import { Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      const reversData = chunk.toString().split('').reverse().join('')+ '\n';
      callback(null, reversData);
    },
  });
    process.stdin.pipe(transformStream)
    transformStream.pipe(process.stdout);
};

await transform();
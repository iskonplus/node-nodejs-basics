import { Transform } from 'stream';

const transform = async () => {

  const transformStream = new Transform({
    transform(chunk, enc, cb) {
      cb(null, chunk.toString().split('').reverse().join(''));
    }
  });

  process.stdin
    .on('error', err => console.error(err))
    .pipe(transformStream)
    .pipe(process.stdout)

};

await transform();

import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {

  const cores = cpus().length;
  const startFrom = 10;
  const workerURL = new URL('./worker.js', import.meta.url);

  const tasks = Array.from({ length: cores }, (_, i) =>
    new Promise((resolve) => {

      const worker = new Worker(workerURL, { type: 'module' });

      const onSuccess = (value) => {
        resolve({ status: 'resolved', data: value });
        worker.terminate();
      };

      const onError = () => {
        resolve({ status: 'error', data: null });
        worker.terminate();
      };

      worker.once('message', onSuccess);
      worker.once('error', onError);
      worker.once('exit', (code) => {
        if (code !== 0) onError();
      });

      worker.postMessage(startFrom + i);
    })
  );

  const results = await Promise.all(tasks);

  console.log(results);
  
};

await performCalculations();

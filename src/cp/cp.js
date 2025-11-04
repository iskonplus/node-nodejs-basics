import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const scriptPath = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args = []) => {
  
  const child = spawn(process.execPath, [scriptPath, ...args], {

    stdio: ['pipe', 'pipe', 'inherit'], 
  });

  
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  const cleanup = () => {

    try { process.stdin.unpipe(child.stdin); }
    catch { }
    try { child.stdout.unpipe(process.stdout); }
    catch { }

  };

  child.on('close', cleanup);
  child.on('error', cleanup);

  return child;

};


// Put your arguments in function call to test this functionality
spawnChildProcess(  /*['Artur', 'Tamashevich'] */);



const parseArgs = () => {
   const res = [];
   process.argv.forEach(el => {
      if (el.startsWith('--')) {
         res.push(`${el.split('=')[0].slice(2)} is ${el.split('=')[1]}`)
      }
   });

   console.log(res.join(', '));

};

parseArgs();

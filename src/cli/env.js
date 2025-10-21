const parseEnv = () => {

  const rssVars = process.env;
  const result = [];

  for (const key in rssVars) {
    if (key.startsWith('RSS_')) {
      result.push(`${key}=${rssVars[key]}`);
    }
  }

  console.log(result.join('; '));
};

parseEnv();
